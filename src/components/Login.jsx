
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-600 via-cyan-500 to-blue-400">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4 animate__animated animate__fadeIn">
          Staff Login
        </h2>
        {error && (
          <div className="p-3 text-red-600 bg-red-100 rounded-md shadow-sm">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
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
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
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
            className={`w-full p-3 mt-5 text-white bg-teal-600 rounded-md hover:bg-teal-700 transition duration-200 transform ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

