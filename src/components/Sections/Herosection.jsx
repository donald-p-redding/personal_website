import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { aboutData } from "./About";

const herosectionData = {
  name: "Welcome",
  aboutMe: [
    "I'm a software engineer with experience building serverless solutions to derive additional insight into existing systems who enjoys collaborating with a team to tackle tricky problems.",
    "I recently built Arroyo, a lightweight framework to rehydrate logs archived in cloud storage into Elasticsearch to breathe new life into older data."
  ]
};

function Herosection() {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
    >
      <div className="cta mx-auto mt-2">
        <h1 style={{fontSize:"3rem"}} className="mt-0 mb-4">
          {herosectionData.name}
          <span className="dot"></span>
        </h1>
        {herosectionData.aboutMe.map(content => <p className="mb-4">{content}</p>)}
        <ScrollLink
          activeClass="active"
          to="section-spotlight"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-default btn-lg mr-3"
        >
          <i className="icon-pin"></i>Spotlight
        </ScrollLink>
        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-default btn-lg mr-3"
        >
          <i className="icon-envelope"></i>Contact me
        </ScrollLink>        
      <a target="_blank" rel="noreferrer" href={aboutData.cvpath} className="btn btn-default btn-lg mr-3">
          <i className="icon-doc"></i>Download Resume
      </a>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;
