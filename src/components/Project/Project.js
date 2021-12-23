import "./Project.css";
import { Link } from "react-router-dom";
export default function Project({ project }) {
  return (
    <div className="project">
      <Link to={`/projects/${project.id}`}>
        <div className="project-img-wrapper">
          <img src={project.imgSrc} alt={project.name} />
        </div>
        <div className="project-desc">
          <p>{project.desc}</p>
        </div>
      </Link>
    </div>
  );
}
