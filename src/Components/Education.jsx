import React from 'react';
import '../Styles/Education.css';

function Education() {
  const educationDetails = [
    {
      degree: 'B.TECH (CSE)',
      institution: 'AP IIIT RGUKT RK VALLEY',
      cgpa: '7.87',
      year: '2024'
    },
    {
      degree: 'PUC (MPC)',
      institution: 'AP IIIT RGUKT RK VALLEY',
      cgpa: '8.05',
      year: '2020'
    },
    {
      degree: 'CLASS (X)',
      institution: 'MUNICIPAL HIGH SCHOOL, ADONI',
      cgpa: '9.8',
      year: '2018'
    }
  ];

  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-container">
        {educationDetails.map((item, index) => (
          <div className="education-item" key={index}>
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            <p><strong>CGPA:</strong> {item.cgpa}</p>
            <p><strong>YOP:</strong> {item.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
