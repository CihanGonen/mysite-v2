import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutMe from "./components/AboutMe/AboutMe";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";
import Experience from "./components/Experience&Education/Experience&Education";
import Contact from "./components/Contact/Contact";

import CV from "./assets/cihangonen-cv.pdf";

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
        <Route
          path="/cv"
          element={
            <iframe
              id="pdf-js-viewer"
              src={`web/viewer.html?file=${CV}`}
              title="webviewer"
              width="100%"
              height="100vw"
            ></iframe>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
