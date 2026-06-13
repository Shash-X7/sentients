"use client";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { useTheme } from "@/components/ThemeProvider";

const CS = [
  { slug:"autonomous-qa-intelligence",   tag:"AI Automation",              title:"Autonomous QA Intelligence Platform",  summary:"How a self-improving QA system eliminated regression bottlenecks and compounded engineering velocity at HR Monster.",       metric:"Autonomous regression detection", accent:"blue"   },
  { slug:"enterprise-product-ownership", tag:"Technical Product Ownership", title:"Enterprise Product Ownership at Scale",summary:"Taking ownership of four enterprise products at Carl Zeiss and building a model for cross-domain product governance.",         metric:"4 enterprise domains unified",    accent:"blue"   },
  { slug:"ai-native-hr-platform",        tag:"AI Systems",                  title:"AI-Native HR Platform Architecture",  summary:"Designing the technical architecture for an AI-native HR platform — from agentic automation through product governance.",      metric:"AI-first operational model",      accent:"blue"   },
  { slug:"marketplace-architecture",     tag:"Systems Architecture",        title:"Marketplace Architecture at RedBus",  summary:"Building the payment and marketplace infrastructure that powered multi-geography expansion across Southeast Asia.",            metric:"3 markets, 1 abstraction layer",  accent:"blue"   },
  { slug:"cognitive-systems-research",   tag:"Cognitive AI",                title:"Cognitive Systems Research",          summary:"Numocore and MyItihas — building research platforms for the next layer of machine cognition.",                               metric:"Beyond retrieval-augmented AI",   accent:"purple" },
] as const;

export default function CaseStudiesPage() {
  const { theme } = useTheme();
  const s   = (v: string) => ({ color: v });
  const bg  = (v: string) => ({ backgroundColor: v });
  const brd = (v: string) => ({ borderColor: v });

  return (
    <div className="pt-16" style={{ ...bg(theme.bgPrimary), transition: "background-color 1.2s ease" }}>
      <section className="relative py-28 border-b overflow-hidden" style={{ ...bg(theme.bgPrimary), ...brd(theme.border) }}>
        {/* shubhamdhage AI humanoid — right-aligned, very subtle */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:`url("/assets/pexels-shubhamdhage-37911158.jpg")`, backgroundSize:"contain", backgroundPosition:"right center", backgroundRepeat:"no-repeat", opacity:0.06 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:`linear-gradient(to right, ${theme.bgPrimary} 40%, transparent 80%)` }} />
        <div className="section-container">
          <FadeIn>
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-5" style={s(theme.inkTertiary)}>Case Studies</p>
            <h1 className="text-[3.75rem] font-semibold tracking-[-0.025em] max-w-[20ch] leading-[1.08] mb-6" style={s(theme.inkPrimary)}>The work, in depth.</h1>
            <p className="text-[1.25rem] max-w-[50ch] leading-[1.7]" style={s(theme.inkSecondary)}>Each case study follows a system from problem to architecture to outcome. No metrics fabricated. No outcomes exaggerated.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-28" style={{ ...bg(theme.bgSecondary) }}>
        <div className="section-container">
          <div className="flex flex-col gap-px rounded-[1rem] overflow-hidden" style={{ background: theme.border }}>
            {CS.map((cs, i) => {
              const ac = cs.accent === "purple" ? theme.accentSecondary : theme.accentPrimary;
              return (
                <FadeIn key={cs.slug} delay={i * 0.07}>
                  <Link href={`/case-studies/${cs.slug}`}
                    className="group flex flex-col md:flex-row md:items-center justify-between gap-6 px-8 py-8 md:py-10 transition-colors duration-200"
                    style={{ ...bg(theme.bgPrimary) }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = theme.bgSecondary)}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = theme.bgPrimary)}>
                    <div className="flex-1">
                      <span className="text-[11px] font-medium uppercase tracking-widest block mb-3" style={s(ac)}>{cs.tag}</span>
                      <h2 className="text-[1.875rem] font-semibold mb-3 leading-snug" style={s(theme.inkPrimary)}>{cs.title}</h2>
                      <p className="text-[14px] max-w-[54ch] leading-[1.7]" style={s(theme.inkSecondary)}>{cs.summary}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-4 flex-shrink-0">
                      <span className="text-[11px] font-medium" style={s(theme.inkTertiary)}>{cs.metric}</span>
                      <span className="inline-flex items-center gap-2 text-[12px] font-medium" style={s(theme.inkTertiary)}>Read case study →</span>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
