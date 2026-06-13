"use client";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/ThemeProvider";
import { SITE, ENGAGEMENTS } from "@/lib/config";

const OPTIONS = [
  { type:"Discovery Call", description:"30 minutes. No pitch. Just a conversation about your system.", cta:"Book on Calendly", href:SITE.calendly, primary:true  },
  { type:"Email",          description:"For detailed briefs, proposals or research collaborations.",   cta:SITE.email,         href:`mailto:${SITE.email}`, primary:false },
  { type:"LinkedIn",       description:"For professional introductions and network connections.",       cta:"Connect on LinkedIn", href:SITE.linkedin, primary:false },
] as const;

export default function ContactPage() {
  const { theme } = useTheme();
  const s   = (v: string) => ({ color: v });
  const bg  = (v: string) => ({ backgroundColor: v });
  const brd = (v: string) => ({ borderColor: v });

  return (
    <div className="pt-16" style={{ ...bg(theme.bgPrimary), transition: "background-color 1.2s ease" }}>
      <section className="py-28 border-b" style={{ ...bg(theme.bgPrimary), ...brd(theme.border) }}>
        <div className="section-container">
          <FadeIn>
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-5" style={s(theme.inkTertiary)}>Contact</p>
            <h1 className="text-[3.75rem] font-semibold tracking-[-0.025em] max-w-[16ch] leading-[1.08] mb-6" style={s(theme.inkPrimary)}>Let&apos;s build something together.</h1>
            <p className="text-[1.25rem] max-w-[50ch] leading-[1.7]" style={s(theme.inkSecondary)}>If you&apos;re a founder, CTO or enterprise leader with a complex system to design, build or scale — the first step is a conversation.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 border-b" style={{ ...bg(theme.bgSecondary), ...brd(theme.border) }}>
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {OPTIONS.map((opt, i) => (
              <FadeIn key={opt.type} delay={i * 0.1}>
                <a href={opt.href} target={opt.href.startsWith("http") ? "_blank" : undefined}
                  rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col h-full rounded-[1rem] p-8 transition-all duration-300 hover:-translate-y-1"
                  style={opt.primary
                    ? { background:theme.ctaBg, border:`0.5px solid ${theme.ctaBg}` }
                    : { ...bg(theme.bgPrimary), border:`0.5px solid ${theme.border}` }}>
                  <p className="text-[10px] font-medium uppercase tracking-widest mb-4"
                    style={s(opt.primary ? "rgba(255,255,255,0.5)" : theme.inkTertiary)}>{opt.type}</p>
                  <p className="text-[13px] leading-[1.7] mb-8 flex-1"
                    style={s(opt.primary ? "rgba(255,255,255,0.75)" : theme.inkSecondary)}>{opt.description}</p>
                  <span className="inline-flex items-center gap-2 text-[12px] font-medium"
                    style={s(opt.primary ? theme.ctaText : theme.inkPrimary)}>{opt.cta} →</span>
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="rounded-[1rem] p-8 md:p-10" style={{ ...bg(theme.bgPrimary), border:`0.5px solid ${theme.border}` }}>
              <p className="text-[11px] font-medium uppercase tracking-widest mb-6" style={s(theme.inkTertiary)}>What to expect</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[{step:"01",title:"Discovery Call",body:"30 minutes to understand your situation and whether there's a fit."},{step:"02",title:"Proposal",body:"Clear scope, approach, engagement model and timeline based on what you shared."},{step:"03",title:"Engagement",body:"We start building. Structured, transparent, with clear deliverables throughout."}].map(s2=>(
                  <div key={s2.step}>
                    <span className="text-[11px] font-medium block mb-3" style={s(theme.inkTertiary)}>{s2.step}</span>
                    <h3 className="text-[14px] font-semibold mb-2" style={s(theme.inkPrimary)}>{s2.title}</h3>
                    <p className="text-[13px] leading-[1.7]" style={s(theme.inkSecondary)}>{s2.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-28" style={{ ...bg(theme.bgPrimary) }}>
        <div className="section-container">
          <FadeIn className="mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] mb-5" style={s(theme.inkTertiary)}>Engagements</p>
            <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] leading-[1.18]" style={s(theme.inkPrimary)}>What Sentients takes on.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ENGAGEMENTS.map((eng, i) => (
              <FadeIn key={eng.title} delay={i * 0.07}>
                <div className="rounded-[1rem] p-7" style={{ ...bg(theme.bgSecondary), border:`0.5px solid ${theme.border}` }}>
                  <h3 className="text-[15px] font-semibold mb-3" style={s(theme.inkPrimary)}>{eng.title}</h3>
                  <p className="text-[13px] leading-[1.75]" style={s(theme.inkSecondary)}>{eng.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
