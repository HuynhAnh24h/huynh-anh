'use client';

import React, { useState } from 'react';
import { ContactMessage } from '@/lib/types';
import { useLanguage } from '../LanguageContext';
import { markMessageRead, deleteContactMessage } from '@/lib/data-service';
import { 
  Mail, 
  MailOpen, 
  Trash2, 
  Reply, 
  Calendar, 
  User, 
  CheckCircle,
  Inbox
} from 'lucide-react';

interface MessagesManagerProps {
  messages: ContactMessage[];
  onRefresh: () => void;
}

export function MessagesManager({ messages, onRefresh }: MessagesManagerProps) {
  const { lang, t } = useLanguage();
  const [filterUnreadOnly, setFilterUnreadOnly] = useState(false);

  const filtered = filterUnreadOnly
    ? messages.filter((m) => !m.isRead)
    : messages;

  const handleToggleRead = async (id: string, current: boolean) => {
    await markMessageRead(id, !current);
    onRefresh();
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm(t.admin.confirmDelete)) return;
    await deleteContactMessage(id);
    onRefresh();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {t.admin.messagesTab}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {lang === 'vi'
              ? 'Danh sách thư và yêu cầu liên hệ gửi từ Contact Form trên trang web.'
              : 'Messages and project inquiries submitted through the contact form.'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterUnreadOnly(!filterUnreadOnly)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors ${
              filterUnreadOnly
                ? 'bg-emerald-500 text-white border-emerald-500'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            {lang === 'vi' ? 'Chỉ xem chưa đọc' : 'Unread Only'}
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="p-12 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 mx-auto flex items-center justify-center">
            <Inbox className="w-6 h-6" />
          </div>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {t.admin.noMessages}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((msg) => (
            <div
              key={msg.id}
              className={`p-5 rounded-2xl border transition-all ${
                msg.isRead
                  ? 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 opacity-90'
                  : 'bg-emerald-50/20 dark:bg-emerald-950/20 border-emerald-500/40 shadow-sm'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  {!msg.isRead && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  )}
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {msg.subject || 'Không có tiêu đề'}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span suppressHydrationWarning>
                    {msg.createdAt.slice(0, 10)}
                  </span>
                </div>
              </div>

              {/* Sender details */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
                  <User className="w-3.5 h-3.5 text-emerald-500" />
                  {msg.name}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-500" />
                  <a href={`mailto:${msg.email}`} className="hover:underline">
                    {msg.email}
                  </a>
                </span>
              </div>

              {/* Message Body */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
                {msg.message}
              </p>

              {/* Actions Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                <a
                  href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}&body=Chào ${encodeURIComponent(msg.name)},%0D%0A%0D%0ACảm ơn bạn đã liên hệ qua Portfolio.`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
                >
                  <Reply className="w-3.5 h-3.5" />
                  <span>{t.admin.replyViaEmail}</span>
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleRead(msg.id, msg.isRead)}
                    className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors"
                  >
                    {msg.isRead ? (
                      <>
                        <Mail className="w-3.5 h-3.5" />
                        <span>{t.admin.markUnread}</span>
                      </>
                    ) : (
                      <>
                        <MailOpen className="w-3.5 h-3.5" />
                        <span>{t.admin.markRead}</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleDelete(msg.id)}
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-rose-500 hover:border-rose-500/30 transition-colors"
                    title={t.admin.deleteMessage}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
