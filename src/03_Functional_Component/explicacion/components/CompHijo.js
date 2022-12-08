import React from 'react'
import galaxy from '../images/galaxy.jpg';
import './comphijo.css';

export const CompHijo = () => {
  return (
    <div  className='contCompHijo'>
        <h2>Componente Hijo</h2>
        {/* <img src='/images/galaxy.jpg' alt='foto galaxia'></img> */}
        <img src= { galaxy } alt = 'galaxia' />
        <p>Galaxia remota</p>
    </div>
  )
}
