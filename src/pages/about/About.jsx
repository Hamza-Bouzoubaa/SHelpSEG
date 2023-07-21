import React from "react";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./about.css";

export default function About() {
  const { t } = useTranslation(); // Hook to access translations

  return (
    <div className="containe1">
      <h2>{t("about_our_website")}</h2>
      <p>{t("website_description_1")}</p>
      <p>{t("website_description_2")}</p>
      <p>{t("website_description_3")}</p>
      <p>{t("website_description_4")}</p>
      <p>{t("website_description_5")}</p>
    </div>
  );
}
