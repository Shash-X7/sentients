import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { FOUNDER, TIMELINE, SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description: "Shaashwath Vijayakumar — AI Systems Automation Engineer, Technical Product Owner and Cognitive AI Systems Engineer.",
};

const BIO_PARAS = [
  "Shaashwath's career has followed an unusual trajectory. Unlike traditional Product Managers, CTOs or AI Consultants, he has consistently operated across business, technology and execution simultaneously — not sequentially.",
  "It started with building and exiting his own company. That gave him a founder-level understanding of how businesses work beyond the technology — customer acquisition, operations, the cost of every decision.",
  "At RedBus, he built payment infrastructure from scratch across three Southeast Asian markets. At Carl Zeiss, he owned four enterprise products simultaneously on Azure-native architecture. Each phase compounded the previous.",
  "At HR Monster, he joined as Agentic Automation Lead and within two months became a critical operator — building the Autonomous QA Intelligence Platform, the Product Management Operating System and the enterprise-scale delivery framework.",
  "In parallel, he has been building a separate research track — Numocore and MyItihas — exploring the architectural foundations for AI systems that reason and understand rather than just retrieve and generate.",
  "Sentients is the culmination of all of it. Not a consultancy. Not an agency. A systems studio — for founders, CTOs and enterprise leaders who need intelligent systems built correctly, from concept to scale.",
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="py-28 border-b border-[#E5E5E5] bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#888888] mb-5">About</p>
              <h1 className="text-[3.75rem] font-semibold tracking-[-0.025em] text-[#111111] leading-[1.08] mb-6">{FOUNDER.name}</h1>
              <p className="text-[1.25rem] text-[#555555] leading-[1.7] max-w-[44ch]">{FOUNDER.title}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-4">
                {FOUNDER.philosophy.map(p => (
                  <div key={p} className="flex items-center gap-4 py-3 border-b border-[#E5E5E5] last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0" />
                    <p className="text-[1.125rem] font-medium text-[#111111]">{p}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#FAFAFA] border-b border-[#E5E5E5]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <FadeIn>
                <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#888888] mb-6">The Story</p>
                {BIO_PARAS.map((para, i) => (<p key={i} className="text-[1.125rem] text-[#555555] leading-[1.8] mb-6 max-w-[54ch]">{para}</p>))}
              </FadeIn>
            </div>
            <div className="lg:col-span-1">
              <FadeIn delay={0.15} className="sticky top-24">
                <div className="bg-white border border-[#E5E5E5] rounded-[1rem] p-8 shadow-sm">
                  <p className="text-[0.75rem] font-medium uppercase tracking-widest text-[#888888] mb-6">Core Identity</p>
                  {[{ label:"Product", value:"Technical Product Owner" },{ label:"Automation", value:"AI Systems Automation Engineer" },{ label:"Research", value:"Cognitive AI Systems Engineer" },{ label:"Location", value:SITE.location },{ label:"Contact", value:SITE.email }].map(row => (
                    <div key={row.label} className="flex flex-col gap-1 py-4 border-b border-[#E5E5E5] last:border-0">
                      <span className="text-[0.75rem] font-medium text-[#888888] uppercase tracking-wider">{row.label}</span>
                      <span className="text-[0.9375rem] font-medium text-[#111111]">{row.value}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white border-b border-[#E5E5E5]">
        <div className="section-container">
          <FadeIn className="mb-14">
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#888888] mb-5">Career</p>
            <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] text-[#111111] leading-[1.18]">The journey.</h2>
          </FadeIn>
          <div className="relative max-w-[720px]">
            <div className="absolute left-[11px] top-3 bottom-3 w-px bg-[#E5E5E5]" />
            {TIMELINE.map((step, i) => (
              <FadeIn key={step.company} delay={i * 0.1}>
                <div className="relative pl-10 pb-12 last:pb-0">
                  <div className={`absolute left-0 top-1 w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center ${step.period === "Current" || step.period === "Now" ? "border-[#2563EB] bg-[#2563EB]/10" : "border-[#E5E5E5] bg-white"}`}>
                    {(step.period === "Current" || step.period === "Now") && (<span className="w-2 h-2 rounded-full bg-[#2563EB] block" />)}
                  </div>
                  <div className="flex flex-wrap items-baseline gap-3 mb-1">
                    <h3 className="text-[1.125rem] font-semibold text-[#111111]">{step.company}</h3>
                    {(step.period === "Current" || step.period === "Now") && (<span className="text-[0.75rem] font-medium text-[#2563EB] uppercase tracking-wider">{step.period}</span>)}
                  </div>
                  <p className="text-[0.8125rem] font-medium text-[#888888] uppercase tracking-wider mb-3">{step.role}</p>
                  <p className="text-[1rem] text-[#555555] leading-[1.75] max-w-[52ch]">{step.summary}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#FAFAFA] border-b border-[#E5E5E5]">
        <div className="section-container">
          <FadeIn className="mb-14">
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#888888] mb-5">Positioning</p>
            <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] text-[#111111] leading-[1.18]">What Sentients is.<br />What it is not.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E5] rounded-[1rem] overflow-hidden shadow-sm">
            <FadeIn>
              <div className="bg-white p-8 md:p-10 h-full">
                <p className="text-[0.75rem] font-medium uppercase tracking-widest text-[#888888] mb-6">Not</p>
                {["A freelancer","A generic AI consultant","An agency","A vendor","A tool recommendation service"].map(n => (
                  <div key={n} className="flex items-center gap-3 py-3 border-b border-[#E5E5E5] last:border-0">
                    <span className="text-[#888888]">—</span>
                    <p className="text-[1rem] text-[#555555]">{n}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 md:p-10 h-full">
                <p className="text-[0.75rem] font-medium uppercase tracking-widest text-[#2563EB] mb-6">Yes</p>
                {["A systems studio","A builder of intelligent systems","A bridge between business, product, AI and engineering","A research-informed practitioner","A fractional CTO who ships"].map(y => (
                  <div key={y} className="flex items-center gap-3 py-3 border-b border-[#E5E5E5] last:border-0">
                    <span className="text-[#2563EB]">→</span>
                    <p className="text-[1rem] font-medium text-[#111111]">{y}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="section-container">
          <FadeIn className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-[1.875rem] font-semibold text-[#111111] mb-3">Ready to build something intelligent?</h2>
              <p className="text-[1.125rem] text-[#555555] max-w-[44ch] leading-[1.7]">Start with a 30-minute discovery call.</p>
            </div>
            <div className="flex flex-wrap gap-4 flex-shrink-0">
              <Button href={SITE.calendly} external size="lg">Book a Call</Button>
              <Button href={`mailto:${SITE.email}`} variant="secondary" size="lg">Email directly</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
