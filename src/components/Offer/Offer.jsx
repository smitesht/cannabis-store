import React from "react";
import "./Offer.scss";

const Offer = ({ bg_color, title, image, image_alt }) => {
  return (
    <article style={{ background: bg_color }} className="offer-container">
      <div>
        <h2>{title}</h2>
      </div>
      <picture>
        <img src={"./images/" + image} alt={image_alt} />
      </picture>
    </article>
  );
};

export default Offer;
