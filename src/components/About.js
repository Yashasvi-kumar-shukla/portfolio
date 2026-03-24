import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import './About.css';

// The Cipher Animation Component
const CipherReveal = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const ref = useRef(null);
  
  // THE BUG FIX: Removed the negative margin. 
  // 'amount: 0.1' means it triggers when just 10% of the element is visible.
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isInView) {
      setDisplayText("");
      return;
    }

    // Hacker-style characters for the scramble
    const chars = "!<>-_\\\\/[]{}—=+*^?#";
    let iteration = 0;
    
    // We increase the step size so longer paragraphs decode faster
    const step = Math.max(1, text.length / 60); 

    const interval = setInterval(() => {
      setDisplayText(
        text.split("").map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }
          if (text[index] === " ") {
            return " ";
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += step;
    }, 30); 

    return () => clearInterval(interval);
  }, [isInView, text]);

  // Added a min-height placeholder so the sensor has something to actually "see"
  return <span ref={ref} style={{ display: 'inline-block', minHeight: '1em' }}>{displayText}</span>;
};

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        <div className="about-header">
          <span className="header-prefix">{'//'}</span>
          <h2><CipherReveal text="OVERVIEW" /></h2>
        </div>

        <p className="about-bio">
          <CipherReveal 
            text="I’m a full-stack developer with a strong focus on building MVP products for startups and small businesses. My work spans mobile app development using Flutter and web platforms using React, Node.js, and Django, allowing me to handle complete product development from frontend to backend. I have experience working on real-world systems including payment integrations, backend architectures, and scalable application design. I approach development with a problem-solving mindset, focusing on building solutions that are practical, efficient, and easy to evolve over time. My goal is to help ideas move from concept to working products that can be tested, improved and grown." 
          />
        </p>

        <div className="about-decoration">
          <div className="dec-line"></div>
          <span className="dec-status">[STATUS: ONLINE]</span>
          <div className="dec-line"></div>
        </div>

      </div>
    </section>
  );
};

export default About;