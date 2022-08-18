import React from "react";

function Experience({ experience: { year, degree, content, link } }) {
  return (
    <div className="entry">
      <div className="title">
        <span>{year}</span>
      </div>
      <div className="body">
        <h4 className="mt-0">{degree}</h4>
        {link ? <a target="_blank" rel="noreferrer" href={link}>{content}</a> : <p>{content}</p>}
      </div>
    </div>
  );
}

export default Experience;
