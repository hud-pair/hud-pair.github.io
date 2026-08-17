"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Pins each section at the top of the viewport while the next one scrolls up
 * and covers it, purely via scroll position, so it reverses smoothly on scroll up.
 */
export function StackSection({ index, children }: { index: number; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0.35, 1], [1, 0.4]);

  if (reduce) {
    return (
      <div className="relative" style={{ zIndex: index + 1 }}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative" style={{ zIndex: index + 1, minHeight: "125vh" }}>
      <div className="sticky top-0">
        <motion.div style={{ opacity }}>{children}</motion.div>
      </div>
    </div>
  );
}
