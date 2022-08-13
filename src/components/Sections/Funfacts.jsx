import React from "react";
import TrackVisibility from "react-on-screen";
import Funfact from "../Items/Funfact";

const funfactData = [
  {
    id: 1,
    title: "Current repositories",
    count: 14,
    icon: "icon-social-github",
  },
  {
    id: 2,
    title: "Cups of coffee",
    count: 4534,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Total miles run",
    count: 2575,
    icon: "icon-flag",
  },
  {
    id: 4,
    title: "Countries visited",
    count: 7,
    icon: "icon-plane",
  },
];

function Funfacts() {
  return (
    <section className="shadow-dark color-white background parallax padding-50">
      <div className="row relative z-1 -mt-50">
        {funfactData.map((funfact) => (
          <div className="col-md-3 col-sm-6 mt-50" key={funfact.id}>
            <TrackVisibility once>
              <Funfact funfact={funfact} />
            </TrackVisibility>
          </div>
        ))}
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Funfacts;
