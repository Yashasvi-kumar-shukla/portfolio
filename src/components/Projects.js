import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Platforms' },
    { id: 'app', label: 'Mobile Apps' },
    { id: 'saas', label: 'SaaS' }
  ];

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section className="section-wrapper" id="projects">
      <div className="section-inner">
        <div className="projects-header-row">
          <div className="section-header">
            <span className="section-eyebrow">// 03. Selected Work</span>
            <h2 className="section-title">Executed Projects &amp; Systems</h2>
            <p className="section-subtitle">
              Production deployments, mobile applications, and full-stack platforms engineered for
              real-world usage.
            </p>
          </div>

          <div className="filter-bar" role="tablist" aria-label="Filter projects by category">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={filter === item.id}
                className={`filter-btn ${filter === item.id ? 'active' : ''}`}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => {
            const isExternal = project.liveUrl && project.liveUrl.startsWith('http');

            return (
              <article key={project.id} className="project-card">
                <div>
                  <div className="project-card-top">
                    <span className="project-index-category">
                      <span className="project-index">0{idx + 1}</span>
                      <span>•</span>
                      <span>{project.categoryLabel}</span>
                    </span>

                    <span className={`status-badge ${project.statusType}`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>

                  <ul className="project-highlights">
                    {project.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="project-tech-row">
                    {project.tech.map((tag) => (
                      <span key={tag} className="project-tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-card-footer">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="btn-project-live"
                      {...(isExternal
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {project.liveLabel} <span>↗</span>
                    </a>
                  )}

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project-repo"
                    >
                      GitHub Profile ↗
                    </a>
                  )}

                  {!project.liveUrl && !project.repoUrl && (
                    <span className="project-private-note">
                      Active build • Architecture demo available on request
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
