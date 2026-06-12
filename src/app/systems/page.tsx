import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SYSTEMS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Systems Built",
  description: "Systems designed, architected and shipped — from payments infrastructure to autonomous AI platforms.",
};

const AR = () => (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);

export default function SystemsPage() {
  return (
    <div className="pt-16">
      <section className="py-28 border-b border-[#E5E5E5] bg-white">
        <div className="section-container">
          <FadeIn>
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[#888888] mb-5">Systems Built</p>
            <h1 className="text-[3.75rem] font-semibold tracking-[-0.025em] text-[#111111] max-w-[18ch] leading-[1.08] mb-6">Show systems,<br />not jobs.</h1>
            <p className="text-[1.25rem] text-[#555555] max-w-[50ch] leading-[1.7]">Each entry below is a system — defined by its problem, architecture and outcome. Not a bullet point on a CV.</p>
          </FadeIn>
        </div>
      </section>
      <section className="py-28 bg-[#FAFAFA]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SYSTEMS.map((sys, i) => (
              <FadeIn key={sys.id} delay={i * 0.08}>
                <Link href={sys.href} className="group flex flex-col h-full bg-white border border-[#E5E5E5] rounded-[1rem] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#CCCCCC]">
                  <span className="text-[0.75rem] font-medium text-[#888888] uppercase tracking-widest mb-6">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {sys.tags.map(t => (<span key={t} className="text-[0.75rem] font-medium px-2.5 py-1 rounded-[999px] bg-[#FAFAFA] border border-[#E5E5E5] text-[#888888]">{t}</span>))}
                  </div>
                  <h2 className="text-[1.875rem] font-semibold text-[#111111] mb-1 leading-snug">{sys.title}</h2>
                  <p className="text-[0.9375rem] text-[#888888] font-medium mb-4">{sys.subtitle}</p>
                  <p className="text-[0.9375rem] text-[#555555] mb-8 leading-[1.75] flex-1">{sys.description}</p>
                  <span className="inline-flex items-center gap-2 text-[0.8125rem] font-medium text-[#888888] group-hover:text-[#111111] transition-colors duration-200">Explore system <AR /></span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
