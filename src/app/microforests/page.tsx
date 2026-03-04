/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState } from 'react';
import MicroforestCard from '@/components/microforestCard';
import { getForests, type Forest } from '@/lib/firebase';

export default function MicroforestsPage() {
  const [forests, setForests] = useState<Forest[]>([]);
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
      <h1 className="my-8 text-4xl font-bold">Micro-Forests</h1>

      {isLoading ? (
        <div className="bg-[#DAE1DA] rounded-md w-full h-48 flex items-center justify-center text-gray-600">
          Loading forests…
        </div>
      ) : error ? (
        <div className="bg-[#DAE1DA] rounded-md w-full h-48 flex items-center justify-center text-red-600">
          {error}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {forests.map((forest) => (
            <MicroforestCard key={forest.id} forest={forest} />
          ))}
        </div>
      )}
    </div>
  );
}

