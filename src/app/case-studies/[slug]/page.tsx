import { CONTENT, CaseStudyClient } from "./CaseStudyClient";

export function generateStaticParams() {
  return Object.keys(CONTENT).map(slug => ({ slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CaseStudyClient slug={slug} />;
}
