import React from 'react'

const SkillCard = ({ tech, img }) => {
  return (
      <div className='skillCard'>
        <img src={img} alt={tech} />
      </div>
  )
}

export default SkillCard