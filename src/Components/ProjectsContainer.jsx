import React from 'react'
import Projects from './Projects'
import AnimateBottomRight from './AnimateBottomRight'
const ProjectsContainer = () => {
    return (
        <div className='main'>
            <AnimateBottomRight>
                <Projects />
            </AnimateBottomRight>
        </div>
    )
}

export default ProjectsContainer