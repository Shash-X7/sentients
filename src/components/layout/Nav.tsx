"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { THEMES } from "@/lib/theme";

const NAV_LINKS = [
  { label: "Services",      href: "/services"     },
  { label: "Systems Built", href: "/systems"       },
  { label: "Case Studies",  href: "/case-studies"  },
  { label: "Research",      href: "/research"      },
  { label: "About",         href: "/about"         },
];

const MoonIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <path d="M12.5 9A6 6 0 0 1 5 1.5a6 6 0 1 0 7.5 7.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SunIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M2.93 2.93l1.06 1.06M10.01 10.01l1.06 1.06M2.93 11.07l1.06-1.06M10.01 3.99l1.06-1.06" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

export function Nav() {
  const pathname = usePathname();
  const { mode, theme, isMidnightForced, toggleMidnight } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const modeLabel = THEMES[mode].label;
  const modeDot   = THEMES[mode].dot;

  return (
    <>
      <header
        style={{
          backgroundColor: scrolled ? `color-mix(in srgb, ${theme.navBg} 85%, transparent)` : "transparent",
          borderBottomColor: theme.border,
          backdropFilter: scrolled ? "blur(20px)" : "none",
          transition: "background-color 0.3s ease, border-color 1.2s ease",
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="text-[11px] font-medium uppercase tracking-[0.15em] transition-colors duration-200"
              style={{ color: theme.inkPrimary }}>
              Sentients
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}
                    style={{ color: pathname === href ? theme.inkPrimary : theme.inkSecondary, fontWeight: pathname === href ? "500" : "400" }}
                    className="text-[14px] transition-colors duration-200 hover:opacity-80">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right controls */}
            <div className="hidden md:flex items-center gap-3">
              {/* Time mode indicator */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium"
                style={{ background: theme.pillBg, color: theme.pillText, border: `0.5px solid ${theme.pillBorder}` }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: modeDot, display: "inline-block" }} />
                {modeLabel}
              </div>

              {/* Midnight toggle */}
              <button onClick={toggleMidnight} aria-label="Toggle midnight mode"
                className="midnight-toggle"
                title={isMidnightForced ? "Exit midnight mode" : "Enable midnight mode"}>
                {isMidnightForced ? <SunIcon /> : <MoonIcon />}
                {isMidnightForced ? "Exit midnight" : "Midnight"}
              </button>

              {/* CTA */}
              <a href="https://calendly.com/shaash-sentients" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full text-[12px] font-medium transition-all duration-200 hover:opacity-85 active:scale-[0.98]"
                style={{ background: theme.ctaBg, color: theme.ctaText }}>
                Book a Call
              </a>
            </div>

            {/* Mobile burger */}
            <button className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
              onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
              <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1" : ""}`} style={{ background: theme.inkPrimary }} />
              <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}              style={{ background: theme.inkPrimary }} />
              <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} style={{ background: theme.inkPrimary }} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }} className="fixed inset-x-0 top-16 z-40 border-b md:hidden"
            style={{ background: `color-mix(in srgb, ${theme.navBg} 95%, transparent)`, borderColor: theme.border, backdropFilter: "blur(20px)" }}>
            <div className="section-container py-6">
              <ul className="flex flex-col gap-1 mb-6">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href}
                      className="block px-4 py-3 rounded-lg text-[15px] transition-colors duration-150"
                      style={{ color: pathname === href ? theme.inkPrimary : theme.inkSecondary, background: pathname === href ? theme.cardBg : "transparent", fontWeight: pathname === href ? "500" : "400" }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 pt-4" style={{ borderTop: `1px solid ${theme.border}` }}>
                <button onClick={toggleMidnight} className="midnight-toggle flex-1 justify-center">
                  {isMidnightForced ? <SunIcon /> : <MoonIcon />}
                  {isMidnightForced ? "Exit midnight" : "Midnight mode"}
                </button>
                <a href="https://calendly.com/shaash-sentients" target="_blank" rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-2.5 rounded-full text-[13px] font-medium"
                  style={{ background: theme.ctaBg, color: theme.ctaText }}>
                  Book a Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
