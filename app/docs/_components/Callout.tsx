import type { ReactNode } from "react";

const TONE_STYLES = {
  info: "border-brand/30 bg-brand/5",
  warning: "border-epc-e/40 bg-epc-e/10",
} as const;

export function Callout({
  children,
  tone = "info",
}: {
  children: ReactNode;
  tone?: keyof typeof TONE_STYLES;
}) {
  return (
    <div
      className={`my-6 rounded-xl border px-5 py-4 text-sm leading-relaxed text-ink ${TONE_STYLES[tone]}`}
    >
      {children}
    </div>
  );
}
