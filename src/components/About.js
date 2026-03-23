import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import './About.css';

// The Cipher Animation Component
const CipherReveal = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const ref = useRef(null);
  // Trigger animation when 20% of the element is in view
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  useEffect(() => {
    if (!isInView) {
      // Keep it blank or fully scrambled before scrolling into view
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
          // If the iteration has passed this index, reveal the true letter
          if (index < iteration) {
            return text[index];
          }
          // Preserve spaces so the paragraph structure doesn't jump around
          if (text[index] === " ") {
            return " ";
          }
          // Otherwise, return a random hacker character
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      // Advance the decryption wave
      iteration += step;
    }, 30); // 30ms per frame

    return () => clearInterval(interval);
  }, [isInView, text]);

  return <span ref={ref}>{displayText}</span>;
};

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Section Header */}
        <div className="about-header">
          <span className="header-prefix">{'//'}</span>
          <h2><CipherReveal text="OVERVIEW" /></h2>
        </div>

        {/* Bio Paragraph */}
        <p className="about-bio">
          <CipherReveal 
            text="I’m a full-stack developer with a strong focus on building MVP products for startups and small businesses. My work spans mobile app development using Flutter and web platforms using React, Node.js, and Django, allowing me to handle complete product development from frontend to backend. I have experience working on real-world systems including payment integrations, backend architectures, and scalable application design. I approach development with a problem-solving mindset, focusing on building solutions that are practical, efficient, and easy to evolve over time. My goal is to help ideas move from concept to working products that can be tested, improved and grown." 
          />
        </p>

        {/* Stylized decorative elements */}
        <div className="about-decoration">
          <div className="dec-line"></div>
          <span className="dec-status">[STATUS: ONLINE]</span>
        </div>

      </div>
    </section>
  );
};

export default About;