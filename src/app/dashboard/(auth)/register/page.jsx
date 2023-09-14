'use client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
const router = useRouter()
const session = useSession()

  if(session.status==='loading'){
    return <p>Loading...</p>
  }
  if(session.status==='authenticated'){
    router?.push('/dashboard')

  }


  const handleSubmit = (e) =>{
    e.preventDefault()
    // const username = e.target[0].value
    const name = e.target[0].value
    const email = e.target[1].value
    const  password = e.target[2].value
    console.log(password);

axios('/api/auth/register',{
method:"Post",
data:  { name:name, email:email, password:password},
headers:{
  "Content-Type" : "application/json"
}


}).then((res)=>{
  console.log(res.data);
  console.log("then");
 
if(res.status==201) return router.push('/dashboard/login' , alert(res?.data?.message))



 }).catch((err)=>{
console.log(err);
alert(err?.response?.data?.message)
})

  }
  return (
    <>
<div className='flex flex-col justify-center items-center h-[80vh] overflow-y-hidden'>
      <form className=' ' onSubmit={ handleSubmit}>



{/* 
          <div className="mb-2">
            <label
              htmlFor="firstname"
              className="block text-gray-700 text-sm font-medium mb-1"
              >
              USername
            </label>
            <input
              type="text"
              id="username"
              className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
              placeholder="Enter your Username"
              
              required
              />
          </div> */}
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="Name"
              className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
              placeholder="Enter your Name"
              required
              />

          </div>
  

        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-medium mb-1"
            >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
            placeholder="Enter your email"
            
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-medium mb-1"
            >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
            placeholder="Enter your password"
            
            required
            />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 mt-6 text-white font-semibold py-2 px-4 rounded-lg w-full transition-colors duration-300 "
          >
          Sign up
        </button>
      </form>
          </div>

    </>
  )
}

export default page