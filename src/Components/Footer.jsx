import React from 'react';
import '../Styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer>
      <p>Connect with me on:</p>
      <ul>
        <li><a href="https://www.linkedin.com/in/sai-teja-sagari" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a></li>
        <li><a href="https://github.com/sai-teja-sagari" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a></li>
        <li><a href="https://instagram.com/sai_teja_sagari" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a></li>
        <li><a href="mailto:saitejasagari2002@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} /> Gmail
        </a></li>
      </ul>
      <p className="copyright">&copy; {new Date().getFullYear()} Teja. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
