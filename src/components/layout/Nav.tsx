"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Services",      href: "/services"     },
  { label: "Systems Built", href: "/systems"       },
  { label: "Case Studies",  href: "/case-studies"  },
  { label: "Research",      href: "/research"      },
  { label: "About",         href: "/about"         },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-xl border-b border-[#E5E5E5]" : "bg-transparent"}`}>
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 lg:px-16">
          <nav className="flex items-center justify-between h-16">
            <Link href="/" className="text-[0.75rem] font-medium uppercase tracking-[0.15em] text-[#111111] hover:text-[#2563EB] transition-colors duration-200">
              Sentients
            </Link>
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={`text-[0.9375rem] transition-colors duration-200 link-underline ${pathname === href ? "text-[#111111] font-medium" : "text-[#555555] hover:text-[#111111]"}`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden md:flex items-center">
              <a href="https://calendly.com/shaash-sentients" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-[999px] bg-[#111111] text-white text-[0.8125rem] font-medium transition-all duration-200 hover:bg-[#555555]">
                Book a Call
              </a>
            </div>
            <button className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
              <span className={`block w-5 h-px bg-[#111111] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`block w-5 h-px bg-[#111111] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-[#111111] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </button>
          </nav>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity:0, y:-8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-8 }} transition={{ duration:0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white/95 backdrop-blur-xl border-b border-[#E5E5E5] md:hidden">
            <div className="mx-auto w-full max-w-[1200px] px-6 py-6">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className={`block px-4 py-3 rounded-lg text-[1rem] transition-colors duration-150 ${pathname === href ? "text-[#111111] font-medium bg-[#FAFAFA]" : "text-[#555555] hover:text-[#111111] hover:bg-[#FAFAFA]"}`}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-[#E5E5E5]">
                <a href="https://calendly.com/shaash-sentients" target="_blank" rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 rounded-[999px] bg-[#111111] text-white text-[0.8125rem] font-medium">
                  Book a Discovery Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
