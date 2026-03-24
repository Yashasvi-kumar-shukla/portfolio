import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar'; 
import Hero3D from './components/Hero3D';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 
import './App.css'; // Ensure your CSS is linked!

function App() {
  const [isBooting, setIsBooting] = useState(true);

  // SYSTEM LOCK: Prevent scrolling during the Matrix boot sequence
  useEffect(() => {
    if (isBooting) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; 
    }
    
    // Safety cleanup
    return () => {
      document.body.style.overflow = '';
    };
  }, [isBooting]);

  return (
    <div className="App" style={{ position: 'relative', backgroundColor: '#000' }}>
      
      {/* 1. THE SPLASH SCREEN LAYER */}
      {isBooting && <SplashScreen onComplete={() => setIsBooting(false)} />}
      
      {/* 2. THE MAIN APP WRAPPER */}
      <div 
        className="app-content-wrapper"
        style={{ 
          opacity: isBooting ? 0 : 1, 
          pointerEvents: isBooting ? 'none' : 'auto',
          transition: 'opacity 0.8s ease-in' 
        }}
      >
        <Navbar />
        
        {/* Fixed 3D Background */}
        <Hero3D /> 

        {/* THE MASTER FIX: THE GLASS SHIELD */}
        {/* Invisible physical barrier on mobile to catch swipes and force native scrolling */}
        <div className="mobile-glass-shield"></div>
        
        {/* Spacer to push content down below the initial Hero viewport */}
        <div className="scroll-spacer"></div>

        {/* Foreground Content Sections */}
        <div className="section-container" style={{ position: 'relative', zIndex: 10, backgroundColor: '#000' }}>
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
          <Footer /> 
        </div>

      </div>
    </div>
  );
}

export default App;