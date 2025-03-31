import React, { useState } from "react";
import "./ProjectCard.css";
import translations from "../i18n/translations";

const t = (key, language) => {
  return translations[language] && translations[language][key]
    ? translations[language][key]
    : key;
};

const isVideoUrl = (url) => {
  return (
    url &&
    (url.includes("youtube.com/embed") ||
      url.includes("vimeo.com") ||
      url.includes("dailymotion.com/embed"))
  );
};

const ProjectCard = ({ project, onOpenModal, language }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const handleImageClick = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const renderMedia = () => {
    if (Array.isArray(project.media)) {
      return (
        <div className="carousel">
          <img
            key={currentImageIndex}
            src={project.media[currentImageIndex]}
            alt={`carousel-img-${currentImageIndex}`}
            className="project-image"
            onClick={handleImageClick}
            style={{ animation: "fadeEffect 0.5s ease-in-out" }}
          />
          <div className="carousel-controls">
            <button
              onClick={() =>
                setCurrentImageIndex(
                  (prevIndex) =>
                    (prevIndex - 1 + project.media.length) %
                    project.media.length
                )
              }
              className="prev-button"
            >
              &#10094;
            </button>
            <button
              onClick={() =>
                setCurrentImageIndex(
                  (prevIndex) => (prevIndex + 1) % project.media.length
                )
              }
              className="next-button"
            >
              &#10095;
            </button>
          </div>
          <div className="carousel-indicators">
            {project.media.map((_, index) => (
              <span
                key={index}
                className={`indicator ${
                  currentImageIndex === index ? "active" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      );
    } else if (isVideoUrl(project.media)) {
      return (
        <iframe
          src={project.media}
          title={project.title}
          className="project-video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    } else {
      return (
        <img
          src={project.media}
          alt={project.title}
          onClick={handleImageClick}
        />
      );
    }
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

  return (
    <div className="project-card">
      <div className="project-media-container">
        <div className="project-media">{renderMedia()}</div>
        <div className="project-media-title">
          <h3>{t(project.title, language)}</h3>
        </div>
      </div>

      <div className="project-info">
        <div className="project-info-text-container">
          <h3 className="project-info-title">
            {t("card_info_title", language)}
          </h3>
          <div className="short-description">
            {renderDescription(t(project.description, language))}
          </div>
        </div>
        <div className="project-info-button">
          {project.showButton === "yes" && (
            <button onClick={() => onOpenModal(project)}>
              {t("learn_more", language)}
            </button>
          )}
        </div>
      </div>

      {/* Image modal */}
      {isFullscreen && (
        <div className="fullscreen-modal" onClick={closeFullscreen}>
          <img
            src={
              Array.isArray(project.media)
                ? project.media[currentImageIndex]
                : project.media
            }
            alt={`fullscreen-img-${currentImageIndex}`}
            className="fullscreen-image"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
