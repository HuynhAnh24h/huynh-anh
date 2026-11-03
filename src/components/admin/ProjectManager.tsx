'use client';

import React, { useState } from 'react';
import { ProjectItem } from '@/lib/types';
import { useLanguage } from '../LanguageContext';
import { saveProject, deleteProject } from '@/lib/data-service';
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  ExternalLink, 
  Sparkles, 
  Check, 
  X,
  Layers
} from 'lucide-react';
import { GithubIcon } from '../icons';

interface ProjectManagerProps {
  projects: ProjectItem[];
  onRefresh: () => void;
}

export function ProjectManager({ projects, onRefresh }: ProjectManagerProps) {
  const { lang, t } = useLanguage();
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [editingProject, setEditingProject] = useState<Partial<ProjectItem> | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tagsInput, setTagsInput] = useState('');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const filtered = projects.filter((p) => {
    const matchesSearch = 
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      (p.titleEn && p.titleEn.toLowerCase().includes(search.toLowerCase())) ||
      p.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
    const matchesCat = filterCategory === 'all' || p.category === filterCategory;
    return matchesSearch && matchesCat;
  });

  const handleOpenAdd = () => {
    setEditingProject({
      title: '',
      titleEn: '',
      description: '',
      descriptionEn: '',
      category: 'web',
      tags: [],
      liveUrl: '',
      githubUrl: '',
      featured: false,
      displayOrder: projects.length + 1,
    });
    setTagsInput('');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (proj: ProjectItem) => {
    setEditingProject({ ...proj });
    setTagsInput((proj.tags || []).join(', '));
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject?.title?.trim()) {
      setMessage({ text: 'Vui lòng nhập tên dự án.', type: 'error' });
      return;
    }

    setLoading(true);
    const parsedTags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    try {
      await saveProject({
        ...editingProject,
        title: editingProject.title!,
        tags: parsedTags,
      });

      setMessage({ text: t.admin.savedSuccess, type: 'success' });
      setIsModalOpen(false);
      onRefresh();
      setTimeout(() => setMessage(null), 3000);
    } catch {
      setMessage({ text: 'Có lỗi khi lưu dự án.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`${t.admin.confirmDelete} "${title}"?`)) return;
    try {
      await deleteProject(id);
      setMessage({ text: 'Đã xóa dự án thành công.', type: 'success' });
      onRefresh();
      setTimeout(() => setMessage(null), 3000);
    } catch {
      setMessage({ text: 'Lỗi khi xóa dự án.', type: 'error' });
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner and Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#2a1f14] dark:text-[#f5ece4]">
            {t.admin.projectsTab}
          </h2>
          <p className="text-xs sm:text-sm text-[#786352] dark:text-[#b5a393]">
            {lang === 'vi'
              ? 'Thêm, sửa, xóa hoặc sắp xếp các dự án hiển thị trên trang Portfolio của bạn.'
              : 'Add, update, reorder or remove projects featured on your public portfolio.'}
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-[#a0620f] dark:bg-[#f5b942] hover:bg-[#85510c] dark:hover:bg-[#df9b20] text-white dark:text-[#15110e] shadow-md shadow-[#a0620f]/20 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>{t.admin.addProject}</span>
        </button>
      </div>

      {message && (
        <div
          className={`p-3.5 rounded-xl text-xs sm:text-sm flex items-center justify-between ${
            message.type === 'success'
              ? 'bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] border border-[#a0620f]/30 dark:border-[#f5b942]/30'
              : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
          }`}
        >
          <span>{message.text}</span>
          <button onClick={() => setMessage(null)} className="cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-[#786352] dark:text-[#b5a393]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={lang === 'vi' ? 'Tìm theo tên dự án hoặc công nghệ...' : 'Search by title or tech stack...'}
            className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm border border-[#e7dcce] dark:border-[#33281f] bg-white dark:bg-[#1e1813] text-[#2a1f14] dark:text-[#f5ece4] focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
          />
        </div>

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-3 py-2 rounded-xl text-xs sm:text-sm border border-[#e7dcce] dark:border-[#33281f] bg-white dark:bg-[#1e1813] text-[#2a1f14] dark:text-[#f5ece4] focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942] cursor-pointer"
        >
          <option value="all">{lang === 'vi' ? 'Tất cả danh mục' : 'All Categories'}</option>
          <option value="mobile">{lang === 'vi' ? 'Ứng dụng Mobile' : 'Mobile Apps'}</option>
          <option value="web">{lang === 'vi' ? 'Website & Web App' : 'Web & Apps'}</option>
          <option value="shopify">Shopify</option>
          <option value="wordpress">WordPress</option>
        </select>
      </div>

      {/* Projects Table / Cards */}
      <div className="grid gap-3">
        {filtered.map((proj) => (
          <div
            key={proj.id}
            className="p-4 sm:p-5 rounded-2xl border border-[#e7dcce] dark:border-[#33281f] bg-white dark:bg-[#1e1813] flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#a0620f]/40 dark:hover:border-[#f5b942]/40 transition-colors"
          >
            <div className="space-y-1.5 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-base text-[#2a1f14] dark:text-[#f5ece4]">
                  {proj.title}
                </span>
                {proj.titleEn && proj.titleEn !== proj.title && (
                  <span className="text-xs text-[#786352] dark:text-[#b5a393] font-mono">
                    ({proj.titleEn})
                  </span>
                )}
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#f8f3ec] dark:bg-[#251e17] text-[#786352] dark:text-[#b5a393] border border-[#e7dcce] dark:border-[#33281f]">
                  {proj.category}
                </span>
                {proj.featured && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#a0620f]/10 dark:bg-[#f5b942]/15 text-[#a0620f] dark:text-[#f5b942] border border-[#a0620f]/30 dark:border-[#f5b942]/30">
                    <Sparkles className="w-2.5 h-2.5" />
                    Featured
                  </span>
                )}
              </div>

              <p className="text-xs text-[#786352] dark:text-[#b5a393] line-clamp-2">
                {proj.description}
              </p>

              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {proj.tags?.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f8f3ec] dark:bg-[#251e17] text-[#786352] dark:text-[#b5a393] border border-[#e7dcce]/60 dark:border-[#33281f]/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#e7dcce]/50 dark:border-[#33281f]/80">
              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] text-[#786352] dark:text-[#b5a393] hover:text-[#a0620f] dark:hover:text-[#f5b942] hover:border-[#a0620f]/40 dark:hover:border-[#f5b942]/40 transition-colors"
                  title="Xem Live"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {proj.githubUrl && (
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] text-[#786352] dark:text-[#b5a393] hover:text-[#2a1f14] dark:hover:text-[#f5ece4] transition-colors"
                  title="Source Code"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={() => handleOpenEdit(proj)}
                className="p-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] text-[#786352] dark:text-[#b5a393] hover:text-[#a0620f] dark:hover:text-[#f5b942] hover:border-[#a0620f]/40 dark:hover:border-[#f5b942]/40 transition-colors cursor-pointer"
                title={t.admin.editProject}
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(proj.id, proj.title)}
                className="p-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] text-[#786352] dark:text-[#b5a393] hover:text-rose-500 hover:border-rose-500/40 transition-colors cursor-pointer"
                title={t.admin.deleteProject}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit / Add Modal */}
      {isModalOpen && editingProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-2xl bg-white dark:bg-[#1e1813] border border-[#e7dcce] dark:border-[#33281f] rounded-2xl shadow-2xl p-6 my-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#e7dcce] dark:border-[#33281f]">
              <h3 className="font-bold text-lg text-[#2a1f14] dark:text-[#f5ece4] flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#a0620f] dark:text-[#f5b942]" />
                {editingProject.id ? t.admin.editProject : t.admin.addProject}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-[#786352] dark:text-[#b5a393] hover:text-[#2a1f14] dark:hover:text-[#f5ece4] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                    Tên dự án (Tiếng Việt) *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingProject.title || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                    Project Title (English)
                  </label>
                  <input
                    type="text"
                    value={editingProject.titleEn || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, titleEn: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                    Danh mục (Category)
                  </label>
                  <select
                    value={editingProject.category || 'web'}
                    onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value as ProjectItem['category'] })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942] cursor-pointer"
                  >
                    <option value="mobile">Ứng dụng Mobile (React Native / Cross-platform)</option>
                    <option value="web">Website & Web App (Next.js / React)</option>
                    <option value="shopify">Shopify Theme & E-commerce</option>
                    <option value="wordpress">WordPress Website</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                    Tags công nghệ (ngăn cách bằng dấu phẩy)
                  </label>
                  <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder="React, Next.js, TypeScript, Tailwind"
                    className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                  Mô tả dự án (Tiếng Việt)
                </label>
                <textarea
                  rows={2}
                  value={editingProject.description || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                  Description (English)
                </label>
                <textarea
                  rows={2}
                  value={editingProject.descriptionEn || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, descriptionEn: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                    Link Live Demo / Website
                  </label>
                  <input
                    type="url"
                    value={editingProject.liveUrl || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, liveUrl: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] mb-1">
                    Link GitHub / Source Code
                  </label>
                  <input
                    type="url"
                    value={editingProject.githubUrl || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, githubUrl: e.target.value })}
                    placeholder="https://github.com/..."
                    className="w-full px-3 py-2 rounded-xl border border-[#e7dcce] dark:border-[#33281f] bg-[#f8f3ec]/60 dark:bg-[#15110e]/60 text-[#2a1f14] dark:text-[#f5ece4] text-sm focus:outline-none focus:ring-2 focus:ring-[#a0620f]/30 dark:focus:ring-[#f5b942]/30 focus:border-[#a0620f] dark:focus:border-[#f5b942]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 text-xs font-semibold text-[#2a1f14] dark:text-[#f5ece4] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingProject.featured || false}
                    onChange={(e) => setEditingProject({ ...editingProject, featured: e.target.checked })}
                    className="rounded accent-[#a0620f] dark:accent-[#f5b942]"
                  />
                  <span>Đánh dấu Dự án Nổi bật (Featured)</span>
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#e7dcce] dark:border-[#33281f]">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold border border-[#e7dcce] dark:border-[#33281f] text-[#786352] dark:text-[#b5a393] hover:bg-[#f8f3ec] dark:hover:bg-[#251e17] transition-colors cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2 rounded-xl text-xs font-semibold bg-[#a0620f] dark:bg-[#f5b942] hover:bg-[#85510c] dark:hover:bg-[#df9b20] text-white dark:text-[#15110e] shadow-md shadow-[#a0620f]/20 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>{loading ? 'Đang lưu...' : t.admin.saveChanges}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
