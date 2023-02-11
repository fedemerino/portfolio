import React from "react";
import Project from "./Project";
const Projects = () => {
  return (
    <>
      <div className="projectTitle">
        <span>Projects</span>
      </div>
      <div>
        <p className="projectText">
          Here you can take a look at the projects i've been working on.
        </p>
      </div>
      <div className="projectsContainer">
      <Project name={'Starbucks clone (under construction)'} img={'/sbmenu.png'} github={'https://github.com/fedemerino/starbucksclone'} link={'https://starbucksclone-nine.vercel.app/'}/>
      <Project name={'Where to watch (under construction)'} img={'/wtw.png'} github={'https://github.com/fedemerino/wheretowatch'}/>
      <Project name={'e-commerce'} img={'/ecommerce.png'} github={'https://github.com/fedemerino/e-Commerce-JavaScript'}/>
      </div>
    </>
  );
};

export default Projects;
