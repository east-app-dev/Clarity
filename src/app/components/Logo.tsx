import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showText = true,
  className = "",
  variant = 'dark'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-24 h-24 text-5xl',
    xl: 'w-48 h-48 text-8xl'
  };

  const colors = {
    dark: {
      bg: 'bg-[#3D3333]',
      text: 'text-[#3D3333]',
      icon: 'text-[#FFFDF5]'
    },
    light: {
      bg: 'bg-[#FFFDF5]',
      text: 'text-[#FFFDF5]',
      icon: 'text-[#3D3333]'
    }
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* The Brand Mark: A minimalist "Focus" icon */}
      <div className={`flex items-center justify-center rounded-[28%] shadow-sm ${sizeClasses[size]} ${colors[variant].bg}`}>
        <svg 
          viewBox="0 0 100 100" 
          className={`w-[60%] h-[60%] ${colors[variant].icon}`}
          fill="currentColor"
        >
          {/* External ring */}
          <path d="M50 10C27.9 10 10 27.9 10 50s17.9 40 40 40 40-17.9 40-40S72.1 10 50 10zm0 72c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
          {/* Inner focus dot with a slight gap for "Clarity" */}
          <circle cx="50" cy="50" r="12" />
          {/* Subtle geometric accent */}
          <rect x="47" y="15" width="6" height="15" rx="3" />
        </svg>
      </div>
      
      {showText && (
        <span className={`font-black tracking-[-0.04em] ${colors[variant].text} ${sizeClasses[size].split(' ')[1]}`}>
          Clarity
        </span>
      )}
    </div>
  );
};
