import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCannabis, FaShoppingCart } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
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
          Flowers
        </NavLink>
        <NavLink className="link-item" to="/smoke">
          Smoke
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
          <FaShoppingCart />
        </Link>
      </div>
    </header>
  );
};

export default Header;
