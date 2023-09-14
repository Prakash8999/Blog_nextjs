'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
	const session = useSession()
	const routes = [
		{
			id: 1,
			title: "Home",
			route: '/'
		},


		

	
		{
			id: 2,
			title: "Dashboard",
			route: '/dashboard'
		},






	]
	return (
		<div className='flex gap-x-4 justify-between	px-24'>

			<Link href={'/'}>Blogger</Link>
			<div className='flex gap-x-5 '>





				{
					routes.map((route) => (
						<Link key={route.id} href={route.route} >
							{route.title}
						</Link>
					))
				}
				{
session.status== "authenticated" &&
				<button className=' ' onClick={signOut}>Logout</button>
				}
			</div>


		</div>
	)
}

export default Navbar