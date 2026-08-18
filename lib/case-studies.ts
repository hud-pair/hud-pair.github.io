export type CaseStudySection = {
  heading: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  dek: string;
  cover: string;
  coverAlt: string;
  sections: CaseStudySection[];
  showLadder?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "together-housing-group",
    eyebrow: "Associated partner",
    title: "Together Housing Group: piloting a smarter retrofit programme",
    dek: "The regional housing association helping shape PAIR from the inside, as an early pilot partner rather than a finished success story.",
    cover: "/images/screenshots/dashboard-white.png",
    coverAlt: "PAIR portfolio dashboard used in the Together Housing Group pilot",
    sections: [
      {
        heading: "Why Together Housing Group",
        body: "Together Housing Group manages a large portfolio of homes across the North of England, and carries the same pressure every housing association is under: EPC compliance targets, Net Zero commitments, and a retrofit budget that has to be spent where it matters most. That combination made them the right partner to build PAIR against from day one, rather than in the abstract.",
      },
      {
        heading: "What the pilot actually shapes",
        body: "As the project's associated partner, Together Housing Group's day to day retrofit questions have directly shaped what PAIR builds: which filters an asset manager reaches for first, what a useful EPC drill down needs to show, and how much explanation a recommendation needs before someone will act on it.",
      },
      {
        heading: "Where it stands",
        body: "This is still an early pilot, not a finished rollout, so we are not going to dress it up with numbers that do not exist yet. What we can say is that the feedback loop is real: PAIR's dashboard, EPC lookup, and recommendation engine all changed shape in response to it.",
      },
    ],
  },
  {
    slug: "pilot-portfolio-epc-uplift",
    eyebrow: "Product walkthrough",
    title: "Inside the pilot portfolio: from 6,867 homes to one retrofit plan",
    dek: "A worked example, using the platform's own pilot dataset, of how PAIR turns a large portfolio into a single, explainable next step.",
    cover: "/images/screenshots/houses-list.png",
    coverAlt: "PAIR properties list showing the pilot portfolio across Pendle",
    sections: [
      {
        heading: "The portfolio",
        body: "The pilot dataset covers 6,867 homes across the Pendle area, mostly houses, bungalows, and flats around Barrowford and Nelson. The average SAP score sits in the low 70s: a solid D, still short of the C band housing associations are increasingly expected to reach.",
      },
      {
        heading: "One property, drilled down",
        body: "Take 39 Newsome Road in Huddersfield. Its EPC certificate shows a current rating of band D (62), with a potential rating of band B (86) if the recommended improvements go ahead, cutting estimated CO2 output from 6.20 to 2.10 tonnes a year. That gap between current and potential is exactly what PAIR is built to surface, at the scale of a single home or an entire portfolio.",
      },
      {
        heading: "How the recommendation gets made",
        body: "PAIR's Explorer model ranks each property by classification, hot water, secondary heating, and wall type are consistently the strongest predictors in this portfolio, and returns a confidence score alongside every result. Nothing is a black box: the same feature importance chart an asset manager sees is the one shown throughout this site.",
      },
    ],
    showLadder: true,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
