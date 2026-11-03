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
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-slate-950/60 py-10 relative">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Note */}
          <div className="text-center md:text-left space-y-1">
            <div className="font-mono font-bold text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-1">
              <span className="text-emerald-500">&lt;</span>
              huynhanh
              <span className="text-emerald-500">/&gt;</span>
              <span className="text-xs font-sans text-slate-400 font-normal ml-2">
                © 2026 Huỳnh Anh
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {lang === 'vi'
                ? 'Frontend Developer tại Digital Creations • Chuyên môn Mobile & Web'
                : 'Frontend Developer at Digital Creations • Mobile & Web Specialist'}
            </p>
          </div>

          {/* Back to top */}
          <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:text-emerald-500 hover:border-emerald-500/40 transition-colors"
              aria-label="Lên đầu trang / Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
          <span>{t.footer.builtWith}</span>
          <Heart className="w-3 h-3 text-rose-500 inline fill-rose-500" />
        </div>
      </div>
    </footer>
  );
}
