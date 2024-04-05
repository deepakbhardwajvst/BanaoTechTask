import React, { useState } from "react";
import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";

const Tets = () => {
  const [selectedTab, setSelectedTab] = useState("Sign In");

  const buttonStyle = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid #8064A2",
    borderRadius: "10px",
    padding: "10px 20px",
    marginBottom: "10px",
    width: "100%",
    fontFamily: "DMM",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconStyle = {
    marginRight: "20px",
  };

  const selectedBorderStyle = {
    borderBottom: "2px solid #6A0573",
    width: "50%",
    textAlign: "center",
    cursor: "pointer",
  };

  const unselectedBorderStyle = {
    borderBottom: "2px solid transparent",
    width: "50%",
    textAlign: "center",
    cursor: "pointer",
  };

  const tabContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  };

  const orTextStyle = {
    textAlign: "center",
    margin: "20px 0",
  };

  const inputStyle = {
    padding: "10px",
    width: "100%",
    marginBottom: "20px",
  };

  const rememberMeContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  };

  const checkboxStyle = {
    marginRight: "10px",
  };

  const forgotPasswordStyle = {
    marginLeft: "auto",
    color: "#6A0573",
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div style={tabContainerStyle}>
        <div
          style={
            selectedTab === "Sign In"
              ? selectedBorderStyle
              : unselectedBorderStyle
          }
          onClick={() => handleTabClick("Sign In")}
        >
          Sign In
        </div>
        <div
          style={
            selectedTab === "Join In"
              ? selectedBorderStyle
              : unselectedBorderStyle
          }
          onClick={() => handleTabClick("Join In")}
        >
          Join In
        </div>
      </div>

      <button style={buttonStyle}>
        <IoLogoGoogle style={{ ...iconStyle, color: "red" }} />
        Continue with Google
      </button>

      <button style={buttonStyle}>
        <IoLogoFacebook style={{ ...iconStyle, color: "blue" }} />
        Continue with Facebook
      </button>

      <p style={orTextStyle}>Or connect with</p>

      <input type="email" placeholder="Email" style={inputStyle} />
      <input type="password" placeholder="Password" style={inputStyle} />

      <div style={rememberMeContainerStyle}>
        <input type="checkbox" id="rememberMe" style={checkboxStyle} />
        <label htmlFor="rememberMe">Remember me</label>
        <a href="#" style={forgotPasswordStyle}>
          Forgot password?
        </a>
      </div>

      <button style={{ ...buttonStyle, backgroundColor: "#6A0573" }}>
        Continue
      </button>
    </div>
  );
};

export default Tets;
