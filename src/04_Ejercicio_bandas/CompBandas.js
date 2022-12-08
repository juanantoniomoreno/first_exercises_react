import React from 'react'
import './compBandas.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';

export const CompBandas = () => {
  return (
    <div className='contPcpal'>
        <Header/>

        <Main/>

        <Footer/>
    </div>
  )
}
