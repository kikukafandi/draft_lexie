'use client';

import { useState } from 'react';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import { Star } from 'lucide-react';

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState('');
  const [feedback, setFeedback] = useState('');

  const categories = ['Bug / Error', 'Fitur Baru', 'Konten', 'Performa', 'Lainnya'];

  return (
    <MobileContainer>
      <PageHeader title="Kirim Masukan" />
      <div className="flex-1 overflow-y-auto pb-24 px-4 pt-4">
        {/* Rating */}
        <div className="bg-white rounded-xl p-4 mb-4 text-center">
          <p className="font-semibold text-[13px] text-[#333] mb-3">Seberapa puas Anda dengan LEXSEE?</p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <button key={s} onClick={() => setRating(s)}>
                <Star
                  size={32}
                  className={s <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}
                />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-[12px] text-[#999] mt-2">
              {['', 'Sangat Buruk', 'Buruk', 'Cukup', 'Baik', 'Sangat Baik'][rating]}
            </p>
          )}
        </div>

        {/* Category */}
        <div className="bg-white rounded-xl p-4 mb-4">
          <p className="font-semibold text-[13px] text-[#333] mb-3">Kategori Masukan</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-[12px] border transition-colors ${
                  category === cat ? 'bg-[#8A1410] text-white border-[#8A1410]' : 'border-gray-200 text-[#666]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Feedback text */}
        <div className="bg-white rounded-xl p-4">
          <p className="font-semibold text-[13px] text-[#333] mb-2">Ceritakan pengalaman Anda</p>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Tulis masukan, saran, atau laporan bug di sini..."
            rows={5}
            className="w-full text-[13px] text-[#666] leading-relaxed outline-none resize-none border border-gray-200 rounded-lg p-3 focus:border-[#8A1410]"
          />
          <p className="text-right text-[11px] text-[#999] mt-1">{feedback.length}/500</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3">
        <Button fullWidth className="py-3">Kirim Masukan</Button>
      </div>
    </MobileContainer>
  );
}
