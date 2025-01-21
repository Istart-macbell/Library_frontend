import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-wrap items-center justify-center h-screen bg-gray-100 px-10">
    {/* Form Section */}
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="w-full md:w-1/2 p-8 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Admin Sign Up
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-600 font-medium mb-1" htmlFor="fullname">
            Full Name
          </label>
          <input
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            type="text"
            id="fullname"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Sign Up
        </button>
      </form>
    </motion.div>

    {/* Illustration Section */}
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="w-full md:w-1/2 flex justify-center"
    >
      <img
        src="signup.webp"
        alt="Signup Illustration"
        className="max-w-full h-auto"
      />
    </motion.div>
  </div>
  );
};

export default Signup;
