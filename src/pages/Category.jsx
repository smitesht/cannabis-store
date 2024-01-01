import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Offer from "../components/Offer/Offer";
import CannabisData from "../cannabis.json";
import ProductItem from "../components/ProductItem/ProductItem";
import { getProductsByCategory } from "../redux/productSlice";

const Category = ({ category }) => {
  const dispatch = useDispatch();
  const { categoryProducts } = useSelector((state) => state.products);

  const getCategoryProducts = (category) => {
    dispatch(getProductsByCategory(category));
  };

  useEffect(() => {
    getCategoryProducts(category);
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
        {categoryProducts.map((product, indx) => {
          return <ProductItem key={indx} product={product} />;
        })}
      </section>
    </section>
  );
};

export default Category;
