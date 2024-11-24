import React from 'react';
import '../Styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <h4>Name: Sai Teja Sagari</h4>
      <p><FontAwesomeIcon icon={faEnvelope} /> saitejasagari2002@gmail.com</p>
      <p><FontAwesomeIcon icon={faPhone} /> 7675843002</p>
      <u><h3>Let's CONNECT and CREATE something remarkable together!</h3></u>
    </section>
  );
}

export default Contact;
