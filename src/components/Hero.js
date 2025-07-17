import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Hero.css';

function Hero() {
  const [text] = useTypewriter({
    words: ['Yashasvi', 'a Developer', 'a Problem Solver', 'a Programmer'],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
    >
      <h1>
        Hi, I'm <span className="typewriter-text">{text}</span>
        <Cursor cursorStyle="|" />
      </h1>
      <p>
        Computer Science Engineer with expertise in software development and full-stack web technologies. Passionate about
        scalable solutions, problem-solving, and system security. Seeking an opportunity to apply my skills in a challenging software
        development role.
      </p>
    </motion.div>
  );
}

export default Hero;