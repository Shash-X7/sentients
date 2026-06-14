"use client";

/**
 * WeatherLayer — CSS meteor shower.
 * Shooting stars with gradient tails streak diagonally across the screen.
 * Pure CSS animations, no canvas. Adapts opacity to light/dark palette.
 * Double-click the weather pill to trigger a burst of extra meteors for 3s.
 */

import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export const RAIN_BURST_EVENT = "sentients:rain-burst";

const METEOR_COUNT = 20;

interface Meteor {
  id: number;
  top: string;
  left: string;
  delay: string;
  duration: string;
  size: number;
  opacity: number;
}

function makeMeteors(count: number, burstMode = false): Meteor[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top:      `${Math.random() * 60}%`,
    left:     `${Math.random() * 100}%`,
    delay:    burstMode ? `${Math.random() * 0.4}s` : `${Math.random() * 8}s`,
    duration: burstMode ? `${0.4 + Math.random() * 0.4}s` : `${0.5 + Math.random() * 0.8}s`,
    size:     burstMode ? 2 + Math.random() * 3 : 1 + Math.random() * 2,
    opacity:  burstMode ? 0.7 + Math.random() * 0.3 : 0.25 + Math.random() * 0.45,
  }));
}

export function WeatherLayer() {
  const { mode } = useTheme();
  const isDark   = ["dusk", "twilight", "midnight"].includes(mode);

  const [meteors,      setMeteors]      = useState<Meteor[]>(() => makeMeteors(METEOR_COUNT));
  const [burstMeteors, setBurstMeteors] = useState<Meteor[]>([]);
  const [bursting,     setBursting]     = useState(false);

  // Reshuffle meteors on palette change so they don't freeze at same positions
  useEffect(() => {
    setMeteors(makeMeteors(METEOR_COUNT));
  }, [mode]);

  // Listen for double-click burst from Nav pill
  useEffect(() => {
    const onBurst = () => {
      setBurstMeteors(makeMeteors(40, true));
      setBursting(true);
      setTimeout(() => {
        setBursting(false);
        setBurstMeteors([]);
      }, 3000);
    };
    window.addEventListener(RAIN_BURST_EVENT, onBurst);
    return () => window.removeEventListener(RAIN_BURST_EVENT, onBurst);
  }, []);

  // Subtle on light palettes, more visible on dark ones
  const globalOpacity = isDark ? 0.65 : 0.22;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      aria-hidden
      style={{ zIndex: 6, opacity: globalOpacity }}
    >
      {/* Ambient meteors */}
      {meteors.map(m => (
        <span
          key={m.id}
          className="meteor"
          style={{
            top:      m.top,
            left:     m.left,
            animationDelay:    m.delay,
            animationDuration: m.duration,
            width:    `${80 + m.size * 30}px`,
            height:   `${m.size}px`,
            opacity:  m.opacity,
          }}
        />
      ))}

      {/* Burst meteors on double-click */}
      {bursting && burstMeteors.map(m => (
        <span
          key={`burst-${m.id}`}
          className="meteor"
          style={{
            top:      m.top,
            left:     m.left,
            animationDelay:    m.delay,
            animationDuration: m.duration,
            width:    `${120 + m.size * 40}px`,
            height:   `${m.size * 1.5}px`,
            opacity:  m.opacity,
          }}
        />
      ))}
    </div>
  );
}
