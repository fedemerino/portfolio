import React from 'react'
import StyledButton from './StyledButton'

const Modal = ({open,setOpen,link,certification}) => {
    if(!open) return null
  return (
    <div className='overlay' onClick={()=>setOpen(!open)}>
        <div className='certificationImg'>
            <img src={link} alt={certification} />
        </div>
    </div>
  )
}

export default Modal