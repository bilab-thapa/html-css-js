import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <div className="portfolio-container" id="portfolio">
        <div className="projects">My Projects</div>
        <div class="cards">
          <a
            href="https://github.com/bilab-thapa/pokedex.git"
            target="_blank"
            rel="noreferrer"
          >
            <div class="card">
              <p class="tip">Pokedex App</p>
              <p class="second-text">
                Introducing the Pokédex Flutter App: Your gateway to the
                enchanting world of Pokémon! Immerse yourself in a seamless and
                visually captivating experience as you discover and explore a
                vast collection of Pokémon species. Unleash your inner trainer
                with this user-friendly and innovative Pokédex app.
              </p>
            </div>
          </a>

          <a
            href="https://github.com/bilab-thapa/progulf.git"
            target="_blank"
            rel="noreferrer"
          >
            <div class="card">
              <p class="tip">Progulf App</p>
              <p class="second-text">
                Introducing our cutting-edge E-Commerce App for Motor
                Lubricants! Powered by Hive Database and Node.js API, it offers
                a seamless shopping experience. Browse, compare, and purchase a
                wide range of high-quality lubricants, ensuring smooth rides and
                engine longevity. Your one-stop shop for all lubricant needs!
              </p>
            </div>
          </a>

          <a
            href="https://github.com/bilab-thapa/beauty_ecommerce_application.git"
            target="_blank"
            rel="noreferrer"
          >
            <div class="card">
              <p class="tip">E-Commerce App</p>
              <p class="second-text">
                Flawless Beauty Emporium: Your chic E-Commerce App for beauty
                products. Shop securely via Firebase and pay effortlessly with
                Khalti. Unlock your beauty potential today with our curated
                selection!
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
