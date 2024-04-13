"use client"
import Button from '@/app/components/general/Button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Comment from '../utils/Comment'
import axios from 'axios'
import {  Product, Review, User } from '@prisma/client'

interface DetailCardProps {
  id:string | undefined
  currentUser:string | undefined 
}


const DetailCard:React.FC<DetailCardProps> = ({id , currentUser}) => {
  
  useEffect(()=>{
    axios.get(`/api/get/${id}`)
    .then((e)=>{
      setProduct(e.data)
    })

    axios.get(`/api/comment/${id}`)
    .then((e)=>{
      console.log("vasss",e)
      setProductsComments(e.data)
      
    })
    .catch((error)=>{console.log("errooor",error)})
    
  },[])
  const [comment,setComment] = useState({
    userId:currentUser ,
    productId:id,
    rating:4,
    comment:"",

  })
  console.log(currentUser)
  const [productsComments,setProductsComments] = useState([])

  const [productCount,setProductCount] = useState(1)
  const [product,setProduct] = useState<Product>()
  const productcounter = (e : number)=>{
    if(productCount ==  1 && e == -1 ) return;

    if(productCount ==  40 && e == 1 ) {return;}

    setProductCount(productCount + e)


  }

  const commentSubmit = (e:any)=>{
    if(!currentUser || currentUser == null){
      return
    }
    console.log("adsa",product,"asd")
    console.log(comment)
    axios.post("/api/comment/",comment)
    .then((e)=>{console.log(e)})
    .catch((err)=>{console.log("err",err)})

    e.preventDefault()

  }
  return (
    <div>
      <h3>{product?.category}</h3>
      
      <div className='pt-3 block lg:flex'>
       
        <div className=' box-border w-3/4   lg:w-[400px]  relative mr-8 bg-black'  style={{ aspectRatio:3/4 }}>
        {product?.image.map((e,i)=>(
        <Image alt='product photo' fill src={product.image[i]}/>
        ))}

        </div>

        <div className=' flex-1 py-8 *:py-2'>
        <h2 className=' text-2xl font-bold' >{product?.name} </h2>
        <div>yıldız değerlendirme vs. Favorile KAlp</div>
        <div>seçenekler</div>

        <div className=' flex items-center '>
          <Button width={200}   text='sepete ekle' />
          <button onClick={()=>productcounter(-1)} className=' ml-4 w-10 border h-10 ' >-</button>
          <div className="w-10 border h-10  flex justify-center items-center">{productCount}</div>
          <button onClick={()=>productcounter(1)} className="w-10 border h-10 ">+</button>
        </div>

        <div className=' flex-1 md:w-3/4 max-w-[500px] '>{product?.description}</div>        

        </div>


      </div>
      <div className=' mt-6'>
        <div className='mb-4 p-2 min-h-24 bg-gray-200 relative'>
          <form onSubmit={commentSubmit}>
          <textarea onChange={(e)=>{setComment(prevState=>({...prevState,comment:e.target.value}))}} rows={5} className='resize-none w-full min-h-16 outline-none' />
          <div className='flex justify-between px-2 md:px-8'>
            <span>yıldız</span>
            <input type='submit' value="Send comment" className='bg-red-100 cursor-pointer' />
          </div>
          </form>

          
        </div>
        {
          productsComments.map((e)=>(
            <Comment comment={e} />
          ))
        }

      </div>
      
      <div>
      </div>
    </div>
  )
}

export default DetailCard