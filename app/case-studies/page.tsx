import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { Reveal } from "../_components/Reveal";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case studies: PAIR",
  description: "How Housing Associations and the PAIR pilot portfolio put the platform to work.",
};

export default function CaseStudiesIndexPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-5 pb-14 pt-16 sm:px-8 sm:pt-24">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[.12em] text-brand-strong">
              Case studies
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Two looks at PAIR in practice.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Short, honest write-ups: one on the partner shaping the platform, one walking
              through what the pilot data actually shows.
            </p>
          </Reveal>
        </section>

        <Reveal delay={0.1} className="mx-auto grid max-w-5xl gap-6 px-5 pb-24 sm:grid-cols-2 sm:px-8">
          {caseStudies.map((c) => (
            <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-shadow hover:shadow-xl">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={c.cover}
                    alt={c.coverAlt}
                    fill
                    sizes="(min-width: 640px) 500px, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="font-mono text-[.68rem] uppercase tracking-[.1em] text-brand-strong">
                    {c.eyebrow}
                  </span>
                  <h2 className="font-display text-xl font-bold leading-snug text-ink">
                    {c.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted">{c.dek}</p>
                  <span className="mt-auto pt-2 text-sm font-semibold text-brand-strong">
                    Read case study &rarr;
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
