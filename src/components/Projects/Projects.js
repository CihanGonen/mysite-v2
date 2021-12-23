import "./Projects.css";

import Project from "../Project/Project";

import { PROJECTS } from "../../utils/Projects.js";

export default function Projects({ selectedTechs }) {
  return (
    <div className="projects-wrapper">
      <div className="projects-heading">
        <h1>Some of my Projects</h1>
      </div>
      <div className="projects-showcase">
        {PROJECTS.filter((project) =>
          selectedTechs
            .map((selectedTech) => {
              return project.techs.includes(selectedTech);
            })
            .includes(true)
            ? true
            : false
        ).map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
