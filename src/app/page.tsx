import Link from 'next/link';
import MobileContainer from '@/components/layout/MobileContainer';

export default function StartPage() {
  return (
    <MobileContainer>
      <div className="flex-1 flex flex-col items-center justify-between px-8 py-16 bg-[#8A1410]">
        {/* Logo section */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg">
            <span className="text-[#8A1410] font-bold text-2xl">LEXSEE</span>
          </div>
          <div className="text-center">
            <h1 className="text-white text-3xl font-bold tracking-wide">LEXSEE</h1>
            <p className="text-[#FFDBAD] text-[13px] mt-2">Online Legal Tool</p>
          </div>
          <p className="text-white/70 text-[12px] text-center max-w-[240px] leading-relaxed">
            Temukan koleksi buku hukum dan dokumen legal terlengkap
          </p>
        </div>

        {/* Onboarding dots */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-2">
            <span className="w-6 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-white/40 rounded-full"></span>
            <span className="w-2 h-2 bg-white/40 rounded-full"></span>
          </div>

          <Link
            href="/home"
            className="w-full max-w-[280px] bg-white text-[#8A1410] font-bold text-[14px] py-3 rounded-full text-center block"
          >
            Mulai Sekarang
          </Link>

          <p className="text-white/60 text-[12px]">
            Sudah punya akun?{' '}
            <Link href="/login" className="text-[#FFDBAD] underline">
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </MobileContainer>
  );
}
