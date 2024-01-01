import React from "react";
import "./Breadcrum.scss";
import { Link, NavLink } from "react-router-dom";

const Breadcrum = ({ breadcrum }) => {
  return (
    <div className="breadcrum-container">
      <Link to={breadcrum.home_url} className="bc-item">
        {breadcrum.home}
      </Link>
      <span>/</span>
      <Link to={breadcrum.category_url} className="bc-item">
        {breadcrum.category}
      </Link>
      <span>/</span>
      <span className="bc-item-active">{breadcrum.product_name}</span>
    </div>
  );
};

export default Breadcrum;
