import { ProfileData, ProjectItem, SkillItem, ExperienceItem, EducationItem, CertificateItem, ContactMessage } from './types';

export const initialProfileData: ProfileData = {
  fullName: 'Huỳnh Anh',
  title: {
    vi: 'Senior Full-Stack & Desktop Software Engineer',
    en: 'Senior Full-Stack & Desktop Software Engineer',
  },
  company: {
    vi: 'KTS Software Solutions / Kornbest',
    en: 'KTS Software Solutions / Kornbest',
  },
  shortBio: {
    vi: 'Kỹ sư phần mềm chuyên sâu phát triển ứng dụng Native Desktop hiệu năng cao (Python 3.14, FastAPI, Edge WebView2, React 19), hệ thống đồng bộ thiết bị sinh trắc học qua mạng LAN, cùng nền tảng Web Portal & SaaS quản lý bản quyền MERN Stack tự động hóa với VietQR.',
    en: 'Software Engineer specializing in High-Performance Native Desktop Systems (Python 3.14, FastAPI, Edge WebView2, React 19), biometric LAN hardware synchronization, and cloud-native MERN Stack SaaS platforms with automated VietQR payments.',
  },
  aboutMe: {
    vi: 'Tôi là Huỳnh Anh, Kỹ sư phần mềm với hơn 3+ năm kinh nghiệm thực chiến trong việc kiến tạo các hệ thống phần mềm doanh nghiệp và ứng dụng web/mobile quy mô lớn. Thế mạnh nổi bật của tôi bao gồm: Thiết kế kiến trúc Hybrid Desktop App hiệu năng cao (khởi động 0.5s, không bật terminal CMD), giao thức mạng socket UDP/TCP kết nối máy chấm công (ZKTeco, Ronald Jack, Gigata), thuật toán Radar quét mạng LAN đa luồng siêu tốc (0.7s), hệ thống bảo mật mã hóa bản quyền phần cứng (Hardware-Locked Cryptography với HMAC-SHA256), và triển khai nền tảng MERN SaaS tích hợp thanh toán VietQR tự động 24/7.',
    en: 'I am Huynh Anh, a Software Engineer with over 3+ years of hands-on experience building enterprise-grade software and full-stack web/mobile platforms. My core expertise spans: High-performance Hybrid Desktop App Architecture (0.5s instant launch, 0-terminal UI), low-level UDP/TCP network socket protocols for biometric devices (ZKTeco, Ronald Jack, Gigata), concurrent multi-threaded LAN radar discovery (0.7s), hardware-locked cryptographic license security (HMAC-SHA256), and cloud MERN SaaS platforms with automated VietQR reconciliation.',
  },
  email: 'anhdev24h@gmail.com',
  phone: '0776 980 269',
  location: {
    vi: 'Hòa Thành, Tây Ninh / TP.HCM, Việt Nam',
    en: 'Hoa Thanh, Tay Ninh / Ho Chi Minh City, Vietnam',
  },
  githubUrl: 'https://github.com/HuynhAnh24h',
  linkedinUrl: 'https://linkedin.com/in/huynhanh-dev',
  facebookUrl: 'https://facebook.com',
  avatarUrl: '/huynh-anh.jpg',
  resumeUrl: '#',
  openToWork: true,
  yearsOfExperience: 3,
};

