import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";


const Comment = () => {
  return (
    <div className='mb-4 min-h-36 p-2 flex flex-col justify-between gap-2 border-2 border-slate-200'>
      
      <div className='flex justify-between'>
        <div>Yıldız sayısı</div>
        <div>Yüklenme tarihi</div>
      </div>
      
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni a dicta accusantium nostrum error voluptas at aliquam possimus recusandae corporis.
      </div>

        <div className='flex justify-between '>
        
          <div>
            İsim soyisim anonim
          </div>
        
          <div className=' flex'>
            <AiOutlineLike className=" cursor-pointer" size={24} /> Like sayısı
          </div>
       
        </div>


    </div>
  )
}

export default Comment