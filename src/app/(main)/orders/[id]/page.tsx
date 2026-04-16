import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { CheckCircle, Clock, Package } from 'lucide-react';

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const orderId = params.id;

  return (
    <MobileContainer>
      <PageHeader title="Detail Pesanan" />
      <div className="flex-1 overflow-y-auto pb-24 px-4 pt-4">
        {/* Status */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3 mb-4">
          <CheckCircle size={24} className="text-green-600" />
          <div>
            <p className="font-semibold text-green-700 text-[13px]">Pesanan Selesai</p>
            <p className="text-green-600 text-[11px]">Terima kasih telah berbelanja</p>
          </div>
        </div>

        {/* Order info */}
        <div className="bg-white rounded-xl p-4 mb-3">
          <p className="text-[12px] text-[#999] mb-1">Nomor Pesanan</p>
          <p className="text-[14px] font-bold text-[#333]">#{orderId}</p>
          <div className="border-t border-gray-100 mt-3 pt-3 flex gap-3">
            <div className="w-16 h-20 bg-[#FFDBAD] rounded-lg flex items-center justify-center shrink-0">
              <span className="text-2xl">📖</span>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-[#333]">Hukum Perdata Indonesia</p>
              <p className="text-[12px] text-[#999] mt-0.5">Prof. Dr. Subekti, S.H.</p>
              <p className="text-[13px] font-bold text-[#8A1410] mt-1">Rp 85.000</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl p-4 mb-3">
          <h3 className="font-semibold text-[13px] text-[#333] mb-3">Status Pesanan</h3>
          {[
            { label: 'Pesanan dibuat', time: '12 Jan 2024, 10:00', done: true },
            { label: 'Pembayaran dikonfirmasi', time: '12 Jan 2024, 10:05', done: true },
            { label: 'Buku siap diakses', time: '12 Jan 2024, 10:05', done: true },
          ].map((step, i) => (
            <div key={i} className="flex gap-3 mb-2 last:mb-0">
              <div className="flex flex-col items-center">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${step.done ? 'bg-[#8A1410]' : 'bg-gray-200'}`}>
                  {step.done && <CheckCircle size={12} className="text-white" />}
                </div>
                {i < 2 && <div className="w-0.5 h-4 bg-gray-200 mt-1"></div>}
              </div>
              <div className="flex-1 -mt-0.5">
                <p className="text-[12px] font-medium text-[#333]">{step.label}</p>
                <p className="text-[11px] text-[#999]">{step.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment summary */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[13px] text-[#333] mb-3">Ringkasan Pembayaran</h3>
          <div className="flex flex-col gap-1.5">
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
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3">
        <Link href="/reading">
          <Button fullWidth>Baca Sekarang</Button>
        </Link>
      </div>
    </MobileContainer>
  );
}
