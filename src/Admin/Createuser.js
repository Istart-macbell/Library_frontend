import React from 'react';

const CreateUser = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
                <h1 className="text-2xl font-bold mb-6">Create User</h1>
                <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* First Name */}
                    <div className="flex flex-col">
                        <label htmlFor="firstName" className="mb-2 font-semibold">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter first name"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col">
                        <label htmlFor="lastName" className="mb-2 font-semibold">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter last name"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 font-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter email"
                        />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="mb-2 font-semibold">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter phone number"
                        />
                    </div>

                    {/* Date of Birth */}
                    <div className="flex flex-col">
                        <label htmlFor="dateOfBirth" className="mb-2 font-semibold">Date of Birth</label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Address */}
                    <div className="flex flex-col">
                        <label htmlFor="address" className="mb-2 font-semibold">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter address"
                        />
                    </div>

                    {/* Joining Date */}
                    <div className="flex flex-col">
                        <label htmlFor="joiningDate" className="mb-2 font-semibold">Joining Date</label>
                        <input
                            type="date"
                            id="joiningDate"
                            name="joiningDate"
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </form>

                <div className="mt-6 text-right">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Create User
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;
