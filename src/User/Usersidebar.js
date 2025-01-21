// Importing necessary modules
import React from 'react';
import { FaHome, FaBook, FaMoneyBill, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

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
                            <FaHome />
                            <span>Dashboard</span>
                        </li>
                        <li className="flex items-center space-x-3 hover:text-gray-400 cursor-pointer">
                            <FaBook />
                            <span>Books</span>
                        </li>
                        <li className="flex items-center space-x-3 hover:text-gray-400 cursor-pointer">
                            <FaMoneyBill />
                            <span>Fees</span>
                        </li>
                        <li className="flex items-center space-x-3 hover:text-gray-400 cursor-pointer">
                            <FaUserCircle />
                            <span>Profile</span>
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
