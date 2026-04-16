'use client';

import { useState } from 'react';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import { Send, Paperclip, Mic } from 'lucide-react';

const initialMessages = [
  { id: 1, from: 'agent', text: 'Halo! Selamat datang di LEXSEE Live Chat. Ada yang bisa kami bantu?', time: '10:00' },
  { id: 2, from: 'user', text: 'Saya ingin tanya tentang hukum perdata', time: '10:01' },
  { id: 3, from: 'agent', text: 'Tentu! Kami siap membantu pertanyaan Anda seputar hukum perdata. Silakan sampaikan pertanyaan Anda.', time: '10:01' },
];

export default function LiveChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), from: 'user', text: input, time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) }]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now() + 1, from: 'agent', text: 'Terima kasih atas pertanyaannya. Tim kami sedang memproses jawaban untuk Anda.', time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) }]);
    }, 1000);
  };

  return (
    <MobileContainer>
      <PageHeader title="Live Chat Support" />
      {/* Agent status */}
      <div className="flex items-center gap-2 px-4 py-2 bg-white border-b border-gray-100">
        <div className="w-8 h-8 bg-[#FFDBAD] rounded-full flex items-center justify-center text-lg">🎧</div>
        <div>
          <p className="text-[12px] font-semibold text-[#333]">Customer Service</p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            <span className="text-[11px] text-green-600">Online</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[75%] px-3 py-2 rounded-2xl ${msg.from === 'user' ? 'bg-[#8A1410] text-white rounded-tr-none' : 'bg-[#F2F2F2] text-[#333] rounded-tl-none'}`}>
              <p className="text-[13px] leading-relaxed">{msg.text}</p>
              <p className={`text-[10px] mt-1 ${msg.from === 'user' ? 'text-white/60' : 'text-[#999]'}`}>{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 px-3 py-3 bg-white border-t border-gray-100 pb-safe">
        <button className="w-9 h-9 flex items-center justify-center text-[#999]">
          <Paperclip size={18} />
        </button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Tulis pesan..."
          className="flex-1 bg-[#F2F2F2] rounded-full px-4 py-2 text-[13px] text-[#333] outline-none"
        />
        {input ? (
          <button onClick={send} className="w-9 h-9 bg-[#8A1410] rounded-full flex items-center justify-center">
            <Send size={16} className="text-white" />
          </button>
        ) : (
          <button className="w-9 h-9 flex items-center justify-center text-[#999]">
            <Mic size={18} />
          </button>
        )}
      </div>
    </MobileContainer>
  );
}
