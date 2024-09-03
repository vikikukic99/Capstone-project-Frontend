import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../css/menu.css";
import StarRating from "./StarRating";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const fetchMenuItems = async () => {
    try {
      console.info("Fetching menu items...");
      const response = await fetch("http://localhost:8080/api/menuItems", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          // Authorization: token || "",
        },
      });

      console.info("Response status:", response.status);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMenuItems(data);
      console.info("Fetched data:", data);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const goToReadMore = (id) => {
    localStorage.setItem("itemId", id.toString());
    navigate("/read-more");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        width: 1395,
        height: 2166,

        background: "#F1F1F1",
      }}
    >
      <div
        style={{
          width: 819.8,
          paddingLeft: 328,
          paddingRight: 328,
          left: 32,
          top: 93,
          position: "absolute",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
          display: "inline-flex",
        }}
      >
        <div style={{ height: 84.5, position: "relative" }}>
          <div
            style={{
              width: 121.07,
              left: 21.36,
              top: 0,
              position: "absolute",
              textAlign: "center",
              color: "#454242",
              fontSize: 48,
              fontFamily: "Oleo Script Swash Caps",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Menu
          </div>
          <div
            style={{
              width: 163.8,
              height: 0,
              left: 0,
              top: 84.5,
              position: "absolute",
              border: "2px #84BD98 solid",
            }}
          ></div>
        </div>
        <div
          style={{
            width: 820,
            textAlign: "center",
            color: "black",
            fontSize: 30,
            fontFamily: "Poppins",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          “Cooking is like love, either give in or don't get into it.”
        </div>

        <div className="reserve-row">
          {/* <label className="reserve-half-field"> */}
          <label>
            <input
              className="text"
              placeholder="Search"
              type="text"
              name="search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </label>
        </div>
      </div>
      <div className="menu-container">
        {filteredItems.map((item) => (
          <div key={item.id} className="menuitem">
            <img
              className="menuitem-img"
              src={`http://localhost:8080/api/menuItems/picture/${item.id}`}
            />
            <div className="menuitem-container">
              <StarRating value={item.rate} />
              <div className="menuitem-name-price-container">
                <div className="menuitem-name">{item.name}</div>
                <div className="menuitem-price-rectangel">
                  <div className="price-tag">${item.price}</div>
                </div>
              </div>
              <div className="menuitem-description">{item.description}</div>
              <div className="menuitem-read-more">
                <div
                  className="menuitem-read-more-button"
                  onClick={() => goToReadMore(item.id)}
                >
                  Read more
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
