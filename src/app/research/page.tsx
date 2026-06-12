"use client";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SITE } from "@/lib/config";

const FOCUS = [
  { id:"cognitive-architectures",  title:"Cognitive Architectures",           description:"How should an AI system's internal structure mirror the layered nature of human cognition? Exploring separation of memory, reasoning and output as distinct architectural concerns." },
  { id:"memory-systems",           title:"Memory Systems",                     description:"Most AI systems are stateless. What does persistent, structured, contextually-weighted memory look like at the architectural level — and how does it change the quality of reasoning?" },
  { id:"reasoning-frameworks",     title:"Reasoning Frameworks",               description:"Beyond chain-of-thought prompting — designing explicit reasoning layers that operate on structured knowledge rather than implicitly within a generation pass." },
  { id:"human-ai-interaction",     title:"Human-AI Interaction",               description:"How do cognitive systems change the nature of human-AI collaboration? Exploring interfaces and interaction models for systems with genuine reasoning and memory." },
  { id:"consciousness-computing",  title:"Consciousness-Inspired Computing",   description:"Not AGI speculation — but the application of consciousness research (attention, integration, predictive processing) as design inspiration for AI architectures." },
  { id:"emergence",                title:"Emergence & Knowledge Representation",description:"How do complex system behaviours emerge from structured knowledge representations? Exploring the boundary between retrieval and genuine understanding." },
];

const PROJECTS = [
  { name:"Numocore",          subtitle:"Cognitive reasoning platform",   description:"Research and platform development around advanced cognitive architectures and intelligent reasoning frameworks. Numocore explores how AI systems can reason with continuity rather than retrieve with sophistication.", status:"Active research",    accent:"purple" },
  { name:"MyItihas",          subtitle:"Structured knowledge & cognition",description:"A knowledge platform where relationships between information are first-class architectural citizens. MyItihas explores contextual understanding through structured knowledge graphs rather than vector-space retrieval.", status:"Active development", accent:"purple" },
  { name:"Sentients Research",subtitle:"The studio's research track",    description:"The broader research practice behind Sentients — connecting cognitive science, information theory and systems architecture to build the foundations for AI systems that go beyond current paradigms.", status:"Ongoing",            accent:"blue" },
];

export default function ResearchPage() {
  return (
    <div className="pt-16">
      <section className="py-28 bg-[#111111] relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.08]" style={{ background:"radial-gradient(circle, #7C3AED 0%, transparent 70%)" }} />
        <div className="section-container relative z-10">
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, ease:[0.25,0.46,0.45,0.94] }}>
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.14em] text-white/40 mb-5">Cognitive AI Research</p>
            <h1 className="text-[3.75rem] font-semibold tracking-[-0.025em] text-white max-w-[18ch] leading-[1.08] mb-6">
              Beyond automation.<br />
              <span style={{ background:"linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Towards cognition.</span>
            </h1>
            <p className="text-[1.25rem] text-white/60 max-w-[50ch] leading-[1.7]">A separate pillar from consulting — research and development at the frontier of what AI systems can do. Memory, reasoning, architecture, emergence.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-28 bg-[#FAFAFA] border-b border-[#E5E5E5]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#888888] mb-5">The Research Question</p>
              <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] text-[#111111] leading-[1.18] mb-8">Why current AI systems hit a ceiling.</h2>
              <p className="text-[1.125rem] text-[#555555] leading-[1.75] mb-5 max-w-[44ch]">Today&apos;s AI systems are extraordinarily capable retrieval machines with a generation layer on top. They are not reasoning systems. They have no memory across contexts. They cannot hold structured understanding of relationships between ideas.</p>
              <p className="text-[1.125rem] text-[#555555] leading-[1.75] max-w-[44ch]">This research track explores the architectural foundations for systems that can genuinely reason — drawing from cognitive science, information theory and systems architecture.</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-4">
                {["Systems over models.","Architecture over prompting.","Reasoning over retrieval.","Memory over context windows."].map(p => (
                  <div key={p} className="px-6 py-4 bg-white border border-[#E5E5E5] rounded-[1rem] flex items-center gap-4 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] flex-shrink-0" />
                    <p className="text-[1rem] font-medium text-[#111111]">{p}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white border-b border-[#E5E5E5]">
        <div className="section-container">
          <FadeIn className="mb-14">
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#888888] mb-5">Focus Areas</p>
            <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] text-[#111111] leading-[1.18]">What the research covers.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOCUS.map((area, i) => (
              <FadeIn key={area.id} delay={i * 0.07}>
                <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-[1rem] p-7 h-full shadow-sm hover:border-[#7C3AED]/30 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#7C3AED] mb-5" />
                  <h3 className="text-[1.125rem] font-semibold text-[#111111] mb-3">{area.title}</h3>
                  <p className="text-[0.9375rem] text-[#555555] leading-[1.75]">{area.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#FAFAFA] border-b border-[#E5E5E5]">
        <div className="section-container">
          <FadeIn className="mb-14">
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#888888] mb-5">Active Projects</p>
            <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] text-[#111111] leading-[1.18]">Where the research lives.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((proj, i) => (
              <FadeIn key={proj.name} delay={i * 0.1}>
                <div className="bg-white border border-[#E5E5E5] rounded-[1rem] p-8 h-full shadow-sm hover:border-[#7C3AED]/30 transition-colors duration-300">
                  <span className={`text-[0.75rem] font-medium uppercase tracking-widest block mb-6 ${proj.accent === "purple" ? "text-[#7C3AED]" : "text-[#2563EB]"}`}>{proj.status}</span>
                  <h3 className="text-[1.875rem] font-semibold text-[#111111] mb-2">{proj.name}</h3>
                  <p className="text-[0.9375rem] text-[#888888] font-medium mb-5">{proj.subtitle}</p>
                  <p className="text-[0.9375rem] text-[#555555] leading-[1.75]">{proj.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#111111] relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.08]" style={{ background:"radial-gradient(ellipse, #7C3AED 0%, transparent 70%)" }} />
        <div className="section-container relative z-10 text-center">
          <FadeIn>
            <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] text-white mb-6 leading-[1.15]">Interested in collaborating<br />on this research?</h2>
            <p className="text-[1.125rem] text-white/60 max-w-[44ch] mx-auto mb-10 leading-[1.75]">Deep-tech collaborations, research partnerships and university engagements welcome.</p>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[999px] bg-white text-[#111111] text-[0.9375rem] font-medium transition-all duration-200 hover:bg-white/90 active:scale-[0.98]">Get in touch</a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
