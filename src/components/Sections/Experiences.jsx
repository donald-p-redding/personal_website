import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "Oct 2022 - Present",
    degree: "Full-Stack Software Engineer",
    content: "Magellan AI",
  },
  {
    id: 2,
    year: "Apr 2022 - Present",
    degree: "Co-creator & Software Engineer",
    link: "https://www.arroyoframework.com/",
    content: "Arroyo (Open Source)",
  },
  {
    id:3,
    year: "Mar 2016 - Apr 2022",
    degree: "Project Manager / Systems Engineer",
    content: "Media Home Theater, Los Angeles, CA",
  },
  {
    id: 4,
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
