import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, HeartPulse } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Appointment', href: '/appointment' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled || !isHome ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-600/20 group-hover:rotate-12 transition-transform">
            <HeartPulse size={28} />
          </div>
          <span className={cn(
            "font-bold text-2xl tracking-tight font-display italic transition-colors",
            isScrolled || !isHome ? "text-slate-900" : "text-slate-900 md:text-white"
          )}>
            Humble Healthcare
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-xs font-bold uppercase tracking-[0.3em] transition-all hover:text-emerald-500 relative group",
                isScrolled || !isHome ? "text-slate-600" : "text-white/90",
                location.pathname === link.href && "text-emerald-600"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-2 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full",
                location.pathname === link.href && "w-full"
              )} />
            </Link>
          ))}
          <a
            href="tel:+18323678828"
            className="flex items-center gap-3 bg-emerald-600 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 hover:-translate-y-1 active:scale-95"
          >
            <Phone size={18} />
            <span>(832) 367-8828</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-xl transition-colors",
            isScrolled || !isHome ? "text-slate-900 hover:bg-slate-100" : "text-slate-900 md:text-white hover:bg-white/10"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl overflow-hidden md:hidden border-t border-slate-100"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-lg font-bold uppercase tracking-widest py-2 transition-colors",
                    location.pathname === link.href ? "text-emerald-600" : "text-slate-600"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+18323678828"
                className="flex items-center justify-center gap-3 bg-emerald-600 text-white px-6 py-4 rounded-2xl text-lg font-bold shadow-lg shadow-emerald-600/20"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
