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
    <section id="experience" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-5">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.experience.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.experience.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12">
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
                      ? 'bg-emerald-500 border-white dark:border-slate-950 shadow-md shadow-emerald-500/40'
                      : 'bg-slate-300 dark:bg-slate-700 border-white dark:border-slate-950'
                  }`}
                />

                {/* Card Container */}
                <div
                  className={`p-6 md:p-7 rounded-2xl border transition-all duration-200 ${
                    isDigitalCreations
                      ? 'bg-emerald-50/30 dark:bg-emerald-950/20 border-emerald-500/30 shadow-md shadow-emerald-500/5'
                      : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      {role}
                      {exp.isCurrent && (
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500 text-white">
                          {t.experience.currentBadge}
                        </span>
                      )}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3 h-3 text-emerald-500" />
                      <span>{period}</span>
                    </div>
                  </div>

                  {/* Company & Location */}
                  <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4">
                    <Building className="w-4 h-4 shrink-0" />
                    <span>{exp.company}</span>
                    {exp.location && (
                      <>
                        <span className="text-slate-300 dark:text-slate-700">•</span>
                        <span className="text-slate-500 dark:text-slate-400 text-xs font-normal">
                          {exp.location}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Optional Description */}
                  {exp.description && (
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 italic">
                      {exp.description[lang] || exp.description.vi}
                    </p>
                  )}

                  {/* Bullet Points */}
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    {bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
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
