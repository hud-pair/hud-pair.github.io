import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { ParallaxImage } from "./ParallaxImage";
import { Carousel } from "./Carousel";

const FRAME =
  "relative aspect-video w-full overflow-hidden rounded-2xl border border-line/60 shadow-2xl ring-1 ring-black/5";

export function Spotlight({
  eyebrow,
  title,
  body,
  bullets,
  image,
  imageAlt,
  slides,
  dark = false,
  extra,
}: {
  eyebrow: string;
  title: string;
  body: string;
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  slides?: Array<(active: boolean) => ReactNode>;
  dark?: boolean;
  extra?: ReactNode;
}) {
  return (
    <section className={dark ? "bg-brand-deep text-on-brand-deep" : "bg-canvas"}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span
            className={`font-mono text-xs uppercase tracking-[.12em] ${
              dark ? "text-[#7fd6ab]" : "text-brand-strong"
            }`}
          >
            {eyebrow}
          </span>
          <h2
            className={`mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl ${
              dark ? "text-on-brand-deep" : "text-ink"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mx-auto mt-4 max-w-xl text-lg leading-relaxed ${dark ? "text-[#d8e7de]" : "text-muted"}`}
          >
            {body}
          </p>
          {bullets && (
            <ul className="mx-auto mt-7 flex max-w-lg flex-col gap-3 text-left">
              {bullets.map((b) => (
                <li
                  key={b}
                  className={`flex items-start gap-3 text-sm ${dark ? "text-[#d8e7de]" : "text-muted"}`}
                >
                  <svg
                    className={`mt-0.5 size-4 shrink-0 ${dark ? "text-[#7fd6ab]" : "text-brand"}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          )}
          {extra}
        </Reveal>

        <Reveal delay={0.1} className="mt-12 sm:mt-16">
          {slides && slides.length > 1 ? (
            <Carousel slides={slides} />
          ) : slides && slides.length === 1 ? (
            <div className={FRAME}>{slides[0](true)}</div>
          ) : (
            <ParallaxImage src={image!} alt={imageAlt!} />
          )}
        </Reveal>
      </div>
    </section>
  );
}
