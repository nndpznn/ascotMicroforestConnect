/**
 * Forest type and client-side fetch. Firestore is read via the API route
 * (GET /api/forests) using firebase-admin on the server to avoid the
 * broken Firebase client SDK bundle in Next.js.
 */

export type Forest = {
  id: string;
  address: string;
  blurb: string;
  coordinates: { lat: number; lng: number };
  city: string;
  estYear: number;
  forestName: string;
  sqft: number;
};

/** Firestore document ID (e.g. ascotHills, allSouls) — used in `/forest/[forestId]`. */
export function forestDetailPath(forestDocumentId: string): string {
  return `/forest/${forestDocumentId}`;
}

export async function getForests(): Promise<Forest[]> {
  const res = await fetch('/api/forests');
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error((body as { error?: string }).error ?? `Failed to load forests (${res.status})`);
  }
  return res.json();
}
