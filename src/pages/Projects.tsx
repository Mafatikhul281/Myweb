import React from "react";

const projects = [
  {
    name: "18x18 Tic Tac Toe",
    description: "2 player 18x18 Tic Tac Toe build with flask.",
    link: "https://github.com/Mafatikhul281/Tictactoe18",
  },
  {
    name: "Seberapa Nasionalis",
    description: "just my boredom project.",
    link: "https://github.com/Mafatikhul281/seberapa-nasionalis",
  },
  {
    name: "BlockTap",
    description: "Vibe Coding btw.",
    link: "https://blocktap.lovable.app",
  },
];

const Projects: React.FC = () => (
  <section>
    <h1>My Projects</h1>
    <ul>
      {projects.map((project) => (
        <li key={project.name} style={{ marginBottom: "16px" }}>
          <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", color: "#7aa2f7" }}>
            {project.name}
          </a>
          <p>{project.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;
