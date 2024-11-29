import React, { useState } from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import bgImage from "../../../assets/users/LoginSignup/login-bg.jpg";
import logo from "../../../assets/common/f_logo_red.svg";
import "./LoginSignup.css";

export default function LoginSignup() {
  const [action, setAction] = useState("Login");
  const [cname, setCname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeAction = () => {
    setAction(action === "Login" ? "Sign Up" : "Login");
    setCname("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (action === "Login") {
      handleLogin();
    } else {
      handleSignUp();
    }
  };

  const handleLogin = () => {
    console.log("1");
  };

  const handleSignUp = () => {
    console.log("1");

    if (!cname || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
  };

  return (
    <Container fluid className="login-signup-container">
      <Row className="login-signup-row">
        <Col xs={12} md={7} lg={8} className="login-signup-image-col">
          <Image src={bgImage} fluid className="login-signup-image" />
        </Col>
        <Col xs={12} md={5} lg={4} className="login-signup-form-col">
          <div className="login-signup-form">
            {/* Logo */}
            <div className="login-signup-logo">
              <div className="login-signup-logo-inner">
                <Link to="/">
                  <img
                    src={logo}
                    alt="Aurora Logo"
                    className="login-signup-logo-image"
                  />
                </Link>
              </div>
            </div>

            {/* Header */}
            <div className="login-signup-header">
              <h1 className="login-signup-title">
                {action === "Login"
                  ? "Login To Get Start"
                  : "Nice To Meet You, Friend"}
              </h1>
              <p className="login-signup-subtitle">
                {action === "Login"
                  ? "Welcome Back! Let's Groove"
                  : "Together from now!"}
              </p>
            </div>

            {/* Login Form */}
            <form className="login-signup-form-inner">
              {action === "Sign Up" && (
                <div className="login-signup-input-group">
                  <input
                    type="text"
                    placeholder="Username"
                    className="login-signup-input"
                    value={cname}
                    onChange={(e) => setCname(e.target.value)}
                  />
                </div>
              )}
              <div className="login-signup-input-group">
                <input
                  type="text"
                  placeholder="Email address or phone number"
                  className="login-signup-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="login-signup-input-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="login-signup-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Divider */}
              <div className="login-signup-divider">
                <div className="login-signup-divider-line"></div>
              </div>

              <div className="login-signup-submit-group">
                <Button
                  type="button"
                  className={
                    action === "Login"
                      ? "login-signup-enable"
                      : "login-signup-disable"
                  }
                  onClick={
                    action === "Login" ? handleSubmit : handleChangeAction
                  }
                >
                  Login
                </Button>
                <Button
                  type="button"
                  className={
                    action === "Sign Up"
                      ? "login-signup-enable"
                      : "login-signup-disable"
                  }
                  onClick={
                    action === "Sign Up" ? handleSubmit : handleChangeAction
                  }
                >
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
