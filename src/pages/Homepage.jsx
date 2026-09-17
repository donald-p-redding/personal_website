import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import About from "../components/Sections/About";
import Herosection from "../components/Sections/Herosection";
import SectionHeading from "../components/Items/SectionHeading";
import Services from "../components/Sections/Services";
import Experiences from "../components/Sections/Experiences";
import Portfolios from "../components/Sections/Portfolios";
import Arroyo from "../components/Spotlights/Arroyo";
import SocialLinks from "../components/Sections/SocialLinks";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
  FaHtml5,
 } from "react-icons/fa";

 import {
   SiRuby,
   SiTypescript,
   SiRubyonrails,
   SiExpress,
   SiPostgresql,
   SiClickhouse,
   SiElasticsearch,
   SiRedis,
   SiTerraform,
   SiApachekafka,
 } from "react-icons/si"

 import { DiDocker } from "react-icons/di"
 import { TbSql } from "react-icons/tb"

function Homepage() {
  const languages = [
    { id: 1, name: "Ruby", Icon: SiRuby },
    { id: 2, name: "TypeScript", Icon: SiTypescript },
    { id: 3, name: "JavaScript", Icon: FaJs },
    { id: 4, name: "SQL", Icon: TbSql },
  ];

  const frontEnd = [
    { id: 1, name: "React", Icon: FaReact },
    { id: 2, name: "HTML/CSS", Icon: FaHtml5 },
  ];

  const backEnd = [
    { id: 1, name: "Ruby on Rails", Icon: SiRubyonrails },
    { id: 2, name: "Node.js", Icon: FaNodeJs },
    { id: 3, name: "Express", Icon: SiExpress },
  ];

  const data = [
    { id: 1, name: "PostgreSQL", Icon: SiPostgresql },
    { id: 2, name: "ClickHouse", Icon: SiClickhouse },
    { id: 3, name: "Elasticsearch", Icon: SiElasticsearch },
    { id: 4, name: "Redis", Icon: SiRedis },
  ];

  const infrastructure = [
    { id: 1, name: "AWS", Icon: FaAws },
    { id: 2, name: "Docker", Icon: DiDocker },
    { id: 3, name: "Terraform", Icon: SiTerraform },
    { id: 4, name: "Kafka", Icon: SiApachekafka },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div id="section-home">
        <Herosection />
      </div>

      <div id="section-about">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="About Me" />
          <About />
        </section>
      </div>

      <div id="section-spotlight">
        <section className="shadow-blue arroyo-gradient padding">
          <Arroyo />
       </section>
      </div>

      <div id="section-portfolios">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Portfolio" />
          <Portfolios />
        </section>
      </div>

      <div id="section-skills">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Languages" />
          <Services servicesData={languages}/>
        </section>
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Frontend" />
          <Services servicesData={frontEnd}/>
        </section>
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Backend" />
          <Services servicesData={backEnd}/>
        </section>
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Data" />
          <Services servicesData={data}/>
        </section>
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Infrastructure & Data Systems" />
          <Services servicesData={infrastructure}/>
        </section>
      </div>

      <div id="section-experiences">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Relevant Experience/Education" />
          <Experiences />
        </section>
      </div>

      <div id="section-connect">
        <section className="shadow-blue background-blue padding">
          <SectionHeading title="Connect" />
          <SocialLinks />
        </section>
      </div>

    </Layout>
  );
}

export default Homepage;
