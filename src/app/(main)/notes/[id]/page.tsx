'use client';

import { useState } from 'react';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import { MoreVertical, Bold, Italic, List, Link2 } from 'lucide-react';

export default function NoteDetailPage({ params }: { params: { id: string } }) {
  const isNew = params.id === 'new';
  const [title, setTitle] = useState(isNew ? '' : 'Catatan Hukum Perdata');
  const [content, setContent] = useState(
    isNew ? '' : 'Hukum perdata adalah hukum yang mengatur hubungan antara orang satu dengan orang lain dalam masyarakat...\n\nPrinsip-prinsip utama:\n1. Asas kebebasan berkontrak\n2. Asas konsensualisme\n3. Asas kepercayaan\n4. Asas kekuatan mengikat'
  );

  return (
    <MobileContainer>
      <PageHeader
        title={isNew ? 'Catatan Baru' : 'Edit Catatan'}
        rightAction={<MoreVertical size={20} className="text-[#333]" />}
      />

      {/* Format toolbar */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-100 bg-white">
        {[Bold, Italic, List, Link2].map((Icon, i) => (
          <button key={i} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100">
            <Icon size={16} className="text-[#666]" />
          </button>
        ))}
        <div className="flex-1"></div>
        <button className="bg-[#8A1410] text-white text-[12px] font-bold px-3 py-1 rounded-full">
          Simpan
        </button>
      </div>

      <div className="flex-1 flex flex-col px-4 pt-4 overflow-y-auto">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Judul catatan..."
          className="text-[18px] font-bold text-[#333] outline-none mb-3 placeholder:text-gray-300"
        />
        <p className="text-[11px] text-[#999] mb-3">12 Januari 2024 · 256 karakter</p>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Mulai menulis catatan..."
          className="flex-1 text-[13px] text-[#666] leading-relaxed outline-none resize-none min-h-[300px]"
        />
      </div>
    </MobileContainer>
  );
}
