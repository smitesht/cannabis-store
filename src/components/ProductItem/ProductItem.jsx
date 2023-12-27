import React from "react";
import "./ProductItem.scss";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <Link to={"/product/" + product.id} className="product-link">
      <article className="product-item">
        <picture>
          <img src={"https://" + product.image} alt={product.title} />
        </picture>
        <div className="product-item-data">
          <h3>{product.title}</h3>
          <h4>{product.price}</h4>
        </div>
      </article>
    </Link>
  );
};

export default ProductItem;
