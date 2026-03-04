'use client';

import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { Forest } from '@/lib/firebase';

const DEFAULT_CENTER: [number, number] = [-118.2, 34.05];
const DEFAULT_ZOOM = 8;

type MapProps = {
  forests: Forest[];
  onForestSelect?: (forest: Forest | null) => void;
};

export default function Map({ forests, onForestSelect }: MapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<maplibregl.Marker[]>([]);
  const onForestSelectRef = useRef(onForestSelect);
  onForestSelectRef.current = onForestSelect;

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const center: [number, number] =
      forests.length > 0
        ? [forests[0].coordinates.lng, forests[0].coordinates.lat]
        : DEFAULT_CENTER;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: 'https://tiles.basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
      center,
      zoom: DEFAULT_ZOOM,
    });

    mapRef.current = map;

    map.on('load', () => {
      forests.forEach((forest) => {
        const { lng, lat } = forest.coordinates;
        const el = document.createElement('div');
        el.className = 'microforest-marker';
        el.style.cursor = 'pointer';
        const img = document.createElement('img');
        img.src = '/logos/singletree.svg';
        img.alt = forest.forestName;
        img.style.width = '40px';
        img.style.height = '56px';
        img.style.pointerEvents = 'none';
        el.appendChild(img);

        const marker = new maplibregl.Marker({ element: el })
          .setLngLat([lng, lat])
          .addTo(map);

        markersRef.current.push(marker);

        const popup = new maplibregl.Popup({ offset: 25, closeButton: true }).setText(
          forest.forestName
        );

        marker.setPopup(popup);

        el.addEventListener('click', () => {
          map.flyTo({ center: [lng, lat], zoom: 16 });
          marker.togglePopup();
          onForestSelectRef.current?.(forest);
        });
      });
    });

    return () => {
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];
      map.remove();
      mapRef.current = null;
    };
  }, [forests]);

  return <div ref={mapContainerRef} className="w-full h-full rounded-md overflow-hidden" />;
}
