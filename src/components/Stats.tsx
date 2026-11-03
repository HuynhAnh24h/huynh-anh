'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Briefcase, Code, Smartphone, Award } from 'lucide-react';

export function Stats() {
  const { lang, t } = useLanguage();

  const stats = [
    {
      value: '3+',
      label: t.stats.experienceYears,
      desc: lang === 'vi' ? 'Lập trình Web, Mobile & IT' : 'Web, Mobile & IT Operations',
      icon: Briefcase,
    },
    {
      value: '4+',
      label: t.stats.companiesWorked,
      desc: lang === 'vi' ? 'Digital Creations, Kornbest, ICAVIET...' : 'Digital Creations, Kornbest, ICAVIET...',
      icon: Award,
    },
    {
      value: '10+',
      label: t.stats.appsBuilt,
      desc: lang === 'vi' ? 'Mobile App, Next.js, Shopify, WP' : 'Mobile App, Next.js, Shopify, WP',
      icon: Smartphone,
    },
    {
      value: '100%',
      label: t.stats.clientSatisfaction,
      desc: lang === 'vi' ? 'Cam kết chất lượng & đúng tiến độ' : 'Committed to quality & deadlines',
      icon: Code,
    },
  ];

  return (
    <section className="py-8 border-y border-[#e7dcce] dark:border-[#33281f] bg-white/40 dark:bg-[#15110e]/40 backdrop-blur-xs">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl border border-[#e7dcce]/80 dark:border-[#33281f]/80 bg-white/80 dark:bg-[#1e1813]/80 hover:border-[#a0620f]/50 dark:hover:border-[#f5b942]/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl md:text-4xl font-extrabold text-[#a0620f] dark:text-[#f5b942] tracking-tight font-mono">
                    {item.value}
                  </span>
                  <div className="p-2 rounded-lg bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-semibold text-sm text-[#2a1f14] dark:text-[#f5ece4]">
                  {item.label}
                </h3>
                <p className="text-xs text-[#786352] dark:text-[#b5a393] mt-1 line-clamp-1">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
