// src/components/Projects.tsx
import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Tic Tac Toe Game",
    description: "A web-based implementation of the timeless Tic Tac Toe game, built with HTML, CSS, and JavaScript. The project includes dynamic UI updates, animations, score tracking, and engaging effects to enhance user experience on both desktop and mobile platforms.",
    tech: ["HTML", "CSS", "JavaScript"],
    desktopGif: "/gifs/tictactoe-desktop.gif",
    mobileGif: "/gifs/tictactoe-mobile.gif",
    github: "https://github.com/utkarshsood993/Tic-Tac-Toe",
    live: "https://usoodtictactoe.netlify.app/",
  },
  {
    title: "Hospital Management System",
    description:
      "A modern, fully responsive hospital management system built to streamline core hospital operations. The platform supports real-time appointment booking, live availability tracking of ICU/general beds and ambulances, discharge billing with automated cost calculation, and on-demand medical certificate PDF generation.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    desktopGif: "/gifs/hms-desktop.gif", // ✅ only desktop view
    mobileGif: "", // 👈 keep empty
    github: "", // 👈 not public
    live: "https://usoodhospitalmanagement.netlify.app/",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-media">
              {/* Desktop GIF */}
              {project.desktopGif && (
                <div className="device desktop">
                  <img
                    src={project.desktopGif}
                    alt={`${project.title} Desktop View`}
                  />
                </div>
              )}

              {/* Mobile GIF - only if it exists */}
              {project.mobileGif && (
                <div className="device mobile">
                  <img
                    src={project.mobileGif}
                    alt={`${project.title} Mobile View`}
                  />
                </div>
              )}
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-tags">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
