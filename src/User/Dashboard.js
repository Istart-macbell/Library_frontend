import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserSidebar from "../User/Usersidebar";

const categories = [
  { img: "https://media1.tenor.com/images/107e39e6cccecb07771733a383291bd9/tenor.gif?itemid=12632259", name: "Books", link: "/student-booklist" },
  { img: "https://cdn-icons-gif.flaticon.com/9908/9908553.gif", name: "My Fees", link: "/myfees" },
  { img: "https://th.bing.com/th/id/OIP.dFOFZHZDq8LlDW7JQ-ft2AHaHa?pid=ImgDet&w=191&h=191&c=7", name: "Choose Plans", link: "/plans-card" },
  { img: "https://www.timecamp.com/blog/wp-content/uploads/2021/03/Gif-Time-Blocking-1.gif", name: "My Plans", link: "/my-plans" },
  { img: "https://cdnl.iconscout.com/lottie/premium/thumb/female-user-profile-5273097-4424674.gif", name: "My Profile", link: "/user-profile" },
];

const UserDashboard = () => {
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
        <UserSidebar />
      </div>

      {/* Main Content */}
      <div className={`flex-grow overflow-y-auto lg:ml-64 ${isSidebarOpen ? "ml-64" : ""}`}>
        {/* Mobile Header with Sidebar Toggle */}
        <div className="flex items-center justify-between bg-purple-700 text-white p-3 shadow-lg lg:hidden">
          <h1 className="text-sm font-semibold">User Dashboard</h1>
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

export default UserDashboard;
