import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./register.css";

export default function Register() {
  const { t } = useTranslation(); // Hook to access translations
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        navigate("/Home");
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [successMessage, navigate]);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setErrorMessage(t("fill_all_fields"));
      return;
    }

    // Email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrorMessage(t("valid_email"));
      return;
    }

    // Perform registration logic
    // ...

    setSuccessMessage(t("register_success"));
  };

  return (
    <div className="register">
      <span className="registerTitle">{t("register")}</span>
      <form className="registerForm">
        <label>{t("username")}</label>
        <input
          className="registerInput"
          type="text"
          placeholder={t("enter_username")}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>{t("email")}</label>
        <input
          className="registerInput"
          type="text"
          placeholder={t("enter_email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>{t("password")}</label>
        <input
          className="registerInput"
          type="password"
          placeholder={t("enter_password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" onClick={handleRegister}>
          {t("register_button")}
        </button>
      </form>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      {successMessage && <p className="successMessage">{successMessage}</p>}
    </div>
  );
}
