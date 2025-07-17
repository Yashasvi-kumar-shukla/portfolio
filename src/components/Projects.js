import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: 'Secure Payment System using Razorpay',
      desc: 'A secure payment system integrated with Razorpay and a behavioural fraud detection system. {Work in progress}',
      link: 'https://github.com/Yashasvi-kumar-shukla/Secure-Payment-System-using-Razorpay'
    },
    {
      title: 'Keyframe Extraction using Face Recognition',
      desc: 'Utilizes face recognition to extract keyframes from videos for efficient processing.',
      link: 'https://github.com/Yashasvi-kumar-shukla/Keyframe-generation-using-facial-recognition'
    },
    {
      title: 'Resume Matcher & JD Scrubber',
      desc: 'Web application that compares resumes with job descriptions using ML models.',
      link: 'https://github.com/Yashasvi-kumar-shukla/JD-resume-scrabber'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <motion.a
            key={idx}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Projects;