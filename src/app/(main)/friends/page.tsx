'use client';

import { useState } from 'react';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import SearchBar from '@/components/ui/SearchBar';
import { UserPlus } from 'lucide-react';

const friends = [
  { id: '1', name: 'Ahmad Fauzi', mutual: 3, books: 24, avatar: '👨' },
  { id: '2', name: 'Siti Rahayu', mutual: 5, books: 18, avatar: '👩' },
  { id: '3', name: 'Budi Prasetyo', mutual: 1, books: 31, avatar: '👨‍💼' },
  { id: '4', name: 'Dewi Anggraini', mutual: 2, books: 15, avatar: '👩‍💼' },
];

const suggestions = [
  { id: '5', name: 'Rina Wulandari', mutual: 4, avatar: '👩‍🎓' },
  { id: '6', name: 'Hendra Kusuma', mutual: 2, avatar: '👨‍🎓' },
];

export default function FriendsPage() {
  const [activeTab, setActiveTab] = useState<'friends' | 'suggest'>('friends');

  return (
    <MobileContainer>
      <PageHeader title="Teman" />
      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-3">
        <SearchBar placeholder="Cari teman..." className="mb-3" />

        {/* Tabs */}
        <div className="flex gap-0 bg-[#F2F2F2] rounded-full p-1 mb-4">
          {[
            { id: 'friends', label: `Teman (${friends.length})` },
            { id: 'suggest', label: 'Mungkin Dikenal' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex-1 py-2 rounded-full text-[12px] font-medium ${activeTab === tab.id ? 'bg-[#8A1410] text-white' : 'text-[#999]'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {(activeTab === 'friends' ? friends : suggestions).map((person) => (
            <div key={person.id} className="flex items-center gap-3 bg-white rounded-xl p-3">
              <div className="w-12 h-12 bg-[#FFDBAD] rounded-full flex items-center justify-center text-2xl shrink-0">
                {person.avatar}
              </div>
              <div className="flex-1">
                <p className="text-[13px] font-semibold text-[#333]">{person.name}</p>
                <p className="text-[11px] text-[#999]">
                  {activeTab === 'friends'
                    ? `${(person as typeof friends[0]).books} buku · ${person.mutual} teman bersama`
                    : `${person.mutual} teman bersama`}
                </p>
              </div>
              {activeTab === 'suggest' && (
                <button className="flex items-center gap-1 bg-[#FFDBAD] text-[#8A1410] text-[11px] font-bold px-3 py-1.5 rounded-full">
                  <UserPlus size={12} /> Tambah
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </MobileContainer>
  );
}
