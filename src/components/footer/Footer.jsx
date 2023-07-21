import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import "./footer.css";
import logo1 from "../../components/img/logo.png";

export default function Footer() {
  const { t } = useTranslation(); // Hook to access translations

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="links1">
          <Link to="/Home" className="logo-link">
            <img className="logo1" src={logo1} alt="react logo" />
          </Link>
          <div className="footer-links">
            <Link to="/Services" className="footer-link">
              {t("offer_services")}
            </Link>
            <Link to="/About" className="footer-link">
              {t("how_does_this_work")}
            </Link>
            <Link to="/Contact" className="footer-link">
              {t("need_help")}
            </Link>
          </div>
        </div>
        <div className="footer-contact">
          <p>{t("email")}</p>
          <p>{t("phone")}</p>
        </div>
      </div>
    </div>
  );
}
