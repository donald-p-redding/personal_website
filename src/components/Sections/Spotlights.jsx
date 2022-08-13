import React from "react";
import { Link } from "react-router-dom";
import Spotlight from "../Items/Spotlight";

const spotlightsData = [
  {
    id: 1,
    title: "Log Rehydration With Arroyo",
    category: "Featured Work",
    featureImage: "images/spotlight/arroyographic_color.png",
    date: "12 August, 2022",
    author: "Don Redding",
    slug: "the-arroyo-framework",
  }
];

function Spotlights() {
  return (
    <>
      <div className="row">
        {spotlightsData.map((blog) => (
          <div className="col-md-4" key={blog.id}>
            <Spotlight blog={blog} />
          </div>
        ))}
      </div>
      <div className="spacer" data-height="50"></div>
      <div className="text-center">
        {/* <Link to="/blogs" className="btn btn-default">
          Show All Blogs
        </Link> */}
      </div>
    </>
  );
}

export default Spotlights;
