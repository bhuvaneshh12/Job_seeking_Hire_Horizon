// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from './logo2.jpeg'; // Add your logo image path here
import './Navbar.css';

const Navbar = ({ anchorEl, handleMenuClick, handleMenuClose }) => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <img src={logo} alt="Hire Horizon Logo" className="navbar-logo" />
        <Link to="/" className="navbar-title-link">Hire Horizon</Link>
      </div>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="account of current user"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleMenuClick}
        className="navbar-profile-icon"
      >
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>User</MenuItem>
        <MenuItem onClick={handleMenuClose}>Admin</MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
