'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { SkillItem } from '@/lib/types';
import { 
  Code, 
  Smartphone, 
  ShoppingBag, 
  Server, 
  CheckCircle2,
  Terminal,
  Cpu
} from 'lucide-react';

interface SkillsProps {
  skills: SkillItem[];
}

export function Skills({ skills }: SkillsProps) {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: lang === 'vi' ? 'Tất cả kỹ năng' : 'All Skills', icon: Cpu },
    { id: 'frontend', label: t.skills.frontend, icon: Code },
    { id: 'mobile', label: t.skills.mobile, icon: Smartphone },
    { id: 'cms', label: t.skills.cms, icon: ShoppingBag },
    { id: 'backend_it', label: t.skills.backendIt, icon: Server },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  const itBulletPointsVi = [
    'Thiết kế sơ đồ mạng, chia VLAN quản lý, cấu hình IP camera doanh nghiệp.',
    'Lắp đặt phòng máy, theo dõi bảo dưỡng định kỳ và lập kế hoạch thay thế thiết bị.',
    'Cài đặt & tối ưu hệ điều hành Windows, macOS; xử lý sự cố thiết bị iOS/Android.',
    'Bảo trì, thay thế vật tư máy in, photocopy; vệ sinh máy tính PC & MacBook.',
    'Tăng cường bảo mật website doanh nghiệp, ngăn chặn tấn công SQL Injection và mã độc.'
  ];

  const itBulletPointsEn = [
    'Network topology design, VLAN subnetting, and enterprise IP security cameras.',
    'Workstation lab deployment, scheduled hardware maintenance, and upgrade planning.',
    'OS provisioning & hardening for Windows & macOS; mobile iOS/Android troubleshooting.',
    'Office peripheral maintenance (printers, copiers) and hardware cleaning for PC/MacBook.',
    'Web security hardening, preventing SQL Injection vulnerabilities and malicious probing.'
  ];

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>{t.skills.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.skills.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl">
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
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 border ${
                  isActive
                    ? 'bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/25'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:border-emerald-500/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                  {skill.name}
                </span>
                <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {skill.proficiency}%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-1000"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* IT & Systems highlight card */}
        <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                {lang === 'vi' ? 'Hạ tầng IT & Quản trị Hệ thống' : 'IT Infrastructure & Systems Administration'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'vi' ? 'Kinh nghiệm thực tế từ Kornbest & ICAVIET' : 'Enterprise background from Kornbest & ICAVIET'}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {(lang === 'vi' ? itBulletPointsVi : itBulletPointsEn).map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">Tools:</span>
            {['Git', 'GitHub', 'GitLab', 'SourceTree', 'Postman', 'Figma', 'Vercel', 'Supabase', 'Cloudflare'].map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
