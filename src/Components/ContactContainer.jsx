import React from 'react'
import AnimateBottomLeft from './AnimateBottomLeft'
import Contact from './Contact'
const ContactContainer = () => {
    return (
        <div className='main' style={{justifyContent:'center',alignItems:'center'}}>
            <AnimateBottomLeft>
                <Contact />
            </AnimateBottomLeft>
        </div>
    )
}

export default ContactContainer