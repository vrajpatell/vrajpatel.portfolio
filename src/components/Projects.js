import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <section id="projects">
      <h2>GitHub Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <a href={project.url}>{project.name}</a> - {project.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
