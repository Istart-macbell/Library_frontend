import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRupeeSign, FaUserTie } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { TbBooks } from "react-icons/tb";
import Sidebar from "./Sidebar"; // Assuming Sidebar component is already created
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const dashboardBlocks = [
  { icon: <FaUserTie />, title: "Staff", count: 50 },
  { icon: <PiStudent />, title: "User", count: 200 },
  { icon: <TbBooks />, title: "Books", count: 500 },
  { icon: <FaRupeeSign />, title: "Total Income", count: 2200 },
];

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Graph Data
  const graphData = {
    labels: ["Books", "Borrowed", "Available"],
    datasets: [
      {
        label: "Books Statistics",
        data: [500, 120, 380],
        backgroundColor: ["#4caf50", "#f44336", "#2196f3"],
        borderColor: ["#388e3c", "#d32f2f", "#1976d2"],
        borderWidth: 1,
      },
    ],
  };

  const graphOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Books Statistics",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Categories",
        },
      },
      y: {
        title: {
          display: true,
          text: "Count",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar Overlay for Mobile */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity ${isSidebarOpen ? "block" : "hidden"}`}
        onClick={toggleSidebar}
        style={{ zIndex: 999 }} // Ensure the overlay appears above the content
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ zIndex: 1000 }} // Ensure the sidebar appears above the content
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={`flex-grow overflow-y-auto lg:ml-64 ${isSidebarOpen ? "ml-64" : ""}`}>
        {/* Mobile Header with Sidebar Toggle */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-3 shadow-lg lg:hidden">
          <h1 className="text-sm font-semibold">Admin Dashboard</h1>
          <button onClick={toggleSidebar} className="text-xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Dashboard Blocks */}
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dashboardBlocks.map((block, index) => (
              <div key={index} className="flex justify-center w-full">
                <div className="p-6 border border-gray-300 rounded-lg text-center shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md">
                  <div className="flex items-center justify-center w-full text-4xl">
                    {block.icon}
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-700 mb-4">{block.title}</h2>
                  <p className="text-xl md:text-2xl font-bold text-blue-600">{block.count}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Graph Section */}
          <div className="w-full mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Books Statistics</h2>
            <div className="w-full h-64 sm:h-80 lg:h-[400px]">
              <Bar data={graphData} options={graphOptions} />
            </div>
          </div>

          {/* Content Example */}
          <div className="w-full mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p>Additional content for the admin dashboard can go here. This section can include details like recent activities, notifications, or quick links for admins.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
