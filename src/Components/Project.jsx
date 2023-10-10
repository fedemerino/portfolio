import React from "react";
const Project = ({ img, name, description, tech, repository, deploy }) => {
  console.log(img);
  return (
    <div className="projectContainer">
      <div className="projectImg">
        <a href={deploy} className="projectImg" target={"_blank"}>
          <img src={img} alt="" />
        </a>
      </div>
      <div className="projectInfo">
        <div className="projectTitleContainer">
          <p className="projectTitle">{name}</p>
        </div>

        <div className="projectDescriptionContainer">
          <p className="projectDescription">{description}</p>
        </div>
        <div className="projectTech">
          <ul className="techList">
            {tech.map((t) => {
              return <li>{t}</li>;
            })}
          </ul>
        </div>
        <div className="projectLinks">
          <a href={repository} target={"_blank"}>
            <img
              src="githubtransparent.png"
              alt="repository"
              className="projectLink"
            />
          </a>
          <a href={deploy} target={"_blank"}>
            <img src="external.png" alt="deploy" className="projectLink" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
