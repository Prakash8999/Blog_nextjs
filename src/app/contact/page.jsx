import Image from 'next/image'
import React from 'react'



//static meta data
export const metadata = {
  title: 'Blogger contact page',
  description: 'Blogger ',
}
const Contact = () => {
  
  return (
<>
<h1 className='text-center text-5xl font-semibold mt-10'>Let's keep in  touch</h1>
<div className='flex gap-x-28 justify-center items-center'>

<div>
<Image src={'https://cdn.pixabay.com/photo/2016/05/31/10/52/contact-us-1426589_1280.png'} width={450} height={450} className=' animate-bounce'  style={{animation: 'move 3s infinite ease alternate'}}/>

</div>

<div className='flex flex-col gap-y-6'>
<input placeholder='name' className='bg-transparent border rounded-md py-2 pl-1 border-white'/>
<input placeholder='email' className='bg-transparent border rounded-md py-2 pl-1 border-white'/>
<input placeholder='message' className='bg-transparent border rounded-md py-2 pl-1 border-white h-44 placeholder:text-start ' style={{textAlign:'top'}}/>
<button  className='bg-green-500 py-1.5 px-5 w-fit rounded-md  '>Send</button>

</div>

</div>
</>
  )
}

export default Contact