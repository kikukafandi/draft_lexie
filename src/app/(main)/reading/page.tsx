'use client';

import { useState } from 'react';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import { Play, Pause, SkipBack, SkipForward, Volume2, BookOpen, List } from 'lucide-react';

export default function ReadingPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mode, setMode] = useState<'read' | 'listen'>('listen');
  const [progress, setProgress] = useState(35);

  return (
    <MobileContainer>
      <PageHeader title="Buku Audio" />
      <div className="flex-1 overflow-y-auto pb-4">
        {/* Mode toggle */}
        <div className="flex gap-0 mx-4 mt-3 bg-[#F2F2F2] rounded-full p-1">
          <button
            onClick={() => setMode('listen')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-[12px] font-medium transition-colors ${mode === 'listen' ? 'bg-[#8A1410] text-white' : 'text-[#999]'}`}
          >
            <Volume2 size={14} /> Audio
          </button>
          <button
            onClick={() => setMode('read')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full text-[12px] font-medium transition-colors ${mode === 'read' ? 'bg-[#8A1410] text-white' : 'text-[#999]'}`}
          >
            <BookOpen size={14} /> Baca
          </button>
        </div>

        {mode === 'listen' ? (
          <div className="flex flex-col items-center px-8 pt-6">
            {/* Cover */}
            <div className="w-52 h-52 bg-[#FFDBAD] rounded-2xl flex items-center justify-center shadow-xl mb-6">
              <span className="text-7xl">📖</span>
            </div>

            {/* Info */}
            <h2 className="text-[16px] font-bold text-[#333] text-center">Hukum Perdata Indonesia</h2>
            <p className="text-[13px] text-[#999] mt-1">Bab 5: Hukum Benda</p>

            {/* Progress */}
            <div className="w-full mt-6">
              <input
                type="range"
                min={0}
                max={100}
                value={progress}
                onChange={(e) => setProgress(Number(e.target.value))}
                className="w-full accent-[#8A1410] h-1"
              />
              <div className="flex justify-between mt-1">
                <span className="text-[11px] text-[#999]">12:30</span>
                <span className="text-[11px] text-[#999]">35:00</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-8 mt-6">
              <button className="text-[#999]">
                <SkipBack size={28} />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 bg-[#8A1410] rounded-full flex items-center justify-center shadow-lg"
              >
                {isPlaying ? <Pause size={28} className="text-white" /> : <Play size={28} className="text-white ml-1" />}
              </button>
              <button className="text-[#999]">
                <SkipForward size={28} />
              </button>
            </div>

            {/* Speed */}
            <div className="flex items-center gap-3 mt-6">
              {['0.75x', '1x', '1.25x', '1.5x'].map((speed) => (
                <button key={speed} className={`px-3 py-1 rounded-full text-[12px] ${speed === '1x' ? 'bg-[#8A1410] text-white' : 'bg-[#F2F2F2] text-[#666]'}`}>
                  {speed}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="px-4 pt-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[12px] text-[#999]">Bab 5: Hukum Benda</p>
              <button className="flex items-center gap-1 text-[12px] text-[#8A1410]">
                <List size={14} /> Daftar Isi
              </button>
            </div>
            <div className="text-[14px] text-[#333] leading-[1.8] space-y-4">
              <p>Hukum benda adalah bagian dari hukum perdata yang mengatur hubungan hukum antara orang dengan benda. Benda dalam konteks hukum perdata meliputi segala sesuatu yang dapat dimiliki dan dikuasai oleh seseorang.</p>
              <p>Menurut Pasal 499 KUH Perdata, yang disebut benda adalah tiap-tiap barang dan tiap-tiap hak yang dapat dikuasai oleh hak milik.</p>
              <p>Pembagian benda dalam hukum perdata Indonesia antara lain: benda bergerak dan tidak bergerak, benda berwujud dan tidak berwujud, serta benda yang dapat diganti dan tidak dapat diganti.</p>
              <p>Hak-hak kebendaan yang dikenal dalam hukum perdata meliputi hak milik, hak guna usaha, hak guna bangunan, hak pakai, serta hak-hak jaminan seperti gadai dan hipotek.</p>
            </div>
            {/* Progress bar */}
            <div className="mt-6 flex items-center gap-2">
              <div className="flex-1 h-1 bg-gray-100 rounded-full">
                <div className="h-full w-[35%] bg-[#8A1410] rounded-full"></div>
              </div>
              <span className="text-[11px] text-[#999]">35%</span>
            </div>
          </div>
        )}
      </div>
    </MobileContainer>
  );
}
