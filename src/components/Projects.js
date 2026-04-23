import React, { useState, useEffect, useRef, useMemo, Suspense } from 'react';
import { useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Environment, ContactShadows } from '@react-three/drei';
import { projectsData } from '../data/portfolioData';
import * as THREE from 'three';
import './Projects.css';

// --- THE PROJECT CARD (Scroll Tracker & Button Logic) ---
const ProjectCard = ({ project, index, setActiveType }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveType(project.type === 'app' ? 'app' : 'web');
    }
  }, [isInView, project.type, setActiveType]);

  // THE FIX: Precise Button Logic & Routing
  const titleLower = project.title.toLowerCase();
  
  // Hide VIEW_SOURCE for LMS Portal (but SHOW it for Comfy)
  const showViewSource = !titleLower.includes('lms');
  
  // Hide INITIATE_LINK for Apps, LMS, Apex Logic, and Portfolio
  const hideLinkKeywords = ['lms', 'apex', 'portfolio'];
  const hideInitiateLink = project.type === 'app' || hideLinkKeywords.some(kw => titleLower.includes(kw));
  const showInitiateLink = !hideInitiateLink;

  // Route the user to the correct link based on the project title
  const handleViewSource = () => {
    if (titleLower.includes('comfy')) {
      window.open('https://www.comfyemobility.com/', '_blank');
    } else if (titleLower.includes('payflow')) {
      window.open('https://play.google.com/store/apps/details?id=com.rinzler.offline_expense_tracker', '_blank');
    } else if (titleLower.includes('apex')) {
      window.open('https://apexlogic.in/', '_blank');
    } else if (titleLower.includes('portfolio')) {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top for current site
    }
  };

  return (
    <div className="project-card" ref={ref}>
      <div className="project-card-header">
        <span className="project-number">0{index + 1}</span>
        <span className="project-type-badge">{project.type.toUpperCase()}</span>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      
      {/* Conditionally rendered links container */}
      <div className="project-links">
        {showViewSource && (
          <button className="btn-terminal" onClick={handleViewSource}>
            {'>'} VIEW_SOURCE
          </button>
        )}
      </div>
    </div>
  );
};

// --- 3D MODEL: Waving Android Bugdroid ---
const Bugdroid = () => {
  const armRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    if (armRef.current) {
      armRef.current.rotation.z = 2.5 + Math.sin(state.clock.elapsedTime * 8) * 0.8;
    }
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={1.2}>
      <mesh position={[0, 0, 0]}><cylinderGeometry args={[0.5, 0.5, 1, 32]} /><meshStandardMaterial color="#00FF41" roughness={0.3} metalness={0.8} /></mesh>
      <mesh position={[0, 0.55, 0]}><sphereGeometry args={[0.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} /><meshStandardMaterial color="#00FF41" roughness={0.3} metalness={0.8} /></mesh>
      <mesh position={[-0.2, 0.7, 0.45]}><sphereGeometry args={[0.05]} /><meshBasicMaterial color="#000" /></mesh>
      <mesh position={[0.2, 0.7, 0.45]}><sphereGeometry args={[0.05]} /><meshBasicMaterial color="#000" /></mesh>
      <mesh position={[-0.3, 1.1, 0]} rotation={[0, 0, 0.3]}><cylinderGeometry args={[0.02, 0.02, 0.3]} /><meshStandardMaterial color="#00FF41" /></mesh>
      <mesh position={[0.3, 1.1, 0]} rotation={[0, 0, -0.3]}><cylinderGeometry args={[0.02, 0.02, 0.3]} /><meshStandardMaterial color="#00FF41" /></mesh>
      <mesh position={[-0.65, 0.1, 0]}><capsuleGeometry args={[0.1, 0.4, 4, 16]} /><meshStandardMaterial color="#00FF41" /></mesh>
      <group position={[0.65, 0.3, 0]} ref={armRef}>
        <mesh position={[0, -0.2, 0]}><capsuleGeometry args={[0.1, 0.4, 4, 16]} /><meshStandardMaterial color="#00FF41" /></mesh>
      </group>
      <mesh position={[-0.25, -0.6, 0]}><capsuleGeometry args={[0.1, 0.3]} /><meshStandardMaterial color="#00FF41" /></mesh>
      <mesh position={[0.25, -0.6, 0]}><capsuleGeometry args={[0.1, 0.3]} /><meshStandardMaterial color="#00FF41" /></mesh>
    </group>
  );
};

