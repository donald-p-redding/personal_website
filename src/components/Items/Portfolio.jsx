import React from "react";

function Portfolio({ portfolio: { id, name, category, image, slug, url } }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="portfolio-item">
        <div className="details">
          <h4 className="title">{name}</h4>
          {/* <span className="term">{category.join(",  ")}</span> */}
          <span className="term">{slug}</span>
        </div>
        {/* <span className="plus-icon">+</span> */}
        <div className="thumb">
          <img src={image} alt={name} />
          <div className="mask"></div>
        </div>
      </div>
    </a>
  );
}

export default Portfolio;
