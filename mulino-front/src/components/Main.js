import Ratings from "./Ratings";
import "../css/main.css";
import ReserveForm from "./ReserveForm";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import React, { useRef } from "react";

const Main = () => {
  const aboutRef = useRef(null);
  const menuRef = useRef(null);
  const ratingsRef = useRef(null);
  const reserveRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="background">
      <div className="background-image">
        <div className="zatamljenje" />
        <div
          style={{
            width: 763,
            height: 50,
            left: "25vw",
            top: "63vh",
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 763,
              height: 105,
              left: 0,
              top: 0,
              position: "absolute",
              color: "white",
              fontSize: 96,
              fontFamily: "Oleo Script Swash Caps",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Welcome to Mulino
          </div>
          <div
            style={{
              width: 437,
              height: 31,
              left: 163,
              top: 116,
              position: "absolute",
              color: "white",
              fontSize: 20,
              fontFamily: "Poppins",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            -For the love of delicious food and coffee-
          </div>
          <div
            style={{
              width: 380,
              height: 47,
              left: 193,
              top: 176,
              position: "absolute",
              background: "#84BD98",
              borderRadius: 1000,
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                width: 378,
                height: 47,
                textAlign: "center",
                color: "white",
                fontSize: 20,
                fontFamily: "Poppins",
                fontWeight: "400",
                wordWrap: "break-word",
                cursor: "pointer",
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
              onClick={() => scrollToRef(reserveRef)}
            >
              Make a table reservation
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: 1920,
          height: 120,
          top: 0,
          right: 50,
          position: "absolute",
          justifyContent: "flex-end",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 30,
            display: "inline-flex",
          }}
        >
          <div className="header-items" onClick={() => scrollToRef(aboutRef)}>
            About
          </div>
          <div className="header-items" onClick={() => scrollToRef(menuRef)}>
            Menu
          </div>
          <div className="header-items" onClick={() => scrollToRef(ratingsRef)}>
            Testimonial
          </div>
          <div className="header-items" onClick={() => scrollToRef(reserveRef)}>
            Book Table
          </div>
          <div className="header-items" onClick={() => scrollToRef(footerRef)}>
            Contact
          </div>
        </div>
      </div>

      <div ref={aboutRef} style={{ top: 907, position: "absolute" }}>
        <AboutUs></AboutUs>
      </div>
      <div ref={menuRef} style={{ top: 1524, position: "absolute" }}>
        <Menu></Menu>
      </div>
      <div ref={ratingsRef} style={{ top: 3674, position: "absolute" }}>
        <Ratings></Ratings>
      </div>
      <div ref={reserveRef} style={{ top: 4630, position: "absolute" }}>
        <ReserveForm></ReserveForm>
      </div>
      <div
        ref={footerRef}
        style={{ top: 5950, position: "absolute", width: "100%" }}
      >
        <Footer></Footer>
      </div>

      <div
        style={{
          width: 250,
          height: 80,
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 17,
          paddingRight: 21,
          left: 1250,
          top: 5050,
          position: "absolute",
          background: "#F1F1F1",
          borderRadius: 10,
          overflow: "hidden",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 13,
          display: "inline-flex",
        }}
      >
        <img
          style={{ width: 30, height: 30 }}
          src={require("../assets/images/info.png")}
        />
        <div
          style={{
            color: "#454242",
            fontSize: 10,
            fontFamily: "Poppins",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Maximum people is 4. If you want to make a reservation with more
          people, make a phone call.
        </div>
      </div>

      <div
        style={{
          width: 300,
          height: 80,
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 17,
          paddingRight: 10,
          left: 1250,
          top: 5150,
          position: "absolute",
          background: " #F1F1F1",
          borderRadius: 10,
          overflow: "hidden",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
          display: "inline-flex",
        }}
      >
        <img
          style={{ width: 30, height: 30 }}
          src={require("../assets/images/info.png")}
        />
        <div
          style={{
            color: "#454242",
            fontSize: 10,
            fontFamily: "Poppins",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          <ol>
            <li>Choose a date for your reservation.</li>
            <li>Choose table.</li>
            <li>Select time.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Main;
