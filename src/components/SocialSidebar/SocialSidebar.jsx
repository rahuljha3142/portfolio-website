import React from 'react';
import './SocialSidebar.css';

function SocialSidebar() {
  return (
    <div className="social-links">
      
      {/* Facebook */}
      <a href="https://www.facebook.com/profile.php?id=100009978308804" target="_blank" rel="noopener noreferrer" className="facebook">
        <span>Facebook</span>
        <i className="fab fa-facebook-f"></i>
      </a>

      {/* Instagram */}
      <a href="https://www.instagram.com/rahuljha3142" target="_blank" rel="noopener noreferrer" className="instagram">
        <span>Instagram</span>
        <i className="fab fa-instagram"></i>
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/rahul-raaz-378852202/" target="_blank" rel="noopener noreferrer" className="linkedin">
        <span>LinkedIn</span>
        <i className="fab fa-linkedin"></i>
      </a>

      {/* Gmail */}
      <a href="mailto:rahulraaz3142@gmail.com" className="gmail">
        <span>Gmail</span>
        <i className="fas fa-envelope"></i>
      </a>

      {/* GitHub */}
      <a href="https://github.com/rahuljha3142" target="_blank" rel="noopener noreferrer" className="github">
        <span>GitHub</span>
        <i className="fab fa-github"></i>
      </a>

      {/* Phone */}
      <a href="tel:+919905484026" className="phone">
        <span>Call Me</span>
        <i className="fas fa-phone-alt"></i>
      </a>

    </div>
  );
}

export default SocialSidebar;