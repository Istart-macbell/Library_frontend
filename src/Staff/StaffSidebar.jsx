import React from 'react';
import { CiLogout } from 'react-icons/ci';
import { FaHome, FaTasks, FaUsers, FaCog } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { IoCashOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const StaffSidebar = () => {
    return (
        <div className="bg-white h-full shadow-md w-64">
            <div className="p-4 bg-blue-600 text-white font-bold text-xl">
                Staff Panel
            </div>
            <ul className="mt-4">
                <li className="p-4 hover:bg-blue-100 ">
                    <Link to="/dashboard" className="flex items-center space-x-3">
                        <FaHome />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-blue-100 ">
                    <Link to="/tasks" className="flex items-center space-x-3">
                        <FaTasks />
                        <span>Tasks</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-blue-100 ">
                    <Link to="/staff" className="flex items-center space-x-3">
                        <FaUsers />
                        <span>Staff</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-blue-100 ">
                    <Link to="/meetings" className="flex items-center space-x-3">
                        <FaPeopleGroup />
                        <span>Meetings</span>
                    </Link>
                </li>
                <li className="p-4 hover:bg-blue-100 ">
                    <Link to="/salary" className="flex items-center space-x-3">
                        <IoCashOutline />
                        <span>Salary</span>
                    </Link>
                </li>
                
                <li className="p-4 hover:bg-blue-100 ">
                    <Link to="/settings" className="flex items-center space-x-3">
                        <FaCog />
                        <span>Settings</span>
                    </Link>
                </li>

                <li className="p-4 hover:bg-blue-100 ">
                    <Link to="/staff-login" className="flex items-center space-x-3">
                        <CiLogout />
                        <span>Log out</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default StaffSidebar;
