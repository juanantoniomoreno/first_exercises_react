import React from 'react'
import foto2 from '../images/foto2.jpg'

export const Foto2 = () => {
  return (
    <div className='col'>
        <div className='card border border-2 border-dark shadow p-3'>
          <p className='card-text text-center'>Imagen</p>
          <img src={foto2} className="card-img-top" alt="camiseta 1"/>
          <div class="card-body pb-0 pt-1">
            <p class="card-text text-center mb-0">50 x 75</p>
            <p class="card-text text-center">Pvp: 15.00 €</p>
          </div>
        </div>
    </div>
  )
}
