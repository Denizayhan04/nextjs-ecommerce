"use client"
import AdminSideBar from '@/app/components/admin/AdminSideBar'
import React, { useEffect } from 'react'

const page = () => {
    useEffect(()=>{
        

    },[])

    return (
        <div className='flex-1 flex'>
            <AdminSideBar />
            <div className='flex flex-1'>
                <div className='flex justify-between w-full'>
                    <div className=' h-[500px] w-[300px] bg-black'>

                    </div>
                    <div className=' h-[500px] w-[300px] bg-black'>

                    </div>
                    <div className=' h-[500px] w-[300px] bg-black'>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default page