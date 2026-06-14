"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { useTheme } from "@/components/ThemeProvider";
import { SITE } from "@/lib/config";

const FOCUS = [
  { id:"cognitive",  title:"Cognitive Architectures",             description:"Exploring separation of memory, reasoning and output as distinct architectural concerns, showing how an AI system's structure can mirror layered cognition." },
  { id:"memory",     title:"Memory Systems",                      description:"What does persistent, structured, contextually-weighted memory look like at the architectural level, and how does it transform reasoning quality?" },
  { id:"reasoning",  title:"Reasoning Frameworks",                description:"Designing explicit reasoning layers that operate on structured knowledge rather than implicitly within a generation pass." },
  { id:"human-ai",   title:"Human-AI Interaction",                description:"Interaction models for systems with genuine reasoning and memory, where the human and the system co-construct understanding." },
  { id:"conscious",  title:"Consciousness-Inspired Computing",    description:"Applying attention, integration and predictive processing from consciousness research as design inspiration for AI architectures." },
  { id:"emergence",  title:"Emergence & Knowledge Representation",description:"How complex behaviours emerge from structured knowledge representations, at the boundary between retrieval and genuine understanding." },
];

const PROJECTS = [
  { name:"Numocore",           subtitle:"Consciousness-based AI pipeline",  description:"An AI pipeline built around consciousness-inspired architecture, a chatbot system that reasons from awareness primitives rather than pure retrieval. More details to follow.", status:"Research · Placeholder", accent:"purple" },
  { name:"Massive Dynamics",   subtitle:"AI company · CTO & Co-founder",   description:"Co-founded AI-native company building at the intersection of advanced systems and applied intelligence. Research and product intersect here.", status:"Active company", accent:"blue" },
  { name:"Sentients Research",  subtitle:"The studio's research track",     description:"The broader research practice behind Sentients, connecting cognitive science, information theory and systems architecture to build foundations for AI systems beyond current paradigms.", status:"Ongoing", accent:"purple" },
];

/* Neural net SVG overlay — vectorized dots + connections at 30% opacity */
const NeuralNetOverlay = ({ color }: { color: string }) => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" aria-hidden>
    <defs>
      <radialGradient id="nn-fade" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={color} stopOpacity="0.35"/>
        <stop offset="100%" stopColor={color} stopOpacity="0"/>
      </radialGradient>
    </defs>
    {/* Connection lines */}
    {[[100,80,300,160],[300,160,500,80],[500,80,700,160],[100,80,200,250],[300,160,200,250],[300,160,400,300],[500,80,400,300],[500,80,600,250],[700,160,600,250],[200,250,400,300],[600,250,400,300],[200,250,100,360],[400,300,300,380],[400,300,500,380],[600,250,700,340]].map(([x1,y1,x2,y2],i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="0.8" strokeOpacity="0.25"/>
    ))}
    {/* Nodes */}
    {[[100,80],[300,160],[500,80],[700,160],[200,250],[400,300],[600,250],[100,360],[300,380],[500,380],[700,340]].map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r={i%3===0?5:3} fill={color} fillOpacity="0.4"/>
    ))}
    <rect width="800" height="400" fill="url(#nn-fade)"/>
  </svg>
);

