"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { THEMES, type TimeMode } from "@/lib/theme";

const NAV_LINKS = [
  { label: "Services",      href: "/services"     },
  { label: "Systems Built", href: "/systems"       },
  { label: "Case Studies",  href: "/case-studies"  },
  { label: "Research",      href: "/research"      },
  { label: "About",         href: "/about"         },
];

const PALETTE_MODES: TimeMode[] = ["dawn", "noon", "dusk", "twilight", "midnight"];

const PaletteIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="4.5" cy="5.5" r="1" fill="currentColor"/>
    <circle cx="7"   cy="4"   r="1" fill="currentColor"/>
    <circle cx="9.5" cy="5.5" r="1" fill="currentColor"/>
    <circle cx="5"   cy="8.5" r="1" fill="currentColor"/>
    <circle cx="9"   cy="8.5" r="1" fill="currentColor"/>
  </svg>
);

export function Nav() {
  const pathname = usePathname();
  const { mode, theme, setForcedMode } = useTheme();
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const paletteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Close palette on outside click
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target as Node)) {
        setPaletteOpen(false);
      }
    };
    if (paletteOpen) document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, [paletteOpen]);

  const isHeroPage = pathname === "/about" || pathname === "/";

  // Force scroll state to recalculate on every pathname change
  // so About/Home start transparent even when navigated from a scrolled page
  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 20);
    check();
    setScrolled(window.scrollY > 20);
  }, [pathname]);

  // Hero pages (home + about): nav fully transparent at top, line only.
  // All other pages + when scrolled: accent-tinted band.
  const navBgAccent: Record<string, string> = {
    dawn:     `linear-gradient(90deg, ${theme.accentSecondary}, color-mix(in srgb, ${theme.accentPrimary} 85%, ${theme.navBg}))`,
    noon:     `color-mix(in srgb, ${theme.accentPrimary} 12%, ${theme.navBg})`,
    dusk:     `color-mix(in srgb, ${theme.accentPrimary} 18%, ${theme.navBg})`,
    twilight: `color-mix(in srgb, ${theme.accentPrimary} 15%, ${theme.navBg})`,
    midnight: `color-mix(in srgb, ${theme.accentPrimary} 12%, ${theme.navBg})`,
  };
  const navBorderAccent: Record<string, string> = {
    dawn:     theme.accentPrimary,
    noon:     `color-mix(in srgb, ${theme.accentPrimary} 20%, ${theme.border})`,
    dusk:     `color-mix(in srgb, ${theme.accentPrimary} 25%, ${theme.border})`,
    twilight: `color-mix(in srgb, ${theme.accentPrimary} 20%, ${theme.border})`,
    midnight: `color-mix(in srgb, ${theme.accentPrimary} 18%, ${theme.border})`,
  };

  const showAccent = scrolled || !isHeroPage;
  const navBg     = showAccent ? (navBgAccent[mode] ?? navBgAccent.midnight) : "transparent";
  const navBorder = showAccent
    ? (navBorderAccent[mode] ?? theme.border)
    : `color-mix(in srgb, ${theme.border} 40%, transparent)`;

  // Text: white over photo/hero at top, palette colour when scrolled or on inner pages
  const navTextPrimary   = (!showAccent) ? "rgba(255,255,255,0.95)" : theme.inkPrimary;
  const navTextSecondary = (!showAccent) ? "rgba(255,255,255,0.70)" : theme.inkSecondary;

  return (
    <>
      <header
        style={{
          background: navBg,
          borderBottomColor: navBorder,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          transition: "background 0.4s ease, border-color 0.4s ease",
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="text-[11px] font-medium uppercase tracking-[0.15em] transition-colors duration-200"
              style={{ color: navTextPrimary }}>
              Sentients
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}
                    style={{ color: pathname === href ? navTextPrimary : navTextSecondary, fontWeight: pathname === href ? "500" : "400" }}
                    className="text-[14px] transition-colors duration-200 hover:opacity-80">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right controls */}
            <div className="hidden md:flex items-center gap-3">

              {/* Palette switcher */}
              <div ref={paletteRef} className="relative">
                <button
                  onClick={() => setPaletteOpen(v => !v)}
                  aria-label="Switch colour palette"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-200 hover:opacity-80"
                  style={{ background: theme.pillBg, color: theme.pillText, border: `0.5px solid ${theme.pillBorder}` }}
                >
                  <PaletteIcon />
                  Palette
                  {/* Dot row showing current mode */}
                  <span className="flex items-center gap-[3px] ml-1">
                    {PALETTE_MODES.map(m => (
                      <span key={m} style={{
                        width: 5, height: 5, borderRadius: "50%",
                        background: THEMES[m].dot,
                        opacity: m === mode ? 1 : 0.3,
                        transition: "opacity 0.3s ease",
                      }} />
                    ))}
                  </span>
                </button>

                <AnimatePresence>
                  {paletteOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute right-0 top-[calc(100%+8px)] w-52 rounded-[1rem] overflow-hidden z-50"
                      style={{ background: theme.bgPrimary, border: `0.5px solid ${theme.borderStrong}`, boxShadow: `0 8px 32px color-mix(in srgb, ${theme.accentPrimary} 12%, rgba(0,0,0,0.18))` }}
                    >
                      <p className="text-[10px] font-medium uppercase tracking-widest px-4 pt-3 pb-2"
                        style={{ color: theme.inkTertiary }}>Colour Mode</p>
                      {PALETTE_MODES.map(m => {
                        const t = THEMES[m];
                        const active = m === mode;
                        return (
                          <button key={m} onClick={() => { setForcedMode(m); setPaletteOpen(false); }}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-150"
                            style={{
                              background: active ? `color-mix(in srgb, ${theme.accentPrimary} 10%, transparent)` : "transparent",
                              color: active ? theme.inkPrimary : theme.inkSecondary,
                            }}
                            onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = `color-mix(in srgb, ${theme.border} 60%, transparent)`; }}
                            onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                          >
                            {/* Colour swatch */}
                            <span className="flex-shrink-0 w-6 h-6 rounded-full border"
                              style={{ background: `linear-gradient(135deg, ${t.bgPrimary} 40%, ${t.accentPrimary})`, borderColor: theme.border }} />
                            <span className="flex flex-col">
                              <span className="text-[13px] font-medium leading-tight">{t.label}</span>
                              <span className="text-[10px] leading-tight" style={{ color: theme.inkTertiary }}>
                                {m === "dawn" ? "5–9 am" : m === "noon" ? "9 am–4 pm" : m === "dusk" ? "4–7 pm" : m === "twilight" ? "7–10 pm" : "10 pm–5 am"}
                              </span>
                            </span>
                            {active && (
                              <span className="ml-auto text-[10px] font-medium" style={{ color: theme.accentPrimary }}>✓</span>
                            )}
                          </button>
                        );
                      })}
                      <div className="px-4 py-2 mt-1 border-t" style={{ borderColor: theme.border }}>
                        <button onClick={() => { setForcedMode(null); setPaletteOpen(false); }}
                          className="text-[11px] w-full text-left transition-colors duration-150 hover:opacity-80"
                          style={{ color: theme.inkTertiary }}>
                          ↺ Auto (follows time of day)
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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
              <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1" : ""}`}   style={{ background: navTextPrimary }} />
              <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}                  style={{ background: navTextPrimary }} />
              <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} style={{ background: navTextPrimary }} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }} className="fixed inset-x-0 top-16 z-40 border-b md:hidden"
            style={{ background: navBg, borderColor: navBorder, backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
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
              {/* Mobile palette row */}
              <div className="flex flex-wrap gap-2 pt-4 mb-4" style={{ borderTop: `1px solid ${theme.border}` }}>
                <p className="w-full text-[10px] font-medium uppercase tracking-widest mb-1" style={{ color: theme.inkTertiary }}>Palette</p>
                {PALETTE_MODES.map(m => {
                  const t = THEMES[m];
                  const active = m === mode;
                  return (
                    <button key={m} onClick={() => setForcedMode(m)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium border"
                      style={{
                        background: active ? `color-mix(in srgb, ${theme.accentPrimary} 12%, transparent)` : "transparent",
                        borderColor: active ? theme.accentPrimary : theme.border,
                        color: active ? theme.inkPrimary : theme.inkSecondary,
                      }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: t.dot, display: "inline-block" }} />
                      {t.label}
                    </button>
                  );
                })}
                <button onClick={() => setForcedMode(null)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] border"
                  style={{ borderColor: theme.border, color: theme.inkTertiary }}>
                  ↺ Auto
                </button>
              </div>
              <a href="https://calendly.com/shaash-sentients" target="_blank" rel="noopener noreferrer"
                className="block text-center px-6 py-2.5 rounded-full text-[13px] font-medium"
                style={{ background: theme.ctaBg, color: theme.ctaText }}>
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
