import React from 'react'
import muse from '../../images/muse.jpg'

export const Card1 = () => {
  return (
    <div className='card'>
        <h2>Card1</h2>
        <p>Group: Muse</p>
        <p>Date: 24 jul</p>
        <p>City: Barcelona</p>
        <p>Place: Sala Bart</p>
        <img src={ muse } alt='muse'/>
        <button>Learn More</button>
    </div>
  )
}
