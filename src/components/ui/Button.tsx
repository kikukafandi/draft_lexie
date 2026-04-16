import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  rounded?: 'full' | 'lg';
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  fullWidth = false,
  rounded = 'lg',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base = 'px-4 py-2.5 font-semibold text-[13px] transition-opacity active:opacity-80 disabled:opacity-50';
  const roundedClass = rounded === 'full' ? 'rounded-full' : 'rounded-lg';
  const widthClass = fullWidth ? 'w-full' : '';

  const variants = {
    primary: 'bg-[#8A1410] text-white',
    secondary: 'bg-[#FFDBAD] text-[#8A1410]',
    outline: 'border border-[#8A1410] text-[#8A1410] bg-transparent',
  };

  return (
    <button
      className={`${base} ${roundedClass} ${widthClass} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
