"use client";
import React, { useEffect, useState } from "react";
import {Post} from "../types/pages/post"
const BlogList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:3000/api/blog");
      const data = await res.json();
      setPosts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
     <ul className='space-y-4'>
        {posts && posts.map((post)=>(
            <li key={post.id }>
                <h2 className='text-xl'>{post.title}</h2>
                <p>{post.content}</p>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
