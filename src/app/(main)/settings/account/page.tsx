'use client';

import { useState } from 'react';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import Input from '@/components/ui/Input';
import { ChevronRight } from 'lucide-react';

export default function AccountSettingsPage() {
  const [email] = useState('pengguna@email.com');
  const [phone] = useState('08123456789');

  return (
    <MobileContainer>
      <PageHeader title="Akun & Keamanan" />
      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-4">
        {/* Account info */}
        <div className="bg-white rounded-xl p-4 mb-4">
          <h3 className="font-semibold text-[13px] text-[#333] mb-3">Informasi Akun</h3>
          <div className="flex flex-col gap-3">
            <Input label="Email" value={email} readOnly />
            <Input label="No. Telepon" value={phone} readOnly />
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-xl overflow-hidden mb-4">
          <h3 className="font-semibold text-[13px] text-[#333] px-4 pt-4 pb-2">Keamanan</h3>
          {[
            { label: 'Ubah Kata Sandi', desc: 'Terakhir diubah 30 hari lalu' },
            { label: 'Verifikasi 2 Langkah', desc: 'Nonaktif' },
            { label: 'Perangkat Aktif', desc: '2 perangkat' },
          ].map((item, i) => (
            <button
              key={item.label}
              className={`w-full flex items-center justify-between px-4 py-3.5 ${i < 2 ? 'border-b border-gray-50' : ''}`}
            >
              <div>
                <p className="text-[13px] font-medium text-[#333] text-left">{item.label}</p>
                <p className="text-[11px] text-[#999] text-left">{item.desc}</p>
              </div>
              <ChevronRight size={16} className="text-[#999]" />
            </button>
          ))}
        </div>

        {/* Danger zone */}
        <div className="bg-white rounded-xl overflow-hidden">
          <h3 className="font-semibold text-[13px] text-red-600 px-4 pt-4 pb-2">Zona Berbahaya</h3>
          <button className="w-full flex items-center justify-between px-4 py-3.5 border-b border-gray-50">
            <div>
              <p className="text-[13px] font-medium text-[#333] text-left">Nonaktifkan Akun</p>
              <p className="text-[11px] text-[#999] text-left">Akun tidak dapat digunakan sementara</p>
            </div>
            <ChevronRight size={16} className="text-[#999]" />
          </button>
          <button className="w-full flex items-center justify-between px-4 py-3.5">
            <div>
              <p className="text-[13px] font-medium text-red-600 text-left">Hapus Akun</p>
              <p className="text-[11px] text-[#999] text-left">Tindakan ini tidak dapat diurungkan</p>
            </div>
            <ChevronRight size={16} className="text-[#999]" />
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}
