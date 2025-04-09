import React, { useState, useEffect } from "react";
import "./ConsentBanner.css";
import translations from "../i18n/translations";

const ConsentBanner = ({ language }) => {
  const [isConsentGiven, setIsConsentGiven] = useState(null);

  const t = (key) =>
    translations[language] && translations[language][key]
      ? translations[language][key]
      : key;

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent) {
      setIsConsentGiven(true);
    }
  }, []);

  const handleAccept = () => {
    setIsConsentGiven(true);
    localStorage.setItem("cookieConsent", "true");
    gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "granted",
    });
  };

  const handleDecline = () => {
    setIsConsentGiven(false);
    localStorage.setItem("cookieConsent", "false");
    gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
    });
  };

  if (isConsentGiven !== null) {
    return null;
  }

  return (
    <div className="consent-banner">
      <p>
        {t("consent_banner_text")}
        <a href="/privacy-policy"> {t("consent_banner_cta")}</a>.
      </p>
      <div className="consent-buttons">
        <button onClick={handleAccept}>{t("consent_banner_btn_yes")}</button>
        <button onClick={handleDecline}>{t("consent_banner_btn_no")}</button>
      </div>
    </div>
  );
};

export default ConsentBanner;
