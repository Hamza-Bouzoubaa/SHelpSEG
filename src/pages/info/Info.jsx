import React from "react";
import "./info.css";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation(); // Hook to access translations

  return (
    <div className="info-page">
      <div className="service-info">
        <h1>{t("service_information")}</h1>
        {/* Add information about the service here */}
        <p>{t("service_info_content")}</p>
      </div>
      <div className="service-offerings">
        <h2>{t("service_offerings")}</h2>
        <div className="card-container">
          {/* Add cards of people who offer the service */}
          <div className="card">
            <h3>{t("john_doe")}</h3>
            <p>{t("john_doe_rating")}</p>
            <p>{t("john_doe_desc")}</p>
            <div className="buttons">
              <button className="view-profile-button">{t("view_profile")}</button>
              <button className="contact-button">{t("contact")}</button>
            </div>
          </div>
          <div className="card">
            <h3>{t("jane_smith")}</h3>
            <p>{t("jane_smith_rating")}</p>
            <p>{t("jane_smith_desc")}</p>
            <div className="buttons">
              <button className="view-profile-button">{t("view_profile")}</button>
              <button className="contact-button">{t("contact")}</button>
            </div>
          </div>
          <div className="card">
            <h3>{t("michael_johnson")}</h3>
            <p>{t("michael_johnson_rating")}</p>
            <p>{t("michael_johnson_desc")}</p>
            <div className="buttons">
              <button className="view-profile-button">{t("view_profile")}</button>
              <button className="contact-button">{t("contact")}</button>
            </div>
          </div>
          {/* Add more cards here */}
        </div>
      </div>
    </div>
  );
};

export default Info;
