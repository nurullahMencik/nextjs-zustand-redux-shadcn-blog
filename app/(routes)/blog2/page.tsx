import BlogList from '@/components/BlogList'
import React from 'react'

const BlogPage = () => {
  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-3xl mb-4'>CSR(client) Blog Post</h1>
      <BlogList/>
    </div>
  )
}

export default BlogPage