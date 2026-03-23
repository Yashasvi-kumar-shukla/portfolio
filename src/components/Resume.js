import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">
        
        <div className="section-header-inline">
          <span className="header-prefix">{'//'}</span>
          <h2>RESUME</h2>
        </div>

        <div className="resume-extraction-box">
          
          <div className="file-info-group">
            {/* A simple CSS-drawn file icon */}
            <div className="file-icon-wrapper">
              <div className="file-icon">
                <span className="file-extension">PDF</span>
              </div>
            </div>
            
            <div className="file-details">
              <h3 className="file-name">yashasvi_resume.pdf</h3>
              <p className="file-meta">
                <span>STATUS: <span className="highlight">SECURE</span></span>
                <span className="divider">|</span>
                <span>SIZE: 192KB</span>
              </p>
            </div>
          </div>

          {/* Google Drive Direct Download Link */}
          <a 
            href="https://drive.google.com/uc?export=download&id=1c01Na6zZjo8RuqUHL_sxWB5PJJ7AqGK3" 
            className="btn-download"
          >
            <span className="blink-arrow">{'>'}</span> INITIATE_DOWNLOAD
          </a>

        </div>

      </div>
    </section>
  );
};

export default Resume;