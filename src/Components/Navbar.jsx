import React from 'react';
import Name from './Name';
import '../Styles/Navbar.css';


function Navbar() {
  return (
    <nav>
      <Name />
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
