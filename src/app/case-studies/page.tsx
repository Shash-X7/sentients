import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Deep-dive case studies on intelligent systems built across AI automation, product ownership and cognitive engineering.",
};

const CS = [
  { slug:"autonomous-qa-intelligence",   tag:"AI Automation",            title:"Autonomous QA Intelligence Platform",    summary:"How a self-improving QA system eliminated regression bottlenecks and compounded engineering velocity at HR Monster.",         metric:"Autonomous regression detection", accent:"blue" },
  { slug:"enterprise-product-ownership", tag:"Technical Product Ownership", title:"Enterprise Product Ownership at Scale", summary:"Taking ownership of four enterprise products at Carl Zeiss and building a model for cross-domain product governance.",           metric:"4 enterprise domains unified",    accent:"blue" },
  { slug:"ai-native-hr-platform",        tag:"AI Systems",               title:"AI-Native HR Platform Architecture",      summary:"Designing the technical architecture for an AI-native HR platform — from agentic automation through product governance.",         metric:"AI-first operational model",       accent:"blue" },
  { slug:"marketplace-architecture",     tag:"Systems Architecture",     title:"Marketplace Architecture at RedBus",      summary:"Building the payment and marketplace infrastructure that powered multi-geography expansion across Southeast Asia.",              metric:"3 markets, 1 abstraction layer",   accent:"blue" },
  { slug:"cognitive-systems-research",   tag:"Cognitive AI",             title:"Cognitive Systems Research",              summary:"Numocore and MyItihas — building research platforms for the next layer of machine cognition.",                                   metric:"Beyond retrieval-augmented AI",   accent:"purple" },
] as const;

const AR = () => (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);

export default function CaseStudiesPage() {
  return (
    <div className="pt-16">
      <section className="py-28 border-b border-[#E5E5E5]">
        <div className="section-container">
          <FadeIn>
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#888888] mb-5">Case Studies</p>
            <h1 className="text-[3.75rem] font-semibold tracking-[-0.025em] text-[#111111] max-w-[20ch] leading-[1.08] mb-6">The work, in depth.</h1>
            <p className="text-[1.25rem] text-[#555555] max-w-[50ch] leading-[1.7]">Each case study follows a system from problem to architecture to outcome. No metrics fabricated. No outcomes exaggerated.</p>
          </FadeIn>
        </div>
      </section>
      <section className="py-28 bg-[#FAFAFA]">
        <div className="section-container">
          <div className="flex flex-col gap-px bg-[#E5E5E5] rounded-[1rem] overflow-hidden shadow-sm">
            {CS.map((cs, i) => (
              <FadeIn key={cs.slug} delay={i * 0.07}>
                <Link href={`/case-studies/${cs.slug}`} className="group flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white hover:bg-[#FAFAFA] px-8 py-8 md:py-10 transition-colors duration-200">
                  <div className="flex-1">
                    <span className={`text-[0.75rem] font-medium uppercase tracking-widest block mb-3 ${cs.accent === "purple" ? "text-[#7C3AED]" : "text-[#2563EB]"}`}>{cs.tag}</span>
                    <h2 className="text-[1.875rem] font-semibold text-[#111111] mb-3 leading-snug">{cs.title}</h2>
                    <p className="text-[0.9375rem] text-[#555555] max-w-[54ch] leading-[1.7]">{cs.summary}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-4 flex-shrink-0">
                    <span className="text-[0.75rem] font-medium text-[#888888]">{cs.metric}</span>
                    <span className="inline-flex items-center gap-2 text-[0.8125rem] font-medium text-[#888888] group-hover:text-[#111111] transition-colors duration-200">Read case study <AR /></span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
