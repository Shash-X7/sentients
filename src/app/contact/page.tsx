import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { SITE, ENGAGEMENTS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a discovery call or reach out to discuss AI systems, product ownership or cognitive computing collaborations.",
};

const AU = () => (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);

const OPTIONS = [
  { type:"Discovery Call", description:"30 minutes. No pitch. Just a conversation about your system.", cta:"Book on Calendly", href:SITE.calendly, primary:true },
  { type:"Email",          description:"For detailed briefs, proposals or research collaborations.",   cta:SITE.email,         href:`mailto:${SITE.email}`, primary:false },
  { type:"LinkedIn",       description:"For professional introductions and network connections.",       cta:"Connect on LinkedIn", href:SITE.linkedin, primary:false },
] as const;

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="py-28 border-b border-[#E5E5E5] bg-white">
        <div className="section-container">
          <FadeIn>
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#888888] mb-5">Contact</p>
            <h1 className="text-[3.75rem] font-semibold tracking-[-0.025em] text-[#111111] max-w-[16ch] leading-[1.08] mb-6">Let&apos;s build something together.</h1>
            <p className="text-[1.25rem] text-[#555555] max-w-[50ch] leading-[1.7]">If you&apos;re a founder, CTO or enterprise leader with a complex system to design, build or scale — the first step is a conversation.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-[#FAFAFA] border-b border-[#E5E5E5]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {OPTIONS.map((opt, i) => (
              <FadeIn key={opt.type} delay={i * 0.1}>
                <a href={opt.href} target={opt.href.startsWith("http") ? "_blank" : undefined} rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group flex flex-col h-full rounded-[1rem] border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${opt.primary ? "bg-[#111111] border-[#111111] text-white hover:bg-[#333333]" : "bg-white border-[#E5E5E5] hover:border-[#CCCCCC]"}`}>
                  <p className={`text-[0.75rem] font-medium uppercase tracking-widest mb-4 ${opt.primary ? "text-white/50" : "text-[#888888]"}`}>{opt.type}</p>
                  <p className={`text-[1rem] leading-[1.7] mb-8 flex-1 ${opt.primary ? "text-white/70" : "text-[#555555]"}`}>{opt.description}</p>
                  <span className={`inline-flex items-center gap-2 text-[0.8125rem] font-medium group-hover:gap-3 transition-all duration-200 ${opt.primary ? "text-white" : "text-[#111111]"}`}>{opt.cta} <AU /></span>
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="bg-white border border-[#E5E5E5] rounded-[1rem] p-8 md:p-10 shadow-sm">
              <p className="text-[0.75rem] font-medium uppercase tracking-widest text-[#888888] mb-6">What to expect</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[{ step:"01", title:"Discovery Call", body:"30 minutes to understand your situation, the system you need to build, and whether there&apos;s a fit." },{ step:"02", title:"Proposal", body:"A clear proposal covering scope, approach, engagement model and timeline — based on what you shared." },{ step:"03", title:"Engagement", body:"We start building. Structured, transparent, with regular touchpoints and clear deliverables throughout." }].map(s => (
                  <div key={s.step}>
                    <span className="text-[0.75rem] font-medium text-[#888888] mb-3 block">{s.step}</span>
                    <h3 className="text-[1.125rem] font-semibold text-[#111111] mb-2">{s.title}</h3>
                    <p className="text-[0.9375rem] text-[#555555] leading-[1.7]">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="section-container">
          <FadeIn className="mb-12">
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#888888] mb-5">Engagements</p>
            <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] text-[#111111] leading-[1.18]">What Sentients takes on.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ENGAGEMENTS.map((eng, i) => (
              <FadeIn key={eng.title} delay={i * 0.07}>
                <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-[1rem] p-7 shadow-sm">
                  <h3 className="text-[1.125rem] font-semibold text-[#111111] mb-3">{eng.title}</h3>
                  <p className="text-[0.9375rem] text-[#555555] leading-[1.75]">{eng.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
