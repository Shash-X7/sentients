"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { SITE } from "@/lib/config";

export function ContactCTA() {
  const { theme } = useTheme();
  const isDark = ["dusk","twilight","midnight"].includes(theme.mode ?? "noon");
  return (
    <section className="py-28 relative overflow-hidden img-overlay"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80&auto=format&fit=crop")`,
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
      <div className="absolute inset-0 z-0" style={{ background: isDark ? "rgba(6,6,8,0.88)" : "rgba(10,10,30,0.82)" }} />
      <div className="section-container relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.25,0.46,0.45,0.94] }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/40 mb-6">Ready to build?</p>
          <h2 className="text-[3rem] font-semibold tracking-[-0.02em] text-white mb-6 leading-[1.1]">
            Let&apos;s build something<br />intelligent together.
          </h2>
          <p className="text-[1.1rem] text-white/60 max-w-[44ch] mx-auto mb-12 leading-[1.75]">
            If you&apos;re a founder, CTO or enterprise leader looking to design, build or scale an intelligent system — start with a conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#111111] text-[14px] font-medium transition-all duration-200 hover:bg-white/90 active:scale-[0.98]">
              Book a Discovery Call
            </a>
            <a href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white border border-white/20 text-[14px] font-medium transition-all duration-200 hover:bg-white/10 hover:border-white/40 active:scale-[0.98]">
              {SITE.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
