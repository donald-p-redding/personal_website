import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { aboutData } from "../Sections/About";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileDownload
} from "react-icons/fa";
import { scrollToSection } from "../../utils/scrollToSection";

const headerData = {
  name: "Donald Redding",
  designation: "Software Engineer",
  imageThumb: "https://donald-p-redding.github.io/personal_website/images/profile_pic.png",
  social: {
    email: "mailto:don@donaldredding.dev",
    github: "https://github.com/donald-p-redding",
    linkedin: "https://www.linkedin.com/in/donald-redding-36a093234/",
  },
  imageStyle: {
    width: '100px',
    height: '100px',
    borderRadius: `100px`,
    marginLeft: '45%',
  },
};

const NAV_ITEMS = [
  { id: "section-home",        icon: "icon-home",       label: "Home" },
  { id: "section-about",       icon: "icon-user",       label: "About" },
  { id: "section-spotlight",   icon: "icon-pin",        label: "Spotlight" },
  { id: "section-portfolios",  icon: "icon-grid",       label: "Portfolio" },
  { id: "section-skills",      icon: "icon-bulb",       label: "Skills" },
  { id: "section-experiences", icon: "icon-graduation", label: "Experience" },
];

function Header({ toggleHeader, toggleHandler }) {
  const [currentPath, setCurrentPath] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const match = useRouteMatch();

  useEffect(() => {
    setCurrentPath(match.path);
  }, [match]);

  useEffect(() => {
    if (currentPath !== "/") return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPath]);

  return (
    <>
      <div
        className={
          toggleHeader
            ? "mobile-header py-2 px-3 mt-4 push"
            : "mobile-header py-2 px-3 mt-4"
        }
      >
        <button className="menu-icon mr-2" onClick={toggleHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/" className="logo">
          <img src={headerData.imageThumb} alt={headerData.name} />
        </Link>
        <Link to="/" className="site-title dot ml-2">
          {headerData.name}
        </Link>
      </div>

      <header
        className={
          toggleHeader
            ? "left float-left shadow-dark open"
            : "left float-left shadow-dark"
        }
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={toggleHandler}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="header-inner d-flex align-items-start flex-column">
          <Link to="/">
            <img style={headerData.imageStyle} src={headerData.imageThumb} alt={headerData.name} />
          </Link>
          <Link style={{fontSize: '1.5rem'}} to="/" className="site-title dot mt-3">
            {headerData.name}
          </Link>

          <span className="site-slogan">{headerData.designation}</span>

          <nav>
            <ul className="vertical-menu scrollspy">
              {NAV_ITEMS.map(({ id, icon, label }) => (
                <li key={id}>
                  {currentPath === "/" ? (
                    <a
                      className={activeSection === id ? "active" : ""}
                      href={`#${id}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
                    >
                      <i className={icon}></i>{label}
                    </a>
                  ) : (
                    <Link to="/">
                      <i className={icon}></i>{label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer mt-auto">
            <ul className="social-icons list-inline">
              {!headerData.social.linkedin ? null : (
                <li className="list-inline-item">
                  <a target="_blank" rel="noreferrer" href={headerData.social.linkedin}>
                    <FaLinkedin />
                  </a>
                </li>
              )}
              {!headerData.social.github ? null : (
                <li className="list-inline-item">
                  <a target="_blank" rel="noreferrer" href={headerData.social.github}>
                    <FaGithub />
                  </a>
                </li>
              )}
              {!headerData.social.email ? null : (
                <li className="list-inline-item">
                  <a target="_blank" rel="noreferrer" href={headerData.social.email}>
                    <FaEnvelope />
                  </a>
                </li>
              )}
              <li className="list-inline-item">
                <a target="_blank" rel="noreferrer" href={aboutData.cvpath}>
                  <FaFileDownload />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
