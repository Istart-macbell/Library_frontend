import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Mobile sidebar icons
import UserSidebar from "./Usersidebar";

const MyPlans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state
  const [currentPage, setCurrentPage] = useState(1);
  const plansPerPage = 2;

  const userId = "67913edaf9485784e65b21ed"; // Replace with actual logged-in user ID

  useEffect(() => {
    const fetchUserPlans = async () => {
      try {
        const response = await fetch(`https://library-backend-4335.onrender.com/api/user/my-plans/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user plans");
        }
        const data = await response.json();
        setPlans(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPlans();
  }, []);

  // Toggle Sidebar for Mobile View
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // Pagination Logic
  const indexOfLastPlan = currentPage * plansPerPage;
  const indexOfFirstPlan = indexOfLastPlan - plansPerPage;
  const currentPlans = plans.slice(indexOfFirstPlan, indexOfLastPlan);

  const nextPage = () => {
    if (currentPage < Math.ceil(plans.length / plansPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar and Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <UserSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow overflow-y-auto lg:ml-64">
        {/* Mobile Header with Sidebar Toggle */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
          <h1 className="text-lg font-bold">My Plans</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
          {loading && <p className="text-lg text-gray-700">Loading plans...</p>}
          {error && <p className="text-lg text-red-600">Error: {error}</p>}

          <div className="overflow-x-auto w-full max-w-6xl">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="py-3 px-6 text-left">Plan Name</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-left">Features</th>
                  <th className="py-3 px-6 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {currentPlans.map((plan) => (
                  <tr key={plan._id} className="border-b">
                    <td className="py-3 px-6">{plan.name}</td>
                    <td className="py-3 px-6">₹{plan.price}/month</td>
                    <td className="py-3 px-6">
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="text-gray-600">✅ {feature}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-3 px-6">
                      <span
                        className={`px-2 py-1 rounded-lg ${plan.status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                      >
                        {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center space-x-4 mt-4">
            <button onClick={prevPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50">
              Previous
            </button>
            <span className="text-lg font-semibold">Page {currentPage}</span>
            <button onClick={nextPage} disabled={currentPage >= Math.ceil(plans.length / plansPerPage)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlans;
