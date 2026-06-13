import { SYSTEMS } from "@/lib/config";
import { SystemDetailClient } from "./SystemDetailClient";

export function generateStaticParams() {
  return SYSTEMS.map(s => ({ slug: s.id }));
}

export default async function SystemDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SystemDetailClient slug={slug} />;
}
