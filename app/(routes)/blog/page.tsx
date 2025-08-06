import React from 'react';
import { Post } from '../../../types/pages/post';

// fetch SSR (server side)
const BlogPage = async () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/api/blog`, {
      cache: 'no-store',
    });


    if (!res.ok) {

      const errorText = await res.text();
      console.error('API isteği başarısız oldu:', res.status, res.statusText, errorText);
 
      return (
        <div className='container mx-auto py-8'>
          <h1 className='text-3xl mb-4 text-red-500'>Blog Yazıları Yüklenirken Bir Hata Oluştu!</h1>
          <p className='text-red-400'>Lütfen API sunucusunun çalıştığından ve doğru yanıt verdiğinden emin olun.</p>
         
        </div>
      );
    }

    const posts: Post[] = await res.json();

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
    );
  } catch (error) {
    console.error('Blog yazılarını çekerken bir hata oluştu:', error);
    return (
      <div className='container mx-auto py-8'>
        <h1 className='text-3xl mb-4 text-red-500'>Blog Yazıları Yüklenirken Beklenmedik Bir Hata Oluştu!</h1>
        <p className='text-red-400'>Lütfen konsolu kontrol edin ve API bağlantınızı doğrulayın.</p>
      </div>
    );
  }
};

export default BlogPage;