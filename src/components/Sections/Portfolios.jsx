import React, { useState, useEffect } from "react";
import Portfolio from "../Items/Portfolio";

const filters = [
  {
    id: 1,
    name: "All Projects",
  },
  {
    id: 2,
    name: "UI",
  },
  {
    id: 3,
    name: "Frameworks",
  },
  {
    id: 4,
    name: "database"
  }
];

const allData = [
  {
    id: 1,
    name: "Arroyo",
    category: ["frameworks"],
    image: "images/portfolio/bulk_10fps.gif",
    slug: "A lightweight log rehydration tool to query logs archived in AWS S3 and re-ingest them into Elasticsearch that is built using React, Redux, and Express.",
    url: "https://github.com/Team-Arroyo/arroyo"
  },
    {
    id: 2,
    name: "Arroyo Deploy",
    category: ["frameworks"],
    image: "images/portfolio/deploy.gif",
    slug: "Automatically deploy and destroy AWS infrastructure for Arroyo (SQS, S3, Lambda).",
    url: "https://github.com/Team-Arroyo/arroyo-deployment"
  },
  {
    id: 3,
    name: "Request Bin",
    category: ["database"],
    image: "images/portfolio/request_bin_demo.gif",
    slug: "Inspect and debug HTTP requests and webhooks. Built using PostgreSQL, MongoDB, Express, and React.",
    url: "https://github.com/olgashi/request_bin"
  },
  {
    id: 4,
    name: "Chalkboard",
    category: ["database"],
    image: "images/portfolio/trello_demo.gif",
    slug: "Trello-inspired productivity board for personal projects using Node.js, Express, React, Redux, and MongoDB.",
    url: "https://github.com/donald-p-redding/trello_clone"
  }
];

function Portfolios() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(true);

  useEffect(() => {
    setActiveFilter(filters[0].name.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    let targetFilter = e.target.value
      ? e.target.value.toLowerCase()
      : e.target.textContent.toLowerCase();
    setActiveFilter(targetFilter);
    let tempData;
    if (targetFilter === filters[0].name.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter((data) => {
        return (
          data.category.includes(targetFilter) && data.id <= dataVisibleCount
        );
      });
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;

    if (tempCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].name.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        let items = getAllItems.filter((data) => {
          return data.category.includes(activeFilter) && data.id <= tempCount;
        });
        setVisibleItems(items);
      }
    }
  };

  return (
    <>
      {/* <ul className="portfolio-filter list-inline">
        {filters.map((filter) => (
          <li
            className={
              filter.name.toLowerCase() === activeFilter
                ? "list-inline-item current"
                : "list-inline-item"
            }
            key={filter.id}
            onClick={handleChange}
          >
            {filter.name}
          </li>
        ))}
      </ul> */}

      <div className="pf-filter-wrapper mb-4">
        <select
          className="portfolio-filter-mobile"
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row portfolio-wrapper">
        {visibleItems.map((item) => (
          <div className="col-sm-4 col-sm-6 grid-item" key={item.id}>
            <Portfolio portfolio={item} />
          </div>
        ))}
      </div>

      {noMorePost ? null : (
        <div className="load-more text-center mt-4">
          <a
            href="#!"
            className="btn btn-default"
            onClick={(e) => handleLoadmore(e)}
          >
            <i className="fas fa-circle-notch"></i> Load more
          </a>
        </div>
      )}
    </>
  );
}

export default Portfolios;
