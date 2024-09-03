import React, { useState } from "react";
import "../css/footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    console.info("handleEmailChange");
    console.info(e.target.value); // Updated to log the value of the input field
    setEmail(e.target.value);
  };

  const subscribe = async () => {
    try {
      console.info("email");
      console.info(email);

      const response = await fetch(
        "http://localhost:8080/api/subscribe/" + email,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      console.info(data);
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <div className="logo"></div>
          <p className="description">
            Restaurants play an important role in providing a convenient and
            enjoyable dining experience, allowing people to indulge in a variety
            of culinary delights.
          </p>
        </div>

        <div className="footer-section contact">
          <h2 className="section-title">Contact</h2>
          <p>Call: +381 62 9777 553</p>
          <p>Timing: Every day from 10am-10pm</p>
          <p>Address: Cara Dusana 82a, 21000 Novi Sad, Serbia</p>
        </div>

        <div className="footer-section subscribe">
          <h2 className="section-title">Subscribe</h2>
          <div className="subscribe-form">
            <input
              type="email"
              placeholder="Enter email"
              className="email-input"
              value={email}
              onChange={handleEmailChange}
            />
            <button className="subscribe-button" onClick={() => subscribe()}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright 2023 Cafe | All rights reserved | Designed by Violeta Kukic
        </p>
      </div>
    </footer>
  );
};

export default Footer;
