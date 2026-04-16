'use client';

import { useState } from 'react';
import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import { Upload, FileText, AlertCircle, CheckCircle } from 'lucide-react';

export default function TurnitinPage() {
  const [file, setFile] = useState<string | null>(null);
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const handleCheck = () => {
    if (!file) return;
    setChecking(true);
    setTimeout(() => {
      setChecking(false);
      setResult(Math.floor(Math.random() * 30));
    }, 2000);
  };

  return (
    <MobileContainer>
      <PageHeader title="Cek Plagiarisme" />
      <div className="flex-1 overflow-y-auto pb-24 px-4 pt-4">
        {/* Info */}
        <div className="bg-[#FFDBAD] rounded-xl p-4 mb-4 flex gap-3">
          <AlertCircle size={18} className="text-[#8A1410] shrink-0 mt-0.5" />
          <p className="text-[12px] text-[#666] leading-relaxed">
            Unggah dokumen Anda untuk diperiksa tingkat kemiripannya. Layanan ini didukung teknologi deteksi plagiarisme terdepan.
          </p>
        </div>

        {/* Upload area */}
        <div
          onClick={() => setFile('dokumen_hukum.pdf')}
          className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center gap-3 cursor-pointer hover:border-[#8A1410] transition-colors mb-4"
        >
          {file ? (
            <>
              <FileText size={36} className="text-[#8A1410]" />
              <p className="text-[13px] font-semibold text-[#333]">{file}</p>
              <p className="text-[11px] text-[#999]">Ketuk untuk mengubah file</p>
            </>
          ) : (
            <>
              <Upload size={36} className="text-[#999]" />
              <p className="text-[13px] font-semibold text-[#333]">Unggah Dokumen</p>
              <p className="text-[11px] text-[#999] text-center">PDF, DOCX, TXT · Maks. 10MB</p>
            </>
          )}
        </div>

        {/* Supported formats */}
        <div className="flex gap-2 flex-wrap mb-4">
          {['PDF', 'DOCX', 'DOC', 'TXT', 'ODT'].map((fmt) => (
            <span key={fmt} className="bg-[#F2F2F2] text-[#666] text-[11px] px-2.5 py-1 rounded-full">{fmt}</span>
          ))}
        </div>

        {/* Result */}
        {result !== null && (
          <div className={`rounded-xl p-4 mb-4 ${result < 20 ? 'bg-green-50 border border-green-200' : result < 40 ? 'bg-yellow-50 border border-yellow-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="flex items-center gap-3 mb-3">
              {result < 20 ? (
                <CheckCircle size={24} className="text-green-600" />
              ) : (
                <AlertCircle size={24} className={result < 40 ? 'text-yellow-600' : 'text-red-600'} />
              )}
              <div>
                <p className={`font-bold text-[16px] ${result < 20 ? 'text-green-700' : result < 40 ? 'text-yellow-700' : 'text-red-700'}`}>
                  {result}% Kemiripan
                </p>
                <p className={`text-[11px] ${result < 20 ? 'text-green-600' : result < 40 ? 'text-yellow-600' : 'text-red-600'}`}>
                  {result < 20 ? 'Orisinalitas tinggi' : result < 40 ? 'Perlu diperiksa' : 'Kemiripan terlalu tinggi'}
                </p>
              </div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className={`h-full rounded-full ${result < 20 ? 'bg-green-500' : result < 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                style={{ width: `${result}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3">
        <Button
          fullWidth
          className="py-3"
          disabled={!file || checking}
          onClick={handleCheck}
        >
          {checking ? 'Memeriksa...' : 'Periksa Plagiarisme'}
        </Button>
      </div>
    </MobileContainer>
  );
}
