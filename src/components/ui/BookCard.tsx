import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

interface BookCardProps {
  id?: string;
  title: string;
  price: string;
  rating?: number;
  coverImage?: string;
  author?: string;
}

export default function BookCard({ id, title, price, rating = 4.5, coverImage, author }: BookCardProps) {
  const card = (
    <div className="flex flex-col gap-1.5 w-[110px] shrink-0">
      <div className="w-full h-[140px] rounded-lg overflow-hidden bg-[#FFDBAD] flex items-center justify-center">
        {coverImage ? (
          <Image src={coverImage} alt={title} width={110} height={140} className="object-cover w-full h-full" />
        ) : (
          <span className="text-3xl">📖</span>
        )}
      </div>
      <p className="text-[12px] font-semibold text-[#333] leading-tight line-clamp-2">{title}</p>
      {author && <p className="text-[11px] text-[#999]">{author}</p>}
      <div className="flex items-center gap-1">
        <Star size={11} className="text-yellow-400 fill-yellow-400" />
        <span className="text-[11px] text-[#999]">{rating}</span>
      </div>
      <p className="text-[12px] font-bold text-[#8A1410]">{price}</p>
    </div>
  );

  if (id) return <Link href={`/content?id=${id}`}>{card}</Link>;
  return card;
}
