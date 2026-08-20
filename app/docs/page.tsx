import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { Reveal } from "../_components/Reveal";
import { getDocsSorted } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Docs: PAIR",
  description: "Documentation for the PAIR project: installing, using, and analysing with it.",
  alternates: { canonical: "/docs" },
};

export default function DocsIndexPage() {
  const docs = getDocsSorted();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-5 pb-14 pt-16 sm:px-8 sm:pt-24">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[.12em] text-brand-strong">
              Docs
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Everything you need to run PAIR.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Install it, learn the dashboard, and read what Explorer's recommendations actually
              mean.
            </p>
          </Reveal>
        </section>

        <Reveal delay={0.1} className="mx-auto grid max-w-5xl gap-6 px-5 pb-24 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {docs.map((d) => (
            <Link key={d.slug} href={`/docs/${d.slug}`} className="group">
              <article className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface p-6 transition-shadow hover:shadow-xl">
                <span className="font-mono text-[.68rem] uppercase tracking-[.1em] text-brand-strong">
                  {d.eyebrow}
                </span>
                <h2 className="font-display text-xl font-bold leading-snug text-ink">
                  {d.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted">{d.description}</p>
                <span className="mt-auto pt-2 text-sm font-semibold text-brand-strong">
                  Read guide &rarr;
                </span>
              </article>
            </Link>
          ))}
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
