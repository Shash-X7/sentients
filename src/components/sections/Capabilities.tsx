"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CAPS = [
  { area:"AI Systems",         items:["Agentic Workflows","Autonomous QA","Process Intelligence","RAG Architectures"] },
  { area:"Enterprise Systems", items:["Supply Chain","Order Management","Payments Infrastructure","Azure Ecosystems"] },
  { area:"Product Systems",    items:["Roadmap Governance","Architecture Planning","Stakeholder Alignment","Delivery at Scale"] },
  { area:"Automation",         items:["Operational Intelligence","Knowledge Systems","Workflow Automation","Engineering Velocity"] },
  { area:"Cognitive Systems",  items:["Memory Architectures","Reasoning Frameworks","Human-AI Interaction","Consciousness-inspired Computing"] },
];

export function Capabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="py-28 bg-white border-t border-[#E5E5E5] overflow-hidden">
      <div className="section-container mb-12">
        <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#888888] mb-5">Capabilities</p>
        <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] text-[#111111] leading-[1.18]">The full surface area.</h2>
      </div>
      <div ref={ref} className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 px-6 md:px-10 lg:px-16 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
          {CAPS.map((cap, i) => (
            <motion.div key={cap.area} initial={{ opacity: 0, x: 32 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex-shrink-0 snap-start w-[280px] md:w-[300px] bg-[#FAFAFA] border border-[#E5E5E5] rounded-[1rem] p-6 shadow-sm">
              <p className="text-[0.75rem] font-medium uppercase tracking-widest text-[#888888] mb-5">{cap.area}</p>
              <ul className="flex flex-col gap-2.5">
                {cap.items.map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-[0.9375rem] text-[#555555]">
                    <span className="w-1 h-1 rounded-full bg-[#CCCCCC] flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="pointer-events-none absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
