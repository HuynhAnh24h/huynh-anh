import React from 'react';

export function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function ReactIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}

export function TypeScriptIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M11.5 8H5.5V10H7.3V18H9.7V10H11.5V8Z" fill="white" />
      <path d="M13.2 15.6C13.8 16.3 14.6 16.6 15.6 16.6C16.8 16.6 17.6 16 17.6 15.1C17.6 14.2 17.1 13.7 15.4 13C13.2 12.1 12.2 11.2 12.2 9.4C12.2 7.7 13.6 6.4 15.6 6.4C17 6.4 18.1 6.9 18.9 7.9L17.4 9.3C16.9 8.6 16.3 8.3 15.6 8.3C14.7 8.3 14.2 8.8 14.2 9.4C14.2 10.1 14.6 10.5 16.2 11.2C18.4 12.1 19.6 13 19.6 14.9C19.6 16.9 18 18.4 15.6 18.4C14 18.4 12.6 17.7 11.8 16.6L13.2 15.6Z" fill="white" />
    </svg>
  );
}

export function ReduxIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 14.8c-.8 0-1.5-.7-1.5-1.5 0-.4.2-.8.5-1.1-1.3-.4-2.6-.7-4.1-.7-1.2 0-2.3.2-3.3.5.3.3.5.7.5 1.1 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.7.5-1.3 1.2-1.5-.2-.8-.3-1.6-.3-2.6 0-1.1.2-2.1.5-3-.7-.2-1.2-.8-1.2-1.5 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .4-.2.8-.5 1.1 1-.4 2.1-.6 3.3-.6 1.4 0 2.8.3 4.1.7-.3-.3-.5-.7-.5-1.1 0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5c0 .7-.5 1.3-1.2 1.5.2.8.3 1.7.3 2.6 0 1-.1 1.9-.3 2.7.7.2 1.2.8 1.2 1.5 0 .8-.7 1.5-1.5 1.5z" fill="#764ABC"/>
      <circle cx="12" cy="12" r="2.2" fill="#764ABC" />
    </svg>
  );
}

export function JavaScriptIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
      <path d="M6.5 17.5l2-1.2c.4.7.8 1.2 1.5 1.2.7 0 1.2-.3 1.2-1.4v-6.6h2.5v6.6c0 2.4-1.4 3.4-3.5 3.4-1.9 0-3.1-.9-3.7-2zM15 17.2l2-1.2c.5.8 1.2 1.3 2.2 1.3 1 0 1.6-.5 1.6-1.1 0-.8-.6-1.1-1.8-1.6l-.7-.3c-2-.9-3.3-2-3.3-3.9 0-2 1.5-3.5 3.8-3.5 1.7 0 2.9.6 3.7 2.1l-1.9 1.2c-.4-.7-.9-1-1.7-1-.8 0-1.3.5-1.3 1 0 .7.5 1 1.6 1.4l.7.3c2.3 1 3.5 2.1 3.5 4.1 0 2.4-1.8 3.7-4.2 3.7-2.3 0-3.8-1.1-4.5-2.5z" fill="#000000"/>
    </svg>
  );
}

export function Html5Icon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3l1.6 18 7.4 2 7.4-2L21 3H3z" fill="#E34F26"/>
      <path d="M12 21.2l6-1.6 1.4-15.1H12v16.7z" fill="#EF652A"/>
      <path d="M12 7.8H7.6l.3 3.3H12v-3.3zm0 6.6H9.3l-.2-2.3H7.8l.4 4.5H12v-2.2z" fill="#EBEBEB"/>
      <path d="M12 7.8v3.3h4.1l-.4 4.5-3.7 1v2.3l6-1.6.8-9.5H12z" fill="#FFFFFF"/>
    </svg>
  );
}

