import React from 'react'
import killers from '../../images/thekillers.jpeg'

export const Card2 = () => {
  return (
    <div className='card'>
        <h2>Card2</h2>
        <p>Group: The Killers</p>
        <p>Date: 12 ago</p>
        <p>City: Málaga</p>
        <p>Place: Cochera Cabare</p>
        <img src={ killers } alt='killers'/>
        <button>Learn More</button>
    </div>
  )
}
