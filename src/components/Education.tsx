'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { initialEducation, initialCertificates } from '@/lib/mock-data';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';

export function Education() {
  const { lang, t } = useLanguage();

  return (
    <section id="education" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.education.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.education.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl">
            {t.education.subtitle}
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Degree Card */}
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  {t.education.degrees}
                </h3>
                <span className="text-xs text-slate-500">Chính quy 2017 - 2023</span>
              </div>
            </div>

            {initialEducation.map((item) => (
              <div key={item.id} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    {item.school[lang] || item.school.vi}
                  </h4>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  {item.degree[lang] || item.degree.vi}
                </p>
                {item.details && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.details[lang] || item.details.vi}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Certificates Card */}
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  {t.education.certificates}
                </h3>
                <span className="text-xs text-slate-500">Chứng nhận năng lực chuyên môn</span>
              </div>
            </div>

            <div className="space-y-4">
              {initialCertificates.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {cert.title[lang] || cert.title.vi}
                      </span>
                      {cert.issuer && (
                        <p className="text-xs text-slate-400 mt-0.5">
                          {cert.issuer}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="font-mono text-xs font-semibold px-2 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
