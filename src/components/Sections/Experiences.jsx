import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2022 - Present",
    degree: "Software Engineer",
    content:
      "Arroyo",
  },
  {
    id: 2,
    year: "2019 - 2022",
    degree: "Software Engineer",
    content:
      "Launch School",
  },
  {
    id: 3,
    year: "2016 - 2022",
    degree: "Project Manager",
    content:
      "Media Home Theater Inc. Los Angeles, California",
  },
  {
    id: 4,
    year: "2010 - 2012",
    degree: "Bachelor’s Degree",
    content:
      "North Dakota State University. Fargo, North Dakota.",
  },
  {
    id: 5,
    year: "2009 - 2010",
    degree: "Undergraduate Studies: Computer Science",
    content:
      "University of Minnesota. Minneapolis, Minnesota. ",
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
