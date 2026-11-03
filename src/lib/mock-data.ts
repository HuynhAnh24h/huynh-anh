import { ProfileData, ProjectItem, SkillItem, ExperienceItem, EducationItem, CertificateItem, ContactMessage } from './types';

export const initialProfileData: ProfileData = {
  fullName: 'Huỳnh Anh',
  title: {
    vi: 'Frontend Developer & Mobile App Creator',
    en: 'Frontend Developer & Mobile App Creator',
  },
  company: {
    vi: 'Digital Creations',
    en: 'Digital Creations',
  },
  shortBio: {
    vi: 'Frontend Developer tại Digital Creations, chuyên phát triển ứng dụng di động (Mobile Apps) và nền tảng website hiện đại với Next.js, React, React Native. Kết hợp tư duy lập trình giao diện tối ưu và nền tảng hạ tầng IT vững chắc.',
    en: 'Frontend Developer at Digital Creations, specializing in mobile app development and modern web applications with Next.js, React, and React Native. Combining UX/UI engineering with a solid IT infrastructure background.',
  },
  aboutMe: {
    vi: 'Tôi là Huỳnh Anh, hiện đang giữ vị trí Frontend Developer tại Digital Creations. Với hơn 3 năm kinh nghiệm trong lĩnh vực lập trình và vận hành công nghệ, tôi tập trung vào việc tạo ra các sản phẩm website tốc độ cao, giao diện mượt mà và các ứng dụng mobile tối ưu trải nghiệm người dùng. Ngoài thế mạnh về React, Next.js và React Native, tôi có chuyên môn vững vàng trong phát triển theme Shopify, WordPress cũng như quản trị hạ tầng hệ thống IT cho doanh nghiệp.',
    en: "I am Huynh Anh, currently working as a Frontend Developer at Digital Creations. With over 3 years of hands-on experience in software development and IT operations, I specialize in crafting high-performance, responsive websites and intuitive mobile applications using React, Next.js, and React Native. Beyond web & mobile development, I also excel in custom Shopify & WordPress engineering and enterprise IT systems administration.",
  },
  email: 'anhdev24h@gmail.com',
  phone: '0776 980 269',
  location: {
    vi: 'Hòa Thành, Tây Ninh, Việt Nam',
    en: 'Hoa Thanh, Tay Ninh, Vietnam',
  },
  githubUrl: 'https://github.com/huynhanhdev',
  linkedinUrl: 'https://linkedin.com/in/huynhanh-dev',
  facebookUrl: 'https://facebook.com',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  resumeUrl: '#',
  openToWork: true,
  yearsOfExperience: 3,
};

