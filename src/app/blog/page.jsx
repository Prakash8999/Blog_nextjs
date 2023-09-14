import React from 'react'




const page = async() => {
  async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
      cache:'no-store'
    }
    )
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

  const blog = await getData()


// async function generateMetadeta({params}){ dyanamic meta data use generateMetaData

//   return {
//     title
//   }
// }

  return (
    
	<>
  <div className='flex flex-col gap-y-7'>

  {
    blog?.map((value)=>{
return <div key={value?.id} className=''>
  <div>

<p>{value?.title}</p>
<div>
  {value?.body}
</div>
  </div>
</div>
    })
  }
      </div>
  </>
  )
}

export default page