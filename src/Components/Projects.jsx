import React from 'react';
import '../Styles/Projects.css';
import Proj_1 from '../Images/Proj_1.png'
import Proj_2 from '../Images/MRS.jpg'

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">
          <div className="project">
            <img src={Proj_1} alt="Project 1" />
            <h3>Image Photography</h3>
          </div>
        </a>
        <a href="https://github.com/your-username/project2" target="_blank" rel="noopener noreferrer">
          <div className="project">
            <img src={Proj_2} alt="Project 2" />
            <h3>Movie Recommendation System</h3>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Projects;
