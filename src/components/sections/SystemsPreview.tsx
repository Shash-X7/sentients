"use client";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { SYSTEMS } from "@/lib/config";

const AR = () => (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);

export function SystemsPreview() {
  return (
    <section className="py-28 bg-[#FAFAFA] border-t border-[#E5E5E5]">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <FadeIn>
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#888888] mb-5">Systems Built</p>
            <h2 className="text-[2.25rem] font-semibold tracking-[-0.018em] text-[#111111] leading-[1.18]">Systems, not résumés.</h2>
          </FadeIn>
          <FadeIn delay={0.1}><Button href="/systems" variant="secondary" size="md" icon={<AR />}>View all systems</Button></FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SYSTEMS.slice(0, 3).map((sys, i) => (
            <FadeIn key={sys.id} delay={i * 0.1}>
              <Link href={sys.href} className="group flex flex-col h-full bg-white border border-[#E5E5E5] rounded-[1rem] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#CCCCCC]">
                <div className="flex flex-wrap gap-2 mb-6">
                  {sys.tags.map(t => (<span key={t} className="text-[0.75rem] font-medium px-2.5 py-1 rounded-[999px] bg-[#FAFAFA] border border-[#E5E5E5] text-[#888888]">{t}</span>))}
                </div>
                <h3 className="text-[1.125rem] font-semibold text-[#111111] mb-2 leading-snug">{sys.title}</h3>
                <p className="text-[0.9375rem] text-[#555555] mb-6 leading-[1.7] flex-1">{sys.description}</p>
                <span className="inline-flex items-center gap-2 text-[0.8125rem] font-medium text-[#888888] group-hover:text-[#111111] transition-colors duration-200">View system <AR /></span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
