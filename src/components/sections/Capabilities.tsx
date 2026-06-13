"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const CAPS = [
  { area:"AI Systems",         items:["Agentic Workflows","Autonomous QA","Process Intelligence","RAG Architectures"] },
  { area:"Enterprise Systems", items:["Supply Chain","Order Management","Payments Infrastructure","Azure Ecosystems"] },
  { area:"Product Systems",    items:["Roadmap Governance","Architecture Planning","Stakeholder Alignment","Delivery at Scale"] },
  { area:"Automation",         items:["Operational Intelligence","Knowledge Systems","Workflow Automation","Engineering Velocity"] },
  { area:"Cognitive Systems",  items:["Memory Architectures","Reasoning Frameworks","Human-AI Interaction","Consciousness-inspired Computing"] },
];

/* Inline neural net for capabilities section */
const MiniNet = ({ color }: { color: string }) => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice" aria-hidden>
    {[[0,150,200,80],[200,80,400,150],[400,150,600,60],[600,60,800,150],[800,150,1000,80],[1000,80,1200,150],[200,80,300,220],[400,150,300,220],[400,150,550,240],[600,60,550,240],[600,60,750,230],[800,150,750,230],[1000,80,900,240]].map(([x1,y1,x2,y2],i)=>(
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="0.6" strokeOpacity="0.18"/>
    ))}
    {[[0,150],[200,80],[400,150],[600,60],[800,150],[1000,80],[1200,150],[300,220],[550,240],[750,230],[900,240]].map(([cx,cy],i)=>(
      <circle key={i} cx={cx} cy={cy} r={i%3===0?5:3} fill={color} fillOpacity="0.22"/>
    ))}
  </svg>
);

export function Capabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { theme } = useTheme();

  return (
    <section className="relative py-28 overflow-hidden" style={{ backgroundColor: theme.bgPrimary, borderTop: `1px solid ${theme.border}`, transition: "all 1.2s ease" }}>
      {/* Neural net background — very subtle */}
      <MiniNet color={theme.accentPrimary} />

      <div className="section-container relative z-10 mb-12">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-5" style={{ color: theme.inkTertiary }}>Capabilities</p>
        <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] leading-[1.18]" style={{ color: theme.inkPrimary }}>The full surface area.</h2>
      </div>

      <div ref={ref} className="relative z-10">
        <div className="flex gap-4 overflow-x-auto pb-4 px-6 md:px-10 lg:px-16 snap-x snap-mandatory" style={{ scrollbarWidth:"none" }}>
          {CAPS.map((cap, i) => (
            <motion.div key={cap.area} initial={{ opacity:0, x:32 }} animate={inView ? { opacity:1, x:0 } : {}}
              transition={{ delay:i*0.08, duration:0.5, ease:[0.25,0.46,0.45,0.94] }}
              className="flex-shrink-0 snap-start w-[280px] md:w-[300px] rounded-[1rem] p-6"
              style={{ backgroundColor: theme.bgSecondary, border:`0.5px solid ${theme.border}` }}>
              <p className="text-[11px] font-medium uppercase tracking-widest mb-5" style={{ color:theme.inkTertiary }}>{cap.area}</p>
              <ul className="flex flex-col gap-2.5">
                {cap.items.map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px]" style={{ color:theme.inkSecondary }}>
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background:theme.borderStrong }} />{item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="pointer-events-none absolute left-0 top-0 bottom-4 w-12" style={{ background:`linear-gradient(to right, ${theme.bgPrimary}, transparent)` }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-16" style={{ background:`linear-gradient(to left, ${theme.bgPrimary}, transparent)` }} />
      </div>
    </section>
  );
}
