# Portfolio Huỳnh Anh - Frontend Developer @ Digital Creations

> Trang cá nhân chuyên nghiệp của **Huỳnh Anh** xây dựng bằng **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, và **Supabase**.

---

## 🌟 Tính Năng Nổi Bật

1. **Thông tin định vị công việc**:
   - Hiện tại là **Frontend Developer** tại **Digital Creations**.
   - Chuyên sâu phát triển **Ứng dụng Mobile** (React Native, Cross-platform) và **Website** hiện đại (Next.js, React, Tailwind CSS).
   - Tùy biến CMS thương mại điện tử (**Shopify Theme**, **WordPress**, **WooCommerce**).
   - Nền tảng quản trị **Hạ tầng hệ thống IT** & an ninh mạng (VLAN, Server, chống SQL Injection).

2. **Cổng Quản Trị Admin (`/admin`)**:
   - **Quản lý Dự án**: Thêm mới, chỉnh sửa, xóa dự án, gắn tag công nghệ, link demo, link source code và đánh dấu dự án nổi bật.
   - **Quản lý Profile**: Cập nhật chức danh, công ty Digital Creations, bio ngắn, bài giới thiệu chi tiết, thông tin liên hệ và mạng xã hội.
   - **Hòm thư Liên hệ (Contact Inquiries)**: Xem toàn bộ tin nhắn gửi từ Contact Form, lọc thư chưa đọc, đánh dấu đã đọc và bấm **"Trả lời qua Email"** trực tiếp.
   - **Cấu hình Supabase**: Trực quan hóa trạng thái kết nối Cloud vs Local Mock, hướng dẫn cấu hình từng bước kèm nút sao chép script SQL.

3. **Contact Form gửi về Email**:
   - Form liên hệ có kiểm tra tính hợp lệ dữ liệu, chống spam honeypot và hiệu ứng ăn mừng pháo hoa (confetti).
   - Lưu trữ tự động vào bảng `contact_messages` trong Supabase.
   - Hỗ trợ gửi thông báo tức thời về email `anhdev24h@gmail.com` (qua API Resend hoặc SMTP).

4. **Chế độ Sáng / Tối (Light & Dark Mode)**:
   - Chuyển đổi mượt mà bằng `next-themes` với bảng màu neon emerald hiện đại và nền canvas hạt tương tác.

5. **Đa ngôn ngữ (Tiếng Việt 🇻🇳 & English 🇬🇧)**:
   - Chuyển đổi ngôn ngữ tức thì với bộ từ điển đồng bộ cho toàn bộ giao diện và bảng quản trị.

---

## 🚀 Khởi Chạy Nhanh Dự Án

### 1. Cài đặt thư viện (nếu cần)
```bash
npm install
```

