'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-xl p-1 border border-[#e7dcce] dark:border-[#33281f] bg-white/80 dark:bg-[#1e1813]/80 text-xs font-semibold">
      <Globe className="w-3.5 h-3.5 ml-1.5 mr-1 text-[#786352] dark:text-[#b5a393]" />
      <button
        onClick={() => setLang('vi')}
        className={`px-2 py-1 rounded-lg transition-colors duration-150 cursor-pointer ${
          lang === 'vi'
            ? 'bg-[#a0620f] dark:bg-[#f5b942] text-white dark:text-[#15110e] font-bold shadow-xs'
            : 'text-[#786352] dark:text-[#b5a393] hover:text-[#2a1f14] dark:hover:text-[#f5ece4]'
        }`}
        aria-label="Tiếng Việt"
      >
        VI
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-2 py-1 rounded-lg transition-colors duration-150 cursor-pointer ${
          lang === 'en'
            ? 'bg-[#a0620f] dark:bg-[#f5b942] text-white dark:text-[#15110e] font-bold shadow-xs'
            : 'text-[#786352] dark:text-[#b5a393] hover:text-[#2a1f14] dark:hover:text-[#f5ece4]'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
