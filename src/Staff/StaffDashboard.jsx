import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import StaffSidebar from './StaffSidebar';
import StaffCard from './StaffCard';

const StaffDashboard = () => {
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
                <StaffSidebar />
            </div>

            {/* Main Content */}
            <div className="p-6 bg-gray-100 min-h-screen flex-1">
                {/* Menu Icon for small screens */}
                <div className="md:hidden flex justify-end mb-4">
                    <button
                        className="text-black bg-white p-2 rounded-full shadow-md focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        <FaBars size={24} />
                    </button>
                </div>

                <h1 className="text-3xl font-bold mb-6">Staff Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                    <StaffCard header="Salary" value="10,000"/>
                    <StaffCard header="Joining Date" value="January 2025"/>
                    <StaffCard header="Meetings Pending" value="5"/>
                    <StaffCard header="Meetings Completed" value="3"/>

                </div>
            </div>
        </div>
    );
};

export default StaffDashboard;