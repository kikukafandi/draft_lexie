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
        className={`w-11 h-6 rounded-full transition-colors relative ${checked ? 'bg-[#8A1410]' : 'bg-gray-200'}`}
      >
        <div className={`w-4 h-4 bg-white rounded-full mx-1 transition-transform absolute top-1 ${checked ? 'translate-x-5' : 'translate-x-0'}`}></div>
      </button>
    </div>
  );
}

export default function NotificationsPage() {
  return (
    <MobileContainer>
      <PageHeader title="Notifikasi" />
      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-4">
        <div className="bg-white rounded-xl px-4 mb-4">
          <h3 className="font-semibold text-[13px] text-[#333] py-3 border-b border-gray-50">Push Notification</h3>
          <Toggle label="Notifikasi Pesanan" desc="Update status pesanan Anda" />
          <Toggle label="Pesan Baru" desc="Ketika ada pesan masuk" />
          <Toggle label="Pengumuman" desc="Info terbaru dari LEXSEE" />
          <Toggle label="Promo & Diskon" defaultChecked={false} />
        </div>

        <div className="bg-white rounded-xl px-4 mb-4">
          <h3 className="font-semibold text-[13px] text-[#333] py-3 border-b border-gray-50">Email</h3>
          <Toggle label="Newsletter" defaultChecked={false} />
          <Toggle label="Laporan Aktivitas Mingguan" />
          <Toggle label="Pengingat Baca" />
        </div>

        <div className="bg-white rounded-xl px-4">
          <h3 className="font-semibold text-[13px] text-[#333] py-3 border-b border-gray-50">Check-in Harian</h3>
          <Toggle label="Pengingat Check-in" desc="Pukul 08:00 setiap hari" />
          <Toggle label="Hadiah Tersedia" desc="Saat hadiah mingguan siap diklaim" />
        </div>
      </div>
    </MobileContainer>
  );
}
