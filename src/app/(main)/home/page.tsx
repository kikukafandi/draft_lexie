import Link from 'next/link';
// removed unused Image
import MobileContainer from '@/components/layout/MobileContainer';
import SearchBar from '@/components/ui/SearchBar';
import BookCard from '@/components/ui/BookCard';
import { Bell, ShoppingCart, ChevronRight } from 'lucide-react';

const featuredBooks = [
  { id: '1', title: 'Hukum Perdata Indonesia', price: 'Rp 85.000', rating: 4.8 },
  { id: '2', title: 'Undang-Undang Dasar 1945', price: 'Rp 45.000', rating: 4.9 },
  { id: '3', title: 'Hukum Pidana Umum', price: 'Rp 72.000', rating: 4.7 },
  { id: '4', title: 'Hukum Tata Negara', price: 'Rp 65.000', rating: 4.6 },
];

const categories = [
  { label: 'Hukum Pidana', emoji: '⚖️' },
  { label: 'Hukum Perdata', emoji: '📋' },
  { label: 'Hukum Bisnis', emoji: '💼' },
  { label: 'Hukum Tata Negara', emoji: '🏛️' },
  { label: 'Jurnal', emoji: '📰' },
  { label: 'Lainnya', emoji: '📚' },
];

export default function HomePage() {
  return (
    <MobileContainer>
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Header */}
        <div className="bg-[#8A1410] px-4 pt-10 pb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/70 text-[12px]">Selamat Datang,</p>
              <h2 className="text-white font-bold text-[16px]">Pengguna LEXSEE 👋</h2>
            </div>
            <div className="flex gap-3">
              <Link href="#" className="relative">
                <Bell size={22} className="text-white" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFDBAD] rounded-full text-[9px] text-[#8A1410] font-bold flex items-center justify-center">3</span>
              </Link>
              <Link href="/cart">
                <ShoppingCart size={22} className="text-white" />
              </Link>
            </div>
          </div>
          <SearchBar placeholder="Cari buku, jurnal, dokumen..." className="bg-white" />
        </div>

        {/* Banner */}
        <div className="mx-4 mt-4 rounded-xl overflow-hidden bg-gradient-to-r from-[#8A1410] to-[#b01a15] p-4 flex items-center justify-between">
          <div>
            <p className="text-[#FFDBAD] text-[11px]">Promo Hari Ini</p>
            <p className="text-white font-bold text-[14px]">Diskon 30% Buku Hukum</p>
            <Link href="/classification" className="mt-2 inline-block bg-[#FFDBAD] text-[#8A1410] text-[11px] font-bold px-3 py-1 rounded-full">
              Lihat Sekarang
            </Link>
          </div>
          <span className="text-5xl">📖</span>
        </div>

        {/* Categories */}
        <div className="px-4 mt-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-[14px] text-[#333]">Kategori</h3>
            <Link href="/classification" className="flex items-center text-[12px] text-[#8A1410]">
              Lihat semua <ChevronRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href="/classification"
                className="flex flex-col items-center gap-1.5 bg-[#F2F2F2] rounded-xl py-3 px-2"
              >
                <span className="text-2xl">{cat.emoji}</span>
                <span className="text-[11px] text-[#333] text-center leading-tight">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Jurnal Section */}
        <div className="px-4 mt-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-[14px] text-[#333]">Jurnal Terbaru</h3>
            <Link href="/classification" className="flex items-center text-[12px] text-[#8A1410]">
              Lihat semua <ChevronRight size={14} />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {[1, 2].map((i) => (
              <Link key={i} href="/content" className="flex gap-3 bg-[#F2F2F2] rounded-xl p-3">
                <div className="w-16 h-16 bg-[#FFDBAD] rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-2xl">📰</span>
                </div>
                <div className="flex flex-col justify-center gap-1">
                  <p className="text-[13px] font-semibold text-[#333] leading-tight">
                    Jurnal Hukum & Masyarakat Vol. {i}
                  </p>
                  <p className="text-[11px] text-[#999]">Universitas Indonesia · 2024</p>
                  <p className="text-[12px] text-[#8A1410] font-bold">Rp 25.000</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Books */}
        <div className="px-4 mt-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-[14px] text-[#333]">Buku Terlaris</h3>
            <Link href="/classification" className="flex items-center text-[12px] text-[#8A1410]">
              Lihat semua <ChevronRight size={14} />
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </div>

        {/* Membership Banner */}
        <div className="mx-4 mt-5 bg-[#FFDBAD] rounded-xl p-4 flex items-center gap-3">
          <span className="text-3xl">👑</span>
          <div className="flex-1">
            <p className="font-bold text-[13px] text-[#8A1410]">Upgrade ke Premium</p>
            <p className="text-[11px] text-[#666]">Akses ribuan buku tanpa batas</p>
          </div>
          <Link href="/membership" className="bg-[#8A1410] text-white text-[11px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
            Mulai
          </Link>
        </div>

        <div className="h-4"></div>
      </div>
    </MobileContainer>
  );
}
