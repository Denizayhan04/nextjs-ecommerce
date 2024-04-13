"use client"
import React from 'react'
import Image from 'next/image'
import Button from '@/app/components/general/Button'
import { FaStar } from "react-icons/fa";
import Link from 'next/link';
interface ProductCardProps {
  id:string
  name:string
  description:string
  brand?:string
  category:string
  image:string[]
  inStock?:boolean
  price:number
} 

 const ProductCard:React.FC<ProductCardProps> = ({id,name , description , image , price , inStock , category , brand}) => {
  if(!id){
    return(<div>ürün yok</div>)
  }

  const addBasket = ()=>{
    
  }


  return (
<div className='h-[450px] w-[250px]'>
  <Link href={`/product/${id}`} className=' block w-[250px] h-[300px] relative'>
    <Image 
        alt='Ürün foto'  
        fill
        src={image[0]} 
        />
    </Link>

    <div className='bg-gray-100 flex-1 flex flex-col justify-evenly '>
        <h3>{name}</h3>
        <div>{category}</div>
        <div className='flex gap-2'><FaStar color='yellow' size={25} /> (yorum) yıldız</div>
        <div> {price}$</div>
        <div className='flex justify-center'><Button onclick={addBasket} width={200} text='Sepete ekle' outline /></div>
    </div>
</div>
  )
}

export default ProductCard