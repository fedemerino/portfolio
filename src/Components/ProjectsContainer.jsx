import React from "react";
import projects from '../assets/projects.json'
import AnimateBottomRight from "./AnimateBottomRight";
import Project from "./Project";
const ProjectsContainer = () => {
  
  return (
    <AnimateBottomRight>
      <div className="projectsContainer">
        <div className='contactTitleContainer'>
          <span className='contactTitle'><span className='contactTitleNumber'>03.</span> What I've done</span>
        </div>
        {projects.map((project) =>{return <Project
         img={project.img}
         name={project.name}
         description={project.description}
         tech={project.tech}
         repository={project.repository}
         deploy={project.deploy}
         />})}
      </div>
    </AnimateBottomRight>
  );
};

export default ProjectsContainer;
