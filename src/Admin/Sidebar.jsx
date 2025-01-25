import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="relative">
      <button
        className="fixed top-4 right-4 z-50 flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg lg:hidden"
        onClick={toggleSidebar}
      >
        <span className="text-2xl">☰</span>
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:static lg:w-64`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold"
          onClick={()=>navigate('/')}>Dashboard</h2>
        </div>
        <ul className="space-y-4">
          <li>
            <div
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => toggleSection("administration")}
            >
              <span>👩‍💼</span>
              <span>Administration</span>
              <span className="ml-auto">{openSection === "administration" ? "▲" : "▼"}</span>
            </div>
            {openSection === "administration" && (
              <ul className="pl-8 space-y-2">
                <li className="hover:text-gray-400"
                onClick={()=>navigate('/allstaff')}>All Staff</li>
                <li className="hover:text-gray-400"
                onClick={()=>navigate('/addstaff')}>Add Staff</li>
              </ul>
            )}
          </li>

          <li>
            <div
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => toggleSection("student")}
            >
              <span>🎓</span>
              <span>Student</span>
              <span className="ml-auto">{openSection === "student" ? "▲" : "▼"}</span>
            </div>
            {openSection === "student" && (
              <ul className="pl-8 space-y-2">
                <li className="hover:text-gray-400"
                onClick={()=>navigate('/allstudent')}>All Students</li>
                <li className="hover:text-gray-400"
                onClick={()=>navigate('/addstudent')}>Add Student</li>
                <li className="hover:text-gray-400"
                onClick={()=>navigate('/fee')}>Fee</li>
              </ul>
            )}
          </li>

          <li>
            <div
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => toggleSection("book")}
            >
              <span>📚</span>
              <span>Books</span>
              <span className="ml-auto">{openSection === "book" ? "▲" : "▼"}</span>
            </div>
            {openSection === "book" && (
              <ul className="pl-8 space-y-2">
                <li className="hover:text-gray-400"
                onClick={()=>navigate('/allbook')}>All Books</li>
                <li className="hover:text-gray-400"
                onClick={()=>navigate('/addbook')}>Add Book</li>
              </ul>
            )}
          </li>

          <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <span>⚙️</span>
            <span onClick={()=>navigate('/setting')}>Settings</span>
          </li>

          <li className="absolute bottom-4 flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <span>🚪</span>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
