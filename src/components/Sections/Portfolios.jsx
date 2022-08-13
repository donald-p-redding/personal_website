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
    slug: "A Lightweight Log Rehydration Tool",
    url: "https://github.com/Team-Arroyo/arroyo"
  },
    {
    id: 2,
    name: "Arroyo Deploy",
    category: ["frameworks"],
    image: "images/portfolio/deploy.gif",
    slug: "Automatically Deploy and Destory AWS Infrastructure for Arroyo",
    url: "https://github.com/Team-Arroyo/arroyo-deployment"
  },
  {
    id: 3,
    name: "Request Bin",
    category: ["database"],
    image: "images/portfolio/request_bin_demo.gif",
    slug: "Inspect and Debug HTTP Requests and Webhooks. Listed as contributor.",
    url: "https://github.com/olgashi/request_bin"
  },
  {
    id: 4,
    name: "Trello Clone",
    category: ["database"],
    image: "images/portfolio/trello_demo.gif",
    slug: "Organization Tool Backed By Mongo DB Atlas",
    url: "https://github.com/donald-p-redding/trello_clone"
  },
  {
    id: 5,
    name: "React Airlines",
    category: ["ui"],
    image: "images/portfolio/react-airlines.png",
    slug: "React Based UI Practice",
    url: "https://github.com/donald-p-redding/react_airlines"
  },
  {
    id: 6,
    name: "Simple Photo Gallery",
    category: ["ui"],
    image: "images/portfolio/simple-photo-gallery.png",
    slug: "jQuery UI Practice",
    url: "https://github.com/donald-p-redding/simple_photo_gallery"

  },
  {
    id: 7,
    name: "Basic Todo Tracker",
    category: ["ui"],
    image: "images/portfolio/todo-tracker.png",
    slug: "Heroku App With PostgreSQL DB",
    url: "https://github.com/donald-p-redding/simple-todos"

  },
];

function Portfolios() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

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
      <ul className="portfolio-filter list-inline">
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
      </ul>

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
          <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
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
