import Link from 'next/link';
import { forestDetailPath, type Forest } from '@/lib/firebase';

type MicroforestCardProps = {
  forest: Forest;
};

export default function MicroforestCard({ forest }: MicroforestCardProps) {
  return (
    <Link
      href={forestDetailPath(forest.id)}
      className="bg-[#DAE1DA] rounded-md p-4 flex flex-col hover:opacity-90 transition-opacity"
    >
      <div className="mb-3 h-32 w-full rounded-md bg-gray-300" />
      <h2 className="font-bold text-xl text-[#244206] mb-1 truncate">
        {forest.forestName}
      </h2>
      <p className="text-sm text-gray-700">{forest.city}</p>
      <p className="text-sm text-gray-600">
        Established {forest.estYear} · {forest.sqft.toLocaleString()} sq ft
      </p>
    </Link>
  );
}

