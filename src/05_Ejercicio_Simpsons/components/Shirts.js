import React from 'react'
import { Shirt01 } from './Shirt01'
import { Shirt02 } from './Shirt02'
import { Shirt03 } from './Shirt03'
import { Shirt04 } from './Shirt04'

export const Shirts = () => {
  return (
    <div className='mt-4 row row-cols-4 g-5 ms-5 me-5'>
        <Shirt01/>
        <Shirt02/>
        <Shirt03/>
        <Shirt04/>
    </div>
  )
}
