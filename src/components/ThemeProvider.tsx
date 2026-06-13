"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { type TimeMode, type ThemeConfig, THEMES, getCurrentTheme } from "@/lib/theme";

interface ThemeContextValue {
  theme: ThemeConfig;
  mode: TimeMode;
  isMidnightForced: boolean;
  toggleMidnight: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: THEMES.noon,
  mode: "noon",
  isMidnightForced: false,
  toggleMidnight: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [autoMode, setAutoMode]           = useState<TimeMode>("noon");
  const [isMidnightForced, setMidnight]   = useState(false);

  // Set auto mode on mount + update every minute
  useEffect(() => {
    const update = () => setAutoMode(getCurrentTheme());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  // Persist midnight toggle
  useEffect(() => {
    const stored = localStorage.getItem("sentients-midnight");
    if (stored === "1") setMidnight(true);
  }, []);

  const toggleMidnight = useCallback(() => {
    setMidnight(v => {
      const next = !v;
      localStorage.setItem("sentients-midnight", next ? "1" : "0");
      return next;
    });
  }, []);

  const mode  = isMidnightForced ? "midnight" : autoMode;
  const theme = THEMES[mode];

  // Inject CSS custom properties on <html>
  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--s-bg",       theme.bgPrimary);
    r.setProperty("--s-bg2",      theme.bgSecondary);
    r.setProperty("--s-bgg",      theme.bgGradient);
    r.setProperty("--s-ink",      theme.inkPrimary);
    r.setProperty("--s-ink2",     theme.inkSecondary);
    r.setProperty("--s-ink3",     theme.inkTertiary);
    r.setProperty("--s-bdr",      theme.border);
    r.setProperty("--s-bdr2",     theme.borderStrong);
    r.setProperty("--s-acc",      theme.accentPrimary);
    r.setProperty("--s-acc2",     theme.accentSecondary);
    r.setProperty("--s-accg",     theme.accentGradient);
    r.setProperty("--s-nav",      theme.navBg);
    r.setProperty("--s-card",     theme.cardBg);
    r.setProperty("--s-pill",     theme.pillBg);
    r.setProperty("--s-pill-t",   theme.pillText);
    r.setProperty("--s-pill-b",   theme.pillBorder);
    r.setProperty("--s-cta",      theme.ctaBg);
    r.setProperty("--s-cta-t",    theme.ctaText);
    // transition all color changes smoothly
    document.documentElement.style.transition = "background-color 1.2s ease, color 1.2s ease";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, mode, isMidnightForced, toggleMidnight }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
