import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills container">
      
      {/* Section Title */}
      <h2 className="skills-title">My Technical Skills</h2>
      
      {/* Grid container for all skill cards */}
      <div className="skills-grid">

        {/* Card 1: Front-end */}
        <div className="skill-card">
          <h3 className="skill-card-title">Front-End</h3>
          <ul className="skill-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
          </ul>
        </div>

        {/* Card 2: Back-end */}
        <div className="skill-card">
          <h3 className="skill-card-title">Back-End</h3>
          <ul className="skill-list">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>RESTful API Design</li>
          </ul>
        </div>

        {/* Card 3: Databases */}
        <div className="skill-card">
          <h3 className="skill-card-title">Databases</h3>
          <ul className="skill-list">
            <li>MongoDB (MQL)</li>
            <li>SQL</li>
          </ul>
        </div>

        {/* Card 4: Languages */}
        <div className="skill-card">
          <h3 className="skill-card-title">Languages</h3>
          <ul className="skill-list">
            <li>C</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>

        {/* Card 5: Core CS */}
        <div className="skill-card">
          <h3 className="skill-card-title">Core CS</h3>
          <ul className="skill-list">
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Problem Solving</li>
          </ul>
        </div>

        {/* Card 6: Tools */}
        <div className="skill-card">
          <h3 className="skill-card-title">Tools</h3>
          <ul className="skill-list">
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;