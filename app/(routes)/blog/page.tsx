// app/(routes)/blog/page.tsx
import React from 'react'
import { Post } from '../../../types/pages/post'

// ✅ fetch SSR (server side) olsun diye cache: 'no-store'
const BlogPage = async () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000" // fallback

  const res = await fetch(`${baseUrl}/api/blog`, {
    cache: 'no-store',
  })

  const posts: Post[] = await res.json()

  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-3xl mb-4'>SSR (server) Blog Post</h1>
      <ul className='space-y-4'>
        {posts.map((post) => (
          <li key={post.id}>
            <h2 className='text-xl font-montserrat'>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default BlogPage
