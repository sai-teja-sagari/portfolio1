import React from 'react';
import '../Styles/Certifications.css';

function Certifications() {
  const certifications = [
    {
      title: "NSS Volunteer",
      description: "Actively engaged as an NSS volunteer at RGUKT RK-VALLEY and achieved certification.",
      link: "https://drive.google.com/file/d/1mC4TQOMl9aYeS-L02GZtcXNrOB51LS25/view" 
    },
    {
      title: "Full Stack Developer Readiness Program",
      description: "Successfully completed the Full Stack Developer Readiness Program at CareerCharge and achieved certification.",
      link: "https://drive.google.com/file/d/15DlNxsDPtRjCX11goRpVDIXzNDzWoWHi/view" 
    },
    {
      title: "Microsoft Cloud Computing Certification",
      description: "Achieved Microsoft Cloud Computing Certification for Software Development, demonstrating proficiency in cloud-based application development and deployment.",
      link: "https://drive.google.com/file/d/1EN9IOt2yspo-iHf13wuNJlcQmZpcWxDk/view" 
    },
    {
      title: "Java Full Stack Internship",
      description: "Successfully completed the Java Full Stack Internship at KodNest, enriched skills, and achieved certification.",
      link: "https://drive.google.com/file/d/177kfWkU761J9K17MQX51qL_dl-oY2Z4r/view" 
    }
  ];

  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <ul className="certifications-list">
        {certifications.map((cert, index) => (
          <li key={index} className="certification-item">
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;
