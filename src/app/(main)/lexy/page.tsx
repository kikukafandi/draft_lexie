'use client';

import { useState } from 'react';
import MobileContainer from '@/components/layout/MobileContainer';
import { Send, Bot, Sparkles } from 'lucide-react';

const suggestions = [
  'Apa itu hukum pidana?',
  'Jelaskan UUD 1945',
  'Apa perbedaan perdata dan pidana?',
  'Bagaimana cara mengajukan gugatan?',
];

const initialMessages = [
  { id: 1, from: 'ai', text: 'Halo! Saya **Lexie**, asisten AI hukum dari LEXSEE. Saya siap membantu Anda memahami dunia hukum Indonesia. Ada yang ingin Anda tanyakan?' },
];

export default function LexyPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), from: 'user', text }]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [...prev, {
        id: Date.now() + 1,
        from: 'ai',
        text: `Terima kasih atas pertanyaan Anda tentang "${text}". Berdasarkan hukum Indonesia, saya akan memberikan penjelasan yang komprehensif...`,
      }]);
    }, 800);
  };

  return (
    <MobileContainer>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#8A1410]">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <Bot size={20} className="text-[#8A1410]" />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <h1 className="text-white font-bold text-[15px]">Lexie AI</h1>
            <Sparkles size={14} className="text-[#FFDBAD]" />
          </div>
          <p className="text-white/70 text-[11px]">Asisten hukum cerdas</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3 bg-[#F2F2F2]">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.from === 'ai' && (
              <div className="w-8 h-8 bg-[#8A1410] rounded-full flex items-center justify-center shrink-0 mt-1">
                <Bot size={14} className="text-white" />
              </div>
            )}
            <div className={`max-w-[80%] px-3 py-2.5 rounded-2xl ${msg.from === 'user' ? 'bg-[#8A1410] text-white rounded-tr-none' : 'bg-white text-[#333] rounded-tl-none shadow-sm'}`}>
              <p className="text-[13px] leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}

        {/* Suggestions (only shown initially) */}
        {messages.length <= 1 && (
          <div className="mt-2">
            <p className="text-[11px] text-[#999] mb-2 text-center">Coba tanya:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="bg-white text-[#8A1410] text-[12px] border border-[#8A1410] px-3 py-1.5 rounded-full"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 px-3 py-3 bg-white border-t border-gray-100">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send(input)}
          placeholder="Tanya Lexie..."
          className="flex-1 bg-[#F2F2F2] rounded-full px-4 py-2.5 text-[13px] text-[#333] outline-none"
        />
        <button
          onClick={() => send(input)}
          className="w-10 h-10 bg-[#8A1410] rounded-full flex items-center justify-center"
        >
          <Send size={16} className="text-white" />
        </button>
      </div>
    </MobileContainer>
  );
}
