import React from 'react'
import SkillCard from './SkillCard'
import stacks from '../assets/stack.json'

const SkillCardContainer = () => {
  return (
    stacks.map((stack) => {
      return(
      <div className='skillCard-track'>
        <SkillCard key={stack.tech} {...stack} />
      </div>)

    })
  )
}

export default SkillCardContainer