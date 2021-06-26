import React from 'react'
import { makeButtonStyles } from './buttonStyles'

export const ButtonRed = () => {
  return (
    <button
      style={makeButtonStyles('red')}
    >
      ButtonRed
    </button>
  )
}

export default ButtonRed
