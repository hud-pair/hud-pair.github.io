"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDocsSorted } from "@/lib/docs";

export function DocsNav() {
  const pathname = usePathname();
  const items = getDocsSorted();

  return (
    <nav className="flex flex-col gap-1">
      {items.map((d) => {
        const href = `/docs/${d.slug}`;
        const active = pathname === href;
        return (
          <Link
            key={d.slug}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              active ? "bg-surface-2 text-brand-strong" : "text-muted hover:text-ink"
            }`}
          >
            {d.title}
          </Link>
        );
      })}
    </nav>
  );
}
