// src/Login/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css'; // Changed the CSS import
import logo from './logo2.jpeg';
import facebookLogo from './download.png';
import iconsLogo from './icons.jpg';
import instagramLogo from './instagram.jpg';
import background from './img2.avif';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9001/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Successful login
        console.log('Login successful:', response.data);
        navigate('/home'); // Redirect to home or dashboard
      }
    } catch (err) {
      console.error('Login error:', err.response ? err.response.data : err.message);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="star-container">
      <div className="star-logo-name-container">
        <img src={logo} alt="Logo" />
        <h1>Hire Horizon</h1>
      </div>
      <div className="star-background-image" style={{ backgroundImage: `url(${background})` }}></div>
      <form onSubmit={handleSubmit} className="star-login-form">
        <h2>Login</h2>
        <div className="star-form-group">
          <label1 htmlFor="email">Email:</label1>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="star-form-group">
          <label1 htmlFor="password">Password:</label1>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="star-error-message">{error}</p>}
        <a href="#forgot-password" className="star-forgot-password">Forgot Password?</a>
        <button type="submit" className="star-submit">Login</button>
        <div className="star-social-icons">
          <img src={facebookLogo} alt="Facebook" />
          <img src={iconsLogo} alt="Icons" />
          <img src={instagramLogo} alt="Instagram" />
        </div>
        <div className="star-links-container1">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
          <p><Link to="/admin-login" className="star-switch-to-admin1">Switch to Admin</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
