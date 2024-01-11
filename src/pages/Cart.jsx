import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem/CartItem";

const Cart = () => {
  const { cartItems, totalQty, totalAmout } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="cart-container">
      <section className="cart-wrapper">
        <div className="cart-logo-info">
          <FaShoppingCart className="cart-logo" />
          <span>My Cart {totalQty > 0 ? `(${totalQty} Items)` : ""}</span>
        </div>
        <section className="cart-info">
          <article className="cart-products">
            {cartItems.map((item) => {
              return <CartItem cartitem={item} />;
            })}
          </article>
          <article className="cart-summary">cart summary</article>
        </section>
      </section>
    </div>
  );
};

export default Cart;
