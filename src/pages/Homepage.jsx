import React, { useEffect } from "react";
import { Element } from "react-scroll";
import Layout from "../components/Layout/Layout";
import About from "../components/Sections/About";
import Herosection from "../components/Sections/Herosection";
import SectionHeading from "../components/Items/SectionHeading";
import Services from "../components/Sections/Services";
import Experiences from "../components/Sections/Experiences";
import Portfolios from "../components/Sections/Portfolios";
import Contact from "../components/Sections/Contact";
import Arroyo from "../components/Spotlights/Arroyo";

import { 
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
 } from "react-icons/fa";

 import {
   SiPostgresql,
   SiRubyonrails,
   SiClickhouse,
   SiTurbo,
   SiStimulus,
   SiRedis
 } from "react-icons/si"

 import {
  DiGo,
  DiDocker,
  DiHeroku
 } from "react-icons/di"

function Homepage() {
  const frontEnd = [
    {
      id: 1,
      name: "JavaScript",
      content: "",
      Icon: FaJs,
    },
    {
      id: 2,
      name: "React",
      content: "",
      Icon: FaReact,
    },
    {
      id: 3,
      name: "Turbo",
      content: "",
      Icon: SiTurbo,
    },
    {
      id: 4,
      name: "Stimulus",
      content: "",
      Icon: SiStimulus,
    },
  ];

  const backEnd = [
    {
      id: 1,
      name: "Node",
      content: "",
      Icon: FaNodeJs,
    },
    {
      id: 2,
      name: "Ruby on Rails",
      content: "",
      Icon: SiRubyonrails,
    },
    {
      id: 3,
      name: "Go",
      content: "",
      Icon: DiGo,
    },
    {
      id: 4,
      name: "Docker",
      content: "",
      Icon: DiDocker,
    },
    {
      id: 5,
      name: "AWS",
      content: "",
      Icon: FaAws,
    },
    {
      id: 6,
      name: "SQL",
      content: "",
      Icon: SiPostgresql,
    },
    {
      id: 7,
      name: "Clickhouse",
      content: "",
      Icon: SiClickhouse,
    },
    {
      id: 8,
      name: "Heroku",
      content: "",
      Icon: DiHeroku
    },
    {
      id: 9,
      name: "Redis",
      content: "",
      Icon: SiRedis
    }
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Element name="section-home">
        <Herosection />
      </Element>

      <Element name="section-about">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="About Me" />
          <About />
        </section>
      </Element>

      <Element name="section-spotlight">
        <section className="shadow-blue arroyo-gradient padding">
          <Arroyo />
       </section>
      </Element>

      <Element name="section-portfolios">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Portfolio" />
          <Portfolios />
        </section>
      </Element>

      <Element name="section-skills">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Frontend" />
          <Services servicesData={frontEnd}/>
        </section>
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Backend" />
          <Services servicesData={backEnd}/>
        </section>
      </Element>

      <Element name="section-experiences">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Experience/Education" />
          <Experiences />
        </section>
      </Element>

      <Element name="section-contact">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Get in touch" />
          <Contact />
        </section>
      </Element>
    </Layout>
  );
}

export default Homepage;
