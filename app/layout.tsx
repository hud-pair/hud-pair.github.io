import type { Metadata } from "next";
import { Geist_Mono, Google_Sans_Flex } from "next/font/google";
import { ScrollToTop } from "./_components/ScrollToTop";
import "./globals.css";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-gsf",
  subsets: ["latin"],
  weight: "variable",
  fallback: ["ui-sans-serif", "system-ui", "arial"],
  adjustFontFallback: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://hud-pair.github.io";
const title = "PAIR: Property Asset & Retrofit Insight";
const description =
  "The platform Housing Associations use to manage EPC performance, track Net Zero progress, and prioritise retrofit programmes with explainable AI.";
const ogImage = {
  url: "/images/screenshots/dashboard-white.png",
  width: 1920,
  height: 1080,
  alt: "PAIR portfolio dashboard showing EPC ratings and Net Zero progress across a housing portfolio",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "EPC performance",
    "Net Zero housing",
    "retrofit prioritisation",
    "housing association software",
    "property asset management",
    "explainable AI",
    "PAIR",
  ],
  authors: [{ name: "University of Huddersfield", url: "https://hud.ac.uk" }],
  creator: "University of Huddersfield",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "PAIR",
    title,
    description,
    images: [ogImage],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PAIR",
  alternateName: "Property Asset & Retrofit Insight",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description,
  url: siteUrl,
  image: `${siteUrl}${ogImage.url}`,
  publisher: {
    "@type": "Organization",
    name: "University of Huddersfield",
    url: "https://hud.ac.uk",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${googleSansFlex.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
