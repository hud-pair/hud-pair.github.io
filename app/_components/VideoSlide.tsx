"use client";

import { useEffect, useRef } from "react";

export function VideoSlide({
  src,
  active,
  poster,
}: {
  src: string;
  active: boolean;
  poster?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (active) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [active]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Recording of the PAIR recommendation engine reasoning through a property"
      className="h-full w-full object-cover object-top"
    />
  );
}
