'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { ExperienceItem } from '@/lib/types';
import { Briefcase, Building, Calendar, CheckCircle2 } from 'lucide-react';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export function Experience({ experiences }: ExperienceProps) {
  const { lang, t } = useLanguage();

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#f2eae0]/40 dark:bg-[#120e0b]/40">
      <div className="max-w-4xl mx-auto px-5">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] border border-[#a0620f]/20 dark:border-[#f5b942]/30 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.experience.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2a1f14] dark:text-[#f5ece4]">
            {t.experience.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#786352] dark:text-[#b5a393] max-w-xl">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-[#e7dcce] dark:border-[#33281f] ml-4 md:ml-6 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, index) => {
            const role = exp.role[lang] || exp.role.vi;
            const period = exp.period[lang] || exp.period.vi;
            const bullets = exp.bulletPoints[lang] || exp.bulletPoints.vi || [];
            const isDigitalCreations = exp.company.toLowerCase().includes('digital creations');

            return (
              <div key={exp.id || index} className="relative group">
                
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full border-4 transition-transform group-hover:scale-110 flex items-center justify-center ${
                    exp.isCurrent
                      ? 'bg-[#a0620f] dark:bg-[#f5b942] border-white dark:border-[#15110e] shadow-md shadow-[#f5b942]/40'
                      : 'bg-[#d8c9b9] dark:bg-[#33281f] border-white dark:border-[#15110e]'
                  }`}
                />

                {/* Card Container */}
                <div
                  className={`p-6 md:p-7 rounded-2xl border transition-all duration-200 ${
                    isDigitalCreations
                      ? 'bg-[#a0620f]/5 dark:bg-[#f5b942]/10 border-[#a0620f]/30 dark:border-[#f5b942]/30 shadow-md shadow-[#f5b942]/5'
                      : 'bg-white/90 dark:bg-[#1e1813]/90 border-[#e7dcce] dark:border-[#33281f] hover:border-[#a0620f]/40 dark:hover:border-[#f5b942]/40'
                  }`}
                >
                  
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-[#2a1f14] dark:text-[#f5ece4] flex items-center gap-2">
                      {role}
                      {exp.isCurrent && (
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#a0620f] dark:bg-[#f5b942] text-white dark:text-[#15110e]">
                          {t.experience.currentBadge}
                        </span>
                      )}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#786352] dark:text-[#b5a393] bg-[#f2eae0] dark:bg-[#272019] px-2.5 py-1 rounded-md">
                      <Calendar className="w-3 h-3 text-[#a0620f] dark:text-[#f5b942]" />
                      <span>{period}</span>
                    </div>
                  </div>

                  {/* Company & Location */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#a0620f] dark:text-[#f5b942] mb-4">
                    <Building className="w-4 h-4 shrink-0" />
                    <span>{exp.company}</span>
                    {exp.location && (
                      <>
                        <span className="text-[#e7dcce] dark:text-[#33281f]">•</span>
                        <span className="text-[#786352] dark:text-[#b5a393] text-xs font-normal">
                          {exp.location}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Optional Description */}
                  {exp.description && (
                    <p className="text-sm text-[#786352] dark:text-[#b5a393] mb-3 italic">
                      {exp.description[lang] || exp.description.vi}
                    </p>
                  )}

                  {/* Bullet Points */}
                  <ul className="space-y-2 text-sm text-[#786352] dark:text-[#b5a393]">
                    {bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#a0620f] dark:text-[#f5b942] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
