import React from 'react'
import { ButtomCustom } from './ButtomCustom'

export const FormGalaxy = () => {
  return (
    <div>
      <form className='formGalaxy d-flex flex-column align-items-center border  border-2 border-white rounded rounded-4 p-4'>
        <label>Nombre</label>
        <input className='form-control' placeholder='nombre'/>
        <label>Distancia</label>
        <input className='form-control' placeholder='distancia'/>
        <label>Tamaño</label>
        <input className='form-control mb-4' placeholder='tamaño'/>
        <ButtomCustom/>
      </form>
        
    </div>
  )
}
