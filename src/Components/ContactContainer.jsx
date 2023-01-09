import React from 'react'
import AnimateBottomLeft from './AnimateBottomLeft'
import Contact from './Contact'
const ContactContainer = () => {
    return (
        <div className='main'>
            <AnimateBottomLeft>
                <Contact />
            </AnimateBottomLeft>
        </div>
    )
}

export default ContactContainer