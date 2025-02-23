import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import "./signup.css";
import { RiGithubLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { PiAppleLogoDuotone } from "react-icons/pi";
import { Paper } from "@mui/material";

const SignupPage = () => {
  return (
    <div className="signup-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="image-container">Image</div>
        <h1 className="logo">BASE</h1>
        <div className="social-icons">
<RiGithubLine
            style={{
              marginRight: "1rem",
              backgroundColor: "white",
              padding: "3px",
              borderRadius: "50%",
            }}
          />
          <FaTwitter
            style={{
              marginRight: "1rem",
              backgroundColor: "white",
              padding: "3px",
              borderRadius: "50%",
            }}
          />
          <FaLinkedin
            style={{
              marginRight: "1rem",
              backgroundColor: "white",
              padding: "3px",
              borderRadius: "50%",
            }}
          />
          <FaDiscord
            style={{
              marginRight: "1rem",
              backgroundColor: "white",
              padding: "3px",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="signup-box">
          <div className="signup-header">
            <h2>Sign Up</h2>
            <p>Create your account</p>
          </div>

          <div className="social-signup">
            <button className="google-btn">
              <FcGoogle className="icon" /> Sign up with Google
            </button>
            <button className="apple-btn">
              <PiAppleLogoDuotone className="icon" /> Sign up with Apple
            </button>
          </div>

          <Paper className="signup-form-container"  sx={
            {
              borderRadius:"1.5rem",
              width:"60%",
              padding:"2rem"
            }
          }>
            <form>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <label>Email Address</label>
                <input type="email" placeholder="johndoe@gmail.com" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <label>Password</label>
                <input type="password" placeholder="********" />
              </div>

              <button className="signup-btn">Sign Up</button>
            </form>
          </Paper>

          <p className="login-link">
            Already have an account? <a href="login">Sign in here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
