'use client';

// removed unused useState
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import { Plus, MapPin, Edit2, Trash2 } from 'lucide-react';

const addresses = [
  {
    id: '1',
    label: 'Rumah',
    name: 'Pengguna LEXSEE',
    phone: '08123456789',
    address: 'Jl. Sudirman No. 123, Kebayoran Baru',
    city: 'Jakarta Selatan, DKI Jakarta 12190',
    isDefault: true,
  },
  {
    id: '2',
    label: 'Kantor',
    name: 'Pengguna LEXSEE',
    phone: '08123456789',
    address: 'Gedung Graha Niaga Lt. 10',
    city: 'Jakarta Pusat, DKI Jakarta 10350',
    isDefault: false,
  },
];

export default function AddressPage() {
  return (
    <MobileContainer>
      <PageHeader
        title="Alamat Saya"
        rightAction={
          <button className="text-[#8A1410]">
            <Plus size={22} />
          </button>
        }
      />
      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-3">
        <div className="flex flex-col gap-3">
          {addresses.map((addr) => (
            <div key={addr.id} className="bg-white rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#8A1410]" />
                  <span className="text-[12px] font-bold text-[#8A1410] uppercase">{addr.label}</span>
                  {addr.isDefault && (
                    <span className="bg-[#FFDBAD] text-[#8A1410] text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      Utama
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button><Edit2 size={14} className="text-[#999]" /></button>
                  <button><Trash2 size={14} className="text-red-400" /></button>
                </div>
              </div>
              <p className="text-[13px] font-semibold text-[#333]">{addr.name}</p>
              <p className="text-[12px] text-[#666] mt-0.5">{addr.phone}</p>
              <p className="text-[12px] text-[#666] mt-0.5">{addr.address}</p>
              <p className="text-[12px] text-[#666]">{addr.city}</p>
              {!addr.isDefault && (
                <button className="mt-2 text-[12px] text-[#8A1410] font-medium">
                  Jadikan Alamat Utama
                </button>
              )}
            </div>
          ))}

          <button className="flex items-center justify-center gap-2 w-full border-2 border-dashed border-gray-200 py-4 rounded-xl text-[#999]">
            <Plus size={18} />
            <span className="text-[13px]">Tambah Alamat Baru</span>
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}
