import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BlogCard from '@/components/BlogCard.jsx';
import { blogsData } from '@/data/blogsData.js';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const POSTS_PER_PAGE = 6;

function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortBy, setSortBy] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and sort logic
  const filteredAndSortedBlogs = useMemo(() => {
    let result = [...blogsData];

    // Apply category filter
    if (categoryFilter !== 'All') {
      result = result.filter(blog => blog.category === categoryFilter);
    }

    // Apply search filter
    if (searchTerm.trim()) {
      const lowercasedSearch = searchTerm.toLowerCase();
      result = result.filter(blog => 
        blog.title.toLowerCase().includes(lowercasedSearch) || 
        blog.excerpt.toLowerCase().includes(lowercasedSearch) ||
        blog.tags.some(tag => tag.toLowerCase().includes(lowercasedSearch))
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      const dateA = new Date(a.publishDate).getTime();
      const dateB = new Date(b.publishDate).getTime();
      
      if (sortBy === 'latest') return dateB - dateA;
      if (sortBy === 'oldest') return dateA - dateB;
      return 0;
    });

    return result;
  }, [searchTerm, categoryFilter, sortBy]);

  // Pagination logic
  const totalPages = Math.ceil(filteredAndSortedBlogs.length / POSTS_PER_PAGE);
  const currentBlogs = filteredAndSortedBlogs.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset pagination when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, categoryFilter, sortBy]);

  return (
    <>
      <Helmet>
        <title>DG Stream Blog | Healthcare & Retail Marketing Insights</title>
        <meta name="description" content="Industry insights, strategies, and growth tips for Healthcare and Retail brands. Learn how to acquire patients and scale e-commerce sales." />
      </Helmet>

      <Header />

      <main className="pt-20 min-h-screen bg-background">
        {/* HERO SECTION */}
        <section className="py-20 md:py-28 bg-muted/30 border-b border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="mb-6">DG Stream Blog</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Industry insights, strategies, and growth tips for <span className="text-healthcare font-semibold">Healthcare</span> and <span className="text-retail font-semibold">Retail</span> brands.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FILTERING & SEARCH SECTION */}
        <section className="py-8 sticky top-[72px] md:top-[88px] z-30 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Category Filters */}
              <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                <Button 
                  variant={categoryFilter === 'All' ? 'default' : 'outline'}
                  onClick={() => setCategoryFilter('All')}
                  className={`rounded-full px-6 ${categoryFilter === 'All' ? 'bg-primary text-primary-foreground' : ''}`}
                >
                  All Articles
                </Button>
                <Button 
                  variant={categoryFilter === 'Healthcare' ? 'default' : 'outline'}
                  onClick={() => setCategoryFilter('Healthcare')}
                  className={`rounded-full px-6 ${categoryFilter === 'Healthcare' ? 'bg-healthcare text-white hover:bg-healthcare-dark border-healthcare' : 'hover:text-healthcare hover:border-healthcare'}`}
                >
                  Healthcare
                </Button>
                <Button 
                  variant={categoryFilter === 'Retail' ? 'default' : 'outline'}
                  onClick={() => setCategoryFilter('Retail')}
                  className={`rounded-full px-6 ${categoryFilter === 'Retail' ? 'bg-retail text-white hover:bg-retail-dark border-retail' : 'hover:text-retail hover:border-retail'}`}
                >
                  Retail
                </Button>
              </div>

              {/* Search and Sort */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    type="text" 
                    placeholder="Search articles..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 rounded-full bg-muted/50 border-border focus-visible:ring-primary"
                  />
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[140px] rounded-full bg-muted/50 border-border">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Latest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            </div>
          </div>
        </section>

        {/* BLOG LISTING SECTION */}
        <section className="py-16 md:py-24">
          <div className="container">
            {currentBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <BlogCard blog={blog} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-muted/20 rounded-3xl border border-border">
                <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-2xl mb-2">No articles found</h3>
                <p className="text-muted-foreground">Try adjusting your search or category filters.</p>
                <Button 
                  variant="outline" 
                  className="mt-6 rounded-xl"
                  onClick={() => { setSearchTerm(''); setCategoryFilter('All'); }}
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* PAGINATION SECTION */}
            {totalPages > 1 && (
              <div className="mt-16 flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="rounded-full w-10 h-10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <Button
                      key={i}
                      variant={currentPage === i + 1 ? 'default' : 'ghost'}
                      size="icon"
                      onClick={() => handlePageChange(i + 1)}
                      className={`rounded-full w-10 h-10 ${currentPage === i + 1 ? 'bg-primary text-primary-foreground' : ''}`}
                    >
                      {i + 1}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="rounded-full w-10 h-10"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default BlogsPage;