'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: ReactNode;
}

export default function PageHeader({ title, showBack = true, onBack, rightAction }: PageHeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) onBack();
    else router.back();
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="w-8">
        {showBack && (
          <button onClick={handleBack} className="p-1 -ml-1">
            <ArrowLeft size={22} className="text-[#333333]" />
          </button>
        )}
      </div>
      <h1 className="flex-1 text-center font-semibold text-[15px] text-[#333333] truncate px-2">
        {title}
      </h1>
      <div className="w-8 flex justify-end">{rightAction}</div>
    </div>
  );
}
