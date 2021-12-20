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
  },
  {
    name: "9 Oktas Cloud Storage",
    imgSrc: NineOktasImg,
    desc: "9oktas Cloud Storage App Website",
  },
  {
    name: "Recipe Finder",
    imgSrc: RecipeFinderImg,
    desc: "Helps you search recipes.",
  },
  {
    name: "Sunny Side Landing Page",
    imgSrc: SunnySideImg,
    desc: "Landing Page",
  },
];

export default function Projects() {
  return (
    <div className="projects-wrapper">
      <div className="projects-heading">
        <h1>Some of my Projects</h1>
      </div>
      <div className="projects-showcase">
        {PROJECTS.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
}
