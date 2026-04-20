import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Phone, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Healthcare Solutions', path: '/healthcare' },
    { name: 'Retail Solutions', path: '/retail' },
    { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' }
  ];
  
  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/dg-stream/' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/digi_stream_/' }
  ];
  
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4">
            <div className="bg-white/5 inline-block p-4 rounded-2xl mb-6 border border-white/10">
              <img 
                src="https://horizons-cdn.hostinger.com/e44a4e70-03b5-4831-8a3e-3511764de6f4/dg-stream-logo-with-green-arrow-HOeAJ.png" 
                alt="DG Stream Logo" 
                className="h-10 w-auto max-w-[200px] object-contain" 
              />
            </div>
            <p className="text-primary-foreground/70 mb-8 max-w-sm">
              DG Stream helps healthcare and retail brands generate high-quality leads and sales through SEO, performance marketing, and high-converting digital strategies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(social => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300" 
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <span className="font-bold text-lg mb-6 block text-white">Quick Links</span>
            <ul className="space-y-4">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-white transition-colors duration-300 font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <span className="font-bold text-lg mb-6 block text-white">Contact Us</span>
            <ul className="space-y-4 text-primary-foreground/70 font-medium">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-white/70" />
                <a href="mailto:contact@dgstream.in" className="hover:text-white transition-colors">
                  contact@dgstream.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-white/70" />
                <a href="tel:9731361100" className="hover:text-white transition-colors">
                  9731361100
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 mt-0.5 text-[#25D366]" />
                <a href="https://wa.me/9731361100" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-white/70" />
                <span>Mon-Sat 9AM-7PM IST</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <span className="font-bold text-lg mb-2 block text-white">Ready to Grow?</span>
              <p className="text-sm text-primary-foreground/70 mb-6">
                Get a custom growth strategy for your business.
              </p>
              <Button asChild className="w-full bg-white text-primary hover:bg-white/90 font-bold group">
                <Link to="/contact">
                  Scale Your Brand Today
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50 font-medium">
            © {new Date().getFullYear()} DG Stream. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-sm text-primary-foreground/50 hover:text-white transition-colors duration-300 font-medium">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-primary-foreground/50 hover:text-white transition-colors duration-300 font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;