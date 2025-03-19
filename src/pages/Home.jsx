import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "../styles/Global.css"; 

function Home() {
  return (
    <div className="page-wrapper">
      <div className="hero-inner">
        <img
          src="/profile.jpg" 
          alt="Your Name"
          className="profile-pic"
        />
        <div className="hero-text">
          <h1>Triumph Kia Teh</h1>
          <h2>Aspiring Quant Developer</h2>
          <p>I am a junior at Dartmouth College majoring in Computer Science and Mathematics. 
            I am interested in the intersection of software engineering and quantitative finance, 
            computer vision, AI, and systematic trading. My work spans machine learning, 
            web and software development, and algorithmic problem-solving.</p>
          <div className="cta-buttons">
            <a href="/resume.pdf" download className="resume-btn">Resume</a>
            <Link to="/projects" className="projects-btn">Projects</Link>
            <Link to="/contact" className="contact-btn">Contact</Link>
            <a href="https://github.com/Triumph-KT" target="_blank" rel="noopener noreferrer" className="github-btn">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
