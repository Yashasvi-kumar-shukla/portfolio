import React from 'react';
import { motion } from 'framer-motion';
import { skillsTimelineData } from '../data/portfolioData';
import './Skills.css';

const TimelineItem = ({ data, index }) => {
  // Determine if the item should appear on the left or right
  const isLeft = index % 2 === 0;

  return (
    <div className={`timeline-row ${isLeft ? 'left' : 'right'}`}>
      {/* The central dot */}
      <div className="timeline-dot"></div>

      {/* The animated card */}
      <motion.div
        className="timeline-card"
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="card-header">
          <h3 className="card-category">{data.category}</h3>
          <span className="card-date">{data.date}</span>
        </div>
        <h4 className="card-title">{data.title}</h4>
        <p className="card-description">{data.description}</p>
        
        <div className="tech-tags">
          {data.tech.map((item, i) => (
            <span key={i} className="tech-tag">{item}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        
        <div className="section-header">
          <span className="header-prefix">{'//'}</span>
          <h2>CORE SKILLS</h2>
        </div>

        <div className="timeline">
          {/* The vertical line running down the center */}
          <div className="timeline-center-line"></div>
          
          {/* Mapping through the data to create timeline nodes */}
          {skillsTimelineData.map((item, index) => (
            <TimelineItem key={item.id} data={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;