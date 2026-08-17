"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";

const BANDS = [
  { letter: "A", range: "92+", fill: "34", color: "var(--epc-a)" },
  { letter: "B", range: "81–91", fill: "42", color: "var(--epc-b)" },
  { letter: "C", range: "69–80", fill: "55", color: "var(--epc-c)" },
  { letter: "D", range: "55–68", fill: "100", color: "var(--epc-d)" },
  { letter: "E", range: "39–54", fill: "70", color: "var(--epc-e)" },
  { letter: "F", range: "21–38", fill: "46", color: "var(--epc-f)" },
  { letter: "G", range: "1–20", fill: "30", color: "var(--epc-g)" },
] as const;

export function Ladder({
  compact = false,
  currentLabel = "Current average: band D",
  targetLabel = "PAIR pathway: band B",
}: {
  compact?: boolean;
  currentLabel?: string;
  targetLabel?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const filled = reduce || inView;

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-4 rounded-[20px] bg-brand-deep text-on-brand-deep ${
        compact ? "p-5 gap-3" : "p-6 sm:p-8 gap-6"
      }`}
    >
      <span className="font-mono text-[.7rem] tracking-[.08em] uppercase text-[#B9D9C8]">
        Portfolio average vs. PAIR pathway
      </span>
      <div className="flex flex-col gap-1.5">
        {BANDS.map((b, i) => (
          <div
            key={b.letter}
            className={`grid items-center gap-3 ${compact ? "grid-cols-[22px_1fr_44px]" : "grid-cols-[34px_1fr_64px]"}`}
          >
            <span
              className={`font-display font-bold text-[#eaf1e6] ${compact ? "text-sm" : "text-lg"}`}
            >
              {b.letter}
            </span>
            <span
              className={`relative overflow-hidden rounded-[5px] bg-white/[.06] ${compact ? "h-3.5" : "h-[22px]"}`}
            >
              <motion.span
                className="absolute inset-y-0 left-0 rounded-[5px]"
                style={{ background: b.color }}
                initial={{ width: 0 }}
                animate={{ width: filled ? `${b.fill}%` : 0 }}
                transition={{ duration: 1.1, delay: i * 0.09, ease: [0.2, 0.7, 0.2, 1] }}
              />
            </span>
            <span className="font-mono text-[.68rem] text-[#9fb6a9] text-right">{b.range}</span>
          </div>
        ))}
      </div>
      {!compact && (
        <div className="flex flex-wrap gap-6 font-mono text-[.76rem] text-[#d8e7de]">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block size-2.5 rounded-full" style={{ background: "var(--epc-d)" }} />
            {currentLabel}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="inline-block size-2.5 rounded-full" style={{ background: "var(--epc-b)" }} />
            {targetLabel}
          </span>
        </div>
      )}
    </div>
  );
}
