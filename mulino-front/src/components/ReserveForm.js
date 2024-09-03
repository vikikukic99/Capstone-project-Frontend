import React, { useState } from "react";
import "../css/reserveForm.css";
import AvailableHours from "./AvailableHours";

const ReserveForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    persons: null,
    date: "",
    time: "",
  });

  const [selectedCircle, setSelectedCircle] = useState(null);
  const [availableHours, setAvailableHours] = useState([]);

  const handleCircleSelect = async (num) => {
    if (formData.date === "") {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/api/reservation/availableTimes?date=${formData.date}&table=${num}`
      );

      if (!response.ok) {
        alert("App failed!");
      }

      const data = await response.json();
      setAvailableHours(data);
    } catch (error) {
      alert("App failed!");
    }

    setSelectedCircle(num);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reservationDate = `${formData.date}T${formData.time}:00`;

      const sendData = {
        guestName: formData.name,
        email: formData.email,
        phoneNumber: formData.phone,
        numberOfPeople: formData.persons,
        reservationDate: reservationDate,
        table: selectedCircle,
      };

      const response = await fetch("http://localhost:8080/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      });

      if (response.ok) {
        alert("Reservation successful!");
        setSelectedCircle(null);
        setAvailableHours([]);
      } else {
        alert("Reservation failed.");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  const generateTimeSlots = () => {
    const times = [];
    for (let hour = 8; hour <= 20; hour++) {
      times.push(`${String(hour).padStart(2, "0")}:00`);
      times.push(`${String(hour).padStart(2, "0")}:30`);
    }
    times.push("21:00"); // Last time slot
    return times;
  };

  return (
    <div className="reserve-container">
      <header className="reserve-header">
        <h1 className="reserve-title">Reserve your table</h1>
        <div className="reserve-underline"></div>
        <p className="reserve-quote">
          “Cooking is like love, either give in or don't get into it.”
        </p>
      </header>

      <form className="reserve-form" onSubmit={handleSubmit}>
        <label className="reserve-field ">
          <input
            className="text"
            placeholder="Enter your name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label className="reserve-field">
          <input
            className="text"
            placeholder="Enter your email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <div className="reserve-row">
          <label className="reserve-half-field ">
            <input
              className="text"
              placeholder="Phone number"
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label className="reserve-half-field ">
            <input
              placeholder="Number of persons"
              className="text"
              type="number"
              name="persons"
              max={4}
              min={1}
              value={formData.persons}
              required
              onChange={handleChange}
            />
            
          </label>
        </div>

        <div className="reserve-row">
          <label className="reserve-half-field text">
            <input
              required
              className="text"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </label>
          <label className="reserve-half-field text">
            <select
              className="text"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
            >
              <option value="">Select Time</option>
              {availableHours.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>
        </div>

        <AvailableHours availableHours={availableHours} />
        <div className="circles-container">
          <div className="container">
            <div className="window window-1">Window 1</div>
            <div className="window window-2">Window 2</div>
            <div className="circles">
              {[...Array(10).keys()].map((num) => (
                <div
                  key={num}
                  className={`circle ${
                    selectedCircle === num + 1 ? "selected" : ""
                  }`}
                  onClick={() => handleCircleSelect(num + 1)}
                >
                  {num + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        <button type="submit" className="reserve-button">
          Book Table
        </button>
      </form>
    </div>
  );
};

export default ReserveForm;
