import React, { useRef } from 'react';
import './Projects.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProjectCard = ({ proj, scrollXProgress }) => {
  const cardShadow = useTransform(
    scrollXProgress, 
    [0, 1], 
    ['-15px 5px 20px rgba(0,0,0,0.3)', '15px 5px 20px rgba(0,0,0,0.3)']
  );

  return (
    <motion.a
      href={proj.link}
      target="_blank"
      rel="noopener noreferrer"
      className="glass card"
      style={{ boxShadow: cardShadow }}
      whileHover={{ scale: 1.05 }}
    >
      <h3>{proj.title}</h3>
      <p>{proj.desc}</p>
    </motion.a>
  );
};

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
    },
    {
      title: 'Tvaćham: Full-Stack E-Commerce',
      desc: 'A full-stack, deployed sample e-commerce site for a luxury skincare brand. Built with React (Framer Motion), Node.js, Express, and PostgreSQL. Features a live product API, persistent cart, and a complete checkout flow.',
      link: 'https://github.com/Yashasvi-kumar-shukla/tvacham-sample-ecom'
    }
  ];

  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const rotateY = useTransform(scrollXProgress, [0, 1], ['8deg', '-8deg']);

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="carousel-wrap">
        <motion.div 
          className="carousel" 
          ref={ref} 
          style={{ rotateY }} 
        >
          {projects.map((proj, idx) => (
            <ProjectCard 
              proj={proj} 
              key={idx} 
              scrollXProgress={scrollXProgress} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;