import { NextResponse } from 'next/server';
import { getApps, initializeApp, cert, type ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

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

function getAdminApp() {
  if (getApps().length > 0) {
    return getApps()[0];
  }
  const key = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  if (!key || !projectId) {
    throw new Error(
      'Missing FIREBASE_SERVICE_ACCOUNT_KEY or NEXT_PUBLIC_FIREBASE_PROJECT_ID. Add a service account JSON string to .env for server-side Firestore access.'
    );
  }
  const credential = cert(JSON.parse(key) as ServiceAccount);
  return initializeApp({ credential, projectId });
}

function docToForest(id: string, data: Record<string, unknown>): Forest {
  const coords = (data.coordinates as Record<string, number>) ?? {};
  return {
    id,
    address: (data.address as string) ?? '',
    blurb: (data.blurb as string) ?? '',
    coordinates: { lat: Number(coords.lat), lng: Number(coords.lng) },
    city: (data.city as string) ?? '',
    estYear: Number(data.estYear) || 0,
    forestName: (data.forestName as string) ?? '',
    sqft: Number(data.sqft) || 0,
  };
}

export async function GET() {
  try {
    const app = getAdminApp();
    const db = getFirestore(app);
    const snapshot = await db.collection('forests').get();
    const forests: Forest[] = snapshot.docs.map((doc) =>
      docToForest(doc.id, doc.data() as Record<string, unknown>)
    );
    return NextResponse.json(forests);
  } catch (err) {
    console.error('Failed to load forests:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to load forests' },
      { status: 500 }
    );
  }
}
