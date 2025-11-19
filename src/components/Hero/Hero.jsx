import React from 'react';
import './Hero.css';

// Import your image
import profileImage from '../../assets/images/profile-pic.png'; 

function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-content">
        <p className="hero-intro">Hi There, I'm</p>
        <h1 className="hero-name">Rahul Raj</h1>
        <h2 className="hero-title">Freelance Web Developer</h2>
        
        <p className="hero-summary">
          The dynamics of how users interact with interactive elements within a user 
          interface flow chart based on container proportion.
        </p>

        <div className="hero-links">
          <a href="#contact" className="hero-button">
            Contact Me
          </a>
        </div>
      </div>

      {/* Simplified Image Container */}
      <div className="hero-image-container">
        <img src={profileImage} alt="Rahul Raj" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;