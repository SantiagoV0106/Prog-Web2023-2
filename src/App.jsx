import React, { useState } from 'react'
import { Header, Button, Counter, Footer } from './components'

export function App () {
  const buttonContainerStyle = {
    margin: '10px auto'
  }

  const [contador, setContador] = useState(0)

  const add = () => {
    setContador(contador + 1)
  }

  const reset = () => {
    setContador(0)
  }

  const subtract = () => {
    setContador(contador > 0 ? contador - 1 : contador)
  }

  console.log(contador)

  return (
    <>
      <Header />
      <Counter value={contador} />
      <div style={buttonContainerStyle}>
        <Button onClick={subtract} label='-' />
        <Button onClick={reset} label='Reset' />
        <Button onClick={add} label='+' />
      </div>
      <Footer />

    </>

  )
}
