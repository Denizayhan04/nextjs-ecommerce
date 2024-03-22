"use client"
import Button from '@/app/components/general/Button'
import Image from 'next/image'
import React, { useState } from 'react'
import Comment from '../utils/Comment'

interface DetailCardProps {
  id:string | undefined
}

const DetailCard:React.FC<DetailCardProps> = ({id}) => {
  const [productCount,setProductCount] = useState(1)
  const productcounter = (e : number)=>{
    if(productCount ==  1 && e == -1 ) return;

    if(productCount ==  40 && e == 1 ) {return;}

    setProductCount(productCount + e)


  }
  console.log(id)
  return (
    <div>
      <h3>Kategori</h3>
      
      <div className='pt-3 block lg:flex'>
       
        <div className=' box-border w-3/4   lg:w-[400px]  relative mr-8 bg-black'  style={{ aspectRatio:3/4 }}>
        <Image alt='product photo' fill src={""}/>
        </div>

        <div className=' flex-1 py-8 *:py-2'>
        <h2 className=' text-2xl font-bold' >isim </h2>
        <div>yıldız değerlendirme vs. Favorile KAlp</div>
        <div>seçenekler</div>

        <div className=' flex items-center '>
          <Button width={200}   text='sepete ekle' />
          <button onClick={()=>productcounter(-1)} className=' ml-4 w-10 border h-10 ' >-</button>
          <div className="w-10 border h-10  flex justify-center items-center">{productCount}</div>
          <button onClick={()=>productcounter(1)} className="w-10 border h-10 ">+</button>
        </div>

        <div className=' flex-1 md:w-3/4 max-w-[500px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia quod ratione iste sed ipsam nostrum quibusdam odit eaque laudantium, placeat repellat distinctio, fuga minus earum? Cumque tenetur porro consectetur a, sapiente nemo explicabo consequatur sed blanditiis nam facere nobis distinctio magnam numquam earum totam est odio sequi voluptatibus facilis recusandae nostrum eaque minima alias. Natus illo quam quod maxime, temporibus aut inventore ea sequi possimus quo esse voluptatum recusandae facilis totam officia, perferendis vel vero! Doloribus quos ullam nemo asperiores distinctio molestiae placeat quisquam deserunt quam reiciendis facere maiores ea assumenda eligendi ut atque, fuga quae aut repellendus dolores.</div>        

        </div>


      </div>
      <div className=' mt-6'>
        <div className='mb-4 p-2 min-h-24 bg-gray-200 relative'>
          <form>
          <textarea rows={5} className='resize-none w-full min-h-16 outline-none' />
          <div className='flex justify-between px-2 md:px-8'>
            <span>yıldız</span>
            <input type='submit' value="Send comment" className='bg-red-100 cursor-pointer' />
          </div>
          </form>

          
        </div>
        <Comment />
        <Comment />
        <Comment />
      </div>
      
      <div>
      </div>
    </div>
  )
}

export default DetailCard