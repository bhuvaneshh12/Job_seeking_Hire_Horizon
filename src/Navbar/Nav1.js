// src/Navbar/Nav1.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav1.css';
import logo from './logo2.jpeg'; // Import your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Hire Horizon Logo" className="navbar-logo-icon" />
        <Link to="/" className="navbar-website-name">HireHorizon</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/job-listing">Jobs</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/courses">Services</Link></li>
        <li><Link to="/dashboard">Company</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
