import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isActive, setActive] = useState(false);

  const openHam = () => {
    const toggleClass = () => {
      setActive(!isActive);
      console.log(isActive);
    };

    toggleClass();
  };

  const closeMenu = () => {
    setActive(false);
    console.log(isActive);
  };

  return (
    <div>
      <div className="intro" id="home">
        <div
          className={`hamburger ${isActive ? "hamburger-active" : ""}`}
          onClick={openHam}
        >
          <i class="fa-solid fa-bars"></i>
        </div>

        <div className="navbar">
          <div className="logo"></div>
          <ul className="nav-items">
            <li className="nav-home">
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="nav-about">
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li className="nav-portfolio">
              <a href="#portfolio" onClick={closeMenu}>
                Portfolio
              </a>
            </li>
            <li className="nav-contact">
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>{" "}
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
