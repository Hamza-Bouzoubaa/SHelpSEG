import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./login.css";

export default function Login() {
  const { t } = useTranslation(); // Hook to access translations
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage(t("fill_all_fields"));
      return;
    }

    // Email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrorMessage(t("valid_email"));
      return;
    }

    // Perform login logic
    // ...

    setSuccessMessage(t("login_success"));
    setTimeout(() => {
      navigate("/Home");
    }, 1000);
  };

  return (
    <div className="login">
      <span className="loginTitle">{t("login")}</span>
      <form className="loginForm">
        <label>{t("email")}</label>
        <input
          className="loginInput"
          type="text"
          placeholder={t("enter_email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>{t("password")}</label>
        <input
          className="loginInput"
          type="password"
          placeholder={t("enter_password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" onClick={handleLogin}>
          {t("login")}
        </button>
      </form>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      {successMessage && <p className="successMessage">{successMessage}</p>}
    </div>
  );
}
