import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beginning', href: '#birthday-hero' },
    { label: 'Little Things', href: '#the-little-things' },
    { label: 'Becoming', href: '#her-growth' },
    { label: 'Books', href: '#between-the-pages' },
    { label: 'Memories', href: '#memory-gallery' },
    { label: 'The Letter', href: '#letter-from-sahil' },
    { label: 'Countdown', href: '#birthday-countdown' },
    { label: 'Surprise', href: '#secret-surprise' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div
        className="h-0.5 bg-gradient-to-r from-dustyRose via-burgundy to-gold transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        aria-label="Main story navigation"
        className={`px-4 sm:px-8 py-3 transition-all duration-300 ${
          scrolled
            ? 'bg-ivory/85 backdrop-blur-md shadow-sm border-b border-dustyRose/20 py-2.5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo / Title */}
          <a
            href="#birthday-hero"
            onClick={(e) => handleLinkClick(e, '#birthday-hero')}
            className="font-serif font-semibold text-burgundy text-base sm:text-lg flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <Heart className="w-4 h-4 fill-dustyRose text-burgundy" />
            <span>{birthdayConfig.recipient.name}’s Little World <span className="hidden sm:inline font-normal text-xs text-warmDark/60 font-sans tracking-normal">• For Diduu ♡</span></span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-5 text-xs font-serif text-warmDark/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-burgundy transition-colors uppercase tracking-wider py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-burgundy group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 rounded-lg text-burgundy hover:bg-blush/40 transition-colors"
              aria-label={menuOpen ? "Close chapter navigation menu" : "Open chapter navigation menu"}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 p-4 bg-ivory/95 backdrop-blur-md rounded-2xl border border-dustyRose/30 shadow-soft-rose animate-fadeIn">
            <div className="flex flex-col space-y-2.5 text-sm font-serif text-warmDark/90">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2 rounded-xl hover:bg-blush/50 hover:text-burgundy transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
