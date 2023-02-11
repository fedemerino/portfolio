import React from "react";

const Project = ({ img, github, name }) => {
  return (
    <li className="projectContainer">
      <div className="bar">
        <p className="projectName">{name}</p>
        <a href={github} target="_blank">
          <img src="/src/github.png" alt="" className="githubLogo" />
        </a>
      </div>
      <img className="projectImg" src={img} alt={img} />
    </li>
  );
};

export default Project;
