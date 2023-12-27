import React from "react";
import Hero from "../components/hero/Hero";
import BestSeller from "../components/BestSeller/BestSeller";
import ProductData from "../cannabis.json";
import Offer from "../components/Offer/Offer";

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <BestSeller category={ProductData.flowers} title="Best Selling Flowers" />
      <Offer
        bg_color="linear-gradient(90deg, #efd5ff 0%, #515ada 100%)"
        title="10% Discount On All Flowers"
        image="offer1.png"
        image_alt="Flowers"
      />
      <BestSeller category={ProductData.smoke} title="Best Selling Smoke" />
      <Offer
        bg_color="linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)"
        title="15% Discount On All Smokes"
        image="smoke.png"
        image_alt="Smoke"
      />
      <BestSeller category={ProductData.vape} title="Best Selling Vape" />
    </div>
  );
};

export default Home;
