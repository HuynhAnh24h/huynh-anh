'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Briefcase, Code, Smartphone, Award } from 'lucide-react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = '', duration = 1500 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { lang, t } = useLanguage();

  const stats = [
    {
      targetNumber: 3,
      suffix: '+',
      label: t.stats.experienceYears,
      desc: lang === 'vi' ? 'Lập trình Web, Mobile & IT' : 'Web, Mobile & IT Operations',
      icon: Briefcase,
    },
    {
      targetNumber: 4,
      suffix: '+',
      label: t.stats.companiesWorked,
      desc: lang === 'vi' ? 'Digital Creations, Kornbest, ICAVIET...' : 'Digital Creations, Kornbest, ICAVIET...',
      icon: Award,
    },
    {
      targetNumber: 10,
      suffix: '+',
      label: t.stats.appsBuilt,
      desc: lang === 'vi' ? 'Mobile App, Next.js, Shopify, WP' : 'Mobile App, Next.js, Shopify, WP',
      icon: Smartphone,
    },
    {
      targetNumber: 100,
      suffix: '%',
      label: t.stats.clientSatisfaction,
      desc: lang === 'vi' ? 'Cam kết chất lượng & đúng tiến độ' : 'Committed to quality & deadlines',
      icon: Code,
    },
  ];

  return (
    <section className="py-8 border-y border-[#e7dcce] dark:border-[#33281f] bg-white/40 dark:bg-[#15110e]/40 backdrop-blur-xs relative z-10">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-5 rounded-2xl border border-[#e7dcce]/80 dark:border-[#33281f]/80 bg-white/80 dark:bg-[#1e1813]/80 hover:border-[#a0620f]/60 dark:hover:border-[#f5b942]/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#a0620f]/10 dark:hover:shadow-[#f5b942]/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl md:text-4xl font-extrabold text-[#a0620f] dark:text-[#f5b942] tracking-tight font-mono">
                    <AnimatedCounter end={item.targetNumber} suffix={item.suffix} />
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-bold text-sm text-[#2a1f14] dark:text-[#f5ece4] group-hover:text-[#a0620f] dark:group-hover:text-[#f5b942] transition-colors">
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
