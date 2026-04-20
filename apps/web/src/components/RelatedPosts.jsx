import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard.jsx';
import { blogsData } from '@/data/blogsData.js';

function RelatedPosts({ currentBlog }) {
  // Filter blogs by same category, exclude current blog, limit to 3
  const relatedBlogs = blogsData
    .filter(blog => blog.category === currentBlog.category && blog.id !== currentBlog.id)
    .slice(0, 3);

  if (relatedBlogs.length === 0) return null;

  const isHealthcare = currentBlog.category === 'Healthcare';

  return (
    <section className="py-16 border-t border-border bg-muted/20">
      <div className="container max-w-6xl">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl">Related Articles</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
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