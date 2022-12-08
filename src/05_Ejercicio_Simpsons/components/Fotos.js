import React from 'react'
import { Foto1 } from './Foto1'
import { Foto2 } from './Foto2'
import { Foto3 } from './Foto3'

export const Fotos = () => {
  return (
    <div className='mt-4 row row-cols-3 g-2 ms-5 me-5 mb-4'>
        <Foto1/>
        <Foto2/>
        <Foto3/>
    </div>
  )
}
