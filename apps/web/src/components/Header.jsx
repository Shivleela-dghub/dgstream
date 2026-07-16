import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home',                 path: '/'           },
    // { name: 'Healthcare Solutions', path: '/healthcare' },
    // { name: 'Retail Solutions',     path: '/retail'     },
    {name :'Product Designs',path:'/product-design'},
    {name:'Our Work',path:'/work'},
    // { name: 'About',                path: '/about'      },
    {name:'Brand Growth',path:'/brand-growth'},
    { name: 'Blogs',                path: '/blogs'      },
    { name: 'Contact',              path: '/contact'    },
  ];

  const isActive = (path) => {
    if (path === '/blogs' && location.pathname.startsWith('/blog')) return true;
    return location.pathname === path;
  };

  return (
    <>
   
    <header style={{
      position: 'fixed', top: 0, zIndex: 100, width: '100%',
      background: 'rgba(255,255,255,0.96)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border)',
      transition: 'padding 0.3s',
      padding: scrolled ? '1rem 4rem' : '1.25rem 4rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      {/* Logo */}
            <Link to="/" className="flex items-center z-50">
            <img 
              src="https://horizons-cdn.hostinger.com/e44a4e70-03b5-4831-8a3e-3511764de6f4/f3995bb5842f73467476bcc843e75143.png" 
              alt="DG Stream Logo" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>


      {/* Desktop nav */}
      <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', listStyle: 'none' }}
           className="hidden lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              fontSize: '0.875rem',
              color: isActive(link.path) ? 'var(--black)' : 'var(--muted)',
              textDecoration: 'none',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              letterSpacing: '0.01em',
              transition: 'color 0.2s',
            }}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="hidden lg:flex">
        
          <a href="https://wa.me/9731361100"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '0.875rem', fontWeight: 400,
            color: 'var(--muted)', textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#25D366'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
        >
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </a>

        <Link
          to="/contact"
          style={{
            background: 'var(--black)', color: 'var(--white)',
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: '0.78rem', padding: '0.6rem 1.4rem',
            textDecoration: 'none', letterSpacing: '0.04em',
            textTransform: 'uppercase', transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#2a2a35'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--black)'}
        >
          Get Growth Plan
        </Link>
      </div>

      {/* Mobile toggle */}
      <button
        className="lg:hidden"
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--black)', padding: '0.5rem' }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed', inset: 0, background: 'white', zIndex: 40,
        transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.5s ease-in-out',
        display: 'flex', flexDirection: 'column',
        paddingTop: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem',
      }} className="lg:hidden">
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontSize: '1.5rem',
                fontFamily: "'Syne', sans-serif", fontWeight: 700,
                color: isActive(link.path) ? 'var(--black)' : 'var(--muted)',
                textDecoration: 'none',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div style={{ marginTop: 'auto', marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a
            href="https://wa.me/9731361100"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '0.5rem', fontSize: '1.1rem', fontWeight: 600,
              color: '#25D366', background: 'rgba(37,211,102,0.1)',
              padding: '1rem', borderRadius: '0.75rem', textDecoration: 'none',
            }}
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              background: 'var(--black)', color: 'var(--white)',
              fontFamily: "'Syne', sans-serif", fontWeight: 700,
              fontSize: '0.9rem', padding: '1rem', textAlign: 'center',
              textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase',
            }}
          >
            Get Growth Plan
          </Link>
        </div>
      </div>
    </header>
     </>
  )
}

export default Header;