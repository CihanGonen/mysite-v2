import "./ProjectDetail.css";

import { PROJECTS } from "../../utils/Projects.js";

import { useParams } from "react-router-dom";

const TECH_ARR = [
  { name: "html", elem: <i key={"html"} className="devicon-html5-plain"></i> },
  { name: "css", elem: <i key={"css"} className="devicon-css3-plain"></i> },
  {
    name: "javascript",
    elem: <i key={"javascript"} className="devicon-javascript-plain"></i>,
  },
  {
    name: "react",
    elem: <i key={"react"} className="devicon-react-plain"></i>,
  },
  { name: "node", elem: <i key={"node"} className="devicon-nodejs-plain"></i> },
  {
    name: "firebase",
    elem: <i key={"firebase"} className="devicon-firebase-plain"></i>,
  },
  {
    name: "tailwind",
    elem: <i key={"tailwind"} className="devicon-tailwindcss-plain"></i>,
  },
  { name: "sass", elem: <i key={"sass"} className="devicon-sass-plain"></i> },
  {
    name: "psql",
    elem: <i key={"psql"} className="devicon-postgresql-plain"></i>,
  },
  {
    name: "mongodb",
    elem: <i key={"mongodb"} className="devicon-mongodb-plain"></i>,
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.filter((project) => project.id === Number(id))[0];
  console.log(project);
  return (
    <div className="detail-wrapper">
      <div className="detail-img-wrapper">
        <img src={project.imgSrc} alt={project.name} />
      </div>
      <div className="detail-right-side">
        <div className="detail-heading">
          <h2>{project.name}</h2>
          <div style={{ display: "flex", gap: "1rem", color: "white" }}>
            {project.liveApp && (
              <a
                href={project.liveApp}
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                Live App
              </a>
            )}

            <p style={{ color: "#1df7dd" }}> / </p>
            {project.sourceCode && (
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                Source Code
              </a>
            )}
          </div>
        </div>
        <p>{project.longDesc}</p>
        {project.techDesc}
        <div className="detail-icons">
          {TECH_ARR.map((tech) => {
            return project.techs.includes(tech.name) ? tech.elem : null;
          })}
        </div>
      </div>
    </div>
  );
}
