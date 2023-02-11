import React from "react";
import Projects from "./Projects";
import AnimateBottomRight from "./AnimateBottomRight";
const ProjectsContainer = () => {
  return (
    <AnimateBottomRight>
      <div className="mainProjects">
        <Projects />
      </div>
    </AnimateBottomRight>
  );
};

export default ProjectsContainer;
