"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { type TimeMode, type ThemeConfig, THEMES, getCurrentTheme } from "@/lib/theme";

interface ThemeContextValue {
  theme: ThemeConfig;
  mode: TimeMode;
  isMidnightForced: boolean;   // kept for any legacy refs
  toggleMidnight: () => void;  // kept for any legacy refs
  setForcedMode: (m: TimeMode | null) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: THEMES.noon,
  mode: "noon",
  isMidnightForced: false,
  toggleMidnight: () => {},
  setForcedMode: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [autoMode,   setAutoMode]   = useState<TimeMode>("noon"); // noon on SSR
  const [forcedMode, setForcedModeState] = useState<TimeMode | null>(null);
  const [mounted,    setMounted]    = useState(false);

  // Hydrate auto-mode + tick every minute
  useEffect(() => {
    setMounted(true);
    const update = () => setAutoMode(getCurrentTheme());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  // Restore persisted forced mode
  useEffect(() => {
    try {
      const saved = localStorage.getItem("sentients-palette") as TimeMode | null;
      if (saved && saved in THEMES) setForcedModeState(saved);
    } catch {}
  }, []);

  const setForcedMode = useCallback((m: TimeMode | null) => {
    setForcedModeState(m);
    try {
      if (m) localStorage.setItem("sentients-palette", m);
      else    localStorage.removeItem("sentients-palette");
    } catch {}
  }, []);

  // Legacy midnight toggle — maps to forcing midnight or clearing
  const isMidnightForced = forcedMode === "midnight";
  const toggleMidnight   = useCallback(() => {
    setForcedMode(isMidnightForced ? null : "midnight");
  }, [isMidnightForced, setForcedMode]);

  const mode  = forcedMode ?? autoMode;
  const theme = THEMES[mode];

  // Sync CSS custom properties
  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--s-bg",       theme.bgPrimary);
    r.setProperty("--s-bg2",      theme.bgSecondary);
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
    r.setProperty("--s-out-bdr",  theme.outlineBorder);
    r.setProperty("--s-out-t",    theme.outlineText);
    r.setProperty("--hero-grad",  theme.accentGradient);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, mode, isMidnightForced, toggleMidnight, setForcedMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
