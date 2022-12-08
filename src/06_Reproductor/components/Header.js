import React from 'react'

const band = {
  name: 'The Black Keys',
  disc: 'The Camino'
}

export const Header = () => {

  return (
    <div>
        <h1>Reproductor audio</h1>    
        <hr></hr>
        <h3 className='text-center'>Banda: {band.name} </h3>
        <h3 className='text-center'>Disco: {band.disc} </h3>
    </div>
  )
}
