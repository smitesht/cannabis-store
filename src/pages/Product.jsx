import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrum from "../components/Breadcrum/Breadcrum";
import { selectProduct } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";

const Product = () => {
  const { id } = useParams();

  const { selectedProduct, breadcrum } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(selectProduct(id));
  }, [id]);

  const OnAddToCartHandler = (e) => {
    dispatch(addToCart(selectedProduct));
    navigate("/cart");
  };

  return (
    <div className="product-container">
      <section className="breadcrum-section">
        <Breadcrum breadcrum={breadcrum} />
      </section>
      <section className="product-wrapper">
        <picture>
          <img
            src={"https://" + selectedProduct.image}
            alt={selectedProduct.title}
          />
        </picture>
        <div className="product-data">
          <h2>{selectedProduct.title}</h2>
          <h4>{selectedProduct.brand}</h4>
          <p className="p-feature">{selectedProduct.feature}</p>
          <h3>{selectedProduct.price}</h3>
          <button className="btn cta" onClick={OnAddToCartHandler}>
            Add To Cart
          </button>

          <p className="p-desc">{selectedProduct.description}</p>
        </div>
      </section>
    </div>
  );
};

export default Product;
