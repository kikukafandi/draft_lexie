'use client';

import { useState } from 'react';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import { Camera, Image as ImageIcon, FileText, QrCode } from 'lucide-react';

export default function ScanPage() {
  const [mode, setMode] = useState<'qr' | 'text' | 'doc'>('qr');

  return (
    <MobileContainer>
      <PageHeader title="Scan" showBack={false} />
      <div className="flex-1 flex flex-col pb-20">
        {/* Mode tabs */}
        <div className="flex gap-0 mx-4 mt-3 bg-[#F2F2F2] rounded-full p-1">
          {[
            { id: 'qr', label: 'QR Code', icon: QrCode },
            { id: 'text', label: 'Teks', icon: FileText },
            { id: 'doc', label: 'Dokumen', icon: ImageIcon },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setMode(id as typeof mode)}
              className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-full text-[12px] font-medium transition-colors ${mode === id ? 'bg-[#8A1410] text-white' : 'text-[#999]'}`}
            >
              <Icon size={13} /> {label}
            </button>
          ))}
        </div>

        {/* Scanner area */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 mt-4">
          <div className="w-full max-w-[280px] aspect-square bg-black rounded-2xl relative flex items-center justify-center overflow-hidden">
            {/* Corner markers */}
            {['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'].map((pos, i) => (
              <div
                key={i}
                className={`absolute w-8 h-8 ${pos} border-4 border-[#FFDBAD] ${
                  i === 0 ? 'border-r-0 border-b-0 rounded-tl-lg' :
                  i === 1 ? 'border-l-0 border-b-0 rounded-tr-lg' :
                  i === 2 ? 'border-r-0 border-t-0 rounded-bl-lg' :
                  'border-l-0 border-t-0 rounded-br-lg'
                }`}
              ></div>
            ))}
            {/* Scan line */}
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-[#8A1410]/70"></div>
            <Camera size={36} className="text-white/30" />
          </div>

          <p className="text-[13px] text-[#666] text-center mt-4 leading-relaxed">
            {mode === 'qr'
              ? 'Arahkan kamera ke QR code buku untuk langsung membuka konten'
              : mode === 'text'
              ? 'Arahkan kamera ke teks untuk membaca dan menyimpan'
              : 'Scan dokumen untuk diproses dan disimpan ke perpustakaan'}
          </p>
        </div>

        {/* Actions */}
        <div className="px-6 pb-4 flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 w-full bg-[#8A1410] text-white font-semibold py-3.5 rounded-full">
            <Camera size={18} />
            Mulai Scan
          </button>
          <button className="flex items-center justify-center gap-2 w-full border border-gray-200 text-[#666] font-medium py-3 rounded-full">
            <ImageIcon size={16} aria-hidden="true" />
            Pilih dari Galeri
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}
