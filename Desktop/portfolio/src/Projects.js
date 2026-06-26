const projects = [
  {
    id: 1,
    title: "Gaming Dashboard",
    description: "A dashboard for discovering and tracking games using an external API.",
    github: "https://github.com/DootjeB88/Gaming-Dashboard",
    live: "https://gaming-dashboard-beta.vercel.app"
  },
  {
  id: 2,
  title: "Pet Warning Designer",
  description: "An interactive tool to create personalized pet warning signs.",
  github: "https://github.com/DootjeB88/Pet-Warning-Designer",
  live: "https://pet-warning-designer-5yo3jusjk-dbloks.vercel.app"
},
  {
  id: 3,
  title: "TaskForge",
  description: "A full-stack project management app with Kanban board and task tracking.",
  github: "https://github.com/DootjeB88/TaskForge",
  live: "https://task-forge-amber.vercel.app"
},
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a className="project-link" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              {project.live && (
                <a className="project-link live" href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;