import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, Linkedin, MessageCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import RelatedPosts from '@/components/RelatedPosts.jsx';
import { Button } from '@/components/ui/button';
import { blogsData } from '@/data/blogsData.js';
import { format } from 'date-fns';

function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const blog = blogsData.find(b => b.slug === slug);

  useEffect(() => {
    if (!blog) {
      navigate('/blogs', { replace: true });
    }
    window.scrollTo(0, 0);
  }, [blog, navigate, slug]);

  if (!blog) return null;

  const isHealthcare = blog.category === 'Healthcare';
  const accentColor = isHealthcare ? 'text-healthcare' : 'text-retail';
  const bgAccentColor = isHealthcare ? 'bg-healthcare' : 'bg-retail';
  const hoverBgAccentColor = isHealthcare ? 'hover:bg-healthcare-dark' : 'hover:bg-retail-dark';

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = (platform) => {
    let url = '';
    const text = encodeURIComponent(blog.title);
    const encodedUrl = encodeURIComponent(shareUrl);

    switch (platform) {
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'whatsapp':
        url = `https://api.whatsapp.com/send?text=${text} ${encodedUrl}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`;
        break;
      default:
        break;
    }

    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${blog.title} | DG Stream Blog`}</title>
        <meta name="description" content={blog.metaDescription} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:image" content={blog.featuredImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={shareUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.metaDescription} />
        <meta name="twitter:image" content={blog.featuredImage} />
      </Helmet>

      <Header />

      <main className="pt-24 pb-0 bg-background">
        <article>
          {/* HEADER SECTION */}
          <div className="container max-w-4xl pt-8 pb-12">
            <Link 
              to="/blogs" 
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all articles
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${isHealthcare ? 'bg-healthcare/10 text-healthcare' : 'bg-retail/10 text-retail'}`}>
                  {blog.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground font-medium border-y border-border py-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blog.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {format(new Date(blog.publishDate), 'MMMM dd, yyyy')}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blog.readTime} min read
                </div>
              </div>
            </motion.div>
          </div>

          {/* FEATURED IMAGE */}
          <div className="container max-w-5xl mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[21/9] md:aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-premium"
            >
              <img 
                src={blog.featuredImage} 
                alt={blog.title} 
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
            </motion.div>
          </div>

          {/* CONTENT & SHARE SECTION */}
          <div className="container max-w-4xl pb-20">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Share Sidebar (Desktop) */}
              <div className="hidden lg:block w-16 shrink-0">
                <div className="sticky top-32 flex flex-col gap-4 items-center">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    Share
                  </span>
                  <button onClick={() => handleShare('linkedin')} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-[#0A66C2] hover:text-white transition-colors" aria-label="Share on LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleShare('twitter')} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-black hover:text-white transition-colors" aria-label="Share on X">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </button>
                  <button onClick={() => handleShare('whatsapp')} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-[#25D366] hover:text-white transition-colors" aria-label="Share on WhatsApp">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-li:text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2">
                  {blog.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Mobile Share */}
                <div className="lg:hidden mt-8 flex items-center gap-4">
                  <span className="text-sm font-bold text-foreground flex items-center gap-2">
                    <Share2 className="w-4 h-4" /> Share:
                  </span>
                  <div className="flex gap-2">
                    <button onClick={() => handleShare('linkedin')} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-[#0A66C2] hover:text-white transition-colors" aria-label="Share on LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleShare('twitter')} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-black hover:text-white transition-colors" aria-label="Share on X">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </button>
                    <button onClick={() => handleShare('whatsapp')} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-[#25D366] hover:text-white transition-colors" aria-label="Share on WhatsApp">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* RELATED POSTS */}
        <RelatedPosts currentBlog={blog} />

        {/* FINAL CTA */}
        <section className={`py-24 text-white text-center ${bgAccentColor}`}>
          <div className="container max-w-3xl">
            <h2 className="text-white mb-6 text-4xl md:text-5xl">Ready to grow your business?</h2>
            <p className="text-xl text-white/80 mb-10">
              Let's build a custom digital strategy that drives real results for your {blog.category.toLowerCase()} brand.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold rounded-xl px-10 py-7 text-xl shadow-xl hover:-translate-y-1 transition-all">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default BlogDetailPage;