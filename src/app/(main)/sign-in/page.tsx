import MobileContainer from '@/components/layout/MobileContainer';
import PageHeader from '@/components/layout/PageHeader';
import { CheckCircle } from 'lucide-react';

const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
const rewards = [
  { day: 1, points: 10, claimed: true },
  { day: 2, points: 10, claimed: true },
  { day: 3, points: 15, claimed: true },
  { day: 4, points: 15, claimed: false, today: true },
  { day: 5, points: 20, claimed: false },
  { day: 6, points: 20, claimed: false },
  { day: 7, points: 50, claimed: false },
];

export default function SignInPage() {
  return (
    <MobileContainer>
      <PageHeader title="Check-in Harian" />
      <div className="flex-1 overflow-y-auto pb-20 px-4 pt-4">
        {/* Streak */}
        <div className="bg-[#8A1410] rounded-xl p-4 text-white text-center mb-4">
          <p className="text-[#FFDBAD] text-[12px]">Streak saat ini</p>
          <p className="text-4xl font-bold my-1">3 🔥</p>
          <p className="text-white/70 text-[12px]">Hari berturut-turut</p>
        </div>

        {/* Calendar grid */}
        <div className="bg-white rounded-xl p-4 mb-4">
          <h3 className="font-bold text-[14px] text-[#333] mb-3">Hadiah Mingguan</h3>
          <div className="grid grid-cols-7 gap-1">
            {rewards.map((r) => (
              <div
                key={r.day}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg ${
                  r.claimed ? 'bg-[#8A1410]' : r.today ? 'bg-[#FFDBAD] border-2 border-[#8A1410]' : 'bg-[#F2F2F2]'
                }`}
              >
                <span className={`text-[10px] font-medium ${r.claimed ? 'text-white' : 'text-[#666]'}`}>
                  {days[r.day - 1]}
                </span>
                {r.claimed ? (
                  <CheckCircle size={16} className="text-white" />
                ) : (
                  <span className="text-[12px]">{r.day === 7 ? '🎁' : '⭐'}</span>
                )}
                <span className={`text-[10px] font-bold ${r.claimed ? 'text-white' : r.today ? 'text-[#8A1410]' : 'text-[#999]'}`}>
                  +{r.points}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Today task */}
        {[
          { label: 'Baca 15 menit', points: 20, icon: '📖', done: false },
          { label: 'Selesaikan 1 chapter', points: 30, icon: '✅', done: false },
          { label: 'Tambah catatan', points: 10, icon: '📝', done: true },
        ].map((task) => (
          <div key={task.label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 mb-3">
            <span className="text-2xl">{task.icon}</span>
            <div className="flex-1">
              <p className="text-[13px] font-medium text-[#333]">{task.label}</p>
              <p className="text-[11px] text-[#999]">+{task.points} poin</p>
            </div>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${task.done ? 'bg-[#8A1410] border-[#8A1410]' : 'border-gray-300'}`}>
              {task.done && <CheckCircle size={14} className="text-white" />}
            </div>
          </div>
        ))}

        <button className="w-full bg-[#8A1410] text-white font-bold py-3 rounded-full mt-2">
          Check-in Hari Ini 🎯
        </button>
      </div>
    </MobileContainer>
  );
}
