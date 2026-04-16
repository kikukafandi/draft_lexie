'use client';

import { useState } from 'react';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Camera } from 'lucide-react';

export default function EditProfilePage() {
  const [form, setForm] = useState({
    name: 'Pengguna LEXSEE',
    email: 'pengguna@email.com',
    phone: '08123456789',
    bio: 'Pembaca setia buku hukum Indonesia',
  });

  return (
    <MobileContainer>
      <PageHeader title="Edit Profil" />
      <div className="flex-1 overflow-y-auto pb-24 px-4 pt-6">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-[#8A1410] flex items-center justify-center">
              <span className="text-white font-bold text-3xl">U</span>
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#FFDBAD] rounded-full flex items-center justify-center border-2 border-white">
              <Camera size={14} className="text-[#8A1410]" />
            </button>
          </div>
          <p className="text-[12px] text-[#999] mt-2">Ketuk untuk mengubah foto</p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          <Input
            label="Nama Lengkap"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input
            label="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Input
            label="No. Telepon"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <div className="flex flex-col gap-1">
            <label className="text-[12px] text-[#666]">Bio</label>
            <textarea
              value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
              rows={3}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-[#333] outline-none focus:border-[#8A1410] bg-white resize-none"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3">
        <Button fullWidth className="py-3">Simpan Perubahan</Button>
      </div>
    </MobileContainer>
  );
}
