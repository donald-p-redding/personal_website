import React, { useState, useEffect } from "react";
import Portfolio from "../Items/Portfolio";

const filters = [
  {
    id: 1,
    name: "All Projects",
  },
  {
    id: 2,
    name: "Professional",
  },
  {
    id: 3,
    name: "Frameworks",
  },
  {
    id: 4,
    name: "Tooling"
  }
];

const allData = [
  {
    id: 1,
    name: "Incremental Lift",
    category: ["professional"],
    image: "/images/portfolio/magellan_incremental_lift.png",
    slug: "Architected a measurement feature that processes millions of impression and listener-behavior records to generate synthetic lookalike control groups — giving advertisers a grounded, data-driven read on true campaign lift without complex tracking infrastructure.",
    url: "https://www.magellan.ai/products/incremental-lift"
  },
  {
    id: 2,
    name: "Broadcast Attribution",
    category: ["professional"],
    image: "/images/portfolio/magellan_broadcast_attribution.png",
    slug: "Drove development from prototype to production of a cross-channel measurement product connecting broadcast radio campaigns to real business outcomes (site visits, leads, revenue) using market-level listener behavior modeling. Includes a public B2B API for programmatic reporting.",
    url: "https://www.magellan.ai/products/broadcast-attribution"
  },
  {
    id: 3,
    name: "Brand Creative Discovery",
    category: ["professional"],
    image: "/images/portfolio/magellan_brand_creative.png",
    slug: "Owned end-to-end development of a competitive intelligence feature that groups thousands of live ad placements into cohesive brand campaigns — enabling marketers to identify and act on emerging national audio advertising strategies. Delivered ahead of deadline; became a cornerstone of the platform.",
    url: "https://www.magellan.ai/news-insights/get-deeper-insights-into-competitors-programmatic-and-run-of-network-strategies"
  },
  {
    id: 4,
    name: "Arroyo",
    category: ["frameworks"],
    image: "/images/portfolio/bulk_10fps.gif",
    slug: "Lightweight framework to rehydrate logs archived in AWS S3 back into Elasticsearch, with automated AWS infrastructure provisioning, Lambda-based processing, and S3 Select query support.",
    url: "https://github.com/Team-Arroyo/arroyo"
  },
  {
    id: 5,
    name: "Arroyo Deploy",
    category: ["frameworks"],
    image: "/images/portfolio/deploy.gif",
    slug: "Automated provisioning and teardown of Arroyo's AWS infrastructure (S3, SQS, Lambda, IAM) using AWS SDK, reducing ~30 async API calls to two single-line commands.",
    url: "https://github.com/Team-Arroyo/arroyo-deployment"
  },
  {
    id: 6,
    name: "Request Bin",
    category: ["tooling"],
    image: "/images/portfolio/request_bin_demo.gif",
    slug: "Inspect and debug HTTP requests and webhooks. Built using PostgreSQL, MongoDB, Express, and React.",
    url: "https://github.com/olgashi/request_bin"
  },
  {
    id: 7,
    name: "Chalkboard",
    category: ["tooling"],
    image: "/images/portfolio/trello_demo.gif",
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
    setActiveFilter("professional");
    setVisibleItems(getAllItems.filter((item) => item.category.includes("professional")));
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
          value={activeFilter}
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name.toLowerCase()} key={filter.id}>
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
