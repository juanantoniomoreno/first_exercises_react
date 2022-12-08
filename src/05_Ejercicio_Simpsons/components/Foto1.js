import React from 'react'
import foto1 from '../images/foto1.jpg'

export const Foto1 = () => {
  return (
    <div className='col'>
        <div className='card border border-2 border-dark p-3 shadow'>
          <p className='card-text text-center'>Imagen 3</p>
          <img src={foto1} className="card-img-top" alt="camiseta 1"/>
          <div class="card-body pb-0 pt-1">
            <p class="card-text text-center mb-0 ">50 x 75</p>
            <p class="card-text text-center">Pvp: 15.00 €</p>
          </div>
        </div>
    </div>
  )
}
