'use client';

import { useState } from 'react';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';

interface ToggleProps { label: string; desc?: string; defaultChecked?: boolean; }

function Toggle({ label, desc, defaultChecked = true }: ToggleProps) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-gray-50 last:border-0">
      <div>
        <p className="text-[13px] font-medium text-[#333]">{label}</p>
        {desc && <p className="text-[11px] text-[#999] mt-0.5">{desc}</p>}
      </div>
      <button
        onClick={() => setChecked(!checked)}
        className={`w-11 h-6 rounded-full transition-colors ${checked ? 'bg-[#8A1410]' : 'bg-gray-200'}`}
      >
        <div className={`w-4 h-4 bg-white rounded-full mx-1 transition-transform ${checked ? 'translate-x-5' : 'translate-x-0'}`}></div>
      </button>
    </div>
  );
}

export default function PrivacySettingsPage() {
  return (
    <MobileContainer>
      <PageHeader title="Privasi" />
      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-4">
        <div className="bg-white rounded-xl px-4 mb-4">
          <h3 className="font-semibold text-[13px] text-[#333] py-3 border-b border-gray-50">Profil</h3>
          <Toggle label="Profil Publik" desc="Izinkan orang lain melihat profil Anda" />
          <Toggle label="Tampilkan Aktivitas Baca" desc="Bagikan buku yang sedang Anda baca" defaultChecked={false} />
          <Toggle label="Tampilkan Daftar Teman" />
        </div>

        <div className="bg-white rounded-xl px-4 mb-4">
          <h3 className="font-semibold text-[13px] text-[#333] py-3 border-b border-gray-50">Data & Analitik</h3>
          <Toggle label="Personalisasi Konten" desc="Gunakan data baca untuk rekomendasi" />
          <Toggle label="Analitik Penggunaan" desc="Bantu kami meningkatkan layanan" />
          <Toggle label="Cookie Pihak Ketiga" defaultChecked={false} />
        </div>

        <div className="bg-white rounded-xl px-4">
          <h3 className="font-semibold text-[13px] text-[#333] py-3 border-b border-gray-50">Komunikasi</h3>
          <Toggle label="Email Promosi" desc="Terima penawaran dan promo terbaru" defaultChecked={false} />
          <Toggle label="Rekomendasi Buku" />
        </div>
      </div>
    </MobileContainer>
  );
}
