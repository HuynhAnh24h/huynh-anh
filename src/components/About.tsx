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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <span>{t.about.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.about.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            {t.about.subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Bio Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm">
              
              <div className="flex items-center gap-3 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white text-xl font-bold font-mono shadow-md shadow-emerald-500/20">
                  HA
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    {profile.fullName}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Digital Creations • Frontend Developer</span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraph */}
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                {profile.aboutMe[lang] || profile.aboutMe.vi}
              </p>

              {/* Contact mini list */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{profile.location[lang] || profile.location.vi}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                  <a href={`mailto:${profile.email}`} className="hover:text-emerald-500">
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="hover:text-emerald-500">
                    {profile.phone}
                  </a>
                </div>
              </div>

              {/* Key points badge list */}
              <div className="pt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                  Mobile & Web Ready
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
                  <CheckCircle className="w-3 h-3 text-blue-500" />
                  Clean Code
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60">
                  <CheckCircle className="w-3 h-3 text-purple-500" />
                  Fast Delivery
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
                  className="p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:border-emerald-500/50 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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
