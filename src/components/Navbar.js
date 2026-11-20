import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onOpenTerminal }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Overview', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' }
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#top" className="nav-brand" onClick={handleNavClick}>
          <span className="brand-badge">YS</span>
          <span className="brand-text">
            Yashasvi<span className="brand-dot">.dev</span>
          </span>
        </a>

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`} aria-label="Primary Navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="btn-cli-trigger"
            onClick={onOpenTerminal}
            title="Open Interactive Developer Terminal"
          >
            <span className="cli-prompt-icon">&gt;_</span>
            <span className="cli-label-text">CLI Mode</span>
          </button>

          <a href="#contact" className="btn-nav-cta" onClick={handleNavClick}>
            Contact Me
          </a>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
