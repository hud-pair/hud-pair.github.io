"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAdjacentDocs } from "@/lib/docs";

export function DocsFooterNav() {
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean).pop() ?? "";
  const { prev, next } = getAdjacentDocs(slug);

  if (!prev && !next) return null;

  return (
    <nav className="mt-16 flex items-center justify-between gap-4 border-t border-line pt-8">
      {prev ? (
        <Link href={`/docs/${prev.slug}`} className="group flex flex-col text-left">
          <span className="text-xs font-medium text-muted">&larr; Previous</span>
          <span className="mt-1 font-semibold text-ink group-hover:text-brand-strong">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={`/docs/${next.slug}`} className="group flex flex-col text-right">
          <span className="text-xs font-medium text-muted">Next &rarr;</span>
          <span className="mt-1 font-semibold text-ink group-hover:text-brand-strong">
            {next.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
