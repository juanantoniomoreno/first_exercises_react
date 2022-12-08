import React from 'react'
import { ButtomCustom } from './components/ButtomCustom'
import { CompHijo } from './components/CompHijo'
import { FormGalaxy } from './components/FormGalaxy'
import './compPadre.css'

export const CompPadre = () => {
  return (
    <div className='contfuncComp'>
        <div className='imagenGalaxia'>
            <CompHijo/>
            <ButtomCustom/>
        </div>
        <div className='form-galaxia d-flex justify-content-center align-items-center ms-5'>
            <FormGalaxy/>
        </div>
    </div>
  )
}
