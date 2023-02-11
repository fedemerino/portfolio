import React from "react";

const Project = ({ img, github, name, link }) => {
  return (
    <li className="projectContainer">
      <div className="bar">
        <p className="projectName">{name}</p>
        <a href={github} target="_blank">
          <img src="/github.png" alt="" className="githubLogo" />
        </a>
      </div>
      <a href={link} target={'_blank'}>
        <img className="projectImg" src={img} alt={img} />
      </a>
    </li>
  );
};

export default Project;
