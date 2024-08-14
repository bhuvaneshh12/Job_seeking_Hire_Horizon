import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
// import logo from './logo.jpg'; // Ensure you have a logo image in this path
import backgroundVideo from './video.mp4'; // Ensure you have a video file in this path

const Landing = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/login');
  };

  return (
    <div className="landing">
      <div className="overlay"></div>
      <video className="background-video" autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-container">
        {/* <img src={logo} alt="Hire Horizon Logo" className="logo" /> */}
        <header className="landing-header">
          <h1>Hire Horizon</h1>
          <p>Welcome to Job Seeker's Portal</p>
          <p>Your dream job is just a click away!</p>
          <button className="apply-button" onClick={handleApplyClick}>
            Apply Now
          </button>
        </header>
      </div>
    </div>
  );
};

export default Landing;
