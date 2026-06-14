"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { SITE } from "@/lib/config";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25,0.46,0.45,0.94] } } };

export function Hero() {
  const { theme, mode } = useTheme();

  // Cursor-reactive orb refs
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 }); // normalised 0-1
  const rafRef   = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    // Smooth lerp loop — moves orbs toward cursor
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    let cur1x = 0, cur1y = 0, cur2x = 1, cur2y = 1, cur3x = 0.8, cur3y = 0.5;

    const animate = () => {
      const { x, y } = mouseRef.current;
      // Each orb follows at a different speed + offset
      cur1x = lerp(cur1x, x * 0.6 - 0.2,  0.025);
      cur1y = lerp(cur1y, y * 0.5 - 0.15, 0.025);
      cur2x = lerp(cur2x, x * 0.4 + 0.4,  0.018);
      cur2y = lerp(cur2y, y * 0.4 + 0.4,  0.018);
      cur3x = lerp(cur3x, x * 0.5 + 0.3,  0.022);
      cur3y = lerp(cur3y, y * 0.6 + 0.1,  0.022);

      if (orb1Ref.current) {
        orb1Ref.current.style.left = `${cur1x * 100}%`;
        orb1Ref.current.style.top  = `${cur1y * 100}%`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.left = `${cur2x * 100}%`;
        orb2Ref.current.style.top  = `${cur2y * 100}%`;
      }
      if (orb3Ref.current) {
        orb3Ref.current.style.left = `${cur3x * 100}%`;
        orb3Ref.current.style.top  = `${cur3y * 100}%`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      style={{ background: theme.heroGradient, transition: "background 1.2s ease" }}>



      {/* ── CURSOR-REACTIVE LIGHT LEAK ORBS ── */}

      {/* Orb 1 — large primary, follows cursor slowly */}
      <div ref={orb1Ref} aria-hidden className="absolute pointer-events-none"
        style={{
          width: "80vw", height: "80vw",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, color-mix(in srgb, ${theme.accentPrimary} ${mode === "dawn" ? "55" : "30"}%, transparent) 0%, transparent 65%)`,
          borderRadius: "50%",
          transition: "background 1.2s ease",
        }} />

      {/* Orb 2 — secondary accent, drifts to opposite corner */}
      <div ref={orb2Ref} aria-hidden className="absolute pointer-events-none"
        style={{
          width: "70vw", height: "70vw",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, color-mix(in srgb, ${theme.accentSecondary} ${mode === "dawn" ? "45" : "22"}%, transparent) 0%, transparent 62%)`,
          borderRadius: "50%",
          transition: "background 1.2s ease",
        }} />

      {/* Orb 3 — smaller, faster, fills midfield */}
      <div ref={orb3Ref} aria-hidden className="absolute pointer-events-none"
        style={{
          width: "50vw", height: "50vw",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, color-mix(in srgb, ${theme.accentPrimary} ${mode === "dawn" ? "35" : "14"}%, transparent) 0%, transparent 55%)`,
          borderRadius: "50%",
          transition: "background 1.2s ease",
        }} />

      {/* Content */}
      <div className="section-container relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-[900px]">

          <motion.p variants={item} className="text-[11px] font-medium uppercase tracking-[0.14em] mb-8"
            style={{ color: theme.inkTertiary }}>
            Sentients · Systems Studio
          </motion.p>

          <motion.h1 variants={item}
            className="text-[3.75rem] md:text-[4.5rem] font-semibold tracking-[-0.03em] leading-[1.06] mb-8"
            style={{ color: theme.inkPrimary }}>
            Build Intelligent
            <br />
            <span className="hero-gradient-text" style={{ "--hero-grad": theme.accentGradient } as React.CSSProperties}>
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
            <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[14px] font-medium transition-all duration-200 hover:opacity-85 active:scale-[0.98]"
              style={{ background: theme.ctaBg, color: theme.ctaText }}>
              Book a Discovery Call →
            </a>
            <a href="/systems"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[14px] font-medium transition-all duration-200 hover:opacity-75 active:scale-[0.98]"
              style={{ background:"transparent", border:`1.5px solid ${theme.outlineBorder}`, color:theme.outlineText }}>
              Explore Systems Built
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
