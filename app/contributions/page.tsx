import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";

export const metadata: Metadata = {
  title: "Contributions: PAIR",
  description:
    "The people and organisations behind the PAIR project: Property Asset & Retrofit Insight.",
  alternates: { canonical: "/contributions" },
};

function GenericAvatar() {
  return (
    <svg viewBox="0 0 120 120" className="size-full" aria-hidden="true">
      <circle cx="60" cy="60" r="60" fill="var(--surface-2)" />
      <circle cx="60" cy="45" r="22" fill="var(--muted)" opacity={0.55} />
      <path
        d="M60 70c-30 0-45 25-45 50h90c0-25-15-50-45-50Z"
        fill="var(--muted)"
        opacity={0.55}
      />
    </svg>
  );
}

function ContributorCard({
  name,
  role,
  href,
  avatar,
}: {
  name: string;
  role: string;
  href?: string;
  avatar: React.ReactNode;
}) {
  const inner = (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="size-28 overflow-hidden rounded-full border border-line bg-surface-2 shadow-sm">
        {avatar}
      </div>
      <div>
        <h3 className="font-display text-lg font-bold text-ink">{name}</h3>
        <p className="mt-1 text-sm text-muted">{role}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="group transition-transform hover:-translate-y-1">
        {inner}
      </a>
    );
  }
  return inner;
}

export default function ContributionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
          <span className="font-mono text-xs uppercase tracking-[.12em] text-brand-strong">
            The people behind PAIR
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Contributions
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            PAIR is a research and development project led by the University of Huddersfield,
            funded by Impact Acceleration Accounts under UKRI, with Together Housing Group as
            the associated housing partner.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-5 pb-24 sm:px-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
            <ContributorCard
              name="Dr Shamaila Iram"
              role="Principal Investigator, Senior Lecturer"
              href="mailto:s.iram@hud.ac.uk"
              avatar={<GenericAvatar />}
            />
            <ContributorCard
              name="Gulger Mallik"
              role="Researcher, Lead Developer"
              href="https://github.com/mr-mallik"
              avatar={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="https://github.com/mr-mallik.png"
                  alt=""
                  className="size-full object-cover"
                />
              }
            />
            <ContributorCard
              name="Dr Athar Farid"
              role="Researcher, PhD Student"
              href="https://github.com/Atharfarid"
              avatar={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="https://github.com/Atharfarid.png"
                  alt=""
                  className="size-full object-cover"
                />
              }
            />
            <ContributorCard
              name="Together Housing Group"
              role="Associated Partner"
              avatar={
                <div className="flex size-full items-center justify-center bg-white p-4">
                  <Image
                    src="/images/thg.png"
                    alt="Together Housing Group"
                    width={96}
                    height={96}
                    className="h-auto w-full object-contain"
                  />
                </div>
              }
            />
          </div>
        </section>

        <section className="border-t border-line bg-surface">
          <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
            <h2 className="font-display text-2xl font-bold text-ink">Funders</h2>
            <div className="mt-8 flex flex-wrap items-center gap-10">
              <Image
                src="/images/UKRI_EPSRC_logo.png"
                alt="UKRI EPSRC logo"
                width={220}
                height={70}
                className="h-12 w-auto object-contain"
              />
              <Image
                src="/images/uoh-logo-2019-white.svg"
                alt="University of Huddersfield logo"
                width={220}
                height={70}
                className="h-12 w-auto object-contain filter invert"
              />
            </div>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
              Developed and All Rights Reserved by University of Huddersfield &copy; 2026.
              Project funded by Impact Acceleration Accounts under UKRI.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
