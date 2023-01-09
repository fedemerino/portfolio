import React from 'react'
import SkillCardContainer from './SkillCardContainer'
import CertificationCardContainer from './CertificationCardContainer.jsx'
const MyStack = () => {
    
    return (
        <>
            <h2 className='stackTitle'>My Stack</h2>
            <div className='skillCardContainer'>
                <SkillCardContainer/>
                <SkillCardContainer/>
            </div>
            <h2 className='stackTitle'>Certifications</h2>
            <div className='certificationsCardContainer'>
                <CertificationCardContainer/>
            </div>
        </>
    )
}

export default MyStack