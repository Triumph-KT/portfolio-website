import "../styles/Global.css"; 

function Projects() {
  const projectList = [
    {
      title: "Stock & Sentiment Analysis Dashboard",
      description: "A Streamlit-based dashboard that analyzes stock trends and news sentiment.",
      image: "/projects/stock-dashboard.png",
      link: "https://github.com/Triumph-KT/Stock-Data-News-Sentiment-Dashboard"
    },
    {
      title: "Collaborative-Graphical-Editor",
      description: "A multi-client and server-based drawing system where multiple users can interact with the same sketch in real time.",
      image: "/projects/collaborative-graphic.png",
      link: "https://github.com/Triumph-KT/Collaborative-Graphical-Editor"
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="container">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