// --- 3D MODEL: Web Monitor with Custom Browser UI ---
const WebMonitor = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={1.2}>
      <mesh position={[0, 0.5, 0]}><boxGeometry args={[2.2, 1.4, 0.1]} /><meshStandardMaterial color="#111" roughness={0.2} metalness={0.9} /></mesh>
      <mesh position={[0, -0.2, -0.05]}><cylinderGeometry args={[0.05, 0.05, 0.6]} /><meshStandardMaterial color="#333" metalness={0.8} /></mesh>
      <mesh position={[0, -0.5, -0.05]}><boxGeometry args={[0.8, 0.05, 0.4]} /><meshStandardMaterial color="#222" metalness={0.8} /></mesh>
      <mesh position={[0, 0.5, 0.061]}><planeGeometry args={[2.0, 1.2]} /><meshBasicMaterial color="#000" /></mesh>

      <Html transform distanceFactor={1.5} position={[-0.52, 0.47, 0.061]}>
        <div className="browser-window">
          <div className="browser-header">
            <div className="browser-tab-container">
              <div className="browser-tab">web <span className="close-x">⊗</span></div>
            </div>
            <div className="browser-address-bar"></div> 
          </div>
          <div className="browser-body">
            <div className="browser-symbol">{'</>'}</div>
          </div>
        </div>
      </Html>
    </group>
  );
};

// --- 3D PARTICLE SYSTEM: The Shatter Effect ---
const ShatterTransition = ({ isAnimating }) => {
  const particlesRef = useRef([]);
  
  const particles = useMemo(() => {
    return Array.from({ length: 64 }).map(() => ({
      targetX: (Math.random() - 0.5) * 30,
      targetY: (Math.random() - 0.5) * 30 + 0.5,
      targetZ: (Math.random() - 0.5) * 30 + 2,
      targetRx: Math.random() * Math.PI * 4,
      targetRy: Math.random() * Math.PI * 4,
    }));
  }, []);

  useFrame(() => {
    particlesRef.current.forEach((mesh, i) => {
      if (!mesh) return;
      if (isAnimating) {
        mesh.position.x = THREE.MathUtils.lerp(mesh.position.x, particles[i].targetX, 0.1);
        mesh.position.y = THREE.MathUtils.lerp(mesh.position.y, particles[i].targetY, 0.1);
        mesh.position.z = THREE.MathUtils.lerp(mesh.position.z, particles[i].targetZ, 0.1);
        mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, particles[i].targetRx, 0.1);
        mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, particles[i].targetRy, 0.1);
        mesh.scale.setScalar(THREE.MathUtils.lerp(mesh.scale.x, 0.3, 0.1));
      } else {
        mesh.position.x = THREE.MathUtils.lerp(mesh.position.x, 0, 0.15);
        mesh.position.y = THREE.MathUtils.lerp(mesh.position.y, 0.5, 0.15);
        mesh.position.z = THREE.MathUtils.lerp(mesh.position.z, 0, 0.15);
        mesh.scale.setScalar(THREE.MathUtils.lerp(mesh.scale.x, 0, 0.2));
      }
    });
  });

  return (
    <group>
      {particles.map((_, i) => (
        <mesh key={i} ref={(el) => (particlesRef.current[i] = el)} scale={0}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#00FF41" emissive="#00FF41" emissiveIntensity={0.8} wireframe />
        </mesh>
      ))}
    </group>
  );
};

// --- WRAPPER TO HANDLE SCALE ANIMATION ---
const ModelWrapper = ({ displayedType, isAnimating }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      const targetScale = isAnimating ? 0 : 1;
      groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.15));
    }
  });

  return (
    <group ref={groupRef}>
      {displayedType === 'app' ? <Bugdroid /> : <WebMonitor />}
    </group>
  );
};

// --- THE MAGIC SIZE FIXER ---
const SceneAnchor = ({ displayedType, isAnimating }) => {
  return (
    <group scale={0.4} position={[0, 0, 0]}>
      <ShatterTransition isAnimating={isAnimating} />
      <ModelWrapper displayedType={displayedType} isAnimating={isAnimating} />
      <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} />
    </group>
  );
};

// --- THE 3D CANVAS COMPONENT ---
const CanvasVisualizer = ({ activeType }) => {
  const [displayedType, setDisplayedType] = useState(activeType);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (activeType !== displayedType && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setDisplayedType(activeType), 500); 
      setTimeout(() => setIsAnimating(false), 1000);
    }
  }, [activeType, displayedType, isAnimating]);

  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={<Html center><span style={{color: '#00FF41', fontFamily: 'monospace'}}>INITIALIZING...</span></Html>}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Environment preset="city" />
          <SceneAnchor displayedType={displayedType} isAnimating={isAnimating} />
        </Suspense>
      </Canvas>
    </div>
  );
};

// --- MAIN PROJECTS LAYOUT ---
const Projects = () => {
  const [activeType, setActiveType] = useState('app');

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        
        <div className="projects-left-column">
          <div className="section-header-inline">
            <span className="header-prefix">{'//'}</span>
            <h2>EXECUTED PROJECTS</h2>
          </div>
          
          <div className="sticky-canvas-wrapper">
            <div className="divine-glow"></div>
            <CanvasVisualizer activeType={activeType} />
          </div>
        </div>

        <div className="projects-list">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
              setActiveType={setActiveType} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;