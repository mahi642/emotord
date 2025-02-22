import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import "./Login.css"; // Import the CSS file
import { RiGithubLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { PiAppleLogoDuotone } from "react-icons/pi";

import { Paper } from "@mui/material";
const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="image-container">Image</div> {/* Image at the top */}
        <h1 className="logo">BASE</h1> {/* Logo at the center */}
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
        {/* Icons at the bottom */}
      </div>

      {/* Right Section */}

      <div className="right-section">
        <div className="login-box">
          <div
            style={{
              marginLeft: "2rem",
            }}
          >
            <h2>Sign In</h2>
            <p>Sign in to your account</p>
          </div>

          <div className="social-login">
            <div>
              <button className="google-btn">
                <FcGoogle className="icon" /> Sign in with Google
              </button>
            </div>
            <div style={{}}>
              <button className="apple-btn">
                <PiAppleLogoDuotone className="icon" style={{}} /> Sign in with
                Apple
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper
              sx={{
                alignItems: "center",
                width: "70%",
                borderRadius: "1rem",
                boxSizing: "border-box",
                padding: "2rem",
              }}
            >
              <form>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <label>Email address</label>
                  <input type="email" placeholder="johndoe@gmail.com" />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <label>Password</label>
                  <input type="password" placeholder="********" />
                </div>

                <div className="forgot-password">
                  <a href="#">Forgot password?</a>
                </div>

                <button className="sign-in-btn">Sign In</button>
              </form>
            </Paper>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p className="register">
              Don’t have an account? <a href="#">Register here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
