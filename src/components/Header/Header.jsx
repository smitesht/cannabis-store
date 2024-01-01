import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCannabis, FaShoppingCart } from "react-icons/fa";
import "./Header.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const { totalQty } = useSelector((state) => state.cart);

  return (
    <header className="header-container">
      <h1>
        <FaCannabis className="brand-icon" />
        CANNABiS
      </h1>
      <nav>
        <NavLink className="link-item" to="/">
          Home
        </NavLink>
        <NavLink className="link-item" to="/flower">
          Flower
        </NavLink>
        <NavLink className="link-item" to="/pre-rolls">
          Pre Rolls
        </NavLink>
        <NavLink className="link-item" to="/vape">
          Vape
        </NavLink>
      </nav>
      <div className="cart-nav">
        <Link className="link-item" to="/login">
          Login
        </Link>
        <Link className="link-item" to="/cart">
          <FaShoppingCart className="shopping-cart" />
          <span className="cart-qty">{totalQty}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
