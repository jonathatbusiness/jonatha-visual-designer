import "./Home.css";
import {
  FaChevronDown,
  FaPlay,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import translations from "../i18n/translations";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home({ language }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = (key) => {
    return translations[language] && translations[language][key]
      ? translations[language][key]
      : key.replace(/_/g, " ");
  };

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = isDeleting ? 10 : 10;

  const textArray = [
    t("visual_designer"),
    t("design_thinking"),
    t("problem_solving"),
    t("ui_ux_design"),
    t("collaboration_teamwork"),
    t("responsive_web_design"),
    t("attention_to_detail"),
    t("frontend_development"),
    t("creative_thinking"),
    t("adobe_creative_suite"),
    t("client_focused_approach"),
    t("interface_design"),
    t("empathy"),
  ];

  useEffect(() => {
    const handleTyping = () => {
      Aos.init({ duration: 1000 });
      if (!isDeleting && charIndex < textArray[index].length) {
        setText((prev) => prev + textArray[index].charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === textArray[index].length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % textArray.length);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingInterval);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            {t("hello")}, <br />
            {t("my_name_is")} <span>Jonatha Teixeira</span>
          </h1>
        </div>
        <div className="typing-container">
          <div className="icon-box">
            <FaPlay className="typing-icon" />
          </div>
          <p className="typing-text">{text}</p>
        </div>
        <div className="btn-portfolio-home">
          <Link to="/portfolio" className="btn-portfolio-link">
            <button>{t("btn_portfolio_hero")}</button>
          </Link>
        </div>

        <button className="scroll-button" onClick={scrollToAbout}>
          <FaChevronDown className="scroll-icon" />
        </button>
      </section>

      <section id="about" className="about-section">
        <h2 className="about-title" data-aos="fade">
          {t("about")}
        </h2>
        <p className="about-text" data-aos="fade-right" data-aos-delay="500">
          {t("about_text_a")}
        </p>
        <br></br>
        <p className="about-text" data-aos="fade-right" data-aos-delay="500">
          {t("about_text_b")}
        </p>
        <br></br>
        <p className="about-text" data-aos="fade-right" data-aos-delay="500">
          {t("about_text_c")}
        </p>
        <br></br>
        <p className="about-text" data-aos="fade-right" data-aos-delay="500">
          {t("about_text_d")}
        </p>
        {/* <div className="about-video-container" data-aos="fade">
          <iframe
            className="about-video"
            src="https://www.youtube.com/embed/mkqPjc7iyQ0?si=VIITAwfgswwYsNgl"
            title="About Me Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>*/}
      </section>
      <section id="contact" className="contact-section">
        <h2 className="contact-title" data-aos="fade">
          {t("contact")}
        </h2>
        <p className="contact-text" data-aos="fade-left" data-aos-delay="500">
          {t("contact_text_a")}
        </p>
        <br></br>
        <p className="contact-text" data-aos="fade-left" data-aos-delay="500">
          {t("contact_text_b")}
        </p>
        <br></br>
        <br></br>

        <div className="contact-cards" data-aos="fade">
          <a
            href="mailto:jonatha.teixeira.business@gmail.com"
            className="contact-card"
          >
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>jonatha.teixeira.business@gmail.com</p>
          </a>

          <a href="tel:+5535984529241" className="contact-card">
            <FaPhone className="contact-icon" />
            <h3>Phone</h3>
            <p>+55 35 98452-9241</p>
          </a>

          <a
            href="https://github.com/jonathatbusiness"
            target="_blank"
            className="contact-card"
          >
            <FaGithub className="contact-icon" />
            <h3>GitHub</h3>
            <p>jonathatbusiness</p>
          </a>

          <a
            href="https://www.linkedin.com/in/jonatha-l-teixeira-jlt"
            target="_blank"
            className="contact-card"
          >
            <FaLinkedin className="contact-icon" />
            <h3>LinkedIn</h3>
            <p>jonatha-l-teixeira-jlt</p>
          </a>
        </div>
      </section>
    </div>
  );
}
