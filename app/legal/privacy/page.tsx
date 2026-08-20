import type { Metadata } from "next";
import { Header } from "../../_components/Header";
import { Footer } from "../../_components/Footer";

export const metadata: Metadata = {
  title: "Privacy policy: PAIR",
  description: "How the PAIR project website handles data.",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <span className="font-mono text-xs uppercase tracking-[.12em] text-brand-strong">
            Legal
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink">
            Privacy policy
          </h1>
          <p className="mt-4 font-mono text-sm text-muted">Last updated: 17 August 2026</p>

          <div className="prose-legal mt-10 flex flex-col gap-8 text-ink">
            <div>
              <h2 className="font-display text-xl font-bold text-ink">Who we are</h2>
              <p className="mt-3 leading-relaxed text-muted">
                This website (pair.github.io) is operated by the University of Huddersfield as
                the public information site for the PAIR project: Property Asset &amp; Retrofit
                Insight. It is separate from the PAIR application itself, which is used directly
                by partner Housing Associations.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-ink">What this site collects</h2>
              <p className="mt-3 leading-relaxed text-muted">
                This site is static: it has no database, no user accounts, and no forms. It does
                not set cookies, run analytics, or track visitors in any way we control.
              </p>
              <p className="mt-3 leading-relaxed text-muted">
                The only way to contact us from this site is a <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-sm">mailto:</code>{" "}
                link, which opens your own email client. We do not see or store your email
                address unless you choose to send us a message, in which case it is handled as
                ordinary University correspondence.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-ink">Hosting and third parties</h2>
              <p className="mt-3 leading-relaxed text-muted">
                This site is hosted on GitHub Pages, which may collect standard technical logs
                (such as IP address and browser type) as part of serving the site. This falls
                under{" "}
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                  className="text-brand-strong hover:underline"
                >
                  GitHub&apos;s own privacy statement
                </a>
                , not ours.
              </p>
              <p className="mt-3 leading-relaxed text-muted">
                The Contributions page loads a small number of profile images directly from
                github.com. Viewing that page causes your browser to request those images from
                GitHub&apos;s servers, which is also covered by GitHub&apos;s privacy statement
                above.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-ink">Your rights</h2>
              <p className="mt-3 leading-relaxed text-muted">
                If you email us, you can ask at any time what we hold and request that it be
                corrected or deleted, in line with UK GDPR. Contact{" "}
                <a href="mailto:s.iram@hud.ac.uk" className="text-brand-strong hover:underline">
                  s.iram@hud.ac.uk
                </a>{" "}
                for any request or question about this policy.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
