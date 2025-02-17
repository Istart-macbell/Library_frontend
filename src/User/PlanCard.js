import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import UserSidebar from "./Usersidebar";

const PlanCard = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [choosingPlan, setChoosingPlan] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [message, setMessage] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const userId = "67913edaf9485784e65b21ed"; // Replace with actual logged-in user ID

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/admin/get-plans");
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

  const handleChoosePlan = async (planId) => {
    setChoosingPlan(true);
    setSelectedPlan(planId);
    setMessage(null);

    try {
      const response = await fetch("https://library-backend-4335.onrender.com/api/user/choose-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, planId }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to choose plan");
      }

      setMessage({ type: "success", text: "Plan chosen successfully!" });
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setChoosingPlan(false);
    }
  };

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar Overlay for Mobile */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}
        onClick={toggleSidebar}
        style={{ zIndex: 999 }} // Ensure the overlay appears above the content
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ zIndex: 1000 }} // Ensure the sidebar appears above the content
      >
        <UserSidebar />
      </div>

      {/* Main Content */}
      <div className={`flex-grow overflow-y-auto lg:ml-64 ${isSidebarOpen ? "ml-64" : ""}`}>
        {/* Mobile Header with Sidebar Toggle */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-3 shadow-lg lg:hidden">
          <h1 className="text-sm font-semibold">Choose Your Plan</h1>
          <button onClick={toggleSidebar} className="text-xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">

          {loading && <p className="text-sm text-gray-700">Loading plans...</p>}
          {error && <p className="text-sm text-red-600">Error: {error}</p>}

          {message && (
            <div
              className={`mb-4 p-3 rounded-lg text-white text-sm ${message.type === "success" ? "bg-green-500" : "bg-red-500"}`}
            >
              {message.text}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {!loading &&
              !error &&
              plans.map((plan) => (
                <div
                  key={plan._id}
                  className="bg-white p-4 rounded-xl shadow-md hover:scale-105 transition transform duration-300"
                >
                  <h2 className="text-base font-bold text-gray-800 mb-3">{plan.name}</h2>
                  <p className="text-sm font-semibold text-blue-600 mb-3">₹{plan.price}/month</p>

                  <ul className="mb-4 space-y-1">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-center">
                        ✅ <span className="ml-1">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="w-full py-2 bg-blue-900 text-white font-bold text-sm rounded-lg hover:bg-blue-950 transition duration-300 disabled:bg-gray-400"
                    disabled={choosingPlan && selectedPlan === plan._id}
                    onClick={() => handleChoosePlan(plan._id)}
                  >
                    {choosingPlan && selectedPlan === plan._id ? "Processing..." : "Choose Now"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
