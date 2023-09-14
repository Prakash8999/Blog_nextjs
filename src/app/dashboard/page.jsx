'use client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import useSWR from 'swr'



const Page = () => {
  const session = useSession()
  const router = useRouter()
//   const getBlogs = async () => {
//     try {
//       const res = await fetch( `/api/posts}`, {
//         method:"GET",
//         cache: "no-store",
//       });

// console.log(res);
//       if (!res.ok) {
//         throw new Error("Failed to fetch blogs");
//       }

//       return res.json();

//     } catch (error) {
//       console.log("Error loading blogs: ", error);
//     }
//   };
//   console.log(getBlogs());
  useEffect(() => {
  axios(`http://localhost:3000/api/posts`,{
    method:"GET"
  }).then((res)=>{
  console.log(res);
  }).catch((err)=>{
console.log(err);
  })
  }, [])

  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, error, isLoading } = useSWR()
  // console.log(data);


  const handleSubmit = async (e) => {
    e.preventDefault()
    let title = e.target[0].value
    const desc = e.target[1].value
    const image = e.target[2].value
    const content = e.target[3].value
    try {

      axios('/api/posts', {
        method: "PosT",
        data: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session.data.user.name

        })
      }).then((res)=>{
        console.log(res);
        e.target.reset()
      })
    } catch (error) {
      console.log(error);
    }
    console.log(title, desc, image, content);

  }


  if (session.status === 'loading') {
    return <p>Loading...</p>
  }
  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login')





  }
  if (session.status === 'authenticated') {
    return <div className=''>


      <div className='flex flex-col justify-center items-center '>
        <form className=' ' onSubmit={handleSubmit} >

          <h1 className='text-center'>Add New Post</h1>


          <div className="mb-2">
            <label
              htmlFor="name"
              className="block  text-sm font-medium mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
              placeholder="Enter Title"
              required
            />

          </div>


          <div className="mb-2">
            <label
              htmlFor="Desc"
              className="block  text-sm font-medium mb-1"
            >
              Description
            </label>
            <input
              type="text"
              id="desc"
              className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
              placeholder="Enter your Description"

              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="image"
              className="block  text-sm font-medium mb-1"
            >
              Image
            </label>
            <input
              type="text"
              id="text"
              className="border border-gray-300 rounded-lg py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
              placeholder="Enter the url"

              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="content"
              className="block  text-sm font-medium mb-1"
            >
              Content
            </label>
            <textarea name="" id="" cols="30" rows="10" placeholder='Enter the content'></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 mt-6 text-white font-semibold py-2 px-4 rounded-lg w-full transition-colors duration-300 "
          >
            Post
          </button>

        </form>
      </div>



    </div>

  }

}

export default Page