import React from "react";
import hello from "../assets/hello.png";
import Auth from "../components/Auth";
import "./Hero.css"; 

const Hero = () => {
  return (
    <>
      <div
        className="hero-container"
        style={{
          display: "flex",
          height: "auto",
          "@media (max-width: 78px)": { height: "150vh" },
        }}
      >
        <div
          style={{
            flex: "55%",
            backgroundColor: "#F7F5F9",
            padding: "20px",
            fontFamily: "DMM",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: 1, marginTop: "50px" }}>
            <h2
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                textAlign: "left",
                fontSize: 40,
              }}
            >
              Explore your <span style={{ color: "#0096C8" }}>hobby</span> or{" "}
              <span style={{ color: "#0096C8" }}>passion</span>
            </h2>
            <p
              style={{
                color: "black",
                textAlign: "left",
                fontWeight: 300,
                fontSize: 18,
                marginTop: "25px",
              }}
            >
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
            <p
              style={{
                color: "black",
                textAlign: "left",
                fontWeight: 300,
                fontSize: 18,
              }}
            >
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
          </div>
          <img
            src={hello}
            alt=""
            className="hero-image"
            style={{ maxWidth: "100%", height: "auto", alignSelf: "flex-end" }}
          />
        </div>
        <div
          className="auth-container"
          style={{
            flex: "45%",
            backgroundColor: "#F7F5F9",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Auth />
        </div>
      </div>
    </>
  );
};

export default Hero;
