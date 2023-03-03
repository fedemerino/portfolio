import React from 'react'
import Button from '@mui/material/Button';
const StyledButton = ({ innerText, color, onClick, type, variant, bg,bgHover,disabled }) => {
  
  return (
    <Button disabled={disabled} type={type} onClick={onClick} variant={variant} sx={{
      background: bg ? bg : 'transparent',
      'fontFamily': '"Montserrat", sans-serif',
      'fontWeight': '400',
      color: color,
      border: '1px solid ' + color,
      borderRadius: '3px',
      marginTop: '2rem',
      padding: '0.75rem 1.3rem 0.75rem 1.3rem',
      'min-width': 0,
      '&:hover': {
        border: '1px solid ' + color,
        background: bgHover ? bgHover:null
      }
    }}>{innerText}</Button>
  )
}

export default StyledButton