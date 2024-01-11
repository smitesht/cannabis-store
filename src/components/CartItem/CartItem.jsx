import React from "react";
import "./CartItem.scss";

const CartItem = ({ cartitem }) => {
  return (
    <article className="cart-item-wrapper">
      <picture className="cart-item-image-wrapper">
        <img
          className="cart-item-image"
          src={"https://" + cartitem.image}
          alt={cartitem.title}
        />
      </picture>
      <div className="cart-item-data">
        <h3 className="product-title">{cartitem.title}</h3>
        <h4 className="product-brand">{cartitem.brand}</h4>
      </div>
      <h4 className="cart-item-price">{cartitem.price}</h4>
      <div className="cart-item-qty-wrapper">
        <h4>{cartitem.qty}</h4>
        <button>Delete</button>
      </div>
      <h4 className="cart-item-total">{cartitem.price}</h4>
    </article>
  );
};

export default CartItem;
