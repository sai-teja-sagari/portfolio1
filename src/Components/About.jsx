import React from 'react';
import Img1 from '../Images/MY_PIC.png'
import '../Styles/About.css'
function About() {
  return (
    <section id="about">
      <h2>About Teja</h2>
      <div className="about-content">
        <img src={Img1} alt="Teja" />
        <p>"As a passionate Frontend Developer with a solid foundation in HTML, CSS, JavaScript, ReactJS, and responsive design, I strive to build intuitive and visually appealing user interfaces. My skills extend to Java for backend development and SQL for efficient database management, allowing me to develop full-stack solutions. With a strong understanding of UI/UX principles, web performance optimization, and tools like Git for version control, I am eager to contribute to dynamic teams and create innovative, high-quality web applications that deliver exceptional user experiences and meet business goals."</p>
      </div>
    </section>
  );
}

export default About;
