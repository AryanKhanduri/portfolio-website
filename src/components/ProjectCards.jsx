import "./ProjectCards.css";
function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <section>
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>

      <span>{tech}</span>

      <div className="project-links">
        <a href={demo}>Demo (Coming soon)</a>
        <a href={github}>GitHub (Coming soon)</a>
      </div>
    </div>
    </section>
  );
}

export default ProjectCard;