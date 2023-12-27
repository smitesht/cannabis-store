import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-data">
        <h2>Curated Cannabis</h2>
        <p>
          The Highest Quality Legal THC & CBD Products shipped discreetly to
          your door. No ID or medical card required. Welcome to our Digital
          Dispensary
        </p>
        <button>SHOP ALL PRODUCTS</button>
      </div>
      <picture>
        <img src="./images/cannabis.png" alt="hero" />
      </picture>
    </section>
  );
};

export default Hero;
