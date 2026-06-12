"use client";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ENGAGEMENTS, SITE } from "@/lib/config";

export function EngagementModels() {
  return (
    <section className="py-28 bg-white border-t border-[#E5E5E5]">
      <div className="section-container">
        <FadeIn className="mb-14">
          <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#888888] mb-5">Engagement Models</p>
          <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] text-[#111111] leading-[1.18]">How we work together.</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E5] rounded-[1rem] overflow-hidden shadow-sm mb-12">
          {ENGAGEMENTS.map((eng, i) => (
            <FadeIn key={eng.title} delay={i * 0.08}>
              <div className="bg-white hover:bg-[#FAFAFA] transition-colors duration-200 p-8 md:p-10 h-full">
                <h3 className="text-[1.125rem] font-semibold text-[#111111] mb-3">{eng.title}</h3>
                <p className="text-[0.9375rem] text-[#555555] leading-[1.75]">{eng.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="flex justify-center">
          <Button href={SITE.calendly} external size="lg">Start a Conversation</Button>
        </FadeIn>
      </div>
    </section>
  );
}
