import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const AdminPlanCard = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch("https://library-backend-4335.onrender.com/api/admin/get-plans");
        if (!response.ok) {
          throw new Error("Failed to fetch plans");
        }
        const data = await response.json();
        setPlans(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-0 lg:ml-64 p-4 lg:p-8">
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
          <h1 className="text-xl font-bold text-blue-800 mb-8 mt-12">Available Plans</h1>

          {loading && <p className="text-lg text-gray-700">Loading plans...</p>}
          {error && <p className="text-lg text-red-600">Error: {error}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {!loading &&
              !error &&
              plans.map((plan) => (
                <div
                  key={plan._id}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition transform duration-300"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h2>
                  <p className="text-xl font-semibold text-blue-600 mb-4">₹{plan.price}/month</p>

                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="text-gray-600 flex items-center">
                        ✅ <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPlanCard;
