import { ReactNode } from 'react';

interface MobileContainerProps {
  children: ReactNode;
  className?: string;
}

export default function MobileContainer({ children, className = '' }: MobileContainerProps) {
  return (
    <div className="min-h-screen bg-[#F2F2F2] flex justify-center">
      <div
        className={`relative w-full max-w-[390px] min-h-screen bg-white shadow-xl overflow-hidden flex flex-col ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
