import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate(); // For navigation after successful signup

  // Handle form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    
    // Reset error state before sending the request
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://library-backend-4335.onrender.com/api/admin/admin-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name:fullname,
          email:email,
          password:password,
        }),
      });

      const data = await response.json();
      // console.log(data);
      

      // response checking
      if (response.ok) {

        // storing the token
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("adminId", data.data._id);

        // redirecting
        navigate("/admin-login");
      } else {
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-10">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 md:p-10 space-y-6 md:space-y-0 md:space-x-10 w-full max-w-4xl"
      >
        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Admin Sign Up
          </h2>
          <form className="space-y-4">
            <div>
              <label
                className="block text-gray-600 font-medium mb-1"
                htmlFor="fullname"
              >
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
              <label
                className="block text-gray-600 font-medium mb-1"
                htmlFor="email"
              >
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
              <label
                className="block text-gray-600 font-medium mb-1"
                htmlFor="password"
              >
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
              onClick={(e)=>handleSignup(e)}
              className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Illustration Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="signup.webp"
            alt="Signup Illustration"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
