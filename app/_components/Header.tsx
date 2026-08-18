"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Product", href: "/#product", section: "product" },
  { label: "How it works", href: "/#pillars", section: "pillars" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Contributions", href: "/contributions" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const sections = NAV.map((item) => item.section)
      .filter((id): id is string => !!id)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (item: (typeof NAV)[number]) => {
    if (item.section) return pathname === "/" && activeSection === item.section;
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  };

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
              aria-current={isActive(item) ? "page" : undefined}
              className={`relative py-1 text-sm font-medium transition-colors ${
                isActive(item)
                  ? "active text-brand-strong after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-brand-strong"
                  : "text-ink/80 hover:text-brand-strong"
              }`}
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
          className="flex size-11 items-center justify-center rounded-full border border-line text-ink md:hidden"
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
                aria-current={isActive(item) ? "page" : undefined}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  isActive(item) ? "active text-brand-strong" : "text-ink"
                }`}
              >
                <span
                  className={`size-1.5 rounded-full transition-opacity ${
                    isActive(item) ? "bg-brand-strong opacity-100" : "opacity-0"
                  }`}
                  aria-hidden="true"
                />
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
