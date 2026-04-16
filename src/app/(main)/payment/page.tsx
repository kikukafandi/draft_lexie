'use client';

import { useState } from 'react';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { CreditCard, Wallet, Building2 } from 'lucide-react';

const paymentMethods = [
  { id: 'bca', label: 'BCA Virtual Account', icon: Building2, desc: 'Transfer bank BCA' },
  { id: 'mandiri', label: 'Mandiri Virtual Account', icon: Building2, desc: 'Transfer bank Mandiri' },
  { id: 'gopay', label: 'GoPay', icon: Wallet, desc: 'Dompet digital GoPay' },
  { id: 'card', label: 'Kartu Kredit/Debit', icon: CreditCard, desc: 'Visa, Mastercard' },
];

export default function PaymentPage() {
  const [selected, setSelected] = useState('bca');

  return (
    <MobileContainer>
      <PageHeader title="Pembayaran" />
      <div className="flex-1 overflow-y-auto pb-32 px-4 pt-4">
        {/* Order summary */}
        <div className="bg-white rounded-xl p-4 mb-4">
          <h3 className="font-semibold text-[13px] text-[#333] mb-3">Ringkasan Pesanan</h3>
          <div className="flex gap-3 pb-3 border-b border-gray-100">
            <div className="w-14 h-18 bg-[#FFDBAD] rounded-lg flex items-center justify-center shrink-0">
              <span className="text-xl">📖</span>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-[#333]">Hukum Perdata Indonesia</p>
              <p className="text-[12px] text-[#8A1410] font-bold mt-1">Rp 85.000</p>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 mt-3">
            <div className="flex justify-between text-[13px]">
              <span className="text-[#666]">Subtotal</span>
              <span>Rp 85.000</span>
            </div>
            <div className="flex justify-between text-[13px]">
              <span className="text-[#666]">PPN (11%)</span>
              <span>Rp 9.350</span>
            </div>
            <div className="flex justify-between text-[14px] font-bold border-t border-gray-100 pt-1.5">
              <span>Total</span>
              <span className="text-[#8A1410]">Rp 94.350</span>
            </div>
          </div>
        </div>

        {/* Payment methods */}
        <h3 className="font-semibold text-[13px] text-[#333] mb-3">Metode Pembayaran</h3>
        <div className="flex flex-col gap-2">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelected(method.id)}
              className={`flex items-center gap-3 bg-white rounded-xl p-3.5 border-2 transition-colors ${
                selected === method.id ? 'border-[#8A1410]' : 'border-transparent shadow-sm'
              }`}
            >
              <div className="w-10 h-10 bg-[#F2F2F2] rounded-lg flex items-center justify-center">
                <method.icon size={20} className="text-[#8A1410]" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-[13px] font-semibold text-[#333]">{method.label}</p>
                <p className="text-[11px] text-[#999]">{method.desc}</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selected === method.id ? 'border-[#8A1410]' : 'border-gray-300'
              }`}>
                {selected === method.id && <div className="w-2.5 h-2.5 rounded-full bg-[#8A1410]"></div>}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[12px] text-[#999]">Total Pembayaran</span>
          <span className="text-[16px] font-bold text-[#8A1410]">Rp 94.350</span>
        </div>
        <Link href="/orders">
          <Button fullWidth className="py-3">Bayar Sekarang</Button>
        </Link>
      </div>
    </MobileContainer>
  );
}
