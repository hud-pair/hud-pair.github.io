"use client";

import { Reveal, RevealStagger, staggerItem } from "./Reveal";
import { motion } from "framer-motion";

const ICONS: Record<string, React.ReactNode> = {
  dashboard: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
    />
  ),
  globe: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
    />
  ),
  cert: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    />
  ),
  search: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
    />
  ),
  spark: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
    />
  ),
  layers: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
    />
  ),
};

const FEATURES = [
  {
    icon: "dashboard",
    tag: "Asset management",
    title: "Portfolio dashboard",
    body: "Every home in one place. EPC bands, energy consumption trends, and retrofit measures completed, at a glance.",
  },
  {
    icon: "globe",
    tag: "Sustainability",
    title: "Net Zero dashboard",
    body: "Emissions across properties and fleet vehicles, tracked against your target year with a live reduction pathway.",
  },
  {
    icon: "cert",
    tag: "GOV.UK API",
    title: "EPC certificate lookup",
    body: "Live certificate data straight from the GOV.UK register: ratings, construction details, and suggested improvements.",
  },
  {
    icon: "search",
    tag: "AI insight",
    title: "Area and location insight",
    body: "See how many properties are performing, borderline, or underperforming by postcode, ward, or local authority.",
  },
  {
    icon: "spark",
    tag: "Predictive AI",
    title: "Retrofit recommendation engine",
    body: "A ranked, explainable list of measures, insulation, heating, glazing, ordered by impact on EPC rating.",
  },
  {
    icon: "layers",
    tag: "Transparency",
    title: "Explainable analytics",
    body: "Every AI output shows its reasoning, so asset managers can act on it without needing to be data scientists.",
  },
];

export function FeatureGrid() {
  return (
    <section id="product" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-xs uppercase tracking-[.12em] text-brand-strong">
          Core features
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
          Everything your team needs, nothing it doesn&apos;t.
        </h2>
      </Reveal>

      <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <motion.div
            key={f.title}
            variants={staggerItem}
            className="flex flex-col rounded-2xl border border-line bg-surface p-7 transition-shadow hover:shadow-lg"
          >
            <div className="inline-flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand-strong">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.6}
                stroke="currentColor"
                className="size-5"
              >
                {ICONS[f.icon]}
              </svg>
            </div>
            <span className="mt-5 font-mono text-[.68rem] uppercase tracking-[.1em] text-muted">
              {f.tag}
            </span>
            <h3 className="mt-2 text-base font-bold text-ink">{f.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{f.body}</p>
          </motion.div>
        ))}
      </RevealStagger>
    </section>
  );
}
