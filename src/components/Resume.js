import React from 'react';
import { developerProfile } from '../data/portfolioData';
import './Resume.css';

const Resume = () => {
  return (
    <section className="section-wrapper" id="resume">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">// 04. Curriculum Vitae</span>
          <h2 className="section-title">Resume &amp; Credentials</h2>
        </div>

        <div className="resume-card">
          <div className="resume-left">
            <div className="resume-file-badge" aria-hidden="true">
              <span className="resume-file-ext">PDF</span>
              <span className="resume-file-size">192 KB</span>
            </div>

            <div>
              <h3 className="resume-title">yashasvi_resume.pdf</h3>
              <p className="resume-meta">
                Full-Stack Web &amp; Mobile Engineer — Experience, Technical Stack &amp; Deployed Projects
              </p>
              <div className="resume-tags">
                <span>• Verified Document</span>
                <span>• Direct PDF Download</span>
              </div>
            </div>
          </div>

          <div className="resume-actions">
            <a
              href={developerProfile.resumePreviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Preview PDF ↗
            </a>
            <a
              href={developerProfile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
