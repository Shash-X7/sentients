"use client";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { useTheme } from "@/components/ThemeProvider";
import { SERVICES } from "@/lib/config";

export function ServicePillars() {
  const { theme } = useTheme();
  return (
    <section className="py-28" style={{ backgroundColor: theme.bgSecondary, borderTop: `1px solid ${theme.border}`, transition: "all 1.2s ease" }}>
      <div className="section-container">
        <FadeIn className="mb-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-5" style={{ color: theme.inkTertiary }}>Service Pillars</p>
          <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] max-w-[18ch] leading-[1.18]" style={{ color: theme.inkPrimary }}>
            Three pillars.<br />One continuous system.
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-[1rem] overflow-hidden" style={{ background: theme.border }}>
          {SERVICES.map((s, i) => {
            const isP = s.accent === "purple";
            const ac  = isP ? theme.accentSecondary : theme.accentPrimary;
            return (
              <FadeIn key={s.id} delay={i * 0.1}>
                <Link href={s.href} className="group flex flex-col h-full p-8 md:p-10 transition-colors duration-300" style={{ background: theme.bgPrimary }}>
                  <span className="text-[10px] font-medium uppercase tracking-widest mb-8" style={{ color: ac }}>{s.tag}</span>
                  <h3 className="text-[16px] font-semibold mb-4 leading-[1.3]" style={{ color: theme.inkPrimary }}>{s.title}</h3>
                  <p className="text-[13px] leading-[1.75] mb-8 flex-1" style={{ color: theme.inkSecondary }}>{s.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {s.capabilities.map(c => (
                      <span key={c} className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                        style={{ color: ac, border: `0.5px solid color-mix(in srgb, ${ac} 25%, transparent)`, background: `color-mix(in srgb, ${ac} 7%, transparent)` }}>
                        {c}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-[12px] font-medium group-hover:gap-3 transition-all duration-200" style={{ color: ac }}>
                    Learn more →
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
