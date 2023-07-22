import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="intro">
        <div className="navbar">
          <div className="logo"></div>
          <ul className="nav-items">
            <li className="nav-home">
              <a href="#home">Home</a>
            </li>
            <li className="nav-about">
              <a href="#about">About</a>
            </li>
            <li className="nav-portfolio">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-contact">
              <a href="#contact">Contact</a>{" "}
            </li>
          </ul>
          <button className="download-cv">Download CV</button>
        </div>

        <div className="intro-text1">
          Hello 👋, I am <br /> <span className="bilab">Bilab Thapa</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
