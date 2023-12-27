import React from "react";

import "./BestSeller.scss";

const BestSeller = ({ category, title, bg }) => {
  return (
    <section style={{ backgroundColor: bg }} className="best-seller-container">
      <h2>{title}</h2>
      <div className="best-seller-item-grid">
        {category.map((data, indx) => {
          return (
            <article key={indx}>
              <picture>
                <img src={"https://" + data.image} alt={data.title} />
              </picture>
              <div className="bs-data">
                <h3>{data.title}</h3>
                <h4>{data.price}</h4>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default BestSeller;
