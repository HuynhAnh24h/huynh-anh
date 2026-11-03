-- =========================================================================
-- SUPABASE DATABASE SCHEMA FOR HUỲNH ANH PORTFOLIO
-- Execute this script in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/_/sql
-- =========================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. PROFILES TABLE
create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  full_name text not null default 'Huỳnh Anh',
  title_vi text not null default 'Frontend Developer & Mobile App Creator',
  title_en text not null default 'Frontend Developer & Mobile App Creator',
  company_vi text not null default 'Digital Creations',
  company_en text not null default 'Digital Creations',
  short_bio_vi text,
  short_bio_en text,
  about_me_vi text,
  about_me_en text,
  email text not null default 'anhdev24h@gmail.com',
  phone text default '0776 980 269',
  location_vi text default 'Hòa Thành, Tây Ninh, Việt Nam',
  location_en text default 'Hoa Thanh, Tay Ninh, Vietnam',
  github_url text default 'https://github.com/huynhanhdev',
  linkedin_url text default 'https://linkedin.com/in/huynhanh-dev',
  facebook_url text,
  avatar_url text,
  resume_url text,
  open_to_work boolean default true,
  years_of_experience integer default 3,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. PROJECTS TABLE
create table if not exists public.projects (
  id text primary key,
  title text not null,
  title_en text,
  description text not null,
  description_en text,
  category text not null check (category in ('web', 'mobile', 'shopify', 'wordpress')),
  tags text[] default '{}',
  image_url text,
  live_url text,
  github_url text,
  featured boolean default false,
  display_order integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. SKILLS TABLE
create table if not exists public.skills (
  id text primary key,
  name text not null,
  category text not null,
  proficiency integer default 80 check (proficiency >= 0 and proficiency <= 100),
  icon_name text,
  subtitle text,
  display_order integer default 0
);

-- 4. EXPERIENCES TABLE
create table if not exists public.experiences (
  id text primary key,
  role_vi text not null,
  role_en text not null,
  company text not null,
  period_vi text not null,
  period_en text not null,
  location text,
  description_vi text,
  description_en text,
  bullet_points_vi text[] default '{}',
  bullet_points_en text[] default '{}',
  is_current boolean default false,
  display_order integer default 0
);

-- 5. CONTACT MESSAGES TABLE
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  is_read boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- =========================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =========================================================================

alter table public.profiles enable row level security;
alter table public.projects enable row level security;
alter table public.skills enable row level security;
alter table public.experiences enable row level security;
alter table public.contact_messages enable row level security;

-- Public read access
create policy "Allow public read on profiles" on public.profiles for select using (true);
create policy "Allow public read on projects" on public.projects for select using (true);
create policy "Allow public read on skills" on public.skills for select using (true);
create policy "Allow public read on experiences" on public.experiences for select using (true);

-- Public can send contact messages
create policy "Allow public insert on contact_messages" on public.contact_messages for insert with check (true);

-- Authenticated Admin can perform all operations
create policy "Admin full access profiles" on public.profiles for all to authenticated using (true) with check (true);
create policy "Admin full access projects" on public.projects for all to authenticated using (true) with check (true);
create policy "Admin full access skills" on public.skills for all to authenticated using (true) with check (true);
create policy "Admin full access experiences" on public.experiences for all to authenticated using (true) with check (true);
create policy "Admin full access contact_messages" on public.contact_messages for all to authenticated using (true) with check (true);

-- =========================================================================
-- INITIAL SEED DATA
-- =========================================================================

-- Seed profile
insert into public.profiles (
  full_name,
  title_vi,
  title_en,
  company_vi,
  company_en,
  short_bio_vi,
  short_bio_en,
  about_me_vi,
  about_me_en,
  email,
  phone,
  location_vi,
  location_en,
  github_url,
  open_to_work,
  years_of_experience
) values (
  'Huỳnh Anh',
  'Frontend Developer & Mobile App Creator',
  'Frontend Developer & Mobile App Creator',
  'Digital Creations',
  'Digital Creations',
  'Frontend Developer tại Digital Creations, chuyên phát triển ứng dụng di động (Mobile Apps) và nền tảng website hiện đại với Next.js, React, React Native.',
  'Frontend Developer at Digital Creations, specializing in mobile app development and modern web applications with Next.js, React, and React Native.',
  'Tôi là Huỳnh Anh, hiện đang giữ vị trí Frontend Developer tại Digital Creations. Với hơn 3 năm kinh nghiệm trong lĩnh vực lập trình và vận hành công nghệ, tôi tập trung vào việc tạo ra các sản phẩm website tốc độ cao, giao diện mượt mà và các ứng dụng mobile tối ưu trải nghiệm người dùng.',
  'I am Huynh Anh, currently working as a Frontend Developer at Digital Creations. With over 3 years of hands-on experience in software development and IT operations, I specialize in crafting high-performance, responsive websites and intuitive mobile applications.',
  'anhdev24h@gmail.com',
  '0776 980 269',
  'Hòa Thành, Tây Ninh, Việt Nam',
  'Hoa Thanh, Tay Ninh, Vietnam',
  'https://github.com/huynhanhdev',
  true,
  3
) on conflict do nothing;

-- Seed Projects
insert into public.projects (id, title, title_en, description, description_en, category, tags, live_url, github_url, featured, display_order)
values
  ('proj-1', 'Digital Creations Mobile App', 'Digital Creations Mobile App', 'Ứng dụng mobile đa nền tảng tối ưu trải nghiệm người dùng và kết nối dịch vụ số.', 'Cross-platform mobile application offering seamless user experience.', 'mobile', array['React Native', 'Expo', 'TypeScript', 'Tailwind'], 'https://digitalcreations.vn', 'https://github.com/huynhanhdev', true, 1),
  ('proj-2', 'Digital Creations Portal & Web App', 'Digital Creations Portal & Web App', 'Website cổng thông tin và dịch vụ phát triển trên Next.js, tối ưu SEO 100 điểm Lighthouse.', 'Enterprise portal developed on Next.js App Router, 100/100 Lighthouse SEO.', 'web', array['Next.js', 'React 19', 'Tailwind CSS', 'Supabase'], 'https://digitalcreations.vn', 'https://github.com/huynhanhdev', true, 2),
  ('proj-3', 'Sayaka Manager', 'Sayaka Manager', 'Hệ thống quản lý dữ liệu và vận hành nội bộ xây dựng bằng React.js, tích hợp dashboard trực quan.', 'Internal management system built with React.js featuring interactive dashboards.', 'web', array['React JS', 'Node.js', 'Prisma', 'Tailwind CSS'], 'https://sayaka-manager.vercel.app', 'https://github.com/huynhanhdev/sayaka-manager', true, 3),
  ('proj-4', 'Chan-Chan Form App', 'Chan-Chan Dynamic Form Engine', 'Ứng dụng React xử lý biểu mẫu khảo sát và thu thập thông tin khách hàng linh hoạt.', 'React application for dynamic survey and client intake form handling.', 'web', array['React JS', 'Tailwind CSS', 'Vercel'], 'https://chan-chanform.vercel.app', 'https://github.com/huynhanhdev/chan-chanform', false, 4),
  ('proj-5', 'yex.vn', 'yex.vn E-Commerce Portal', 'Website thương mại điện tử WordPress tùy biến sâu cấu trúc theme, tối ưu tốc độ tải trang.', 'WordPress e-commerce portal with deep custom theme architecture.', 'wordpress', array['WordPress', 'WooCommerce', 'PHP', 'Custom Theme'], 'https://yex.vn', null, true, 5),
  ('proj-6', 'icago.com', 'icago.com Corporate Website', 'Website doanh nghiệp giải pháp định cư quốc tế ICAVIET, bảo mật cao và chống tấn công SQLi.', 'Corporate international immigration solutions platform with security hardening.', 'wordpress', array['WordPress', 'PHP', 'Security'], 'https://icago.com', null, false, 6),
  ('proj-7', 'pickoinn.com.vn', 'pickoinn.com.vn Commercial Site', 'Website bán hàng và giới thiệu sản phẩm đối tác, tương thích 100% thiết bị di động.', 'Commercial brand catalog and product showcase portal, completely responsive.', 'wordpress', array['WordPress', 'CSS3', 'Mobile Responsive'], 'https://pickoinn.com.vn', null, false, 7),
  ('proj-8', 'tqg.com', 'tqg.com Enterprise Portal', 'Giải pháp website doanh nghiệp chuyên biệt thiết kế trên nền tảng Shopify.', 'Custom tailored enterprise website engineered on Shopify platform.', 'shopify', array['Shopify', 'Liquid', 'E-commerce'], 'https://tqg.com', null, false, 8)
on conflict (id) do nothing;

-- Seed Skills (Thế mạnh chuyên môn của Huỳnh Anh)
insert into public.skills (id, name, category, proficiency, icon_name, subtitle, display_order)
values
  ('sk-wp-1', 'WordPress Custom Theme', 'wordpress', 95, 'wordpress', 'HTML, CSS, JS, PHP, Custom Post Types & Hooks', 1),
  ('sk-wp-2', 'Custom WooCommerce', 'wordpress', 92, 'woocommerce', 'Tùy biến luồng thanh toán, trang sản phẩm & mini cart', 2),
  ('sk-wp-3', 'Elementor Page Builder', 'wordpress', 92, 'elementor', 'Custom widget, dynamic tags, responsive layouts', 3),
  ('sk-wp-4', 'Flatsome Theme', 'wordpress', 95, 'flatsome', 'UX Builder, tối ưu tốc độ load e-commerce chuẩn SEO', 4),
  ('sk-wp-5', 'PHP Development', 'wordpress', 88, 'php', 'Functions.php, REST API WordPress, bảo mật an toàn', 5),
  ('sk-react-1', 'React.js', 'react', 92, 'react', 'Hooks, Custom Hooks, Context, Component architecture', 6),
  ('sk-react-2', 'TypeScript', 'react', 90, 'typescript', 'Type safety, Generic, Interface, Strict typing', 7),
  ('sk-react-3', 'Redux Toolkit & Redux Thunk', 'react', 88, 'redux', 'createSlice, createAsyncThunk, global state', 8),
  ('sk-web-1', 'HTML5 & Modern CSS3', 'frontend', 96, 'html5', 'Semantic HTML, Flexbox, CSS Grid, Responsive', 9),
  ('sk-web-2', 'JavaScript (ES6+)', 'frontend', 92, 'javascript', 'Async/Await, Promises, Closures, DOM', 10),
  ('sk-back-1', 'Node.js', 'backend', 85, 'node', 'Express.js, REST API, Server architecture', 11),
  ('sk-back-2', 'MongoDB', 'backend', 82, 'mongo', 'Mongoose schemas, aggregation pipelines, NoSQL', 12)
on conflict (id) do nothing;
