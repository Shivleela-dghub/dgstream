import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Healthcare Solutions', path: '/healthcare', colorClass: 'text-healthcare hover:text-healthcare-dark', activeClass: 'bg-healthcare' },
    { name: 'Retail Solutions', path: '/retail', colorClass: 'text-retail hover:text-retail-dark', activeClass: 'bg-retail' },
    { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/blogs' && location.pathname.startsWith('/blog')) return true;
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-border py-3' 
          : 'bg-white py-5'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center z-50">
            <img 
              src="https://horizons-cdn.hostinger.com/e44a4e70-03b5-4831-8a3e-3511764de6f4/f3995bb5842f73467476bcc843e75143.png" 
              alt="DG Stream Logo" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-300 relative py-2 ${
                  isActive(link.path)
                    ? (link.colorClass ? link.colorClass.split(' ')[0] : 'text-primary')
                    : `text-muted-foreground ${link.colorClass ? link.colorClass.split(' ')[1] : 'hover:text-primary'}`
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${link.activeClass || 'bg-primary'}`} />
                )}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 ml-2 xl:ml-4 border-l border-border pl-6 xl:pl-8">
              <a 
                href="https://wa.me/9731361100" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-xl px-6">
                <Link to="/contact">Get Growth Plan</Link>
              </Button>
            </div>
          </nav>

          <button
            className="lg:hidden p-2 -mr-2 text-primary z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out lg:hidden flex flex-col pt-24 px-6 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isActive(link.path) ? (link.colorClass ? link.colorClass.split(' ')[0] : 'text-primary') : 'text-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto mb-12 flex flex-col gap-4">
            <a 
              href="https://wa.me/9731361100" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-lg font-semibold text-[#25D366] bg-[#25D366]/10 py-4 rounded-xl"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-xl w-full py-6 text-lg">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get Growth Plan
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;