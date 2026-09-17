import React from "react";

function Experience({ experience: { year, degree, content, link, description } }) {
  return (
    <div className="entry">
      <div className="title">
        <span>{year}</span>
      </div>
      <div className="body">
        <h4 className="mt-0">{degree}</h4>
        {link ? <a target="_blank" rel="noreferrer" href={link}>{content}</a> : <p className="mb-1">{content}</p>}
        {description ? <p className="mb-0">{description}</p> : null}
      </div>
    </div>
  );
}

export default Experience;
