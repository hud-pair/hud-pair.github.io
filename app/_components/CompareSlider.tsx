"use client";

import Image from "next/image";
import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

export function CompareSlider({
  beforeSrc,
  afterSrc,
  beforeLabel,
  afterLabel,
  frameless = false,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
  frameless?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);

  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLButtonElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (e.buttons !== 1) return;
    updateFromClientX(e.clientX);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={containerRef}
      className={
        frameless
          ? "relative h-full w-full touch-none select-none"
          : "relative aspect-video w-full touch-none select-none overflow-hidden rounded-2xl border border-line shadow-2xl"
      }
    >
      <Image
        src={afterSrc}
        alt={afterLabel}
        fill
        priority={!frameless}
        loading={frameless ? "eager" : undefined}
        sizes="(min-width: 1024px) 960px, 100vw"
        className="object-cover object-top"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeLabel}
          fill
          priority={!frameless}
          loading={frameless ? "eager" : undefined}
          sizes="(min-width: 1024px) 960px, 100vw"
          className="object-cover object-top"
        />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 font-mono text-[.65rem] text-white">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 font-mono text-[.65rem] text-white">
        {afterLabel}
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-[2px] bg-white/90"
        style={{ left: `${pos}%` }}
      />

      <button
        type="button"
        role="slider"
        aria-label="Drag to compare light and dark mode"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onKeyDown={onKeyDown}
        className="absolute top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-brand-deep shadow-lg ring-2 ring-white/50 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-brand"
        style={{ left: `${pos}%` }}
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
          <path d="M8 6 2 12l6 6V6ZM16 6v12l6-6-6-6Z" />
        </svg>
      </button>
    </div>
  );
}
