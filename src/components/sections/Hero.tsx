"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/ThemeProvider";
import { SITE } from "@/lib/config";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25,0.46,0.45,0.94] } } };

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      style={{ background: theme.heroGradient, transition: "background 1.2s ease" }}>

      {/* Subtle dot grid — scales opacity with mode */}
      <div aria-hidden className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${theme.inkTertiary} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          opacity: 0.08,
        }} />

      {/* Soft radial glow in accent colour — top-left corner */}
      <div aria-hidden className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, color-mix(in srgb, ${theme.accentPrimary} 18%, transparent) 0%, transparent 70%)`,
        }} />

      {/* Second glow — bottom-right, accent2 */}
      <div aria-hidden className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, color-mix(in srgb, ${theme.accentSecondary} 10%, transparent) 0%, transparent 70%)`,
        }} />

      <div className="section-container relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-[900px]">

          <motion.p variants={item} className="text-[11px] font-medium uppercase tracking-[0.14em] mb-8"
            style={{ color: theme.inkTertiary }}>
            Sentients · Systems Studio
          </motion.p>

          <motion.h1 variants={item}
            className="text-[3.75rem] md:text-[4.5rem] font-semibold tracking-[-0.03em] leading-[1.06] mb-8"
            style={{ color: theme.inkPrimary }}>
            Build Intelligent<br />
            <span style={{
              background: theme.accentGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Systems.
            </span>
          </motion.h1>

          <motion.p variants={item} className="text-[1.25rem] max-w-[56ch] mb-5 leading-[1.65]"
            style={{ color: theme.inkSecondary }}>
            Across Product, Automation &amp; Cognition.
          </motion.p>

          <motion.p variants={item} className="text-[1.05rem] max-w-[52ch] mb-12 leading-[1.8]"
            style={{ color: theme.inkTertiary }}>
            {SITE.description}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            {/* Primary CTA */}
            <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[14px] font-medium transition-all duration-200 hover:opacity-85 active:scale-[0.98]"
              style={{ background: theme.ctaBg, color: theme.ctaText }}>
              Book a Discovery Call →
            </a>
            {/* Secondary CTA — fully themed */}
            <a href="/systems"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[14px] font-medium transition-all duration-200 hover:opacity-80 active:scale-[0.98]"
              style={{
                background: "transparent",
                border: `1.5px solid ${theme.outlineBorder}`,
                color: theme.outlineText,
              }}>
              Explore Systems Built
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-16 pt-8 flex flex-wrap gap-x-8 gap-y-3"
            style={{ borderTop: `1px solid ${theme.border}` }}>
            {["AI Systems Automation Engineer","Technical Product Owner","Cognitive AI Systems Engineer"].map(role => (
              <span key={role} className="text-[11px] font-medium uppercase tracking-wider"
                style={{ color: theme.inkTertiary }}>{role}</span>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-medium uppercase tracking-widest"
          style={{ color: theme.inkTertiary }}>Scroll</span>
        <motion.div animate={{ y: [0,6,0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: `linear-gradient(to bottom, ${theme.borderStrong}, transparent)` }} />
      </motion.div>
    </section>
  );
}
