import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const Cards = ({ icon, title, text, buttonLabel, color, padding = "25px" }) => {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div>
      <Card
        style={{
          width: "400px",

          backgroundColor: hovered ? color : "#fff",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          textAlign: "left",
          fontFamily: "DMM",
          transition: "background-color 0.3s, color 0.3s",
          padding: padding,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Card.Title
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "24px",
          }}
        >
          {React.cloneElement(icon, {
            style: { color: hovered ? "#fff" : color, marginRight: "10px" },
          })}
          <span
            style={{
              display: "block",
              fontWeight: 500,
              color: hovered ? "#fff" : color,
            }}
          >
            {title}
          </span>
        </Card.Title>
        <span
          style={{
            display: "block",
            margin: "10px 0",
            fontWeight: 400,
            color: hovered ? "#fff" : "black",
          }}
        >
          {text}
        </span>
        <Button
          variant="outline-primary"
          style={{
            backgroundColor: "white",
            borderColor: "#8064A2",
            borderRadius: "10px",
            color: "#8064A2",
            width: "30%",
            alignSelf: "flex-start",
            fontFamily: "DMM",
            fontWeight: "500",
            transition: "background-color 0.3s, color 0.3s",
            textTransform: "none",
          }}
        >
          {buttonLabel}
        </Button>
      </Card>
    </div>
  );
};

export default Cards;
