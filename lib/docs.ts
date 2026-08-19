export type DocMeta = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  order: number;
};

export const docs: DocMeta[] = [
  {
    slug: "how-to-install",
    eyebrow: "Getting started",
    title: "How to install",
    description: "Get PAIR running and connect it to a housing association's portfolio data.",
    order: 1,
  },
  {
    slug: "how-to-use",
    eyebrow: "Guide",
    title: "How to use",
    description: "Navigate the dashboard, filter a portfolio, and read a property's EPC detail.",
    order: 2,
  },
  {
    slug: "how-to-analyse",
    eyebrow: "Guide",
    title: "How to analyse",
    description: "Read Explorer's retrofit recommendations, feature importance, and confidence scores.",
    order: 3,
  },
];

export function getDocsSorted(): DocMeta[] {
  return [...docs].sort((a, b) => a.order - b.order);
}

export function getDoc(slug: string): DocMeta | undefined {
  return docs.find((d) => d.slug === slug);
}

export function getAdjacentDocs(slug: string): { prev: DocMeta | null; next: DocMeta | null } {
  const sorted = getDocsSorted();
  const i = sorted.findIndex((d) => d.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? sorted[i - 1] : null,
    next: i < sorted.length - 1 ? sorted[i + 1] : null,
  };
}
