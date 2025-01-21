import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import UserSidebar from './Usersidebar';

const UserDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex">
            {/* Sidebar for larger screens */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div>
            <div
                className={`fixed z-20 inset-y-0 left-0 transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:relative md:w-64`}
            >
                <UserSidebar />
            </div>

            {/* Main Content */}
            <div className="p-6 bg-gray-100 min-h-screen flex-1 md:ml-64">
                {/* Menu Icon for small screens */}
                <div className="md:hidden flex justify-end mb-4">
                    <button
                        className="text-black bg-white p-2 rounded-full shadow-md focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        <FaBars size={24} />
                    </button>
                </div>

                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Total Books */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Total Books</h2>
                        <p className="text-3xl font-bold">1,200</p>
                    </div>

                    {/* Total Fees */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Total Fees</h2>
                        <p className="text-3xl font-bold">₹25,000</p>
                    </div>

                    {/* Joining Date */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Joining Date</h2>
                        <p className="text-3xl font-bold">01 Jan 2023</p>
                    </div>

                    {/* Placeholder for future stats */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Additional Stats</h2>
                        <p className="text-3xl font-bold">Coming Soon</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;




              


            
          



       