### 2. Chạy môi trường phát triển (Dev server)
```bash
npm run dev
```
Truy cập:
- **Trang chủ Portfolio**: [http://localhost:3000](http://localhost:3000)
- **Cổng Quản trị Admin**: [http://localhost:3000/admin](http://localhost:3000/admin)

---

## 🔐 Đăng Nhập Cổng Admin

- **Đường dẫn**: `http://localhost:3000/admin`
- **Email quản trị**: `anhdev24h@gmail.com`
- **Mật khẩu**: `huynhanh2026` (hoặc `admin` / `admin`)
- Hoặc bạn có thể bấm trực tiếp nút **"Vào nhanh chế độ Demo Admin"** để trải nghiệm ngay mà không cần cấu hình tài khoản.

---

## 📧 Hướng Dẫn Cấu Hình Gửi Mail Bằng Google App Password (Gmail)

Khi khách gửi liên hệ trên website, tin nhắn sẽ được tự động gửi thẳng về hộp thư **anhdev24h@gmail.com** của bạn thông qua SMTP Gmail:

1. Đăng nhập tài khoản Google và mở trang [Google App Passwords](https://myaccount.google.com/apppasswords) *(yêu cầu tài khoản đã bật Xác minh 2 bước)*.
2. Nhập tên ứng dụng là **Portfolio** và bấm **Tạo (Create)**.
3. Google sẽ hiển thị mật khẩu ứng dụng gồm 16 ký tự (ví dụ: `abcd efgh ijkl mnop`).
4. Mở file [`.env.local`](file:///c:/Users/Huynh%20Anh/Desktop/huynh-anh-profile/.env.local) và điền vào:
   ```env
   GMAIL_USER=anhdev24h@gmail.com
   GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
   CONTACT_NOTIFICATION_EMAIL=anhdev24h@gmail.com
   ```
5. Khởi chạy dự án (`npm run dev`), giờ đây khi khách điền Contact Form, bạn sẽ nhận được email ngay tức thì!

---

## 🗄️ Hướng Dẫn Kết Nối Supabase

Dự án đã có cơ chế lưu trữ thông minh: ngay cả khi chưa kết nối Supabase, website vẫn chạy mượt mà ở chế độ **Local Storage Mode**. Khi bạn muốn đồng bộ dữ liệu lên đám mây:

1. Đăng ký/đăng nhập tài khoản tại [supabase.com](https://supabase.com) và tạo một Project mới.
2. Mở mục **SQL Editor** trong Supabase Dashboard.
3. Mở file [supabase/schema.sql](file:///c:/Users/Huynh%20Anh/Desktop/huynh-anh-profile/supabase/schema.sql) trong dự án này, copy toàn bộ nội dung và dán vào SQL Editor rồi bấm **Run**. Toàn bộ bảng, chính sách bảo mật (RLS) và dữ liệu mẫu sẽ được tạo tự động.
4. Mở file `.env.local` và điền:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
CONTACT_NOTIFICATION_EMAIL=anhdev24h@gmail.com

# Tùy chọn để gửi email thông báo khi có liên hệ mới (Đăng ký miễn phí tại https://resend.com):
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
```
5. Khởi động lại server: `npm run dev`.

---

## 📁 Cấu Trúc Thư Mục

```
huynh-anh-profile/
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   └── page.tsx           # Trang tổng quan quản trị Admin
│   │   ├── api/
│   │   │   └── contact/route.ts   # API xử lý form liên hệ & gửi email
│   │   ├── globals.css            # Cấu hình Tailwind CSS v4 & theme
│   │   ├── layout.tsx             # Root layout với ThemeProvider & LanguageProvider
│   │   └── page.tsx               # Trang portfolio chính của Huỳnh Anh
│   ├── components/
│   │   ├── admin/
│   │   │   ├── AdminNavbar.tsx    # Thanh điều hướng admin tabs
│   │   │   ├── ProjectManager.tsx # Thêm, sửa, xóa dự án
│   │   │   ├── ProfileManager.tsx # Chỉnh sửa thông tin profile, công ty Digital Creations
│   │   │   ├── MessagesManager.tsx# Quản lý hòm thư liên hệ, reply email
│   │   │   └── SupabaseSetupGuide.tsx # Hướng dẫn thiết lập Supabase
│   │   ├── Hero.tsx               # Phần giới thiệu đầu trang kèm terminal code
│   │   ├── About.tsx              # Giới thiệu bản thân & phong cách làm việc
│   │   ├── Stats.tsx              # Thống kê thành tích & năng lực
│   │   ├── Experience.tsx         # Dòng thời gian kinh nghiệm làm việc
│   │   ├── Skills.tsx             # Kỹ năng phân loại (Web, Mobile, CMS, IT)
│   │   ├── Projects.tsx           # Danh sách dự án kèm bộ lọc category
│   │   ├── Education.tsx          # Học vấn HUTECH & chứng chỉ
│   │   ├── ContactForm.tsx        # Form liên hệ kèm confetti & gửi mail
│   │   ├── Navbar.tsx             # Header sticky & menu mobile
│   │   ├── Footer.tsx             # Footer chân trang
│   │   ├── ParticleCanvas.tsx     # Hiệu ứng mạng lưới hạt công nghệ
│   │   ├── ThemeToggle.tsx        # Nút chuyển sáng/tối
│   │   └── LanguageToggle.tsx     # Nút chuyển đổi Tiếng Việt / English
│   └── lib/
│       ├── types.ts               # Định nghĩa kiểu dữ liệu TypeScript
│       ├── translations.ts        # Bộ từ điển song ngữ VI & EN
│       ├── mock-data.ts           # Dữ liệu hạt giống chuẩn của Huỳnh Anh
│       ├── data-service.ts        # Tầng giao tiếp dữ liệu (Supabase + Local fallback)
│       └── supabase.ts            # Client khởi tạo Supabase
├── supabase/
│   └── schema.sql                 # Toàn bộ script SQL bảng & bảo mật RLS
├── .env.local                     # Biến môi trường local
├── .env.local.example             # Mẫu biến môi trường
└── README.md
```
