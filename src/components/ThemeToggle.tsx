'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2 rounded-xl transition-all duration-200 border border-[#e7dcce] dark:border-[#33281f] bg-white/80 dark:bg-[#1e1813]/80 hover:bg-[#f2eae0] dark:hover:bg-[#272019] text-[#2a1f14] dark:text-[#f5ece4] hover:text-[#a0620f] dark:hover:text-[#f5b942] focus:outline-none focus:ring-2 focus:ring-[#f5b942]/40 cursor-pointer"
      aria-label={isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
      title={isDark ? 'Chế độ Sáng' : 'Chế độ Tối'}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
