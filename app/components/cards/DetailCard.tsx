"use client"
import Button from '@/app/general/Button'
import Image from 'next/image'
import React, { useState } from 'react'

interface DetailCardProps {
  id:string | undefined
}

const DetailCard:React.FC<DetailCardProps> = ({id}) => {
  const [productCount,setProductCount] = useState(1)
  const productcounter = (e : number)=>{
    if(productCount ==  1 && e == -1 ) return;

    if(productCount ==  40 && e == 1 ) {alert("dur");return;}

    setProductCount(productCount + e)


  }
  return (
    <div>
      <h3>Kategori</h3>
      
      <div className='pt-3 flex'>
        <div className=' relative w-[200px] h-[300px] md:w-[400px] md:h-[600px] mr-8  bg-black'>
        <Image alt='product photo' fill src={""}/>
        </div>
        <div className=' py-8 *:py-2'>
        <h2 className=' text-2xl font-bold' >isim </h2>
        <div>yıldız değerlendirme vs. Favorile KAlp</div>
        <div className=' flex items-center '>
          <Button width={200}   text='sepete ekle' />
          <button onClick={()=>productcounter(-1)} className=' ml-4 w-10 border h-10 ' >-</button>
          <div className="w-10 border h-10  flex justify-center items-center">{productCount}</div>
          <button onClick={()=>productcounter(1)} className="w-10 border h-10 ">+</button>
        </div>
        

        </div>
      </div>
      
      <div>
      </div>
    </div>
  )
}

export default DetailCard