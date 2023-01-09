import React from 'react'
import Button from '@mui/material/Button';
const StyledButton = ({ innerText, color, onClick, type, variant, bg,bgHover,disabled }) => {
  
  return (
    <Button disabled={disabled} type={type} onClick={onClick} variant={variant} sx={{
      background: bg!=undefined ? bg : 'transparent',
      'fontFamily': '"Montserrat", sans-serif',
      'fontWeight': 'bold',
      color: color,
      border: '1px solid ' + color,
      margin: '1rem 1rem 1rem 1rem',
      'min-width': 0,
      '&:hover': {
        border: '1px solid ' + color,
        background: bgHover!=undefined? bgHover:null
      }
    }}>{innerText}</Button>
  )
}

export default StyledButton