import React from 'react'
import PropTypes from 'prop-types'
import { makeButtonStyles } from './buttonStyles'

export const Button = (props) => {
  const {
    variant,
    children,
    ...otherProps
  } = props

  const styleVariants = {
    red: makeButtonStyles('red'),
    green: makeButtonStyles('green', 'black')
  }

  return (
    <button
      style={styleVariants[variant]}
      {...otherProps}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['red', 'green']).isRequired,
  children: PropTypes.node
}

export default Button
