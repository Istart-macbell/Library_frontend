import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch user data from the API
        axios
            .get("https://library-backend-4335.onrender.com/api/user/get-user/67913edaf9485784e65b21ed")
            .then((response) => {
                if (response.data.message === "User fetched successfully") {
                    setUser(response.data.user);
                } else {
                    setError("Failed to fetch user data");
                }
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to load user data");
                setLoading(false);
            });
    }, []);

    // If loading, show a loading message
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-gray-500">Loading user profile...</p>
            </div>
        );
    }

    // If there is an error, show an error message
    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen p-6"
            style={{
                backgroundImage: `url('https://source.unsplash.com/1600x900/?technology,abstract')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Profile Card */}
            <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-xl">
                {/* Profile Header */}
                <div className="flex items-center mb-8 space-x-6">
                    <div className="flex items-center justify-center w-24 h-24 text-3xl font-bold text-white rounded-full shadow-md bg-gradient-to-br from-blue-500 to-purple-600">
                        {user.firstName[0]}
                        {user.lastName[0]}
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">
                            {user.firstName} {user.lastName}
                        </h2>
                        <p className="text-gray-600">Role: {user.role}</p>
                        <p className="text-green-500">{user.status}</p>
                    </div>
                </div>

                {/* Profile Details */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="p-4 border rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
                        <p className="text-gray-600">{user.phone}</p>
                    </div>
                    <div className="p-4 border rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-700">Password</h3>
                        <p className="text-gray-600">{user.password}</p>
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

export default UserProfile;
