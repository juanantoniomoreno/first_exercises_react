import React from 'react'
import { Card1 } from './cards/Card1'
import { Card2 } from './cards/Card2'
import { Card3 } from './cards/Card3'
import './main.css'

export const Main = () => {
  return (
    <div className='main'>
        <div className='cardsH1'>
            <h1>Próximos conciertos</h1>
            <div className='cards'>
                <Card1/>
                <Card2/>
                <Card3/>
            </div>
        </div>
    </div>
  )
}
