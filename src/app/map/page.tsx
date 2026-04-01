'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Map from '@/components/map';
import { forestDetailPath, getForests, type Forest } from '@/lib/firebase';

export default function MapPage() {
  const [forests, setForests] = useState<Forest[]>([]);
  const [selectedForest, setSelectedForest] = useState<Forest | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadForests = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getForests();
        setForests(data);
      } catch (err) {
        console.error('Failed to load forests:', err);
        setError('Failed to load forests. Check console for details.');
        setForests([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadForests();
  }, []);

  return (
    <div className="mx-[5vw] flex min-h-0 flex-1 flex-col py-7">
      <div
        id="content"
        className="flex min-h-0 flex-1 gap-2"
      >
        <div
          id="mapcontainer"
          className="flex min-h-0 min-w-0 flex-5 flex-col"
        >
          {isLoading ? (
            <div className="flex h-full min-h-0 flex-1 items-center justify-center rounded-md bg-[#DAE1DA] text-gray-600">
              Loading map…
            </div>
          ) : error ? (
            <div className="flex h-full min-h-0 flex-1 items-center justify-center rounded-md bg-[#DAE1DA] text-red-600">
              {error}
            </div>
          ) : (
            <div className="h-full min-h-0 flex-1">
              <Map forests={forests} onForestSelect={setSelectedForest} />
            </div>
          )}
        </div>

        <div id="forestdetails" className="flex min-h-0 min-w-0 flex-2 flex-col">
          <div className="flex h-full min-h-0 flex-1 flex-col rounded-md bg-[#DAE1DA] p-4">
            {selectedForest ? (
              <>
                <div className="flex-1 min-h-0 overflow-y-auto">
                  <h2 className="font-bold text-3xl mb-1 text-[#244206]">
                    {selectedForest.forestName}
                  </h2>
                  <p className="text-sm text-gray-700">{selectedForest.city}</p>
                  <p className="text-sm text-gray-600">
                    Established {selectedForest.estYear} · {selectedForest.sqft.toLocaleString()} sq ft
                  </p>
                  <p className="text-sm text-gray-700 my-2">{selectedForest.blurb}</p>
                </div>
                <Link
                  href={forestDetailPath(selectedForest.id)}
                  className="mt-4 shrink-0 w-full rounded-md bg-[#244206] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[#1a3305] transition-colors"
                >
                  View full details
                </Link>
              </>
            ) : (
              <p className="text-gray-500 text-sm">Select a forest on the map to view details.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
