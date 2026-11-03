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
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#top"
          className="flex items-center gap-2 font-mono text-base md:text-lg font-bold tracking-tight text-slate-900 dark:text-white group"
        >
          <span className="text-emerald-500 font-extrabold">&lt;</span>
          <span className="group-hover:text-emerald-500 transition-colors">huynhanh</span>
          <span className="text-emerald-500 font-extrabold">/&gt;</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-sans font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Sparkles className="w-2.5 h-2.5" />
            Digital Creations
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-150"
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
            className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl px-6 py-5 transition-all">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 py-1 transition-colors"
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
