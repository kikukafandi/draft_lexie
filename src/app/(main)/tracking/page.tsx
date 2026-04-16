import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import { CheckCircle, Circle, Package, BookOpen } from 'lucide-react';

const steps = [
  { label: 'Pesanan Diterima', time: '12 Jan 2024, 10:00', done: true },
  { label: 'Pembayaran Dikonfirmasi', time: '12 Jan 2024, 10:05', done: true },
  { label: 'Diproses', time: '12 Jan 2024, 10:05', done: true },
  { label: 'Buku Siap Diakses', time: '12 Jan 2024, 10:10', done: false, current: true },
];

export default function TrackingPage() {
  return (
    <MobileContainer>
      <PageHeader title="Lacak Pesanan" />
      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-4">
        {/* Order info card */}
        <div className="bg-white rounded-xl p-4 mb-4 flex gap-3">
          <div className="w-14 h-18 bg-[#FFDBAD] rounded-lg flex items-center justify-center shrink-0">
            <BookOpen size={24} className="text-[#8A1410]" />
          </div>
          <div>
            <p className="text-[11px] text-[#999]">#ORD001</p>
            <p className="text-[13px] font-semibold text-[#333] mt-0.5">Hukum Perdata Indonesia</p>
            <p className="text-[12px] text-[#8A1410] font-bold mt-1">Rp 94.350</p>
          </div>
        </div>

        {/* Tracking timeline */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[13px] text-[#333] mb-4">Status Pengiriman</h3>
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 mb-3 last:mb-0">
              <div className="flex flex-col items-center">
                {step.done ? (
                  <CheckCircle size={22} className="text-[#8A1410]" />
                ) : step.current ? (
                  <div className="w-5 h-5 rounded-full border-2 border-[#8A1410] flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#8A1410]"></div>
                  </div>
                ) : (
                  <Circle size={22} className="text-gray-300" />
                )}
                {i < steps.length - 1 && (
                  <div className={`w-0.5 h-8 mt-1 ${step.done ? 'bg-[#8A1410]' : 'bg-gray-200'}`}></div>
                )}
              </div>
              <div className="flex-1 -mt-0.5 pb-2">
                <p className={`text-[13px] font-medium ${step.done || step.current ? 'text-[#333]' : 'text-[#999]'}`}>
                  {step.label}
                </p>
                {step.done && <p className="text-[11px] text-[#999]">{step.time}</p>}
                {step.current && (
                  <p className="text-[11px] text-[#8A1410] font-medium">Sedang diproses...</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Support */}
        <div className="bg-[#FFDBAD] rounded-xl p-4 mt-4 flex items-center gap-3">
          <Package size={24} className="text-[#8A1410]" />
          <div className="flex-1">
            <p className="text-[13px] font-semibold text-[#8A1410]">Butuh bantuan?</p>
            <p className="text-[11px] text-[#666]">Hubungi customer service kami</p>
          </div>
          <button className="bg-[#8A1410] text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
            Chat
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}
