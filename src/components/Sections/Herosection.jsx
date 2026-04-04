import React from "react";
import { aboutData } from "./About";
import { scrollToSection } from "../../utils/scrollToSection";

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
        <a
          href="#section-spotlight"
          className="btn btn-default btn-lg mr-3"
          onClick={(e) => { e.preventDefault(); scrollToSection("section-spotlight"); }}
        >
          <i className="icon-pin"></i>Spotlight
        </a>

      <a target="_blank" rel="noreferrer" href={aboutData.cvpath} className="btn btn-default btn-lg mr-3">
          <i className="icon-doc"></i>Download Resume
      </a>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;
