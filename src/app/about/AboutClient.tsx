"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/ThemeProvider";
import { FOUNDER, TIMELINE, SITE } from "@/lib/config";

const BIO_PARAS = [
  "Shaashwath's career has followed an unusual trajectory. Unlike traditional Product Managers, CTOs or AI Consultants, he has consistently operated across business, technology and execution simultaneously — not sequentially.",
  "It started with building and exiting his own company. That gave him a founder-level understanding of how businesses work beyond the technology — customer acquisition, operations, the cost of every decision.",
  "At RedBus, he built payment infrastructure from scratch across three Southeast Asian markets. At Carl Zeiss, he owned four enterprise products simultaneously on Azure-native architecture. Each phase compounded the previous.",
  "He co-founded Massive Dynamics, an AI-native company where he serves as CTO — building at the intersection of advanced systems and applied intelligence.",
  "At HR Monster, he joined as Agentic Automation Lead and within two months became a critical operator — building the Autonomous QA Intelligence Platform, the Product Management Operating System and the enterprise-scale delivery framework.",
  "In parallel, he built Numocore — a consciousness-inspired AI pipeline — and continues pushing the research frontier through Sentients, his own studio and brainchild.",
];

export function AboutClient() {
  const { theme } = useTheme();
  const [imgError, setImgError] = useState(false);
  const s   = (v: string) => ({ color: v });
  const bg  = (v: string) => ({ backgroundColor: v });
  const brd = (v: string) => ({ borderColor: v });

  return (
    <div style={{ ...bg(theme.bgPrimary), transition: "background-color 1.2s ease" }}>

      {/* ── HERO — full-width photo, fades into page bg at bottom ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "90vh", paddingTop: "64px" }}>

        {/* Nebula atmosphere — local asset */}
        <div className="absolute inset-0"
          style={{ backgroundImage:`url("/assets/pexels-yihan-wang-2148192610-30327373.jpg")`, backgroundSize:"cover", backgroundPosition:"center", opacity: 0.12 }} />

        {/* Full-bleed photo — object-top ensures head is never cropped */}
        {!imgError ? (
          <img
            src="/images/shaashwath.jpg"
            alt="Shaashwath Vijayakumar"
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 10%", filter: "grayscale(100%) contrast(1.05) brightness(0.88)" }}
          />
        ) : (
          /* Gradient placeholder */
          <div className="absolute inset-0"
            style={{ background: `linear-gradient(160deg, color-mix(in srgb, ${theme.accentPrimary} 25%, ${theme.bgPrimary}) 0%, ${theme.bgSecondary} 100%)` }} />
        )}

        {/* Left-side dark vignette — so text is readable */}
        <div className="absolute inset-0"
          style={{ background: `linear-gradient(100deg, color-mix(in srgb, ${theme.bgPrimary} 75%, transparent) 0%, color-mix(in srgb, ${theme.bgPrimary} 40%, transparent) 45%, transparent 70%)` }} />

        {/* Bottom fade — blends photo into page background */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%]"
          style={{ background: `linear-gradient(to bottom, transparent 0%, ${theme.bgPrimary} 100%)` }} />

        {/* Text — overlaid on left */}
        <div className="section-container relative z-10 flex flex-col justify-end h-full" style={{ minHeight: "90vh", paddingBottom: "5rem" }}>
          <FadeIn>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] mb-5" style={s(theme.inkTertiary)}>About</p>
            <h1 className="text-[4rem] md:text-[5rem] font-semibold tracking-[-0.03em] leading-[1.05] mb-6" style={s(theme.inkPrimary)}>
              {FOUNDER.name}
            </h1>
            <p className="text-[1.1rem] max-w-[44ch] leading-[1.7] mb-8" style={s(theme.inkSecondary)}>
              {FOUNDER.title}
            </p>
            <div className="flex flex-col gap-2 mb-10">
              {FOUNDER.philosophy.map(p => (
                <p key={p} className="text-[15px] font-medium" style={s(theme.inkTertiary)}>— {p}</p>
              ))}
            </div>
            {/* Identity chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Sentients", sub: "Founder" },
                { label: "Massive Dynamics", sub: "CTO & Co-founder" },
                { label: "HR Monster", sub: "Agentic Automation Lead" },
              ].map(chip => (
                <div key={chip.label} className="flex flex-col px-4 py-2.5 rounded-[1rem]"
                  style={{ background: `color-mix(in srgb, ${theme.bgPrimary} 70%, transparent)`, border: `0.5px solid ${theme.border}`, backdropFilter: "blur(12px)" }}>
                  <span className="text-[12px] font-semibold" style={s(theme.inkPrimary)}>{chip.label}</span>
                  <span className="text-[10px] font-medium uppercase tracking-wider" style={s(theme.inkTertiary)}>{chip.sub}</span>
                </div>
              ))}
            </div>
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
                    { label: "Product",    value: "Technical Product Owner" },
                    { label: "Automation", value: "AI Systems Automation Engineer" },
                    { label: "Research",   value: "Cognitive AI Systems Engineer" },
                    { label: "Companies",  value: "Sentients · Massive Dynamics" },
                    { label: "Location",   value: SITE.location },
                    { label: "Contact",    value: SITE.email },
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

      {/* ── TIMELINE ── */}
      <section className="py-24 border-b" style={{ ...bg(theme.bgPrimary), ...brd(theme.border) }}>
        <div className="section-container">
          <FadeIn className="mb-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-5" style={s(theme.inkTertiary)}>Career</p>
            <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] leading-[1.18]" style={s(theme.inkPrimary)}>The journey.</h2>
          </FadeIn>
          <div className="relative max-w-[720px]">
            <div className="absolute left-[11px] top-3 bottom-3 w-px" style={{ background: theme.border }} />
            {TIMELINE.map((step, i) => {
              const active = step.period === "Current" || step.period === "Now" || step.period === "Active";
              return (
                <FadeIn key={step.company} delay={i * 0.08}>
                  <div className="relative pl-10 pb-12 last:pb-0">
                    <div className="absolute left-0 top-1 w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center"
                      style={{ borderColor: active ? theme.accentPrimary : theme.border, background: active ? `color-mix(in srgb, ${theme.accentPrimary} 15%, ${theme.bgPrimary})` : theme.bgPrimary }}>
                      {active && <span className="w-2 h-2 rounded-full" style={{ background: theme.accentPrimary }} />}
                    </div>
                    <div className="flex flex-wrap items-baseline gap-3 mb-1">
                      <h3 className="text-[17px] font-semibold" style={s(theme.inkPrimary)}>{step.company}</h3>
                      {active && <span className="text-[10px] font-medium uppercase tracking-wider" style={s(theme.accentPrimary)}>{step.period}</span>}
                    </div>
                    <p className="text-[11px] font-medium uppercase tracking-wider mb-3" style={s(theme.inkTertiary)}>{step.role}</p>
                    <p className="text-[14px] leading-[1.75] max-w-[52ch]" style={s(theme.inkSecondary)}>{step.summary}</p>
                  </div>
                </FadeIn>
              );
            })}
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
