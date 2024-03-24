"use client"
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react'
import { FaUser } from "react-icons/fa";

interface UserProps{
  currentUser: User | null | undefined
}
const UserPage:React.FC<UserProps> = ({currentUser}) => {
  const router = useRouter()
  const [isUserOpen,setIsUserOpen] = useState(false);
  console.log(currentUser)

  const logOutFunc = ()=>{
    setIsUserOpen(false)
    signOut()
    router.push("/")
  }
  return (
    <div className=' cursor-pointer relative'>
        <FaUser onClick={()=>setIsUserOpen(!isUserOpen)} size={36} />

          {
            isUserOpen && 
            <div className='absolute right-0 top-8 w-24 bg-white z-10'>
                { currentUser ?
            <ul className='flex flex-col w-24'>
                  <Link href="/">Ana sayfa</Link>
                  <Link href="/profile">Profil</Link>
                  <li onClick={()=>logOutFunc()}>Log out</li>
              
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