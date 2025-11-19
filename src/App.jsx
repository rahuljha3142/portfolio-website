import React, { useState } from 'react';

import './App.css';

// Import your components (we'll create these next)
import Header from './components/Header/Header';
import SocialSidebar from './components/SocialSidebar/SocialSidebar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
// import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  // This state will manage the theme
  const [theme, setTheme] = useState('dark'); // default theme

  // This function will be passed to the Header
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    // The data-theme attribute is what our CSS reads
    <div className="App" data-theme={theme}>
      
      <Header theme={theme} toggleTheme={toggleTheme} />
      <SocialSidebar />
      <Hero />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;