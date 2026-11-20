import React from 'react';
import { developerProfile, engineeringPillars } from '../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <section className="section-wrapper" id="about">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">// 01. Engineering Overview</span>
          <h2 className="section-title">Practical software built for real-world users.</h2>
        </div>

        <div className="about-grid">
          <div className="about-narrative">
            <p>
              I’m <strong>{developerProfile.name}</strong>, a full-stack software developer focused on
              turning product ideas into reliable, production-ready web and mobile applications for
              startups and growing businesses.
            </p>
            <p>
              My core stack spans cross-platform mobile development with <strong>Flutter</strong> and
              full-stack web systems using <strong>React, Node.js, and Django</strong>—allowing me to
              own database schemas, backend APIs, payment integrations, and responsive user interfaces
              end to end.
            </p>
            <p>
              I approach engineering with a problem-solving mindset: prioritizing clean architecture,
              fast iteration, and software that is straightforward to maintain and scale as user
              demand grows.
            </p>

            <div className="about-status-bar">
              <span className="status-badge-online">
                <span className="status-badge-dot"></span>
                SYSTEM STATUS: ONLINE
              </span>
              <span className="status-location">{developerProfile.location}</span>
            </div>
          </div>

          <div className="pillars-list">
            {engineeringPillars.map((pillar) => (
              <article key={pillar.number} className="pillar-card">
                <div className="pillar-top">
                  <span className="pillar-num">{pillar.number}</span>
                  <h3 className="pillar-title">{pillar.title}</h3>
                </div>
                <p className="pillar-desc">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
