"use client";

import { Reveal, RevealStagger, staggerItem } from "./Reveal";
import { motion } from "framer-motion";

const PILLARS = [
  {
    n: "01",
    title: "See the portfolio",
    body: "EPC bands, heating systems, and insulation quality across every home, from a single dashboard instead of a spreadsheet.",
  },
  {
    n: "02",
    title: "Prioritise the retrofit",
    body: "Model upgrade pathways and rank properties by where the spend delivers the strongest energy and carbon return.",
  },
  {
    n: "03",
    title: "Prove the progress",
    body: "Track emission reductions against your Net Zero target, by property, area, and programme, with evidence you can show funders.",
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-xs uppercase tracking-[.12em] text-brand-strong">
          Why PAIR
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
          The sequence every housing association moves through.
        </h2>
      </Reveal>

      <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-3">
        {PILLARS.map((p) => (
          <motion.div
            key={p.n}
            variants={staggerItem}
            className="rounded-2xl border border-line bg-surface p-8"
          >
            <span className="font-display text-3xl font-black text-brand/40">{p.n}</span>
            <h3 className="mt-4 text-lg font-bold text-ink">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
          </motion.div>
        ))}
      </RevealStagger>
    </section>
  );
}
