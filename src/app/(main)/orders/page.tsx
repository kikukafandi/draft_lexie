'use client';

import { useState } from 'react';
import Link from 'next/link';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import { ChevronRight } from 'lucide-react';

const tabs = ['Semua', 'Pending', 'Selesai', 'Dibatalkan'];
const orders = [
  { id: 'ORD001', title: 'Hukum Perdata Indonesia', date: '12 Jan 2024', price: 'Rp 85.000', status: 'Selesai', statusColor: 'text-green-600 bg-green-50' },
  { id: 'ORD002', title: 'UUD 1945 & Amandemen', date: '10 Jan 2024', price: 'Rp 45.000', status: 'Pending', statusColor: 'text-orange-600 bg-orange-50' },
  { id: 'ORD003', title: 'Hukum Pidana Umum', date: '5 Jan 2024', price: 'Rp 72.000', status: 'Dibatalkan', statusColor: 'text-red-600 bg-red-50' },
];

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState('Semua');

  const filtered = activeTab === 'Semua' ? orders : orders.filter((o) => o.status === activeTab);

  return (
    <MobileContainer>
      <PageHeader title="Pesanan Saya" />
      <div className="flex gap-0 px-4 py-2 border-b border-gray-100 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 text-[12px] whitespace-nowrap rounded-full mr-2 ${
              activeTab === tab ? 'bg-[#8A1410] text-white font-medium' : 'text-[#999]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-3">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 gap-2">
            <span className="text-4xl">📦</span>
            <p className="text-[#999] text-[13px]">Tidak ada pesanan</p>
          </div>
        ) : (
          filtered.map((order) => (
            <Link key={order.id} href={`/orders/${order.id}`}>
              <div className="bg-white rounded-xl p-4 mb-3 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-[11px] text-[#999]">#{order.id}</p>
                    <p className="text-[13px] font-semibold text-[#333] mt-0.5">{order.title}</p>
                  </div>
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${order.statusColor}`}>
                    {order.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[11px] text-[#999]">{order.date}</p>
                  <div className="flex items-center gap-1">
                    <p className="text-[13px] font-bold text-[#8A1410]">{order.price}</p>
                    <ChevronRight size={14} className="text-[#999]" />
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </MobileContainer>
  );
}