export const initialProjects: ProjectItem[] = [
  {
    id: 'proj-kts-app',
    title: 'KTS TimeAttendance - Enterprise Native Desktop System',
    titleEn: 'KTS TimeAttendance - Enterprise Native Desktop Suite',
    description: 'Hệ thống quản lý chấm công & nhân sự doanh nghiệp Native Desktop hoàn chỉnh. Tự động nhận diện thiết bị sinh trắc học qua mạng LAN trong 0.7s, tự động xếp ca kíp và xuất bảng công ma trận 31 ngày chuẩn Bộ Luật Lao Động 2026. Tích hợp bảo mật bản quyền khóa phần cứng (Machine ID + Tên công ty) và tự động xóa dữ liệu sau 30 ngày quá hạn.',
    descriptionEn: 'Enterprise Native Desktop Biometric Attendance System. Features 0.7s LAN multi-threaded device auto-discovery, auto-shift calculation, 31-day Excel matrix reporting, hardware-locked licensing, and 30-day grace period security data purge.',
    category: 'desktop',
    tags: ['Python 3.14', 'FastAPI', 'React 19', 'Edge WebView2', 'ZKTeco / UDP 4370', 'LAN Radar 0.7s', 'SQLite / SQLAlchemy', 'Excel Matrix'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://kts-time-attendance-ladingpage.vercel.app',
    githubUrl: 'https://github.com/HuynhAnh24h/kts-cham-cong',
    featured: true,
    displayOrder: 1,
    createdAt: '2026-11-10',
  },
  {
    id: 'proj-kts-saas',
    title: 'KTS TimeAttendance Cloud Portal & SaaS License Manager',
    titleEn: 'KTS Cloud Portal & SaaS License Platform',
    description: 'Nền tảng Web Portal và hệ thống quản trị bản quyền MERN Stack Serverless trên Vercel. Tích hợp thanh toán quét mã VietQR tự động 24/7, sinh license key HMAC-SHA256 theo từng Công Ty & Machine ID, cổng tra cứu key online, dashboard admin 1-click duyệt đơn và API phân phối cập nhật phần mềm (/api/updates/check). Tối ưu SEO 100/100.',
    descriptionEn: 'Cloud Portal and License Management SaaS on MERN Stack (Vercel Serverless + MongoDB Atlas). Features automated VietQR banking integration, company-locked HMAC license issuance, public key lookup, and auto-update API distribution.',
    category: 'web',
    tags: ['MERN Stack', 'React 19', 'Node.js', 'Express Serverless', 'MongoDB Atlas', 'VietQR API', 'Tailwind CSS', 'Vercel CI/CD'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://kts-time-attendance-ladingpage.vercel.app',
    githubUrl: 'https://github.com/HuynhAnh24h/KTS_TimeAttendance_ladingpage',
    featured: true,
    displayOrder: 2,
    createdAt: '2026-11-10',
  },
  {
    id: 'proj-mobile-app',
    title: 'Digital Creations Mobile App',
    titleEn: 'Digital Creations Cross-Platform Mobile App',
    description: 'Ứng dụng mobile đa nền tảng (iOS & Android) tối ưu trải nghiệm người dùng, kết nối hệ thống dịch vụ số, giao diện mượt mà theo chuẩn Material 3 & Apple HIG.',
    descriptionEn: 'Cross-platform mobile application (iOS & Android) offering seamless user experience, digital services connectivity, and fluid animations adhering to modern design guidelines.',
    category: 'mobile',
    tags: ['React Native', 'Expo', 'TypeScript', 'Tailwind', 'REST API'],
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://digitalcreations.vn',
    githubUrl: 'https://github.com/HuynhAnh24h',
    featured: true,
    displayOrder: 3,
    createdAt: '2026-01-15',
  },
  {
    id: 'proj-web-portal',
    title: 'Digital Creations Enterprise Portal',
    titleEn: 'Digital Creations Enterprise Portal',
    description: 'Website cổng thông tin và dịch vụ doanh nghiệp phát triển trên Next.js App Router, Tailwind CSS, tối ưu SEO 100 điểm Lighthouse và tương thích đa kích thước màn hình.',
    descriptionEn: 'Enterprise portal and service platform developed on Next.js App Router, Tailwind CSS, 100/100 Lighthouse SEO performance, and responsive cross-device layout.',
    category: 'web',
    tags: ['Next.js', 'React 19', 'Tailwind CSS', 'TypeScript', 'Supabase'],
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://digitalcreations.vn',
    githubUrl: 'https://github.com/HuynhAnh24h',
    featured: false,
    displayOrder: 4,
    createdAt: '2026-02-10',
  }
];

export const initialSkills: SkillItem[] = [
  // Enterprise Desktop & Low-Level Architecture
  {
    id: 'sk-desk-1',
    name: 'Python & FastAPI Architecture',
    category: 'backend',
    proficiency: 95,
    iconName: 'python',
    subtitle: 'Asynchronous APIs, Uvicorn, SQLAlchemy ORM, Multi-threading Workers',
  },
  {
    id: 'sk-desk-2',
    name: 'Hybrid Native Desktop App',
    category: 'backend',
    proficiency: 95,
    iconName: 'terminal',
    subtitle: 'Microsoft Edge WebView2, PyInstaller Windows Executable, 0-Terminal UI',
  },
  {
    id: 'sk-desk-3',
    name: 'Biometric Network Protocols (UDP/TCP)',
    category: 'backend',
    proficiency: 92,
    iconName: 'network',
    subtitle: 'ZKTeco ZK Protocol 4370, CommKey Authentication, LAN Auto-Discovery Radar',
  },
  {
    id: 'sk-desk-4',
    name: 'Hardware-Locked Security & Cryptography',
    category: 'backend',
    proficiency: 94,
    iconName: 'shield',
    subtitle: 'MachineGuid, MAC & CPU Cryptography, HMAC-SHA256, 30-Day Purge Engine',
  },

  // Full-Stack Web & MERN Cloud
  {
    id: 'sk-react-1',
    name: 'React 19 & Next.js App Router',
    category: 'react',
    proficiency: 96,
    iconName: 'react',
    subtitle: 'Vite 6, Hooks, Custom Hooks, Context, Tailwind CSS, Lucide Icons',
  },
  {
    id: 'sk-react-2',
    name: 'Node.js & Serverless Express',
    category: 'backend',
    proficiency: 90,
    iconName: 'node',
    subtitle: 'Vercel Serverless Functions, JWT Authentication, Microservices',
  },
  {
    id: 'sk-react-3',
    name: 'MongoDB Atlas & SQLite Caching',
    category: 'backend',
    proficiency: 88,
    iconName: 'mongo',
    subtitle: 'Mongoose schemas, aggregation pipelines, ACID transactions, offline DB',
  },
  {
    id: 'sk-react-4',
    name: 'Automated Banking & VietQR APIs',
    category: 'backend',
    proficiency: 92,
    iconName: 'coins',
    subtitle: 'ISO 8583 VietQR dynamic generation, payment memo reconciliation',
  },
  {
    id: 'sk-react-5',
    name: 'Mobile Development (React Native & Expo)',
    category: 'mobile',
    proficiency: 88,
    iconName: 'smartphone',
    subtitle: 'Cross-platform iOS/Android, fluid animations, offline caching',
  },
];

export const initialExperiences: ExperienceItem[] = [
  {
    id: 'exp-kts-lead',
    role: {
      vi: 'Lead Software Engineer & Enterprise System Architect',
      en: 'Lead Software Engineer & Enterprise System Architect',
    },
    company: 'KTS Software Enterprise Solutions',
    period: {
      vi: '2025 - Hiện tại',
      en: '2025 - Present',
    },
    location: 'Việt Nam / Remote',
    isCurrent: true,
    description: {
      vi: 'Chịu trách nhiệm kiến trúc sư trưởng và lập trình toàn bộ hệ thống Phần Mềm Quản Lý Chấm Công Thông Minh (KTS TimeAttendance Native Desktop v2.0) cùng Cổng Web Portal & SaaS Quản Lý Bản Quyền MERN Stack phục vụ vận hành thực tế cho hơn 1.000+ nhân sự nhà máy.',
      en: 'Lead architect and developer of KTS TimeAttendance Enterprise Suite - a native desktop application and cloud MERN SaaS platform for biometric workforce attendance and automated licensing.',
    },
    bulletPoints: {
      vi: [
        'Kiến trúc ứng dụng Native Desktop Hybrid độc quyền: Kết hợp Backend Python 3.14 + FastAPI nội bộ với Frontend React 19 + Tailwind CSS nhúng qua Microsoft Edge WebView2, đóng gói thành 1 App duy nhất (.exe) không hiện cửa sổ terminal CMD, khởi động cực nhanh chỉ 0.5s.',
        'Phát triển thuật toán Radar quét mạng LAN siêu tốc: Quét đồng thời toàn bộ dải subnet (254 IP) bằng 64 luồng đa tiến trình qua cổng 4370 TCP/UDP trong 0.7 giây, tự động nhận diện model, firmware, serial và số lượng nhân sự của Ronald Jack, Gigata T9, ZKTeco SpeedFace-V5L.',
        'Xây dựng thuật toán Auto-Shift tự động tính công: Tự nhận diện ca kíp, ca gãy, ca đêm 24/7, cơ chế debounce chống quẹt thẻ trùng lặp (Anti-passback) và xuất báo cáo ma trận điểm danh Excel 31 ngày chuẩn mực Bộ Luật Lao Động 2026.',
        'Thiết kế hệ thống bảo mật bản quyền khóa phần cứng (Hardware-Locked Licensing): Ràng buộc mã máy tính (MachineGuid + MAC + CPU ID) và Tên Công Ty (mỗi key cho 1 công ty duy nhất) bằng chữ ký HMAC-SHA256, tự động khóa toàn bộ tính năng khi hết hạn và cơ chế ân hạn 30 ngày tự động xóa sạch dữ liệu bảo mật nếu không thanh toán.',
        'Xây dựng Cloud Web Portal & Serverless SaaS (MERN Stack on Vercel): Tích hợp cổng thanh toán VietQR quét mã chuyển khoản tự động, trang tra cứu mã key online, dashboard quản trị admin 1-click duyệt đơn và phân phối cập nhật phần mềm (/api/updates/check).'
      ],
      en: [
        'Architected proprietary Native Hybrid Desktop App: Engineered internal Python 3.14 FastAPI backend with React 19 UI embedded via Microsoft Edge WebView2, packaged into a single standalone executable without terminal CMD, launching in 0.5s.',
        'Engineered ultra-fast LAN Auto-Discovery Radar: Scans complete 254-IP subnet concurrently with 64 workers on port 4370 UDP/TCP in 0.7s, auto-detecting biometric device models, serials, and user counts for ZKTeco, Ronald Jack, and Gigata.',
        'Developed Auto-Shift Attendance Engine: Automatic shift recognition for rotating/overnight shifts, anti-passback debouncing, and automated generation of 31-day Excel matrix timesheets compliant with 2026 Labor Laws.',
        'Designed Hardware-Locked Cryptographic Security System: Bound licenses strictly to Machine ID (MachineGuid + MAC + CPU) and Company Name with HMAC-SHA256 signatures, enforcing feature lockouts upon expiration and automatic 30-day grace period data purges.',
        'Built Cloud Web Portal & MERN Serverless SaaS: Integrated automated VietQR dynamic payment generation, self-service online key lookup, 1-click admin approval dashboard, and automated software update distribution (/api/updates/check).'
      ],
    },
  },
  {
    id: 'exp-kornbest',
    role: {
      vi: 'Kỹ Sư IT Hệ Thống & Quản Trị Hạ Tầng Doanh Nghiệp',
      en: 'Enterprise IT Systems & Infrastructure Engineer',
    },
    company: 'Công ty TNHH Kornbest Việt Nam',
    period: {
      vi: '04/2024 - Hiện tại',
      en: '04/2024 - Present',
    },
    location: 'Việt Nam',
    isCurrent: true,
    bulletPoints: {
      vi: [
        'Quản trị toàn diện hệ thống máy chủ, hạ tầng mạng LAN nội bộ, Wi-Fi công suất cao và hơn 100+ máy trạm của nhà máy sản xuất.',
        'Trực tiếp triển khai, cấu hình và vận hành hệ thống máy chấm công nhận diện khuôn mặt AI (ZKTeco SpeedFace-V5L) và vân tay Gigata T9.',
        'Lập kế hoạch bảo trì dự phòng, sao lưu dữ liệu máy chủ định kỳ, đảm bảo thời gian hoạt động hệ thống (uptime) đạt 99.9%.'
      ],
      en: [
        'Administer enterprise server infrastructure, internal factory LAN network, high-density Wi-Fi, and 100+ workstations.',
        'Directly deployed and operated AI facial recognition time clocks (ZKTeco SpeedFace-V5L) and Gigata T9 biometric devices.',
        'Executed preventative maintenance and automated database backups, maintaining 99.9% system uptime.'
      ],
    },
  },
  {
    id: 'exp-digital-creations',
    role: {
      vi: 'Frontend & Mobile App Developer',
      en: 'Frontend & Mobile App Developer',
    },
    company: 'Digital Creations',
    period: {
      vi: '2024 - 2025',
      en: '2024 - 2025',
    },
    location: 'TP.HCM / Remote',
    bulletPoints: {
      vi: [
        'Phát triển ứng dụng di động đa nền tảng React Native (iOS & Android) và cổng thông tin doanh nghiệp bằng Next.js App Router & Tailwind CSS.',
        'Tối ưu hóa hiệu năng render giao diện, đạt điểm số 100/100 Google Lighthouse SEO và trải nghiệm người dùng đạt chuẩn Material 3 & Apple HIG.',
        'Tích hợp các luồng API RESTful, quản lý state và xử lý đồng bộ dữ liệu thời gian thực.'
      ],
      en: [
        'Engineered cross-platform mobile apps with React Native and modern web portals with Next.js App Router and Tailwind CSS.',
        'Optimized frontend rendering performance, achieving 100/100 Google Lighthouse SEO and fluid 60fps mobile transitions.',
        'Integrated RESTful APIs, global state management, and real-time data synchronization.'
      ],
    },
  },
];

export const initialEducation: EducationItem[] = [
  {
    id: 'edu-1',
    school: {
      vi: 'Đại học Công nghệ TP.HCM (HUTECH)',
      en: 'Ho Chi Minh City University of Technology (HUTECH)',
    },
    degree: {
      vi: 'Cử nhân Công nghệ Thông tin - Chuyên ngành Kỹ thuật Phần mềm',
      en: "Bachelor's Degree in Information Technology - Software Engineering",
    },
    period: '2017 - 2023',
    details: {
      vi: 'Tốt nghiệp chính quy, trang bị nền tảng chuyên sâu về thuật toán, kiến trúc hệ thống, phát triển phần mềm đa nền tảng và quản trị mạng máy tính.',
      en: 'Graduated in Software Engineering with a strong foundation in algorithms, system architecture, multi-platform development, and computer networks.',
    },
  },
];

export const initialCertificates: CertificateItem[] = [
  {
    id: 'cert-1',
    title: {
      vi: 'Bằng Tốt nghiệp Đại học Chuyên ngành Kỹ thuật Phần mềm',
      en: 'University Degree in Software Engineering',
    },
    year: '2023',
    issuer: 'HUTECH',
  },
  {
    id: 'cert-2',
    title: {
      vi: 'Chứng chỉ Tiếng Anh CEFR B1',
      en: 'English CEFR B1 Certificate',
    },
    year: '2023',
    issuer: 'CEFR Assessment',
  },
  {
    id: 'cert-3',
    title: {
      vi: 'Chứng chỉ Nghiệp vụ Sư phạm',
      en: 'Pedagogical Methodology Certificate',
    },
    year: '2025',
    issuer: 'Bộ Giáo dục & Đào tạo',
  },
];

export const initialMessages: ContactMessage[] = [
  {
    id: 'msg-sample-1',
    name: 'KTS Enterprise Partner',
    email: 'contact@ktstime.vn',
    subject: 'Triển khai giải pháp phần mềm chấm công KTS TimeAttendance',
    message: 'Chào Huỳnh Anh, giải pháp chấm công quét LAN 0.7s và xuất Excel ma trận của bạn vận hành rất mượt mà tại nhà máy chúng tôi. Rất mong hợp tác lâu dài!',
    isRead: false,
    createdAt: '2026-11-10T14:30:00Z',
  },
];
