"use client"
import { User } from '@prisma/client';
import Link from 'next/link';
import React, { FC, useState } from 'react'
import { FaUser } from "react-icons/fa";

interface UserProps{
  currentUser: User | null | undefined
}
const UserPage:React.FC<UserProps> = ({currentUser}) => {
  const [isUserOpen,setIsUserOpen] = useState(false);
  console.log(currentUser)

  return (
    <div className=' cursor-pointer relative'>
        <FaUser onClick={()=>setIsUserOpen(!isUserOpen)} size="24" />
        <span>{currentUser?.name}</span>

          {
            isUserOpen && 

            <div className='absolute right-0 top-8 w-24 bg-white z-10'>
                { currentUser ?
            <ul className='flex flex-col w-24'>
                  <li>asdad</li>
                  <li>asdad</li>
                  <li>asdad</li>
              
              </ul>
              :
              <ul className='flex flex-col w-24'>
                  <Link href="/auth/login">login</Link>
                  <Link href="/auth/register">register</Link>

              </ul>
                }
              </div>
          }
            
    </div>
  )
          
}

export default UserPage