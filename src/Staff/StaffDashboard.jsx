import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import StaffSidebar from "./StaffSidebar";

const categories = [
  { img: "https://i.pinimg.com/originals/4b/d5/fc/4bd5fc3ce0924cb9c9a5cddc1603bc91.gif", name: "Salary", link: "/my-salary" },
  { img: "https://cdn.dribbble.com/users/1623522/screenshots/4525675/meeting.gif", name: "Meetings", link: "/meetings-pending" },
  { img: "https://gifdb.com/images/high/profile-pic-nerd-guy-looking-around-animation-n8gv5n98rberau49.gif", name: "My Profile", link: "/staff-profile" },
  { img: "https://community.atlassian.com/t5/image/serverpage/image-id/278617i85360A6A61D0E34D/image-size/large?v=v2&px=999", name: "Assigned Tasks", link: "/assigned-tasks" },
];

const StaffDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
        <StaffSidebar />
      </div>

      {/* Main Content */}
      <div className={`flex-grow overflow-y-auto lg:ml-64 ${isSidebarOpen ? "ml-64" : ""}`}>
        {/* Mobile Header with Sidebar Toggle */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-3 shadow-lg lg:hidden">
          <h1 className="text-sm font-semibold">Staff Dashboard</h1>
          <button onClick={toggleSidebar} className="text-xl focus:outline-none">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Main Content */}
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to={category.link} className="text-center">
                <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
                  <img
                    src={category.img}
                    alt={category.name}
                    className="w-32 h-32 mx-auto mb-4 rounded-lg object-cover"
                  />
                  <h2 className="text-xl font-semibold">{category.name}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
