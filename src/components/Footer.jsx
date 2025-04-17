import React from "react";
import "./Footer.css";
import translations from "../i18n/translations";

const Footer = ({ language }) => {
  const t = (key) =>
    translations[language] && translations[language][key]
      ? translations[language][key]
      : key;

  return (
    <footer className="footer">
      <div className="upper-footer">
        <p>Jonatha Teixeira, 2025.</p>
        <a
          href="/privacy-policy"
          className="privacy-policy-link"
          alt="Read our Privacy Policy"
          aria-label="Read our Privacy Policy"
        >
          {t("privacy_footer_link")}
        </a>
      </div>

      <div className="base-footer"></div>
    </footer>
  );
};

export default Footer;
