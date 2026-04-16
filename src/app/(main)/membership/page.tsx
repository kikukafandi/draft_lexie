import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import { Check, Crown } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 'Gratis',
    period: '',
    features: ['5 buku per bulan', 'Akses jurnal terbatas', 'Baca online', 'Notifikasi dasar'],
    highlight: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'Rp 99.000',
    period: '/bulan',
    features: ['Buku tidak terbatas', 'Semua jurnal', 'Download offline', 'Audio book', 'Konsultasi 2x/bulan', 'Prioritas support'],
    highlight: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 'Rp 199.000',
    period: '/bulan',
    features: ['Semua fitur Premium', 'Konsultasi tidak terbatas', 'AI Lexie premium', 'Early access konten baru', 'Diskon toko 20%'],
    highlight: false,
  },
];

export default function MembershipPage() {
  return (
    <MobileContainer>
      <PageHeader title="Pilih Paket" />
      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-4">
        {/* Header */}
        <div className="text-center mb-6">
          <Crown size={32} className="text-[#8A1410] mx-auto mb-2" />
          <h2 className="font-bold text-[18px] text-[#333]">Upgrade Membership</h2>
          <p className="text-[#999] text-[13px] mt-1">Pilih paket yang sesuai kebutuhan Anda</p>
        </div>

        {/* Plans */}
        <div className="flex flex-col gap-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-4 ${plan.highlight ? 'bg-[#8A1410] shadow-lg' : 'bg-white shadow-sm'}`}
            >
              {plan.highlight && (
                <div className="flex justify-center mb-2">
                  <span className="bg-[#FFDBAD] text-[#8A1410] text-[11px] font-bold px-3 py-0.5 rounded-full">
                    ⭐ Paling Populer
                  </span>
                </div>
              )}
              <div className="flex items-end justify-between mb-4">
                <div>
                  <p className={`font-bold text-[16px] ${plan.highlight ? 'text-white' : 'text-[#333]'}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-0.5 mt-0.5">
                    <span className={`font-bold text-[22px] ${plan.highlight ? 'text-white' : 'text-[#8A1410]'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-[12px] ${plan.highlight ? 'text-white/70' : 'text-[#999]'}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                {plan.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2">
                    <Check size={14} className={plan.highlight ? 'text-[#FFDBAD]' : 'text-[#8A1410]'} />
                    <span className={`text-[12px] ${plan.highlight ? 'text-white/90' : 'text-[#666]'}`}>{feat}</span>
                  </div>
                ))}
              </div>

              <Link href="/payment">
                <button
                  className={`w-full py-2.5 rounded-full font-bold text-[13px] ${
                    plan.highlight
                      ? 'bg-white text-[#8A1410]'
                      : plan.id === 'basic'
                      ? 'border border-gray-200 text-[#999]'
                      : 'bg-[#8A1410] text-white'
                  }`}
                >
                  {plan.id === 'basic' ? 'Paket Saat Ini' : 'Pilih Paket'}
                </button>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-[#999] mt-4 pb-2">
          Dapat dibatalkan kapan saja · Pembayaran aman
        </p>
      </div>
    </MobileContainer>
  );
}
