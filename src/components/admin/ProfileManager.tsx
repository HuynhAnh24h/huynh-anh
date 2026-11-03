'use client';

import React, { useState } from 'react';
import { ProfileData } from '@/lib/types';
import { useLanguage } from '../LanguageContext';
import { updateProfile } from '@/lib/data-service';
import { 
  User, 
  Building, 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Briefcase, 
  Globe, 
  CheckCircle2
} from 'lucide-react';

interface ProfileManagerProps {
  profile: ProfileData;
  onRefresh: () => void;
}

export function ProfileManager({ profile, onRefresh }: ProfileManagerProps) {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState<ProfileData>(profile);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await updateProfile(formData);
      setSuccess(true);
      onRefresh();
      setTimeout(() => setSuccess(false), 3500);
    } catch (err) {
      console.error('Update profile failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#2a1f14] dark:text-[#f5ece4]">
            {t.admin.profileTab}
          </h2>
          <p className="text-xs sm:text-sm text-[#786352] dark:text-[#b5a393]">
            {lang === 'vi'
              ? 'Cập nhật chức danh, công ty hiện tại (Digital Creations), thông tin liên hệ và phần giới thiệu.'
              : 'Update your current title, company (Digital Creations), direct contacts, and biography.'}
          </p>
        </div>

        {success && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] border border-[#a0620f]/30 dark:border-[#f5b942]/30 text-xs font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t.admin.savedSuccess}</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Core Info */}
        <div className="p-5 sm:p-6 rounded-2xl border border-[#e7dcce] dark:border-[#33281f] bg-white dark:bg-[#1e1813] space-y-4">
          <h3 className="font-bold text-sm sm:text-base text-[#2a1f14] dark:text-[#f5ece4] flex items-center gap-2">
            <User className="w-4 h-4 text-[#a0620f] dark:text-[#f5b942]" />
            <span>Thông tin vị trí & Công ty</span>
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                Họ và Tên *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                Công ty hiện tại (Company) *
              </label>
              <input
                type="text"
                required
                value={formData.company.vi}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    company: { vi: e.target.value, en: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-sm font-bold text-[#a0620f] dark:text-[#f5b942] focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                Chức danh hiển thị (Tiếng Việt) *
              </label>
              <input
                type="text"
                required
                value={formData.title.vi}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: { ...formData.title, vi: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                Professional Title (English) *
              </label>
              <input
                type="text"
                required
                value={formData.title.en}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: { ...formData.title, en: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                Năm kinh nghiệm
              </label>
              <input
                type="number"
                value={formData.yearsOfExperience}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    yearsOfExperience: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
              />
            </div>
            <div className="flex items-center pt-6">
              <label className="flex items-center gap-2 text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.openToWork}
                  onChange={(e) => setFormData({ ...formData, openToWork: e.target.checked })}
                  className="rounded accent-[#a0620f] dark:accent-[#f5b942]"
                />
                <span>Sẵn sàng nhận dự án mới (Open to work / projects)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Bios */}
        <div className="p-5 sm:p-6 rounded-2xl border border-[#e7dcce] dark:border-[#33281f] bg-white dark:bg-[#1e1813] space-y-4">
          <h3 className="font-bold text-sm sm:text-base text-[#2a1f14] dark:text-[#f5ece4] flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-[#a0620f] dark:text-[#f5b942]" />
            <span>Mô tả ngắn & Giới thiệu chi tiết</span>
          </h3>

          <div>
            <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
              Mô tả ngắn Hero (Tiếng Việt)
            </label>
            <textarea
              rows={2}
              value={formData.shortBio.vi}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  shortBio: { ...formData.shortBio, vi: e.target.value },
                })
              }
              className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
              Short Bio Hero (English)
            </label>
            <textarea
              rows={2}
              value={formData.shortBio.en}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  shortBio: { ...formData.shortBio, en: e.target.value },
                })
              }
              className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
              Giới thiệu chi tiết About Me (Tiếng Việt)
            </label>
            <textarea
              rows={3}
              value={formData.aboutMe.vi}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  aboutMe: { ...formData.aboutMe, vi: e.target.value },
                })
              }
              className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
              Detailed About Me (English)
            </label>
            <textarea
              rows={3}
              value={formData.aboutMe.en}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  aboutMe: { ...formData.aboutMe, en: e.target.value },
                })
              }
              className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-5 sm:p-6 rounded-2xl border border-[#e7dcce] dark:border-[#33281f] bg-white dark:bg-[#1e1813] space-y-4">
          <h3 className="font-bold text-sm sm:text-base text-[#2a1f14] dark:text-[#f5ece4] flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#a0620f] dark:text-[#f5b942]" />
            <span>Liên hệ & Mạng xã hội</span>
          </h3>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                Số điện thoại
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                Địa điểm (Location)
              </label>
              <input
                type="text"
                value={formData.location.vi}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    location: { vi: e.target.value, en: e.target.value },
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                GitHub URL
              </label>
              <input
                type="url"
                value={formData.githubUrl}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                LinkedIn URL
              </label>
              <input
                type="url"
                value={formData.linkedinUrl || ''}
                onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-[#a0620f] dark:bg-[#f5b942] hover:bg-[#85510c] dark:hover:bg-[#df9b20] text-white dark:text-[#15110e] shadow-md shadow-[#a0620f]/20 flex items-center gap-2 transition-all cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>{loading ? 'Đang lưu...' : t.admin.saveChanges}</span>
          </button>
        </div>

      </form>
    </div>
  );
}
