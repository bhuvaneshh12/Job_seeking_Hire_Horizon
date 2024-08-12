// src/Admin/AdminLogin.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Adminlogin.css';
import logo from './logo2.jpeg';
import facebookLogo from './download.png';
import iconsLogo from './icons.jpg';
import instagramLogo from './instagram.jpg';
import background from './img2.avif';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);

    if (password !== '123456789') {
      setError('Incorrect password. Please try again.');
    } else {
      setError('');
      console.log('Login successful');
      navigate('/admin-dashboard'); // Navigate to AdminDashboard after successful login
    }
  };

  return (
    <div className="login-container">
      <div className="logo-name-container">
        <img src={logo} alt="Logo" />
        <h1>Hire Horizon</h1>
      </div>
      <div className="background-image" style={{ backgroundImage: `url(${background})` }}></div>
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Admin Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <a href="#forgot-password" className="forgot-password">Forgot Password?</a>
        <button type="submit" className="submit">Login</button>
        <div className="social-icons">
          <img src={facebookLogo} alt="Facebook" />
          <img src={iconsLogo} alt="Icons" />
          <img src={instagramLogo} alt="Instagram" />
        </div>
        <div className="links-container">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
          <p><Link to="/login" className="switch-to-user">Switch to User</Link></p>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
