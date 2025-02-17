// Importing necessary modules
import React from 'react';
import { FaHome, FaBook, FaMoneyBill, FaUserCircle, FaSignOutAlt, FaClipboardList, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserSidebar = () => {
    return (
        <div className="h-screen bg-black text-white w-64 flex flex-col justify-between">
            <div className="space-y-6 p-4">
                {/* Logo or Branding */}
                <h1 className="text-2xl font-bold text-center">Library</h1>

                {/* Menu Sections */}
                <nav>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-3 hover:text-gray-400 cursor-pointer">
                        <Link to="/user-dashboard" className="flex items-center space-x-3">
                            <FaHome />
                            <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="flex items-center space-x-3 hover:text-gray-400 cursor-pointer">
                            <FaBook />
                            <span>Books</span>
                        </li>
                        <li className="flex items-center space-x-3 hover:text-gray-400 cursor-pointer">
                        <Link to="/myfees" className="flex items-center space-x-3">
                            <FaMoneyBill />
                            <span>Fees</span>
                            </Link>
                        </li>
                        <li className="flex items-center space-x-3 hover:text-gray-400 cursor-pointer">
                        <Link to="/user-profile" className="flex items-center space-x-3">
                            <FaUserCircle />
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li className="flex items-center space-x-3 hover:text-gray-400 cursor-pointer">
                    <Link to="/plans-card" className="flex items-center space-x-3">
                      <FaCog /> {/* Changed the icon */}
                      <span>Plans</span>
                    </Link>
                  </li>
                  
                  <li className="flex items-center space-x-3 hover:text-gray-400 cursor-pointer">
                    <Link to="/my-plans" className="flex items-center space-x-3">
                      <FaClipboardList /> {/* Changed the icon */}
                      <span>My Plans</span>
                    </Link>
                  </li>                   
                    </ul>
                </nav>
            </div>

            {/* Logout Section */}
            <div className="p-4">
                <div className="flex items-center space-x-3 hover:text-gray-400 cursor-pointer">
                    <FaSignOutAlt />
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
};

export default  UserSidebar;





               
