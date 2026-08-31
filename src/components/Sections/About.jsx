import React from "react";

export const aboutData = {
  cvpath: "https://drive.google.com/file/d/1CsPVCzpZPmElw50rAC2TnLcHirwVe3KJ/view?usp=sharing",
  image: "/images/candid_b&w.png",
  name: "Donald Redding",
  location: "Los Angeles, CA",
  email: "don@donaldredding.dev",
  aboutMe: [
    `I'm a full-stack software engineer with four years of experience building production systems across AI/ML, data engineering, and full-stack applications.`,
    `Before software, I spent six years in the construction industry. I started as an apprentice, where I learned the fundamentals and the importance of first principles, and eventually moved into managing projects and small teams. In the wake of the COVID-19 pandemic, I decided to make a career change and transition into software engineering.`,
    `I spent two years studying at Launch School, a mastery-based online software engineering program where students are evaluated at each stage to ensure they have a strong grasp of the fundamentals. That emphasis on fundamentals resonated with me because it reminded me of how I had learned construction: understand the underlying principles first, then build from there.`,
    `That chapter culminated in my admission to Launch School's Capstone program, where I worked with three other engineers scattered across the United States to build Arroyo.`,
    `My experiences in both construction and software have also reinforced my affinity for mentorship. Software is inherently collaborative, and one of its greatest advantages is the ability to learn from people who have already solved problems you are encountering for the first time. I enjoy both sides of that relationship—learning from experienced engineers and sharing what I've learned with others.`
  ],
};

function About() {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={aboutData.image} alt={aboutData.name} />
      </div>
      <div className="col-md-9">
        <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
        {aboutData.aboutMe.map((paragraph, idx) => <p key={idx} className="mb-3">{paragraph}</p>)}
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2">
              Name: <span className="text-dark">{aboutData.name}</span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-2">
              Location: <span className="text-dark">{aboutData.location}</span>
            </p>
            <p className="mb-0">
              Email: <span className="text-dark">{aboutData.email}</span>
            </p>
          </div>
        </div>
        <a target="_blank" rel="noreferrer" href={aboutData.cvpath} className="btn btn-default mr-3">
          <i className="icon-doc"></i>Download Resume
        </a>
      </div>
    </div>
  );
}

export default About;
