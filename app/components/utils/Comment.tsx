import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

interface commentProps {comment:any}
const Comment:React.FC<commentProps> = ({comment}) => {
  return (
    <div className='mb-4 min-h-24 p-2 flex flex-col justify-between gap-2 border-2 border-slate-200'>
      
      <div className='flex justify-between'>
        <div>{comment.rating}</div>
        <div>Yüklenme tarihi</div>
      </div>
      
      <div>
        {comment.comment}
      </div>

        <div className='flex justify-between '>
        
          <div>
            {comment.userName}
          </div>
        
          <div className=' flex'>
            <AiOutlineLike className=" cursor-pointer" size={24} /> Like sayısı
          </div>
       
        </div>


    </div>
  )
}

export default Comment