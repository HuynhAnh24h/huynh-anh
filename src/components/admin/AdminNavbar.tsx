'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../LanguageContext';
import { ThemeToggle } from '../ThemeToggle';
import { LanguageToggle } from '../LanguageToggle';
import { 
  ArrowLeft, 
  FolderGit2, 
  UserCheck, 
  Mail, 
  Database, 
  LogOut,
  ShieldCheck
} from 'lucide-react';

interface AdminNavbarProps {
  activeTab: 'projects' | 'profile' | 'messages' | 'settings';
  setActiveTab: (tab: 'projects' | 'profile' | 'messages' | 'settings') => void;
  unreadCount: number;
  onLogout: () => void;
}

export function AdminNavbar({
  activeTab,
  setActiveTab,
  unreadCount,
  onLogout,
}: AdminNavbarProps) {
  const { lang, t } = useLanguage();

  const tabs = [
    { id: 'projects' as const, label: t.admin.projectsTab, icon: FolderGit2 },
    { id: 'profile' as const, label: t.admin.profileTab, icon: UserCheck },
    { 
      id: 'messages' as const, 
      label: t.admin.messagesTab, 
      icon: Mail, 
      badge: unreadCount > 0 ? unreadCount : undefined 
    },
    { id: 'settings' as const, label: t.admin.settingsTab, icon: Database },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t.admin.backToSite}</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-slate-200 dark:border-slate-800">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="font-bold text-sm text-slate-900 dark:text-white">
              Admin Control Panel
            </span>
          </div>
        </div>

        {/* Center Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto py-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all relative ${
                  isActive
                    ? 'bg-emerald-500 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{tab.label}</span>
                {tab.badge && (
                  <span className="w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] flex items-center justify-center font-bold">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={onLogout}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-rose-500 hover:border-rose-500/30 transition-colors"
            title={t.admin.logout}
            aria-label={t.admin.logout}
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
}
