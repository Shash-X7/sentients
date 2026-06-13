"use client";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/ThemeProvider";
import { SYSTEMS } from "@/lib/config";

export default function SystemsPage() {
  const { theme } = useTheme();
  const s   = (v: string) => ({ color: v });
  const bg  = (v: string) => ({ backgroundColor: v });
  const brd = (v: string) => ({ borderColor: v });

  return (
    <div className="pt-16" style={{ ...bg(theme.bgPrimary), transition: "background-color 1.2s ease" }}>
      <section className="relative py-28 border-b overflow-hidden" style={{ ...bg(theme.bgPrimary), ...brd(theme.border) }}>
        {/* turgay-koca abstract cellular — desaturated, very low opacity */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage:`url("/assets/pexels-turgay-koca-405356598-15318001.jpg")`, backgroundSize:"cover", backgroundPosition:"center", opacity:0.05, filter:"grayscale(80%) blur(1px)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background:`linear-gradient(to right, color-mix(in srgb, ${theme.accentPrimary} 6%, transparent), transparent 70%)` }} />
        <div className="section-container">
          <FadeIn>
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-5" style={s(theme.inkTertiary)}>Systems Built</p>
            <h1 className="text-[3.75rem] font-semibold tracking-[-0.025em] max-w-[18ch] leading-[1.08] mb-6" style={s(theme.inkPrimary)}>Show systems,<br />not jobs.</h1>
            <p className="text-[1.25rem] max-w-[50ch] leading-[1.7]" style={s(theme.inkSecondary)}>Each entry is a system — defined by its problem, architecture and outcome. Not a bullet point on a CV.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-28" style={{ ...bg(theme.bgSecondary) }}>
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SYSTEMS.map((sys, i) => (
              <FadeIn key={sys.id} delay={i * 0.08}>
                <Link href={sys.href} className="group flex flex-col h-full rounded-[1rem] overflow-hidden card-lift"
                  style={{ ...bg(theme.bgPrimary), border: `0.5px solid ${theme.border}` }}>
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img src={sys.image} alt={sys.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 40%, color-mix(in srgb, ${theme.bgPrimary} 80%, transparent) 100%)` }} />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <span className="text-[11px] font-medium uppercase tracking-widest mb-5" style={s(theme.inkTertiary)}>{String(i + 1).padStart(2,"0")}</span>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {sys.tags.map(t => (<span key={t} className="text-[11px] px-2.5 py-1 rounded-full" style={{ ...bg(theme.bgSecondary), border: `0.5px solid ${theme.border}`, color: theme.inkTertiary }}>{t}</span>))}
                    </div>
                    <h2 className="text-[1.875rem] font-semibold mb-1 leading-snug" style={s(theme.inkPrimary)}>{sys.title}</h2>
                    <p className="text-[13px] font-medium mb-3" style={s(theme.inkTertiary)}>{sys.subtitle}</p>
                    <p className="text-[13px] leading-[1.75] flex-1 mb-5" style={s(theme.inkSecondary)}>{sys.description}</p>
                    <span className="inline-flex items-center gap-2 text-[12px] font-medium" style={s(theme.inkTertiary)}>Explore system →</span>
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
