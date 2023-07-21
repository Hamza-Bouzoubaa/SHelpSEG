import React, { useState } from "react";
import "./servicecard.css";

const ServiceCard = ({ title, description, icon, link }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleExpandClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="service-card">
      <div className="service-icon">
        <i className={`fa fa-${icon}`}></i>
      </div>
      <h3 className="service-title">{title}</h3>
      {!showDetails && <p className="service-description">{description}</p>}
      {showDetails && (
        <div>
          <p className="service-description">{description}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
            nunc quis tellus tristique feugiat. Duis at mauris elementum,
            malesuada odio id, bibendum sapien.
          </p>
          {/* Add more additional information here */}
        </div>
      )}
      <button className="expand-button" onClick={handleExpandClick}>
        {showDetails ? "Show Less" : "Learn More"}
      </button>
    </div>
  );
};

export default ServiceCard;
