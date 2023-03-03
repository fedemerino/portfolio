import React from 'react'

const SocialMedia = () => {
  return (
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
          <a href="mailto:federicomerinodev@gmail.com" className="social socialEmail">federicomerinodev@gmail.com</a>
        </div>
      </div>
  )
}

export default SocialMedia