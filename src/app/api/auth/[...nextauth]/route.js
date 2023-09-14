import User from "@/models/userModel"
import { connectDb } from "@/utils/db"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GooogleProvider from "next-auth/providers/google"
import bcrypt from 'bcrypt'
 const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GooogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id:"credentials",
      name:"Credentials",

async authorize(credentials) {
await connectDb()

try {
  const user = await User.findOne({email:credentials.email})
  if(user){
const isMatch = await bcrypt.compare(
  credentials.password,
  user.password
)

if(isMatch) {
  return user;
}
else  {
  console.log('wrong credentials');
}

  }
  else{
    console.log('User not found');
  }

} catch (error) {
  console.log(error.messsage);
}

} 

    })
  ],
  pages:{
    error:'/dashboard/login'
  }
})

export {handler as GET, handler as POST}