import "./Projects.css";

import RecipeFinderImg from "../../assets/recipe-finder.png";
import NineOktasImg from "../../assets/nine-oktas.png";
import StudyTimerImg from "../../assets/study-timer.png";
import SunnySideImg from "../../assets/sunnyside-landing.png";
import Project from "../Project/Project";

const PROJECTS = [
  {
    name: "Study Timer",
    imgSrc: StudyTimerImg,
    desc: "A timer for study sessions.",
    techs: ["html", "css", "react", "javascript", "tailwind"],
  },
  {
    name: "9 Oktas Cloud Storage",
    imgSrc: NineOktasImg,
    desc: "9oktas Cloud Storage App Website",
    techs: ["html", "css", "react", "javascript", "firebase", "node"],
  },
  {
    name: "Recipe Finder",
    imgSrc: RecipeFinderImg,
    desc: "Helps you search recipes.",
    techs: ["html", "css", "react", "javascript"],
  },
  {
    name: "Sunny Side Landing Page",
    imgSrc: SunnySideImg,
    desc: "Landing Page",
    techs: ["html", "css", "sass"],
  },
];

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
          <Project project={project} />
        ))}
      </div>
    </div>
  );
}
