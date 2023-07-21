import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocationMap from "../../components/location/LocationMap";
import ServiceCard from "../../components/servicecard/SeviceCard";
import TestimonialSlider from "../../components/testimonialslider/TestimonialSlider";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import "./home.css";

export default function Home1() {
  const { t } = useTranslation(); // Hook to access translations

  return (
    <>
      <div className="home">
        <h1 className="title">{t("find_closest_city")}</h1>
        <LocationMap />
        <div className="services-section">
          <h2 className="section-title">{t("explore_services")}</h2>
          <div className="service-cards">
            <ServiceCard
              title={t("snow_shoveling")}
              description={t("snow_shoveling_desc")}
              icon="home"
            >
            </ServiceCard>
            <ServiceCard
              title={t("babysitting")}
              description={t("babysitting_desc")}
              icon="paw"
            >
            </ServiceCard>
            <ServiceCard
              title={t("babysitting")}
              description={t("babysitting_desc")}
              icon="paw"
            >
            </ServiceCard>
            <ServiceCard
              title={t("dog_walking")}
              description={t("dog_walking_desc")}
              icon="paw"
            >
            </ServiceCard>
            <ServiceCard
              title={t("tutoring")}
              description={t("tutoring_desc")}
              icon="paw"
            >
            </ServiceCard>
            <ServiceCard
              title={t("cooking")}
              description={t("cooking_desc")}
              icon="paw"
            >
            </ServiceCard>
            <ServiceCard
              title={t("personal_shopping")}
              description={t("personal_shopping_desc")}
              icon="paw"
            >
            </ServiceCard>
            <ServiceCard
              title={t("plant_management")}
              description={t("plant_management_desc")}
              icon="paw"
            >
            </ServiceCard>


          </div>
        </div>
        <div className="testimonials-section">
          <TestimonialSlider />
        </div>
      </div>
    </>
  );
}
