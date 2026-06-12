import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { SERVICES, SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Services",
  description: "AI Systems Automation Engineering, Technical Product Ownership, and Cognitive AI Systems Engineering.",
};

const AR = () => (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);

const DETAIL = {
  "ai-automation": {
    problem: "Most organisations accumulate fragile automation scripts and disconnected AI experiments. Without architectural coherence, each new model or workflow creates more complexity rather than capability.",
    approach: "I design automation as a system — not a collection of tools. Every agentic workflow, knowledge system and autonomous pipeline is architected with clear interfaces, observable behaviour and the ability to compound value as the codebase and organisation evolve.",
    outcomes: ["Reduction in QA and regression bottlenecks","Engineering velocity improvements through autonomous pipelines","Knowledge systems that surface the right context at the right moment","Automation infrastructure that scales with the team"],
    deliverables: ["System architecture document","Working agentic prototype or full deployment","Operational runbook and monitoring setup","Handoff documentation for internal teams"],
  },
  "product-ownership": {
    problem: "Product and engineering frequently operate at different resolutions. Product defines what; engineering defines how — but nobody owns the system that connects them. The result is misaligned roadmaps, architectural drift and delivery that never quite matches intent.",
    approach: "I own the bridge. Starting from business objectives, I translate intent into architecture, architecture into stories, and stories into production. I bring structured execution frameworks from enterprise environments into organisations that need to move at startup speed.",
    outcomes: ["Product strategy aligned to technical constraints and business objectives","Roadmaps that engineering teams can execute with confidence","Stakeholder alignment across business, product and technology","Delivery governance that reduces surprises and improves velocity"],
    deliverables: ["Product strategy document","Prioritised roadmap with architectural considerations","User stories and acceptance criteria","Release and governance playbook"],
  },
  "cognitive-ai": {
    problem: "Current AI systems excel at pattern-matching and retrieval, but remain shallow when it comes to reasoning, memory, contextual adaptation and genuine understanding. Most production systems hit a ceiling — capable tools, but not intelligent systems.",
    approach: "Research and development at the boundary of what AI systems can do. Drawing on cognitive science, information theory and systems architecture, I design frameworks that push beyond standard LLM patterns into territory where machines can reason with richer context and sustained memory.",
    outcomes: ["Research frameworks for cognitive AI architectures","Prototype systems demonstrating novel reasoning or memory capabilities","Collaborative research papers and technical documentation","Pathways from research to production-ready cognitive systems"],
    deliverables: ["Research brief and architecture proposal","Prototype or proof-of-concept system","Technical documentation and findings","Ongoing collaboration roadmap"],
  },
} as const;

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <section className="py-28 border-b border-[#E5E5E5]">
        <div className="section-container">
          <FadeIn>
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#888888] mb-5">Services</p>
            <h1 className="text-[3.75rem] font-semibold tracking-[-0.025em] text-[#111111] max-w-[16ch] leading-[1.08] mb-6">What Sentients builds.</h1>
            <p className="text-[1.25rem] text-[#555555] max-w-[48ch] leading-[1.7]">Three distinct disciplines. One unified practice — connecting business intent to intelligent systems, from strategy through execution.</p>
          </FadeIn>
        </div>
      </section>

      {SERVICES.map((s, idx) => {
        const d = DETAIL[s.id as keyof typeof DETAIL];
        return (
          <section key={s.id} id={s.id} className={`py-28 border-b border-[#E5E5E5] ${idx % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}`}>
            <div className="section-container">
              <FadeIn className="mb-14">
                <span className={`text-[0.75rem] font-medium uppercase tracking-widest block mb-4 ${s.accent === "purple" ? "text-[#7C3AED]" : "text-[#2563EB]"}`}>{s.tag}</span>
                <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] text-[#111111] leading-[1.15] mb-4">{s.title}</h2>
                <p className="text-[1.25rem] text-[#555555] max-w-[48ch] leading-[1.7]">{s.headline}</p>
              </FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="flex flex-col gap-10">
                  <FadeIn><h3 className="text-[0.75rem] font-medium uppercase tracking-widest text-[#888888] mb-3">The Problem</h3><p className="text-[1rem] text-[#555555] leading-[1.75]">{d.problem}</p></FadeIn>
                  <FadeIn delay={0.1}><h3 className="text-[0.75rem] font-medium uppercase tracking-widest text-[#888888] mb-3">The Approach</h3><p className="text-[1rem] text-[#555555] leading-[1.75]">{d.approach}</p></FadeIn>
                </div>
                <div className="flex flex-col gap-10">
                  <FadeIn delay={0.15}>
                    <h3 className="text-[0.75rem] font-medium uppercase tracking-widest text-[#888888] mb-5">Outcomes</h3>
                    <ul className="flex flex-col gap-3">{d.outcomes.map(o => (<li key={o} className="flex items-start gap-3 text-[0.9375rem] text-[#555555]"><span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.accent === "purple" ? "bg-[#7C3AED]" : "bg-[#2563EB]"}`} />{o}</li>))}</ul>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <h3 className="text-[0.75rem] font-medium uppercase tracking-widest text-[#888888] mb-5">Deliverables</h3>
                    <ul className="flex flex-col gap-3">{d.deliverables.map(d2 => (<li key={d2} className="flex items-start gap-3 text-[0.9375rem] text-[#555555]"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CCCCCC] flex-shrink-0" />{d2}</li>))}</ul>
                  </FadeIn>
                </div>
              </div>
              <FadeIn delay={0.25} className="mt-12 pt-10 border-t border-[#E5E5E5]">
                <div className="flex flex-wrap gap-2">
                  {s.capabilities.map(c => (<span key={c} className={`text-[0.75rem] font-medium px-3 py-1.5 rounded-[999px] border ${s.accent === "purple" ? "text-[#7C3AED] border-[#7C3AED]/20 bg-[#7C3AED]/5" : "text-[#2563EB] border-[#2563EB]/20 bg-[#2563EB]/5"}`}>{c}</span>))}
                </div>
              </FadeIn>
            </div>
          </section>
        );
      })}

      <section className="py-28 bg-white">
        <div className="section-container text-center">
          <FadeIn>
            <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] text-[#111111] mb-6">Not sure which service fits?</h2>
            <p className="text-[1.125rem] text-[#555555] mb-10 max-w-[44ch] mx-auto leading-[1.75]">Most engagements draw on all three pillars. Start with a 30-minute discovery call.</p>
            <Button href={SITE.calendly} external size="lg" icon={<AR />}>Book a Discovery Call</Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
