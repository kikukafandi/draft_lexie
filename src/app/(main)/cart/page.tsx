'use client';

import { useState } from 'react';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import { Trash2, Plus, Minus } from 'lucide-react';
import Link from 'next/link';

const initialItems = [
  { id: '1', title: 'Hukum Perdata Indonesia', price: 85000, qty: 1 },
  { id: '2', title: 'UUD 1945 & Amandemen', price: 45000, qty: 1 },
];

export default function CartPage() {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };
  const removeItem = (id: string) => setItems((prev) => prev.filter((item) => item.id !== id));

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const vat = Math.round(subtotal * 0.11);
  const total = subtotal + vat;

  const fmt = (n: number) => `Rp ${n.toLocaleString('id-ID')}`;

  return (
    <MobileContainer>
      <PageHeader title="Keranjang" />
      <div className="flex-1 overflow-y-auto pb-36 px-4 pt-3">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-60 gap-3">
            <span className="text-5xl">🛒</span>
            <p className="text-[#999] text-[14px]">Keranjang kosong</p>
            <Link href="/classification">
              <Button>Mulai Belanja</Button>
            </Link>
          </div>
        ) : (
          <>
            {items.map((item) => (
              <div key={item.id} className="flex gap-3 bg-white rounded-xl p-3 mb-3 shadow-sm">
                <div className="w-16 h-20 bg-[#FFDBAD] rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-2xl">📖</span>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <p className="text-[13px] font-semibold text-[#333] flex-1 pr-2 leading-tight">{item.title}</p>
                    <button onClick={() => removeItem(item.id)}>
                      <Trash2 size={16} className="text-[#999]" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-[14px] font-bold text-[#8A1410]">{fmt(item.price)}</p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-[13px] w-4 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-6 h-6 rounded-full bg-[#8A1410] flex items-center justify-center"
                      >
                        <Plus size={12} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Summary */}
      {items.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 pt-3 pb-4">
          <div className="flex flex-col gap-1.5 mb-3">
            <div className="flex justify-between text-[13px]">
              <span className="text-[#666]">Subtotal</span>
              <span className="font-medium text-[#333]">{fmt(subtotal)}</span>
            </div>
            <div className="flex justify-between text-[13px]">
              <span className="text-[#666]">PPN (11%)</span>
              <span className="font-medium text-[#333]">{fmt(vat)}</span>
            </div>
            <div className="flex justify-between text-[14px] font-bold border-t border-gray-100 pt-1.5">
              <span className="text-[#333]">Total</span>
              <span className="text-[#8A1410]">{fmt(total)}</span>
            </div>
          </div>
          <Link href="/payment">
            <Button fullWidth className="py-3">Lanjut ke Pembayaran</Button>
          </Link>
        </div>
      )}
    </MobileContainer>
  );
}
