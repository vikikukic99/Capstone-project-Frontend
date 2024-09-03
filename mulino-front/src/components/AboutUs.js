import React from "react";
import "../css/aboutUs.css"; // Import the new CSS file

const AboutUs = () => {
  return (
    <div className="main-container">
      <div className="image-container">
        <img
          className="image1"
          src={require("../assets/images/toast.jpeg")}
          alt="Toast"
        />
        <img
          className="image2"
          src={require("../assets/images/tortilja.jpeg")}
          alt="Tortilja"
        />
        <img
          className="image3"
          src={require("../assets/images/kolac.jpeg")}
          alt="Kolac"
        />
      </div>
      <div className="text-container">
        <div className="title">
          About us
          <div className="separator"></div>
        </div>
        <div className="text-block1">
          Welcome to our restaurant! We are a team of passionate chefs and food
          enthusiasts dedicated to providing our guests with a memorable dining
          experience. With a focus on using fresh and local ingredients
        </div>
        <div className="text-block2">
          Our menu showcases a blend of classic favorites and innovative
          creations, ensuring there is something for everyone to enjoy.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
