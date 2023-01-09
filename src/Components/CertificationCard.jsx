import React from 'react'
import StyledButton from './StyledButton'
import { useState } from 'react'
import Modal from './Modal'

const CertificationCard = ({ certification, link }) => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div className='certificationCard'>
            <div className='certificationTitleContainer'>
                <p className='certificationTitle'>{certification}</p>
            </div>
            <StyledButton innerText={"See certification"} color={"whitesmoke"} onClick={()=>setOpenModal(!openModal)}/>
            <Modal open={openModal} setOpen={setOpenModal} link={link} certification={certification}/>
        </div>
    )
}

export default CertificationCard