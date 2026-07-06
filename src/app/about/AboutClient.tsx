"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/ThemeProvider";
import { FOUNDER, TIMELINE, SITE } from "@/lib/config";

const BIO_PARAS = [
  "Shaashwath's career has followed an unusual trajectory. Unlike traditional Product Managers, CTOs or AI Consultants, he has consistently operated across business, technology and execution simultaneously, not sequentially.",
  "It started with building and exiting his own company. That gave him a founder-level understanding of how businesses work beyond the technology: customer acquisition, operations, the cost of every decision.",
  "At RedBus, he built payment infrastructure from scratch across three Southeast Asian markets. At Carl Zeiss, he owned four enterprise products simultaneously on Azure-native architecture. Each phase compounded the previous.",
  "He co-founded Massive Dynamics, an AI-native company where he serves as CTO, building at the intersection of advanced systems and applied intelligence.",
  "At HR Monster, he joined as Agentic Automation Lead and within two months became a critical operator, building the Autonomous QA Intelligence Platform, the Product Management Operating System and the enterprise-scale delivery framework.",
  "In parallel, he built Numocore, a consciousness-inspired AI pipeline, and continues pushing the research frontier through Sentients, his own studio and brainchild.",
];

const DOT_GLOW: Record<string, string> = {
  dawn:     "#F59E0B",
  noon:     "#2563EB",
  dusk:     "#F07040",
  twilight: "#8B5CF6",
  midnight: "#818CF8",
};

