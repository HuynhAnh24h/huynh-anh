import { 
  ProfileData, 
  ProjectItem, 
  SkillItem, 
  ExperienceItem, 
  ContactMessage 
} from './types';
import { 
  initialProfileData, 
  initialProjects, 
  initialSkills, 
  initialExperiences, 
  initialMessages 
} from './mock-data';
import { supabase, isSupabaseConfigured } from './supabase';

const STORAGE_KEYS = {
  PROFILE: 'huynhanh_profile_data',
  PROJECTS: 'huynhanh_projects_data',
  SKILLS: 'huynhanh_skills_data',
  EXPERIENCES: 'huynhanh_experiences_data',
  MESSAGES: 'huynhanh_messages_data',
};

// Helper for client-side local storage
function getLocal<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.warn(`Error reading ${key} from localStorage`, e);
    return fallback;
  }
}

function setLocal<T>(key: string, data: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn(`Error writing ${key} to localStorage`, e);
  }
}

// PROFILE
export async function getProfile(): Promise<ProfileData> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('profiles').select('*').limit(1).single();
      if (!error && data) {
        return {
          id: data.id,
          fullName: data.full_name,
          title: { vi: data.title_vi, en: data.title_en },
          company: { vi: data.company_vi, en: data.company_en },
          shortBio: { vi: data.short_bio_vi, en: data.short_bio_en },
          aboutMe: { vi: data.about_me_vi, en: data.about_me_en },
          email: data.email,
          phone: data.phone,
          location: { vi: data.location_vi, en: data.location_en },
          githubUrl: data.github_url,
          linkedinUrl: data.linkedin_url,
          facebookUrl: data.facebook_url,
          avatarUrl: data.avatar_url,
          resumeUrl: data.resume_url,
          openToWork: data.open_to_work,
          yearsOfExperience: data.years_of_experience,
        };
      }
    } catch (err) {
      console.warn('Supabase fetch profile error, fallback to local:', err);
    }
  }
  return getLocal<ProfileData>(STORAGE_KEYS.PROFILE, initialProfileData);
}

export async function updateProfile(updated: Partial<ProfileData>): Promise<ProfileData> {
  const current = await getProfile();
  const merged: ProfileData = { ...current, ...updated };

  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('profiles').upsert({
        full_name: merged.fullName,
        title_vi: merged.title.vi,
        title_en: merged.title.en,
        company_vi: merged.company.vi,
        company_en: merged.company.en,
        short_bio_vi: merged.shortBio.vi,
        short_bio_en: merged.shortBio.en,
        about_me_vi: merged.aboutMe.vi,
        about_me_en: merged.aboutMe.en,
        email: merged.email,
        phone: merged.phone,
        location_vi: merged.location.vi,
        location_en: merged.location.en,
        github_url: merged.githubUrl,
        linkedin_url: merged.linkedinUrl,
        facebook_url: merged.facebookUrl,
        avatar_url: merged.avatarUrl,
        open_to_work: merged.openToWork,
        years_of_experience: merged.yearsOfExperience,
        updated_at: new Date().toISOString(),
      });
    } catch (err) {
      console.warn('Supabase update profile error, updating locally:', err);
    }
  }

  setLocal(STORAGE_KEYS.PROFILE, merged);
  return merged;
}

// PROJECTS
export async function getProjects(): Promise<ProjectItem[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('display_order', { ascending: true });
      if (!error && data && data.length > 0) {
        return data.map((d) => ({
          id: d.id,
          title: d.title,
          titleEn: d.title_en,
          description: d.description,
          descriptionEn: d.description_en,
          category: d.category,
          tags: d.tags || [],
          imageUrl: d.image_url,
          liveUrl: d.live_url,
          githubUrl: d.github_url,
          featured: d.featured,
          displayOrder: d.display_order,
          createdAt: d.created_at,
        }));
      }
    } catch (err) {
      console.warn('Supabase fetch projects error, fallback to local:', err);
    }
  }
  return getLocal<ProjectItem[]>(STORAGE_KEYS.PROJECTS, initialProjects);
}

export async function saveProject(project: Partial<ProjectItem> & { title: string }): Promise<ProjectItem> {
  const currentProjects = await getProjects();
  const isEdit = Boolean(project.id && currentProjects.some((p) => p.id === project.id));
  
  const id = project.id || `proj-${Date.now()}`;
  const finalProject: ProjectItem = {
    id,
    title: project.title,
    titleEn: project.titleEn || project.title,
    description: project.description || '',
    descriptionEn: project.descriptionEn || project.description || '',
    category: project.category || 'web',
    tags: project.tags || [],
    imageUrl: project.imageUrl || '',
    liveUrl: project.liveUrl || '',
    githubUrl: project.githubUrl || '',
    featured: project.featured ?? false,
    displayOrder: project.displayOrder ?? (currentProjects.length + 1),
    createdAt: project.createdAt || new Date().toISOString(),
  };

  let updatedList: ProjectItem[];
  if (isEdit) {
    updatedList = currentProjects.map((p) => (p.id === id ? finalProject : p));
  } else {
    updatedList = [finalProject, ...currentProjects];
  }

  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('projects').upsert({
        id: finalProject.id,
        title: finalProject.title,
        title_en: finalProject.titleEn,
        description: finalProject.description,
        description_en: finalProject.descriptionEn,
        category: finalProject.category,
        tags: finalProject.tags,
        image_url: finalProject.imageUrl,
        live_url: finalProject.liveUrl,
        github_url: finalProject.githubUrl,
        featured: finalProject.featured,
        display_order: finalProject.displayOrder,
        updated_at: new Date().toISOString(),
      });
    } catch (err) {
      console.warn('Supabase save project error, updating local:', err);
    }
  }

  setLocal(STORAGE_KEYS.PROJECTS, updatedList);
  return finalProject;
}

