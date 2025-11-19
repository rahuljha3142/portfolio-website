import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-copyright">
          © {currentYear} Rahul Raj. All rights reserved.
        </div>
        
        <div className="footer-social-links">
          <a 
            href="https://github.com/rahuljha3142" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/rahul-raaz-378852202/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;