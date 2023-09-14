import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
	<>
  <div>
    <div className='flex justify-center pt-7'>

    <Image src={'https://cdn.pixabay.com/photo/2015/08/03/10/25/banner-873105_1280.jpg'} width={1000} height={300}/>
    </div>
    <div className='flex justify-center gap-x-56 pt-7'>
      <div>
<h1 className='text-2xl font-semibold'>Who we are</h1>
<p> 
  idk
</p>
      </div>
      <div>
      <h1 className='text-2xl font-semibold'>What we do</h1>
<p> 
  idk
</p>
<Link href={'/contact'} className='bg-green-500 py-1.5 px-3 w-fit rounded-md mt-2'>Contact</Link>
      </div>
    </div>
  </div>
  
  </>
  )
}

export default page