import React from 'react'

const BlogSlugPage = async({params}:{params:Promise<{slug:string}>}) => {
    const slug = (await params).slug
  return (
    <div>
      Blog Slug Page 
      <div>slug:{slug}</div>  
    </div>
  )
}

export default BlogSlugPage
