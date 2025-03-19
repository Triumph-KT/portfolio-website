import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TechCourses from "./pages/TechCourses";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/Global.css"; // Ensures global styles apply
import Footer from "./components/Footer"; // Import Footer

function App() {
  return (
    <Router>
      <Navbar /> {/* Uses the Navbar.jsx component instead of a manual nav */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech-courses" element={<TechCourses />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Add Footer here */}
    </Router>
  );
}

export default App;
