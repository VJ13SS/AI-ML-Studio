import projects from "./projectsData";
import "./projects.css";
import { LuSearch } from "react-icons/lu";
import {
  FaCode,
  FaGithub,
  FaDatabase,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useState } from "react";

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");

  const displayProjects = projects.filter((project) => {
    const matchesSerach =
      searchQuery.trim() === "" ||
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSerach;
  });
  return (
    <div className="projects">
      <div className="search-projects-container">
        <div className="search-projects">
          <LuSearch />
          <input
            type="text"
            placeholder="Search projects..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="projects-container">
        {displayProjects.map((item, idx) => (
          <div className="project" key={idx}>
            <div className="project-icon">
              <FaCode />
            </div>

            <div className="project-body">
              <h3 className="project-title">{item.name}</h3>
              <p className="project-description">{item.description}</p>
            </div>

            <div className="project-links">
              {item.dataset && (
                <a
                  href={item.dataset}
                  className="btn-dataset"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDatabase />
                  Dataset
                </a>
              )}
              <a
                href={item.link}
                className="btn-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
