'use client';

import type { Forest } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

type ForestDetailProps = {
  forest: Forest;
};

export default function ForestDetail({ forest }: ForestDetailProps) {
  const { lat, lng } = forest.coordinates;
  const router = useRouter();
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <div className="mx-[2vw]">
      <button
        type="button"
        onClick={() => router.back()}
        className="inline-block text-sm text-[#244206] underline underline-offset-2 mb-6 hover:opacity-80 cursor-pointer bg-transparent border-0 p-0 text-left font-[inherit]"
      >
        ← Back
      </button>

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-10 lg:items-start">
        <div className="min-w-0 w-full lg:w-3/5 bg-[#DAE1DA] p-3 rounded-md">
          <h1 className="font-bold text-4xl text-[#244206] mb-2">{forest.forestName}</h1>
          <p className="text-lg text-gray-700 mb-1">{forest.city}</p>
          <p className="text-sm text-gray-600 mb-6">
            Established {forest.estYear} · {forest.sqft.toLocaleString()} sq ft
          </p>

          <section className="mb-6">
            <h2 className="font-semibold text-lg text-[#244206] mb-2">About</h2>
            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{forest.blurb}</p>
          </section>

          <section className="mb-6">
            <h2 className="font-semibold text-lg text-[#244206] mb-2">Location</h2>
            <p className="text-gray-800 mb-2">{forest.address}</p>
            <p className="text-sm text-gray-600 mb-3">
              Coordinates {lat.toFixed(5)}, {lng.toFixed(5)}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#244206] underline underline-offset-2 hover:opacity-80"
            >
              Open in Google Maps
            </a>
          </section>
        </div>

        <div className="w-full shrink-0 lg:w-2/5">
          <div
            className="w-full rounded-md bg-gray-300 min-h-[min(50vh,22rem)] lg:min-h-[min(70vh,32rem)]"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}
