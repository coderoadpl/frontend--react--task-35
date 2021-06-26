import React from 'react'
import ButtonGreen from './ButtonGreen'
import ButtonRed from './ButtonRed'
import Button from './Button'

export const App = () => {
  return (
    <div>
      <ButtonGreen />
      <br/>
      <br/>
      <ButtonRed />
      <br/>
      <br/>
      <Button variant={'green'}>Button Green</Button>
      <br/>
      <br/>
      <Button variant={'red'}>Button Red</Button>
    </div>
  )
}

export default App
