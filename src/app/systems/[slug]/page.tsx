import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { SYSTEMS, SITE } from "@/lib/config";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return SYSTEMS.map(s => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sys = SYSTEMS.find(s => s.id === slug);
  if (!sys) return {};
  return { title: sys.title, description: sys.description };
}

const CONTENT: Record<string, {
  problem: string;
  architecture: string[];
  outcome: string;
  learnings: string[];
}> = {
  "payments-infrastructure": {
    problem: "RedBus needed to expand payment capabilities across three Southeast Asian markets — Vietnam, Cambodia and Indonesia — each with distinct regulatory frameworks, preferred payment providers and integration patterns. No unified payment infrastructure existed.",
    architecture: ["Provider-agnostic payment abstraction layer supporting pluggable integrations","Geo-aware routing logic with fallback chains per market","Unified payment dashboard for operational visibility across geographies","Integration with PhonePe, Razorpay, Mobikwik, JusPay and regional providers","Compliance and reconciliation tooling built in coordination with legal and finance teams"],
    outcome: "Payment infrastructure operational across three new geographies within timeline. Unified abstraction layer reduced future integration effort by providing a single interface for new provider onboarding.",
    learnings: ["Payment systems are as much a legal and compliance product as a technical one","Abstraction layers compound in value: the third integration costs a fraction of the first","Operational tooling (dashboards, reconciliation) is as critical as the core payment flow"],
  },
  "enterprise-scm": {
    problem: "Carl Zeiss operated with fragmented enterprise software across Order Management, Finance, Post Sales and Lens Calculation — each domain separately owned, creating misalignment between commercial and operational systems.",
    architecture: ["Unified product ownership model across four enterprise domains","Azure-native service architecture with Cosmos DB and App Insights","BPMN-based process modelling using Signavio for cross-domain workflow visibility","C# / .NET microservices with structured release management","End-to-end testing and production support frameworks"],
    outcome: "Consolidated ownership of four enterprise products. Improved alignment between commercial, operational and technical teams. Process modelling reduced ambiguity significantly.",
    learnings: ["Enterprise systems are fundamentally about organisational alignment — technology is secondary to the stakeholder model","BPMN as a shared language between business and engineering removes translation loss","Owning multiple related products reveals system-level patterns invisible at the product level"],
  },
  "autonomous-qa": {
    problem: "QA at HR Monster was a bottleneck — manual regression cycles slowed engineering velocity as the codebase grew. Traditional test automation required constant maintenance and couldn't adapt to rapid product iteration.",
    architecture: ["Repository monitoring agent detecting meaningful diffs and change surfaces","Regression detection engine mapping code changes to historical bug patterns","Automated bug analysis generating prioritised, actionable engineering outputs","Continuous improvement loop: system learns from resolved issues to improve future detection","Integration with existing CI/CD pipeline for zero-friction adoption"],
    outcome: "QA bottlenecks reduced. Engineering teams receive structured, actionable analysis rather than raw test failures. System improves as the codebase evolves — compounding value over time.",
    learnings: ["Autonomous QA is a knowledge system as much as a testing system — the intelligence is in the pattern library","Output quality matters as much as detection rate: engineers need actionable analysis, not noise","Designing for continuous improvement from day one changes the architecture fundamentally"],
  },
  "massive-dynamics": {
    problem: "Building an AI-native company from the ground up requires a technical foundation that can evolve as fast as the space itself — without accumulating architectural debt that constrains the product roadmap.",
    architecture: ["AI-native product and system architecture","Scalable engineering foundations designed for intelligent workloads","Research-to-production pipeline connecting exploration with delivery","Co-founder technical leadership across product, engineering and strategy"],
    outcome: "Massive Dynamics is an active, growing AI company. Detailed case study in progress — full brief coming soon.",
    learnings: ["The technical co-founder role at an AI company is fundamentally different from a traditional CTO role","Building for intelligence requires architectural decisions that most engineering frameworks don't account for","Research and product must be continuous, not sequential"],
  },
  "numocore": {
    problem: "Current AI chatbots operate through retrieval and pattern-matching. They have no model of awareness, no persistent self-reference, no capacity to reason from a first-person perspective. Numocore explores whether a consciousness-inspired architecture changes that.",
    architecture: ["Consciousness-inspired reasoning primitives as the base layer","Awareness state representation separate from knowledge retrieval","Chatbot interface grounded in self-referential reasoning rather than token prediction","Pipeline designed for introspective response generation"],
    outcome: "Research platform and working prototype. Full project brief and architecture documentation coming soon.",
    learnings: ["Consciousness as a design principle — not as metaphysics, but as architectural constraint","Self-reference and awareness are computable properties when treated as system primitives","The hardest part is not building the model — it is defining what awareness means at an architectural level"],
  },
  "myitihas": {
    problem: "Knowledge systems today optimise for search and retrieval but fail at contextual understanding — the ability to hold structured, layered knowledge and reason about relationships across it.",
    architecture: ["Hierarchical knowledge graph with temporal and contextual edge types","Structured ingestion pipeline for heterogeneous knowledge sources","Context-aware retrieval engine weighting relational depth alongside relevance","Human-in-the-loop curation layer for knowledge quality"],
    outcome: "Working knowledge platform with demonstrably richer contextual retrieval than vector-search baselines. Ongoing development as part of Sentients research track.",
    learnings: ["Knowledge representation is a design discipline, not just a data problem","The relationship between pieces of knowledge is often more valuable than the pieces themselves","Human-AI collaboration in knowledge curation produces qualitatively better systems than fully automated approaches"],
  },
};

