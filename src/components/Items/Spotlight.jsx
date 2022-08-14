import React from "react";

function Spotlight({
  blog: { id, title, category, featureImage, date, author, slug, link },
}) {
  return (
    <div className="blog-item">
      <div className="thumb">
        {/* <a href="#!">
          <span className="category">{category}</span>
        </a> */}
        <a rel="noreferrer" target="_blank" href={link}>
          <img src={featureImage} alt={title} />
        </a>
      </div>
      <h4 className="mt-4 mb-0">
        <a rel="noreferrer" target="_blank" href={link}>{title}</a>
      </h4>
      <ul className="list-inline meta mb-0 mt-3">
        <li className="list-inline-item">{date}</li>
        <li className="list-inline-item">{author}</li>
      </ul>
    </div>
  );
}

export default Spotlight;
