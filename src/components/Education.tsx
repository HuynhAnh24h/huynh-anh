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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] border border-[#a0620f]/20 dark:border-[#f5b942]/30 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.education.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2a1f14] dark:text-[#f5ece4]">
            {t.education.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#786352] dark:text-[#b5a393] max-w-xl">
            {t.education.subtitle}
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Degree Card */}
          <div className="p-6 md:p-8 rounded-2xl border border-[#e7dcce] dark:border-[#33281f] bg-white/90 dark:bg-[#1e1813]/90">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#2a1f14] dark:text-[#f5ece4]">
                  {t.education.degrees}
                </h3>
                <span className="text-xs text-[#786352] dark:text-[#b5a393]">Chính quy 2017 - 2023</span>
              </div>
            </div>

            {initialEducation.map((item) => (
              <div key={item.id} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-base text-[#2a1f14] dark:text-[#f5ece4]">
                    {item.school[lang] || item.school.vi}
                  </h4>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#f8f3ec] dark:bg-[#272019] text-[#786352] dark:text-[#b5a393] border border-[#e7dcce] dark:border-[#33281f]">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#a0620f] dark:text-[#f5b942]">
                  {item.degree[lang] || item.degree.vi}
                </p>
                {item.details && (
                  <p className="text-xs sm:text-sm text-[#786352] dark:text-[#b5a393] leading-relaxed">
                    {item.details[lang] || item.details.vi}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Certificates Card */}
          <div className="p-6 md:p-8 rounded-2xl border border-[#e7dcce] dark:border-[#33281f] bg-white/90 dark:bg-[#1e1813]/90">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942]">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#2a1f14] dark:text-[#f5ece4]">
                  {t.education.certificates}
                </h3>
                <span className="text-xs text-[#786352] dark:text-[#b5a393]">Chứng nhận năng lực chuyên môn</span>
              </div>
            </div>

            <div className="space-y-4">
              {initialCertificates.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3.5 rounded-xl border border-[#e7dcce]/80 dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#a0620f] dark:text-[#f5b942] shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-[#2a1f14] dark:text-[#f5ece4]">
                        {cert.title[lang] || cert.title.vi}
                      </span>
                      {cert.issuer && (
                        <p className="text-xs text-[#786352] dark:text-[#b5a393] mt-0.5">
                          {cert.issuer}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-white dark:bg-[#1e1813] border border-[#e7dcce] dark:border-[#33281f] text-[#786352] dark:text-[#b5a393]">
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
