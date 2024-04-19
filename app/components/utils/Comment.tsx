import { Rating, Typography } from '@mui/material';
import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

interface commentProps {comment:any}
const Comment:React.FC<commentProps> = ({comment}) => {
  const date = new Date(comment.createdAt)
  console.log(date)

  return (
    <div className='mb-4 min-h-24 p-2 flex flex-col justify-between gap-2 border-2 border-slate-200'>
      
      <div className='flex justify-between'>
        <div>{comment.userName}</div>
        <div>{date.toLocaleDateString()}</div>
      </div>
      
      <div>
      </div>

        <div className='flex justify-between '>
        
          <div className=' flex-1'>
            {comment.comment}
          </div>
        
          <div className=' flex'>
          <div>
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={comment.rating} readOnly />
        </div>
          </div>
       
        </div>


    </div>
  )
}

export default Comment