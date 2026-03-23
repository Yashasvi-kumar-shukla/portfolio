import React, { useState, useEffect } from 'react';
import './SplashScreen.css';

const bootSequence = [
  "INITIALIZING_KERNEL_ENVIRONMENT...",
  "LOADING_GRAPHICS_ENGINE...",
  "MOUNTING_VIRTUAL_DOM...",
  "DECRYPTING_PERSONNEL_FILES...",
  "ESTABLISHING_SECURE_UPLINK...",
  "BYPASSING_MAINFRAME_SECURITY...",
  "RENDERING_3D_ASSETS...",
  "SYSTEM_READY."
];

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // How fast the progress bar fills (in milliseconds)
    const totalDuration = 2500; 
    const intervalTime = 50; 
    const steps = totalDuration / intervalTime;
    const progressIncrement = 100 / steps;

    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += progressIncrement;
      
      if (currentProgress >= 100) {
        clearInterval(timer);
        setProgress(100);
        setMessageIndex(bootSequence.length - 1);
        
        // Start the fade out animation
        setTimeout(() => {
          setIsFading(true);
          // Tell App.js to remove the splash screen after fade completes
          setTimeout(() => onComplete(), 500); 
        }, 400);

      } else {
        setProgress(currentProgress);
        // Sync the text changes with the progress percentage
        const nextMessageIndex = Math.floor((currentProgress / 100) * (bootSequence.length - 1));
        setMessageIndex(nextMessageIndex);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`splash-screen ${isFading ? 'fade-out' : ''}`}>
      <div className="splash-content">
        
        <div className="sys-logo">
          Booting...<span className="blink-cursor">█</span>
        </div>

        <div className="terminal-logs">
          {bootSequence.slice(0, messageIndex).map((msg, i) => (
            <div key={i} className="log-line old-log">{'>'} {msg}</div>
          ))}
          <div className="log-line current-log">
            {'>'} {bootSequence[messageIndex]}
          </div>
        </div>

        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">
            {Math.floor(progress)}%
          </div>
        </div>

      </div>
    </div>
  );
};

export default SplashScreen;