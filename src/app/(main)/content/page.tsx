'use client';

import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import { Star, Heart, Share2, BookOpen, Headphones, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function ContentPage() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState<'desc' | 'review'>('desc');

  return (
    <MobileContainer>
      <PageHeader
        title="Detail Buku"
        rightAction={
          <div className="flex gap-2">
            <button onClick={() => setIsWishlisted(!isWishlisted)}>
              <Heart size={20} className={isWishlisted ? 'text-red-500 fill-red-500' : 'text-[#333]'} />
            </button>
            <button><Share2 size={20} className="text-[#333]" /></button>
          </div>
        }
      />
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Book cover */}
        <div className="bg-[#F2F2F2] px-8 py-8 flex justify-center">
          <div className="w-[140px] h-[200px] bg-[#FFDBAD] rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-6xl">📖</span>
          </div>
        </div>

        {/* Info */}
        <div className="px-4 pt-4">
          <h1 className="text-[18px] font-bold text-[#333]">Hukum Perdata Indonesia</h1>
          <p className="text-[13px] text-[#999] mt-1">Prof. Dr. Subekti, S.H.</p>

          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} size={13} className={s <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'} />
              ))}
              <span className="text-[12px] text-[#999] ml-1">4.8 (256 ulasan)</span>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <span className="text-[22px] font-bold text-[#8A1410]">Rp 85.000</span>
            <span className="text-[13px] text-[#999] line-through">Rp 120.000</span>
            <span className="bg-[#FFDBAD] text-[#8A1410] text-[11px] font-bold px-2 py-0.5 rounded-full">-29%</span>
          </div>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap mt-3">
            {['Hukum Perdata', 'Teks Book', 'Indonesia'].map((tag) => (
              <span key={tag} className="bg-[#F2F2F2] text-[#666] text-[11px] px-2.5 py-1 rounded-full">{tag}</span>
            ))}
          </div>

          {/* Read format */}
          <div className="flex gap-3 mt-4">
            <div className="flex-1 flex items-center gap-2 bg-[#F2F2F2] rounded-xl p-3">
              <BookOpen size={18} className="text-[#8A1410]" />
              <div>
                <p className="text-[11px] text-[#999]">Format</p>
                <p className="text-[12px] font-semibold text-[#333]">E-Book</p>
              </div>
            </div>
            <div className="flex-1 flex items-center gap-2 bg-[#F2F2F2] rounded-xl p-3">
              <Headphones size={18} className="text-[#8A1410]" />
              <div>
                <p className="text-[11px] text-[#999]">Audio</p>
                <p className="text-[12px] font-semibold text-[#333]">Tersedia</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-0 mt-5 border-b border-gray-200">
            {(['desc', 'review'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 pb-2 text-[13px] font-medium ${activeTab === tab ? 'text-[#8A1410] border-b-2 border-[#8A1410]' : 'text-[#999]'}`}
              >
                {tab === 'desc' ? 'Deskripsi' : 'Ulasan'}
              </button>
            ))}
          </div>

          {activeTab === 'desc' ? (
            <div className="mt-3">
              <p className="text-[13px] text-[#666] leading-relaxed">
                Buku ini membahas secara komprehensif tentang hukum perdata di Indonesia, mulai dari hukum perorangan, hukum keluarga, hukum benda, hukum perikatan, hingga hukum waris. Ditulis oleh salah satu pakar hukum terkemuka Indonesia.
              </p>
              <p className="text-[13px] text-[#666] leading-relaxed mt-2">
                Cocok untuk mahasiswa hukum, praktisi, maupun masyarakat umum yang ingin memahami dasar-dasar hukum perdata Indonesia.
              </p>
            </div>
          ) : (
            <div className="mt-3 flex flex-col gap-3">
              {['Sangat bermanfaat!', 'Penjelasannya mudah dipahami'].map((review, i) => (
                <div key={i} className="bg-[#F2F2F2] rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-full bg-[#8A1410] flex items-center justify-center">
                      <span className="text-white text-[11px] font-bold">U</span>
                    </div>
                    <p className="text-[12px] font-semibold text-[#333]">Pengguna {i + 1}</p>
                    <div className="flex ml-auto">
                      {[1,2,3,4,5].map((s) => <Star key={s} size={10} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                  </div>
                  <p className="text-[12px] text-[#666]">{review}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom action */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3 flex gap-3">
        <button className="w-12 h-12 border border-[#8A1410] rounded-xl flex items-center justify-center">
          <ShoppingCart size={20} className="text-[#8A1410]" />
        </button>
        <Link href="/cart" className="flex-1">
          <Button fullWidth>Beli Sekarang</Button>
        </Link>
      </div>
    </MobileContainer>
  );
}
