import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "Oct 2022 - Present",
    degree: "Full-Stack Software Engineer",
    content: "Magellan AI",
    description: "Joined as Magellan was just beginning to build out its measurement products, and have spent the four years since working across their evolution — from early prototypes to mature, production systems. Work has spanned full-stack product development, high-throughput data infrastructure, ML model deployment, and, more recently, AI/agent tooling.",
  },
  {
    id: 2,
    year: "Apr 2022 - Oct 2022",
    degree: "Co-Creator, Capstone Project",
    link: "https://www.arroyoframework.com/",
    content: "Arroyo (Open Source)",
    description: "Built with three other engineers as my Launch School Capstone project — an open-source log rehydration tool. See the Spotlight above for details.",
  },
  {
    id: 3,
    year: "2020 - 2022",
    degree: "Software Engineering Program",
    content: "Launch School",
    description: "Two-year, mastery-based program covering programming fundamentals, data structures, and full-stack web development, culminating in the Capstone program.",
  },
  {
    id: 4,
    year: "Mar 2016 - Apr 2022",
    degree: "Project Manager",
    content: "Media Home Theater, Los Angeles, CA",
    description: "Progressed from apprentice to managing installation projects and small crews over six years in the construction industry.",
  },
  {
    id: 5,
    year: "2010 - 2012",
    degree: "B.A. Liberal Arts",
    content: "North Dakota State University, Fargo, ND",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
