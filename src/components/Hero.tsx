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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] border border-[#a0620f]/20 dark:border-[#f5b942]/30">
              <span className="w-2 h-2 rounded-full bg-[#a0620f] dark:bg-[#f5b942] animate-pulse" />
              <span>{lang === 'vi' ? 'Frontend Developer tại Digital Creations' : 'Frontend Developer at Digital Creations'}</span>
            </div>

            {/* Main Greeting & Name with Avatar */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="relative shrink-0 group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-2xl overflow-hidden ring-3 ring-[#a0620f]/40 dark:ring-[#f5b942]/50 shadow-xl shadow-[#a0620f]/15 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={profile.avatarUrl || '/huynh-anh.jpg'}
                    alt={profile.fullName}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <span
                  className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#f8f3ec] dark:border-[#15110e] shadow-xs"
                  title="Online • Open to Work"
                />
              </div>

              <div>
                <p className="text-sm md:text-base font-mono font-medium text-[#a0620f] dark:text-[#f5b942] mb-1">
                  {t.hero.greeting}
                </p>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#2a1f14] dark:text-[#f5ece4] leading-[1.08]">
                  {profile.fullName}
                </h1>
              </div>
            </div>

            {/* Dynamic Typing Role */}
            <div className="text-lg sm:text-2xl font-medium text-[#2a1f14] dark:text-[#f5ece4] flex items-center min-h-[44px]">
              <span>{t.hero.roleIntro}&nbsp;</span>
              <span className="font-semibold text-[#a0620f] dark:text-[#f5b942]">
                {currentText}
              </span>
              <span className="w-0.5 h-6 bg-[#a0620f] dark:bg-[#f5b942] ml-1 animate-cursor inline-block" />
            </div>

            {/* Short Bio */}
            <p className="text-base md:text-lg text-[#786352] dark:text-[#b5a393] leading-relaxed max-w-xl">
              {profile.shortBio[lang] || profile.shortBio.vi}
            </p>

            {/* Capability highlights pills */}
            <div className="flex flex-wrap gap-2 text-xs font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-[#1e1813] text-[#2a1f14] dark:text-[#f5ece4] border border-[#e7dcce] dark:border-[#33281f]">
                <Smartphone className="w-3.5 h-3.5 text-[#a0620f] dark:text-[#f5b942]" />
                <span>{lang === 'vi' ? 'Ứng dụng Mobile & Website' : 'Mobile Apps & Websites'}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-[#1e1813] text-[#2a1f14] dark:text-[#f5ece4] border border-[#e7dcce] dark:border-[#33281f]">
                <Globe2 className="w-3.5 h-3.5 text-[#a0620f] dark:text-[#f5b942]" />
                <span>Theme WordPress & WooCommerce</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-[#1e1813] text-[#2a1f14] dark:text-[#f5ece4] border border-[#e7dcce] dark:border-[#33281f]">
                <Sparkles className="w-3.5 h-3.5 text-[#a0620f] dark:text-[#f5b942]" />
                <span>React, TypeScript & Node.js</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#a0620f] hover:bg-[#854f0a] dark:bg-[#f5b942] dark:hover:bg-[#df9b20] active:scale-98 text-white dark:text-[#15110e] shadow-lg shadow-[#a0620f]/20 dark:shadow-[#f5b942]/25 transition-all duration-200"
              >
                <span>{t.hero.contactBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-[#1e1813] border border-[#e7dcce] dark:border-[#33281f] hover:border-[#a0620f] dark:hover:border-[#f5b942] text-[#2a1f14] dark:text-[#f5ece4] hover:text-[#a0620f] dark:hover:text-[#f5b942] transition-all duration-200"
              >
                <span>{t.hero.viewProjectsBtn}</span>
              </Link>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#786352] dark:text-[#b5a393] pt-2 border-t border-[#e7dcce] dark:border-[#33281f]">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 hover:text-[#a0620f] dark:hover:text-[#f5b942] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                {profile.email}
              </a>
              <span className="hidden sm:inline">•</span>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-[#a0620f] dark:hover:text-[#f5b942] transition-colors"
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
            <div className="relative rounded-2xl overflow-hidden border border-[#e7dcce] dark:border-[#33281f] bg-[#221a14] dark:bg-[#120e0b] shadow-xl dark:shadow-2xl">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#1a1410] dark:bg-[#0a0806] border-b border-[#33281f]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-[#f5b942]" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-[#b5a393]">
                    huynhanh.profile.ts
                  </span>
                </div>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1 text-[11px] font-mono text-[#b5a393] hover:text-[#f5b942] transition-colors cursor-pointer"
                  title="Copy code snippet"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#f5b942]" />
                      <span className="text-[#f5b942]">Copied</span>
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
              <div className="p-5 font-mono text-[12.5px] sm:text-xs leading-relaxed overflow-x-auto text-[#f5ece4] bg-[#221a14] dark:bg-[#120e0b]">
                <div>
                  <span className="text-[#ff7ab2]">export const </span>
                  <span className="text-[#7dd3fc]">developer</span>
                  <span className="text-[#b5a393]">: </span>
                  <span className="text-[#f5b942]">DeveloperProfile</span>
                  <span className="text-[#b5a393]"> = {'{'}</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#b5a393]">name: </span>
                  <span className="text-[#f5b942]">&quot;Huỳnh Anh&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#b5a393]">currentRole: </span>
                  <span className="text-[#f5b942]">&quot;Frontend Developer&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#b5a393]">company: </span>
                  <span className="text-[#f5b942] font-semibold">&quot;Digital Creations&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#b5a393]">specialties: </span>
                  <span className="text-[#b5a393]">[</span>
                  <span className="text-[#f5b942]">&quot;Theme WordPress&quot;</span>
                  <span className="text-[#b5a393]">, </span>
                  <span className="text-[#f5b942]">&quot;React & TypeScript&quot;</span>
                  <span className="text-[#b5a393]">]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#b5a393]">techStack: </span>
                  <span className="text-[#b5a393]">[</span>
                  <span className="text-[#f5b942]">&quot;React&quot;</span>,{' '}
                  <span className="text-[#f5b942]">&quot;Redux Toolkit&quot;</span>,{' '}
                  <span className="text-[#f5b942]">&quot;Node.js&quot;</span>,{' '}
                  <span className="text-[#f5b942]">&quot;MongoDB&quot;</span>
                  <span className="text-[#b5a393]">]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#b5a393]">cms: </span>
                  <span className="text-[#b5a393]">[</span>
                  <span className="text-[#f5b942]">&quot;WordPress Custom&quot;</span>,{' '}
                  <span className="text-[#f5b942]">&quot;WooCommerce&quot;</span>,{' '}
                  <span className="text-[#f5b942]">&quot;Flatsome&quot;</span>
                  <span className="text-[#b5a393]">]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#b5a393]">status: </span>
                  <span className="text-[#f5b942]">&quot;Active & Open to collaborate&quot;</span>,
                </div>
                <div>
                  <span className="text-[#b5a393]">{'}'};</span>
                </div>
                <div className="pt-2 text-[#b5a393]/70 text-[11px]">
                  // Contact: anhdev24h@gmail.com | 0776 980 269
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="px-4 py-2.5 bg-[#1a1410] dark:bg-[#0a0806] border-t border-[#33281f] flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-[#f5b942] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {t.hero.statusAvailable}
                </span>
                <span className="text-[#b5a393] text-[11px] font-mono">
                  WordPress • React • Node
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
