import React from "react";
import AnimateBottomLeft from "./AnimateBottomLeft";
import WhoIAm from "./WhoIAm";
const Home = () => {
  return (
    <div className="main">
      <AnimateBottomLeft>
        <WhoIAm />
      </AnimateBottomLeft>
    </div>
  );
};

export default Home;
