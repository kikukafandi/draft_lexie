'use client';

import { useState } from 'react';
import Link from 'next/link';
import MobileContainer from '@/components/layout/MobileContainer';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <MobileContainer>
      <div className="flex-1 flex flex-col px-6 pt-8 pb-8 bg-white">
        <button onClick={() => router.back()} className="mb-6 w-fit">
          <ArrowLeft size={22} className="text-[#333]" />
        </button>

        <div className="mb-6">
          <h1 className="text-[22px] font-bold text-[#333]">Buat Akun</h1>
          <p className="text-[#999] text-[13px] mt-1">Daftar untuk mulai membaca</p>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <Input label="Nama Lengkap" type="text" placeholder="Masukkan nama lengkap" />
          <Input label="Email" type="email" placeholder="Masukkan email" />
          <Input label="No. Telepon" type="tel" placeholder="Masukkan nomor telepon" />

          <div className="flex flex-col gap-1">
            <label className="text-[12px] text-[#666]">Kata Sandi</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Buat kata sandi"
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

          <div className="flex items-start gap-2 mt-1">
            <input type="checkbox" id="agree" className="mt-0.5 accent-[#8A1410]" />
            <label htmlFor="agree" className="text-[12px] text-[#666] leading-relaxed">
              Saya setuju dengan{' '}
              <Link href="#" className="text-[#8A1410]">Syarat & Ketentuan</Link>
              {' '}dan{' '}
              <Link href="#" className="text-[#8A1410]">Kebijakan Privasi</Link>
            </label>
          </div>

          <Link href="/home">
            <Button fullWidth className="mt-4 py-3">Daftar Sekarang</Button>
          </Link>
        </div>

        <p className="text-center text-[13px] text-[#999] mt-6">
          Sudah punya akun?{' '}
          <Link href="/login" className="text-[#8A1410] font-semibold">Masuk</Link>
        </p>
      </div>
    </MobileContainer>
  );
}
