import Link from "next/link";
import { Reveal } from "../../_components/Reveal";

export function DocHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal>
      <Link href="/docs" className="text-sm font-medium text-muted hover:text-brand-strong">
        &larr; Docs
      </Link>
      <span className="mt-6 block font-mono text-xs uppercase tracking-[.12em] text-brand-strong">
        {eyebrow}
      </span>
      <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
    </Reveal>
  );
}
