import React from 'react'
import Logo from './Logo'
import Input from '@/app/general/Input'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
  return (
    <div className='w-full bg-orange-400 h-16 flex items-center justify-between px-4'>
      <Logo />
      <Input />
      <div>
        <HamburgerMenu />
      </div>

    </div>
  )
}

export default Navbar