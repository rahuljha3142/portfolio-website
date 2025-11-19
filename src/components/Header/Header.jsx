import React from 'react';
import './Header.css'; // We'll create this file next

// Pass down the theme and toggleTheme props from App.jsx
function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <nav className="header-nav container">
        
        {/* Logo on the left */}
        <a href="#home" className="header-logo">
          Rahul Raj
        </a>

        {/* Navigation links in the center */}
        <ul className="header-links">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Theme Toggle Button on the right */}
        <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {/* Show a sun icon for dark mode, moon for light mode */}
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  );
}

export default Header;