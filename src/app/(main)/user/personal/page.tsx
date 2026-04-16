import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';

const recentBooks = [
  { title: 'Hukum Perdata Indonesia', progress: 65 },
  { title: 'UUD 1945 & Amandemen', progress: 100 },
  { title: 'Hukum Pidana Umum', progress: 30 },
];

export default function PersonalHomePage() {
  return (
    <MobileContainer>
      <PageHeader title="Halaman Pribadi" />
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Profile header */}
        <div className="bg-[#8A1410] px-4 pt-6 pb-8 text-center">
          <div className="w-20 h-20 rounded-full bg-white mx-auto flex items-center justify-center mb-3">
            <span className="text-[#8A1410] font-bold text-2xl">U</span>
          </div>
          <h2 className="text-white font-bold text-[16px]">Pengguna LEXSEE</h2>
          <p className="text-white/70 text-[12px] mt-0.5">@pengguna_lexsee</p>
          <div className="flex justify-center gap-6 mt-4">
            {[
              { label: 'Pengikut', value: '128' },
              { label: 'Mengikuti', value: '64' },
              { label: 'Buku', value: '12' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-white font-bold text-[16px]">{s.value}</p>
                <p className="text-white/70 text-[11px]">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-2 justify-center mt-4">
            <Link href="/user/edit" className="bg-white text-[#8A1410] text-[12px] font-bold px-4 py-1.5 rounded-full">
              Edit Profil
            </Link>
            <Link href="/friends" className="bg-white/20 text-white text-[12px] font-bold px-4 py-1.5 rounded-full">
              Teman
            </Link>
          </div>
        </div>

        {/* Reading progress */}
        <div className="px-4 mt-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-[14px] text-[#333]">Sedang Dibaca</h3>
            <Link href="/history" className="flex items-center text-[12px] text-[#8A1410]">
              Semua <ChevronRight size={14} />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {recentBooks.map((book) => (
              <div key={book.title} className="flex gap-3 bg-white rounded-xl p-3">
                <div className="w-12 h-16 bg-[#FFDBAD] rounded-lg flex items-center justify-center shrink-0">
                  <BookOpen size={18} className="text-[#8A1410]" />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-semibold text-[#333]">{book.title}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full">
                      <div
                        className="h-full bg-[#8A1410] rounded-full"
                        style={{ width: `${book.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-[11px] text-[#999]">{book.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement */}
        <div className="px-4 mt-4 mb-4">
          <h3 className="font-bold text-[14px] text-[#333] mb-3">Pencapaian</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { emoji: '📚', label: 'Pembaca Aktif', desc: '10 buku' },
              { emoji: '🔥', label: 'Streak 7 Hari', desc: 'Selesai' },
              { emoji: '⭐', label: 'Reviewer', desc: '5 ulasan' },
            ].map((ach) => (
              <div key={ach.label} className="bg-white rounded-xl p-3 flex flex-col items-center gap-1.5">
                <span className="text-3xl">{ach.emoji}</span>
                <p className="text-[11px] font-semibold text-[#333] text-center">{ach.label}</p>
                <p className="text-[10px] text-[#999]">{ach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
