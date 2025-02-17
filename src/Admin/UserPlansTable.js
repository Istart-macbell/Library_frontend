import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const UserPlansTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserPlans = async () => {
      try {
        const response = await fetch("https://library-backend-4335.onrender.com/api/admin/user-plans");
        if (!response.ok) {
          throw new Error("Failed to fetch user plans");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPlans();
  }, []);

  const togglePlanStatus = async (userId, planId, currentStatus) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active"; // Toggle status

    try {
      const response = await fetch("https://library-backend-4335.onrender.com/api/admin/status", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          planId,
          status: newStatus,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update plan status");
      }

      // Update the state after successful status update
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId
            ? {
                ...user,
                myPlan: user.myPlan.map((plan) =>
                  plan._id === planId ? { ...plan, status: newStatus } : plan
                ),
              }
            : user
        )
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex min-h-screen">
    {/* Sidebar */}
    <Sidebar />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-xl font-bold text-blue-800 mb-8 mt-12">User Plans</h1>

      {loading && <p className="text-lg text-gray-700">Loading user plans...</p>}
      {error && <p className="text-lg text-red-600">Error: {error}</p>}

      <div className="overflow-x-auto w-full max-w-6xl">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-3 px-6 text-left">First Name</th>
              <th className="py-3 px-6 text-left">Last Name</th>
              <th className="py-3 px-6 text-left">Joining Date</th>
              <th className="py-3 px-6 text-left">Plans</th>
              <th className="py-3 px-6 text-left">Status</th> {/* New column for status */}
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b">
                <td className="py-3 px-6">{user.firstName || "-"}</td>
                <td className="py-3 px-6">{user.lastName || "-"}</td>
                <td className="py-3 px-6">
                  {user.joiningDate ? new Date(user.joiningDate).toLocaleDateString() : "-"}
                </td>
                <td className="py-3 px-6">
                  {user.myPlan.length > 0 ? (
                    user.myPlan.map((plan) => (
                      <div key={plan._id} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-lg mb-1 inline-block">
                        {plan.name} (₹{plan.price})
                      </div>
                    ))
                  ) : (
                    <span className="text-gray-500">No Plan</span>
                  )}
                </td>
                <td className="py-3 px-6">
                  {user.myPlan.length > 0 ? (
                    user.myPlan.map((plan) => (
                      <span
                        key={plan._id}
                        className={`px-2 py-1 rounded-lg ${
                          plan.status === "active"
                            ? "bg-green-100 text-green-700"
                            : plan.status === "inactive"
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-100 text-gray-700" // Fallback for undefined status
                        }`}
                      >
                        {plan.status
                          ? plan.status.charAt(0).toUpperCase() + plan.status.slice(1) // Capitalize status
                          : "Unknown Status"} {/* Display fallback text if status is undefined */}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500">No Plan</span>
                  )}
                </td>
                <td className="py-3 px-6 space-x-2">
                  {user.myPlan.map((plan) => (
                    <label key={plan._id} className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={plan.status === "active"}
                        onChange={() => togglePlanStatus(user._id, plan._id, plan.status)}
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 dark:peer-focus:ring-blue-800 after:content-[''] after:absolute after:top-0.5 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600 peer-checked:after:translate-x-5"></div>
                    </label>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default UserPlansTable;
