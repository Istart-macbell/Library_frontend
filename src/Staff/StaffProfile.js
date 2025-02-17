import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StaffSidebar from './StaffSidebar';
import { FaBars, FaTimes } from 'react-icons/fa'; // Mobile sidebar icons

const StaffProfile = () => {
    const [staffDetails, setStaffDetails] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state

    useEffect(() => {
        // Fetch the staff data when the component mounts
        const fetchStaffDetails = async () => {
            try {
                const response = await axios.get('https://library-backend-4335.onrender.com/api/staff/staff-profile/6790e6ebeaaff4463a0fb813');
                setStaffDetails(response.data.staffDetails);
            } catch (error) {
                console.error('Error fetching staff details:', error);
            }
        };

        fetchStaffDetails();
    }, []);

    if (!staffDetails) {
        return <div>Loading...</div>;
    }

    // Toggle Sidebar for Mobile View
    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar and Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}
                onClick={toggleSidebar}
            ></div>

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 bg-white shadow-lg transform lg:transform-none lg:relative w-64 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <StaffSidebar />
            </div>

            {/* Main Content */}
            <div className="flex-grow overflow-y-auto lg:ml-64">
                {/* Mobile Header with Sidebar Toggle */}
                <div className="flex items-center justify-between bg-purple-700 text-white p-4 shadow-lg lg:hidden">
                    <h1 className="text-lg font-bold">Staff Profile</h1>
                    <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
                        {isSidebarOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
                    <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-xl">
                        <div className="flex items-center mb-8 space-x-6">
                            <div className="flex items-center justify-center w-24 h-24 text-3xl font-bold text-white rounded-full shadow-md bg-gradient-to-br from-blue-500 to-purple-600">
                                {staffDetails.firstName[0]}{staffDetails.lastName[0]}
                            </div>
                            <div>
                                <h2 className="text-3xl font-semibold text-gray-800">
                                    {staffDetails.firstName} {staffDetails.lastName}
                                </h2>
                                <p className="text-gray-600">Position: {staffDetails.position}</p>
                                <p className="text-green-500">{staffDetails.status}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="p-4 border rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                                <p className="text-gray-600">{staffDetails.email}</p>
                            </div>
                            <div className="p-4 border rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
                                <p className="text-gray-600">{staffDetails.phone}</p>
                            </div>
                            <div className="p-4 border rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-700">Date of Birth</h3>
                                <p className="text-gray-600">{new Date(staffDetails.dateOfBirth).toLocaleDateString()}</p>
                            </div>
                            <div className="p-4 border rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-700">Joining Date</h3>
                                <p className="text-gray-600">{new Date(staffDetails.joiningDate).toLocaleDateString()}</p>
                            </div>
                            <div className="p-4 border rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-700">Salary</h3>
                                <p className="text-gray-600">${staffDetails.salary.toLocaleString()}</p>
                            </div>
                            <div className="p-4 border rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-700">Qualifications</h3>
                                <ul className="pl-5 space-y-1 list-disc">
                                    {staffDetails.qualifications.map((qualification, index) => (
                                        <li key={index}>{qualification}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
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

export default StaffProfile;
