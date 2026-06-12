import Link from "next/link";
import { SITE } from "@/lib/config";

const LINKS = {
  work:     [{ label:"Services", href:"/services" },{ label:"Systems Built", href:"/systems" },{ label:"Case Studies", href:"/case-studies" }],
  thinking: [{ label:"Research", href:"/research" },{ label:"About", href:"/about" }],
  contact:  [{ label:"shaash@sentients.in", href:"mailto:shaash@sentients.in" },{ label:"Book a Discovery Call", href:SITE.calendly },{ label:"LinkedIn", href:SITE.linkedin }],
};

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="text-[0.75rem] font-medium uppercase tracking-[0.15em] text-[#111111]">Sentients</Link>
            <p className="text-[0.9375rem] text-[#555555] max-w-[22ch]">Building intelligent systems across Product, Automation and Cognition.</p>
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[#888888] mt-2">{SITE.location}</p>
          </div>
          {(["work","thinking","contact"] as const).map(section => (
            <div key={section} className="flex flex-col gap-4">
              <p className="text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[#888888]">{section.charAt(0).toUpperCase()+section.slice(1)}</p>
              <ul className="flex flex-col gap-3">
                {LINKS[section].map((l: {label:string;href:string}) => (
                  <li key={l.href}>
                    <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[0.9375rem] text-[#555555] hover:text-[#111111] transition-colors duration-150">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-[#E5E5E5] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[0.75rem] font-medium text-[#888888]">© {new Date().getFullYear()} Sentients. All rights reserved.</p>
          <p className="text-[0.75rem] font-medium text-[#888888]">Shaashwath Vijayakumar · AI Systems · Product · Cognition</p>
        </div>
      </div>
    </footer>
  );
}
