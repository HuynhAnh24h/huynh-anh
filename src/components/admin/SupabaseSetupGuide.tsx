'use client';

import React, { useState } from 'react';
import { isSupabaseConfigured } from '@/lib/supabase';
import { resetLocalData } from '@/lib/data-service';
import { useLanguage } from '../LanguageContext';
import { 
  Database, 
  CheckCircle2, 
  AlertTriangle, 
  Copy, 
  Check, 
  ExternalLink, 
  RefreshCcw,
  Mail,
  ShieldCheck,
  Key
} from 'lucide-react';

export function SupabaseSetupGuide() {
  const { lang, t } = useLanguage();
  const [copiedSql, setCopiedSql] = useState(false);
  const [copiedEnv, setCopiedEnv] = useState(false);

  const copySql = async () => {
    const sqlContent = `-- Script khởi tạo cơ sở dữ liệu Supabase cho Portfolio Huỳnh Anh
-- Mở file supabase/schema.sql trong dự án này để copy đầy đủ bảng và RLS policies.`;
    navigator.clipboard.writeText(sqlContent);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  const copyEnvSnippet = () => {
    const snippet = `GMAIL_USER=anhdev24h@gmail.com\nGMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx\nCONTACT_NOTIFICATION_EMAIL=anhdev24h@gmail.com`;
    navigator.clipboard.writeText(snippet);
    setCopiedEnv(true);
    setTimeout(() => setCopiedEnv(false), 2000);
  };

  const handleResetData = () => {
    if (window.confirm('Khôi phục toàn bộ dữ liệu mẫu ban đầu? (Thao tác này chỉ ảnh hưởng dữ liệu cục bộ trình duyệt)')) {
      resetLocalData();
      window.location.reload();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          {t.admin.settingsTab}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          {lang === 'vi'
            ? 'Cấu hình gửi email tự động qua Gmail (Google App Password) và cơ sở dữ liệu Supabase Cloud.'
            : 'Configure automated email forwarding via Gmail (Google App Password) & Supabase Database.'}
        </p>
      </div>

      {/* Gmail Google App Password Highlight Box */}
      <div className="p-6 rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/30">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {lang === 'vi' ? 'Cấu hình gửi Email qua Google App Password (Gmail)' : 'Gmail SMTP with Google App Password'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'vi'
                  ? 'Khi khách gửi Contact Form, thư sẽ tự động gửi thẳng về hộp thư anhdev24h@gmail.com của bạn.'
                  : 'Receive incoming portfolio inquiries directly into your personal inbox.'}
              </p>
            </div>
          </div>

          <a
            href="https://myaccount.google.com/apppasswords"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-emerald-600 dark:text-emerald-400 shadow-xs transition-colors"
          >
            <span>Tạo App Password trên Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
          <p className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Key className="w-4 h-4 text-emerald-500" />
            4 bước tạo Mật khẩu ứng dụng (App Password) cho Gmail:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 text-slate-600 dark:text-slate-400">
            <li>
              Đăng nhập tài khoản Google và mở trang{' '}
              <a
                href="https://myaccount.google.com/security"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 underline"
              >
                Bảo mật Google
              </a>
              . Đảm bảo bạn đã bật <strong>Xác minh 2 bước (2-Step Verification)</strong>.
            </li>
            <li>
              Truy cập trực tiếp vào:{' '}
              <a
                href="https://myaccount.google.com/apppasswords"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 underline font-mono"
              >
                myaccount.google.com/apppasswords
              </a>
            </li>
            <li>
              Nhập tên ứng dụng là <strong>Portfolio</strong> rồi bấm <strong>Tạo (Create)</strong>.
            </li>
            <li>
              Google sẽ cấp một mật khẩu gồm 16 chữ cái (dạng <code className="text-emerald-500 font-mono">xxxx xxxx xxxx xxxx</code>). Sao chép và dán vào file <code className="font-mono text-emerald-500">.env.local</code>.
            </li>
          </ol>
        </div>

        {/* Env snippet */}
        <div className="relative p-3.5 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-800">
          <div className="text-slate-500"># Thêm vào file .env.local:</div>
          <div className="text-emerald-400">GMAIL_USER=anhdev24h@gmail.com</div>
          <div className="text-emerald-400">GMAIL_APP_PASSWORD=dien_16_ky_tu_mat_khau_o_day</div>
          <div className="text-slate-300">CONTACT_NOTIFICATION_EMAIL=anhdev24h@gmail.com</div>

          <button
            onClick={copyEnvSnippet}
            className="absolute right-3 top-3 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-300 flex items-center gap-1 transition-colors"
          >
            {copiedEnv ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copiedEnv ? 'Đã chép' : 'Sao chép'}</span>
          </button>
        </div>
      </div>

      {/* Supabase Status Banner */}
      <div
        className={`p-5 rounded-2xl border ${
          isSupabaseConfigured
            ? 'bg-emerald-50/40 dark:bg-emerald-950/30 border-emerald-500/40 text-emerald-900 dark:text-emerald-200'
            : 'bg-amber-50/40 dark:bg-amber-950/30 border-amber-500/40 text-amber-900 dark:text-amber-200'
        }`}
      >
        <div className="flex items-start gap-3.5">
          {isSupabaseConfigured ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          )}
          <div className="space-y-1">
            <h3 className="font-bold text-sm sm:text-base">
              {isSupabaseConfigured
                ? t.admin.connectedSupabase
                : t.admin.localMode}
            </h3>
            <p className="text-xs opacity-90 leading-relaxed">
              {isSupabaseConfigured
                ? (lang === 'vi'
                    ? 'Hệ thống đang kết nối trực tiếp với Supabase Cloud. Mọi thay đổi dự án và tin nhắn liên hệ đều được lưu trữ trực tuyến an toàn.'
                    : 'System is connected to your Supabase Cloud project. All updates and contact inquiries are safely stored online.')
                : (lang === 'vi'
                    ? 'Bạn đang ở chế độ Local Mock. Mọi thao tác thêm/sửa/xóa dự án và profile vẫn hoạt động đầy đủ và được lưu trữ trong trình duyệt của bạn. Để đồng bộ lên đám mây, hãy điền thông tin Supabase vào file .env.local.'
                    : 'Running in Local Storage Mode. All actions (adding/editing projects, updating profile) work seamlessly in browser storage. Add Supabase keys in .env.local to persist online.')}
            </p>
          </div>
        </div>
      </div>

      {/* Supabase Guide Steps */}
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-6">
        <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
          <Database className="w-4 h-4 text-emerald-500" />
          <span>{lang === 'vi' ? 'Hướng dẫn kết nối Supabase Cloud' : 'Supabase Cloud Setup'}</span>
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 font-mono font-bold flex items-center justify-center shrink-0">
              1
            </span>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Tạo dự án trên Supabase
              </p>
              <p className="text-xs text-slate-500">
                Truy cập{' '}
                <a
                  href="https://supabase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-500 underline inline-flex items-center gap-1"
                >
                  supabase.com <ExternalLink className="w-3 h-3" />
                </a>
                , đăng nhập và nhấn &quot;New Project&quot;.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 font-mono font-bold flex items-center justify-center shrink-0">
              2
            </span>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Chạy file SQL khởi tạo bảng
              </p>
              <p className="text-xs text-slate-500 mb-2">
                Mở mục <strong>SQL Editor</strong> trong Supabase dashboard, mở file{' '}
                <code className="text-emerald-500 font-mono">supabase/schema.sql</code>{' '}
                trong mã nguồn dự án này, dán vào và nhấn <strong>Run</strong>.
              </p>
              <button
                onClick={copySql}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-semibold hover:border-emerald-500/50 hover:text-emerald-500 transition-colors"
              >
                {copiedSql ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSql ? 'Đã sao chép gợi ý SQL!' : 'Sao chép gợi ý SQL'}</span>
              </button>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 font-mono font-bold flex items-center justify-center shrink-0">
              3
            </span>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Thêm thông tin Supabase vào file .env.local
              </p>
              <div className="mt-2 p-3 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs overflow-x-auto">
                <div>NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co</div>
                <div>NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5c...</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reset Local Data Action */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Khôi phục dữ liệu mẫu ban đầu
            </p>
            <p className="text-[11px] text-slate-400">
              Nếu bạn muốn reset lại các dự án và profile mặc định của Huỳnh Anh
            </p>
          </div>
          <button
            onClick={handleResetData}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-rose-500 hover:border-rose-500/30 transition-colors"
          >
            <RefreshCcw className="w-3.5 h-3.5" />
            <span>Reset Demo Data</span>
          </button>
        </div>
      </div>
    </div>
  );
}
