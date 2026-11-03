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
          <h2 className="text-xl sm:text-2xl font-bold text-[#2a1f14] dark:text-[#f5ece4]">
            {t.admin.messagesTab}
          </h2>
          <p className="text-xs sm:text-sm text-[#786352] dark:text-[#b5a393]">
            {lang === 'vi'
              ? 'Danh sách thư và yêu cầu liên hệ gửi từ Contact Form trên trang web.'
              : 'Messages and project inquiries submitted through the contact form.'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterUnreadOnly(!filterUnreadOnly)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
              filterUnreadOnly
                ? 'bg-[#a0620f] dark:bg-[#f5b942] text-white dark:text-[#15110e] border-[#a0620f] dark:border-[#f5b942]'
                : 'bg-white dark:bg-[#1e1813] border-[#e7dcce] dark:border-[#33281f] text-[#786352] dark:text-[#b5a393]'
            }`}
          >
            {lang === 'vi' ? 'Chỉ xem chưa đọc' : 'Unread Only'}
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="p-12 rounded-2xl border border-[#e7dcce] dark:border-[#33281f] bg-white dark:bg-[#1e1813] text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#f8f3ec] dark:bg-[#251e17] text-[#786352] dark:text-[#b5a393] mx-auto flex items-center justify-center">
            <Inbox className="w-6 h-6" />
          </div>
          <p className="text-sm font-semibold text-[#2a1f14] dark:text-[#f5ece4]">
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
                  ? 'bg-white dark:bg-[#1e1813]/60 border-[#e7dcce] dark:border-[#33281f] opacity-90'
                  : 'bg-[#a0620f]/10 dark:bg-[#f5b942]/10 border-[#a0620f]/40 dark:border-[#f5b942]/40 shadow-xs'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  {!msg.isRead && (
                    <span className="w-2 h-2 rounded-full bg-[#a0620f] dark:bg-[#f5b942] shrink-0" />
                  )}
                  <h3 className="font-bold text-base text-[#2a1f14] dark:text-[#f5ece4]">
                    {msg.subject || 'Không có tiêu đề'}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#786352] dark:text-[#b5a393] font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span suppressHydrationWarning>
                    {msg.createdAt.slice(0, 10)}
                  </span>
                </div>
              </div>

              {/* Sender details */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#786352] dark:text-[#b5a393] pb-3 mb-3 border-b border-[#e7dcce]/50 dark:border-[#33281f]/80">
                <span className="flex items-center gap-1.5 font-semibold text-[#2a1f14] dark:text-[#f5ece4]">
                  <User className="w-3.5 h-3.5 text-[#a0620f] dark:text-[#f5b942]" />
                  {msg.name}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#a0620f] dark:text-[#f5b942]" />
                  <a href={`mailto:${msg.email}`} className="hover:underline">
                    {msg.email}
                  </a>
                </span>
              </div>

              {/* Message Body */}
              <p className="text-xs sm:text-sm text-[#2a1f14] dark:text-[#f5ece4] whitespace-pre-wrap leading-relaxed">
                {msg.message}
              </p>

              {/* Actions Footer */}
              <div className="mt-4 pt-3 border-t border-[#e7dcce]/50 dark:border-[#33281f]/80 flex flex-wrap items-center justify-between gap-2">
                <a
                  href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}&body=Chào ${encodeURIComponent(msg.name)},%0D%0A%0D%0ACảm ơn bạn đã liên hệ qua Portfolio.`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#a0620f] dark:bg-[#f5b942] hover:bg-[#85510c] dark:hover:bg-[#df9b20] text-white dark:text-[#15110e] transition-colors cursor-pointer"
                >
                  <Reply className="w-3.5 h-3.5" />
                  <span>{t.admin.replyViaEmail}</span>
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleRead(msg.id, msg.isRead)}
                    className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded-lg border border-[#e7dcce] dark:border-[#33281f] text-[#786352] dark:text-[#b5a393] hover:text-[#a0620f] dark:hover:text-[#f5b942] hover:border-[#a0620f]/40 dark:hover:border-[#f5b942]/40 transition-colors cursor-pointer"
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
                    className="p-1.5 rounded-lg border border-[#e7dcce] dark:border-[#33281f] text-[#786352] dark:text-[#b5a393] hover:text-rose-500 hover:border-rose-500/30 transition-colors cursor-pointer"
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
