import React from "react";

const UserLoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-6">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full mt-6">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-700">User Login</h1>
          <form className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none focus:border-transparent"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none focus:border-transparent"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              Login
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://img.freepik.com/premium-vector/illustration-cartoon-female-user-entering-login_241107-682.jpg"
            alt="User Login Illustration"
            className="w-full h-auto max-h-64 md:max-h-none object-contain mx-auto mt-4 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default UserLoginPage;
