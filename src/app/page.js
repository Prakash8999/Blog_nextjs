'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
  const session = useSession()
  console.log(session);
  
  return (
    <>
    <div className='flex justify-center items-center pt-32 gap-x-14'>
<div className='flex flex-col gap-y-5'>
<p className='text-4xl w-80 ont-extrabold text-transparent py-1 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Write your ideas into a blog with image.</p>
<p>Turn your ideas into reality </p>
<button className='bg-green-500 py-1.5 px-3 w-fit rounded-md'>Learn More</button>
</div>
<Image  src={'https://cdn.pixabay.com/photo/2020/04/03/06/35/work-4997565_1280.png'} width={300} height={300}/>
    </div>
    </>
  )
}
