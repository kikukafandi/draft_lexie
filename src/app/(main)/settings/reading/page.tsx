'use client';

import { useState } from 'react';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';

export default function ReadingSettingsPage() {
  const [fontSize, setFontSize] = useState(14);
  const [theme, setTheme] = useState<'light' | 'sepia' | 'dark'>('light');
  const [lineHeight, setLineHeight] = useState(1.6);

  const themes = [
    { id: 'light', label: 'Terang', bg: 'bg-white', text: 'text-black' },
    { id: 'sepia', label: 'Sepia', bg: 'bg-[#f5e6c8]', text: 'text-[#5c4a1e]' },
    { id: 'dark', label: 'Gelap', bg: 'bg-gray-900', text: 'text-white' },
  ] as const;

  return (
    <MobileContainer>
      <PageHeader title="Preferensi Baca" />
      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-4">
        {/* Preview */}
        <div className={`rounded-xl p-4 mb-4 ${theme === 'light' ? 'bg-white' : theme === 'sepia' ? 'bg-[#f5e6c8]' : 'bg-gray-900'}`}>
          <p className={`text-[11px] mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-[#999]'}`}>Preview</p>
          <p
            className={theme === 'dark' ? 'text-white' : theme === 'sepia' ? 'text-[#5c4a1e]' : 'text-[#333]'}
            style={{ fontSize: `${fontSize}px`, lineHeight }}
          >
            Hukum perdata adalah hukum yang mengatur hubungan antara orang satu dengan orang lain dalam masyarakat yang bersifat privat.
          </p>
        </div>

        {/* Font size */}
        <div className="bg-white rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-[13px] text-[#333]">Ukuran Font</p>
            <span className="text-[12px] text-[#8A1410] font-bold">{fontSize}px</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-[#999]">A</span>
            <input
              type="range"
              min={11}
              max={22}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="flex-1 accent-[#8A1410]"
            />
            <span className="text-[16px] text-[#999] font-medium">A</span>
          </div>
        </div>

        {/* Line height */}
        <div className="bg-white rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-[13px] text-[#333]">Jarak Baris</p>
            <span className="text-[12px] text-[#8A1410] font-bold">{lineHeight}x</span>
          </div>
          <input
            type="range"
            min={1.2}
            max={2.4}
            step={0.2}
            value={lineHeight}
            onChange={(e) => setLineHeight(Number(e.target.value))}
            className="w-full accent-[#8A1410]"
          />
        </div>

        {/* Theme */}
        <div className="bg-white rounded-xl p-4 mb-4">
          <p className="font-semibold text-[13px] text-[#333] mb-3">Tema</p>
          <div className="flex gap-3">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl border-2 ${theme === t.id ? 'border-[#8A1410]' : 'border-gray-100'}`}
              >
                <div className={`w-8 h-8 rounded-full ${t.bg} border border-gray-200`}></div>
                <span className="text-[11px] text-[#666]">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Font family */}
        <div className="bg-white rounded-xl p-4">
          <p className="font-semibold text-[13px] text-[#333] mb-3">Font</p>
          <div className="flex gap-2 flex-wrap">
            {['Arial', 'Georgia', 'Times New Roman', 'Courier'].map((font) => (
              <button
                key={font}
                className={`px-3 py-1.5 rounded-full text-[12px] border ${font === 'Arial' ? 'bg-[#8A1410] text-white border-[#8A1410]' : 'border-gray-200 text-[#666]'}`}
                style={{ fontFamily: font }}
              >
                {font}
              </button>
            ))}
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
