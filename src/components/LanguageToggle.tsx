'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-xl p-1 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-xs font-semibold">
      <Globe className="w-3.5 h-3.5 ml-1.5 mr-1 text-slate-400 dark:text-slate-500" />
      <button
        onClick={() => setLang('vi')}
        className={`px-2 py-1 rounded-lg transition-colors duration-150 ${
          lang === 'vi'
            ? 'bg-emerald-500 text-white shadow-xs'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        aria-label="Tiếng Việt"
      >
        VI
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-2 py-1 rounded-lg transition-colors duration-150 ${
          lang === 'en'
            ? 'bg-emerald-500 text-white shadow-xs'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