export const initialProjects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Digital Creations Mobile App',
    titleEn: 'Digital Creations Mobile App',
    description: 'Ứng dụng mobile đa nền tảng (iOS & Android) tối ưu trải nghiệm người dùng, kết nối hệ thống dịch vụ số, giao diện mượt mà theo chuẩn Material 3 & Apple HIG.',
    descriptionEn: 'Cross-platform mobile application (iOS & Android) offering seamless user experience, digital services connectivity, and fluid animations adhering to modern design guidelines.',
    category: 'mobile',
    tags: ['React Native', 'Expo', 'TypeScript', 'Tailwind', 'REST API'],
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://digitalcreations.vn',
    githubUrl: 'https://github.com/huynhanhdev',
    featured: true,
    displayOrder: 1,
    createdAt: '2026-01-15',
  },
  {
    id: 'proj-2',
    title: 'Digital Creations Portal & Web App',
    titleEn: 'Digital Creations Portal & Web App',
    description: 'Website cổng thông tin và dịch vụ doanh nghiệp phát triển trên Next.js App Router, Tailwind CSS, tối ưu SEO 100 điểm Lighthouse và tương thích đa kích thước màn hình.',
    descriptionEn: 'Enterprise portal and service platform developed on Next.js App Router, Tailwind CSS, 100/100 Lighthouse SEO performance, and responsive cross-device layout.',
    category: 'web',
    tags: ['Next.js', 'React 19', 'Tailwind CSS', 'TypeScript', 'Supabase'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://digitalcreations.vn',
    githubUrl: 'https://github.com/huynhanhdev',
    featured: true,
    displayOrder: 2,
    createdAt: '2026-02-10',
  },
  {
    id: 'proj-3',
    title: 'Sayaka Manager',
    titleEn: 'Sayaka Manager',
    description: 'Hệ thống quản lý dữ liệu và vận hành nội bộ xây dựng bằng React.js, tích hợp dashboard trực quan, phân quyền người dùng và biểu đồ thống kê thời gian thực.',
    descriptionEn: 'Internal management and data operation system built with React.js, featuring interactive dashboards, role-based access control, and real-time analytics.',
    category: 'web',
    tags: ['React JS', 'Node.js', 'Prisma', 'Tailwind CSS', 'Vercel'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://sayaka-manager.vercel.app',
    githubUrl: 'https://github.com/huynhanhdev/sayaka-manager',
    featured: true,
    displayOrder: 3,
    createdAt: '2024-08-20',
  },
  {
    id: 'proj-4',
    title: 'Chan-Chan Form App',
    titleEn: 'Chan-Chan Dynamic Form Engine',
    description: 'Ứng dụng React xử lý biểu mẫu khảo sát và thu thập thông tin khách hàng linh hoạt, tích hợp kiểm tra dữ liệu đầu vào và xuất báo cáo tự động.',
    descriptionEn: 'React application for dynamic survey and client intake form handling, with real-time field validation and export reporting capabilities.',
    category: 'web',
    tags: ['React JS', 'Formik/Zod', 'Tailwind CSS', 'Vercel'],
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://chan-chanform.vercel.app',
    githubUrl: 'https://github.com/huynhanhdev/chan-chanform',
    featured: false,
    displayOrder: 4,
    createdAt: '2024-05-15',
  },
  {
    id: 'proj-5',
    title: 'yex.vn',
    titleEn: 'yex.vn E-Commerce Portal',
    description: 'Website thương mại điện tử WordPress tùy biến sâu cấu trúc theme, tối ưu tốc độ tải trang, thanh toán trực tuyến và chuẩn SEO Google.',
    descriptionEn: 'WordPress e-commerce portal with deep custom theme architecture, high-speed load optimization, online payments, and Google SEO standards.',
    category: 'wordpress',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'Custom Theme', 'SEO'],
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://yex.vn',
    featured: true,
    displayOrder: 5,
    createdAt: '2023-11-10',
  },
  {
    id: 'proj-6',
    title: 'icago.com',
    titleEn: 'icago.com Corporate Website',
    description: 'Website doanh nghiệp giải pháp định cư quốc tế ICAVIET, tích hợp cổng đăng ký tư vấn trực tuyến, bảo mật cao và phòng chống tấn công SQL Injection.',
    descriptionEn: 'Corporate international immigration solutions platform, featuring online consultation booking, enterprise security, and anti-injection shielding.',
    category: 'wordpress',
    tags: ['WordPress', 'PHP', 'Security', 'Corporate'],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://icago.com',
    featured: false,
    displayOrder: 6,
    createdAt: '2023-09-01',
  },
  {
    id: 'proj-7',
    title: 'pickoinn.com.vn',
    titleEn: 'pickoinn.com.vn Commercial Site',
    description: 'Website bán hàng và giới thiệu sản phẩm đối tác, thiết kế chuẩn nhận diện thương hiệu, tương thích 100% thiết bị di động.',
    descriptionEn: 'Commercial brand catalog and product showcase portal built according to strict corporate guidelines, completely responsive.',
    category: 'wordpress',
    tags: ['WordPress', 'CSS3', 'Mobile Responsive'],
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://pickoinn.com.vn',
    featured: false,
    displayOrder: 7,
    createdAt: '2023-07-22',
  },
  {
    id: 'proj-8',
    title: 'tqg.com',
    titleEn: 'tqg.com Enterprise Portal',
    description: 'Giải pháp website doanh nghiệp chuyên biệt theo đơn đặt hàng, tối ưu hóa quy trình tiếp cận khách hàng tiềm năng.',
    descriptionEn: 'Custom tailored enterprise website engineered per client specification, optimizing customer acquisition flow.',
    category: 'shopify',
    tags: ['Shopify', 'Liquid', 'E-commerce', 'Responsive'],
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://tqg.com',
    featured: false,
    displayOrder: 8,
    createdAt: '2023-04-18',
  }
];

