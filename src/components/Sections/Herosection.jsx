import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { aboutData } from "./About";

const herosectionData = {
  name: "Welcome",
  aboutMe: [
    "Full-stack software engineer with 8+ years of technical and leadership experience, including 3+ years building high-throughput data pipelines and B2B SaaS products.",
    "Experienced in Ruby, Go, cloud-native AWS infrastructure, and Terraform. Prior background in large-scale commercial systems integration informs my architectural thinking and cross-team collaboration."
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
