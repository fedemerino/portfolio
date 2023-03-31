import React from 'react'
import AnimateRightTop from './AnimateRightTop'
import SocialMedia from './SocialMedia'

const AboutMe = () => {
    return (
        <AnimateRightTop>
            <div className='aboutMeContainer'>
                <div className="aboutMe">
                    <div className='contactTitleContainer'>
                        <span className='contactTitle'><span className='contactTitleNumber'>02.</span> About me</span>
                    </div>
                    <div className="whoiamDescription">
                        I've been interested in technology since I'm a child.
                        Back then I managed to create a calculator and a web browser in Visual Basic.
                        It wasn't until I got into University that I started coding again.
                        I learnt Algorithms and Data Structures in Python and Pascal, besides C and OOP concepts.
                        Nowadays I'm a Frontend Developer and I'm also studying Systems Engineering at University and Backend Development.
                        In my free time I enjoy listening to music, playing the guitar, going for a run and learning new technologies.
                    </div>
                    <div className="tech whoiamDescription">
                        <p style={{ marginTop: '1.5rem' }}>Technologies i've worked with:</p>
                        <ul className='techContainer'>
                            <li><span className='liDot'>- </span>HTML</li>
                            <li><span className='liDot'>- </span>CSS</li>
                            <li><span className='liDot'>- </span>JavaScript (ES6+)</li>
                            <li><span className='liDot'>- </span>TypeScript</li>
                            <li><span className='liDot'>- </span>ReactJs</li>
                            <li><span className='liDot'>- </span>NextJs</li>
                            <li><span className='liDot'>- </span>SASS</li>
                            <li><span className='liDot'>- </span>Bootstrap</li>
                            <li><span className='liDot'>- </span>MaterialUI</li>
                            <li><span className='liDot'>- </span>Firebase</li>
                            <li><span className='liDot'>- </span>Git</li>
                            <li><span className='liDot'>- </span>GitHub</li>
                        </ul>
                    </div>
                </div>
                <SocialMedia />
            </div>
        </AnimateRightTop>

    )
}

export default AboutMe
