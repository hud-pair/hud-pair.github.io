import type { ReactNode } from "react";
import { Header } from "../../_components/Header";
import { Footer } from "../../_components/Footer";
import { DocsNav } from "../_components/DocsNav";
import { DocsFooterNav } from "../_components/DocsFooterNav";

export default function DocsTopicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto flex max-w-5xl gap-12 px-5 py-16 sm:px-8 sm:py-24">
          <aside className="hidden w-48 shrink-0 md:block">
            <div className="sticky top-24">
              <span className="font-mono text-[.68rem] uppercase tracking-[.1em] text-muted">
                On this page
              </span>
              <div className="mt-4">
                <DocsNav />
              </div>
            </div>
          </aside>
          <article className="min-w-0 flex-1">
            {children}
            <DocsFooterNav />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
