import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Email: yashasvishukla2002@gmail.com</p>
      <div className="icons">
        <a href="https://github.com/Yashasvi-kumar-shukla"><FaGithub size={30} /></a>
        <a href="https://www.linkedin.com/in/yashasvi-kumar-shukla/"><FaLinkedin size={30} /></a>
      </div>
    </section>
  );
}

export default Contact;