export default function ResearchPage() {
  const { theme } = useTheme();
  const s   = (v: string) => ({ color: v });
  const bg  = (v: string) => ({ backgroundColor: v });
  const brd = (v: string) => ({ borderColor: v });
  const isDark = ["dusk","twilight","midnight"].includes(theme.mode);

  return (
    <div className="pt-16" style={{ ...bg(theme.bgPrimary), transition: "background-color 1.2s ease" }}>

      {/* ── Hero — prosopo plasma neuron: consciousness / cognition ── */}
      <section className="relative py-28 overflow-hidden"
        style={{ backgroundImage:`url("https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80")`, backgroundSize:"cover", backgroundPosition:"center" }}>
        <div className="absolute inset-0" style={{ background:`rgba(${isDark?"4,4,12":"8,6,20"},0.87)` }} />
        {/* Neural net overlay on hero */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <NeuralNetOverlay color={theme.accentSecondary} />
        </div>
        <div className="section-container relative z-10">
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, ease:[0.25,0.46,0.45,0.94] }}>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/40 mb-5">Cognitive AI Research</p>
            <h1 className="text-[3.75rem] font-semibold tracking-[-0.025em] text-white max-w-[18ch] leading-[1.08] mb-6">
              Beyond automation.<br />
              <span style={{ background:`linear-gradient(135deg,${theme.accentSecondary},${theme.accentPrimary})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                Towards cognition.
              </span>
            </h1>
            <p className="text-[1.15rem] text-white/65 max-w-[50ch] leading-[1.7]">
              A separate pillar from consulting. Research at the frontier of what AI systems can do: memory, reasoning, consciousness, emergence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Philosophy — neural net BG ── */}
      <section className="relative py-28 border-b overflow-hidden" style={{ ...bg(theme.bgSecondary), ...brd(theme.border) }}>
        <div className="absolute inset-0 opacity-[0.18] pointer-events-none">
          <NeuralNetOverlay color={theme.accentPrimary} />
        </div>
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-5" style={s(theme.inkTertiary)}>The Research Question</p>
              <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] leading-[1.18] mb-8" style={s(theme.inkPrimary)}>Why current AI systems hit a ceiling.</h2>
              <p className="text-[1.05rem] leading-[1.75] mb-5 max-w-[44ch]" style={s(theme.inkSecondary)}>
                Today&apos;s AI systems are extraordinary retrieval machines with a generation layer. They are not reasoning systems. They have no persistent memory. They cannot hold structured understanding of relationships between ideas.
              </p>
              <p className="text-[1.05rem] leading-[1.75] max-w-[44ch]" style={s(theme.inkSecondary)}>
                This research track explores the architectural foundations for systems that can genuinely reason — drawing from cognitive science, information theory and systems architecture.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-4">
                {["Systems over models.","Architecture over prompting.","Reasoning over retrieval.","Memory over context windows."].map(p => (
                  <div key={p} className="px-6 py-4 rounded-[1rem] flex items-center gap-4"
                    style={{ ...bg(theme.bgPrimary), border:`0.5px solid ${theme.border}` }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background:theme.accentSecondary }} />
                    <p className="text-[15px] font-medium" style={s(theme.inkPrimary)}>{p}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Focus areas ── */}
      <section className="py-28 border-b" style={{ ...bg(theme.bgPrimary), ...brd(theme.border) }}>
        <div className="section-container">
          <FadeIn className="mb-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-5" style={s(theme.inkTertiary)}>Focus Areas</p>
            <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] leading-[1.18]" style={s(theme.inkPrimary)}>What the research covers.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOCUS.map((area, i) => (
              <FadeIn key={area.id} delay={i * 0.07}>
                <div className="rounded-[1rem] p-7 h-full transition-colors duration-300"
                  style={{ ...bg(theme.bgSecondary), border:`0.5px solid ${theme.border}` }}>
                  <div className="w-2 h-2 rounded-full mb-5" style={{ background:theme.accentSecondary }} />
                  <h3 className="text-[15px] font-semibold mb-3" style={s(theme.inkPrimary)}>{area.title}</h3>
                  <p className="text-[13px] leading-[1.75]" style={s(theme.inkSecondary)}>{area.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Active projects ── */}
      <section className="py-28 border-b" style={{ ...bg(theme.bgSecondary), ...brd(theme.border) }}>
        <div className="section-container">
          <FadeIn className="mb-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-5" style={s(theme.inkTertiary)}>Active Projects</p>
            <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] leading-[1.18]" style={s(theme.inkPrimary)}>Where the research lives.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((proj, i) => {
              const ac = proj.accent === "purple" ? theme.accentSecondary : theme.accentPrimary;
              return (
                <FadeIn key={proj.name} delay={i * 0.1}>
                  <div className="rounded-[1rem] p-8 h-full" style={{ ...bg(theme.bgPrimary), border:`0.5px solid ${theme.border}` }}>
                    <span className="text-[11px] font-medium uppercase tracking-widest block mb-6" style={s(ac)}>{proj.status}</span>
                    <h3 className="text-[1.875rem] font-semibold mb-2" style={s(theme.inkPrimary)}>{proj.name}</h3>
                    <p className="text-[13px] font-medium mb-5" style={s(theme.inkTertiary)}>{proj.subtitle}</p>
                    <p className="text-[13px] leading-[1.75]" style={s(theme.inkSecondary)}>{proj.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA — yihan-wang deep red/blue nebula ── */}
      <section className="relative py-28 overflow-hidden"
        style={{ backgroundImage:`url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80")`, backgroundSize:"cover", backgroundPosition:"center top" }}>
        <div className="absolute inset-0" style={{ background:`rgba(${isDark?"3,3,10":"6,4,18"},0.91)` }} />
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <NeuralNetOverlay color={theme.accentPrimary} />
        </div>
        <div className="section-container relative z-10 text-center">
          <FadeIn>
            <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] text-white mb-6 leading-[1.15]">
              Interested in collaborating<br />on this research?
            </h2>
            <p className="text-[1.05rem] text-white/65 max-w-[44ch] mx-auto mb-10 leading-[1.75]">
              Deep-tech collaborations, research partnerships and university engagements welcome.
            </p>
            <a href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#111111] text-[14px] font-medium transition-all duration-200 hover:bg-white/90 active:scale-[0.98]">
              Get in touch
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
