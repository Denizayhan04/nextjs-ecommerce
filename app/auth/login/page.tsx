"use client"
import Input from '@/app/components/general/Input'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useState } from 'react'

const Page = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Form submit olduğunda çalışacak fonksiyon
  const handleSubmit = (e:any) => {
    signIn("credentials",{
      email:formData.email,
      password:formData.password,
      redirect:false
    })
    .then(()=>{
      signIn("credentials",{
        email:formData.email,
        password:formData.password,
        redirect:false
      })
      .then((callback)=>{
        if(callback?.ok){
          router.push("/")
          router.refresh()
        }
        if(!callback?.error){
          console.log(callback?.error)
        }
      })
  })

  };

  // Input değerlerini güncelleyen fonksiyon
  const handleInputChange = (fieldName:string,e:ChangeEvent<HTMLInputElement>) => {
    console.log(e.target)
    const { value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
    
  };

  return (
    <div className='flex flex-1 justify-center items-center'>
      <div className='w-[500px] h-[400px] border p-2'>
        <form className='w-full h-[250px]' onSubmit={handleSubmit}>
          <div className='flex justify-start gap-4 items-center flex-col w-full h-full'>
            <div>
              <span>E posta</span>
              <Input id="emailInput" type='email' placeholder='e posta' width={400} outline onChange={(e)=>handleInputChange("email",e)} />
            </div>
            <div className='flex-col'>
              <span>Şifre girin</span>
              <Input id='passwordInput' type='password' placeholder='şifre' width={400} outline onChange={(e)=>handleInputChange("password",e)} />
              <span>Şifremi unuttum</span>
            </div>

            <input type='submit' className={`rounded-lg p-3 w-[400px] bg-orange-400 text-white`} />
          </div>
        </form>
        <div className='h-[100px] w-full p-2 mt-4 flex flex-col items-center '>
          <div className=' w-[400px] h-[80px] flex justify-between'>
            <span>Google ile gir</span>
            <span>facebook ile gir</span>
          </div>
          <div className=' mt-3'>
            <Link href='/auth/register'>kayıt ol</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
