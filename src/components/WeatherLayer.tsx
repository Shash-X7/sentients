"use client";

/**
 * WeatherLayer — live weather canvas. Fetches Bengaluru weather from Open-Meteo.
 * Always renders immediately (starts with drizzle as default, updates on fetch).
 * Adds lightning flashes for dusk/midnight/dark modes when raining.
 */

import { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "@/components/ThemeProvider";

type Condition = "clear" | "drizzle" | "rain" | "overcast" | "fog" | "storm" | "snow";

function mapCode(code: number): Condition {
  if (code === 0 || code <= 2)            return "clear";
  if (code === 3)                         return "overcast";
  if (code >= 45 && code <= 48)          return "fog";
  if (code >= 51 && code <= 55)          return "drizzle";
  if (code >= 56 && code <= 57)          return "drizzle";
  if (code >= 61 && code <= 65)          return "rain";
  if (code >= 71 && code <= 77)          return "snow";
  if (code >= 80 && code <= 82)          return "drizzle";
  if (code >= 95)                         return "storm";
  return "drizzle"; // safe default — it's drizzling
}

interface Drop { x: number; y: number; vy: number; len: number; op: number; }
interface Lightning { x: number; y: number; w: number; h: number; op: number; t: number; branches: {x1:number;y1:number;x2:number;y2:number}[]; }

export function WeatherLayer() {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const animRef     = useRef<number>(0);
  const dropsRef    = useRef<Drop[]>([]);
  const lightRef    = useRef<Lightning[]>([]);
  const condRef     = useRef<Condition>("drizzle"); // start with drizzle immediately
  const { mode }    = useTheme();

  // Fetch real weather — update condition ref on resolve
  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current=weathercode&timezone=Asia%2FKolkata")
      .then(r => r.json())
      .then(d => { condRef.current = mapCode(d?.current?.weathercode ?? 80); })
      .catch(() => { condRef.current = "drizzle"; });
  }, []);

  const isDark = ["dusk", "twilight", "midnight"].includes(mode);
  const showLightning = isDark; // lightning only on dark palettes

  const spawnDrop = useCallback((w: number, h: number): Drop => ({
    x:  Math.random() * w,
    y:  Math.random() * -h,
    vy: 3 + Math.random() * 3,
    len: 8 + Math.random() * 10,
    op: 0.08 + Math.random() * 0.14,
  }), []);

  const spawnLightning = useCallback((w: number, h: number): Lightning => {
    const x = 50 + Math.random() * (w - 100);
    const branches: {x1:number;y1:number;x2:number;y2:number}[] = [];
    let cx = x; let cy = 0;
    const steps = 6 + Math.floor(Math.random() * 5);
    for (let i = 0; i < steps; i++) {
      const nx = cx + (Math.random() - 0.5) * 120;
      const ny = cy + h / steps + Math.random() * 20;
      branches.push({ x1: cx, y1: cy, x2: nx, y2: ny });
      // Occasional branch
      if (Math.random() > 0.6) {
        branches.push({ x1: nx, y1: ny, x2: nx + (Math.random()-0.5)*80, y2: ny + 60 + Math.random()*60 });
      }
      cx = nx; cy = ny;
    }
    return { x, y: 0, w: 2, h, op: 0.9, t: 0, branches };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-init drops on resize
      dropsRef.current = Array.from({ length: 80 }, () => spawnDrop(canvas.width, canvas.height));
    };
    resize();
    window.addEventListener("resize", resize);

    dropsRef.current = Array.from({ length: 80 }, () => spawnDrop(canvas.width, canvas.height));

    // Lightning scheduler
    let nextLightningIn = 180 + Math.random() * 300; // frames until next flash
    let lightningTimer  = 0;

    const tick = () => {
      const { width: W, height: H } = canvas;
      ctx.clearRect(0, 0, W, H);

      const cond = condRef.current;

      // ── RAIN / DRIZZLE ──
      if (cond === "drizzle" || cond === "rain" || cond === "storm") {
        const count = cond === "drizzle" ? 60 : cond === "rain" ? 110 : 160;
        // Grow/shrink drop pool
        while (dropsRef.current.length < count) dropsRef.current.push(spawnDrop(W, H));
        while (dropsRef.current.length > count) dropsRef.current.pop();

        const rainCol = isDark
          ? "180,215,255"   // bright ice-blue, clearly visible on dark bg
          : "70,110,170";   // deeper blue on light bg
        for (const d of dropsRef.current) {
          d.y += d.vy;
          d.x -= 0.3;
          if (d.y > H + 20 || d.x < -10) Object.assign(d, spawnDrop(W, H));
          const rainOp = isDark ? Math.min(d.op * 3.5, 0.65) : d.op;
          ctx.save();
          ctx.strokeStyle = `rgba(${rainCol},${rainOp})`;
          ctx.lineWidth   = isDark ? 1.2 : 0.8;
          ctx.beginPath();
          ctx.moveTo(d.x, d.y);
          ctx.lineTo(d.x - 1.5, d.y - d.len);
          ctx.stroke();
          ctx.restore();
        }

        // ── LIGHTNING (dark palettes + rain/storm) ──
        if (showLightning) {
          lightningTimer++;
          if (lightningTimer >= nextLightningIn) {
            lightRef.current.push(spawnLightning(W, H));
            // Double-flash sometimes
            if (Math.random() > 0.6) {
              setTimeout(() => { if (canvasRef.current) lightRef.current.push(spawnLightning(W, H)); }, 80);
            }
            lightningTimer    = 0;
            nextLightningIn   = 220 + Math.random() * 400;
          }

          for (let i = lightRef.current.length - 1; i >= 0; i--) {
            const bolt = lightRef.current[i];
            bolt.t++;
            bolt.op = Math.max(0, bolt.op - 0.06);
            if (bolt.op <= 0) { lightRef.current.splice(i, 1); continue; }

            // Screen flash
            ctx.save();
            ctx.fillStyle = `rgba(200,220,255,${bolt.op * 0.04})`;
            ctx.fillRect(0, 0, W, H);
            ctx.restore();

            // Bolt
            ctx.save();
            ctx.shadowColor  = `rgba(180,210,255,${bolt.op * 0.9})`;
            ctx.shadowBlur   = 18;
            ctx.strokeStyle  = `rgba(220,235,255,${bolt.op})`;
            ctx.lineWidth    = 1.5;
            ctx.beginPath();
            for (const b of bolt.branches) {
              ctx.moveTo(b.x1, b.y1);
              ctx.lineTo(b.x2, b.y2);
            }
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // ── OVERCAST wisps ──
      if (cond === "overcast") {
        // handled via CSS, no canvas needed for a subtle effect
      }

      // ── FOG ──
      if (cond === "fog") {
        const g = ctx.createLinearGradient(0, H * 0.5, 0, H);
        g.addColorStop(0, "rgba(200,205,215,0)");
        g.addColorStop(1, "rgba(200,205,215,0.06)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }

      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [mode, isDark, showLightning, spawnDrop, spawnLightning]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      aria-hidden
      style={{ zIndex: 6, opacity: 1 }}
    />
  );
}
