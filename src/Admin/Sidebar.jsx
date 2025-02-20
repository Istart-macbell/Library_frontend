import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserTie, FaUserGraduate, FaBook, FaCog, FaDoorOpen, FaChalkboardTeacher } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import axios from "axios";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handledLogout = async () => {
    try {
      const response = await axios.post("https://library-backend-4335.onrender.com/api/admin/admin-logout", null, {
        withCredentials: true, 
      }
    );

      if (response.status === 200) {
        alert("Logout successful!");
        navigate("/admin-login");
      } else {
        alert("Failed to logout. Please try again.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("An error occurred during logout. Please try again.");
    }
  };

  return (
    <div className="relative z-30 h-screen">
      {/* Sidebar Toggle Button */}

      <div className="mb-10 fixed top-0 w-full bg-[#7E22CE] h-[9vh] text-white font-bold text-lg flex px-5 items-center justify-between  lg:hidden">
          <h1 className="text-left">Admin Dashboard</h1>
          <button
          className=" z-50 flex items-center justify-center w-12 h-12  text-white rounded-full shadow-lg lg:hidden"
          onClick={toggleSidebar}
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>
      

      

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:static lg:w-64`}
      >
        {/* Sidebar Header */}
        <div className="p-6 bg-gray-800 border-b border-gray-700">
          <h2
            className="text-2xl font-bold cursor-pointer hover:text-gray-400"
            onClick={() => navigate("/")}
          >
            Dashboard
          </h2>
        </div>

        {/* Sidebar Menu */}
        <ul className="space-y-4 py-6">
          {/* Administration Section */}
          <li>
            <div
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => navigate("/")}
              >
              <FaUserTie />
              <span>Administration</span>
            </div>
          </li>

          {/* Staff Section */}
          <li>
            <div
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => toggleSection("staff")}
            >
              <FaChalkboardTeacher />
              <span>Staff</span>
              {openSection === "staff" ? <IoMdArrowDropup className="ml-auto" /> : <IoMdArrowDropdown className="ml-auto" />}
            </div>
            {openSection === "staff" && (
              <ul className="pl-8 space-y-2">
                <li
                  className="hover:text-gray-400 cursor-pointer"
                  onClick={() => navigate("/staffs")}
                >
                  All Staff
                </li>
                <li
                  className="hover:text-gray-400 cursor-pointer"
                  onClick={() => navigate("/add-staff")}
                >
                  Add Staff
                </li>
                <li
                  className="hover:text-gray-400 cursor-pointer"
                  onClick={() => navigate("/staffsalary")}
                >
                  Staff salary
                </li>
              </ul>
            )}
          </li>

          {/* Student Section */}
          <li>
            <div
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => toggleSection("student")}
            >
              <FaUserGraduate />
              <span>Student</span>
              {openSection === "student" ? <IoMdArrowDropup className="ml-auto" /> : <IoMdArrowDropdown className="ml-auto" />}
            </div>
            {openSection === "student" && (
              <ul className="pl-8 space-y-2">
                <li
                  className="hover:text-gray-400 cursor-pointer"
                  onClick={() => navigate("/user-table")}
                >
                  All Students
                </li>
                <li
                  className="hover:text-gray-400 cursor-pointer"
                  onClick={() => navigate("/add-user")}
                >
                  Add Student
                </li>
                <li
                  className="hover:text-gray-400 cursor-pointer"
                  onClick={() => navigate("/studentfees")}
                >
                  Fee
                </li>
              </ul>
            )}
          </li>


                    {/* Plans */}
                    <li>
                    <div
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => toggleSection("plan")}
                    >
                      <FaUserGraduate />
                      <span>Plans</span>
                      {openSection === "plan" ? <IoMdArrowDropup className="ml-auto" /> : <IoMdArrowDropdown className="ml-auto" />}
                    </div>
                    {openSection === "plan" && (
                      <ul className="pl-8 space-y-2">
                        <li
                          className="hover:text-gray-400 cursor-pointer"
                          onClick={() => navigate("/plans")}
                        >
                          All Plans
                        </li>
                        <li
                          className="hover:text-gray-400 cursor-pointer"
                          onClick={() => navigate("/user-plans")}
                        >
                          Users Plans
                        </li>
                        <li
                          className="hover:text-gray-400 cursor-pointer"
                          onClick={() => navigate("/add-plan")}
                        >
                          Add Plan
                        </li>
                      </ul>
                    )}
                  </li>

          {/* Books Section */}
          <li>
            <div
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => toggleSection("book")}
            >
              <FaBook />
              <span>Books</span>
              {openSection === "book" ? <IoMdArrowDropup className="ml-auto" /> : <IoMdArrowDropdown className="ml-auto" />}
            </div>
            {openSection === "book" && (
              <ul className="pl-8 space-y-2">
                <li
                  className="hover:text-gray-400 cursor-pointer"
                  onClick={() => navigate("/booktable")}
                >
                  All Books
                </li>
                <li
                  className="hover:text-gray-400 cursor-pointer"
                  onClick={() => navigate("/addbook")}
                >
                  Add Book
                </li>
              </ul>
            )}
          </li>

          {/* Settings */}
          <li
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => navigate("/setting")}
          >
            <FaCog />
            <span>Settings</span>
          </li>

          {/* Logout */}
          <li
            className="absolute bottom-4 flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
          >
            <FaDoorOpen />
            <span onClick={handledLogout}>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
