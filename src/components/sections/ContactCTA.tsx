"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { SITE } from "@/lib/config";

/* Reusable neural net SVG — vectorized, rendered purely in SVG */
const NeuralNet = ({ color, opacity = 0.3 }: { color: string; opacity?: number }) => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 500" preserveAspectRatio="xMidYMid slice" aria-hidden style={{ opacity }}>
    <defs>
      <radialGradient id="cta-fade" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor={color} stopOpacity="0.5"/>
        <stop offset="100%" stopColor={color} stopOpacity="0"/>
      </radialGradient>
    </defs>
    {[[80,60,250,140],[250,140,420,60],[420,60,600,140],[600,140,780,60],[80,60,160,220],[250,140,160,220],[250,140,350,300],[420,60,350,300],[420,60,520,220],[600,140,520,220],[600,140,700,300],[780,60,700,300],[160,220,350,300],[520,220,350,300],[520,220,700,300],[160,220,80,380],[350,300,240,420],[350,300,460,420],[700,300,820,380],[520,220,660,420]].map(([x1,y1,x2,y2],i)=>(
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="0.7" strokeOpacity="0.3"/>
    ))}
    {[[80,60],[250,140],[420,60],[600,140],[780,60],[160,220],[350,300],[520,220],[700,300],[80,380],[240,420],[460,420],[660,420],[820,380]].map(([cx,cy],i)=>(
      <circle key={i} cx={cx} cy={cy} r={i%4===0?6:i%2===0?4:3} fill={color} fillOpacity="0.45"/>
    ))}
    <rect width="900" height="500" fill="url(#cta-fade)"/>
  </svg>
);

export function ContactCTA() {
  const { theme } = useTheme();
  const isDark = ["dusk","twilight","midnight"].includes(theme.mode);

  return (
    <section className="relative py-28 overflow-hidden"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80")`,
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: `rgba(${isDark ? "3,3,10" : "6,5,18"},0.88)` }} />
      {/* Neural net */}
      <NeuralNet color={theme.accentPrimary} opacity={0.28} />

      <div className="section-container relative z-10 text-center">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, ease:[0.25,0.46,0.45,0.94] }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/40 mb-6">Ready to build?</p>
          <h2 className="text-[3rem] font-semibold tracking-[-0.02em] text-white mb-6 leading-[1.1]">
            Let&apos;s build something<br />intelligent together.
          </h2>
          <p className="text-[1.1rem] text-white/65 max-w-[44ch] mx-auto mb-12 leading-[1.75]">
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
