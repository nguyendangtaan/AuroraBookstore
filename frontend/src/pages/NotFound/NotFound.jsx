import React from "react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div id="notfound">
      <div
        className="notfound-bg"
        style={{ backgroundImage: `url(/assets/bg.jpg)` }}
      ></div>
      <div className="notfound">
        <div class="notfound-404">
          <h1>404</h1>
        </div>
        <h2>we are sorry, but the page you requested was not found</h2>
        <a href="/" className="home-btn">
          Go Home
        </a>
        <a href="/AboutUs" className="contact-btn">
          About us
        </a>
      </div>
    </div>
  );
}
