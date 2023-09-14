import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
	<>
	
	<div className='flex gap-x-9 fixed bottom-0 px-24 justify-between w-full' >


<div className='flex gap-x-5'>
<p>@2023 all rights reserved</p>
<p>Fb</p>
<p>Insta</p>
<p>Yt</p>
<p>Gh</p>
		

</div>
<div>
	<Image src='/1.jpg' width={20} height={20} alt='Blogger'/>
</div>
	</div>
	</>
  )
}

export default Footer