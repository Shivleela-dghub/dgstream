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

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    // { name: 'Healthcare Solutions', path: '/healthcare' },
    // { name: 'Retail Solutions',     path: '/retail'     },
    { name: 'Product Designs', path: '/product-design' },
    // { name: 'About',                path: '/about'      },
    { name: 'Brand Growth', path: '/brand-growth' },
    { name: 'Our Work', path: '/work' },
    // { name: 'Blogs',                path: '/blogs'      },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/blogs' && location.pathname.startsWith('/blog')) return true;
    return location.pathname === path;
  };

  return (
    <>
     <header
  className="fixed top-0 z-[100] w-full flex items-center justify-between gap-4 px-4 py-4 md:px-8 lg:px-16"
  style={{
    background: 'rgba(255,255,255,0.96)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid var(--border)',
    transition: 'padding 0.3s',
  }}
>
  {/* Logo + Nav grouped together */}
  <div className="flex items-center gap-22 lg:gap-24">
    {/* Logo */}
    <Link to="/" className="flex items-center z-50">
      <img
        src="https://res.cloudinary.com/dl7dr0bmb/image/upload/v1785403656/DG_Stream_logo_ohyji9.png"
        alt="DG Stream Logo"
        className="h-9 md:h-12 w-auto"
      />
    </Link>

    {/* Desktop nav */}
    <nav className="hidden lg:flex items-center gap-10">
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
  </div>
{/* Right side */}
<div className="hidden lg:flex items-center">
  <Link
    to="/case-studies"
    style={{
      background: 'var(--black)',
      color: 'var(--white)',
      fontFamily: "'Syne', sans-serif",
      fontWeight: 700,
      fontSize: '0.85rem',
      padding: '0.75rem 1.5rem',
      textAlign: 'center',
      textDecoration: 'none',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
    }}
  >
    Case studies
  </Link>
</div>

  {/* Mobile toggle */}
  <button
    className="lg:hidden relative z-[300]"
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--black)',
      padding: '0.5rem',
      visibility: mobileMenuOpen ? 'hidden' : 'visible',
    }}
    onClick={() => setMobileMenuOpen(true)}
    aria-label="Open menu"
  >
    <Menu size={28} />
  </button>
</header>

      {/* Mobile menu — rendered as a SIBLING of header (not a child), so header's
          backdropFilter can't trap this fixed element inside its own small box */}
      <div
        className="lg:hidden fixed inset-0 flex flex-col pt-24 px-6"
        style={{
          backgroundColor: '#FFFFFF',
          opacity: 1,
          zIndex: 200,
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {/* Close button lives inside the drawer so it's always visible/clickable when open */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--black)',
            padding: '0.5rem',
          }}
        >
          <X size={28} />
        </button>

        <nav className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontSize: '1.5rem',
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
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
          <Link
            to="/case-studies"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              background: 'var(--black)', color: 'var(--white)',
              fontFamily: "'Syne', sans-serif", fontWeight: 700,
              fontSize: '0.9rem', padding: '1rem', textAlign: 'center',
              textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase',
            }}
          >
            Case studies
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;
