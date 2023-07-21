import React, { useReducer } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonialslider.css";
import { useTranslation } from "react-i18next";

const reviews = [
  {
    id: 1,
    name: "Dwight Shrute",
    rating: 4.5,
    comment: "Great service! Highly recommended.",
  },
  {
    id: 2,
    name: "Jim Halpert",
    rating: 5,
    comment: "Excellent platform for finding local services.",
  },
  {
    id: 3,
    name: "Michael Scott",
    rating: 4.8,
    comment: "Excellent platform for finding local services.",
  },
];

const initialState = {
  id: 4,
  name: "",
  rating: 0,
  comment: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "rating":
      return { ...state, rating: action.payload };
    case "comment":
      return { ...state, comment: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function TestimonialSlider() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { t } = useTranslation(); // Hook to access translations

  const addReview = () => {
    if (state.name !== "" && state.rating !== 0) {
      // Perform the action for submitting the review here
      console.log("Review submitted:", state);
      dispatch({ type: "reset" }); // Reset the state after adding the review
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="containe1">
      <h2>{t("testimonial_slider.title")}</h2>
      <div className="reviews-section">
        <h3>{t("testimonial_slider.reviews_title")}</h3>
        <Slider {...sliderSettings}>
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <h4>{review.name}</h4>
              <p>
                {t("testimonial_slider.rating")}: {review.rating}
              </p>
              <p>{review.comment}</p>
            </div>
          ))}
          <div key={state.id} className="review-card">
            <p>{t("testimonial_slider.leave_review")}</p>
            <input
              type="text"
              placeholder={t("testimonial_slider.your_name")}
              value={state.name}
              onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
            />
            <input
              type="number"
              placeholder={t("testimonial_slider.your_rating")}
              value={state.rating}
              onChange={(e) => dispatch({ type: "rating", payload: e.target.value })}
            />
            <input
              type="text"
              placeholder={t("testimonial_slider.your_comment")}
              value={state.comment}
              onChange={(e) => dispatch({ type: "comment", payload: e.target.value })}
            />
            <br />
            <button onClick={addReview}>{t("testimonial_slider.submit")}</button>
          </div>
        </Slider>
      </div>
    </div>
  );
}