export function AboutClient() {
  const { theme, mode } = useTheme();
  const [imgError,     setImgError]     = useState(false);
  const [lampostError, setLampostError] = useState(false);

  // Photo is monochrome B&W.
  // Light modes (dawn/noon): photo background is lighter, use black for contrast.
  // Dark modes (dusk/twilight/midnight): photo is dark, use white.
  const isLightMode    = mode === "dawn" || mode === "noon";
  const heroTextPrimary   = isLightMode ? "rgba(0,0,0,0.92)"   : "rgba(255,255,255,0.95)";
  const heroTextSecondary = isLightMode ? "rgba(0,0,0,0.65)"   : "rgba(255,255,255,0.72)";
  const heroTextTertiary  = isLightMode ? "rgba(0,0,0,0.42)"   : "rgba(255,255,255,0.45)";
  // Philosophy lines same colour as primary — black or white, no accent colour
  const heroPhilosophyText = heroTextPrimary;

  const s   = (v: string) => ({ color: v });
  const bg  = (v: string) => ({ backgroundColor: v });
  const brd = (v: string) => ({ borderColor: v });
  const dotColour = DOT_GLOW[mode] ?? "#818CF8";

  return (
    <div style={{ ...bg(theme.bgPrimary), transition: "background-color 1.2s ease" }}>

      {/* ── HERO — full viewport, nav is transparent over it ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>

        {/* Hero photo — fills 100vh including nav area */}
        {!imgError ? (
          <img
            src="/images/shaashwath.jpg"
            alt="Shaashwath Vijayakumar"
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 22%", filter: "grayscale(100%) contrast(1.05) brightness(0.82)" }}
          />
        ) : (
          <div className="absolute inset-0"
            style={{ background: `linear-gradient(160deg, color-mix(in srgb, ${theme.accentPrimary} 40%, #111) 0%, #111 100%)` }} />
        )}

        {/* Left vignette — stronger on light modes so black text reads on photo */}
        <div className="absolute inset-0"
          style={{ background: isLightMode
            ? "linear-gradient(100deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.20) 32%, transparent 54%)"
            : "linear-gradient(100deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.20) 35%, transparent 58%)" }} />

        {/* Bottom fade into page colour */}
        <div className="absolute bottom-0 left-0 right-0 h-[38%]"
          style={{ background: `linear-gradient(to bottom, transparent 0%, ${theme.bgPrimary} 100%)` }} />

        {/* Accent line below nav — thin stripe matching palette */}
        <div className="absolute top-16 left-0 right-0 h-[2px] pointer-events-none"
          style={{ background: `linear-gradient(to right, ${theme.accentPrimary}, ${theme.accentSecondary}, transparent)`, opacity: 0.7 }} />

        {/* Text — left-anchored, no wider than ~420px */}
        <div className="section-container relative z-10 flex flex-col justify-end h-full"
          style={{ minHeight: "100vh", paddingBottom: "5rem", paddingTop: "80px" }}>
          <FadeIn>
            <div style={{ maxWidth: "420px" }}>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] mb-5"
              style={{ color: heroTextTertiary }}>
              About
            </p>
            <h1 className="text-[4rem] md:text-[5.5rem] font-semibold tracking-[-0.03em] leading-[1.02] mb-5"
              style={{ color: heroTextPrimary }}>
              Shaash
            </h1>
            <p className="text-[1.05rem] max-w-[44ch] leading-[1.7] mb-8"
              style={{ color: heroTextSecondary }}>
              {FOUNDER.title}
            </p>
            <div className="flex flex-col gap-2 mb-10">
              {FOUNDER.philosophy.map(p => (
                <p key={p} className="text-[16px] font-medium tracking-[-0.01em]"
                  style={{ color: heroPhilosophyText }}>{p}</p>
              ))}
            </div>

            {/* Passion tag — creative single line */}
            <div className="inline-flex items-center gap-2 mt-1">
              <span className="text-[13px] tracking-wide" style={{ color: heroTextSecondary }}>
              Motorsports &middot; Boxing &middot; Photography
              </span>
            </div>
            </div>{/* end max-w wrapper */}
          </FadeIn>
        </div>
      </section>

      {/* ── BIO + IDENTITY CARD ── */}
      <section className="py-24 border-b" style={{ ...bg(theme.bgSecondary), ...brd(theme.border) }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <FadeIn>
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-6" style={s(theme.inkTertiary)}>The Story</p>
                {BIO_PARAS.map((para, i) => (
                  <p key={i} className="text-[1.05rem] leading-[1.85] mb-6 max-w-[54ch]" style={s(theme.inkSecondary)}>{para}</p>
                ))}
              </FadeIn>
            </div>
            <div className="lg:col-span-1">
              <FadeIn delay={0.15} className="sticky top-24">
                <div className="rounded-[1rem] p-8" style={{ ...bg(theme.bgPrimary), border: `0.5px solid ${theme.border}` }}>
                  <p className="text-[11px] font-medium uppercase tracking-widest mb-6" style={s(theme.inkTertiary)}>Core Identity</p>
                  {[
                    { label: "Product",    value: "Technical Product Owner"        },
                    { label: "Automation", value: "AI Systems Automation Engineer" },
                    { label: "Research",   value: "Cognitive AI Systems Engineer"  },
                    { label: "Companies",  value: "Sentients · Massive Dynamics"   },
                    { label: "Location",   value: SITE.location                    },
                    { label: "Contact",    value: SITE.email                       },
                  ].map(row => (
                    <div key={row.label} className="flex flex-col gap-1 py-4 border-b last:border-0" style={{ borderColor: theme.border }}>
                      <span className="text-[11px] font-medium uppercase tracking-wider" style={s(theme.inkTertiary)}>{row.label}</span>
                      <span className="text-[13px] font-medium" style={s(theme.inkPrimary)}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE + STICKY PHOTO ── */}
      <section className="border-b overflow-hidden" style={{ ...bg(theme.bgPrimary), ...brd(theme.border) }}>
        <div className="flex items-start">

          {/* LEFT — natural flow: header then scrollable timeline */}
          <div className="flex-1 min-w-0" style={{ minWidth: 0 }}>

            {/* Pinned header — sticks while timeline scrolls past */}
            <div className="sticky top-0 z-10 pt-16 pb-8"
              style={{ background: theme.bgPrimary, paddingLeft: "max(calc((100vw - 1200px) / 2 + 64px), 24px)", paddingRight: "40px" }}>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-4" style={s(theme.inkTertiary)}>Career</p>
              <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] leading-[1.18]" style={s(theme.inkPrimary)}>The journey.</h2>
            </div>

            {/* Timeline — exact copy of homepage AboutPreview spacing */}
            <div className="timeline-scroll" style={{
              overflowY: "auto",
              maxHeight: "calc(100vh - 160px)",
              scrollbarWidth: "none",
              paddingLeft: "max(calc((100vw - 1200px) / 2 + 64px), 24px)",
              paddingRight: "40px",
              paddingBottom: "64px",
            }}>
              <div className="relative flex flex-col">
                <div className="absolute left-[7px] top-2 bottom-2 w-px" style={{ background: theme.border }} />
                {[...TIMELINE].reverse().map((step, idx) => {
                  const active = step.period === "Current" || step.period === "Now" || step.period === "Active";
                  return (
                    <div key={step.company} className={`relative pl-8 pb-8 last:pb-0 ${idx !== 0 ? 'mt-4' : ''}`}>
                      {active ? (
                        <div className="absolute left-0 top-1 w-[23px] h-[23px]">
                          <motion.div className="absolute inset-0 rounded-full"
                            animate={{ opacity: [0.4, 0.15, 0.4] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                            style={{ background: dotColour }} />
                          <div className="absolute inset-[4px] rounded-full border-2 flex items-center justify-center"
                            style={{ borderColor: dotColour, background: `color-mix(in srgb, ${dotColour} 18%, ${theme.bgPrimary})` }}>
                            <div className="w-2 h-2 rounded-full"
                              style={{ background: dotColour, boxShadow: `0 0 3px 0.7px color-mix(in srgb, ${dotColour} 28%, transparent)` }} />
                          </div>
                        </div>
                      ) : (
                        <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2"
                          style={{ borderColor: theme.border, background: theme.bgPrimary }} />
                      )}
                      <div className="flex items-baseline gap-3 mb-2">
                        <h4 className="text-[20px] font-semibold" style={s(theme.inkPrimary)}>{step.company}</h4>
                        {active && <span className="text-[11px] font-medium uppercase tracking-wider" style={s(dotColour)}>{step.period}</span>}
                        <span className="text-[11px] font-medium tabular-nums" style={s(theme.inkTertiary)}>{step.year}</span>
                      </div>
                      <p className="text-[12px] font-medium uppercase tracking-wider mb-3" style={s(theme.inkTertiary)}>{step.role}</p>
                      <p className="text-[15px] leading-[1.75]" style={s(theme.inkSecondary)}>{step.summary}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT — photo: sticky so it pins while the timeline scrolls, bleeds to viewport right edge */}
          <div className="hidden lg:block flex-1 relative" style={{ minWidth: 0 }}>
            <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
              {!lampostError && (
                <>
                  <img src="/images/lampost.jpg" alt="" aria-hidden
                    onError={() => setLampostError(true)}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center top" }} />
                  <div className="absolute inset-y-0 left-0 w-[55%]"
                    style={{ background: `linear-gradient(to right, ${theme.bgPrimary}, transparent)` }} />
                  <div className="absolute inset-x-0 top-0 h-28"
                    style={{ background: `linear-gradient(to bottom, ${theme.bgPrimary}, transparent)` }} />
                  <div className="absolute inset-x-0 bottom-0 h-36"
                    style={{ background: `linear-gradient(to top, ${theme.bgPrimary}, transparent)` }} />
                </>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ── POSITIONING ── */}
      <section className="py-24 border-b" style={{ ...bg(theme.bgSecondary), ...brd(theme.border) }}>
        <div className="section-container">
          <FadeIn className="mb-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-5" style={s(theme.inkTertiary)}>Positioning</p>
            <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] leading-[1.18]" style={s(theme.inkPrimary)}>
              What Sentients is.<br />What it is not.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-[1rem] overflow-hidden" style={{ background: theme.border }}>
            <FadeIn>
              <div className="p-8 md:p-10 h-full" style={{ ...bg(theme.bgPrimary) }}>
                <p className="text-[11px] font-medium uppercase tracking-widest mb-6" style={s(theme.inkTertiary)}>Not</p>
                {["A freelancer","A generic AI consultant","An agency","A vendor","A tool recommendation service"].map(n => (
                  <div key={n} className="flex items-center gap-3 py-3 border-b last:border-0" style={{ borderColor: theme.border }}>
                    <span style={s(theme.inkTertiary)}>—</span>
                    <p className="text-[15px]" style={s(theme.inkSecondary)}>{n}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-8 md:p-10 h-full" style={{ ...bg(theme.bgPrimary) }}>
                <p className="text-[11px] font-medium uppercase tracking-widest mb-6" style={s(theme.accentPrimary)}>Yes</p>
                {["A systems studio","A builder of intelligent systems","A bridge between business, product, AI and engineering","A research-informed practitioner","A fractional CTO who ships"].map(y => (
                  <div key={y} className="flex items-center gap-3 py-3 border-b last:border-0" style={{ borderColor: theme.border }}>
                    <span style={s(theme.accentPrimary)}>→</span>
                    <p className="text-[15px] font-medium" style={s(theme.inkPrimary)}>{y}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24" style={{ ...bg(theme.bgPrimary) }}>
        <div className="section-container">
          <FadeIn className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-[1.875rem] font-semibold mb-3" style={s(theme.inkPrimary)}>Ready to build something intelligent?</h2>
              <p className="text-[1.1rem] max-w-[44ch] leading-[1.7]" style={s(theme.inkSecondary)}>Start with a 30-minute discovery call.</p>
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