export function Css3Icon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3l1.6 18 7.4 2 7.4-2L21 3H3z" fill="#1572B6"/>
      <path d="M12 21.2l6-1.6 1.4-15.1H12v16.7z" fill="#33A9DC"/>
      <path d="M12 7.8H7.6l.3 3.3H12v-3.3zm0 6.6H9.3l-.2-2.3H7.8l.4 4.5H12v-2.2z" fill="#EBEBEB"/>
      <path d="M12 7.8v3.3h4.1l-.4 4.5-3.7 1v2.3l6-1.6.8-9.5H12z" fill="#FFFFFF"/>
    </svg>
  );
}

export function WordPressIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18.2a8.2 8.2 0 01-4.7-1.5l3.9-10.7 2.7 7.4a4.1 4.1 0 01-.1 1.1 8.3 8.3 0 01-1.8 3.7zm-6.6-4.6a8.2 8.2 0 01-.4-2.4c0-1.4.5-2.7 1.3-3.8l3.1 8.5a8.2 8.2 0 01-4-2.3zm13-5c0 1.2-.4 2.6-1.1 4l-3.3-9.5a5.4 5.4 0 012.2.3c1.4.6 2.2 2.7 2.2 5.2zm-9.3-5.7c.6 0 1.2.1 1.7.3l-2.6 7.2-2-5.7a8.2 8.2 0 012.9-1.8z" fill="#21759B"/>
    </svg>
  );
}

export function WooCommerceIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#96588A"/>
      <path d="M4 8.5C4 7.1 5.1 6 6.5 6h11C18.9 6 20 7.1 20 8.5v7c0 1.4-1.1 2.5-2.5 2.5h-11C5.1 18 4 16.9 4 15.5v-7z" fill="#96588A"/>
      <path d="M7 9l1.8 6.5 2-4.5 1.5 2.5L14 9h2l-2.5 7.5h-1.8l-1.6-2.8-1.5 2.8H7L5 9h2z" fill="#FFFFFF"/>
    </svg>
  );
}

export function PhpIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#777BB4"/>
      <ellipse cx="12" cy="12" rx="9" ry="5.5" stroke="#FFFFFF" strokeWidth="1.2" fill="none"/>
      <path d="M7 14V9.5h1.8c1 0 1.6.4 1.6 1.2 0 .9-.6 1.3-1.6 1.3H8.2V14H7zm1.2-3h.6c.4 0 .7-.1.7-.5s-.3-.5-.7-.5h-.6v1zm4.8 3v-2.3h1.8c1 0 1.6.4 1.6 1.2 0 .8-.6 1.1-1.6 1.1h-1.8zm0-3.3V9.5h1.8c.9 0 1.5.3 1.5 1s-.6 1-1.5 1h-1.8z" fill="#FFFFFF"/>
    </svg>
  );
}

export function ElementorIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#92003B"/>
      <path d="M8 8h2v8H8zm4 0h4v2h-4zm0 3h4v2h-4zm0 3h4v2h-4z" fill="#FFFFFF"/>
    </svg>
  );
}

export function FlatsomeIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#0E2F44"/>
      <path d="M6 7h12v2.5H9.5v3H16v2.5H9.5V17H6V7z" fill="#62C2CC"/>
      <circle cx="18" cy="16" r="1.5" fill="#62C2CC"/>
    </svg>
  );
}

export function NodeIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l9 5.2v10.4L12 22l-9-5.2V7.2L12 2z" fill="#5FA04E"/>
      <path d="M12 4.2L5 8.2v7.6l7 4 7-4V8.2l-7-4z" stroke="#FFFFFF" strokeWidth="0.8" fill="none"/>
      <path d="M11 9h2v6h-2zm-2.5 1.5l1.5-1v5.5h-1.5z" fill="#FFFFFF"/>
    </svg>
  );
}

export function MongoIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#001E2B"/>
      <path d="M12 3s4.5 4.8 4.5 9.2c0 2.8-2 5.1-4.5 5.8-2.5-.7-4.5-3-4.5-5.8C7.5 7.8 12 3 12 3z" fill="#00ED64"/>
      <path d="M12 3.5v14.5c.3 0 .7-.1 1-.2 2.2-.7 3.5-2.7 3.5-5 0-3.8-3.7-8-4.5-9.3z" fill="#00684A"/>
    </svg>
  );
}
