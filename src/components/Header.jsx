import { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";
import translations from "../i18n/translations";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header({ language, setLanguage }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("home");

  const t = (key) =>
    translations[language] && translations[language][key]
      ? translations[language][key]
      : key;

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setActive(sectionId);
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActive(sectionId);
      }
    }
  };

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setActive("home"), 300);
  };

  const menuItems = [
    { id: "home", label: t("home_b"), action: scrollToTop },
    {
      id: "about",
      label: t("about_b"),
      action: () => scrollToSection("about"),
    },
    {
      id: "contact",
      label: t("contact_b"),
      action: () => scrollToSection("contact"),
    },
    {
      id: "portfolio",
      label: t("portfolio_b"),
      action: () => navigate("/portfolio"),
    },
  ];

  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;
  const [showFloatingNav, setShowFloatingNav] = useState(false);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible(true);
        setShowFloatingNav(false);
      } else if (window.scrollY > lastScrollY) {
        setIsVisible(false);
        timeout = setTimeout(() => setShowFloatingNav(true), 300);
      } else {
        setShowFloatingNav(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/portfolio") {
      setActive("portfolio");
      return;
    }

    if (location.pathname === "/privacy-policy") {
      setActive("");
      return;
    }

    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      let currentSection = "home";

      if (window.scrollY === 0) {
        currentSection = "home";
      } else {
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (
            window.scrollY >= sectionTop - sectionHeight / 2 &&
            window.scrollY < sectionTop + sectionHeight / 2
          ) {
            currentSection = section.getAttribute("id");
          }
        });
      }

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={isVisible ? "header-visible" : "header-hidden"}>
        <h1>Jonatha T.</h1>
        <button
          className={`mobile-menu-button ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isMobileMenuOpen && (
          <nav className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
            <div className="mobile-nav-container">
              <div className="mobile-nav-header"></div>
              <div className="mobile-nav-content">
                <ul>
                  <li>
                    <a
                      href="#home"
                      onClick={() => {
                        scrollToTop();
                        toggleMobileMenu();
                      }}
                    >
                      {t("home_b")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      onClick={() => {
                        scrollToSection("about");
                        toggleMobileMenu();
                      }}
                    >
                      {t("about_b")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={() => {
                        scrollToSection("contact");
                        toggleMobileMenu();
                      }}
                    >
                      {t("contact_b")}
                    </a>
                  </li>
                  <li>
                    <Link to="/portfolio" onClick={toggleMobileMenu}>
                      {t("portfolio_b")}
                    </Link>
                  </li>
                </ul>
                <div className="mobile-language-selector">
                  <FaGlobe className="globe" />
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="language-selector"
                  >
                    <option value="en">🇺🇸 English</option>
                    <option value="fr">🇫🇷 Français</option>
                    <option value="es">🇪🇸 Español</option>
                    <option value="br">🇧🇷 Portugês</option>
                  </select>
                </div>
              </div>
              <div className="mobile-nav-footer"></div>
            </div>
          </nav>
        )}

        <div className="nav-container">
          <nav>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={item.id === "portfolio" ? undefined : item.action}
                data-section={item.id}
                className={active === item.id ? "active" : ""}
              >
                {item.id === "portfolio" ? (
                  <Link
                    to="/portfolio"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  item.label
                )}
              </button>
            ))}

            <div className="language-selector-container">
              <FaGlobe />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="language-selector"
              >
                <option value="en">🇺🇸 English</option>
                <option value="fr">🇫🇷 Français</option>
                <option value="es">🇪🇸 Español</option>
                <option value="br">🇧🇷 Portugês</option>
              </select>
            </div>
          </nav>
        </div>
      </header>
      {showFloatingNav && (
        <div className={`floating-nav ${showFloatingNav ? "show" : ""}`}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={item.id === "portfolio" ? undefined : item.action}
              data-section={item.id}
              className={active === item.id ? "active" : ""}
            >
              {item.id === "portfolio" ? (
                <Link
                  to="/portfolio"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {item.label}
                </Link>
              ) : (
                item.label
              )}
            </button>
          ))}

          <div className="language-selector-container-float">
            <FaGlobe className="globe" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="language-selector-float"
            >
              <option value="en">🇺🇸 English</option>
              <option value="fr">🇫🇷 Français</option>
              <option value="es">🇪🇸 Español</option>
              <option value="br">🇧🇷 Portugês</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
}
