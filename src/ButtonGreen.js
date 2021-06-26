import React from 'react'
import { makeButtonStyles } from './buttonStyles'

export const ButtonGreen = () => {
  return (
    <button
      style={makeButtonStyles('green', 'black')}
    >
      ButtonGreen
    </button>
  )
}

export default ButtonGreen
