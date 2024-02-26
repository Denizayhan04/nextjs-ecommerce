"use client"
import React, { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";

const CategorySelector = () => {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <>
    
    {
    isOpen
    ?
    <div>
    <div onClick={()=>setIsOpen(!isOpen)} className='  h-8 flex justify-between px-3 items-center cursor-pointer '>
        <span>CategoryName</span>
        <span className=' rotate-180'><IoIosArrowUp size={28} /></span>
    </div>
    <div className='flex flex-col '>
      
      <label className='flex items-center'>
      <input type="checkbox" style={{width:20, height:20}}  />
      <span className='ml-1'>Özellik ismi</span>
      </label>

    </div>
    </div>


    :
    <div onClick={()=>setIsOpen(!isOpen)} className='  h-8 flex justify-between px-3 items-center cursor-pointer '>
        <span>CategoryName</span>
        <span><IoIosArrowUp size={28} /></span>
    </div>
    }

    
    </>
  )
}

export default CategorySelector