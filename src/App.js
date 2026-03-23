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

function App() {
  const [isBooting, setIsBooting] = useState(true);

  // SYSTEM LOCK: Prevent scrolling during boot
  useEffect(() => {
    if (isBooting) {
      document.body.style.overflow = 'hidden';
    } else {
      // THE FIX: Reset to an empty string instead of 'auto'. 
      // This removes the inline style completely and saves position: sticky!
      document.body.style.overflow = ''; 
    }
    
    // Safety cleanup
    return () => {
      document.body.style.overflow = '';
    };
  }, [isBooting]);

  return (
    <div style={{ position: 'relative', backgroundColor: '#000' }}>
      
      {/* 1. THE SPLASH SCREEN LAYER */}
      {isBooting && <SplashScreen onComplete={() => setIsBooting(false)} />}
      
      {/* 2. THE MAIN APP WRAPPER */}
      <div style={{ 
        opacity: isBooting ? 0 : 1, 
        pointerEvents: isBooting ? 'none' : 'auto',
        transition: 'opacity 0.8s ease-in' 
      }}>
        
        <Navbar />
        <Hero3D /> 
        
        <div style={{ height: '100vh', width: '100%' }}></div>

        <div style={{ position: 'relative', zIndex: 10, backgroundColor: '#000' }}>
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