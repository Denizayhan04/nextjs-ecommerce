"use client"
import React from 'react'
import Image from 'next/image'
import Button from '@/app/components/general/Button'
import { FaStar } from "react-icons/fa";

const ProductCard = () => {

  return (
<div className='h-[450px] w-[250px]'>
  <div className='w-[250px] h-[300px] relative'>
    <Image 
        alt='Ürün foto'  
        fill
        src="" 
        />
    </div>
    <div className='bg-gray-100 flex-1 flex flex-col justify-evenly '>
        <h3>Kategori</h3>
        <div>İsim </div>
        <div className='flex gap-2'><FaStar color='yellow' size={25} /> (yorum) yıldız</div>
        <div> fiyat </div>
        <div className='flex justify-center'><Button width={200} text='Sepete ekle' outline /> </div>
    </div>
</div>
  )
}

export default ProductCard