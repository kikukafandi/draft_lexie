'use client';

import { useState } from 'react';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import { Send, Phone, Video, MoreVertical } from 'lucide-react';

const messages = [
  { id: 1, from: 'consultant', text: 'Selamat datang! Saya Dr. Budi Santoso, konsultan hukum Anda. Apa yang bisa saya bantu?', time: '14:00' },
  { id: 2, from: 'user', text: 'Saya ingin konsultasi mengenai sengketa tanah', time: '14:01' },
  { id: 3, from: 'consultant', text: 'Baik, sengketa tanah merupakan masalah yang sering terjadi. Mohon ceritakan lebih detail situasinya.', time: '14:02' },
];

export default function KonsultasiPage() {
  const [msgs, setMsgs] = useState(messages);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMsgs((p) => [...p, { id: Date.now(), from: 'user', text: input, time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) }]);
    setInput('');
  };

  return (
    <MobileContainer>
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button onClick={() => history.back()} className="text-[#333]">
            <span className="text-lg">←</span>
          </button>
          <div className="w-10 h-10 bg-[#FFDBAD] rounded-full flex items-center justify-center text-xl">👨‍⚖️</div>
          <div>
            <p className="text-[13px] font-semibold text-[#333]">Dr. Budi Santoso</p>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span className="text-[11px] text-green-600">Online</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button><Phone size={18} className="text-[#8A1410]" /></button>
          <button><Video size={18} className="text-[#8A1410]" /></button>
          <button><MoreVertical size={18} className="text-[#999]" /></button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3 bg-[#F2F2F2]">
        {msgs.map((msg) => (
          <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[75%] px-3 py-2 rounded-2xl ${msg.from === 'user' ? 'bg-[#8A1410] text-white rounded-tr-none' : 'bg-white text-[#333] rounded-tl-none shadow-sm'}`}>
              <p className="text-[13px] leading-relaxed">{msg.text}</p>
              <p className={`text-[10px] mt-1 ${msg.from === 'user' ? 'text-white/60' : 'text-[#999]'}`}>{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 px-3 py-3 bg-white border-t border-gray-100">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Tulis pesan..."
          className="flex-1 bg-[#F2F2F2] rounded-full px-4 py-2 text-[13px] text-[#333] outline-none"
        />
        <button onClick={send} className="w-9 h-9 bg-[#8A1410] rounded-full flex items-center justify-center">
          <Send size={16} className="text-white" />
        </button>
      </div>
    </MobileContainer>
  );
}
