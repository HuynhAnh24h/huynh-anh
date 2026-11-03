'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { ProfileData } from '@/lib/types';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  Smartphone, 
  Globe2, 
  CheckCircle2, 
  Copy, 
  Check 
} from 'lucide-react';

interface HeroProps {
  profile: ProfileData;
}

export function Hero({ profile }: HeroProps) {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  // Typewriter effect
  const roles = t.hero.roles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        const nextText = isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  const copyCode = () => {
    const snippet = `const developer = {
  name: "Huỳnh Anh",
  role: "Frontend Developer",
  company: "Digital Creations",
  specialties: ["Mobile Apps", "Web Development"],
  techStack: ["Next.js", "React Native", "TypeScript", "Tailwind", "Supabase"],
  cms: ["Shopify", "WordPress"],
  location: "Tây Ninh & TP.HCM, VN",
  status: "Open to exciting projects"
};`;
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Company Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{lang === 'vi' ? 'Frontend Developer tại Digital Creations' : 'Frontend Developer at Digital Creations'}</span>
            </div>

            {/* Main Greeting & Name */}
            <div>
              <p className="text-sm md:text-base font-mono font-medium text-emerald-600 dark:text-emerald-400 mb-1">
                {t.hero.greeting}
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
                {profile.fullName}
              </h1>
            </div>

            {/* Dynamic Typing Role */}
            <div className="text-lg sm:text-2xl font-medium text-slate-700 dark:text-slate-300 flex items-center min-h-[44px]">
              <span>{t.hero.roleIntro}&nbsp;</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                {currentText}
              </span>
              <span className="w-0.5 h-6 bg-emerald-500 ml-1 animate-cursor inline-block" />
            </div>

            {/* Short Bio */}
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              {profile.shortBio[lang] || profile.shortBio.vi}
            </p>

            {/* Capability highlights pills */}
            <div className="flex flex-wrap gap-2 text-xs font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <Smartphone className="w-3.5 h-3.5 text-emerald-500" />
                <span>{lang === 'vi' ? 'Ứng dụng Mobile (React Native)' : 'Mobile Apps (React Native)'}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <Globe2 className="w-3.5 h-3.5 text-blue-500" />
                <span>{lang === 'vi' ? 'Website & Web Apps (Next.js/React)' : 'Websites & Apps (Next.js/React)'}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                <span>Shopify & WordPress</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-600 active:scale-98 text-white shadow-lg shadow-emerald-500/25 transition-all duration-200"
              >
                <span>{t.hero.contactBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-emerald-500/60 text-slate-800 dark:text-slate-200 hover:text-emerald-500 transition-all duration-200"
              >
                <span>{t.hero.viewProjectsBtn}</span>
              </Link>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/80 dark:border-slate-800/80">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                {profile.email}
              </a>
              <span className="hidden sm:inline">•</span>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                {profile.phone}
              </a>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {profile.location[lang] || profile.location.vi}
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl dark:shadow-2xl dark:shadow-emerald-950/20">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                    huynhanh.profile.ts
                  </span>
                </div>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-emerald-500 transition-colors"
                  title="Copy code snippet"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Code Content */}
              <div className="p-5 font-mono text-[12.5px] sm:text-xs leading-relaxed overflow-x-auto text-slate-800 dark:text-slate-200 bg-slate-50/50 dark:bg-slate-950/70">
                <div>
                  <span className="text-purple-600 dark:text-purple-400">export const </span>
                  <span className="text-blue-600 dark:text-blue-400">developer</span>
                  <span className="text-slate-600 dark:text-slate-400">: </span>
                  <span className="text-yellow-600 dark:text-yellow-400">DeveloperProfile</span>
                  <span className="text-slate-600 dark:text-slate-400"> = {'{'}</span>
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">name: </span>
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;Huỳnh Anh&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">currentRole: </span>
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;Frontend Developer&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">company: </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">&quot;Digital Creations&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">specialties: </span>
                  <span className="text-slate-600 dark:text-slate-400">[</span>
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;Mobile Apps&quot;</span>
                  <span className="text-slate-600 dark:text-slate-400">, </span>
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;Web Development&quot;</span>
                  <span className="text-slate-600 dark:text-slate-400">]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">techStack: </span>
                  <span className="text-slate-600 dark:text-slate-400">[</span>
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;Next.js&quot;</span>,{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;React Native&quot;</span>,{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;TypeScript&quot;</span>,{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;Supabase&quot;</span>
                  <span className="text-slate-600 dark:text-slate-400">]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">cms: </span>
                  <span className="text-slate-600 dark:text-slate-400">[</span>
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;Shopify Theme&quot;</span>,{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;WordPress&quot;</span>
                  <span className="text-slate-600 dark:text-slate-400">]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-slate-400">status: </span>
                  <span className="text-emerald-600 dark:text-emerald-400">&quot;Active & Open to collaborate&quot;</span>,
                </div>
                <div>
                  <span className="text-slate-600 dark:text-slate-400">{'}'};</span>
                </div>
                <div className="pt-2 text-slate-400 dark:text-slate-500 text-[11px]">
                  // Contact: anhdev24h@gmail.com | 0776 980 269
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="px-4 py-2.5 bg-slate-100/60 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {t.hero.statusAvailable}
                </span>
                <span className="text-slate-400 text-[11px] font-mono">
                  TypeScript • Supabase Ready
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
