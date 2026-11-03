import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Vui lòng điền đầy đủ Họ tên, Email và Nội dung tin nhắn.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Địa chỉ Email không hợp lệ.' },
        { status: 400 }
      );
    }

    // 1. Save to Supabase if configured
    let savedToSupabase = false;
    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase.from('contact_messages').insert([
          {
            name,
            email,
            subject: subject || 'Liên hệ từ Portfolio',
            message,
            is_read: false,
            created_at: new Date().toISOString(),
          }
        ]);
        if (!error) {
          savedToSupabase = true;
        } else {
          console.error('Supabase contact_messages insert error:', error);
        }
      } catch (dbErr) {
        console.warn('Database insert failed, proceeding with email:', dbErr);
      }
    }

    // 2. Dispatch Email Notification
    const recipientEmail = process.env.CONTACT_NOTIFICATION_EMAIL || process.env.GMAIL_USER || 'anhdev24h@gmail.com';
    let emailSent = false;
    let emailMethod = 'none';

    // HTML Email Template
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
        <h2 style="color: #0f172a; margin-top: 0; border-bottom: 2px solid #10b981; padding-bottom: 12px;">
          📬 Bạn có tin nhắn liên hệ mới từ Portfolio!
        </h2>
        <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 6px 0;"><strong>Họ và tên:</strong> ${name}</p>
          <p style="margin: 6px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 6px 0;"><strong>Tiêu đề:</strong> ${subject || 'Không có tiêu đề'}</p>
          <p style="margin: 6px 0;"><strong>Thời gian:</strong> ${new Date().toLocaleString('vi-VN')}</p>
        </div>
        <div style="padding: 16px 0;">
          <h3 style="color: #334155; margin-bottom: 8px;">Nội dung tin nhắn:</h3>
          <div style="white-space: pre-wrap; color: #1e293b; background: #f1f5f9; padding: 14px; border-radius: 8px; font-size: 15px; line-height: 1.6;">
${message}
          </div>
        </div>
        <div style="margin-top: 24px; text-align: center;">
          <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Portfolio Inquiry')}" 
             style="display: inline-block; background-color: #10b981; color: #ffffff; padding: 10px 22px; border-radius: 6px; text-decoration: none; font-weight: bold;">
            Phản hồi trực tiếp tới ${email}
          </a>
        </div>
        <p style="font-size: 12px; color: #94a3b8; text-align: center; margin-top: 28px;">
          Portfolio Huỳnh Anh • Frontend Developer tại Digital Creations
        </p>
      </div>
    `;

    // OPTION A: Google App Password (Gmail SMTP)
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (gmailUser && gmailAppPassword) {
      try {
        const cleanPassword = gmailAppPassword.replace(/\s+/g, '');
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: gmailUser,
            pass: cleanPassword,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Huỳnh Anh" <${gmailUser}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `[Tin nhắn mới từ Portfolio] ${subject || 'Không có tiêu đề'} - ${name}`,
          html: emailHtml,
        });

        emailSent = true;
        emailMethod = 'gmail_app_password';
      } catch (gmailErr: unknown) {
        console.error('Gmail App Password SMTP error:', gmailErr);
      }
    }

    // OPTION B: Resend API fallback if configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!emailSent && resendApiKey) {
      try {
        const emailRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'Portfolio Huỳnh Anh <onboarding@resend.dev>',
            to: [recipientEmail],
            reply_to: email,
            subject: `[Tin nhắn mới từ Portfolio] ${subject || 'Không có tiêu đề'} - ${name}`,
            html: emailHtml,
          }),
        });

        if (emailRes.ok) {
          emailSent = true;
          emailMethod = 'resend';
        }
      } catch (resendErr) {
        console.error('Resend API error:', resendErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Tin nhắn đã được gửi thành công!',
      savedToSupabase,
      emailSent,
      emailMethod,
    });
  } catch (error: unknown) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Đã có lỗi xảy ra trong quá trình xử lý tin nhắn.' },
      { status: 500 }
    );
  }
}
