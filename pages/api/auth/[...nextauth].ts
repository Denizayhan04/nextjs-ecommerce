import NextAuth from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import prisma from "@/libs/prismadb"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt  from "bcrypt"


export default NextAuth({
  adapter:PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "email", type: "email", placeholder: "jsmith" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials, req) {
        if(!credentials?.email || !credentials?.password){
          throw new Error("Hatalı giriş")
        }
        const user = await prisma.user.findUnique({
          where:{
            email:credentials.email
          }
        })
        if(!user || !user.hashedPassword){
          throw new Error("Geçersiz")
        }
        const comparePassword = await bcrypt.compare(credentials.password,user.hashedPassword)
        if(!comparePassword){
          throw new Error("yanlis parola")
        }
        return user
    }
  })
  ],
  pages:{
    signIn:"/auth/login"
  },
  debug:process.env.NODE_ENV==="development",
  session:{
    strategy:"jwt"
  },
  secret:process.env.NEXTAUTH_SECRET
})