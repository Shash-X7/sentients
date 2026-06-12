"use client";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SERVICES } from "@/lib/config";

const AU = () => (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);

export function ServicePillars() {
  return (
    <section className="py-28 bg-[#FAFAFA] border-t border-[#E5E5E5]">
      <div className="section-container">
        <FadeIn className="mb-16">
          <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#888888] mb-5">Service Pillars</p>
          <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] text-[#111111] max-w-[18ch] leading-[1.18]">Three pillars.<br />One continuous system.</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5] rounded-[1rem] overflow-hidden shadow-sm">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.id} delay={i * 0.1}>
              <Link href={s.href} className="group flex flex-col bg-white hover:bg-[#FAFAFA] p-8 md:p-10 transition-colors duration-300 h-full">
                <span className={`text-[0.75rem] font-medium uppercase tracking-widest mb-8 ${s.accent === "purple" ? "text-[#7C3AED]" : "text-[#2563EB]"}`}>{s.tag}</span>
                <h3 className="text-[1.125rem] font-semibold text-[#111111] mb-4 leading-[1.3]">{s.title}</h3>
                <p className="text-[0.9375rem] text-[#555555] leading-[1.75] mb-8 flex-1">{s.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {s.capabilities.map(c => (
                    <span key={c} className={`text-[0.75rem] font-medium px-2.5 py-1 rounded-[999px] border ${s.accent === "purple" ? "text-[#7C3AED] border-[#7C3AED]/20 bg-[#7C3AED]/5" : "text-[#2563EB] border-[#2563EB]/20 bg-[#2563EB]/5"}`}>{c}</span>
                  ))}
                </div>
                <div className={`inline-flex items-center gap-2 text-[0.8125rem] font-medium group-hover:gap-3 transition-all duration-200 ${s.accent === "purple" ? "text-[#7C3AED]" : "text-[#2563EB]"}`}>Learn more <AU /></div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
