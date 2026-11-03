'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { Menu, X, Sparkles } from 'lucide-react';

export function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#education', label: t.nav.education },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f8f3ec]/90 dark:bg-[#15110e]/90 backdrop-blur-md border-b border-[#e7dcce] dark:border-[#33281f] shadow-xs'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#top"
          className="flex items-center gap-2 font-mono text-base md:text-lg font-bold tracking-tight text-[#2a1f14] dark:text-[#f5ece4] group"
        >
          <span className="text-[#a0620f] dark:text-[#f5b942] font-extrabold">&lt;</span>
          <span className="group-hover:text-[#a0620f] dark:group-hover:text-[#f5b942] transition-colors">huynhanh</span>
          <span className="text-[#a0620f] dark:text-[#f5b942] font-extrabold">/&gt;</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-sans font-medium px-2.5 py-0.5 rounded-full bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] border border-[#a0620f]/20 dark:border-[#f5b942]/30">
            <Sparkles className="w-2.5 h-2.5" />
            Digital Creations
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#786352] dark:text-[#b5a393]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#a0620f] dark:hover:text-[#f5b942] transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <LanguageToggle />
          <ThemeToggle />

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-white/80 dark:bg-[#1e1813]/80 text-[#2a1f14] dark:text-[#f5ece4] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/98 dark:bg-[#15110e]/98 backdrop-blur-xl px-6 py-5 transition-all">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#786352] dark:text-[#b5a393] hover:text-[#a0620f] dark:hover:text-[#f5b942] py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
