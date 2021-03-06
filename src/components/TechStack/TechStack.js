import "./TechStack.css";

export default function TechStack({ selectedTechs, setSelectedTechs }) {
  const techChoosingAction = (str) => {
    if (selectedTechs.includes(str)) {
      setSelectedTechs((prevSelectedTechs) => {
        return prevSelectedTechs.filter((tech) => tech !== str);
      });
    } else {
      setSelectedTechs((prevSelectedTechs) => {
        return [...prevSelectedTechs, str];
      });
    }
  };

  return (
    <div className="tech-stack-wrapper">
      <div className="tech-stack-heading">
        <h1>Tech Stack</h1>
        <h4>Toggle technologies to see related projects</h4>
      </div>
      <div className="tech-stack-logos">
        <i
          style={
            selectedTechs.includes("javascript")
              ? {}
              : { filter: "invert(0.7)" }
          }
          onClick={() => techChoosingAction("javascript")}
          className="devicon-javascript-plain"
        ></i>

        <i
          style={
            selectedTechs.includes("html") ? {} : { filter: "invert(0.7)" }
          }
          onClick={() => techChoosingAction("html")}
          className="devicon-html5-plain"
        ></i>
        <i
          style={selectedTechs.includes("css") ? {} : { filter: "invert(0.7)" }}
          onClick={() => techChoosingAction("css")}
          className="devicon-css3-plain"
        ></i>
        <i
          style={
            selectedTechs.includes("react") ? {} : { filter: "invert(0.7)" }
          }
          onClick={() => techChoosingAction("react")}
          className="devicon-react-original"
        ></i>
        <i
          style={
            selectedTechs.includes("node") ? {} : { filter: "invert(0.7)" }
          }
          onClick={() => techChoosingAction("node")}
          className="devicon-nodejs-plain"
        ></i>
        <i
          style={
            selectedTechs.includes("psql") ? {} : { filter: "invert(0.7)" }
          }
          onClick={() => techChoosingAction("psql")}
          className="devicon-postgresql-plain"
        ></i>
        <i
          style={
            selectedTechs.includes("mongodb") ? {} : { filter: "invert(0.7)" }
          }
          onClick={() => techChoosingAction("mongodb")}
          className="devicon-mongodb-plain"
        ></i>
        <i
          style={
            selectedTechs.includes("tailwind") ? {} : { filter: "invert(0.7)" }
          }
          onClick={() => techChoosingAction("tailwind")}
          className="devicon-tailwindcss-plain"
        ></i>
        <i
          style={
            selectedTechs.includes("sass") ? {} : { filter: "invert(0.7)" }
          }
          onClick={() => techChoosingAction("sass")}
          className="devicon-sass-original"
        ></i>
        <i
          style={
            selectedTechs.includes("firebase") ? {} : { filter: "invert(0.7)" }
          }
          onClick={() => techChoosingAction("firebase")}
          className="devicon-firebase-plain"
        ></i>
      </div>
    </div>
  );
}
