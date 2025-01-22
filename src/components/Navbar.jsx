import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h1>Admin Dashboard</h1>
      <div>
        <button className="btn"
        onClick={()=>navigate('/admin-login')}>Login</button>
        <button className="btn"
        onClick={()=>navigate('/signup')}>Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
