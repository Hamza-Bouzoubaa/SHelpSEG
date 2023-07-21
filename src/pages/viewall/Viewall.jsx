import React, { useState } from "react";
import "./viewall.css";
import { Link } from "react-router-dom";
import snowshov from "../../components/img/snowshov.jpeg";
import babysit from "../../components/img/babysit.jpeg";
import tutor from "../../components/img/tutor.webp";
import dogwalik from "../../components/img/dogwalik.jpeg";
import cook from "../../components/img/cook.jpeg";
import plant from "../../components/img/plant.jpeg";
import shop from "../../components/img/shop.jpeg";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    title: "Snow Shoveling",
    image: snowshov,
    price: 10,
    experience: "Beginner",
  },
  {
    id: 2,
    title: "Babysitting",
    image: babysit,
    price: 20,
    experience: "Intermediate",
  },
  {
    id: 3,
    title: "Tutoring",
    image: tutor,
    price: 30,
    experience: "Advanced",
  },
  {
    id: 4,
    title: "Dog walking",
    image: dogwalik,
    price: 45,
    experience: "Advanced",
  },
  {
    id: 5,
    title: "Cook",
    image: cook,
    price: 25,
    experience: "Beginner",
  },
  {
    id: 6,
    title: "Plant management",
    image: plant,
    price: 25,
    experience: "Advanced",
  },
  {
    id: 7,
    title: "Personal shopper",
    image: shop,
    price: 40,
    experience: "Advanced",
  },
];

export default function ViewAll() {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const { t } = useTranslation(); // Hook to access translations

  const handlePriceFilter = (price) => {
    setSelectedPrice(price);
  };

  const handleExperienceFilter = (experience) => {
    setSelectedExperience(experience);
  };

  const filteredData = data.filter(
    (card) =>
      (!selectedPrice || card.price <= selectedPrice) &&
      (!selectedExperience || card.experience === selectedExperience)
  );

  const handleSelectButton = (cardId) => {
    // Perform action on card selection here, for example, display details, navigate to a new page, etc.
    console.log(t("selected_card_id"), cardId);
  };

  return (
    <div className="containe3">
      <div className="sidebar">
        <h2>{t("filters")}</h2>
        <div className="filter">
          <h3>{t("price")}</h3>
          <button onClick={() => handlePriceFilter(10)}>{t("under_10")}</button>
          <button onClick={() => handlePriceFilter(20)}>{t("under_20")}</button>
          <button onClick={() => handlePriceFilter(30)}>{t("under_30")}</button>
          <button onClick={() => handlePriceFilter("")}>{t("all")}</button>
        </div>
        <div className="filter">
          <h3>{t("experience")}</h3>
          <button onClick={() => handleExperienceFilter("Beginner")}>{t("beginner")}</button>
          <button onClick={() => handleExperienceFilter("Intermediate")}>{t("intermediate")}</button>
          <button onClick={() => handleExperienceFilter("Advanced")}>{t("advanced")}</button>
          <button onClick={() => handleExperienceFilter("")}>{t("all")}</button>
        </div>
      </div>
      <div className="card-container">
        {filteredData.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{t("card_price")}: ${card.price}</p>
            <p>{t("card_experience")}: {t(card.experience)}</p>
            <Link to="/Info">
              <button onClick={() => handleSelectButton(card.id)}>
                {t("select")}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
