"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#pillars" },
  { label: "Contributions", href: "/contributions" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-canvas/85 backdrop-blur border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="" width={30} height={30} />
          <span className="font-display text-lg font-bold tracking-tight text-ink">PAIR</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-sm text-ink/80 hover:text-brand-strong transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="mailto:s.iram@hud.ac.uk"
            className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-on-brand-deep shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-brand-strong"
          >
            Request a demo
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center rounded-full border border-line text-ink md:hidden"
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-canvas px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:s.iram@hud.ac.uk"
              className="inline-flex w-fit items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-on-brand-deep"
            >
              Request a demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
