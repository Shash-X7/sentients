"use client";
import { motion } from "framer-motion";
import { SITE } from "@/lib/config";

export function ContactCTA() {
  return (
    <section className="py-28 bg-[#111111] overflow-hidden relative">
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(ellipse, #2563EB 0%, transparent 70%)" }} />
      <div className="section-container relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}>
          <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-white/40 mb-6">Ready to build?</p>
          <h2 className="text-[3rem] font-semibold tracking-[-0.02em] text-white mb-6 leading-[1.1]">
            Let&apos;s build something<br />intelligent together.
          </h2>
          <p className="text-[1.125rem] text-white/60 max-w-[44ch] mx-auto mb-12 leading-[1.75]">
            If you&apos;re a founder, CTO or enterprise leader looking to design, build or scale an intelligent system — start with a conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[999px] bg-white text-[#111111] text-[0.9375rem] font-medium transition-all duration-200 hover:bg-white/90 active:scale-[0.98]">
              Book a Discovery Call
            </a>
            <a href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[999px] bg-transparent text-white border border-white/20 text-[0.9375rem] font-medium transition-all duration-200 hover:bg-white/10 hover:border-white/40 active:scale-[0.98]">
              {SITE.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
