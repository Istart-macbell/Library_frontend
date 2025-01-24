import React from 'react';

const UserProfile = () => {

    const user = {
        status: "active",
        id: "67913edaf9485784e65b21ed",
        role: "User",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password:"jash@123",
        phone: "1234567890",
        dateOfBirth: "1990-01-01",
        joiningDate: "2025-01-22",
        fees: [],
    };

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
                        <h3 className="text-lg font-semibold text-gray-700">Password</h3>
                        <p className="text-gray-600">{user.password}</p>
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
