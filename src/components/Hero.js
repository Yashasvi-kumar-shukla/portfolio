import React, { useState } from 'react';
import { developerProfile } from '../data/portfolioData';
import './Hero.css';

const Hero = ({ onOpenTerminal }) => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <section className="hero-section" id="top">
      <div className="hero-inner">
        {/* Left Column: Value Proposition */}
        <div>
          <div className="hero-status-pill">
            <span className="status-indicator"></span>
            <span>{developerProfile.availability}</span>
          </div>

          <p className="hero-name">&gt; {developerProfile.name}</p>

          <h1 className="hero-title">
            Building <span className="hero-title-accent">scalable web</span> &amp; mobile products that ship.
          </h1>

          <p className="hero-description">{developerProfile.subheadline}</p>

          <div className="hero-cta-row">
            <a href="#projects" className="btn-primary">
              Explore Projects <span>→</span>
            </a>
            <button type="button" className="btn-secondary" onClick={onOpenTerminal}>
              <span>&gt;_</span> Launch Interactive CLI
            </button>
          </div>

          <div className="hero-metrics">
            {developerProfile.highlights.map((item, idx) => (
              <div key={idx} className="metric-item">
                <span className="metric-label">{item.label}</span>
                <span className="metric-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Developer Architecture Card */}
        <div className="hero-showcase-card">
          <div className="showcase-topbar">
            <div className="window-dots">
              <span className="w-dot red"></span>
              <span className="w-dot yellow"></span>
              <span className="w-dot green"></span>
            </div>

            <div className="showcase-tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'profile'}
                className={`showcase-tab ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                engineer.config.js
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'stack'}
                className={`showcase-tab ${activeTab === 'stack' ? 'active' : ''}`}
                onClick={() => setActiveTab('stack')}
              >
                stack.json
              </button>
            </div>
          </div>

          {activeTab === 'profile' ? (
            <div className="showcase-body">
              <div className="code-line">
                <span className="line-num">1</span>
                <span>
                  <span className="tok-kw">export const</span>{' '}
                  <span className="tok-var">developer</span> = {'{'}
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">2</span>
                <span>
                  {'  '}<span className="tok-key">name:</span>{' '}
                  <span className="tok-str">"{developerProfile.name}"</span>,
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">3</span>
                <span>
                  {'  '}<span className="tok-key">role:</span>{' '}
                  <span className="tok-str">"Full-Stack Web &amp; Mobile Dev"</span>,
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">4</span>
                <span>
                  {'  '}<span className="tok-key">location:</span>{' '}
                  <span className="tok-str">"{developerProfile.location}"</span>,
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">5</span>
                <span>
                  {'  '}<span className="tok-key">focus:</span> [
                  <span className="tok-str">"MVPs"</span>,{' '}
                  <span className="tok-str">"APIs"</span>,{' '}
                  <span className="tok-str">"Mobile"</span>],
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">6</span>
                <span>
                  {'  '}<span className="tok-key">openToWork:</span>{' '}
                  <span className="tok-bool">true</span>
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">7</span>
                <span>{'}'};</span>
              </div>
            </div>
          ) : (
            <div className="showcase-body">
              <div className="code-line">
                <span className="line-num">1</span>
                <span>{'{'}</span>
              </div>
              <div className="code-line">
                <span className="line-num">2</span>
                <span>
                  {'  '}<span className="tok-key">"frontend":</span> [
                  <span className="tok-str">"React.js"</span>,{' '}
                  <span className="tok-str">"HTML5/CSS3"</span>],
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">3</span>
                <span>
                  {'  '}<span className="tok-key">"mobile":</span> [
                  <span className="tok-str">"Flutter"</span>,{' '}
                  <span className="tok-str">"Dart"</span>,{' '}
                  <span className="tok-str">"Android"</span>],
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">4</span>
                <span>
                  {'  '}<span className="tok-key">"backend":</span> [
                  <span className="tok-str">"Node.js"</span>,{' '}
                  <span className="tok-str">"Django"</span>,{' '}
                  <span className="tok-str">"Flask"</span>],
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">5</span>
                <span>
                  {'  '}<span className="tok-key">"databases":</span> [
                  <span className="tok-str">"PostgreSQL"</span>,{' '}
                  <span className="tok-str">"MongoDB"</span>,{' '}
                  <span className="tok-str">"MySQL"</span>]
                </span>
              </div>
              <div className="code-line">
                <span className="line-num">6</span>
                <span>{'}'}</span>
              </div>
            </div>
          )}

          <div className="showcase-footer">
            <span className="showcase-hint">Prefer keyboard commands? Try ls, cat, whoami</span>
            <button type="button" className="btn-launch-inline" onClick={onOpenTerminal}>
              Open Shell →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
