"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, type ReactNode } from "react";

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="size-4">
      {direction === "left" ? (
        <path
          fillRule="evenodd"
          d="M12.79 5.23a.75.75 0 0 1 0 1.06L9.06 10l3.73 3.71a.75.75 0 1 1-1.06 1.06l-4.25-4.24a.75.75 0 0 1 0-1.06l4.25-4.24a.75.75 0 0 1 1.06 0Z"
          clipRule="evenodd"
        />
      ) : (
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.94 10 7.21 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.24a.75.75 0 0 1 0 1.06l-4.25 4.24a.75.75 0 0 1-1.06 0Z"
          clipRule="evenodd"
        />
      )}
    </svg>
  );
}

export function Carousel({ slides }: { slides: Array<(active: boolean) => ReactNode> }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  const go = (i: number) => setIndex((i + slides.length) % slides.length);

  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line/60 shadow-2xl ring-1 ring-black/5 outline-none"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
      }}
    >
      <motion.div
        className="flex h-full"
        animate={{ x: `-${(index / slides.length) * 100}%` }}
        transition={reduce ? { duration: 0 } : { duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
        style={{ width: `${slides.length * 100}%` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="h-full shrink-0" style={{ width: `${100 / slides.length}%` }}>
            {slide(i === index)}
          </div>
        ))}
      </motion.div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(index - 1)}
            className="absolute left-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65"
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(index + 1)}
            className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65"
          >
            <Chevron direction="right" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
