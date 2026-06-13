"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
  once?: boolean;
  style?: React.CSSProperties;
}

export function FadeIn({ children, delay=0, direction="up", duration=0.55, className="", once=true, style }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });
  const offset = 24;
  const initial = {
    opacity: 0,
    x: direction==="left" ? -offset : direction==="right" ? offset : 0,
    y: direction==="up"   ?  offset  : direction==="down"  ? -offset : 0,
  };
  return (
    <motion.div ref={ref} initial={initial} animate={inView ? { opacity:1, x:0, y:0 } : initial}
      transition={{ duration, delay, ease:[0.25,0.46,0.45,0.94] }} className={className} style={style}>
      {children}
    </motion.div>
  );
}
