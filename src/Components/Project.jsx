import React from 'react'

const Project = () => {
    return (
        <div className='projectContainer'>
            <div className='projectImg'>
                <img src="nuestrocafe.png" alt="" />
            </div>
            <div className="projectInfo">
                <div className="projectTitleContainer">
                    <p className='projectTitle'>Starbucks Clone</p>
                </div>

                <div className="projectDescriptionContainer">
                    <p className='projectDescription'>Starbucks Argentina design and functionalities replicated with reusable components.</p>
                </div>
                <div className="projectTech">
                    <ul className='techList'>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>SASS</li>
                    </ul>
                </div>
                <div className="projectLinks">
                    <a href="https://github.com/fedemerino" target={"_blank"}>
                        <img src="githubtransparent.png" alt="instagram" className="projectLink" />
                    </a>
                    <a href="https://github.com/fedemerino" target={"_blank"}>
                        <img src="external.png" alt="instagram" className="projectLink" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project