import React, { useState, useRef, useEffect } from 'react';
import { developerProfile, projectsData, skillsCategories } from '../data/portfolioData';
import './TerminalDrawer.css';

const TerminalDrawer = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [currentDir, setCurrentDir] = useState('~');
  const [history, setHistory] = useState([
    { type: 'output', text: `Welcome to ${developerProfile.name}'s interactive shell.` },
    { type: 'output', text: "Type 'help' to list commands, or click a quick command below." }
  ]);

  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const slugify = (title) => `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.txt`;

  const executeCommand = (rawCmd) => {
    const trimmed = rawCmd.trim();
    const parts = trimmed.toLowerCase().split(/\s+/);
    const cmd = parts[0];
    const arg = parts[1];

    const promptLine = { type: 'command', text: `yashasvi@dev:${currentDir}$ ${trimmed}` };

    if (!cmd) {
      setHistory((prev) => [...prev, promptLine]);
      return;
    }

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    let response = '';

    switch (cmd) {
      case 'help':
        response = [
          'Available commands:',
          '  whoami          - Engineer summary & focus',
          '  ls              - List directories or files',
          '  cd [dir]        - Navigate into projects, skills, about, or ..',
          '  cat [file]      - Read file contents',
          '  contact         - Display email, GitHub, and LinkedIn',
          '  clear           - Clear terminal output'
        ].join('\n');
        break;

      case 'whoami':
        response = `${developerProfile.name} — ${developerProfile.role}\nLocation: ${developerProfile.location}\nStatus: ${developerProfile.availability}`;
        break;

      case 'contact':
        response = `Email:    ${developerProfile.email}\nGitHub:   ${developerProfile.github}\nLinkedIn: ${developerProfile.linkedin}`;
        break;

      case 'ls':
        if (currentDir === '~') {
          response = 'about/   skills/   projects/';
        } else if (currentDir === '~/projects') {
          response = projectsData.map((p) => slugify(p.title)).join('\n');
        } else if (currentDir === '~/skills') {
          response = skillsCategories.map((c) => `${c.id}.txt`).join('   ');
        } else if (currentDir === '~/about') {
          response = 'overview.txt   contact.txt';
        }
        break;

      case 'cd':
        if (!arg || arg === '~' || arg === '..') {
          setCurrentDir('~');
          response = 'Moved to ~';
        } else if (['projects', 'skills', 'about'].includes(arg.replace('/', ''))) {
          const clean = arg.replace('/', '');
          setCurrentDir(`~/${clean}`);
          response = `Entered ~/${clean}`;
        } else {
          response = `cd: no such directory: ${arg}`;
        }
        break;

      case 'cat':
        if (!arg) {
          response = 'Usage: cat [filename]';
        } else if (currentDir === '~/projects') {
          const match = projectsData.find((p) => slugify(p.title) === arg);
          if (match) {
            const urlLine =
              match.liveUrl && match.liveUrl.startsWith('http') ? `\nURL: ${match.liveUrl}` : '';
            response = `[${match.title}] (${match.status})\nStack: ${match.tech.join(', ')}\n${match.summary}${urlLine}`;
          } else {
            response = `cat: ${arg}: File not found`;
          }
        } else if (currentDir === '~/skills') {
          const catMatch = skillsCategories.find((c) => `${c.id}.txt` === arg);
          if (catMatch) {
            response = `${catMatch.category}:\n${catMatch.skills.map((s) => `  - ${s.name}`).join('\n')}`;
          } else {
            response = `cat: ${arg}: File not found`;
          }
        } else if (currentDir === '~/about') {
          if (arg === 'overview.txt') {
            response = developerProfile.subheadline;
          } else if (arg === 'contact.txt') {
            response = `Email: ${developerProfile.email}\nGitHub: ${developerProfile.github}\nLinkedIn: ${developerProfile.linkedin}`;
          } else {
            response = `cat: ${arg}: File not found`;
          }
        } else {
          response = `cat: ${arg}: Not in a directory with readable files. Try 'cd projects' first.`;
        }
        break;

      default:
        response = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, promptLine, { type: 'output', text: response }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
    }
  };

  const quickCommands = ['help', 'whoami', 'ls', 'cd projects', 'contact', 'clear'];

  return (
    <div
      className="cli-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Interactive Developer Terminal"
    >
      <div className="cli-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cli-header">
          <div className="cli-header-left">
            <div className="window-dots">
              <span className="w-dot red"></span>
              <span className="w-dot yellow"></span>
              <span className="w-dot green"></span>
            </div>
            <span className="cli-title">yashasvi@dev — interactive-shell (Esc to close)</span>
          </div>
          <button type="button" className="cli-close-btn" onClick={onClose}>
            Close ✕
          </button>
        </div>

        <div
          className="cli-body"
          ref={bodyRef}
          onClick={() => inputRef.current && inputRef.current.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} className={`cli-line ${item.type}`}>
              {item.text}
            </div>
          ))}

          <div className="cli-input-row">
            <span className="cli-prompt">yashasvi@dev:{currentDir}$</span>
            <input
              ref={inputRef}
              type="text"
              className="cli-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck="false"
              autoComplete="off"
              aria-label="Terminal command input"
            />
          </div>
        </div>

        <div className="cli-quickbar">
          <span className="cli-quick-label">Quick run:</span>
          {quickCommands.map((qc) => (
            <button
              key={qc}
              type="button"
              className="cli-chip"
              onClick={() => executeCommand(qc)}
            >
              {qc}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TerminalDrawer;