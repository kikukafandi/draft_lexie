import Link from 'next/link';
import MobileContainer from '@/components/layout/MobileContainer';
import { Settings, ChevronRight, ShoppingBag, Heart, History, Users, Bell, Shield, HelpCircle, LogOut, Crown } from 'lucide-react';

const menuSections = [
  {
    title: 'Aktivitas',
    items: [
      { icon: ShoppingBag, label: 'Pesanan Saya', href: '/orders', badge: '2' },
      { icon: Heart, label: 'Wishlist', href: '#' },
      { icon: History, label: 'Riwayat Baca', href: '/history' },
      { icon: Users, label: 'Teman', href: '/friends' },
    ],
  },
  {
    title: 'Pengaturan',
    items: [
      { icon: Bell, label: 'Notifikasi', href: '/settings/notifications' },
      { icon: Shield, label: 'Privasi & Keamanan', href: '/settings/privacy' },
      { icon: Settings, label: 'Pengaturan Akun', href: '/settings/account' },
      { icon: HelpCircle, label: 'Bantuan & Tentang', href: '/about' },
    ],
  },
];

export default function UserPage() {
  return (
    <MobileContainer>
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Header */}
        <div className="bg-[#8A1410] pt-10 pb-6 px-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <span className="text-[#8A1410] font-bold text-xl">U</span>
            </div>
            <div className="flex-1">
              <h2 className="text-white font-bold text-[16px]">Pengguna LEXSEE</h2>
              <p className="text-white/70 text-[12px]">pengguna@email.com</p>
              <div className="flex items-center gap-1 mt-1">
                <Crown size={12} className="text-[#FFDBAD]" />
                <span className="text-[#FFDBAD] text-[11px] font-medium">Member Reguler</span>
              </div>
            </div>
            <Link href="/user/edit">
              <Settings size={20} className="text-white" />
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-0 mt-4 bg-white/10 rounded-xl divide-x divide-white/20">
            {[
              { label: 'Buku Dibeli', value: '12' },
              { label: 'Dibaca', value: '8' },
              { label: 'Poin', value: '450' },
            ].map((stat) => (
              <div key={stat.label} className="flex-1 flex flex-col items-center py-3">
                <p className="text-white font-bold text-[18px]">{stat.value}</p>
                <p className="text-white/70 text-[10px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Premium banner */}
        <div className="mx-4 mt-4 bg-gradient-to-r from-[#8A1410] to-[#b01a15] rounded-xl p-3 flex items-center gap-3">
          <Crown size={22} className="text-[#FFDBAD]" />
          <div className="flex-1">
            <p className="text-white font-semibold text-[13px]">Upgrade ke Premium</p>
            <p className="text-white/70 text-[11px]">Akses semua buku tanpa batas</p>
          </div>
          <Link href="/membership" className="bg-[#FFDBAD] text-[#8A1410] text-[11px] font-bold px-3 py-1.5 rounded-full">
            Upgrade
          </Link>
        </div>

        {/* Menu sections */}
        {menuSections.map((section) => (
          <div key={section.title} className="px-4 mt-4">
            <p className="text-[11px] text-[#999] font-medium uppercase tracking-wide mb-2">{section.title}</p>
            <div className="bg-white rounded-xl overflow-hidden">
              {section.items.map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3.5 ${i < section.items.length - 1 ? 'border-b border-gray-50' : ''}`}
                >
                  <div className="w-8 h-8 bg-[#F2F2F2] rounded-lg flex items-center justify-center">
                    <item.icon size={16} className="text-[#8A1410]" />
                  </div>
                  <span className="flex-1 text-[13px] text-[#333]">{item.label}</span>
                  {item.badge && (
                    <span className="bg-[#8A1410] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full mr-1">
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight size={16} className="text-[#999]" />
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Logout */}
        <div className="px-4 mt-4 mb-4">
          <button className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 font-medium text-[13px] py-3 rounded-xl">
            <LogOut size={16} />
            Keluar
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}
