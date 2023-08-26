import React from 'react'

export function Header () {
  const headerStyle = {
    color: 'rgba(0, 190, 128, 1)',
    fontSize: '3rem'
  }

  return (
    <header>
      <h1 style={headerStyle}>Counter App</h1>
    </header>
  )
}
