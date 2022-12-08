import React from 'react'
import { Header } from './components/Header'
import { Shirts } from './components/Shirts'
import { Fotos } from './components/Fotos'
import './simpsons.css'

export const Simpsons = () => {
  return (
    <div>
        <Header/>
        <Shirts/>
        <Fotos/>
    </div>
  )
}
