import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { scrollToSection } from "../../utils/scrollToSection";

const headerData = {
  name: "Donald Redding",
  designation: "Software Engineer",
  imageThumb: "https://donald-p-redding.github.io/personal_website/images/profile_pic.png",
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
  { id: "section-connect",     icon: "icon-social-linkedin", label: "Connect" },
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

        </div>
      </header>
    </>
  );
}

export default Header;
