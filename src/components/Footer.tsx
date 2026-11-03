'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 py-10 relative">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Note */}
          <div className="text-center md:text-left space-y-1">
            <div className="font-mono font-bold text-[#2a1f14] dark:text-[#f5ece4] flex items-center justify-center md:justify-start gap-1">
              <span className="text-[#a0620f] dark:text-[#f5b942]">&lt;</span>
              huynhanh
              <span className="text-[#a0620f] dark:text-[#f5b942]">/&gt;</span>
              <span className="text-xs font-sans text-[#786352] dark:text-[#b5a393] font-normal ml-2">
                © 2026 Huỳnh Anh
              </span>
            </div>
            <p className="text-xs text-[#786352] dark:text-[#b5a393]">
              {lang === 'vi'
                ? 'Frontend Developer tại Digital Creations • Chuyên môn Mobile & Web'
                : 'Frontend Developer at Digital Creations • Mobile & Web Specialist'}
            </p>
          </div>

          {/* Back to top */}
          <div className="flex items-center gap-4 text-xs font-medium text-[#786352] dark:text-[#b5a393]">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl border border-[#e7dcce] dark:border-[#33281f] hover:text-[#a0620f] dark:hover:text-[#f5b942] hover:border-[#a0620f]/40 dark:hover:border-[#f5b942]/40 transition-colors cursor-pointer"
              aria-label="Lên đầu trang / Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-[#e7dcce]/60 dark:border-[#33281f]/60 text-center text-[11px] text-[#786352] dark:text-[#b5a393] flex items-center justify-center gap-1.5">
          <span>{t.footer.builtWith}</span>
          <Heart className="w-3 h-3 text-amber-600 dark:text-[#f5b942] inline fill-amber-600 dark:fill-[#f5b942]" />
        </div>
      </div>
    </footer>
  );
}
