import React from "react";

export const aboutData = {
  cvpath: "https://drive.google.com/file/d/1CsPVCzpZPmElw50rAC2TnLcHirwVe3KJ/view?usp=sharing",
  image: "/images/candid_b&w.png",
  name: "Donald Redding",
  location: "Los Angeles, CA",
  email: "don@donaldredding.dev",
  aboutMe: `
    I'm a full-stack software engineer with four years of professional experience building production software across web applications, data systems, and AI/ML.

    Before software, I spent six years in the construction industry, starting as an apprentice and eventually managing projects and small teams. I was fortunate to have a fantastic mentor during that time who taught me a lot about leadership, communication, and the importance of getting the fundamentals right. I left construction with a playbook for approaching unfamiliar problems that I've carried with me into software.

    In the wake of the COVID-19 pandemic, I decided to make a career change and spent two years studying at Launch School, a mastery-based software engineering program with a strong emphasis on fundamentals. That approach resonated with me because it was very similar to how I'd learned construction: understand the underlying principles first, then build from there.

    That chapter culminated in Launch School's Capstone program, where I worked with three other engineers across the country to build Arroyo. From there, I joined Magellan AI, where I've spent the last four years working across full-stack applications, measurement products, high-throughput data systems, ML workflows, and more recently AI and agent tooling.

    My experiences in construction and software have reinforced my affinity for mentorship. I enjoy both sides of that relationship—learning from engineers with different experiences than my own and sharing what I've learned with others.

    Outside of work, I love tinkering and keeping busy. When I'm not working on DIY projects for friends and family, I'm happiest in my "home lab," where I do a lot of learning by doing. If I'm looking to learn a new technology or concept, I'll usually make a project out of it.

    Anecdotally, I spent more time designing and building out a self-hosted Minecraft server with all the bells and whistles—automated backups, AWS hosting, infrastructure managed with Terraform, custom metrics, Discord plugins, etc.—than I did actually playing the game, but it was fun all the same.
  `,
};

const aboutMeParagraphs = aboutData.aboutMe
  .trim()
  .split(/\n\s*\n/)
  .map((paragraph) => paragraph.trim());

function About() {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={aboutData.image} alt={aboutData.name} />
      </div>
      <div className="col-md-9">
        <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
        {aboutMeParagraphs.map((paragraph, idx) => <p key={idx} className="mb-3">{paragraph}</p>)}
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
