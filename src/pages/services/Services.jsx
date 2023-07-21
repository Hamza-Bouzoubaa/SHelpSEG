import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./services.css";

export default function Services() {
  const { t } = useTranslation(); // Hook to access translations
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    alert(t("submit_message"));
  };

  return (
    <div className="services">
      <h1 className="heading">{t("offer_services")}</h1>
      <div className="steps">
        <div className={`step ${step === 1 ? "active" : ""}`}>{t("step")} 1</div>
        <div className={`step ${step === 2 ? "active" : ""}`}>{t("step")} 2</div>
        <div className={`step ${step === 3 ? "active" : ""}`}>{t("step")} 3</div>
        <div className={`step ${step === 4 ? "active" : ""}`}>{t("step")} 4</div>
      </div>
      <div className="content-container">
        {step === 1 && (
          <>
            <p className="title">{t("personal_info")}</p>
            <form>
              <div className="boxes">
                <input className="box" type="text" placeholder={t("first_name")} />
                <input className="box" type="text" placeholder={t("last_name")} />
                <input className="box" type="email" placeholder={t("email")} />
                <input className="box" type="tel" placeholder={t("phone")} />
              </div>
              <div className="buttons">
                <button className="back-button" disabled>
                  {t("back")}
                </button>
                <button className="next-button" onClick={handleNextStep}>
                  {t("next")}
                </button>
              </div>
            </form>
          </>
        )}
        {step === 2 && (
          <>
            <p>{t("step_2_content")}</p>
            <div className="buttons">
              <button className="back-button" onClick={handlePreviousStep}>
                {t("back")}
              </button>
              <button className="next-button" onClick={handleNextStep}>
                {t("next")}
              </button>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <p>{t("step_3_content")}</p>
            <div className="buttons">
              <button className="back-button" onClick={handlePreviousStep}>
                {t("back")}
              </button>
              <button className="next-button" onClick={handleNextStep}>
                {t("next")}
              </button>
            </div>
          </>
        )}
        {step === 4 && (
          <>
            <p className="review">
              {t("review_submit")}<br />
              {t("your_name")}<br />
              {t("your_age")}<br />
              {t("your_email")}<br />
              {t("your_phone")}<br />
              {t("your_category")}<br />
              {t("your_location")}
            </p>
            <div className="submit">
              <button onClick={handleSubmit}>{t("submit")}</button>
            </div>
            <div className="buttons">
              <button className="back-button" onClick={handlePreviousStep}>
                {t("back")}
              </button>
              <button disabled>{t("next")}</button>
            </div>
          </>
        )}
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${(step - 1) * 33.33}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
