'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { ProfileData } from '@/lib/types';
import { 
  Smartphone, 
  Layers, 
  ShieldCheck, 
  Clock, 
  CheckCircle,
  Building2,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

interface AboutProps {
  profile: ProfileData;
}

export function About({ profile }: AboutProps) {
  const { lang, t } = useLanguage();

  const strengthIcons = [Smartphone, Layers, ShieldCheck, Clock];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] border border-[#a0620f]/20 dark:border-[#f5b942]/30 mb-3">
            <span>{t.about.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2a1f14] dark:text-[#f5ece4]">
            {t.about.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#786352] dark:text-[#b5a393] max-w-2xl">
            {t.about.subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Bio Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 md:p-8 rounded-2xl border border-[#e7dcce] dark:border-[#33281f] bg-white/90 dark:bg-[#1e1813]/90 backdrop-blur-md shadow-sm">
              
              <div className="flex items-center gap-3 pb-6 border-b border-[#e7dcce]/60 dark:border-[#33281f]">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#a0620f] to-[#f5b942] flex items-center justify-center text-white dark:text-[#15110e] text-xl font-bold font-mono shadow-md shadow-[#f5b942]/20">
                  HA
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#2a1f14] dark:text-[#f5ece4]">
                    {profile.fullName}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#a0620f] dark:text-[#f5b942] font-semibold mt-0.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Digital Creations • Frontend Developer</span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraph */}
              <p className="text-sm md:text-base text-[#786352] dark:text-[#b5a393] leading-relaxed pt-2">
                {profile.aboutMe[lang] || profile.aboutMe.vi}
              </p>

              {/* Contact mini list */}
              <div className="pt-4 border-t border-[#e7dcce]/60 dark:border-[#33281f] space-y-2.5 text-xs text-[#786352] dark:text-[#b5a393]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#a0620f] dark:text-[#f5b942] shrink-0" />
                  <span>{profile.location[lang] || profile.location.vi}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#a0620f] dark:text-[#f5b942] shrink-0" />
                  <a href={`mailto:${profile.email}`} className="hover:text-[#a0620f] dark:hover:text-[#f5b942]">
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#a0620f] dark:text-[#f5b942] shrink-0" />
                  <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="hover:text-[#a0620f] dark:hover:text-[#f5b942]">
                    {profile.phone}
                  </a>
                </div>
              </div>

              {/* Key points badge list */}
              <div className="pt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] border border-[#a0620f]/20 dark:border-[#f5b942]/30">
                  <CheckCircle className="w-3 h-3 text-[#a0620f] dark:text-[#f5b942]" />
                  Theme WordPress & Woo
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] border border-[#a0620f]/20 dark:border-[#f5b942]/30">
                  <CheckCircle className="w-3 h-3 text-[#a0620f] dark:text-[#f5b942]" />
                  React, TS & Redux
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] border border-[#a0620f]/20 dark:border-[#f5b942]/30">
                  <CheckCircle className="w-3 h-3 text-[#a0620f] dark:text-[#f5b942]" />
                  Node.js & MongoDB
                </span>
              </div>

            </div>
          </div>

          {/* Right Strengths Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {t.about.strengths.map((item, index) => {
              const Icon = strengthIcons[index] || Smartphone;
              return (
                <div
                  key={index}
                  className="p-5 md:p-6 rounded-2xl border border-[#e7dcce] dark:border-[#33281f] bg-white/80 dark:bg-[#1e1813]/80 hover:border-[#a0620f]/50 dark:hover:border-[#f5b942]/50 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-[#2a1f14] dark:text-[#f5ece4] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#786352] dark:text-[#b5a393] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
