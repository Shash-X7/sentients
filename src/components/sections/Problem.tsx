"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { useTheme } from "@/components/ThemeProvider";

const SILOS = [
  { label: "Business",    desc: "Defines outcomes without system constraints" },
  { label: "Product",     desc: "Translates intent without engineering depth"  },
  { label: "Engineering", desc: "Builds systems without product context"       },
  { label: "AI",          desc: "Optimises metrics without organisational fit" },
];

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { theme } = useTheme();

  return (
    <section className="py-28" style={{ backgroundColor: theme.bgPrimary, borderTop: `1px solid ${theme.border}`, transition: "all 1.2s ease" }}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <FadeIn>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-5" style={{ color: theme.inkTertiary }}>The Problem</p>
              <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] mb-8 leading-[1.18]" style={{ color: theme.inkPrimary }}>
                Most intelligent systems<br />fail before they ship.
              </h2>
              <p className="text-[1.1rem] leading-[1.75] mb-6 max-w-[44ch]" style={{ color: theme.inkSecondary }}>
                Not because of bad engineers. Not because of bad ideas. Because Business, Product, Engineering and AI operate in silos.
              </p>
              <p className="text-[1.1rem] leading-[1.75] max-w-[44ch]" style={{ color: theme.inkSecondary }}>
                Sentients exists to bridge all four — designing systems where intelligence, execution and strategy are a single continuous surface.
              </p>
            </FadeIn>
          </div>
          <div ref={ref} className="flex flex-col gap-3">
            {SILOS.map((silo, i) => (
              <motion.div key={silo.label} initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: [0.25,0.46,0.45,0.94] }}
                className="flex items-center justify-between px-6 py-4 rounded-[1rem]"
                style={{ background: theme.cardBg, border: `0.5px solid ${theme.border}` }}>
                <span className="text-[15px] font-medium" style={{ color: theme.inkPrimary }}>{silo.label}</span>
                <span className="text-[13px] text-right max-w-[26ch]" style={{ color: theme.inkTertiary }}>{silo.desc}</span>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-2 px-6 py-4 rounded-[1rem] flex items-center justify-between"
              style={{ background: `color-mix(in srgb, ${theme.accentPrimary} 8%, transparent)`, border: `0.5px solid color-mix(in srgb, ${theme.accentPrimary} 25%, transparent)` }}>
              <span className="text-[15px] font-medium" style={{ color: theme.accentPrimary }}>Sentients</span>
              <span className="text-[13px]" style={{ color: `color-mix(in srgb, ${theme.accentPrimary} 70%, transparent)` }}>Bridges all four ↗</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
