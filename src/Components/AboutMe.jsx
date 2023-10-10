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
                        <p>I specialize in building dynamic and interactive web applications using modern web technologies. I have hands-on experience in front-end development with HTML, CSS, and JavaScript, along with popular frameworks and libraries like ReactJS, Next.js, and Vue.js. I am proficient in creating responsive and visually appealing UI designs using tools such as Bootstrap, Tailwind CSS, and Material-UI.</p>
                        <p>On the back-end, I work in server-side development using Node.js and Laravel. I have experience with working on databases like MongoDB, MariaDB and leveraging cloud services like Firebase for scalable and secure web applications.</p>
                        <p>I believe in writing clean and maintainable code, following best practices and industry standards. I strive to create user-centric experiences, focusing on performance and accessibility. I'm a strong believer in continuous learning and staying up-to-date with the latest trends and technologies in the ever-evolving web development landscape.</p>
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
                            <li><span className='liDot'>- </span>Redux Toolkit</li>
                            <li><span className='liDot'>- </span>Vue</li>
                            <li><span className='liDot'>- </span>PHP</li>
                            <li><span className='liDot'>- </span>Laravel</li>
                            <li><span className='liDot'>- </span>Node</li>
                            <li><span className='liDot'>- </span>Express</li>
                            <li><span className='liDot'>- </span>MongoDB</li>
                            <li><span className='liDot'>- </span>Firebase</li>
                            <li><span className='liDot'>- </span>SASS</li>
                            <li><span className='liDot'>- </span>Bootstrap</li>
                            <li><span className='liDot'>- </span>Tailwind</li>
                            <li><span className='liDot'>- </span>MaterialUI</li>                
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
