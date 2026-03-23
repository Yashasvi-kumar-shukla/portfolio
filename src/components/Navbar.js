import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling past the 100vh Hero section
      if (window.scrollY >= window.innerHeight - 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to smoothly scroll back to the 3D Hero section
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="nav-container">
        
        {/* Clickable Logo */}
        <div className="nav-logo" onClick={scrollToTop}>
          <span className="user-prompt">yashasvi@sys</span>
          <span className="colon">:</span>
          <span className="tilde">~</span>
          <span className="dollar">$</span>
        </div>

        <div className="nav-links">
          <a href="#about" className="nav-link"><span className="link-prefix">~/</span>overview</a>
          <a href="#skills" className="nav-link"><span className="link-prefix">~/</span>skills</a>
          <a href="#projects" className="nav-link"><span className="link-prefix">~/</span>projects</a>
          <a href="#resume" className="nav-link"><span className="link-prefix">~/</span>resume</a>
          
          {/* Highlighted Contact Button */}
          <a href="#contact" className="nav-link nav-contact-btn">
            <span className="link-prefix">~/</span>Contact ME
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;