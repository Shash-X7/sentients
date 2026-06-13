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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 img-overlay"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80&auto=format&fit=crop")`,
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
      {/* Mode gradient overlay */}
      <div className="absolute inset-0 z-0" style={{ background: `color-mix(in srgb, ${theme.bgPrimary} 78%, transparent)` }} />
      {/* Subtle grid */}
      <div aria-hidden className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: `linear-gradient(${theme.inkPrimary} 1px,transparent 1px),linear-gradient(90deg,${theme.inkPrimary} 1px,transparent 1px)`, backgroundSize: "72px 72px" }} />

      <div className="section-container relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-[900px]">
          <motion.p variants={item} className="text-[11px] font-medium uppercase tracking-[0.14em] mb-8" style={{ color: theme.inkTertiary }}>
            Sentients · Systems Studio
          </motion.p>
          <motion.h1 variants={item} className="text-[3.75rem] md:text-[4.5rem] font-semibold tracking-[-0.03em] leading-[1.06] mb-8" style={{ color: theme.inkPrimary }}>
            Build Intelligent<br />
            <span className="text-accent-gradient">Systems.</span>
          </motion.h1>
          <motion.p variants={item} className="text-[1.25rem] max-w-[56ch] mb-5 leading-[1.65]" style={{ color: theme.inkSecondary }}>
            Across Product, Automation &amp; Cognition.
          </motion.p>
          <motion.p variants={item} className="text-[1.05rem] max-w-[52ch] mb-12 leading-[1.8]" style={{ color: theme.inkTertiary }}>
            {SITE.description}
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[14px] font-medium transition-all duration-200 hover:opacity-85 active:scale-[0.98]"
              style={{ background: theme.ctaBg, color: theme.ctaText }}>
              Book a Discovery Call →
            </a>
            <Button href="/systems" size="lg" variant="secondary">Explore Systems Built</Button>
          </motion.div>
          <motion.div variants={item} className="mt-16 pt-8 flex flex-wrap gap-x-8 gap-y-3" style={{ borderTop: `1px solid ${theme.border}` }}>
            {["AI Systems Automation Engineer","Technical Product Owner","Cognitive AI Systems Engineer"].map(role => (
              <span key={role} className="text-[11px] font-medium uppercase tracking-wider" style={{ color: theme.inkTertiary }}>{role}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-medium uppercase tracking-widest" style={{ color: theme.inkTertiary }}>Scroll</span>
        <motion.div animate={{ y: [0,6,0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8" style={{ background: `linear-gradient(to bottom, ${theme.border}, transparent)` }} />
      </motion.div>
    </section>
  );
}
