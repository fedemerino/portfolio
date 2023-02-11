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
        </p><p className="projectText">
          You can click on GitHub logo if you want to check out the repository.
        </p>
      </div>
      <div className="projectsContainer">
      <Project name={'Starbucks clone (under construction)'} img={'/src/sbmenu.png'} github={'https://github.com/fedemerino/starbucksclone'}/>
      <Project name={'Where to watch (under construction)'} img={'/src/wtw.png'} github={'https://github.com/fedemerino/wheretowatch'}/>
      <Project name={'e-commerce'} img={'/src/ecommerce.png'} github={'https://github.com/fedemerino/e-Commerce-JavaScript'}/>
      </div>
    </>
  );
};

export default Projects;
