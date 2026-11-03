'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
  Settings2
} from 'lucide-react';
import { GithubIcon } from './icons';

interface ProjectsProps {
  projects: ProjectItem[];
}

export function Projects({ projects }: ProjectsProps) {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: t.projects.filterAll, icon: Layers },
    { id: 'mobile', label: t.projects.filterMobile, icon: Smartphone },
    { id: 'web', label: t.projects.filterWeb, icon: Globe2 },
    { id: 'shopify', label: t.projects.filterShopify, icon: ShoppingBag },
    { id: 'wordpress', label: t.projects.filterWordpress, icon: Globe2 },
  ];

  const filtered = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  const getCategoryBadge = (cat: ProjectItem['category']) => {
    switch (cat) {
      case 'mobile':
        return { label: 'Mobile App', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30' };
      case 'web':
        return { label: 'Web & App', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30' };
      case 'shopify':
        return { label: 'Shopify', color: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30' };
      case 'wordpress':
        return { label: 'WordPress', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30' };
      default:
        return { label: cat, color: 'bg-slate-500/10 text-slate-600 border-slate-500/30' };
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{t.projects.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.projects.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 border ${
                  isActive
                    ? 'bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/25'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-500 dark:text-slate-400 text-sm">
            {t.projects.empty}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((proj) => {
              const badge = getCategoryBadge(proj.category);
              const title = lang === 'en' && proj.titleEn ? proj.titleEn : proj.title;
              const description = lang === 'en' && proj.descriptionEn ? proj.descriptionEn : proj.description;

              return (
                <div
                  key={proj.id}
                  className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 overflow-hidden hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="p-6">
                    {/* Top Row: Category badge & Featured indicator */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${badge.color}`}>
                        {badge.label}
                      </span>
                      {proj.featured && (
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-500 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                          <Sparkles className="w-2.5 h-2.5" />
                          {t.projects.featuredBadge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {description}
                    </p>

                    {/* Tags */}
                    {proj.tags && proj.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Actions Footer */}
                  <div className="p-4 px-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>{t.projects.viewLive}</span>
                        </a>
                      )}
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>{t.projects.sourceCode}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Quick Admin Edit Project hint */}
        <div className="mt-12 text-center">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-emerald-500 transition-colors py-2 px-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-800 hover:border-emerald-500/50"
          >
            <Settings2 className="w-3.5 h-3.5" />
            <span>
              {lang === 'vi'
                ? 'Bạn muốn thêm hoặc chỉnh sửa dự án? Vào Cổng Quản Trị Admin'
                : 'Want to add or manage your projects? Open Admin Portal'}
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
