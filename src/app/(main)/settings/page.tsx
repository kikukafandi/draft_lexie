import Link from 'next/link';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import { Shield, Bell, BookOpen, User, HelpCircle, Info, ChevronRight, Moon, Globe } from 'lucide-react';

const settingsItems = [
  { icon: User, label: 'Akun & Keamanan', href: '/settings/account', desc: 'Kelola akun dan kata sandi' },
  { icon: Shield, label: 'Privasi', href: '/settings/privacy', desc: 'Kontrol data dan privasi Anda' },
  { icon: Bell, label: 'Notifikasi', href: '/settings/notifications', desc: 'Atur preferensi notifikasi' },
  { icon: BookOpen, label: 'Preferensi Baca', href: '/settings/reading', desc: 'Font, ukuran, tema baca' },
  { icon: Globe, label: 'Bahasa', href: '#', desc: 'Indonesia' },
  { icon: Moon, label: 'Tema', href: '#', desc: 'Terang' },
  { icon: HelpCircle, label: 'Bantuan', href: '#', desc: 'FAQ dan dukungan' },
  { icon: Info, label: 'Tentang LEXSEE', href: '/about', desc: 'Versi 1.0.0' },
];

export default function SettingsPage() {
  return (
    <MobileContainer>
      <PageHeader title="Pengaturan" />
      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-4">
        <div className="bg-white rounded-xl overflow-hidden">
          {settingsItems.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3.5 ${i < settingsItems.length - 1 ? 'border-b border-gray-50' : ''}`}
            >
              <div className="w-9 h-9 bg-[#F2F2F2] rounded-lg flex items-center justify-center">
                <item.icon size={18} className="text-[#8A1410]" />
              </div>
              <div className="flex-1">
                <p className="text-[13px] font-medium text-[#333]">{item.label}</p>
                <p className="text-[11px] text-[#999]">{item.desc}</p>
              </div>
              <ChevronRight size={16} className="text-[#999]" />
            </Link>
          ))}
        </div>

        <p className="text-center text-[11px] text-[#999] mt-6">LEXSEE v1.0.0</p>
      </div>
    </MobileContainer>
  );
}
