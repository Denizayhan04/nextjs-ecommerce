import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import HamburgerMenu from './HamburgerMenu'
import User from './User'
import Search from './Search'
import Basket from './Basket'
import { getCurrentUser } from '@/app/actions/getCurrentUser'

const Navbar =async () => {
  const currentUser = await getCurrentUser();
  return (
    <div className='w-full bg-orange-400 h-20 flex items-center justify-between px-4'>
      <Logo />
      <Search />
      <div className='flex gap-4'>
        <User currentUser={currentUser} />
        <HamburgerMenu />
        <Basket />
      </div>
    </div>
  );
};

export default Navbar;
