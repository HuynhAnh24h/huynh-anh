'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { ProfileData } from '@/lib/types';
import { sendContactMessage } from '@/lib/data-service';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  MessageSquare
} from 'lucide-react';

interface ContactFormProps {
  profile: ProfileData;
}

export function ContactForm({ profile }: ContactFormProps) {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError(lang === 'vi' ? 'Vui lòng điền đầy đủ các thông tin bắt buộc.' : 'Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError(null);

    const result = await sendContactMessage(formData);
    setLoading(false);

    if (result.success) {
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Trigger Confetti effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f5b942', '#a0620f', '#df9b20', '#b5a393'],
        });
      } catch {
        // Confetti optional
      }
    } else {
      setError(result.error || t.contact.errorMsg);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] border border-[#a0620f]/20 dark:border-[#f5b942]/30 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.contact.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2a1f14] dark:text-[#f5ece4]">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#786352] dark:text-[#b5a393] max-w-xl">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 md:p-8 rounded-2xl border border-[#e7dcce] dark:border-[#33281f] bg-white/90 dark:bg-[#1e1813]/90 shadow-md">
              <h3 className="font-bold text-xl text-[#2a1f14] dark:text-[#f5ece4] mb-2">
                {lang === 'vi' ? 'Thông tin kết nối' : 'Direct Contacts'}
              </h3>
              <p className="text-xs sm:text-sm text-[#786352] dark:text-[#b5a393] leading-relaxed mb-6">
                {lang === 'vi'
                  ? 'Tôi luôn sẵn sàng trao đổi các cơ hội nghề nghiệp, dự án gia công mobile app, website thương mại hoặc tư vấn hệ thống IT.'
                  : 'Always open to discussing new project initiatives, contract mobile app engineering, or IT systems consultation.'}
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl border border-[#e7dcce]/80 dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 hover:border-[#a0620f]/50 dark:hover:border-[#f5b942]/50 hover:bg-[#a0620f]/5 dark:hover:bg-[#f5b942]/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-[#786352] dark:text-[#b5a393] block uppercase tracking-wider">Email</span>
                    <span className="text-sm font-semibold text-[#2a1f14] dark:text-[#f5ece4] group-hover:text-[#a0620f] dark:group-hover:text-[#f5b942] transition-colors">
                      {profile.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl border border-[#e7dcce]/80 dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 hover:border-[#a0620f]/50 dark:hover:border-[#f5b942]/50 hover:bg-[#a0620f]/5 dark:hover:bg-[#f5b942]/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-[#786352] dark:text-[#b5a393] block uppercase tracking-wider">{lang === 'vi' ? 'Điện thoại' : 'Phone'}</span>
                    <span className="text-sm font-semibold text-[#2a1f14] dark:text-[#f5ece4] group-hover:text-[#a0620f] dark:group-hover:text-[#f5b942] transition-colors">
                      {profile.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-[#e7dcce]/80 dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60">
                  <div className="w-10 h-10 rounded-lg bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-[#786352] dark:text-[#b5a393] block uppercase tracking-wider">{t.contact.location}</span>
                    <span className="text-sm font-semibold text-[#2a1f14] dark:text-[#f5ece4]">
                      {profile.location[lang] || profile.location.vi}
                    </span>
                  </div>
                </div>
              </div>

              {/* Working Availability */}
              <div className="mt-6 pt-5 border-t border-[#e7dcce]/60 dark:border-[#33281f] flex items-center justify-between text-xs">
                <span className="text-[#786352] dark:text-[#b5a393]">Digital Creations:</span>
                <span className="font-bold text-[#a0620f] dark:text-[#f5b942]">
                  Frontend Developer
                </span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl border border-[#e7dcce] dark:border-[#33281f] bg-white/95 dark:bg-[#1e1813]/95 shadow-lg">
              
              {success ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2a1f14] dark:text-[#f5ece4]">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-sm text-[#786352] dark:text-[#b5a393] max-w-md mx-auto leading-relaxed">
                    {t.contact.successMsg}
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold bg-[#a0620f] dark:bg-[#f5b942] text-white dark:text-[#15110e] hover:opacity-90 transition-colors cursor-pointer"
                  >
                    {lang === 'vi' ? 'Gửi tin nhắn khác' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 flex items-center gap-2.5 text-xs text-rose-700 dark:text-rose-300">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1.5">
                        {t.contact.nameLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-white dark:bg-[#15110e] text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#f5b942]/40"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1.5">
                        {t.contact.emailLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-white dark:bg-[#15110e] text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#f5b942]/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1.5">
                      {t.contact.subjectLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={t.contact.subjectPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-white dark:bg-[#15110e] text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#f5b942]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1.5">
                      {t.contact.messageLabel} <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-white dark:bg-[#15110e] text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#f5b942]/40 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-[#a0620f] hover:bg-[#854f0a] dark:bg-[#f5b942] dark:hover:bg-[#df9b20] disabled:opacity-70 text-white dark:text-[#15110e] shadow-lg shadow-[#f5b942]/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{t.contact.sendingBtn}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.contact.sendBtn}</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#786352] dark:text-[#b5a393] pt-1">
                    {lang === 'vi'
                      ? 'Tin nhắn sẽ được gửi tự động về hộp thư anhdev24h@gmail.com qua Gmail SMTP.'
                      : 'Messages are automatically forwarded to anhdev24h@gmail.com via Gmail SMTP.'}
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
