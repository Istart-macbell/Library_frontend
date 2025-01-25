import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StaffProfile = () => {
    const [staffDetails, setStaffDetails] = useState(null);

    useEffect(() => {
        // Fetch the staff data when the component mounts
        const fetchStaffDetails = async () => {
            try {
                const response = await axios.get('https://library-backend-4335.onrender.com/api/staff/staff-profile/6790e6ebeaaff4463a0fb813');
                setStaffDetails(response.data.staffDetails); // Set the response data to state
            } catch (error) {
                console.error('Error fetching staff details:', error);
            }
        };

        fetchStaffDetails();
    }, []);

    if (!staffDetails) {
        return <div>Loading...</div>; // Display a loading message while data is being fetched
    }

    return (
        <div
            className="flex items-center justify-center min-h-screen p-6"
            style={{
                backgroundImage: `url('https://source.unsplash.com/1600x900/?technology,abstract')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Profile Card */}
            <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-xl">
                {/* Profile Header */}
                <div className="flex items-center mb-8 space-x-6">
                    <div className="w-24 h-24 flex items-center justify-center text-3xl font-bold text-white rounded-full shadow-md bg-gradient-to-br from-blue-500 to-purple-600">
                        {staffDetails.firstName[0]}
                        {staffDetails.lastName[0]}
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800">
                            {staffDetails.firstName} {staffDetails.lastName}
                        </h2>
                        <p className="text-gray-600">Position: {staffDetails.position}</p>
                        <p className="text-green-500">{staffDetails.status}</p>
                    </div>
                </div>

                {/* Profile Details */}
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
                        <ul className="list-disc pl-5 space-y-1">
                            {staffDetails.qualifications.map((qualification, index) => (
                                <li key={index}>{qualification}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <button className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600">
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StaffProfile;
