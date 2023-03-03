import React from "react";
import StyledButton from "./StyledButton";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="navLinkContainer">
          <div className="navLink">
          <div style={{display: 'flex'}}>
              <p className="navLinkNumber">01.</p>
              <p className="navLinkText">HOME</p>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <div className="navLinkContainer">
          <div className="navLink">
            <div style={{display: 'flex'}}>
              <p className="navLinkNumber">02.</p>
              <p className="navLinkText">ABOUT ME</p>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/projects" style={{ textDecoration: "none" }}>
        <div className="navLinkContainer">
          <div className="navLink">
          <div style={{display: 'flex'}}>
              <p className="navLinkNumber">03.</p>
              <p className="navLinkText">PROJECTS</p>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <div className="navLinkContainer">
          <div className="navLink">
          <div style={{display: 'flex'}}>
              <p className="navLinkNumber">04.</p>
              <p className="navLinkText">CONTACT</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Nav;
