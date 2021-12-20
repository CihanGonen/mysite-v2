import "./Project.css";

export default function Project({ project }) {
  return (
    <div className="project">
      <div className="project-img-wrapper">
        <img src={project.imgSrc} alt={project.name} />
      </div>
      <div className="project-desc">
        <p>{project.desc}</p>
      </div>
    </div>
  );
}
