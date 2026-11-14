import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-[#141413]';
  const strokeColor = variant === 'light' ? '#FFFFFF' : '#141413';

  return (
    <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Warm editorial circular frame */}
        <circle cx="20" cy="20" r="18.5" stroke="#EA580C" strokeWidth="1.75" />
        {/* Stylized noble dog head silhouette */}
        <path
          d="M12.5 14.5L10.5 7.5C10.2 6.6 11.2 6 12 6.6L16.8 10.5C17.8 10.2 18.9 10 20 10C21.1 10 22.2 10.2 23.2 10.5L28 6.6C28.8 6 29.8 6.6 29.5 7.5L27.5 14.5C28.8 16.4 29.5 18.6 29.5 21C29.5 24.4 27.6 27.3 24.8 29L23.5 32.5C23.1 33.4 22.2 34 21.2 34H18.8C17.8 34 16.9 33.4 16.5 32.5L15.2 29C12.4 27.3 10.5 24.4 10.5 21C10.5 18.6 11.2 16.4 12.5 14.5Z"
          fill="#EA580C"
          fillOpacity="0.12"
          stroke={strokeColor}
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        {/* Inner muzzle & nose detail */}
        <path
          d="M17.2 23.2C17.2 22.2 18.4 21.5 20 21.5C21.6 21.5 22.8 22.2 22.8 23.2C22.8 24.3 21.5 25.4 20 25.4C18.5 25.4 17.2 24.3 17.2 23.2Z"
          fill="#EA580C"
        />
        <circle cx="15.8" cy="18.2" r="1.25" fill={strokeColor} />
        <circle cx="24.2" cy="18.2" r="1.25" fill={strokeColor} />
        <path
          d="M20 25.4V27.8M20 27.8C18.9 28.5 17.8 28.3 17.2 27.7M20 27.8C21.1 28.5 22.2 28.3 22.8 27.7"
          stroke={strokeColor}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`font-display text-base sm:text-lg font-semibold tracking-tight whitespace-nowrap ${textColor}`}
      >
        UNIVERS DES CHIENS
      </span>
    </span>
  );
};
