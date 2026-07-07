"use client";

/**
 * SmoothScroller — buttery momentum scroll with gentle overshoot.
 * Uses RAF + spring physics. No extra dependencies.
 * Intercepts wheel/touch events, animates window.scrollY via spring.
 */

import { useEffect } from "react";

// Spring config — tweak these for feel
const STIFFNESS   = 0.072;
const DAMPING     = 0.82;
const WHEEL_MULT  = 1.0;
const MIN_DELTA   = 0.05;

export function SmoothScroller() {
  useEffect(() => {
    // Skip on mobile — native momentum is already great there
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let target   = window.scrollY;
    let current  = window.scrollY;
    let velocity = 0;
    let rafId    = 0;
    let running  = false;

    const maxScroll = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    const tick = () => {
      const max  = maxScroll();
      // Clamp target
      target = Math.max(0, Math.min(target, max));

      // Spring: acceleration toward target + damping
      const delta = target - current;
      velocity    = velocity * DAMPING + delta * STIFFNESS;
      current    += velocity;

      // Clamp current to valid range
      current = Math.max(0, Math.min(current, max));

      window.scrollTo(0, current);

      if (Math.abs(velocity) > MIN_DELTA || Math.abs(target - current) > MIN_DELTA) {
        rafId = requestAnimationFrame(tick);
      } else {
        current  = target;
        velocity = 0;
        running  = false;
        window.scrollTo(0, current);
      }
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      target   += e.deltaY * WHEEL_MULT;
      target    = Math.max(0, Math.min(target, maxScroll()));
      current   = window.scrollY; // sync current position
      if (!running) {
        running = true;
        rafId   = requestAnimationFrame(tick);
      }
    };

    // Sync target on any external scroll (keyboard, scrollbar drag)
    const onScroll = () => {
      if (!running) {
        target  = window.scrollY;
        current = window.scrollY;
      }
    };

    window.addEventListener("wheel",  onWheel,  { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true  });

    return () => {
      window.removeEventListener("wheel",  onWheel);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
