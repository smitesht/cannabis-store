import React from "react";
import { useSelector } from "react-redux";
import Hero from "../components/hero/Hero";
import BestSeller from "../components/BestSeller/BestSeller";
import ProductData from "../cannabis.json";
import Offer from "../components/Offer/Offer";

const Home = () => {
  const { best_seller_flowers, best_seller_pre_rools, best_seller_vapes } =
    useSelector((state) => state.products);

  return (
    <div className="home-container">
      <Hero />
      <BestSeller category={best_seller_flowers} title="Best Selling Flowers" />
      <Offer
        bg_color="linear-gradient(90deg, #efd5ff 0%, #515ada 100%)"
        title="10% Discount On All Flowers"
        image="offer1.png"
        image_alt="Flowers"
      />
      <BestSeller category={best_seller_pre_rools} title="Best Selling Smoke" />
      <Offer
        bg_color="linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)"
        title="15% Discount On All Smokes"
        image="smoke.png"
        image_alt="Smoke"
      />
      <BestSeller category={best_seller_vapes} title="Best Selling Vape" />
    </div>
  );
};

export default Home;
