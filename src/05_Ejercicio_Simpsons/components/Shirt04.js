import React from 'react'
import shirt4 from '../images/camis4.jpg'

export const Shirt04 = () => {
  return (
    <div className='col'>
        <div className='card border border-2 border-dark shadow-sm p-3'>
          <p className='card-text text-center'>Camiseta</p>
          <img src={shirt4} className="card-img-top" alt="camiseta 1"/>
          <div class="card-body">
            <p class="card-text text-center">Pvp: 15 €</p>
          </div>
        </div>
    </div>
  )
}
