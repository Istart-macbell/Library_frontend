import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="space-x-4">
        <button
          className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-purple-100 transition"
          onClick={() => navigate("/admin-login")}
        >
          Login
        </button>
        <button
          className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-purple-100 transition"
          onClick={() => navigate("/signup")}
        >
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
