"use client";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/ThemeProvider";
import { FOUNDER, TIMELINE, SITE } from "@/lib/config";

export function AboutPreview() {
  const { theme } = useTheme();
  return (
    <section className="py-28" style={{ backgroundColor: theme.bgSecondary, borderTop: `1px solid ${theme.border}`, transition: "all 1.2s ease" }}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <FadeIn>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-5" style={{ color: theme.inkTertiary }}>About</p>
              <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] leading-[1.18] mb-8" style={{ color: theme.inkPrimary }}>{FOUNDER.name}</h2>
              <p className="text-[1.1rem] leading-[1.75] mb-6 max-w-[44ch]" style={{ color: theme.inkSecondary }}>
                AI Systems Automation Engineer, Technical Product Owner and Cognitive AI Systems Engineer, operating at the intersection of business strategy, product leadership, software architecture and emerging cognitive systems.
              </p>
              <div className="flex flex-col gap-2 mb-10">
                {FOUNDER.philosophy.map(p => (<p key={p} className="text-[15px] font-medium" style={{ color: theme.inkTertiary }}>{p}</p>))}
              </div>
              <Button href="/about" variant="secondary" size="md">Full story</Button>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <div className="relative flex flex-col">
              <div className="absolute left-[7px] top-2 bottom-2 w-px" style={{ background: theme.border }} />
              {TIMELINE.map((step) => (
                <div key={step.company} className="relative pl-8 pb-8 last:pb-0">
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2"
                    style={{ borderColor: (step.period === "Current" || step.period === "Now" || step.period === "Active") ? theme.accentPrimary : theme.border, background: (step.period === "Current" || step.period === "Now" || step.period === "Active") ? `color-mix(in srgb, ${theme.accentPrimary} 15%, transparent)` : theme.bgPrimary }} />
                  <div className="flex items-baseline gap-3 mb-1">
                    <h4 className="text-[15px] font-semibold" style={{ color: theme.inkPrimary }}>{step.company}</h4>
                    {(step.period === "Current" || step.period === "Now" || step.period === "Active") && (
                      <span className="text-[10px] font-medium uppercase tracking-wider" style={{ color: theme.accentPrimary }}>{step.period}</span>
                    )}
                  </div>
                  <p className="text-[11px] font-medium uppercase tracking-wider mb-2" style={{ color: theme.inkTertiary }}>{step.role}</p>
                  <p className="text-[13px] leading-[1.65]" style={{ color: theme.inkSecondary }}>{step.summary}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
