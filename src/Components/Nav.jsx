import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [buttonState, setButtonState] = useState(false);

  const handleButton = () => {
    setButtonState(!buttonState);
  };
  return (
    <>
    <div className="sandwichButton" onClick={handleButton}>
        <img src="hamburger.png" alt="" />
      </div>
      <div className="nav" style={{display: buttonState && 'flex'}}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navLinkContainer">
            <div className="navLink">
              <div style={{ display: "flex" }}>
                <p className="navLinkNumber">01.</p>
                <p className="navLinkText">HOME</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <div className="navLinkContainer">
            <div className="navLink">
              <div style={{ display: "flex" }}>
                <p className="navLinkNumber">02.</p>
                <p className="navLinkText">ABOUT ME</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <div className="navLinkContainer">
            <div className="navLink">
              <div style={{ display: "flex" }}>
                <p className="navLinkNumber">03.</p>
                <p className="navLinkText">PROJECTS</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <div className="navLinkContainer">
            <div className="navLink">
              <div style={{ display: "flex" }}>
                <p className="navLinkNumber">04.</p>
                <p className="navLinkText">CONTACT</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      
    </>
  );
};

export default Nav;
