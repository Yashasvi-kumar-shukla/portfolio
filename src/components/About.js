import React from 'react';
import './About.css';

function About() {
  return (
    <section
      id="about"
      className="about"
      style={{
        background: `url(${process.env.PUBLIC_URL + '/bg.jpg'}) no-repeat center center/cover`,
      }}
    >
      <div className="glass">
        <h2>About Me</h2>
        <p>
          I’m a curious mind driven by a love for building clean, intelligent, and impactful tech. Whether it’s designing sleek UIs or developing machine learning systems, I enjoy solving problems that make a real difference. I believe in writing code that not only works, but lasts — scalable, understandable, and efficient. Outside of development, I’m always learning, exploring emerging technologies, and leveling up my skills to stay ahead in this ever-evolving field.
        </p>
      </div>
    </section>
  );
}

export default About;