import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Float, PresentationControls, ContactShadows, Environment } from '@react-three/drei';
import { useScroll, useTransform } from 'framer-motion';
import Terminal from './Terminal';

const ProceduralLaptop = () => {
  const { scrollYProgress } = useScroll();
  const scrollGroupRef = useRef(); 
  
  // Z-Axis: Starts at 7, zooms out to -6 on scroll
  const zPos = useTransform(scrollYProgress, [0, 0.5], [7, -6]); 
  // Y-Axis: Clears Navbar, moves down on scroll
  const yPos = useTransform(scrollYProgress, [0, 0.5], [-0.5, -1.5]);
  // Rotation: Starts flat, tilts back on scroll
  const rotationX = useTransform(scrollYProgress, [0, 0.5], [0.05, -0.4]);

  useFrame(() => {
    if (scrollGroupRef.current) {
      scrollGroupRef.current.position.z = zPos.get();
      scrollGroupRef.current.position.y = yPos.get();
      scrollGroupRef.current.rotation.x = rotationX.get();
    }
  });

  return (
    <group ref={scrollGroupRef}>
      <PresentationControls
        global
        rotation={[0, 0, 0]}
        polar={[-0.1, 0.1]}   // Limits vertical tilt
        azimuth={[-0.2, 0.2]} // Limits horizontal tilt
      >
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
          
          {/* --- THE LID (SCREEN) --- */}
          <group position={[0, 1.5, -1.5]}>
            <mesh>
              <boxGeometry args={[5.2, 3.4, 0.1]} />
              <meshStandardMaterial color="#b0b0b0" metalness={0.9} roughness={0.2} />
            </mesh>
            
            <mesh position={[0, 0, 0.051]}>
              <planeGeometry args={[5.0, 3.2]} />
              <meshStandardMaterial color="#050505" roughness={0.8} />
            </mesh>

            {/* The Terminal Screen */}
            <Html
              transform
              distanceFactor={1.75}
              position={[0, 0, 0.06]} 
            >
              <Terminal />
            </Html>
          </group>

          {/* --- THE BASE (KEYBOARD AREA) --- */}
          <group position={[0, 0, 0]}>
            <mesh>
              <boxGeometry args={[5.2, 0.15, 3.4]} />
              <meshStandardMaterial color="#b0b0b0" metalness={0.9} roughness={0.2} />
            </mesh>
            
            <mesh position={[0, 0.08, -0.2]}>
              <boxGeometry args={[4.8, 0.01, 1.6]} />
              <meshStandardMaterial color="#111111" />
            </mesh>

            <mesh position={[0, 0.08, 1.1]}>
              <boxGeometry args={[1.6, 0.01, 0.9]} />
              <meshStandardMaterial color="#888888" roughness={0.4} />
            </mesh>
          </group>

          {/* Hinge */}
          <mesh position={[0, 0.08, -1.6]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.08, 0.08, 5.2, 32]} />
            <meshStandardMaterial color="#333333" metalness={0.8} />
          </mesh>

          {/* Green Matrix Light Glow */}
          <rectAreaLight
            width={5.0}
            height={3.2}
            intensity={20}
            color={'#00FF41'}
            position={[0, 1.5, -1.4]}
          />
        </Float>
      </PresentationControls>
    </group>
  );
};

const Hero3D = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 1, background: '#000' }}>
      <Canvas camera={{ fov: 40, position: [0, 1, 12] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Environment preset="city" /> 
          <ProceduralLaptop />
          <ContactShadows position={[0, -1, 0]} opacity={0.6} scale={20} blur={2.5} far={4} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;