export async function deleteProject(id: string): Promise<boolean> {
  const currentProjects = await getProjects();
  const filtered = currentProjects.filter((p) => p.id !== id);

  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('projects').delete().eq('id', id);
    } catch (err) {
      console.warn('Supabase delete project error:', err);
    }
  }

  setLocal(STORAGE_KEYS.PROJECTS, filtered);
  return true;
}

// SKILLS
export async function getSkills(): Promise<SkillItem[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('skills').select('*').order('display_order', { ascending: true });
      if (!error && data && data.length > 0) {
        return data.map((s) => ({
          id: s.id,
          name: s.name,
          category: s.category,
          proficiency: s.proficiency,
          iconName: s.icon_name,
        }));
      }
    } catch (err) {
      console.warn('Supabase fetch skills fallback:', err);
    }
  }
  return getLocal<SkillItem[]>(STORAGE_KEYS.SKILLS, initialSkills);
}

// EXPERIENCES
export async function getExperiences(): Promise<ExperienceItem[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.from('experiences').select('*').order('display_order', { ascending: true });
      if (!error && data && data.length > 0) {
        return data.map((e) => ({
          id: e.id,
          role: { vi: e.role_vi, en: e.role_en },
          company: e.company,
          period: { vi: e.period_vi, en: e.period_en },
          location: e.location,
          description: { vi: e.description_vi, en: e.description_en },
          bulletPoints: { vi: e.bullet_points_vi || [], en: e.bullet_points_en || [] },
          isCurrent: e.is_current,
        }));
      }
    } catch (err) {
      console.warn('Supabase fetch experiences fallback:', err);
    }
  }
  return getLocal<ExperienceItem[]>(STORAGE_KEYS.EXPERIENCES, initialExperiences);
}

// CONTACT MESSAGES
export async function getContactMessages(): Promise<ContactMessage[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) {
        return data.map((m) => ({
          id: m.id,
          name: m.name,
          email: m.email,
          subject: m.subject,
          message: m.message,
          isRead: m.is_read,
          createdAt: m.created_at,
        }));
      }
    } catch (err) {
      console.warn('Supabase fetch messages fallback:', err);
    }
  }
  return getLocal<ContactMessage[]>(STORAGE_KEYS.MESSAGES, initialMessages);
}

export async function sendContactMessage(msg: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      name: msg.name,
      email: msg.email,
      subject: msg.subject,
      message: msg.message,
      isRead: false,
      createdAt: new Date().toISOString(),
    };

    // Save locally
    const current = getLocal<ContactMessage[]>(STORAGE_KEYS.MESSAGES, initialMessages);
    setLocal(STORAGE_KEYS.MESSAGES, [newMessage, ...current]);

    // Send to /api/contact for email and Supabase integration
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMessage),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      return { success: false, error: errData.error || 'Server error' };
    }

    return { success: true };
  } catch (e: unknown) {
    const errorMsg = e instanceof Error ? e.message : 'Network error';
    return { success: false, error: errorMsg };
  }
}

export async function markMessageRead(id: string, isRead: boolean): Promise<void> {
  const current = await getContactMessages();
  const updated = current.map((m) => (m.id === id ? { ...m, isRead } : m));

  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('contact_messages').update({ is_read: isRead }).eq('id', id);
    } catch (err) {
      console.warn('Supabase update message error:', err);
    }
  }

  setLocal(STORAGE_KEYS.MESSAGES, updated);
}

export async function deleteContactMessage(id: string): Promise<void> {
  const current = await getContactMessages();
  const updated = current.filter((m) => m.id !== id);

  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('contact_messages').delete().eq('id', id);
    } catch (err) {
      console.warn('Supabase delete message error:', err);
    }
  }

  setLocal(STORAGE_KEYS.MESSAGES, updated);
}

export function resetLocalData(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEYS.PROFILE);
  localStorage.removeItem(STORAGE_KEYS.PROJECTS);
  localStorage.removeItem(STORAGE_KEYS.SKILLS);
  localStorage.removeItem(STORAGE_KEYS.EXPERIENCES);
  localStorage.removeItem(STORAGE_KEYS.MESSAGES);
}
