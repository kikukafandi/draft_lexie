import Link from 'next/link';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import SearchBar from '@/components/ui/SearchBar';
import { MessageCircle } from 'lucide-react';

const conversations = [
  { id: '1', name: 'Customer Service', lastMsg: 'Halo, ada yang bisa kami bantu?', time: '10:30', unread: 1, avatar: '🎧' },
  { id: '2', name: 'Konsultan Hukum A', lastMsg: 'Baik, saya akan segera menjawab', time: '09:15', unread: 0, avatar: '👨‍⚖️' },
  { id: '3', name: 'Dr. Budi Santoso', lastMsg: 'Pertanyaan Anda sangat bagus', time: 'Kemarin', unread: 2, avatar: '👩‍⚖️' },
  { id: '4', name: 'Konsultan Hukum B', lastMsg: 'Terima kasih atas konsultasinya', time: 'Sen', unread: 0, avatar: '🧑‍💼' },
];

export default function ChatPage() {
  return (
    <MobileContainer>
      <PageHeader title="Pesan" showBack={false} />
      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-3">
        <SearchBar placeholder="Cari percakapan..." className="mb-4" />

        {/* Live consultation banner */}
        <Link href="/chat/live" className="flex items-center gap-3 bg-[#8A1410] rounded-xl p-3 mb-4">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <MessageCircle size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold text-[13px]">Live Chat Support</p>
            <p className="text-white/70 text-[11px]">Konsultasi langsung dengan ahli hukum</p>
          </div>
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
        </Link>

        {/* Conversations */}
        <div className="flex flex-col gap-1">
          {conversations.map((conv) => (
            <Link key={conv.id} href={`/konsultasi`}>
              <div className="flex items-center gap-3 bg-white rounded-xl px-3 py-3.5">
                <div className="w-12 h-12 bg-[#FFDBAD] rounded-full flex items-center justify-center text-2xl shrink-0">
                  {conv.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-semibold text-[#333]">{conv.name}</p>
                    <p className="text-[11px] text-[#999]">{conv.time}</p>
                  </div>
                  <p className="text-[12px] text-[#999] truncate mt-0.5">{conv.lastMsg}</p>
                </div>
                {conv.unread > 0 && (
                  <span className="w-5 h-5 bg-[#8A1410] rounded-full text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    {conv.unread}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MobileContainer>
  );
}
