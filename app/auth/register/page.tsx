"use client"
import Input from '@/app/components/general/Input'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Router } from 'next/router'
import React, { ChangeEvent, useState } from 'react'
import { User } from "@prisma/client"

interface RegisterClientProps{
  currentUser: User | null | undefined
}
const page:React.FC<RegisterClientProps> = ({currentUser}) => {
  const router= useRouter()
  const [formData, setFormData] = useState({
    name:'',
    surname:'',
    email:'',
    password: '',
    rePassword:'',
    gender:0,
    checbox:false
  });

  const handleSubmit = (e:any) => {
    if((formData.password != formData.rePassword)){
      alert(formData.password +" " +formData.rePassword)
      return
    }

    axios.post("/api/register",{
      name:formData.name,
      surName:formData.surname,
      email:formData.email,
      password:formData.password,
      gender:formData.gender
    })
    .then(() => {
      signIn('credentials', {
          email: formData.email,
          password: formData.password,
          redirect: false
      }).then((callback) => {
          if(callback?.ok){
              router.push('/')
              router.refresh();
          }

          if(callback?.error){
              console.error(callback.error)
          }
      })
  })


  e.preventDefault()
  };

  // Input değerlerini güncelleyen fonksiyon
  const handleInputChange = (fieldName:string,e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    console.log(formData)
    setFormData(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
    
  };

  const checboxFunc = ()=>{
    setFormData((prevState)=>({
      ...prevState,
      checbox:!(prevState.checbox)
    }))
  }

  const selectFunc = (e: any) => {
    const genderValue = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      gender: parseInt(genderValue)
    }));
    console.log(genderValue); // Güncel değeri doğrudan konsola yazdırın
  };
  
  

  
  return (
    <div className='flex flex-1 justify-center items-center'>
      <div className='w-[500px] h-[600px] border p-2'>
        <form className='' onSubmit={handleSubmit}>
          <div className='flex justify-center gap-2 pt-6'>
            <Input id='name' type='text' placeholder='Adınız' width={196} outline onChange={(e)=>handleInputChange("name",e)} />
            <Input id='surname' type='text' placeholder='Soyadınz' width={196} outline onChange={(e)=>handleInputChange("surname",e)} />
          </div>
          <div className=' flex flex-col items-center gap-2 pt-6'>
            <Input id='email' type='email' placeholder='email' width={400} outline onChange={(e)=>handleInputChange("email",e)} />
            <Input id='password' type='password' placeholder='password' width={400} outline onChange={(e)=>handleInputChange("password",e)} />
            <Input id='repassword' type='password' placeholder='password again' width={400} outline onChange={(e)=>handleInputChange("rePassword",e)} />
            <select value={formData.gender} onChange={(e)=>selectFunc(e)} className='w-[400px] h-12 text-lg mt-2'>
              <option value={0} >Cinsiyet (isteğe bağlı)</option>
              <option value={1}>Kadın</option>
              <option value={2}>Erkek</option>
            </select>
            <div className='mt-4 text-left w-[400px]'>
              <div className='flex'>
                  <div className=' flex h-[24px]'>
                    <input className=' h-full' type='checkbox' onChange={checboxFunc} />
                    <span>asdasd</span>
                  </div>
              </div>
            </div>
          </div>
          <div className='  mt-8  flex justify-center items-center flex-col'>
            <input type='submit' className={`rounded-lg p-3 bg-orange-400 text-white w-[400px]`} />
            <div><Link href='/auth/login'>giriş yap</Link></div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page 