export const initialSkills: SkillItem[] = [
  // WordPress Theme Development
  {
    id: 'sk-wp-1',
    name: 'WordPress Custom Theme',
    category: 'wordpress',
    proficiency: 95,
    iconName: 'wordpress',
    subtitle: 'HTML, CSS, JS, PHP, Custom Post Types & Hooks',
  },
  {
    id: 'sk-wp-2',
    name: 'Custom WooCommerce',
    category: 'wordpress',
    proficiency: 92,
    iconName: 'woocommerce',
    subtitle: 'Tùy biến luồng thanh toán, trang sản phẩm & mini cart',
  },
  {
    id: 'sk-wp-3',
    name: 'Elementor Page Builder',
    category: 'wordpress',
    proficiency: 92,
    iconName: 'elementor',
    subtitle: 'Custom widget, dynamic tags, responsive layouts',
  },
  {
    id: 'sk-wp-4',
    name: 'Flatsome Theme',
    category: 'wordpress',
    proficiency: 95,
    iconName: 'flatsome',
    subtitle: 'UX Builder, tối ưu tốc độ load e-commerce chuẩn SEO',
  },
  {
    id: 'sk-wp-5',
    name: 'PHP Development',
    category: 'wordpress',
    proficiency: 88,
    iconName: 'php',
    subtitle: 'Functions.php, REST API WordPress, bảo mật an toàn',
  },

  // React & Modern Frontend
  {
    id: 'sk-react-1',
    name: 'React.js',
    category: 'react',
    proficiency: 92,
    iconName: 'react',
    subtitle: 'Hooks, Custom Hooks, Context, Component architecture',
  },
  {
    id: 'sk-react-2',
    name: 'TypeScript',
    category: 'react',
    proficiency: 90,
    iconName: 'typescript',
    subtitle: 'Type safety, Generic, Interface, Strict typing',
  },
  {
    id: 'sk-react-3',
    name: 'Redux Toolkit & Redux Thunk',
    category: 'react',
    proficiency: 88,
    iconName: 'redux',
    subtitle: 'createSlice, createAsyncThunk, global state management',
  },

  // Core Web
  {
    id: 'sk-web-1',
    name: 'HTML5 & Modern CSS3',
    category: 'frontend',
    proficiency: 96,
    iconName: 'html5',
    subtitle: 'Semantic HTML, Flexbox, CSS Grid, Media queries, Keyframes',
  },
  {
    id: 'sk-web-2',
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    proficiency: 92,
    iconName: 'javascript',
    subtitle: 'Async/Await, Promises, Closures, DOM manipulation',
  },

  // Backend & Database
  {
    id: 'sk-back-1',
    name: 'Node.js',
    category: 'backend',
    proficiency: 85,
    iconName: 'node',
    subtitle: 'Express.js, REST API, Middleware, Server architecture',
  },
  {
    id: 'sk-back-2',
    name: 'MongoDB',
    category: 'backend',
    proficiency: 82,
    iconName: 'mongo',
    subtitle: 'Mongoose schemas, aggregation pipelines, NoSQL',
  },
];

