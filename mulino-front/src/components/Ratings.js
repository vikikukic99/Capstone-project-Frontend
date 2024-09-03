import React from "react";
import "../css/main.css";
import StarRating from "./StarRating";

const Ratings = () => {
  const starValue = 4.5;

  return (
    <div className="ratings-container">
      <div
        style={{
          width: 1395,
          height: 896,
          left: 0,
          top: 16,
          position: "absolute",
          background: "rgba(8.96, 8.74, 8.74, 0.50)",
        }}
      />
      <div className="rating-text-container">
        <div style={{ height: 85.5, position: "relative" }}>
          <div className="testimonial-text">Testimonial</div>
          <div
            style={{
              width: 163.8,
              height: 0,
              left: 29.5,
              top: 85.5,
              position: "absolute",
              border: "2px #84BD98 solid",
            }}
          ></div>
        </div>
        <div
          style={{
            width: 820,
            textAlign: "center",
            color: "#F1F1F1",
            fontSize: 30,
            fontFamily: "Poppins",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          “Cooking is like love, either give in or don't get into it.”
        </div>
      </div>
      <div style={{ width: 1200, left: 120, top: 300, position: "absolute" }}>
        <div
          style={{
            width: 380,
            height: 426,
            paddingTop: 30,
            paddingBottom: 30,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#F1F1F1",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 32,
            display: "inline-flex",
            zIndex: 1,
          }}
        >
          <img
            style={{ width: 120, height: 120, borderRadius: 9999 }}
            src={require("../assets/images/marija.jpeg")}
          />
          <div
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 25,
              display: "flex",
            }}
          >
            <StarRating value={starValue} />
            <div className="rate-description">
              Join us for the perfect breakfast experience and indulge in our
              delightful French Toast Meal.
            </div>
            <div className="rate-person-name">Marija Peric</div>
          </div>
        </div>
        <div
          style={{
            width: 380,
            height: 426,
            paddingTop: 30,
            paddingBottom: 30,
            left: 410,
            top: 0,
            position: "absolute",
            background: "#F1F1F1",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 32,
            display: "inline-flex",
            zIndex: 1,
          }}
        >
          <img
            style={{ width: 120, height: 120, borderRadius: 9999 }}
            src={require("../assets/images/perica.jpg")}
          />
          <div
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 25,
              display: "flex",
            }}
          >
            <StarRating value={starValue} />
            <div className="rate-description">
              Join us for the perfect breakfast experience and indulge in our
              delightful French Toast Meal.
            </div>
            <div className="rate-person-name">Perica Peric</div>
          </div>
        </div>
        <div
          style={{
            width: 380,
            height: 426,
            paddingTop: 30,
            paddingBottom: 30,
            left: 820,
            top: 0,
            position: "absolute",
            background: "#F1F1F1",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 32,
            display: "inline-flex",
            zIndex: 1,
          }}
        >
          <img
            style={{ width: 120, height: 120, borderRadius: 9999 }}
            src={require("../assets/images/pera.jpg")}
          />
          <div
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 25,
              display: "flex",
            }}
          >
            <StarRating value={starValue} />

            <div className="rate-description">
              Join us for the perfect breakfast experience and indulge in our
              delightful French Toast Meal.
            </div>
            <div className="rate-person-name">Pera Peric</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
