import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <AboutMe />
        <TechStack />
        <Projects />
      </div>
    </div>
  );
}

export default App;
