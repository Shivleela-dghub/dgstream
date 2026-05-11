import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard.jsx';
import apiServerClient from '@/lib/apiServerClient.js';

function RelatedPosts({ currentBlog }) {
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    if (!currentBlog?.category) return;

    apiServerClient.get('/blogs')
      .then(({ data }) => {
        const related = data.blogs
          .filter(blog =>
            blog.category === currentBlog.category &&
            blog._id !== currentBlog._id        // ← use _id not id
          )
          .slice(0, 3);
        setRelatedBlogs(related);
      })
      .catch(err => console.error('Failed to fetch related blogs:', err));
  }, [currentBlog]);

  if (relatedBlogs.length === 0) return null;

  return (
    <section className="py-16 border-t border-border bg-muted/20">
      <div className="container max-w-6xl">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl">Related Articles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedBlogs.map((blog, index) => (
            <motion.div
              key={blog._id}                     // ← use _id not id
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedPosts;