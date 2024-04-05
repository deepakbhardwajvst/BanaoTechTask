import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { IoBulb } from "react-icons/io5";
import hello2 from "../assets/hello2.png";

const Testimonials = () => {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Card
            style={{
              width: "1050px",
              padding: "25px",
              backgroundColor: "#F7F5F9",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              textAlign: "left",
              fontFamily: "DMM",
            }}
          >
            <Card.Title
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "24px",
              }}
            >
              <IoBulb style={{ marginRight: "10px", color: "#8064A2" }} />{" "}
              <span style={{ display: "block", fontWeight: 500 }}>
                Testimonials
              </span>
            </Card.Title>
            <span
              style={{
                display: "block",
                margin: "10px 0",
                fontWeight: 400,
                color: "#969696",
                marginTop: "25px",
              }}
            >
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city, all under one roof, is an excellent idea
              and I highly recommend it.
            </span>

            <div
              className="card"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <div className="card-body d-flex align-items-center">
                <img
                  src="https://media.istockphoto.com/id/517042397/vector/south-asian-indian-woman-in-traditional-white-saree.jpg?b=1&s=612x612&w=0&k=20&c=lehOymqu9Deaz4xrgSCLkAmtBO2OWuZXbByTnbu0Lgk="
                  alt="Card"
                  className="me-3"
                  style={{
                    maxWidth: "59px",
                    height: "auto",
                    borderRadius: "50%",
                  }}
                />
                <div>
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "15px",
                      color: "#8064A2",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    Shubha Nagarajan
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontSize: "12px",
                      color: "#0096C8",
                      marginTop: "0",
                      marginBottom: "0",
                    }}
                  >
                    Classical Dancer
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            height: "auto",
            marginTop: "90px",
            marginLeft: "50px",
          }}
        >
          <h1
            style={{
              fontStyle: "italic",
              fontWeight: "normal",
              textAlign: "left",
              fontSize: 30,
            }}
          >
            Your <span style={{ color: "#0096C8" }}>Hobby</span> Your{" "}
            <span style={{ color: "#0096C8" }}>Community</span>
          </h1>
          <Button
            variant="outline-primary"
            style={{
              backgroundColor: "#8064A2",
              borderColor: "#8064A2",
              borderRadius: "10px",
              color: "#fff",
              width: "auto",
              alignSelf: "flex-start",
              fontFamily: "DMM",
              fontWeight: "500",
              textTransform: "none",
            }}
          >
            Get started
          </Button>
          <img
            src={hello2}
            alt=""
            style={{
              maxWidth: "100%",
              height: "auto",
              alignSelf: "center",
              marginTop: "20px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
