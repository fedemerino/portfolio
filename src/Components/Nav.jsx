import React from 'react'
import StyledButton from './StyledButton'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div className='nav'>
        <Link to='/about' style={{'textDecoration':'none'}}><StyledButton variant={"outlined"} innerText='About' color={'#cacaca'}/></Link>
        <Link to='/skills'style={{'textDecoration':'none'}}><StyledButton variant={"outlined"}  innerText='Skills' color={'#cacaca'}/></Link>
        <Link to='/projects'style={{'textDecoration':'none'}}><StyledButton variant={"outlined"}  innerText='Projects' color={'#cacaca'}/></Link>
        <Link to='/contact'style={{'textDecoration':'none'}}><StyledButton variant={"outlined"}  innerText='Contact' color={'#cacaca'}/></Link>
    </div>
  )
}

export default Nav