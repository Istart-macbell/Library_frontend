import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Mobile sidebar icons
import UserSidebar from "./Usersidebar";

const MyFees = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state

  useEffect(() => {
    fetch("https://library-backend-4335.onrender.com/api/user/get-user/67913edaf9485784e65b21ed")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  // Toggle Sidebar for Mobile View
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

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
          <h1 className="text-lg font-bold">My Fees</h1>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="p-6 max-w-6xl mx-auto w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">My Fees</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border-t border-b border-gray-300">
              <thead>
                <tr className="bg-gray-800 text-white text-center">
                  <th className="border-b p-3">Amount</th>
                  <th className="border-b p-3">Payment Method</th>
                  <th className="border-b p-3">Remarks</th>
                  <th className="border-b p-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {user.fees.map((fee) => (
                  <tr key={fee._id} className="text-center border-b bg-white hover:bg-gray-100 transition">
                    <td className="p-3">₹{fee.amount}</td>
                    <td className="p-3">{fee.paymentMethod}</td>
                    <td className="p-3">{fee.remarks}</td>
                    <td className="p-3">{new Date(fee.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFees;
