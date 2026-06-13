"use client";
import { notFound } from "next/navigation";
import { use } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/ThemeProvider";
import { SITE } from "@/lib/config";

const CONTENT: Record<string, { tag: string; title: string; accent: "blue"|"purple"; overview: string; challenge: string; solution: string; result: string; keyPoints: string[] }> = {
  "autonomous-qa-intelligence":   { tag:"AI Automation",             accent:"blue",   title:"Autonomous QA Intelligence Platform",  overview:"HR Monster's engineering team was scaling rapidly, but QA remained a manual, bottleneck-prone function. This case study follows the design and deployment of a self-improving QA intelligence system.", challenge:"As the codebase grew, manual regression testing couldn't keep pace. Each sprint introduced new surfaces to test; QA cycles lengthened; engineering velocity slowed. Existing automation scripts were brittle and required constant maintenance — each refactor broke multiple tests.", solution:"Designed the system as an intelligence layer rather than a test runner. A repository monitoring agent observes meaningful diffs. A pattern engine maps changes to historical regression data. An output layer generates structured, actionable analysis for engineering teams. Crucially, the system continuously improves — resolved issues feed back into the pattern library.", result:"QA bottlenecks measurably reduced. Engineering teams receive prioritised, structured analysis rather than raw failure logs. The system now improves as the codebase evolves — compounding value with every sprint.", keyPoints:["Systems that learn outperform systems that execute","Output quality matters as much as detection capability","Designed for CI/CD integration from day zero","Continuous improvement loop built into the architecture"] },
  "enterprise-product-ownership": { tag:"Technical Product Ownership", accent:"blue", title:"Enterprise Product Ownership at Scale",overview:"How a single technical product owner expanded from one product to four enterprise domains at Carl Zeiss — and built a governance model that could scale.", challenge:"Carl Zeiss operated with four enterprise software domains — Order Management, Finance, Post Sales and Lens Calculation Engine — each siloed. Different teams, different tooling, different release cycles. No unified view of cross-domain dependencies or system health.", solution:"Established end-to-end product ownership across all four domains simultaneously. Introduced BPMN-based process modelling with Signavio to create a shared language between business and engineering. Unified the Azure ecosystem architecture and built structured release and production support frameworks.", result:"Four enterprise domains under coherent product governance. Cross-domain alignment significantly improved. Release quality and stakeholder confidence increased measurably over a twelve-month period.", keyPoints:["BPMN as a shared language eliminates translation loss between business and engineering","Multi-product ownership reveals system-level patterns invisible at the product level","Process modelling is product design for enterprise systems","Governance frameworks scale; heroics don't"] },
  "ai-native-hr-platform":        { tag:"AI Systems",                accent:"blue",   title:"AI-Native HR Platform Architecture",  overview:"Designing an AI-native operational model for an HR technology platform — from agentic automation through product governance and technical delivery.", challenge:"HR Monster needed to evolve from a feature-driven product into an AI-native platform. The challenge was not building individual AI features — it was designing the operational, architectural and governance model that makes AI-native product development sustainable.", solution:"Established the Autonomous QA platform, a Product Management Operating System, and an enterprise-scale delivery framework — simultaneously. Each system was designed to be self-improving and to free engineering capacity for product development rather than maintenance.", result:"AI-native operational model operational within two months of joining. Engineering coordination across ~15 developers and designers. Direct reporting line to CTO with visibility across all technical product decisions.", keyPoints:["AI-native means the operational model is intelligence-first, not feature-first","Product governance itself can be automated — but must be designed as a system","Enterprise frameworks from Zeiss and RedBus apply directly to startup scaling","Speed and structure are not opposites at the right layer of abstraction"] },
  "marketplace-architecture":     { tag:"Systems Architecture",      accent:"blue",   title:"Marketplace Architecture at RedBus", overview:"Building payment and marketplace infrastructure for multi-geography expansion across Southeast Asia — three markets, one coherent abstraction layer.", challenge:"Expanding into Vietnam, Cambodia and Indonesia simultaneously meant navigating distinct regulatory environments, preferred payment methods and integration patterns — with no existing infrastructure to build on.", solution:"Designed a provider-agnostic payment abstraction layer with pluggable integrations and geo-aware routing. Integrated PhonePe, Razorpay, Mobikwik, JusPay and regional providers behind a single interface. Built operational dashboards and reconciliation tooling in parallel.", result:"Payment infrastructure live across three markets within timeline. The abstraction layer reduced subsequent integration effort significantly — the third market cost a fraction of the first.", keyPoints:["Abstraction layers compound in value across integrations","Payments is a compliance and operations product as much as a technical one","Operational tooling is not optional — it is part of the system","Cross-functional alignment is the hardest and most important part"] },
  "cognitive-systems-research":   { tag:"Cognitive AI",              accent:"purple", title:"Cognitive Systems Research",          overview:"Numocore and MyItihas — two research platforms exploring the architectural foundations for AI systems that reason and understand, not just retrieve.", challenge:"Current AI systems are fundamentally retrieval systems with a generation layer. They cannot reason with continuity, hold structured contextual knowledge, or adapt their understanding across sessions. Building genuinely cognitive systems requires rethinking the architecture, not just fine-tuning the model.", solution:"Numocore explores cognitive architectures that separate memory, reasoning and output layers — enabling multi-step reasoning with genuine continuity. MyItihas explores structured knowledge representation and context-aware retrieval, where relationships between knowledge pieces are first-class citizens rather than implicit embeddings.", result:"Both platforms are active research tracks. Early Numocore prototypes demonstrate measurable improvements in multi-step reasoning quality. MyItihas demonstrates richer contextual retrieval than vector-search baselines on structured knowledge tasks.", keyPoints:["Reasoning quality is an architecture problem, not just a model problem","Memory and context are the missing layers in most production AI systems","Cognitive science provides underexplored design patterns for AI architecture","Research and product are not separate tracks — they inform each other"] },
};

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const c = CONTENT[slug];
  if (!c) notFound();

  const { theme } = useTheme();
  const s   = (v: string) => ({ color: v });
  const bg  = (v: string) => ({ backgroundColor: v });
  const brd = (v: string) => ({ borderColor: v });
  const ac  = c.accent === "purple" ? theme.accentSecondary : theme.accentPrimary;

  return (
    <div className="pt-16" style={{ ...bg(theme.bgPrimary), transition: "background-color 1.2s ease" }}>
      <section className="py-28 border-b" style={{ ...bg(theme.bgPrimary), ...brd(theme.border) }}>
        <div className="section-container">
          <FadeIn>
            <Button href="/case-studies" variant="ghost" size="sm" className="mb-8 -ml-2">← Case studies</Button>
            <span className="text-[11px] font-medium uppercase tracking-widest block mb-4" style={s(ac)}>{c.tag}</span>
            <h1 className="text-[3.75rem] font-semibold tracking-[-0.025em] leading-[1.08] mb-6 max-w-[20ch]" style={s(theme.inkPrimary)}>{c.title}</h1>
            <p className="text-[1.25rem] max-w-[52ch] leading-[1.7]" style={s(theme.inkSecondary)}>{c.overview}</p>
          </FadeIn>
        </div>
      </section>
      <section className="py-28" style={{ ...bg(theme.bgSecondary) }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 flex flex-col gap-14">
              {[{label:"The Challenge",body:c.challenge},{label:"The Solution",body:c.solution},{label:"The Result",body:c.result}].map(({label,body},i)=>(
                <FadeIn key={label} delay={i*0.1}>
                  <h2 className="text-[11px] font-medium uppercase tracking-widest mb-4" style={s(theme.inkTertiary)}>{label}</h2>
                  <p className="text-[1.125rem] leading-[1.75]" style={s(theme.inkSecondary)}>{body}</p>
                </FadeIn>
              ))}
            </div>
            <div className="lg:col-span-1">
              <FadeIn delay={0.2} className="sticky top-24 flex flex-col gap-6">
                <div className="rounded-[1rem] p-8" style={{ ...bg(theme.bgPrimary), border: `0.5px solid ${theme.border}` }}>
                  <h3 className="text-[11px] font-medium uppercase tracking-widest mb-5" style={s(theme.inkTertiary)}>Key Points</h3>
                  <ul className="flex flex-col gap-4">
                    {c.keyPoints.map((p,i)=>(
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background:ac}} />
                        <p className="text-[14px] leading-[1.65]" style={s(theme.inkSecondary)}>{p}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[1rem] p-8" style={{ ...bg(theme.bgPrimary), border: `0.5px solid ${theme.border}` }}>
                  <p className="text-[14px] mb-5 leading-[1.7]" style={s(theme.inkSecondary)}>Interested in similar outcomes?</p>
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