export const initialExperiences: ExperienceItem[] = [
  {
    id: 'exp-current',
    role: {
      vi: 'Frontend Developer (Web & Mobile Apps)',
      en: 'Frontend Developer (Web & Mobile Apps)',
    },
    company: 'Digital Creations',
    period: {
      vi: '2025 - Hiện tại',
      en: '2025 - Present',
    },
    location: 'TP.HCM / Remote',
    isCurrent: true,
    description: {
      vi: 'Chịu trách nhiệm chính trong việc phát triển giao diện website hiện đại và ứng dụng di động cho các dự án của Digital Creations.',
      en: 'Leading the development of modern web interfaces and cross-platform mobile applications for Digital Creations digital products.',
    },
    bulletPoints: {
      vi: [
        'Xây dựng và tối ưu ứng dụng di động (React Native) và nền tảng website với Next.js & React.',
        'Thiết kế kiến trúc component có khả năng tái sử dụng cao, áp dụng Tailwind CSS cho giao diện linh hoạt.',
        'Tích hợp RESTful API, quản lý state và tối ưu tốc độ phản hồi trên cả mobile và desktop.',
        'Phối hợp với Product Designer và Backend Developer để mang lại trải nghiệm người dùng ấn tượng nhất.',
      ],
      en: [
        'Develop and optimize cross-platform mobile apps (React Native) and modern websites using Next.js & React.',
        'Architect scalable, reusable component libraries with Tailwind CSS for dynamic layout rendering.',
        'Integrate RESTful APIs, manage application state, and optimize performance across mobile and desktop devices.',
        'Collaborate with Product Designers and Backend Engineers to deliver top-tier user experiences.',
      ],
    },
  },
  {
    id: 'exp-1',
    role: {
      vi: 'React Developer (Freelancer)',
      en: 'React Developer (Freelancer)',
    },
    company: 'Freelance / Làm việc tự do',
    period: {
      vi: '06/2024 - Hiện tại',
      en: '06/2024 - Present',
    },
    location: 'Việt Nam',
    isCurrent: true,
    bulletPoints: {
      vi: [
        'Lập trình giao diện người dùng UX/UI theo thiết kế chuẩn mẫu Figma.',
        'Làm việc với API, phối hợp với Backend để kiểm soát, gửi và test API bằng Postman.',
        'Cân đối thời gian hiệu quả giữa các dự án để luôn đảm bảo đúng tiến độ bàn giao cho khách hàng.',
      ],
      en: [
        'Implement pixel-perfect responsive UX/UI from Figma design files.',
        'Collaborate with backend teams to consume, validate, and test RESTful APIs via Postman.',
        'Effectively manage project delivery timelines to ensure on-time delivery for clients.',
      ],
    },
  },
  {
    id: 'exp-2',
    role: {
      vi: 'Nhân viên IT Hệ thống',
      en: 'IT Systems Specialist',
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
        'Quản trị hệ thống server và mạng máy tính nội bộ của công ty.',
        'Lên kế hoạch giám sát, bảo trì, nâng cấp thiết bị phần cứng máy tính định kỳ.',
        'Cài đặt phần mềm, phần cứng và hỗ trợ người dùng xử lý lỗi máy tính, mạng văn phòng.',
        'Lắp đặt, cấu hình hệ thống camera an ninh và hạ tầng Wi-Fi doanh nghiệp.',
      ],
      en: [
        'Administer internal company servers and enterprise network infrastructure.',
        'Plan and execute scheduled monitoring, hardware maintenance, and equipment upgrades.',
        'Install software, hardware and provide technical support to resolve user workstation issues.',
        'Deploy and configure security camera networks and high-density enterprise Wi-Fi systems.',
      ],
    },
  },
  {
    id: 'exp-3',
    role: {
      vi: 'Chuyên viên IT phần mềm & Website',
      en: 'Software & Web IT Specialist',
    },
    company: 'Công ty giải pháp định cư ICAVIET',
    period: {
      vi: '06/2023 - 03/2024',
      en: '06/2023 - 03/2024',
    },
    location: 'TP.HCM',
    bulletPoints: {
      vi: [
        'Quản trị website, phối hợp marketing chỉnh sửa nội dung và phát triển website thương mại, website nội bộ.',
        'Quản trị hosting, tăng cường bảo mật website, ngăn chặn các cuộc tấn công SQL Injection từ bên ngoài.',
        'Kiểm soát thiết bị, lên kế hoạch bảo trì máy tính; giám sát mạng LAN, Wi-Fi, Internet thông suốt.',
      ],
      en: [
        'Managed corporate websites, collaborated with marketing team to deploy features for public & intranet portals.',
        'Managed cloud hosting, implemented security hardening, and mitigated external SQL Injection vulnerabilities.',
        'Maintained office workstation hardware and monitored LAN/Wi-Fi/Internet uptime.',
      ],
    },
  },
  {
    id: 'exp-4',
    role: {
      vi: 'Technical Support (Junior)',
      en: 'Junior Technical Support',
    },
    company: 'T&A Tech',
    period: {
      vi: '10/2022 - 01/2023',
      en: '10/2022 - 01/2023',
    },
    location: 'TP.HCM',
    bulletPoints: {
      vi: [
        'Hỗ trợ kỹ thuật người dùng, xử lý sự cố máy tính và thiết bị văn phòng.',
        'Cài đặt hệ điều hành Windows, macOS và các phần mềm ứng dụng nghiệp vụ.',
      ],
      en: [
        'Provided Tier-1 technical support for end-users, resolving computer and peripheral issues.',
        'Installed and configured Windows, macOS, and essential office productivity suites.',
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
      vi: 'Cử nhân Công nghệ Thông tin - Chuyên ngành Công nghệ Phần mềm',
      en: "Bachelor's Degree in Information Technology - Software Engineering",
    },
    period: '2017 - 2023',
    details: {
      vi: 'Tốt nghiệp chính quy, trang bị nền tảng thuật toán, kiến trúc phần mềm, phát triển ứng dụng web và quản trị cơ sở dữ liệu.',
      en: 'Successfully graduated with a comprehensive foundation in algorithms, software architecture, web engineering, and database management.',
    },
  },
];

export const initialCertificates: CertificateItem[] = [
  {
    id: 'cert-1',
    title: {
      vi: 'Bằng Tốt nghiệp Đại học Chuyên ngành Công nghệ Phần mềm',
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
    name: 'Nguyễn Văn Minh',
    email: 'minh.nguyen@example.com',
    subject: 'Trao đổi về dự án phát triển Ứng dụng Mobile & Website',
    message: 'Chào Huỳnh Anh, mình thấy profile của bạn tại Digital Creations rất ấn tượng. Mình đang có kế hoạch làm ứng dụng mobile kết nối với website thương mại điện tử, muốn trao đổi thêm về thời gian và chi phí triển khai.',
    isRead: false,
    createdAt: '2026-11-02T14:30:00Z',
  },
  {
    id: 'msg-sample-2',
    name: 'Sarah Jenkins',
    email: 'sarah.j@globaldesign.co',
    subject: 'Next.js Frontend Developer Collaboration',
    message: 'Hello Huynh Anh! We have an upcoming mobile & web portal project and are looking for a dedicated Frontend Developer proficient in React/Next.js. Looking forward to connecting!',
    isRead: true,
    createdAt: '2026-10-28T09:15:00Z',
  },
];
