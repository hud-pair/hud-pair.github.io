import type { Metadata } from "next";
import { Geist_Mono, Google_Sans_Flex } from "next/font/google";
import "./globals.css";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-gsf",
  subsets: ["latin"],
  weight: "variable",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PAIR: Property Asset & Retrofit Insight",
  description:
    "The platform Housing Associations use to manage EPC performance, track Net Zero progress, and prioritise retrofit programmes with explainable AI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${googleSansFlex.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
