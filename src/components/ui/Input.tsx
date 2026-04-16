import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'border-b' | 'rounded';
}

export default function Input({ label, error, variant = 'rounded', className = '', ...props }: InputProps) {
  const baseClass = variant === 'border-b'
    ? 'w-full border-b border-gray-300 bg-transparent py-2 text-[13px] text-[#333] outline-none focus:border-[#8A1410]'
    : 'w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-[#333] outline-none focus:border-[#8A1410] bg-white';

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-[12px] text-[#666]">{label}</label>}
      <input className={`${baseClass} ${className}`} {...props} />
      {error && <p className="text-[11px] text-red-500">{error}</p>}
    </div>
  );
}
