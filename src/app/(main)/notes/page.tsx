import Link from 'next/link';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import { Plus, Search, StickyNote } from 'lucide-react';

const notes = [
  { id: '1', title: 'Catatan Hukum Perdata', excerpt: 'Hukum perdata adalah hukum yang mengatur...', date: '12 Jan 2024', color: 'bg-[#FFDBAD]' },
  { id: '2', title: 'Pasal UUD 1945', excerpt: 'Pasal 1 ayat 1: Negara Indonesia ialah...', date: '10 Jan 2024', color: 'bg-blue-100' },
  { id: '3', title: 'Resume Hukum Pidana', excerpt: 'Unsur-unsur tindak pidana meliputi...', date: '8 Jan 2024', color: 'bg-green-100' },
  { id: '4', title: 'Catatan Kuliah', excerpt: 'Materi perkuliahan hukum tata negara...', date: '5 Jan 2024', color: 'bg-purple-100' },
];

export default function NotesPage() {
  return (
    <MobileContainer>
      <PageHeader
        title="Catatan"
        rightAction={
          <Link href="/notes/new">
            <Plus size={22} className="text-[#333]" />
          </Link>
        }
      />
      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-3">
        {/* Search */}
        <div className="flex items-center gap-2 bg-[#F2F2F2] rounded-full px-3 py-2 mb-4">
          <Search size={16} className="text-[#999]" />
          <input placeholder="Cari catatan..." className="flex-1 bg-transparent text-[13px] outline-none" />
        </div>

        {/* Notes grid */}
        <div className="grid grid-cols-2 gap-3">
          {notes.map((note) => (
            <Link key={note.id} href={`/notes/${note.id}`}>
              <div className={`${note.color} rounded-xl p-3 min-h-[120px]`}>
                <p className="font-semibold text-[13px] text-[#333] mb-1">{note.title}</p>
                <p className="text-[12px] text-[#666] leading-relaxed line-clamp-3">{note.excerpt}</p>
                <p className="text-[10px] text-[#999] mt-2">{note.date}</p>
              </div>
            </Link>
          ))}
          {/* Add note button */}
          <Link href="/notes/new" className="border-2 border-dashed border-gray-300 rounded-xl min-h-[120px] flex flex-col items-center justify-center gap-2">
            <Plus size={24} className="text-[#999]" />
            <span className="text-[12px] text-[#999]">Tambah catatan</span>
          </Link>
        </div>
      </div>
    </MobileContainer>
  );
}
