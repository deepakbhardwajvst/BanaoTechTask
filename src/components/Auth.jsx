import React, { useState } from "react";
import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";

const Auth = () => {
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

  const authContainerStyle = {
    backgroundColor: "#F7F5F9",
    padding: "20px",
    width: "90%",
    maxWidth: "450px",
    borderRadius: "10px",
    margin: "0 auto",
  };

  const selectedBorderStyle = {
    borderBottom: "2px solid #6A0573",
    width: "auto", // Adjusted width
    textAlign: "center",
    cursor: "pointer",
  };

  // const unselectedBorderStyle = {
  //   borderBottom: '2px solid transparent',
  //   width: 'auto', // Adjusted width
  //   textAlign: 'center',
  //   cursor: 'pointer'
  // };

  const tabContainerStyle = {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "20px",
    color: "#8064A2",
    fontSize: 20,
    fontFamily: "DMM",
    fontWeight: "500",
  };

  const tabStyle = {
    borderBottom: "2px solid transparent",
    cursor: "pointer",
  };

  const signInTabStyle = {
    ...tabStyle,
    ...(selectedTab === "Sign In" && selectedBorderStyle),
    marginRight: "20px", // Add margin-right to create a gap
  };

  const joinInTabStyle = {
    ...tabStyle,
    ...(selectedTab === "Join In" && selectedBorderStyle),
  };

  const orTextStyle = {
    textAlign: "center",
    margin: "20px 0",
    fontWeight: "bold", // Made text bold
    fontSize: "18px", // Increased font size
    fontFamily: "DMM",
  };

  const inputStyle = {
    padding: "10px",
    width: "100%",
    marginBottom: "20px",
    borderRadius: "15px",
    border: "1px solid transparent", // Set border color to transparent
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
      <div style={authContainerStyle}>
        <div style={tabContainerStyle}>
          <div style={signInTabStyle} onClick={() => handleTabClick("Sign In")}>
            Sign In
          </div>
          <div style={joinInTabStyle} onClick={() => handleTabClick("Join In")}>
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

        <p style={orTextStyle}>
          <span style={{ color: "#CED4DA", marginRight: "5px" }}>──────</span> ‎
          ‎ Or connect with‎ ‎{" "}
          <span style={{ color: "#CED4DA", marginRight: "5px" }}>──────</span>
        </p>

        <input type="email" placeholder="Email" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />

        <div style={rememberMeContainerStyle}>
          <input type="checkbox" id="rememberMe" style={checkboxStyle} />
          <label htmlFor="rememberMe">Remember me</label>
          <a href="#home" style={forgotPasswordStyle}>
            Forgot password?
          </a>
        </div>

        <button
          style={{ ...buttonStyle, backgroundColor: "#fff", fontWeight: 500 }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Auth;
