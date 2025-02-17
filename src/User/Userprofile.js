import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"; // Sidebar icons
import UserSidebar from '../User/Usersidebar';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

    useEffect(() => {
        axios.get("https://library-backend-4335.onrender.com/api/user/get-user/67913edaf9485784e65b21ed")
            .then((response) => {
                if (response.data.message === "User fetched successfully") {
                    setUser(response.data.user);
                } else {
                    setError("Failed to fetch user data");
                }
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load user data");
                setLoading(false);
            });
    }, []);

    // Toggle Sidebar
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    if (loading) return <div className="flex items-center justify-center min-h-screen"><p className="text-gray-500">Loading user profile...</p></div>;
    if (error) return <div className="flex items-center justify-center min-h-screen"><p className="text-red-500">{error}</p></div>;

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
            {/* Sidebar Overlay for Mobile */}
            <div
                className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}
                onClick={toggleSidebar}
            ></div>

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <UserSidebar />
            </div>

            {/* Main Content */}
            <div className="flex-grow lg:ml-64">
                {/* Mobile Header with Sidebar Toggle */}
                <div className="flex items-center justify-between bg-blue-700 text-white p-4 shadow-lg lg:hidden">
                    <h1 className="text-lg font-bold">User Profile</h1>
                    <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                <div className="flex flex-col items-center justify-center p-6"
                    style={{
                        backgroundImage: `url('https://source.unsplash.com/1600x900/?technology,abstract')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="w-full max-w-3xl p-6 md:p-8 bg-white rounded-lg shadow-xl">
                        <div className="flex flex-col md:flex-row items-center mb-6 space-y-4 md:space-y-0 md:space-x-6">
                            <div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 text-2xl md:text-3xl font-bold text-white rounded-full shadow-md bg-gradient-to-br from-blue-500 to-purple-600">
                                {user.firstName[0]}{user.lastName[0]}
                            </div>
                            <div className="text-center md:text-left">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                                    {user.firstName} {user.lastName}
                                </h2>
                                <p className="text-gray-600">Role: {user.role}</p>
                                <p className="text-green-500">{user.status}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
                            <div className="p-4 border rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                                <p className="text-gray-600">{user.email}</p>
                            </div>
                            <div className="p-4 border rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
                                <p className="text-gray-600">{user.phone}</p>
                            </div>
                            <div className="p-4 border rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-700">Date of Birth</h3>
                                <p className="text-gray-600">{new Date(user.dateOfBirth).toLocaleDateString()}</p>
                            </div>
                            <div className="p-4 border rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-700">Joining Date</h3>
                                <p className="text-gray-600">{new Date(user.joiningDate).toLocaleDateString()}</p>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <button className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
