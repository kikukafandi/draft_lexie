import Link from 'next/link';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import { BookOpen, Clock } from 'lucide-react';

const history = [
  { id: '1', title: 'Hukum Perdata Indonesia', lastRead: '2 jam lalu', progress: 65, chapter: 'Bab 5: Hukum Benda' },
  { id: '2', title: 'UUD 1945 & Amandemen', lastRead: 'Kemarin', progress: 100, chapter: 'Selesai' },
  { id: '3', title: 'Hukum Pidana Umum', lastRead: '3 hari lalu', progress: 30, chapter: 'Bab 2: Unsur Pidana' },
  { id: '4', title: 'Hukum Tata Negara', lastRead: 'Minggu lalu', progress: 15, chapter: 'Bab 1: Pengantar' },
];

export default function HistoryPage() {
  return (
    <MobileContainer>
      <PageHeader title="Riwayat Baca" />
      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-3">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: 'Total Buku', value: '12', icon: BookOpen },
            { label: 'Jam Baca', value: '48', icon: Clock },
            { label: 'Diselesaikan', value: '4', icon: BookOpen },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-3 text-center">
              <p className="text-[18px] font-bold text-[#8A1410]">{stat.value}</p>
              <p className="text-[10px] text-[#999] mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* History list */}
        <h3 className="font-bold text-[13px] text-[#333] mb-3">Terakhir Dibaca</h3>
        <div className="flex flex-col gap-3">
          {history.map((item) => (
            <Link key={item.id} href="/reading">
              <div className="flex gap-3 bg-white rounded-xl p-3">
                <div className="w-14 h-18 bg-[#FFDBAD] rounded-lg flex items-center justify-center shrink-0">
                  <BookOpen size={20} className="text-[#8A1410]" />
                </div>
                <div className="flex-1">
                  <p className="text-[13px] font-semibold text-[#333]">{item.title}</p>
                  <p className="text-[11px] text-[#999] mt-0.5">{item.chapter}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full">
                      <div
                        className="h-full bg-[#8A1410] rounded-full"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-[11px] text-[#999]">{item.progress}%</span>
                  </div>
                  <p className="text-[10px] text-[#999] mt-1">{item.lastRead}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MobileContainer>
  );
}
