import React from 'react'
import './counter.css'

export function Counter ({ value }) {
  return (
    <>
      <div className='counter-container'>
        <h2>{value}</h2>
      </div>
    </>
  )
}
