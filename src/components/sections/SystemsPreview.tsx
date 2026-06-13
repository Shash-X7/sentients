"use client";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/ThemeProvider";
import { SYSTEMS } from "@/lib/config";

export function SystemsPreview() {
  const { theme } = useTheme();
  const featured = SYSTEMS.slice(0, 3);

  return (
    <section className="py-28" style={{ backgroundColor: theme.bgSecondary, borderTop: `1px solid ${theme.border}`, transition: "all 1.2s ease" }}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <FadeIn>
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-5" style={{ color: theme.inkTertiary }}>Systems Built</p>
            <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] leading-[1.18]" style={{ color: theme.inkPrimary }}>Systems, not résumés.</h2>
          </FadeIn>
          <FadeIn delay={0.1}><Button href="/systems" variant="secondary" size="md">View all →</Button></FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((sys, i) => (
            <FadeIn key={sys.id} delay={i * 0.1}>
              <Link href={sys.href} className="group flex flex-col h-full rounded-[1rem] overflow-hidden card-lift"
                style={{ background: theme.bgPrimary, border: `0.5px solid ${theme.border}` }}>
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img src={sys.image} alt={sys.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 40%, color-mix(in srgb, ${theme.bgPrimary} 80%, transparent) 100%)` }} />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {sys.tags.map(t => (
                      <span key={t} className="text-[11px] px-2.5 py-1 rounded-full" style={{ background: theme.bgSecondary, border: `0.5px solid ${theme.border}`, color: theme.inkTertiary }}>{t}</span>
                    ))}
                  </div>
                  <h3 className="text-[17px] font-semibold mb-1 leading-snug" style={{ color: theme.inkPrimary }}>{sys.title}</h3>
                  <p className="text-[12px] font-medium mb-3" style={{ color: theme.inkTertiary }}>{sys.subtitle}</p>
                  <p className="text-[13px] leading-[1.7] flex-1 mb-5" style={{ color: theme.inkSecondary }}>{sys.description}</p>
                  <span className="inline-flex items-center gap-2 text-[12px] font-medium transition-colors duration-200 group-hover:opacity-70" style={{ color: theme.inkTertiary }}>
                    View system →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
