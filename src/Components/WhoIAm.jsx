import React from "react";
import StyledButton from "./StyledButton";
const WhoIAm = () => {
  return (
    <div className="homeContainer">
      <div className="whoiam">
        <p className="whoiamHello">Hello, my name is</p>
        <h1>Federico Merino.</h1>
        <h2>I turn ideas into reality.</h2>
        <p className="whoiamDescription">I'm a creative, proactive and detail-oriented Fullstack Developer based in Argentina. Currently working at Artfos. Feel free to take a look at my projects.</p>
        <a href="Federico Merino - Resume.pdf" target={"_blank"}>
          <StyledButton variant={"contained"} type={"submit"} innerText={"Curriculum Vitae"} color={"#64ffda"} bgHover={"rgba(100,255,218,0.1)"} />
        </a>
      </div>
      <div className="socialMediaContainer">
        <div className="socialMedia">
          <a href="https://github.com/fedemerino" target={"_blank"}>
            <img src="githubtransparent.png" alt="instagram" className="social" />
          </a>
          <a href="https://www.linkedin.com/in/federico-merino/" target={"_blank"}>
            <img src="linkedintransparent.png" alt="instagram" className="social" />
          </a>
          <a href="https://www.instagram.com/federicomerino_/" target={"_blank"}>
            <img src="instagram2.png" alt="instagram" className="social" />
          </a>
          <a href="mailto:fedemerino00@gmail.com" className="social socialEmail">fedemerino00@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default WhoIAm;
