'use client';

import React, { useState } from 'react';
import {
  X,
  Cpu,
  Layers,
  Network,
  ShieldCheck,
  Server,
  Zap,
  FileSpreadsheet,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  RefreshCw,
  Lock,
  Building,
  Terminal,
  Database,
  ArrowRight
} from 'lucide-react';
import { GithubIcon } from './icons';

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'vi' | 'en';
}

export function ProjectDetailModal({ isOpen, onClose, lang }: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'arch' | 'tech' | 'deploy' | 'ops' | 'impact'>('arch');

  if (!isOpen) return null;

  const tabs = [
    { id: 'arch', label: lang === 'vi' ? '🏛️ Kiến Trúc Hệ Thống' : '🏛️ System Architecture' },
    { id: 'tech', label: lang === 'vi' ? '⚙️ Công Nghệ Sử Dụng' : '⚙️ Full Tech Stack' },
    { id: 'deploy', label: lang === 'vi' ? '🚀 Cách Tôi Triển Khai' : '🚀 How I Deployed It' },
    { id: 'ops', label: lang === 'vi' ? '🔄 Quy Trình Vận Hành' : '🔄 Daily Operations' },
    { id: 'impact', label: lang === 'vi' ? '📊 Số Liệu & Hiệu Quả' : '📊 Metrics & Impact' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white dark:bg-[#121826] border border-[#e2e8f0] dark:border-[#1e293b] rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden text-slate-800 dark:text-slate-200">
        
        {/* Header Bar */}
        <div className="px-6 sm:px-8 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-[#0c1220] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  KTS TimeAttendance Suite &bull; Báo Cáo Kỹ Thuật Dự Án
                </h2>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  PRODUCTION v2.0
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Kiến trúc, Công nghệ, Triển khai & Vận hành thực tế bởi <strong>Huỳnh Anh</strong>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="px-6 sm:px-8 py-2.5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0e1626] flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer border ${
                activeTab === tab.id
                  ? 'bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-500/20'
                  : 'bg-slate-100 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm leading-relaxed">
          
          {/* TAB 1: ARCHITECTURE */}
          {activeTab === 'arch' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <span>🏛️</span> Mô Hình Kiến Trúc Hybrid Client - Serverless Cloud
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Hệ thống được thiết kế theo tiêu chuẩn <strong>Offline-First Enterprise</strong>: Client Desktop chạy độc lập 100% trong mạng nội bộ nhà máy (không cần mở cổng NAT mạng ra ngoài internet), đồng bộ dữ liệu sinh trắc học trực tiếp qua socket mạng LAN; song song với cổng Web Portal trên đám mây quản lý bản quyền tự động.
                </p>
              </div>

              {/* Architecture Diagram */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0b1320] border border-slate-800 text-slate-200 font-mono text-[11px] sm:text-xs overflow-x-auto leading-relaxed shadow-xl">
                <pre>{`┌────────────────────────────────────────────────────────────────────────┐
│  1. CLIENT NATIVE DESKTOP APP (Windows 10/11 - Single .EXE, 0-Terminal)│
│  ├─ UI Shell: React 19 + Tailwind CSS + Lucide Icons (Edge WebView2)   │
│  ├─ Local Core Backend: Python 3.14 + FastAPI Asynchronous + Uvicorn   │
│  ├─ Database Cục bộ: SQLite / SQLAlchemy (Lưu trữ an toàn 100% nội bộ) │
│  ├─ LAN Auto-Discovery Radar: Đa luồng 64 workers (254 IP trong 0.7s)  │
│  ├─ Attendance Processing Engine: Thuật toán Auto-Shift & Anti-passback│
│  ├─ Excel Matrix Engine: Xuất bảng công 31 ngày chuẩn Luật Lao Động    │
│  └─ Security & License Core: Cryptographic Hardware-Lock & 30-Day Purge│
└──────────────────┬─────────────────────────────────┬───────────────────┘
                   │ Giao thức UDP/TCP 4370          │ HTTPS REST API
                   ▼                                 ▼
┌──────────────────────────────────────┐  ┌──────────────────────────────┐
│  2. MẠNG THIẾT BỊ SINH TRẮC HỌC LAN  │  │  3. CLOUD SAAS LICENSING     │
│  ├─ ZKTeco SpeedFace-V5L (Khuôn mặt) │  │  (MERN Stack on Vercel)      │
│  ├─ Ronald Jack Pro / X628-C         │  │  ├─ Web Portal: React 19     │
│  ├─ Gigata T8 / T9 / FA-113          │  │  ├─ Serverless: Node.js/Vercel│
│  └─ Wise Eye Biometrics              │  │  ├─ Database: MongoDB Atlas  │
│     (Cổng tiêu chuẩn 4370 & CommKey) │  │  ├─ Auto-Pay: VietQR ISO 8583│
└──────────────────────────────────────┘  │  └─ Auto-Update Distribution │
                                          └──────────────────────────────┘`}</pre>
              </div>

              {/* 3 Main Components Explained */}
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-sky-600 dark:text-sky-400 mb-1 flex items-center gap-1.5">
                    <Terminal className="w-4 h-4" /> Native Desktop App
                  </h4>
                  <p className="text-[12px] text-slate-600 dark:text-slate-400">
                    Chạy độc lập trên máy trạm Windows, mở trong 0.5s, không hiện CMD, lưu trữ CSDL cục bộ bảo mật, đảm bảo nhà máy vẫn chấm công mượt mà kể cả khi đứt cáp quang internet.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
                    <Network className="w-4 h-4" /> LAN Biometric Radar
                  </h4>
                  <p className="text-[12px] text-slate-600 dark:text-slate-400">
                    64 luồng Worker quét đồng thời 254 IP trong 0.7 giây, tự động phát hiện model máy, serial, firmware và số lượng nhân sự qua cổng 4370 mà không cần gõ IP thủ công.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-1 flex items-center gap-1.5">
                    <Server className="w-4 h-4" /> Cloud MERN SaaS
                  </h4>
                  <p className="text-[12px] text-slate-600 dark:text-slate-400">
                    Triển khai Serverless trên Vercel kết hợp MongoDB Atlas, tích hợp quét mã VietQR tự động 24/7, cấp mã kích hoạt theo tên công ty và phân phối bản cập nhật phần mềm.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TECH STACK */}
          {activeTab === 'tech' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                ⚙️ Toàn Bộ Công Nghệ & Thư Viện Sử Dụng Trong Dự Án
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sky-600 dark:text-sky-400">
                    <Cpu className="w-4 h-4" />
                    <span>Desktop Backend & Multi-Threading</span>
                  </div>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-400 text-xs list-disc pl-4">
                    <li><strong>Python 3.14:</strong> Asynchronous Event Loop, xử lý socket mạng đa luồng.</li>
                    <li><strong>FastAPI & Uvicorn:</strong> REST API hiệu năng cao kết nối Frontend & Background Workers.</li>
                    <li><strong>SQLAlchemy & SQLite:</strong> ORM mapping, ACID transactions, lưu trữ cục bộ bảo mật 100%.</li>
                    <li><strong>Concurrent.futures (64 Workers):</strong> Quét radar 254 địa chỉ IP chỉ mất 0.7 giây.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-400">
                    <Layers className="w-4 h-4" />
                    <span>Frontend & Desktop Native Packaging</span>
                  </div>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-400 text-xs list-disc pl-4">
                    <li><strong>React 19 & Vite 6:</strong> Xây dựng giao diện Single Page Application phản hồi tức thì.</li>
                    <li><strong>Microsoft Edge WebView2:</strong> Nhúng giao diện web trực tiếp vào cửa sổ native 60fps.</li>
                    <li><strong>PyInstaller:</strong> Đóng gói trọn gói thành 1 file thực thi .exe độc lập, không hiện terminal CMD.</li>
                    <li><strong>Tailwind CSS 3.4:</strong> Thiết kế giao diện hiện đại, responsive, hỗ trợ Light & Dark theme.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-indigo-600 dark:text-indigo-400">
                    <Server className="w-4 h-4" />
                    <span>Cloud SaaS Platform (MERN Stack)</span>
                  </div>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-400 text-xs list-disc pl-4">
                    <li><strong>Node.js & Express.js:</strong> Xây dựng Serverless APIs trên nền tảng Vercel Cloud Functions.</li>
                    <li><strong>MongoDB Atlas:</strong> Cơ sở dữ liệu NoSQL đám mây lưu trữ thông tin đơn hàng, license và tài khoản.</li>
                    <li><strong>React Router v7:</strong> Điều hướng đa trang chuẩn SEO (/huong-dan, /tra-cuu, /admin).</li>
                    <li><strong>JWT & Bcrypt:</strong> Bảo mật cổng quản trị admin duyệt đơn hàng và sinh key bản quyền.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-rose-600 dark:text-rose-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Bảo Mật Cryptography & Thanh Toán</span>
                  </div>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-400 text-xs list-disc pl-4">
                    <li><strong>Hardware ID:</strong> Cryptography MachineGuid + MAC Address + Computer Name.</li>
                    <li><strong>HMAC-SHA256:</strong> Ký số mã hóa bản quyền ràng buộc chặt chẽ với Tên Công Ty & Machine ID.</li>
                    <li><strong>VietQR ISO 8583:</strong> Tự động sinh mã QR chuyển khoản ngân hàng kèm memo đối soát tự động.</li>
                    <li><strong>30-Day Purge Engine:</strong> Tự động xóa sạch CSDL nếu quá hạn 30 ngày để đảm bảo bảo mật.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DEPLOYMENT */}
          {activeTab === 'deploy' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                🚀 Cách Tôi Triển Khai Hệ Thống Trong Thực Tế (Deployment Strategy)
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-sky-500/10 text-sky-600 flex items-center justify-center text-xs font-bold">1</span>
                    Triển Khai Hạ Tầng Mạng LAN & Thiết Bị Tại Nhà Máy (On-Premise)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Tôi trực tiếp khảo sát và quy hoạch dải mạng LAN nội bộ nhà máy: thiết lập IP tĩnh (Static IP) cho 3 máy chấm công ZKTeco SpeedFace-V5L và Gigata T9 qua switch mạng Gigabit; cấu hình mở thông cổng 4370 TCP/UDP trên Firewall Windows và Router nội bộ để các máy tính bộ phận nhân sự có thể quét radar và đồng bộ dữ liệu thông suốt.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-sky-500/10 text-sky-600 flex items-center justify-center text-xs font-bold">2</span>
                    Đóng Gói Ứng Dụng Native Desktop Độc Lập (.EXE & ZIP Portable)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Tôi biên dịch toàn bộ mã nguồn Python và React nhúng vào 1 gói cài đặt Setup tự động (57MB) và 1 bản Portable ZIP (34MB). Người dùng nhân sự hoặc kỹ thuật viên chỉ cần tải về, nhấp đúp là phần mềm chạy ngay lập tức mà không cần phải cài đặt môi trường Python, Node.js hay thiết lập PostgreSQL phức tạp.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-sky-500/10 text-sky-600 flex items-center justify-center text-xs font-bold">3</span>
                    Triển Khai Cloud Serverless MERN Trên Nền Tảng Vercel & MongoDB Atlas
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Tôi xây dựng hệ thống CI/CD tự động bằng GitHub Actions: mỗi khi đẩy code lên nhánh main của repository <code>HuynhAnh24h/KTS_TimeAttendance_ladingpage</code>, Vercel sẽ tự động build frontend React 19 và kích hoạt các Serverless Functions cho backend Express. Kết nối cơ sở dữ liệu MongoDB Atlas qua chuỗi kết nối bảo mật mã hóa SSL/TLS, tiết kiệm 100% chi phí thuê máy chủ dedicated hàng tháng.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: OPERATIONS */}
          {activeTab === 'ops' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                🔄 Quy Trình Vận Hành & Tự Động Hóa Hàng Ngày (Daily Operations)
              </h3>

              <div className="space-y-3.5">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <p className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <span className="text-sky-500">▶</span> Bước 1: Radar Tự Động Nhận Diện Máy (LAN Scan)
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Bộ phận nhân sự chỉ cần mở app và bấm 1 nút radar. Hệ thống tự động rà quét toàn bộ dải IP 192.168.1.1 - 192.168.1.254 trong 0.7 giây, phát hiện các máy đang online và kiểm tra số lượng nhân sự đã đăng ký.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <p className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <span className="text-emerald-500">▶</span> Bước 2: Đồng Bộ Lịch Sử Quẹt Thẻ Định Kỳ
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Background worker chạy ngầm định kỳ kéo toàn bộ log quẹt thẻ từ bộ nhớ máy chấm công về CSDL SQLite cục bộ. Cơ chế lọc debounce 5 phút ngăn chặn việc nhân viên quẹt thẻ nhiều lần liên tiếp làm sai lệch dữ liệu.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <p className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <span className="text-indigo-500">▶</span> Bước 3: Thuật Toán Auto-Shift Tự Ghép Ca & Phân Bổ OT
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Hệ thống tự động so khớp giờ check-in / check-out với các ca hành chính, ca kíp 2-3 ca và ca đêm 24/7; tự động tính số phút đi muộn, về sớm và phân loại hệ số tăng ca OT (1.5x ngày thường, 2.0x chủ nhật, 3.0x ngày lễ).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <p className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <span className="text-amber-500">▶</span> Bước 4: Xuất File Excel Ma Trận 31 Ngày Chuẩn Bộ Luật
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Chỉ với 1-Click, hệ thống tự động sinh file bảng tổng hợp công ma trận 31 ngày dạng chuẩn hóa, định dạng sẵn công thức và màu sắc, sẵn sàng nạp thẳng vào phần mềm kế toán tính lương.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <p className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <span className="text-rose-500">▶</span> Bước 5: Vòng Đời Bản Quyền & Tự Hủy Dữ Liệu Sau 30 Ngày
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    Nếu hết hạn bản quyền, phần mềm tự khóa tính năng và đếm ngược 30 ngày ân hạn. Sau 30 ngày không gia hạn, hệ thống tự động xóa sạch dữ liệu nội bộ để bảo mật và chống sao chép trái phép.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: IMPACT */}
          {activeTab === 'impact' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                📊 Số Liệu Đạt Được & Hiệu Quả Thực Tế Tại Doanh Nghiệp
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-center">
                  <div className="text-3xl font-extrabold text-sky-600 dark:text-sky-400">1.000+</div>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">Nhân Sự Phục Vụ Hàng Ngày</p>
                  <p className="text-[11px] text-slate-500 mt-1">Vận hành thực tế tại nhà máy không nghẽn dữ liệu</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-center">
                  <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">0.7 Giây</div>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">Tốc Độ Radar Quét LAN 254 IP</p>
                  <p className="text-[11px] text-slate-500 mt-1">Tự động nhận diện thiết bị sinh trắc học siêu tốc</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-center">
                  <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">95%</div>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">Cắt Giảm Thời Gian Nhân Sự</p>
                  <p className="text-[11px] text-slate-500 mt-1">Từ 3 ngày tính công thủ công xuống còn 15 phút</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-center">
                  <div className="text-3xl font-extrabold text-purple-600 dark:text-purple-400">0.5 Giây</div>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">Khởi Động App Native</p>
                  <p className="text-[11px] text-slate-500 mt-1">Không hiện cửa sổ CMD terminal đen phiền toái</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-center">
                  <div className="text-3xl font-extrabold text-amber-600 dark:text-amber-400">100%</div>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">Tự Động Hóa Thanh Toán VietQR</p>
                  <p className="text-[11px] text-slate-500 mt-1">Sinh mã QR động kèm nội dung đối soát ngân hàng</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-center">
                  <div className="text-3xl font-extrabold text-rose-600 dark:text-rose-400">99.9%</div>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">Độ Ổn Định Hệ Thống (Uptime)</p>
                  <p className="text-[11px] text-slate-500 mt-1">Hoạt động bền bỉ kể cả khi mất kết nối internet</p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Links */}
        <div className="px-6 sm:px-8 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0c1220] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://kts-time-attendance-ladingpage.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Xem Trực Tiếp Website (Vercel)</span>
            </a>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">&bull;</span>
            <a
              href="https://github.com/HuynhAnh24h/kts-cham-cong"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Mã Nguồn Desktop (GitHub)</span>
            </a>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">&bull;</span>
            <a
              href="https://github.com/HuynhAnh24h/KTS_TimeAttendance_ladingpage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Mã Nguồn SaaS (GitHub)</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Đóng Chi Tiết
          </button>
        </div>

      </div>
    </div>
  );
}
