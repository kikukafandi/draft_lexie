import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function AboutPage() {
  return (
    <MobileContainer>
      <PageHeader title="Tentang LEXSEE" />
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Hero */}
        <div className="bg-[#8A1410] px-4 py-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
            <span className="text-[#8A1410] font-bold text-xl">LS</span>
          </div>
          <h1 className="text-white font-bold text-[20px]">LEXSEE</h1>
          <p className="text-[#FFDBAD] text-[12px] mt-1">Online Legal & Digital Reading Platform</p>
          <p className="text-white/60 text-[11px] mt-1">Versi 1.0.0</p>
        </div>

        <div className="px-4 pt-4 flex flex-col gap-4">
          {/* About */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="font-bold text-[14px] text-[#333] mb-2">Tentang Kami</h3>
            <p className="text-[13px] text-[#666] leading-relaxed">
              LEXSEE adalah platform digital terdepan untuk membaca dan mengakses literatur hukum Indonesia. Kami menyediakan koleksi lengkap buku hukum, jurnal, undang-undang, dan dokumen legal digital.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="font-bold text-[14px] text-[#333] mb-2">Misi Kami</h3>
            <p className="text-[13px] text-[#666] leading-relaxed">
              Mempermudah akses terhadap literatur hukum berkualitas bagi seluruh lapisan masyarakat Indonesia, dari mahasiswa hingga praktisi hukum profesional.
            </p>
          </div>

          {/* Links */}
          <div className="bg-white rounded-xl overflow-hidden">
            {[
              { label: 'Syarat & Ketentuan', href: '#' },
              { label: 'Kebijakan Privasi', href: '#' },
              { label: 'Hubungi Kami', href: '#' },
              { label: 'Website Resmi', href: '#' },
            ].map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center justify-between px-4 py-3.5 ${i < 3 ? 'border-b border-gray-50' : ''}`}
              >
                <span className="text-[13px] text-[#333]">{link.label}</span>
                <ExternalLink size={14} className="text-[#999]" />
              </Link>
            ))}
          </div>

          <p className="text-center text-[11px] text-[#999] pb-2">
            © 2024 LEXSEE. All rights reserved.
          </p>
        </div>
      </div>
    </MobileContainer>
  );
}
