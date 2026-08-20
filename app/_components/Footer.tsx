import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-on-brand-deep">
      <Reveal className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-sm flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="" width={26} height={26} />
              <span className="font-display text-lg font-bold">PAIR</span>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Property Asset &amp; Retrofit Insight. Developed and All Rights Reserved by{" "}
              <a href="https://hud.ac.uk" className="text-white hover:underline">
                University of Huddersfield
              </a>{" "}
              &copy; 2026. Funded by Impact Acceleration Accounts under UKRI.
            </p>
            <a
              href="mailto:s.iram@hud.ac.uk"
              className="w-fit text-sm font-medium text-white hover:underline"
            >
              s.iram@hud.ac.uk
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[.7rem] uppercase tracking-[.1em] text-white/50">
                Site
              </span>
              <Link href="/#product" className="text-sm text-white/80 hover:text-white">
                Product
              </Link>
              <Link href="/case-studies" className="text-sm text-white/80 hover:text-white">
                Case studies
              </Link>
              <Link href="/contributions" className="text-sm text-white/80 hover:text-white">
                Contributions
              </Link>
              <Link href="/docs" className="text-sm text-white/80 hover:text-white">
                Docs
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_API_URL}/docs`} className="text-sm text-white/80 hover:text-white">
                API
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[.7rem] uppercase tracking-[.1em] text-white/50">
                Legal
              </span>
              <Link href="/legal/privacy" className="text-sm text-white/80 hover:text-white">
                Privacy
              </Link>
              <Link href="/legal/terms" className="text-sm text-white/80 hover:text-white">
                Terms
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[.7rem] uppercase tracking-[.1em] text-white/50">
                Partner
              </span>
              <div className="w-fit rounded-lg p-2">
                <Image
                  src="/images/thg.png"
                  alt="Together Housing Group"
                  width={110}
                  height={36}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-6">
            <Image
              src="/images/uoh-logo-2019-white.svg"
              alt="University of Huddersfield logo"
              width={160}
              height={44}
              className="h-8 w-auto object-contain"
            />
            <div className="bg-white px-3 py-2">
              <Image
                src="/images/UKRI_EPSRC_logo.png"
                alt="UKRI EPSRC logo"
                width={160}
                height={44}
                className="h-7 w-auto object-contain"
              />
            </div>
          </div>
          <span className="font-mono text-xs text-white/50">
            &copy; 2026 University of Huddersfield
          </span>
        </div>
      </Reveal>
    </footer>
  );
}
