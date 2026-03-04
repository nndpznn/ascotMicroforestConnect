'use client';

import { useState, useEffect } from 'react';
import Map from '@/components/map';
import { getForests, type Forest } from '@/lib/firebase';

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
    <div className="mx-[5vw]">
      <div id="content" className="flex my-[5vh]">

        <div id="mapcontainer" className="w-5/7 mx-3 h-[70vh]">
          {isLoading ? (
            <div className="bg-[#DAE1DA] rounded-md w-full h-full flex items-center justify-center text-gray-600">
              Loading map…
            </div>
          ) : error ? (
            <div className="bg-[#DAE1DA] rounded-md w-full h-full flex items-center justify-center text-red-600">
              {error}
            </div>
          ) : (
            <Map forests={forests} onForestSelect={setSelectedForest} />
          )}
        </div>

        <div id="forestdetails" className="w-2/7 mx-3">
          <div className="bg-[#DAE1DA] rounded-md w-full h-full min-h-[70vh] p-4">
            {selectedForest ? (
              <div className="flex flex-col">
                <h2 className="font-bold text-3xl mb-1 text-[#244206]">
                  {selectedForest.forestName}
                </h2>
                <p className="text-sm text-gray-700">{selectedForest.city}</p>
                <p className="text-sm text-gray-600">
                  Established {selectedForest.estYear} · {selectedForest.sqft.toLocaleString()} sq ft
                </p>
                <p className="text-sm text-gray-700 my-2">{selectedForest.blurb}</p>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">Select a forest on the map to view details.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
