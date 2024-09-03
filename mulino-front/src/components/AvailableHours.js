import React from "react";
import "../css/availableHours.css";

const AvailableHours = ({ availableHours }) => {
  return (
    <div className="available-hours-container">
      <h2 className="available-hours-title">Available Hours</h2>
      <ul className="available-hours-list">
        {availableHours.map((hour, index) => (
          <li key={index} className="available-hour">
            {hour}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableHours;
