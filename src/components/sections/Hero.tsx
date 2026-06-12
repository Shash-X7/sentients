"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE }   from "@/lib/config";

const ArrowRight = () => (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const container = { hidden:{}, show:{ transition:{ staggerChildren:0.12, delayChildren:0.1 } } };
const item = { hidden:{ opacity:0, y:22 }, show:{ opacity:1, y:0, transition:{ duration:0.6, ease:[0.25,0.46,0.45,0.94] } } };

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage:"linear-gradient(#111111 1px, transparent 1px), linear-gradient(90deg, #111111 1px, transparent 1px)", backgroundSize:"80px 80px" }} />
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full opacity-[0.06]"
        style={{ background:"radial-gradient(circle, #2563EB 0%, transparent 70%)" }} />
      <div className="section-container relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-[900px]">
          <motion.p variants={item} className="text-[0.75rem] font-medium uppercase tracking-[0.14em] text-[#888888] mb-8">
            Sentients · Systems Studio
          </motion.p>
          <motion.h1 variants={item} className="text-[3.75rem] md:text-[4.5rem] font-semibold tracking-[-0.03em] text-[#111111] leading-[1.06] mb-8">
            Build Intelligent<br /><span className="text-gradient-blue">Systems.</span>
          </motion.h1>
          <motion.p variants={item} className="text-[1.25rem] text-[#555555] max-w-[56ch] mb-6 leading-[1.65]">
            Across Product, Automation &amp; Cognition.
          </motion.p>
          <motion.p variants={item} className="text-[1.125rem] text-[#888888] max-w-[52ch] mb-12 leading-[1.75]">
            {SITE.description}
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Button href={SITE.calendly} external size="lg" icon={<ArrowRight />}>Book a Discovery Call</Button>
            <Button href="/systems" size="lg" variant="secondary">Explore Systems Built</Button>
          </motion.div>
          <motion.div variants={item} className="mt-16 pt-8 border-t border-[#E5E5E5] flex flex-wrap gap-x-8 gap-y-3">
            {["AI Systems Automation Engineer","Technical Product Owner","Cognitive AI Systems Engineer"].map(role => (
              <span key={role} className="text-[0.8125rem] font-medium text-[#888888] uppercase tracking-wider">{role}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.4, duration:0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[0.75rem] font-medium text-[#888888] uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y:[0,6,0] }} transition={{ repeat:Infinity, duration:1.8, ease:"easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#E5E5E5] to-transparent" />
      </motion.div>
    </section>
  );
}
