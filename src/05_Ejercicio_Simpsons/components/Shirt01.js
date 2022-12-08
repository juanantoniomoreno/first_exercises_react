import React from 'react'
import shirt1 from '../images/camis1.jpg'

export const Shirt01 = () => {
  return (
    <div className='col'>
        <div className='card border border-2 border-dark shadow-sm p-3'>
          <p className='card-text text-center'>Camiseta</p>
          <img src={shirt1} className="card-img-top" alt="camiseta 1"/>
          <div class="card-body">
            <p class="card-text text-center">Pvp: 15 €</p>
          </div>
        </div>
    </div>
  )
}
