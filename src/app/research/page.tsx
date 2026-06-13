"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { useTheme } from "@/components/ThemeProvider";
import { SITE } from "@/lib/config";

const FOCUS = [
  { id:"cognitive",  title:"Cognitive Architectures",            description:"Exploring separation of memory, reasoning and output as distinct architectural concerns — how an AI system's structure can mirror layered cognition." },
  { id:"memory",     title:"Memory Systems",                     description:"What does persistent, structured, contextually-weighted memory look like at the architectural level — and how does it transform reasoning quality?" },
  { id:"reasoning",  title:"Reasoning Frameworks",               description:"Designing explicit reasoning layers that operate on structured knowledge rather than implicitly within a generation pass." },
  { id:"human-ai",   title:"Human-AI Interaction",               description:"Interaction models for systems with genuine reasoning and memory — where the human and the system co-construct understanding." },
  { id:"conscious",  title:"Consciousness-Inspired Computing",   description:"Applying attention, integration and predictive processing from consciousness research as design inspiration for AI architectures." },
  { id:"emergence",  title:"Emergence & Knowledge Representation",description:"How complex behaviours emerge from structured knowledge representations — the boundary between retrieval and genuine understanding." },
];

const PROJECTS = [
  { name:"Numocore",           subtitle:"Consciousness-based AI pipeline",  description:"An AI pipeline built around consciousness-inspired architecture — a chatbot system that reasons from awareness primitives rather than pure retrieval. More details to follow.", status:"Research · Placeholder", accent:"purple" },
  { name:"Massive Dynamics",   subtitle:"AI company · CTO & Co-founder",   description:"Co-founded AI-native company building at the intersection of advanced systems and applied intelligence. Research and product intersect here.", status:"Active company", accent:"blue" },
  { name:"Sentients Research",  subtitle:"The studio's research track",     description:"The broader research practice behind Sentients — connecting cognitive science, information theory and systems architecture to build the foundations for AI systems that go beyond current paradigms.", status:"Ongoing", accent:"purple" },
];

export default function ResearchPage() {
  const { theme } = useTheme();
  const s = (v: string) => ({ color: v });
  const bg = (v: string) => ({ backgroundColor: v });
  const brd = (v: string) => ({ borderColor: v });

  return (
    <div className="pt-16" style={{ ...bg(theme.bgPrimary), transition: "background-color 1.2s ease" }}>

      {/* Dark hero with Unsplash BG */}
      <section className="py-28 relative overflow-hidden img-overlay"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1600&q=80&auto=format&fit=crop")`,
          backgroundSize: "cover", backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 z-0" style={{ background: "rgba(6,6,12,0.88)" }} />
        <div className="section-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.25,0.46,0.45,0.94] }}>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/40 mb-5">Cognitive AI Research</p>
            <h1 className="text-[3.75rem] font-semibold tracking-[-0.025em] text-white max-w-[18ch] leading-[1.08] mb-6">
              Beyond automation.<br />
              <span style={{ background: `linear-gradient(135deg,${theme.accentSecondary},${theme.accentPrimary})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Towards cognition.
              </span>
            </h1>
            <p className="text-[1.15rem] text-white/60 max-w-[50ch] leading-[1.7]">
              A separate pillar from consulting — research at the frontier of what AI systems can do. Memory, reasoning, consciousness, emergence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research philosophy */}
      <section className="py-28 border-b" style={{ ...bg(theme.bgSecondary), ...brd(theme.border) }}>
        <div className="section-container">
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
                    style={{ ...bg(theme.bgPrimary), border: `0.5px solid ${theme.border}` }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: theme.accentSecondary }} />
                    <p className="text-[15px] font-medium" style={s(theme.inkPrimary)}>{p}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Focus areas */}
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
                  style={{ ...bg(theme.bgSecondary), border: `0.5px solid ${theme.border}` }}>
                  <div className="w-2 h-2 rounded-full mb-5" style={{ background: theme.accentSecondary }} />
                  <h3 className="text-[15px] font-semibold mb-3" style={s(theme.inkPrimary)}>{area.title}</h3>
                  <p className="text-[13px] leading-[1.75]" style={s(theme.inkSecondary)}>{area.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Active projects */}
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
                  <div className="rounded-[1rem] p-8 h-full transition-colors duration-300"
                    style={{ ...bg(theme.bgPrimary), border: `0.5px solid ${theme.border}` }}>
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

      {/* Collaboration CTA */}
      <section className="py-28 relative overflow-hidden img-overlay"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80&auto=format&fit=crop")`,
          backgroundSize: "cover", backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 z-0" style={{ background: "rgba(6,6,12,0.90)" }} />
        <div className="section-container relative z-10 text-center">
          <FadeIn>
            <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] text-white mb-6 leading-[1.15]">Interested in collaborating<br />on this research?</h2>
            <p className="text-[1.05rem] text-white/60 max-w-[44ch] mx-auto mb-10 leading-[1.75]">Deep-tech collaborations, research partnerships and university engagements welcome.</p>
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
