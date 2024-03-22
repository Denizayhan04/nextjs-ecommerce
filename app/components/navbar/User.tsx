import Link from 'next/link';
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";


const User = () => {
  const [isUserOpen,setIsUserOpen] = useState(false);
  const userItemList = [
    {
      name:"Giriş yap",
      url:"/auth/login"
    },
    {
      name:"Üye ol",
      url:"/auth/register"
    }
  ]
  return (
    <div className=' cursor-pointer relative'>
        <FaUser onClick={()=>setIsUserOpen(!isUserOpen)} size="24" />
        {
          isUserOpen && 
          <div className='absolute right-0 top-8 w-24 bg-white z-10'>
            <ul className='flex flex-col w-24'>
              {userItemList.map((e,i)=>(
                <Link href={e.url} key={i} className=' m-2'>
                  {e.name}
                </Link>
              ))}
            </ul>
          </div>
        }
    </div>
  )
}

export default User