"use client";
import React, { useEffect, useState } from "react";
import { Post } from "../types/pages/post";

const BlogList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ""; // "" olursa relative fetch olur
      const res = await fetch(`${baseUrl}/api/blog`);
      if (!res.ok) {
        console.error("Failed to fetch posts");
        return;
      }
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <h2 className="text-xl">{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
