import React from "react";

import AnimateBottomRight from "./AnimateBottomRight";
import Project from "./Project";
const ProjectsContainer = () => {
  return (
    <AnimateBottomRight>
      <div className="projectsContainer">
        <div className='contactTitleContainer'>
          <span className='contactTitle'><span className='contactTitleNumber'>03.</span> What I've done</span>
        </div>
        <Project />
      </div>
    </AnimateBottomRight>
  );
};

export default ProjectsContainer;
