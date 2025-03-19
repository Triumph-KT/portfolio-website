import "../styles/Global.css";

function TechCourses() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <h1>Tech & Courses</h1>

        {/* Grid Container to align categories like the project page */}
        <div className="tech-grid">
          {/* Programming Languages */}
          <div className="tech-card">
            <h2>Programming Languages</h2>
            <ul className="tech-list">
              <li>Python</li>
              <li>Java</li>
              <li>C</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
          </div>

          {/* Tools & Frameworks */}
          <div className="tech-card">
            <h2>Tools & Frameworks</h2>
            <ul className="tech-list">
              <li>React.js</li>
              <li>Node.js</li>
              <li>Django</li>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>Scikit-Learn</li>
              <li>Pandas & NumPy</li>
              <li>Docker</li>
              <li>Git & GitHub</li>
              <li>Streamlit</li>
            </ul>
          </div>

          {/* Relevant Courses */}
          <div className="tech-card">
            <h2> Computer Science Courses</h2>
            <ul className="tech-list">
              <li>Data Strutures and Algorithms</li>
              <li>Software Design and Implementation</li>
              <li>Computer Security and Privacy</li>
              <li>Theory of Computation</li>
              <li>Math for Machine Learning</li>
              <li>Numerical Methods in Computation</li>
              <li>Scientific Computing</li>
            </ul>
          </div>
          <div className="tech-card">
            <h2> Mathematics Courses</h2>
            <ul className="tech-list">
              <li>Probability Theory</li>
              <li>Evolutionary Game Theory</li>
              <li>Linear Algebra</li>
              <li>Statistical Methods</li>
              <li>Differential Equations</li>
              <li>Topology 1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechCourses;
