"use client"
import React from 'react'
import Logo from './Logo'
import HamburgerMenu from './HamburgerMenu'
import User from './User'
import Search from './Search'
import Basket from './Basket'


const Navbar = () => {

  return (
    <div className='w-full bg-orange-400 h-20 flex items-center justify-between px-4'>
      <Logo />
      <Search />
      <div className='flex gap-4'>
        <User />
        <HamburgerMenu />
        <Basket />
      </div>

    </div>
  )
}

export default Navbar