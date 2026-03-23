import React, { useState, useRef, useEffect } from 'react';
import { projectsData, skillsData } from '../data/portfolioData';
import './Terminal.css';

const Terminal = () => {
  const [input, setInput] = useState("");
  const [currentDir, setCurrentDir] = useState("~");
  const [isLocked, setIsLocked] = useState(false); // NEW: Locks terminal during animations
  const [history, setHistory] = useState([
    "Wake up, Devs...",
    "The Matrix has you.",
    "Follow the white rabbit.",
    "----------------------------------------",
    "Type 'ls' to see directories or 'help' for info."
  ]);
  
  const inputRef = useRef(null);
  const contentRef = useRef(null);

  // Auto-scroll to the bottom whenever the history array updates
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [history]);

  // Helper function: Turns project titles into standard .txt files
  const formatAsTerminalFile = (title) => {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `${slug}.txt`;
  };

  // NEW: A simple promise-based delay function for our animations
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // NEW: The async hack animation sequence
  const runHackSequence = async (dir, command) => {
    setIsLocked(true); // Lock the terminal and hide the input prompt
    
    // First, print the command the user just typed
    setHistory(prev => [...prev, `user@matrix:${dir}$ ${command}`]);
    
    await delay(400);
    setHistory(prev => [...prev, "[!] INITIALIZING SYSTEM BREACH..."]);
    
    await delay(600);
    setHistory(prev => [...prev, "[####                ] 20% - Bypassing WAF..."]);
    
    await delay(700);
    setHistory(prev => [...prev, "[########            ] 40% - Injecting Payload..."]);
    
    await delay(800);
    setHistory(prev => [...prev, "[################    ] 80% - Decrypting Hashes..."]);
    
    await delay(900);
    setHistory(prev => [...prev, "[####################] 100% - Root Access Attempted."]);
    
    await delay(1200); // Dramatic pause before denial
    setHistory(prev => [...prev, "ACCESS DENIED.", "Security systems engaged. You really thought you could hack me?"]);
    
    setIsLocked(false); // Unlock the terminal so the user can type again
  };

  const handleCommand = (e) => {
    if (isLocked) return; // Prevent any keyboard actions if a script is running

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (contentRef.current) contentRef.current.scrollTop -= 50;
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (contentRef.current) contentRef.current.scrollTop += 50;
      return;
    }

    if (e.key === 'Enter') {
      const parts = input.toLowerCase().trim().split(" ");
      const cmd = parts[0];
      const arg = parts[1];
      let res = "";

      // Intercept the 'hack' command to run the animation instead of a standard instant reply
      if (cmd === 'hack') {
        runHackSequence(currentDir, input);
        setInput("");
        return; 
      }

      switch (cmd) {
        case 'help':
          res = "COMMANDS: ls, cd [dir], cat [file], clear, whoami, Try 'hack' and 'sudo' for something interesting.";
          break;
        case 'ls':
          if (currentDir === "~") {
            res = "projects/  about/  skills/";
          } else if (currentDir === "~/projects") {
            res = projectsData.length > 0 
              ? projectsData.map(p => formatAsTerminalFile(p.title)).join('   ')
              : "No projects found.";
          } else if (currentDir === "~/skills") {
            res = "programming_languages.txt   database.txt   framework.txt";
          } else if (currentDir === "~/about") {
            res = "introduction.txt   resume.pdf   contact.log";
          } else {
            res = "No files in this directory.";
          }
          break;
        case 'cd':
          if (!arg || arg === "~") {
            setCurrentDir("~");
            res = "Changed directory to root (~).";
          } else if (arg === "..") {
            if (currentDir === "~") {
              res = "Already at root directory.";
            } else {
              setCurrentDir("~");
              res = "Moved back to root (~).";
            }
          } else if (["projects", "about", "skills"].includes(arg)) {
            if (currentDir === "~") {
              setCurrentDir(`~/${arg}`);
              res = `Moved to ${arg}/`;
            } else {
              res = `ERR: Cannot find '${arg}' in current directory. Try 'cd ..' first.`;
            }
          } else {
            res = `ERR: Directory not found: ${arg}.`;
          }
          break;
        case 'cat':
          if (!arg) {
            res = "cat: missing file operand. Usage: cat [filename]";
          } else if (currentDir === "~/projects") {
            const project = projectsData.find(p => formatAsTerminalFile(p.title) === arg);
            if (project) {
              res = `[PROJECT INFO: ${project.title}]\n----------------------------------------\nType: ${project.type.toUpperCase()}\nDetails: ${project.description}`;
            } else {
              res = `cat: ${arg}: No such file or directory`;
            }
          } else if (currentDir === "~/skills") {
             if (arg === "programming_languages.txt") {
               res = "Programming Languages:\n[0] Python\n[1] HTML\n[2] CSS\n[3] C/C++\n[4] JavaScript\n[5] Dart";
             } else if (arg === "database.txt") {
               res = "Database Management:\n[0] MySQL\n[1] SQL\n[2] MongoDB\n[3] Firebase";
             } else if (arg === "framework.txt") {
               res = "Frameworks:\n[0] Django\n[1] Flask\n[2] React.js\n[3] Flutter\n[4] Node.js";
             } else {
               res = `cat: ${arg}: No such file`;
             }
          } else if (currentDir === "~/about") {
             if (arg === "introduction.txt") res = "I’m a full-stack developer focused on building MVP web and mobile applications for startups and businesses. I work with Flutter, React, Node.js, and Django to turn ideas into functional products quickly and efficiently. My approach is centered around simplicity, scalability, and real-world usability. I enjoy solving practical problems and building systems that people can actually use. I’m always exploring better ways to design and develop impactful software.";
             else if (arg === "resume.pdf") res = "[BINARY DATA] - Please scroll down to the UI to view resume.";
             else if (arg === "contact.log") res = "Email: your-email@domain.com | GitHub: github.com/rinzler | Location: Lucknow, UP, India"; 
             else res = `cat: ${arg}: No such file`;
          } else {
            res = `cat: ${arg}: No such file or directory`;
          }
          break;
        case 'clear':
          setHistory([]);
          setInput("");
          return;
        case 'whoami':
          res = `Yashasvi Kumar Shukla
----------------------------------------
> Full Stack Web Developer
> Full Stack Android App Developer

I specialize in building scalable web architectures and high-performance, cross-platform mobile applications. I build clean, intelligent tech that moves people and data efficiently.`;
          break;
        case 'sudo':
          res = `user is not in the sudoers file. This incident will be reported to HR.`;
          break;
        default:
          if (cmd !== "") {
            res = `ERR: Unknown command '${cmd}'`;
          }
      }

      setHistory(prev => [...prev, `user@matrix:${currentDir}$ ${input}`, res].filter(Boolean));
      setInput("");
    }
  };

  // Force focus back to input when clicking anywhere, unless the terminal is locked
  const handleTerminalClick = () => {
    if (!isLocked && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="terminal-window" onClick={handleTerminalClick}>
      <div className="terminal-content" ref={contentRef}>
        {history.map((line, i) => (
          <div key={i} className="line">{line}</div>
        ))}
        
        {/* Only show the input line if the terminal is NOT locked by an animation */}
        {!isLocked && (
          <div className="input-line">
            <span className="prompt">user@matrix:{currentDir}$ </span>
            <input 
              ref={inputRef}
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyDown={handleCommand}
              spellCheck="false"
              autoComplete="off"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;