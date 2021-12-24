import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutMe from "./components/AboutMe/AboutMe";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";
import Experience from "./components/Experience&Education/Experience&Education";
import Contact from "./components/Contact/Contact";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import Articles from "./components/Articles/Articles";

function App() {
  const [selectedTechs, setSelectedTechs] = useState([
    "javascript",
    "html",
    "css",
    "react",
    "node",
    "postgres",
    "mongodb",
    "tailwind",
    "sass",
    "firebase",
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <div className="main">
                <AboutMe />
                <TechStack
                  selectedTechs={selectedTechs}
                  setSelectedTechs={setSelectedTechs}
                />
                <Projects selectedTechs={selectedTechs} />
                <Experience />
                <Contact />
              </div>
            </div>
          }
        />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
