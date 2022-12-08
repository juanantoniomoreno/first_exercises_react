import React from 'react'
import strokes from '../../images/thestrokes.jpg'

export const Card3 = () => {
  return (
    <div className='card'>
        <h2>Card3</h2>
        <p>Group: Strokes</p>
        <p>Date: 30 ago</p>
        <p>City: Madrid</p>
        <p>Place: Sala Riviera</p>
        <img src={ strokes } alt='muse'/>
        <button>Learn More</button>
    </div>
  )
}
