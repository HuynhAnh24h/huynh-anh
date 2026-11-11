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
  ShoppingBag
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
      case 'desktop':
      case 'fullstack':
        return { label: 'Desktop & SaaS', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30' };
      case 'mobile':
        return { label: 'Mobile App', color: 'bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] border-[#a0620f]/30 dark:border-[#f5b942]/30' };
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
    <section id="projects" className="py-20 md:py-28 bg-[#f2eae0]/40 dark:bg-[#120e0b]/40">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] border border-[#a0620f]/20 dark:border-[#f5b942]/30 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{t.projects.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2a1f14] dark:text-[#f5ece4]">
            {t.projects.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#786352] dark:text-[#b5a393] max-w-xl">
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
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 border cursor-pointer ${
                  isActive
                    ? 'bg-[#a0620f] dark:bg-[#f5b942] text-white dark:text-[#15110e] border-transparent shadow-md shadow-[#f5b942]/20 font-bold'
                    : 'bg-white dark:bg-[#1e1813] border-[#e7dcce] dark:border-[#33281f] text-[#786352] dark:text-[#b5a393] hover:text-[#2a1f14] dark:hover:text-[#f5ece4] hover:border-[#a0620f]/40 dark:hover:border-[#f5b942]/40'
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
          <div className="text-center py-16 text-[#786352] dark:text-[#b5a393] text-sm">
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
                  className="group rounded-2xl border border-[#e7dcce] dark:border-[#33281f] bg-white/95 dark:bg-[#1e1813]/95 overflow-hidden hover:border-[#a0620f]/60 dark:hover:border-[#f5b942]/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#a0620f]/15 dark:hover:shadow-[#f5b942]/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {proj.imageUrl && (
                      <div className="relative w-full h-44 overflow-hidden bg-[#221a14] border-b border-[#e7dcce]/60 dark:border-[#33281f]">
                        <img
                          src={proj.imageUrl}
                          alt={title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-108"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                            <ExternalLink className="w-3.5 h-3.5" />
                            {lang === 'vi' ? 'Khám phá dự án' : 'Explore Project'}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="p-6">
                      {/* Top Row: Category badge & Featured indicator */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${badge.color}`}>
                          {badge.label}
                        </span>
                        {proj.featured && (
                          <span className="flex items-center gap-1 text-[11px] font-semibold text-[#a0620f] dark:text-[#f5b942] bg-[#a0620f]/10 dark:bg-[#f5b942]/15 px-2 py-0.5 rounded-full border border-[#a0620f]/20 dark:border-[#f5b942]/30">
                            <Sparkles className="w-2.5 h-2.5" />
                            {t.projects.featuredBadge}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-lg text-[#2a1f14] dark:text-[#f5ece4] group-hover:text-[#a0620f] dark:group-hover:text-[#f5b942] transition-colors">
                        {title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-xs sm:text-sm text-[#786352] dark:text-[#b5a393] leading-relaxed line-clamp-3">
                        {description}
                      </p>

                      {/* Tags */}
                      {proj.tags && proj.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {proj.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-[#f8f3ec] dark:bg-[#272019] text-[#786352] dark:text-[#b5a393] border border-[#e7dcce] dark:border-[#33281f] group-hover:border-[#a0620f]/30 dark:group-hover:border-[#f5b942]/30 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="p-4 px-6 border-t border-[#e7dcce]/60 dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-bold text-[#a0620f] dark:text-[#f5b942] hover:underline"
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
                          className="flex items-center gap-1.5 text-xs font-semibold text-[#786352] dark:text-[#b5a393] hover:text-[#2a1f14] dark:hover:text-[#f5ece4]"
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

      </div>
    </section>
  );
}
