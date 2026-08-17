import type { Metadata } from "next";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";

export const metadata: Metadata = {
  title: "Docs: PAIR",
  description: "Documentation for the PAIR project.",
};

export default function DocsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32 text-center">
          <span className="font-mono text-xs uppercase tracking-[.12em] text-brand-strong">
            Docs
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Documentation is on its way.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            We&apos;re still writing this section. In the meantime, email{" "}
            <a href="mailto:s.iram@hud.ac.uk" className="text-brand-strong hover:underline">
              s.iram@hud.ac.uk
            </a>{" "}
            with any questions about PAIR.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
