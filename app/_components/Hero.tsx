"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CompareSlider } from "./CompareSlider";

const CHIPS = ["GOV.UK EPC API", "AI insights, explained", "Net Zero tracking"];

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] as const },
        };

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-4xl px-5 pb-14 pt-16 text-center sm:px-8 sm:pt-24">
        <motion.span
          {...rise(0)}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[.12em] text-brand-strong"
        >
          Property Asset &amp; Retrofit Insight
        </motion.span>

        <motion.h1
          {...rise(0.08)}
          className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl"
        >
          Know exactly where to retrofit next.
        </motion.h1>

        <motion.p
          {...rise(0.16)}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          PAIR gives Housing Associations one place to track EPC performance, visualise
          emissions, and let an explainable AI engine rank which homes to upgrade first,
          and why.
        </motion.p>

        <motion.div {...rise(0.24)} className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:s.iram@hud.ac.uk"
            className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-on-brand-deep shadow-lg shadow-brand/20 transition-transform hover:-translate-y-0.5 hover:bg-brand-strong"
          >
            Request a demo
          </a>
          <a
            href="#product"
            className="inline-flex items-center justify-center rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:border-brand/40"
          >
            Explore features
          </a>
        </motion.div>

        <motion.div
          {...rise(0.32)}
          className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted"
        >
          {CHIPS.map((c) => (
            <span key={c} className="inline-flex items-center gap-1.5">
              <svg className="size-3.5 text-brand" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              {c}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div {...rise(0.42)} className="mx-auto max-w-5xl px-5 pb-20 sm:px-8 sm:pb-28">
        <CompareSlider
          beforeSrc="/images/screenshots/dashboard-white.png"
          afterSrc="/images/screenshots/dashboard-dark.png"
          beforeLabel="Light mode"
          afterLabel="Dark mode"
        />
      </motion.div>
    </section>
  );
}
