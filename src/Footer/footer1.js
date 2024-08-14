import React from 'react';
import './footer1.css';
import { Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from './logo.jpg';  // Import the logo

const Footer = () => {
  return (
    <div className="footer">
      <Grid container spacing={3}>
        {/* Logo Section */}
        <Grid item xs={12} md={4} className="footer-logo">
          <img src={Logo} alt="Logo" className="footer-logo-img" />
          <Typography variant="body2" className="footer-logo-description">
          Explore thousands of job opportunities across various industries and connect with top employers.
          </Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} md={4} className="footer-links">
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Link to="/home">
            Home
          </Link><br/>
          <Link to="/job-listing">
            Jobs
          </Link><br/>
          <Link to="/courses">
            Services
          </Link><br/>
          <Link to="/about">
            About Us
          </Link><br/>
        </Grid>

        {/* Contact Information and Social Media Icons */}
        <Grid item xs={12} md={4} className="footer-contact">
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" className="footer-contact-info">
            Sri Krishna college of Technology<br />
            Kovaipudur,Coimbatore.<br />
            Email: bhuvibhuvanesh@gmail.com.<br />
            Phone: 9150303519.
          </Typography>
          <div className="footer-social-icons">
            <IconButton href="#" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <LinkedInIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
