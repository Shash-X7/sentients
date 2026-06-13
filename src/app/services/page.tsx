"use client";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/ThemeProvider";
import { SERVICES, SITE } from "@/lib/config";

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
    problem: "Current AI systems excel at pattern-matching and retrieval, but remain shallow when it comes to reasoning, memory, contextual adaptation and genuine understanding. Most production systems hit a ceiling — capable tools, not intelligent systems.",
    approach: "Research and development at the boundary of what AI systems can do. Drawing on cognitive science, information theory and systems architecture, I design frameworks that push beyond standard LLM patterns into territory where machines can reason with richer context and sustained memory.",
    outcomes: ["Research frameworks for cognitive AI architectures","Prototype systems demonstrating novel reasoning or memory capabilities","Collaborative research papers and technical documentation","Pathways from research to production-ready cognitive systems"],
    deliverables: ["Research brief and architecture proposal","Prototype or proof-of-concept system","Technical documentation and findings","Ongoing collaboration roadmap"],
  },
} as const;

export default function ServicesPage() {
  const { theme } = useTheme();
  const s  = (v: string) => ({ color: v });
  const bg = (v: string) => ({ backgroundColor: v });
  const brd = (v: string) => ({ borderColor: v });

  return (
    <div className="pt-16" style={{ ...bg(theme.bgPrimary), transition: "background-color 1.2s ease" }}>

      {/* Header — googledeepmind neural network wires */}
      <section className="relative py-28 border-b overflow-hidden" style={{ ...bg(theme.bgPrimary), ...brd(theme.border) }}>
        {/* Neural wire image at low opacity — blends with theme */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:`url("/assets/pexels-googledeepmind-17483871.jpg")`, backgroundSize:"cover", backgroundPosition:"center 40%", opacity: 0.07, mixBlendMode:"luminosity" }} />
        {/* Accent-coloured tint overlay so image adopts theme colour */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:`linear-gradient(135deg, color-mix(in srgb, ${theme.accentPrimary} 8%, transparent), transparent 60%)` }} />
        <div className="section-container">
          <FadeIn>
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-5" style={s(theme.inkTertiary)}>Services</p>
            <h1 className="text-[3.75rem] font-semibold tracking-[-0.025em] max-w-[16ch] leading-[1.08] mb-6" style={s(theme.inkPrimary)}>What Sentients builds.</h1>
            <p className="text-[1.25rem] max-w-[48ch] leading-[1.7]" style={s(theme.inkSecondary)}>Three distinct disciplines. One unified practice — connecting business intent to intelligent systems, from strategy through execution.</p>
          </FadeIn>
        </div>
      </section>

      {/* Service sections */}
      {SERVICES.map((svc, idx) => {
        const d  = DETAIL[svc.id as keyof typeof DETAIL];
        const ac = svc.accent === "purple" ? theme.accentSecondary : theme.accentPrimary;
        const bgColor = idx % 2 === 0 ? theme.bgPrimary : theme.bgSecondary;
        return (
          <section key={svc.id} id={svc.id} className="py-28 border-b" style={{ ...bg(bgColor), ...brd(theme.border) }}>
            <div className="section-container">
              <FadeIn className="mb-14">
                <span className="text-[11px] font-medium uppercase tracking-widest block mb-4" style={s(ac)}>{svc.tag}</span>
                <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] leading-[1.15] mb-4" style={s(theme.inkPrimary)}>{svc.title}</h2>
                <p className="text-[1.25rem] max-w-[48ch] leading-[1.7]" style={s(theme.inkSecondary)}>{svc.headline}</p>
              </FadeIn>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="flex flex-col gap-10">
                  <FadeIn>
                    <h3 className="text-[11px] font-medium uppercase tracking-widest mb-3" style={s(theme.inkTertiary)}>The Problem</h3>
                    <p className="text-[1rem] leading-[1.75]" style={s(theme.inkSecondary)}>{d.problem}</p>
                  </FadeIn>
                  <FadeIn delay={0.1}>
                    <h3 className="text-[11px] font-medium uppercase tracking-widest mb-3" style={s(theme.inkTertiary)}>The Approach</h3>
                    <p className="text-[1rem] leading-[1.75]" style={s(theme.inkSecondary)}>{d.approach}</p>
                  </FadeIn>
                </div>
                <div className="flex flex-col gap-10">
                  <FadeIn delay={0.15}>
                    <h3 className="text-[11px] font-medium uppercase tracking-widest mb-5" style={s(theme.inkTertiary)}>Outcomes</h3>
                    <ul className="flex flex-col gap-3">
                      {d.outcomes.map(o => (
                        <li key={o} className="flex items-start gap-3 text-[15px]" style={s(theme.inkSecondary)}>
                          <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ac }} />{o}
                        </li>
                      ))}
                    </ul>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <h3 className="text-[11px] font-medium uppercase tracking-widest mb-5" style={s(theme.inkTertiary)}>Deliverables</h3>
                    <ul className="flex flex-col gap-3">
                      {d.deliverables.map(d2 => (
                        <li key={d2} className="flex items-start gap-3 text-[15px]" style={s(theme.inkSecondary)}>
                          <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: theme.borderStrong }} />{d2}
                        </li>
                      ))}
                    </ul>
                  </FadeIn>
                </div>
              </div>

              <FadeIn delay={0.25}>
                <div className="mt-12 pt-10 border-t" style={{ borderColor: theme.border }}>
                <div className="flex flex-wrap gap-2">
                  {svc.capabilities.map(c => (
                    <span key={c} className="text-[11px] font-medium px-3 py-1.5 rounded-full"
                      style={{ color: ac, border: `0.5px solid color-mix(in srgb, ${ac} 25%, transparent)`, background: `color-mix(in srgb, ${ac} 7%, transparent)` }}>
                      {c}
                    </span>
                  ))}
                </div>
                </div>
              </FadeIn>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-28" style={{ ...bg(theme.bgPrimary) }}>
        <div className="section-container text-center">
          <FadeIn>
            <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] mb-6" style={s(theme.inkPrimary)}>Not sure which service fits?</h2>
            <p className="text-[1.125rem] mb-10 max-w-[44ch] mx-auto leading-[1.75]" style={s(theme.inkSecondary)}>Most engagements draw on all three pillars. Start with a 30-minute discovery call.</p>
            <Button href={SITE.calendly} external size="lg" icon={<AR />}>Book a Discovery Call</Button>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
