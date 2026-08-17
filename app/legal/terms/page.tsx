import type { Metadata } from "next";
import { Header } from "../../_components/Header";
import { Footer } from "../../_components/Footer";

export const metadata: Metadata = {
  title: "Terms of use: PAIR",
  description: "Terms of use for the PAIR project website.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <span className="font-mono text-xs uppercase tracking-[.12em] text-brand-strong">
            Legal
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink">
            Terms of use
          </h1>
          <p className="mt-4 font-mono text-sm text-muted">Last updated: 17 August 2026</p>

          <div className="mt-10 flex flex-col gap-8 text-ink">
            <div>
              <h2 className="font-display text-xl font-bold text-ink">Ownership</h2>
              <p className="mt-3 leading-relaxed text-muted">
                This website and its content are developed by and All Rights Reserved to the
                University of Huddersfield &copy; 2026, as part of the PAIR project: Property
                Asset &amp; Retrofit Insight, funded by Impact Acceleration Accounts under UKRI.
                See the project&apos;s{" "}
                <a
                  href="https://github.com/hud-pair/hud-pair.github.io/blob/main/LICENCE"
                  className="text-brand-strong hover:underline"
                >
                  licence
                </a>{" "}
                for full terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-ink">Acceptable use</h2>
              <p className="mt-3 leading-relaxed text-muted">
                You may view and share this site for the purpose of learning about the PAIR
                project. You may not reproduce, redistribute, or incorporate its content, code,
                or screenshots into another work without prior written permission from the
                University of Huddersfield.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-ink">No warranty</h2>
              <p className="mt-3 leading-relaxed text-muted">
                This site describes the PAIR application for informational purposes. We take
                reasonable care to keep it accurate, but make no guarantee that every detail,
                screenshot, or figure reflects the current state of the live application. Nothing
                on this site constitutes a contractual commitment.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-ink">Changes to these terms</h2>
              <p className="mt-3 leading-relaxed text-muted">
                We may update these terms as the site evolves. The date at the top of this page
                shows when they were last revised.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-ink">Governing law</h2>
              <p className="mt-3 leading-relaxed text-muted">
                These terms are governed by the law of England and Wales. For any question,
                contact{" "}
                <a href="mailto:s.iram@hud.ac.uk" className="text-brand-strong hover:underline">
                  s.iram@hud.ac.uk
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
