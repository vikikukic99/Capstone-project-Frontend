import React from "react";
import "../css/readMore.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div style={{ width: 110, height: 110, border: "3px white solid" }}></div>{" "}
      {/* mesto za vektor */}
      <div className="navbar-items">
        <div className="navbar-item">Book Table</div>
        <div className="navbar-item">Contact</div>
      </div>
    </div>
  );
};

export default NavBar;
