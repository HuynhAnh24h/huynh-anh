export type Language = 'vi' | 'en';

export interface ProfileData {
  id?: string;
  fullName: string;
  title: {
    vi: string;
    en: string;
  };
  company: {
    vi: string;
    en: string;
  };
  shortBio: {
    vi: string;
    en: string;
  };
  aboutMe: {
    vi: string;
    en: string;
  };
  email: string;
  phone: string;
  location: {
    vi: string;
    en: string;
  };
  githubUrl: string;
  linkedinUrl?: string;
  facebookUrl?: string;
  avatarUrl?: string;
  resumeUrl?: string;
  openToWork: boolean;
  yearsOfExperience: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  category: 'web' | 'mobile' | 'shopify' | 'wordpress';
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  displayOrder: number;
  createdAt?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'mobile' | 'cms' | 'backend_it';
  proficiency: number; // 0 - 100
  iconName?: string;
}

export interface ExperienceItem {
  id: string;
  role: {
    vi: string;
    en: string;
  };
  company: string;
  period: {
    vi: string;
    en: string;
  };
  location: string;
  description?: {
    vi: string;
    en: string;
  };
  bulletPoints: {
    vi: string[];
    en: string[];
  };
  isCurrent?: boolean;
}

export interface EducationItem {
  id: string;
  school: {
    vi: string;
    en: string;
  };
  degree: {
    vi: string;
    en: string;
  };
  period: string;
  details?: {
    vi: string;
    en: string;
  };
}

export interface CertificateItem {
  id: string;
  title: {
    vi: string;
    en: string;
  };
  year: string;
  issuer?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}
