import "../css/readMore.css";
import StarRating from "./StarRating";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Description = () => {
  const itemId = localStorage.getItem("itemId");
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMenuItem();
  }, []);

  const fetchMenuItem = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/menuItems/" + itemId,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      setItem(data);
      console.info(data);
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };

  const goToMainPage = () => {
    navigate("/");
  };

  return (
    <div className="description-container">
      <button className="go-back-button">
        <div className="go-back-button-text" onClick={() => goToMainPage()}>
          Go back to menu{" "}
        </div>
        <div style={{ width: 20, height: 20, position: "relative" }}>
          <img
            style={{
              width: 17.5,
              height: 18.75,
              left: 1.25,
              top: -0,
              position: "absolute",
            }}
            src={require("../assets/images/Arrow90degLeft.png")}
          ></img>
        </div>
      </button>
      {item && (
        <div
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 39,
            display: "flex",
          }}
        >
          <div className="title-container">
            <div
              style={{
                textAlign: "center",
                color: "#454242",
                fontSize: 48,
                fontFamily: "Oleo Script Swash Caps",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              {item.name}
            </div>

            <div className="price-container">
              <div className="price">${item.price}</div>
            </div>
          </div>
          <StarRating value={item.rate} />

          {/* **************************************************************************************************************** */}

          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 30,
              display: "inline-flex",
            }}
          >
            <img
              style={{ width: 790, height: 730, objectFit: "cover" }}
              src={`http://localhost:8080/api/menuItems/picture/${item.id}`}
            />
            <div
              style={{
                height: 720,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 53,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  height: 153,
                  paddingTop: 32,
                  paddingBottom: 31,
                  paddingLeft: 121,
                  paddingRight: 121,
                  background: "#AFD4BC",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    color: "black",
                    fontSize: 20,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Prep: {item.prep} mins
                  <br />
                  Cook: {item.cook} mins
                  <br />
                  Total: {item.prep + item.cook} mins
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 28,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 10,
                    display: "flex",
                  }}
                >
                  <div className="header-2">Descriptions: </div>
                  <div
                    style={{
                      width: 96.01,
                      height: 0,
                      border: "2px #84BD98 solid",
                    }}
                  ></div>
                </div>
                <div
                  style={{
                    width: 380,
                    color: "#585555",
                    fontSize: 20,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  {item.description}
                </div>
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 10,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: 419,
                      color: "#454242",
                      fontSize: 38,
                      fontFamily: "Oleo Script Swash Caps",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    Ingredience:{" "}
                  </div>
                  <div
                    style={{
                      width: 96.01,
                      height: 0,
                      border: "2px #84BD98 solid",
                    }}
                  ></div>
                </div>
                <div
                  style={{
                    width: 380,
                    color: "#585555",
                    fontSize: 20,
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  <ul>
                    {item.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
