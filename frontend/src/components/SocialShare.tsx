import React from "react";

export interface Props {
  url: string;
  title: string;
  className?: string;
}

export function SocialShare({ url, title, className = "" }: Props) {
  // Instagram link
  const instagramUrl = "https://www.instagram.com/my_yolo.life";
  
  const shareLinks = [
    {
      name: "Instagram",
      url: instagramUrl,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    }
  ];
  
  return (
    <div className={`flex space-x-3 ${className}`}>
      {shareLinks.map(link => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${link.name}`}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:bg-muted transition-colors"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}