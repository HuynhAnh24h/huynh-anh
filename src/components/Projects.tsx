'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { ProjectItem } from '@/lib/types';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Smartphone, 
  Globe2, 
  ShoppingBag,
  Cpu,
  Network,
  ShieldCheck,
  Server,
  FileSpreadsheet,
  ArrowRight
} from 'lucide-react';
import { GithubIcon } from './icons';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsProps {
  projects: ProjectItem[];
}

export function Projects({ projects }: ProjectsProps) {
  const { lang, t } = useLanguage();
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Lấy dự án trọng điểm (KTS TimeAttendance)
  const flagshipProject = projects[0];

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#f2eae0]/40 dark:bg-[#120e0b]/40">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] border border-[#a0620f]/20 dark:border-[#f5b942]/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'vi' ? 'Dự Án Trọng Điểm &bull; Flagship Project' : 'Flagship Enterprise Suite'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#2a1f14] dark:text-[#f5ece4]">
            {t.projects.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#786352] dark:text-[#b5a393] max-w-2xl leading-relaxed">
            {lang === 'vi' 
              ? 'Hệ thống chấm công doanh nghiệp Native Desktop và nền tảng Cloud SaaS được Huỳnh Anh nghiên cứu, thiết kế kiến trúc và phát triển toàn diện.'
              : 'Enterprise Biometric Native Desktop system and Cloud SaaS platform engineered and architected end-to-end by Huynh Anh.'}
          </p>
        </div>

        {/* Flagship Hero Showcase Card */}
        {flagshipProject && (
          <div className="rounded-3xl border-2 border-[#a0620f]/40 dark:border-[#f5b942]/40 bg-white/95 dark:bg-[#1a1410]/95 shadow-2xl shadow-[#a0620f]/10 dark:shadow-[#f5b942]/10 overflow-hidden">
            
            {/* Top Bar Preview */}
            <div className="p-6 sm:p-8 border-b border-[#e7dcce] dark:border-[#33281f] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-3">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Desktop Native App + Cloud MERN Serverless</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2a1f14] dark:text-[#f5ece4] tracking-tight">
                  {lang === 'en' && flagshipProject.titleEn ? flagshipProject.titleEn : flagshipProject.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#786352] dark:text-[#b5a393] leading-relaxed max-w-3xl">
                  {lang === 'en' && flagshipProject.descriptionEn ? flagshipProject.descriptionEn : flagshipProject.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <button
                  onClick={() => setIsDetailOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white shadow-lg shadow-sky-600/25 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{lang === 'vi' ? 'Xem Chi Tiết Dự Án & Vận Hành' : 'View Architecture & Operations'}</span>
                </button>

                <a
                  href={flagshipProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Web Portal ↗</span>
                </a>
              </div>
            </div>

            {/* 4 Architectural Highlights */}
            <div className="p-6 sm:p-8 bg-slate-500/5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-[#201913] border border-[#e7dcce] dark:border-[#33281f]">
                <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                  Hybrid Native Desktop
                </h4>
                <p className="text-[11px] text-[#786352] dark:text-[#b5a393] leading-relaxed">
                  Python 3.14 FastAPI + React 19 nhúng qua Edge WebView2, mở trong 0.5s, không hiện cửa sổ CMD.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#201913] border border-[#e7dcce] dark:border-[#33281f]">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <Network className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                  Radar Quét LAN 0.7s
                </h4>
                <p className="text-[11px] text-[#786352] dark:text-[#b5a393] leading-relaxed">
                  64 workers rà quét 254 IP, tự động nhận diện ZKTeco, Ronald Jack, Gigata T9 qua cổng 4370 UDP.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#201913] border border-[#e7dcce] dark:border-[#33281f]">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                  Auto-Shift & Excel 31 Ngày
                </h4>
                <p className="text-[11px] text-[#786352] dark:text-[#b5a393] leading-relaxed">
                  Tự động so khớp ca kíp 24/7, lọc quẹt thẻ trùng và xuất ma trận Excel 31 ngày chuẩn Luật Lao Động.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#201913] border border-[#e7dcce] dark:border-[#33281f]">
                <div className="w-8 h-8 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                  Khóa Bản Quyền & Xóa 30 Ngày
                </h4>
                <p className="text-[11px] text-[#786352] dark:text-[#b5a393] leading-relaxed">
                  Mã hóa theo Machine ID + Tên công ty (HMAC). Hết hạn khóa tính năng, tự xóa sạch dữ liệu sau 30 ngày.
                </p>
              </div>
            </div>

            {/* Tags & Repositories Footer */}
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#e7dcce] dark:border-[#33281f]">
              <div className="flex flex-wrap gap-2">
                {flagshipProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-[#f8f3ec] dark:bg-[#272019] text-[#786352] dark:text-[#b5a393] border border-[#e7dcce] dark:border-[#33281f]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://github.com/HuynhAnh24h/kts-cham-cong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#786352] dark:text-[#b5a393] hover:text-sky-600 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Desktop Repo</span>
                </a>
                <span className="text-slate-300 dark:text-slate-700">&bull;</span>
                <a
                  href="https://github.com/HuynhAnh24h/KTS_TimeAttendance_ladingpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#786352] dark:text-[#b5a393] hover:text-sky-600 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>SaaS Repo</span>
                </a>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Interactive Detail Modal */}
      <ProjectDetailModal
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        lang={lang}
      />
    </section>
  );
}
