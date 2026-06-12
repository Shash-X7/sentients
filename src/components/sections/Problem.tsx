"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

const SILOS = [
  { label:"Business",    desc:"Defines outcomes without system constraints" },
  { label:"Product",     desc:"Translates intent without engineering depth"  },
  { label:"Engineering", desc:"Builds systems without product context"       },
  { label:"AI",          desc:"Optimises metrics without organisational fit" },
];

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  return (
    <section className="py-28 bg-white border-t border-[#E5E5E5]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <FadeIn>
              <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#888888] mb-5">The Problem</p>
              <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] text-[#111111] mb-8 leading-[1.18]">
                Most intelligent systems<br />fail before they ship.
              </h2>
              <p className="text-[1.125rem] text-[#555555] leading-[1.75] mb-6 max-w-[44ch]">
                Not because of bad engineers. Not because of bad ideas. Because Business, Product, Engineering and AI operate in silos — each optimising for its own horizon.
              </p>
              <p className="text-[1.125rem] text-[#555555] leading-[1.75] max-w-[44ch]">
                Sentients exists to bridge all four — designing systems where intelligence, execution and strategy are a single continuous surface.
              </p>
            </FadeIn>
          </div>
          <div ref={ref} className="flex flex-col gap-3">
            {SILOS.map((silo, i) => (
              <motion.div key={silo.label} initial={{ opacity:0, x:24 }} animate={inView ? { opacity:1, x:0 } : {}}
                transition={{ delay:0.1+i*0.1, duration:0.5, ease:[0.25,0.46,0.45,0.94] }}
                className="flex items-center justify-between px-6 py-4 rounded-[1rem] bg-[#FAFAFA] border border-[#E5E5E5] shadow-sm">
                <span className="text-[1rem] font-medium text-[#111111]">{silo.label}</span>
                <span className="text-[0.9375rem] text-[#888888] text-right max-w-[26ch]">{silo.desc}</span>
              </motion.div>
            ))}
            <motion.div initial={{ opacity:0, scaleX:0 }} animate={inView ? { opacity:1, scaleX:1 } : {}}
              transition={{ delay:0.6, duration:0.6, ease:[0.25,0.46,0.45,0.94] }}
              className="mt-4 px-6 py-4 rounded-[1rem] bg-[#2563EB]/5 border border-[#2563EB]/20 flex items-center justify-between">
              <span className="text-[1rem] font-medium text-[#2563EB]">Sentients</span>
              <span className="text-[0.9375rem] text-[#2563EB]/70">Bridges all four ↗</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
