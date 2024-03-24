import { getCurrentUser } from '@/app/actions/getCurrentUser'
import LoginComponent from '@/app/components/auth/login/LoginComponent'
import React from 'react'

const page = async() => {
  const currentUser =await getCurrentUser()
  return (
    <LoginComponent currentUser={currentUser} />
  )
}

export default page