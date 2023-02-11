import React from "react";
import AnimateBottomLeft from "./AnimateBottomLeft";
import WhoIAm from "./WhoIAm";
import Social from "./Social.jsx";
const About = () => {
  return (
    <div className="main">
      <AnimateBottomLeft>
        <WhoIAm />
      </AnimateBottomLeft>
      <Social />
    </div>
  );
};

export default About;
