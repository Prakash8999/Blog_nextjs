'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const session = useSession()
  const router = useRouter()
  if(session.status==='loading'){
    return <p>Loading...</p>
  }
  if(session.status==='authenticated'){
    router?.push('/dashboard')

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password= e.target[1].value
    signIn('credentials', {email, password})

  }
  return (
    <>
      <h1>Signin with google</h1>
      <div className='flex flex-col justify-center items-center h-[80vh] overflow-y-hidden'>
        <form className=' ' onSubmit={handleSubmit}>



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
            Sign In
                      </button>

          <button onClick={() => {
            signIn('google')
          }}>
            Sign in with google

          </button>
        </form>
      </div>



    </>
  )
}

export default page