import React from "react";

const Social = () => {
  return (
    <div className="social">
      <div className="igbg">
        <a href={"https://www.instagram.com/federicomerino_"} target={"_blank"}>
          <div className="instagram">
            <img src="/instagram.png" />
          </div>
        </a>
      </div>
      <div className="linkedinBg">
        <a
          href="https://www.linkedin.com/in/federico-merino/"
          target={"_blank"}
        >
          <div className="linkedin">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
          </div>
        </a>
      </div>
      <div className="githubBg">
        <a href="https://github.com/fedemerino/" target={"_blank"}>
          <div className="github">
            <img src="/githubwhite.png" alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Social;
