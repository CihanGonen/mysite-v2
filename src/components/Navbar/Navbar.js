import "./Navbar.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>Cihan Gönen</h2>
      </div>
      <div className="navbar-right">
        <Link to="/cv" target="_blank">
          <h4>Get my CV</h4>
        </Link>
        <h4 style={{ color: "#1df7dd" }}>/</h4>
        <h4>Articles</h4>
      </div>
    </div>
  );
}
