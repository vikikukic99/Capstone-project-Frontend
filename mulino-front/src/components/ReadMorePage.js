import React from "react";
import "../css/readMore.css";
import NavBar from "./NavBar";
import Description from "./Description";
import ReserveForm from "./ReserveForm";

const ReadMorePage = () => {
  return (
    <div className="background">
      <NavBar />{" "}
      <div style={{ top: 1100, position: "absolute" }}>
        <ReserveForm />
      </div>
      <Description />
    </div>
  );
};

export default ReadMorePage;