export default async function SystemDetailPage({ params }: Props) {
  const { slug } = await params;
  const sys = SYSTEMS.find(s => s.id === slug);
  if (!sys) notFound();
  const content = CONTENT[sys.id];
  if (!content) notFound();

  return (
    <div className="pt-16">
      <section className="py-28 border-b border-[#E5E5E5] bg-white">
        <div className="section-container">
          <FadeIn>
            <Button href="/systems" variant="ghost" size="sm" className="mb-8 -ml-2">← All systems</Button>
            <div className="flex flex-wrap gap-2 mb-6">
              {sys.tags.map(t => (<span key={t} className="text-[0.75rem] font-medium px-3 py-1 rounded-[999px] bg-[#FAFAFA] border border-[#E5E5E5] text-[#888888]">{t}</span>))}
            </div>
            <h1 className="text-[3.75rem] font-semibold tracking-[-0.025em] text-[#111111] leading-[1.08] mb-4">{sys.title}</h1>
            <p className="text-[1.25rem] text-[#555555] max-w-[52ch] leading-[1.7]">{sys.subtitle}</p>
          </FadeIn>
        </div>
      </section>
      <section className="py-28 bg-[#FAFAFA]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 flex flex-col gap-14">
              <FadeIn>
                <h2 className="text-[0.75rem] font-medium uppercase tracking-widest text-[#888888] mb-4">The Problem</h2>
                <p className="text-[1.125rem] text-[#555555] leading-[1.75]">{content.problem}</p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-[0.75rem] font-medium uppercase tracking-widest text-[#888888] mb-5">Architecture</h2>
                <ul className="flex flex-col gap-4">
                  {content.architecture.map((a, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-1.5 text-[0.75rem] font-medium text-[#888888] tabular-nums flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <p className="text-[1rem] text-[#555555] leading-[1.7]">{a}</p>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={0.15}>
                <h2 className="text-[0.75rem] font-medium uppercase tracking-widest text-[#888888] mb-4">Outcome</h2>
                <p className="text-[1.125rem] text-[#555555] leading-[1.75]">{content.outcome}</p>
              </FadeIn>
            </div>
            <div className="lg:col-span-1">
              <FadeIn delay={0.2} className="sticky top-24 flex flex-col gap-6">
                <div className="bg-white border border-[#E5E5E5] rounded-[1rem] p-8 shadow-sm">
                  <h3 className="text-[0.75rem] font-medium uppercase tracking-widest text-[#888888] mb-6">Learnings</h3>
                  <ul className="flex flex-col gap-5">
                    {content.learnings.map((l, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0" />
                        <p className="text-[0.9375rem] text-[#555555] leading-[1.7]">{l}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border border-[#E5E5E5] rounded-[1rem] p-8 shadow-sm">
                  <p className="text-[0.9375rem] text-[#555555] mb-5 leading-[1.7]">Want to build something like this?</p>
                  <Button href={SITE.calendly} external size="md" className="w-full justify-center">Book a Call</Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
