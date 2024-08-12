import React from 'react';
import './AboutUs.css';
import background from './img1.jpg'; // Replace with your background image path
import profile from './img2.jpg'; // Replace with your profile image path

const AboutUs = () => {
  return (
    <div className="about-us" style={{ backgroundImage: `url(${background})` }}>
      <header className="about-header">
        <h1>About Us</h1>
        <p>Telling our inspiring story from the very beginning to our days</p>
      </header>
      <section className="about-content">
        <div className="success-story">
          <h2>Behind the success</h2>
          <p>
            Established just a few years ago, we are a growing and motivated company built on new ideas and concepts.
            Striving for great results, we have achieved a strong base of employees and successful projects.
            We plan to amplify our outcomes and continue to build a stronger team with passionate individuals.
            Our goal is to exceed expectations and fulfill our aspirations in the industry.
          </p>
        </div>
        <div className="profile">
          <img src={profile} alt="Chris Spring" />
          <h3>Chris Spring</h3>
          <p>CEO & Founder</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
