import React from "react";

export const aboutData = {
  cvpath: "https://drive.google.com/file/d/1CsPVCzpZPmElw50rAC2TnLcHirwVe3KJ/view?usp=sharing",
  image: "images/candid_b&w.png",
  name: "Donald Redding",
  location: "Los Angeles, CA",
  email: "don@donaldredding.dev",
  aboutMe:
    `I am a software engineer based out of Los Angeles, California. I cut my teeth in the world of low voltage construction before transitioning into software. The construction world taught me the importance of clear communication and the invaluable impact of mentorship. Software is inherently collaborative, and the ability to learn from the experiences of others is essential to me.`,
};

function About() {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={aboutData.image} alt={aboutData.name} />
      </div>
      <div className="col-md-9">
        <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
        <p className="mb-0">{aboutData.aboutMe}</p>
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
