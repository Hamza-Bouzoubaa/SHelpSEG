import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import logo from "../../components/img/logo.png";
import { useTranslation } from "react-i18next";

export default function TopBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Hook to access translations and i18n instance

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change the language using i18n instance
    setIsDropdownOpen(false); // Close the dropdown after language change
  };

  return (
    <div className="top">
      <div className="topleft">
        <Link to="/Home">
          <img className="logo" src={logo} alt="react logo" />
        </Link>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li
            className={`toplistitem dropdown-item ${
              isDropdownOpen ? "active" : ""
            }`}
            onClick={handleDropdownToggle}
          >
            {t("Language")}
            <i
              className={`dropdown-icon fas ${
                isDropdownOpen ? "fa-caret-up" : "fa-caret-down"
              }`}
            ></i>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-link"
                    onClick={() => changeLanguage("en")}
                  >
                    English
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-link"
                    onClick={() => changeLanguage("fr")}
                  >
                    French
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="topright">
        <ul className="toplist">
          <li>
            <Link className="toplistitem1" to="/Services">
              {t("offer_services")}
            </Link>
          </li>
          <li>
            <Link className="toplistitem2" to="/Viewall">
              {t("explore_category")}
            </Link>
            </li>  
            <li>
            <Link className="toplistitem3" to="/Home">
              Home
            </Link>
          </li>

        </ul>
        <div className="button-wrapper">
          <Link to="/Login">
            <button className="login-button">{t("log_in")}</button>
          </Link>
          <Link to="/Register">
            <button className="signup-button">{t("sign_up")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
