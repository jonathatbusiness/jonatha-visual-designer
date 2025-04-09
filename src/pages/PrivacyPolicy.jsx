import React from "react";
import translations from "../i18n/translations";
import "./PrivacyPolicy.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PrivacyPolicy = ({ language }) => {
  const t = (key) =>
    translations[language] && translations[language][key]
      ? translations[language][key]
      : key;
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="privacy-policy-container">
      <div>
        <h1 data-aos="fade">{t("privacy_policy_title")}</h1>
        <p data-aos="fade-right" data-aos-delay="100">
          {t("privacy_policy_intro")}
        </p>
      </div>
      <br />
      <div data-aos="fade-right" data-aos-delay="200">
        <h2>{t("privacy_policy_what_data_collect")}</h2>
        <p>{t("privacy_policy_data_description_a")}</p>
        <ul>
          <li
            dangerouslySetInnerHTML={{
              __html: t("privacy_policy_data_description_b"),
            }}
          />
        </ul>
      </div>
      <br />
      <div data-aos="fade-right" data-aos-delay="300">
        <h2>{t("privacy_policy_how_we_use_data")}</h2>
        <p>{t("privacy_policy_how_we_use_data_a")}</p>
        <ul>
          <li
            dangerouslySetInnerHTML={{
              __html: t("privacy_policy_usage_website_analytics"),
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: t("privacy_policy_usage_user_experience"),
            }}
          />
        </ul>
      </div>
      <br />
      <div data-aos="fade-right" data-aos-delay="400">
        <h2>{t("privacy_policy_data_sharing")}</h2>
        <p>{t("privacy_policy_data_sharing_a")}</p>
        <ul>
          <li
            dangerouslySetInnerHTML={{
              __html: t("privacy_policy_sharing_service_providers"),
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: t("privacy_policy_sharing_legal_compliance"),
            }}
          />
        </ul>
      </div>
      <br />
      <div data-aos="fade-right" data-aos-delay="500">
        <h2>{t("privacy_policy_cookies")}</h2>
        <p>{t("privacy_policy_cookies_a")}</p>
        <ul>
          <li
            dangerouslySetInnerHTML={{
              __html: t("privacy_policy_cookies_google_analytics"),
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: t("privacy_policy_cookies_consent_banner"),
            }}
          />
        </ul>
      </div>
      <br />
      <div data-aos="fade-right" data-aos-delay="600">
        <h2>{t("privacy_policy_user_rights")}</h2>
        <p>{t("privacy_policy_user_rights_a")}</p>
        <ul>
          <li
            dangerouslySetInnerHTML={{
              __html: t("privacy_policy_rights_access"),
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: t("privacy_policy_rights_correction"),
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: t("privacy_policy_rights_deletion"),
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: t("privacy_policy_rights_withdrawal"),
            }}
          />
        </ul>
      </div>
      <br />
      <div data-aos="fade-right" data-aos-delay="800">
        <h2>{t("privacy_policy_data_security")}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: t("privacy_policy_security_description"),
          }}
        />
      </div>
      <br />
      <div data-aos="fade-right" data-aos-delay="900">
        <h2>{t("privacy_policy_changes")}</h2>
        <p>{t("privacy_policy_changes_description")}</p>
      </div>
      <br />
      <div data-aos="fade-right" data-aos-delay="1000">
        <h2>{t("privacy_policy_contact")}</h2>
        <ul>
          <li
            dangerouslySetInnerHTML={{
              __html: t("privacy_policy_contact_email"),
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: t("privacy_policy_contact_address"),
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: t("privacy_policy_contact_phone"),
            }}
          />
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
