"use client";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/ThemeProvider";
import { SITE } from "@/lib/config";
import { CONTENT } from "./caseStudyData";

export function CaseStudyClient({ slug }: { slug: string }) {
  const c = CONTENT[slug];
  if (!c) notFound();

  const { theme } = useTheme();
  const s   = (v: string) => ({ color: v });
  const bg  = (v: string) => ({ backgroundColor: v });
  const brd = (v: string) => ({ borderColor: v });
  const ac  = c.accent === "purple" ? theme.accentSecondary : theme.accentPrimary;

  return (
    <div className="pt-16" style={{ ...bg(theme.bgPrimary), transition: "background-color 1.2s ease" }}>
      <section className="py-28 border-b" style={{ ...bg(theme.bgPrimary), ...brd(theme.border) }}>
        <div className="section-container">
          <FadeIn>
            <Button href="/case-studies" variant="ghost" size="sm" className="mb-8 -ml-2">← Case studies</Button>
            <span className="text-[11px] font-medium uppercase tracking-widest block mb-4" style={s(ac)}>{c.tag}</span>
            <h1 className="text-[3.75rem] font-semibold tracking-[-0.025em] leading-[1.08] mb-6 max-w-[20ch]" style={s(theme.inkPrimary)}>{c.title}</h1>
            <p className="text-[1.25rem] max-w-[52ch] leading-[1.7]" style={s(theme.inkSecondary)}>{c.overview}</p>
          </FadeIn>
        </div>
      </section>
      <section className="py-28" style={{ ...bg(theme.bgSecondary) }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 flex flex-col gap-14">
              {[{label:"The Challenge",body:c.challenge},{label:"The Solution",body:c.solution},{label:"The Result",body:c.result}].map(({label,body},i)=>(
                <FadeIn key={label} delay={i*0.1}>
                  <h2 className="text-[11px] font-medium uppercase tracking-widest mb-4" style={s(theme.inkTertiary)}>{label}</h2>
                  <p className="text-[1.125rem] leading-[1.75]" style={s(theme.inkSecondary)}>{body}</p>
                </FadeIn>
              ))}
            </div>
            <div className="lg:col-span-1">
              <FadeIn delay={0.2} className="sticky top-24 flex flex-col gap-6">
                <div className="rounded-[1rem] p-8" style={{ ...bg(theme.bgPrimary), border: `0.5px solid ${theme.border}` }}>
                  <h3 className="text-[11px] font-medium uppercase tracking-widest mb-5" style={s(theme.inkTertiary)}>Key Points</h3>
                  <ul className="flex flex-col gap-4">
                    {c.keyPoints.map((p,i)=>(
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background:ac}} />
                        <p className="text-[14px] leading-[1.65]" style={s(theme.inkSecondary)}>{p}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[1rem] p-8" style={{ ...bg(theme.bgPrimary), border: `0.5px solid ${theme.border}` }}>
                  <p className="text-[14px] mb-5 leading-[1.7]" style={s(theme.inkSecondary)}>Interested in similar outcomes?</p>
                  <Button href={SITE.calendly} external size="md" className="w-full justify-center">Book a Call</Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
