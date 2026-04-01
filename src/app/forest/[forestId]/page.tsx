import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ForestDetail from '@/components/forest-detail';
import { getForestById } from '@/lib/forests-server';

type PageProps = {
  params: Promise<{ forestId: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { forestId } = await params;
  try {
    const forest = await getForestById(forestId);
    if (!forest) {
      return { title: 'Forest not found — Ascot Micro-Forest Connect' };
    }
    return {
      title: `${forest.forestName} — Ascot Micro-Forest Connect`,
      description: forest.blurb.slice(0, 160) || `Details for ${forest.forestName} in ${forest.city}.`,
    };
  } catch {
    return { title: 'Forest — Ascot Micro-Forest Connect' };
  }
}

export default async function ForestPage({ params }: PageProps) {
  const { forestId } = await params;

  let forest;
  try {
    forest = await getForestById(forestId);
  } catch {
    notFound();
  }

  if (!forest) {
    notFound();
  }

  return (
    <div className="my-[5vh]">
      <ForestDetail forest={forest} />
    </div>
  );
}
