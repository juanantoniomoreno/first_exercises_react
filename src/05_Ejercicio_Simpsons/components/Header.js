import React from 'react'
import logo from '../images/logo.svg'

export const Header = () => {
  return (
    <header className='bg-secondary d-flex justify-content-center'>
        <img className='w-50' src= { logo } alt='logo' ></img>
    </header>
  )
}
