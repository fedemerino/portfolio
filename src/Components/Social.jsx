import React from "react";

const Social = () => {
  return (
    <div className="social">
      <div className="igbg">
        <div className="instagram">
          <a
            href={"https://www.instagram.com/federicomerino_"}
            target={"_blank"}
          >
            <img src="/instagram.png" />
          </a>
        </div>
      </div>
      <div className="linkedinBg">
        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/federico-merino/"
            target={"_blank"}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
          </a>
        </div>
      </div>
      <div className="githubBg">
        <div className="github">
          <a href="https://github.com/fedemerino/" target={"_blank"}>
            <img src="/githubwhite.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
