import React from 'react';
import { developerProfile } from '../data/portfolioData';
import './Footer.css';

const Footer = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-brand">{developerProfile.name}</span>
          <span className="footer-copy">
            © {new Date().getFullYear()} All rights reserved. Built with React.
          </span>
        </div>

        <div className="footer-links">
          <a href={developerProfile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={developerProfile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${developerProfile.email}`}>Email</a>
          <button type="button" className="footer-cli-btn" onClick={onOpenTerminal}>
            &gt;_ Terminal
          </button>
        </div>

        <button type="button" className="btn-back-top" onClick={scrollToTop}>
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
