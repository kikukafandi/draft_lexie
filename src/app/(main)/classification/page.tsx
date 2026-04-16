import Link from 'next/link';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import SearchBar from '@/components/ui/SearchBar';
import BookCard from '@/components/ui/BookCard';

const categories = [
  { id: 'pidana', name: 'Hukum Pidana', emoji: '⚖️', count: 124 },
  { id: 'perdata', name: 'Hukum Perdata', emoji: '📋', count: 89 },
  { id: 'bisnis', name: 'Hukum Bisnis', emoji: '💼', count: 67 },
  { id: 'tata-negara', name: 'Tata Negara', emoji: '🏛️', count: 45 },
  { id: 'adat', name: 'Hukum Adat', emoji: '🗿', count: 32 },
  { id: 'internasional', name: 'Hukum Internasional', emoji: '🌍', count: 58 },
  { id: 'agraria', name: 'Hukum Agraria', emoji: '🌱', count: 28 },
  { id: 'jurnal', name: 'Jurnal', emoji: '📰', count: 210 },
  { id: 'uu', name: 'Undang-Undang', emoji: '📜', count: 156 },
  { id: 'skripsi', name: 'Skripsi/Tesis', emoji: '🎓', count: 94 },
  { id: 'kasus', name: 'Studi Kasus', emoji: '🔍', count: 73 },
  { id: 'lainnya', name: 'Lainnya', emoji: '📚', count: 142 },
];

const books = [
  { id: '1', title: 'Hukum Perdata Indonesia', price: 'Rp 85.000', rating: 4.8 },
  { id: '2', title: 'UUD 1945 & Amandemen', price: 'Rp 45.000', rating: 4.9 },
  { id: '3', title: 'Hukum Pidana Umum', price: 'Rp 72.000', rating: 4.7 },
  { id: '4', title: 'Hukum Tata Negara', price: 'Rp 65.000', rating: 4.6 },
  { id: '5', title: 'Kitab UU Hukum Perdata', price: 'Rp 55.000', rating: 4.5 },
  { id: '6', title: 'Hukum Bisnis Modern', price: 'Rp 90.000', rating: 4.7 },
];

export default function ClassificationPage() {
  return (
    <MobileContainer>
      <PageHeader title="Toko Buku" showBack={false} />
      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-3">
        <SearchBar placeholder="Cari buku, penulis, kategori..." className="mb-4" />

        {/* Categories */}
        <h3 className="font-bold text-[14px] text-[#333] mb-3">Kategori</h3>
        <div className="grid grid-cols-3 gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="flex flex-col items-center gap-1.5 bg-white rounded-xl py-3 px-2 shadow-sm"
            >
              <span className="text-2xl">{cat.emoji}</span>
              <span className="text-[11px] text-[#333] text-center leading-tight">{cat.name}</span>
              <span className="text-[10px] text-[#999]">{cat.count} buku</span>
            </button>
          ))}
        </div>

        {/* Books grid */}
        <h3 className="font-bold text-[14px] text-[#333] mb-3">Semua Buku</h3>
        <div className="grid grid-cols-3 gap-3">
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </div>
    </MobileContainer>
  );
}
