import React from 'react';
import './Projects.css';

// 1. IMPORT YOUR PROJECT IMAGES
// Add your screenshots to src/assets/images/ and change the file names here
import schoolImage from '../../assets/images/school-project.png'; // <-- CHANGE THIS
import tunedinImage from '../../assets/images/tunedin-project.png'; // <-- CHANGE THIS
// import commentToolImage from '../../assets/images/comment-tool-project.png'; 

function Projects() {
  return (
    <section id="projects" className="projects container">
      
      {/* Section Title */}
      <h2 className="projects-title">Personal Projects</h2>

      {/* Grid container for project cards */}
      <div className="projects-grid">

        {/* Project 1: School Management System */}
        <div className="project-card">
          <img src={schoolImage} alt="School Management System" className="project-image" />
          <div className="project-content">
            <h3 className="project-title">School Management System</h3>
            <p className="project-description">
              A MERN-stack app for school administration with role-based access 
              and an integrated Cohere API for generating MCQs.
            </p>
            <div className="project-tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>Cohere API</span>
            </div>
            <div className="project-links">
              {/* <a href="#" className="project-link">GitHub</a> */}
              <a href="https://students-way-f.vercel.app/" target='_blank' className="project-link">Live Demo</a>
            </div>
          </div>
        </div>

        {/* Project 2: Tunedin - Music Player */}
        <div className="project-card">
          <img src={tunedinImage} alt="Tunedin Music Player" className="project-image" />
          <div className="project-content">
            <h3 className="project-title">Tunedin - Music Player</h3>
            <p className="project-description">
              A responsive music player with a Node.js backend that uses Telegram 
              integration for uploading and managing over 100+ songs.
            </p>
            <div className="project-tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
            <div className="project-links">
              {/* <a href="#" className="project-link">GitHub</a> */}
              <a href="https://tuned-in.vercel.app/" target='_blank' className="project-link">Live Demo</a>
            </div>
          </div>
        </div>

        {/* Project 3: Comment Removal Tool */}
        <div className="project-card">
          <img src={tunedinImage} alt="Comment Removal Tool" className="project-image" />
          <div className="project-content">
            <h3 className="project-title">Comment Removal Tool</h3>
            <p className="project-description">
              A command-line utility in C to remove single and multi-line comments 
              from codebases, reducing preprocessing time.
            </p>
            <div className="project-tech-stack">
              <span>C</span>
              <span>CLI</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link">GitHub</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;