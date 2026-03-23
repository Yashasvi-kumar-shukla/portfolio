import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* --- Top: Social & Contact Links --- */}
        <div className="footer-links">
          <a href="https://github.com/Yashasvi-kumar-shukla" target="_blank" rel="noopener noreferrer" className="footer-link">
            <span className="bracket">[</span> GITHUB <span className="bracket">]</span>
          </a>
          <a href="https://www.linkedin.com/in/yashasvi-kumar-shukla/" target="_blank" rel="noopener noreferrer" className="footer-link">
            <span className="bracket">[</span> LINKEDIN <span className="bracket">]</span>
          </a>
          <a href="mailto:yashasvishukla2002@gmail.com" className="footer-link">
            <span className="bracket">[</span> EMAIL <span className="bracket">]</span>
          </a>
        </div>

        {/* --- Middle: Glowing Divider --- */}
        <div className="footer-divider"></div>

        {/* --- Bottom: System Status, Copyright, & Scroll to Top --- */}
        <div className="footer-bottom">
          
          <div className="footer-status">
            <div className="status-dot"></div>
            <span>SYS.STATUS: <span className="highlight-green">ONLINE</span></span>
          </div>

          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Yashasvi Kumar Shukla.</p>
          </div>

          <div className="footer-action">
            <button onClick={scrollToTop} className="btn-top">
              <span className="carat">^</span> RETURN_0
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;