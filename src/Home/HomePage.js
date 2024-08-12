import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

// Import the images
import image1 from '../Home/img 1.jpg';
import image2 from '../Home/img 2.jpg';
import image3 from '../Home/img 3.jpg';
import image4 from '../Home/img 4.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="home-page">
      {/* Add Navbar */}
      {/* <Navbar /> */}

      <div className="home-section">
        <img src={image1} alt="Let the jobs find you" className="image-left" />
        <div className="text-overlay-right">
          <h2>Let the jobs find you</h2>
          <p>Create your free profile to get interview invites and jobs that work for you.</p>
          <button onClick={() => handleClick('/dashboard')}>Get Hired</button>
        </div>
      </div>
      <div className="home-section">
        <div className="text-overlay-left">
          <h2>Your job is personal</h2>
          <p>Tell us more about your goals and we'll match you with the right jobs to help you reach them.</p>
          <button onClick={() => handleClick('/job-listing')}>See Jobs</button>
        </div>
        <img src={image2} alt="Your job is personal" className="image-right" />
      </div>
      <div className="home-section">
        <img src={image3} alt="Skip the paperwork" className="image-left" />
        <div className="text-overlay-right">
          <h2>Skip the paperwork</h2>
          <p>Your profile is your application. Apply to jobs instantly.</p>
          <button onClick={() => handleClick('/register')}>Create a Profile</button>
        </div>
      </div>
      <div className="home-section">
        <div className="text-overlay-left">
          <h2>Ready to level-up?</h2>
          <p>Excel with our Jobs Hub. Find tips to get ahead and make your goals a reality.</p>
          <button onClick={() => handleClick('/job-listing')}>Learn More</button>
        </div>
        <img src={image4} alt="Ready to level-up?" className="image-right" />
      </div>
      {/* <Footer1 /> */}
    </div>
  );
};

export default HomePage;
