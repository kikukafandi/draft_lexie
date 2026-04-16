'use client';

import { useState } from 'react';
import Link from 'next/link';
import MobileContainer from '@/components/layout/MobileContainer';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <MobileContainer>
      <div className="flex-1 flex flex-col px-6 pt-12 pb-8 bg-white">
        {/* Header */}
        <div className="mb-8">
          <div className="w-16 h-16 rounded-full bg-[#8A1410] flex items-center justify-center mb-4">
            <span className="text-white font-bold text-lg">LS</span>
          </div>
          <h1 className="text-[22px] font-bold text-[#333]">Selamat Datang</h1>
          <p className="text-[#999] text-[13px] mt-1">Masuk ke akun LEXSEE Anda</p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4 flex-1">
          <Input label="Email / No. Telepon" type="text" placeholder="Masukkan email atau no. telepon" />

          <div className="flex flex-col gap-1">
            <label className="text-[12px] text-[#666]">Kata Sandi</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Masukkan kata sandi"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-[#333] outline-none focus:border-[#8A1410] bg-white pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999]"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="text-right">
            <Link href="#" className="text-[12px] text-[#8A1410]">Lupa Kata Sandi?</Link>
          </div>

          <Link href="/home">
            <Button fullWidth className="mt-2 py-3">Masuk</Button>
          </Link>

          {/* Divider */}
          <div className="flex items-center gap-3 my-2">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-[12px] text-[#999]">atau masuk dengan</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Social login */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5">
              <span className="text-[18px]">f</span>
              <span className="text-[13px] text-[#333]">Facebook</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5">
              <span className="text-[18px]">📸</span>
              <span className="text-[13px] text-[#333]">Instagram</span>
            </button>
          </div>
        </div>

        {/* Register link */}
        <p className="text-center text-[13px] text-[#999] mt-6">
          Belum punya akun?{' '}
          <Link href="/register" className="text-[#8A1410] font-semibold">Daftar</Link>
        </p>
      </div>
    </MobileContainer>
  );
}
