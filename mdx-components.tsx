import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Screenshot } from "@/app/docs/_components/Screenshot";
import { Video } from "@/app/docs/_components/Video";
import { Callout } from "@/app/docs/_components/Callout";

// Global styling + component mapping for every .mdx file in the app.
// New doc pages get this styling for free — nothing to import, nothing to copy-paste.
const components: MDXComponents = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="font-display text-3xl font-bold text-ink">{children}</h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="mt-12 font-display text-2xl font-bold text-ink">{children}</h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="mt-8 font-display text-lg font-bold text-ink">{children}</h3>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="mt-4 text-base leading-relaxed text-muted">{children}</p>
  ),
  a: ({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const linkClass = "font-medium text-brand-strong underline underline-offset-2 hover:text-brand";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={linkClass}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass} {...props}>
        {children}
      </a>
    );
  },
  strong: ({ children }: { children: ReactNode }) => (
    <strong className="font-semibold text-ink">{children}</strong>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted">{children}</ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-relaxed text-muted">
      {children}
    </ol>
  ),
  li: ({ children }: { children: ReactNode }) => <li>{children}</li>,
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="mt-6 border-l-2 border-brand pl-4 text-base italic text-muted">
      {children}
    </blockquote>
  ),
  code: ({ children }: { children: ReactNode }) => (
    <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[.85em] text-ink">
      {children}
    </code>
  ),
  hr: () => <hr className="mt-10 border-line" />,
  // Custom embeds available in every .mdx file without an explicit import.
  Screenshot,
  Video,
  Callout,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
