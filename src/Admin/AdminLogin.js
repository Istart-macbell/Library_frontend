import React, { useState } from "react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill in both fields.");
      return;
    }
    setError("");
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Combined Form and Image Section */}
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Admin Login</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://th.bing.com/th/id/R.88c78d17bb9bc202edc0c1fc2eb38f32?rik=LkUyQO64xeKtbw&riu=http%3a%2f%2fwww.elitetechnocrats.com%2fimages%2fsoftware_devlopment.gif&ehk=YodmvmR9%2bjfFjYiNP4IJuZaoDE8FXm0N%2fYG72mKdRKs%3d&risl=&pid=ImgRaw&r=0"
            alt="Admin Login Illustration"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
