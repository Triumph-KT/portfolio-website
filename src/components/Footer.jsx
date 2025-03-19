import { FaGithub } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Triumph Kia Teh</p>
      <a href="https://github.com/Triumph-KT" target="_blank" rel="noopener noreferrer">
        <FaGithub /> GitHub
      </a>
    </footer>
  );
}

export default Footer;
