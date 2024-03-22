"use client"
import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

interface InputProps{
  width:number 
  outline?:boolean
  placeholder?:string
  type:string
  id?:string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void // onChange prop'u eklendi
}
const Input:React.FC<InputProps> = ({width,outline,placeholder,type,id, onChange}) => {
  const [showPassword,setShowPassword] = useState(false)
  
  // input değeri değiştiğinde çağrılacak fonksiyon
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e); // onChange prop'u çağrılıyor
    }
  };

  return (
    <div className='w-fit h-fit relative' >
      <input
        id={id}
        type={(type==="password" && (!showPassword)) ? "password" : "text" }
        placeholder={placeholder}
        style={{width:width}}
        className={`h-12 relative outline-none rounded-lg p-3 ${outline ? "border border-orange-400 text-black" : "bg-orange-400 text-black" } `}
        onChange={handleInputChange} // onChange prop'u input elementine eklendi
      />
      {
        type==="password" && <div className=' absolute top-0' style={{right:-30 , top:12}}>
          {
            showPassword 
            ?
            <FaEye onClick={()=>setShowPassword(!showPassword)} className=' cursor-pointer' size={24} />
            :
            <FaEyeSlash onClick={()=>setShowPassword(!showPassword)} className=' cursor-pointer' size={24} />
          }
        </div>
      }
    </div>
  )
}

export default Input
