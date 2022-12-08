import React from 'react'
import foto3 from '../images/fondo3.jpg'

export const Foto3 = () => {
  return (
    <div className='col-3'>
        <div className='card border border-2 border-dark shadow p-3'>
          <p className='card-text text-center'>Imagen</p>
          <img src={foto3} className="card-img-top" alt="camiseta 1"/>
          <div class="card-body pb-0 pt-1">
            <p class="card-text text-center mb-0">50 x 75</p>
            <p class="card-text text-center">Pvp: 15.00 €</p>
          </div>
        </div>
    </div>
  )
}
