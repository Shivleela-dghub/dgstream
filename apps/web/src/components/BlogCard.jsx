import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { format } from 'date-fns';

function BlogCard({ blog }) {
  const isHealthcare = blog.category === 'Healthcare';
  const categoryColor = isHealthcare ? 'text-healthcare bg-healthcare/10' : 'text-retail bg-retail/10';
  const hoverColor = isHealthcare ? 'group-hover:text-healthcare' : 'group-hover:text-retail';

  return (
    <Card className="h-full bg-card border-border shadow-sm hover:shadow-premium-hover transition-all duration-300 overflow-hidden flex flex-col group">
      <Link to={`/blog/${blog.slug}`} className="relative h-56 overflow-hidden block">
        <img 
          src={blog.featuredImage} 
          alt={blog.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md bg-white/90 ${isHealthcare ? 'text-healthcare' : 'text-retail'}`}>
            {blog.category}
          </span>
        </div>
      </Link>
      
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 font-medium">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {format(new Date(blog.publishDate), 'MMM dd, yyyy')}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {blog.readTime} min read
          </div>
        </div>
        
        <Link to={`/blog/${blog.slug}`} className="block mb-3">
          <h3 className={`text-xl font-bold text-foreground transition-colors duration-300 line-clamp-2 ${hoverColor}`}>
            {blog.title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
          {blog.excerpt}
        </p>
        
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
          <span className="text-sm font-medium text-foreground">
            By {blog.author}
          </span>
          <Link 
            to={`/blog/${blog.slug}`} 
            className={`inline-flex items-center text-sm font-bold transition-colors ${isHealthcare ? 'text-healthcare hover:text-healthcare-dark' : 'text-retail hover:text-retail-dark'}`}
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default BlogCard;