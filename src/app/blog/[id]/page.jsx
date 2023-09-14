'use client'
import React from 'react'

const BlogPost = ({params}) => {
	console.log(params);
  return (
	<div>BlogPost {params.id}</div>
  )
}

export default BlogPost