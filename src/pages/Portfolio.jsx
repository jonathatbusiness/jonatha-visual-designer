import React, { useState, useEffect } from "react";
import { FaChevronDown, FaTimes, FaLink } from "react-icons/fa";
import "./Portfolio.css";
import { useNavigate } from "react-router-dom";
import translations from "../i18n/translations";
import ProjectCard from "../components/ProjectCard";
import projects, { getSectionTypes } from "../content/projectsContent";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Portfolio({ language }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(4);
  const navigate = useNavigate();
  const sectionTypes = getSectionTypes();

  const handleNavigation = (destination) => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(destination);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
    setVisibleProjects(4);
  }, [activeSection]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = (key) => {
    return translations[language] && translations[language][key]
      ? translations[language][key]
      : key;
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const scrollToPortfolioSection = () => {
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
  };

  const renderDescription = (description) => {
    const descriptionArray = Array.isArray(description)
      ? description
      : [description];

    return descriptionArray.map((text, index) => (
      <p key={index}>
        {text}
        {index < descriptionArray.length - 1 && <br />}{" "}
      </p>
    ));
  };

  const getFilteredProjects = () => {
    if (activeSection === "all") {
      return projects;
    }
    return projects.filter((project) => project.sectionType === activeSection);
  };

  const getVisibleProjects = () => {
    const filteredProjects = getFilteredProjects();
    return filteredProjects.slice(0, visibleProjects);
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisible) => prevVisible + 4);
  };

  const getSectionName = (sectionType) => {
    const sectionNames = {
      webdesign: t("section_webdesign"),
      video: t("section_video"),
      image: t("section_image"),
    };
    return sectionNames[sectionType] || sectionType;
  };

  const hasMoreProjects = () => {
    return getFilteredProjects().length > visibleProjects;
  };

  return (
    <div className="portfolio-container">
      <section className="hero-section-b">
        <div className="hero-content-b">
          <h1 data-aos="fade">{t("portfolio")}</h1>
          <div
            className="descript-container"
            data-aos="fade"
            data-aos-delay="500"
          >
            <p>{t("portfolio_description_a")}</p>
            <br />
            <p>{t("portfolio_description_b")}</p>
          </div>
        </div>
        <button className="scroll-button" onClick={scrollToPortfolioSection}>
          <FaChevronDown className="scroll-icon" />
        </button>
      </section>
      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-title-section">
          <h2 data-aos="fade">{t("portfolio_title")}</h2>
          <p
            className="portfolio-title-text"
            data-aos="fade"
            data-aos-delay="500"
          >
            {t("portfolio_text")}
          </p>
        </div>
        <div
          className="portfolio-navigation"
          data-aos="fade"
          data-aos-delay="500"
        >
          <button
            className={`section-btn ${activeSection === "all" ? "active" : ""}`}
            onClick={() => setActiveSection("all")}
          >
            {t("section_all")}
          </button>

          {sectionTypes.map((sectionType) => (
            <button
              key={sectionType}
              className={`section-btn ${
                activeSection === sectionType ? "active" : ""
              }`}
              onClick={() => setActiveSection(sectionType)}
            >
              {getSectionName(sectionType)}
            </button>
          ))}
        </div>

        {/* Show projects */}
        {activeSection === "all" && (
          <div className="projects-container">
            {getVisibleProjects().map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={openModal}
                language={language}
              />
            ))}
          </div>
        )}

        {/* Projects - per sections */}
        {activeSection !== "all" && (
          <div className="projects-container">
            {getFilteredProjects().map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={openModal}
                language={language}
              />
            ))}
          </div>
        )}

        {hasMoreProjects() && (
          <div className="load-more-container">
            <button className="load-more-button" onClick={loadMoreProjects}>
              {t("load_more")}
            </button>
          </div>
        )}
      </section>

      {/* Preject Modal */}
      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <FaTimes className="close-icon" onClick={closeModal} />
            </div>
            <div className="modal-container">
              <div className="modal-title">
                <h2>{t(selectedProject.title)}</h2>
              </div>
              <div className="modal-text">
                {renderDescription(t(selectedProject.detailedDescription))}
              </div>

              <div className="modal-link-container">
                {selectedProject.showLink === "yes" && (
                  <div className="modal-link">
                    <FaLink />{" "}
                    <p>
                      Link:{" "}
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {selectedProject.link}
                      </a>
                    </p>
                  </div>
                )}
              </div>
              <div className="modal-button">
                <button onClick={closeModal}>{t("close")}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
