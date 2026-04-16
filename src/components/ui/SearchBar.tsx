'use client';

import { Search } from 'lucide-react';
import { InputHTMLAttributes } from 'react';

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

export default function SearchBar({ onSearch, className = '', ...props }: SearchBarProps) {
  return (
    <div className={`flex items-center gap-2 bg-[#F2F2F2] rounded-full px-3 py-2 ${className}`}>
      <Search size={16} className="text-[#999]" />
      <input
        type="text"
        className="flex-1 bg-transparent text-[13px] text-[#333] outline-none placeholder:text-[#999]"
        onChange={(e) => onSearch?.(e.target.value)}
        {...props}
      />
    </div>
  );
}
