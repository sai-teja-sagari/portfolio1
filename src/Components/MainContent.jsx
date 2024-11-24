import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Education from './Education';
import Certifications from './Certifications';

function MainContent() {
  return (
    <main>
      <About />
      <Skills />
      <Projects />
      <Education/>
      <Certifications/>
      <Contact />
    </main>
  );
}

export default MainContent;
