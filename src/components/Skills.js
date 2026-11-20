import React from 'react';
import { skillsCategories } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  return (
    <section className="section-wrapper" id="skills">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">// 02. Technical Stack</span>
          <h2 className="section-title">Core Skills &amp; Architecture Tools</h2>
          <p className="section-subtitle">
            Technologies I use daily to design, build, and deploy full-stack web applications and
            cross-platform mobile software.
          </p>
        </div>

        <div className="skills-grid">
          {skillsCategories.map((group) => (
            <article key={group.id} className="skill-category-card">
              <div>
                <p className="skill-cat-eyebrow">{group.subtitle}</p>
                <h3 className="skill-cat-title">{group.category}</h3>
                <p className="skill-cat-desc">{group.description}</p>
              </div>

              <div className="skill-pills-wrap">
                {group.skills.map((skill) => (
                  <span key={skill.name} className="skill-pill">
                    <span className="skill-dot"></span>
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
