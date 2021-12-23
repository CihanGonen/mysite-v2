import "./ProjectDetail.css";

import { PROJECTS } from "../../utils/Projects.js";

import { useParams } from "react-router-dom";

const TECH_ARR = [
  { name: "html", elem: <i className="devicon-html5-plain"></i> },
  { name: "css", elem: <i className="devicon-css3-plain"></i> },
  { name: "javascript", elem: <i className="devicon-javascript-plain"></i> },
  { name: "react", elem: <i className="devicon-react-plain"></i> },
  { name: "node", elem: <i className="devicon-nodejs-plain"></i> },
  { name: "firebase", elem: <i className="devicon-firebase-plain"></i> },
  { name: "tailwind", elem: <i className="devicon-tailwindcss-plain"></i> },
  { name: "sass", elem: <i className="devicon-sass-plain"></i> },
  { name: "psql", elem: <i className="devicon-postgresql-plain"></i> },
  { name: "mongodb", elem: <i className="devicon-mongodb-plain"></i> },
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
        <h2>{project.name}</h2>
        <p>{project.longDesc}</p>
        <div className="detail-icons">
          {TECH_ARR.map((tech) => {
            return project.techs.includes(tech.name) ? tech.elem : null;
          })}
        </div>
      </div>
    </div>
  );
}
