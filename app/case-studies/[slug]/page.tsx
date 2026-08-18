import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "../../_components/Header";
import { Footer } from "../../_components/Footer";
import { Reveal } from "../../_components/Reveal";
import { Ladder } from "../../_components/Ladder";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title}: PAIR case study`,
    description: study.dek,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-5 pb-10 pt-16 sm:px-8 sm:pt-24">
          <Reveal>
            <Link
              href="/case-studies"
              className="text-sm font-medium text-muted hover:text-brand-strong"
            >
              &larr; Case studies
            </Link>
            <span className="mt-6 block font-mono text-xs uppercase tracking-[.12em] text-brand-strong">
              {study.eyebrow}
            </span>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
              {study.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">{study.dek}</p>
          </Reveal>
        </section>

        <Reveal delay={0.08} className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line/60 shadow-2xl ring-1 ring-black/5">
            <Image
              src={study.cover}
              alt={study.coverAlt}
              fill
              priority
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        <article className="mx-auto flex max-w-2xl flex-col gap-10 px-5 py-16 sm:px-8 sm:py-20">
          {study.sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 0.05}>
              <h2 className="font-display text-xl font-bold text-ink">{s.heading}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          ))}

          {study.showLadder && (
            <Reveal>
              <Ladder
                compact
                currentLabel="39 Newsome Road today: band D"
                targetLabel="Potential: band B"
              />
            </Reveal>
          )}
        </article>

        <section className="border-t border-line bg-surface">
          <div className="mx-auto max-w-2xl px-5 py-16 text-center sm:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-ink">
                Want to talk about a pilot for your own portfolio?
              </h2>
              <a
                href="mailto:s.iram@hud.ac.uk"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-on-brand-deep shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-brand-strong"
              >
                Email Dr Shamaila Iram
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
