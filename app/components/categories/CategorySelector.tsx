
import React from 'react'
import { IoIosArrowUp } from "react-icons/io";

const CategorySelector = () => {
    const a = true;
  return (
    <>
    {
    a 
    ?
    <div className='  h-8 flex justify-between px-3 items-center cursor-pointer '>
        <span>CategoryName</span>
        <IoIosArrowUp size={28} />
    </div>
    :
    <div>
asd
    </div>
    }

    
    </>
  )
}

export default CategorySelector