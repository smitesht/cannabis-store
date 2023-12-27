import React, { useEffect, useState } from "react";
import Offer from "../components/Offer/Offer";
import CannabisData from "../cannabis.json";
import ProductItem from "../components/ProductItem/ProductItem";

const Category = ({ category }) => {
  const [products, setProducts] = useState([]);

  const CategoryDict = {
    flower: "flower",
    smoke: "pre-rolls",
    vape: "Vape",
  };

  console.log(category);

  useEffect(() => {
    setProducts(
      CannabisData.products.filter((data) => {
        return data.type === CategoryDict[category];
      })
    );
  }, [category]);

  return (
    <section className="category-container">
      <Offer
        bg_color="linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"
        title="10% Discount On All Flowers"
        image="offer1.png"
        image_alt="Flowers"
      />

      <section className="category-grid">
        {products.map((product, indx) => {
          return <ProductItem key={indx} product={product} />;
        })}
      </section>
    </section>
  );
};

export default Category;
