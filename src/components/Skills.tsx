'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { SkillItem } from '@/lib/types';
import { 
  Terminal, 
  Sparkles,
  Layers,
  Code2,
  Server
} from 'lucide-react';
import {
  WordPressIcon,
  WooCommerceIcon,
  ElementorIcon,
  FlatsomeIcon,
  PhpIcon,
  ReactIcon,
  TypeScriptIcon,
  ReduxIcon,
  Html5Icon,
  Css3Icon,
  JavaScriptIcon,
  NodeIcon,
  MongoIcon
} from './icons';

interface SkillsProps {
  skills: SkillItem[];
}

export function Skills({ skills }: SkillsProps) {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', label: t.skills.all, icon: Layers },
    { id: 'wordpress', label: t.skills.wordpress, icon: WordPressIcon },
    { id: 'react', label: t.skills.react, icon: ReactIcon },
    { id: 'frontend', label: t.skills.frontend, icon: Code2 },
    { id: 'backend', label: t.skills.backend, icon: Server },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  // Helper to render brand icon by name
  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case 'wordpress':
        return <WordPressIcon className="w-7 h-7 shrink-0 text-[#21759B]" />;
      case 'woocommerce':
        return <WooCommerceIcon className="w-7 h-7 shrink-0" />;
      case 'elementor':
        return <ElementorIcon className="w-7 h-7 shrink-0" />;
      case 'flatsome':
        return <FlatsomeIcon className="w-7 h-7 shrink-0" />;
      case 'php':
        return <PhpIcon className="w-7 h-7 shrink-0" />;
      case 'react':
        return <ReactIcon className="w-7 h-7 shrink-0" />;
      case 'typescript':
        return <TypeScriptIcon className="w-7 h-7 shrink-0" />;
      case 'redux':
        return <ReduxIcon className="w-7 h-7 shrink-0" />;
      case 'html5':
        return <Html5Icon className="w-7 h-7 shrink-0" />;
      case 'css3':
        return <Css3Icon className="w-7 h-7 shrink-0" />;
      case 'javascript':
        return <JavaScriptIcon className="w-7 h-7 shrink-0" />;
      case 'node':
        return <NodeIcon className="w-7 h-7 shrink-0" />;
      case 'mongo':
        return <MongoIcon className="w-7 h-7 shrink-0" />;
      default:
        return <Code2 className="w-7 h-7 text-[#a0620f] dark:text-[#f5b942] shrink-0" />;
    }
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] border border-[#a0620f]/20 dark:border-[#f5b942]/30 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>{t.skills.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2a1f14] dark:text-[#f5ece4]">
            {t.skills.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#786352] dark:text-[#b5a393] max-w-xl">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-[#a0620f] dark:bg-[#f5b942] text-white dark:text-[#15110e] border-transparent shadow-md shadow-[#f5b942]/20 font-bold scale-102'
                    : 'bg-white dark:bg-[#1e1813] border-[#e7dcce] dark:border-[#33281f] text-[#786352] dark:text-[#b5a393] hover:text-[#2a1f14] dark:hover:text-[#f5ece4] hover:border-[#a0620f]/40 dark:hover:border-[#f5b942]/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              className="p-5 sm:p-6 rounded-2xl border border-[#e7dcce] dark:border-[#33281f] bg-white/90 dark:bg-[#1e1813]/90 hover:border-[#a0620f]/60 dark:hover:border-[#f5b942]/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#a0620f]/10 dark:hover:shadow-[#f5b942]/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Logo + Title + Percent */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#f8f3ec] dark:bg-[#272019] border border-[#e7dcce] dark:border-[#33281f] shadow-xs group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      {renderIcon(skill.iconName)}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#2a1f14] dark:text-[#f5ece4] group-hover:text-[#a0620f] dark:group-hover:text-[#f5b942] transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                  </div>

                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] border border-[#a0620f]/20 dark:border-[#f5b942]/30 group-hover:scale-105 transition-transform">
                    {skill.proficiency}%
                  </span>
                </div>

                {/* Subtitle / Details */}
                {skill.subtitle && (
                  <p className="text-xs text-[#786352] dark:text-[#b5a393] leading-relaxed mb-4">
                    {skill.subtitle}
                  </p>
                )}
              </div>

              {/* Progress Bar */}
              <div className="w-full pt-1">
                <div className="w-full h-2 rounded-full bg-[#f2eae0] dark:bg-[#272019] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#a0620f] via-[#df9b20] to-[#f5b942] transition-all duration-1000 ease-out"
                    style={{
                      width: isInView ? `${skill.proficiency}%` : '0%',
                      transitionDelay: `${index * 60}ms`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights banner */}
        <div className="p-6 md:p-8 rounded-3xl border border-[#e7dcce] dark:border-[#33281f] bg-gradient-to-r from-[#a0620f]/10 via-[#f5b942]/10 to-transparent flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-bold text-base sm:text-lg text-[#2a1f14] dark:text-[#f5ece4] flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#a0620f] dark:text-[#f5b942]" />
              <span>
                {lang === 'vi'
                  ? 'Kinh nghiệm thực chiến sâu với Theme WordPress & React Ecosystem'
                  : 'Deep production experience with WordPress Themes & React Ecosystem'}
              </span>
            </h4>
            <p className="text-xs sm:text-sm text-[#786352] dark:text-[#b5a393] max-w-2xl">
              {lang === 'vi'
                ? 'Tự tay lập trình và tùy biến giao diện từ bản vẽ Figma, tối ưu tốc độ tải trang, chuẩn SEO, tương thích mobile và kết nối REST API mượt mà.'
                : 'Pixel-perfect development from Figma designs, high-speed page load optimization, strict SEO, mobile responsiveness, and fluid API integration.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#a0620f] hover:bg-[#854f0a] dark:bg-[#f5b942] dark:hover:bg-[#df9b20] text-white dark:text-[#15110e] shadow-md shadow-[#f5b942]/20 transition-all"
            >
              {lang === 'vi' ? 'Xem các dự án đã làm' : 'View Related Projects'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
