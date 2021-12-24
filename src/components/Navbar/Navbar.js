import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>Cihan Gönen</h2>
      </div>
      <div className="navbar-right">
        <a
          href="https://cihangonen.github.io/myCV/"
          target="_blank"
          rel="noreferrer"
        >
          <h4>Get my CV</h4>
        </a>
        <h4 style={{ color: "#1df7dd" }}>/</h4>
        <Link to="/articles">
          <h4>Articles</h4>
        </Link>
      </div>
    </div>
  );
}
