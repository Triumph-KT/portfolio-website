import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Imports the Navbar styles

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/tech-courses" onClick={() => setIsOpen(false)}>Tech & Courses</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        {/* GitHub Icon */}
        <li>
          <a href="https://github.com/Triumph-KT" target="_blank" rel="noopener noreferrer">
            <FaGithub className="github-icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
