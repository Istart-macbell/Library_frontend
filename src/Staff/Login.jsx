import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    setIsLoading(true);

    // Simulate a login request
    setTimeout(() => {
      setIsLoading(false);
      // Simulate a failed login
      if (email !== 'staff@example.com' || password !== 'password123') {
        setError('Invalid email or password.');
      } else {
        // Handle successful login (e.g., redirect to dashboard)
        console.log('Login successful!');
      }
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Staff Login</h2>
          {error && (
            <div className="p-3 text-red-600 bg-red-100 rounded-md shadow-sm">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-teal-500 focus:border-teal-600 transition duration-200"
                placeholder="you@domain.com"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-teal-500 focus:border-teal-600 transition duration-200"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className={`w-full p-3 text-white bg-teal-600 rounded-md hover:bg-teal-700 transition duration-200 transform ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center p-4 md:p-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/689/228/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
            alt="Staff Login Illustration"
            className="object-cover w-full h-auto rounded-lg md:rounded-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
