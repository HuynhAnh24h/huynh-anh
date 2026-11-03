'use client';

import React, { useState, useEffect } from 'react';
import { AdminNavbar } from '@/components/admin/AdminNavbar';
import { ProjectManager } from '@/components/admin/ProjectManager';
import { ProfileManager } from '@/components/admin/ProfileManager';
import { MessagesManager } from '@/components/admin/MessagesManager';
import { SupabaseSetupGuide } from '@/components/admin/SupabaseSetupGuide';
import { 
  getProfile, 
  getProjects, 
  getContactMessages 
} from '@/lib/data-service';
import { ProfileData, ProjectItem, ContactMessage } from '@/lib/types';
import { useLanguage } from '@/components/LanguageContext';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageToggle } from '@/components/LanguageToggle';
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  AlertCircle 
} from 'lucide-react';

export default function AdminPage() {
  const { lang, t } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [activeTab, setActiveTab] = useState<'projects' | 'profile' | 'messages' | 'settings'>('projects');

  // State data
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  // Login form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);

  // Check auth session
  useEffect(() => {
    try {
      const session = localStorage.getItem('huynhanh_admin_auth');
      if (session === 'true') {
        setIsAuthenticated(true);
      }
    } catch {
      // Ignore
    } finally {
      setCheckingAuth(false);
    }
  }, []);

  // Fetch data
  const loadData = async () => {
    try {
      const [profData, projData, msgData] = await Promise.all([
        getProfile(),
        getProjects(),
        getContactMessages(),
      ]);
      setProfile(profData);
      setProjects(projData);
      setMessages(msgData);
    } catch (e) {
      console.error('Error fetching admin data:', e);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    // Simple robust admin check (email matching anhdev24h@gmail.com or admin credentials)
    if (
      (email === 'anhdev24h@gmail.com' && password === 'huynhanh2026') ||
      (email === 'admin' && password === 'admin') ||
      (password === 'huynhanh')
    ) {
      localStorage.setItem('huynhanh_admin_auth', 'true');
      setIsAuthenticated(true);
    } else {
      setLoginError(
        lang === 'vi'
          ? 'Email hoặc mật khẩu không chính xác. Bạn có thể nhấn nút "Vào nhanh Demo Admin" bên dưới.'
          : 'Invalid credentials. You can click "Quick Demo Login" below.'
      );
    }
  };

  const handleDemoLogin = () => {
    localStorage.setItem('huynhanh_admin_auth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('huynhanh_admin_auth');
    setIsAuthenticated(false);
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f3ec] dark:bg-[#15110e]">
        <div className="w-8 h-8 rounded-full border-2 border-[#a0620f] dark:border-[#f5b942] border-t-transparent animate-spin" />
      </div>
    );
  }

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col justify-between bg-[#f8f3ec] dark:bg-[#15110e] p-4 relative">
        {/* Top bar controls */}
        <div className="max-w-md w-full mx-auto flex items-center justify-between pt-4">
          <a
            href="/"
            className="text-xs font-semibold text-[#786352] dark:text-[#b5a393] hover:text-[#a0620f] dark:hover:text-[#f5b942] transition-colors"
          >
            ← {t.admin.backToSite}
          </a>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Center Login Box */}
        <div className="max-w-md w-full mx-auto my-auto py-10">
          <div className="p-8 rounded-3xl border border-[#e7dcce] dark:border-[#33281f] bg-white/95 dark:bg-[#1e1813]/95 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] mx-auto flex items-center justify-center shadow-inner">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h1 className="text-2xl font-bold text-[#2a1f14] dark:text-[#f5ece4]">
                {t.admin.loginTitle}
              </h1>
              <p className="text-xs text-[#786352] dark:text-[#b5a393]">
                {t.admin.loginSubtitle}
              </p>
            </div>

            {loginError && (
              <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 flex items-start gap-2.5 text-xs text-rose-700 dark:text-rose-300">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1.5">
                  {t.admin.email}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-3 text-[#786352] dark:text-[#b5a393]" />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="anhdev24h@gmail.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1.5">
                  {t.admin.password}
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-3 text-[#786352] dark:text-[#b5a393]" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-sm bg-[#a0620f] dark:bg-[#f5b942] hover:bg-[#85510c] dark:hover:bg-[#df9b20] text-white dark:text-[#15110e] shadow-lg shadow-[#a0620f]/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>{t.admin.loginBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="pt-2 text-center">
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-[#e7dcce] dark:border-[#33281f]"></div>
                <span className="flex-shrink mx-3 text-[11px] text-[#786352] dark:text-[#b5a393] uppercase font-mono">
                  {lang === 'vi' ? 'Hoặc' : 'Or'}
                </span>
                <div className="flex-grow border-t border-[#e7dcce] dark:border-[#33281f]"></div>
              </div>

              <button
                onClick={handleDemoLogin}
                className="w-full mt-2 py-2.5 rounded-xl border border-[#e7dcce] dark:border-[#33281f] text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] hover:border-[#a0620f]/50 dark:hover:border-[#f5b942]/50 hover:text-[#a0620f] dark:hover:text-[#f5b942] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#a0620f] dark:text-[#f5b942]" />
                <span>{t.admin.demoLoginBtn}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-[#786352] dark:text-[#b5a393] pb-4">
          Portfolio Huỳnh Anh • Frontend Developer tại Digital Creations
        </div>
      </div>
    );
  }

  // AUTHENTICATED ADMIN DASHBOARD
  const unreadCount = messages.filter((m) => !m.isRead).length;

  return (
    <div className="min-h-screen bg-[#f8f3ec] dark:bg-[#15110e] text-[#2a1f14] dark:text-[#f5ece4]">
      <AdminNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        unreadCount={unreadCount}
        onLogout={handleLogout}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'projects' && (
          <ProjectManager projects={projects} onRefresh={loadData} />
        )}
        {activeTab === 'profile' && profile && (
          <ProfileManager profile={profile} onRefresh={loadData} />
        )}
        {activeTab === 'messages' && (
          <MessagesManager messages={messages} onRefresh={loadData} />
        )}
        {activeTab === 'settings' && <SupabaseSetupGuide />}
      </main>
    </div>
  );
}
