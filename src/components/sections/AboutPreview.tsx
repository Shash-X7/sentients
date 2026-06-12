"use client";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { FOUNDER, TIMELINE } from "@/lib/config";

export function AboutPreview() {
  return (
    <section className="py-28 bg-[#FAFAFA] border-t border-[#E5E5E5]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <FadeIn>
              <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#888888] mb-5">About</p>
              <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] text-[#111111] leading-[1.18] mb-8">{FOUNDER.name}</h2>
              <p className="text-[1.125rem] text-[#555555] leading-[1.75] mb-6 max-w-[44ch]">
                AI Systems Automation Engineer, Technical Product Owner and Cognitive AI Systems Engineer — operating at the intersection of business strategy, product leadership, software architecture and emerging cognitive systems.
              </p>
              <p className="text-[1.125rem] text-[#555555] leading-[1.75] mb-10 max-w-[44ch]">
                Unlike traditional PMs or CTOs, Shaashwath has consistently operated across business, technology and execution simultaneously — taking ideas from concept to production.
              </p>
              <div className="flex flex-col gap-2 mb-10">
                {FOUNDER.philosophy.map(p => (<p key={p} className="text-[1rem] text-[#888888] font-medium">— {p}</p>))}
              </div>
              <Button href="/about" variant="secondary" size="md">Full story</Button>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <div className="relative flex flex-col gap-0">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#E5E5E5]" />
              {TIMELINE.map((step) => (
                <div key={step.company} className="relative pl-8 pb-8 last:pb-0">
                  <div className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${step.period === "Current" || step.period === "Now" ? "border-[#2563EB] bg-[#2563EB]/20" : "border-[#E5E5E5] bg-white"}`} />
                  <div className="flex items-baseline gap-3 mb-1">
                    <h4 className="text-[1rem] font-semibold text-[#111111]">{step.company}</h4>
                    {(step.period === "Current" || step.period === "Now") && (<span className="text-[0.75rem] font-medium text-[#2563EB] uppercase tracking-wider">{step.period}</span>)}
                  </div>
                  <p className="text-[0.8125rem] font-medium text-[#888888] mb-2 uppercase tracking-wider">{step.role}</p>
                  <p className="text-[0.9375rem] text-[#555555] leading-[1.65]">{step.summary}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
