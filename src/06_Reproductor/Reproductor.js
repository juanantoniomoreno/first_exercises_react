import React from 'react'
import { Header } from './components/Header'
import { List } from './components/List'
import { Foto } from './components/Foto'
import { Listener } from './components/Listener'
import './reproductor.css'

export const Reproductor = () => {
  return (
    <div className='reproductor d-flex flex-column align-items-center justify-content-center'>
      <Header/>
      <div className='d-flex justify-content-center mt-5'>
        <List/>
        <Foto/>
      </div>
      <Listener/>
    </div>
  )
}
