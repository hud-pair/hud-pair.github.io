"use client";

import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { Pillars } from "./_components/Pillars";
import { FeatureGrid } from "./_components/FeatureGrid";
import { Spotlight } from "./_components/Spotlight";
import { ContactCTA } from "./_components/ContactCTA";
import { Ladder } from "./_components/Ladder";
import { StackSection } from "./_components/StackSection";
import { CompareSlider } from "./_components/CompareSlider";
import { ImageSlide } from "./_components/ImageSlide";
import { VideoSlide } from "./_components/VideoSlide";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Pillars />
        <FeatureGrid />

        <StackSection index={0}>
          <Spotlight
            eyebrow="Portfolio dashboard"
            title="Your entire housing stock, at a glance"
            body="Stop toggling between spreadsheets. Total properties, average EPC rating, CO2 output, solar PV coverage, and retrofit measures completed, all live on one screen."
            bullets={[
              "EPC band distribution across the portfolio",
              "Monthly energy consumption, gas versus electricity",
              "Retrofit measures completed, filterable by area",
              "Properties requiring attention, ranked by risk",
            ]}
            image="/images/screenshots/dashboard-white.png"
            imageAlt="PAIR portfolio dashboard showing EPC band distribution and retrofit measures"
          />
        </StackSection>

        <StackSection index={1}>
          <Spotlight
            eyebrow="Net Zero dashboard"
            title="Visualise the path to Net Zero"
            body="Track carbon output across properties and fleet vehicles against your target year, with a reduction pathway and an honest read on whether you're on track."
            bullets={[
              "Organisational footprint by source: properties, fleet, travel",
              "Progress against baseline and target year",
              "On-track probability, not just a trend line",
            ]}
            image="/images/screenshots/dashboard-net-zero.png"
            imageAlt="PAIR Net Zero dashboard showing organisational carbon footprint and reduction progress"
          />
        </StackSection>

        <StackSection index={2}>
          <Spotlight
            eyebrow="EPC certificate lookup"
            title="Live EPC data, straight from source"
            body="PAIR integrates directly with the GOV.UK EPC register, so your team sees current and potential ratings, construction details, and suggested improvements without manual lookups."
            image="/images/screenshots/epc-details.png"
            imageAlt="PAIR EPC certificate detail view showing current and potential energy rating"
            extra={
              <div className="mt-8">
                <Ladder compact currentLabel="This home today: band D" targetLabel="Potential: band B" />
              </div>
            }
          />
        </StackSection>

        <StackSection index={3}>
          <Spotlight
            eyebrow="Portfolio to property"
            title="From six thousand homes to one front door"
            body="Filter the full portfolio by local authority, SAP band, or retrofit measure, then drop into a single property's EPC history, energy costs, and construction detail."
            slides={[
              () => (
                <CompareSlider
                  frameless
                  beforeSrc="/images/screenshots/houses-white.png"
                  afterSrc="/images/screenshots/houses-dark.png"
                  beforeLabel="Light mode"
                  afterLabel="Dark mode"
                />
              ),
              () => (
                <ImageSlide
                  src="/images/screenshots/house-detail-1.png"
                  alt="PAIR single property detail view showing EPC performance profile"
                />
              ),
              () => (
                <ImageSlide
                  src="/images/screenshots/house-detail-2.png"
                  alt="PAIR single property detail view showing energy consumption breakdown"
                />
              ),
            ]}
          />
        </StackSection>

        <StackSection index={4}>
          <Spotlight
            dark
            eyebrow="Explainable AI"
            title="AI that shows its reasoning"
            body="PAIR's models rank properties by performance and recommend retrofit measures with a feature-by-feature breakdown of why, run on whichever model provider your organisation trusts."
            bullets={[
              "Confidence scores and recorded inference history, not a black box",
              "Feature importance for every classification",
            ]}
            slides={[
              (active) => (
                <VideoSlide
                  active={active}
                  src="/images/screenshots/genesis-quantum-run.mp4"
                  poster="/images/screenshots/model-usage.png"
                />
              ),
              () => (
                <ImageSlide
                  src="/images/screenshots/model-usage.png"
                  alt="PAIR Explorer model showing performance metrics and feature importance"
                />
              ),
            ]}
          />
        </StackSection>

        <StackSection index={5}>
          <Spotlight
            eyebrow="Model choice"
            title="Bring the LLM your organisation already trusts"
            body="Run PAIR's AI features on a local model for full data privacy, or connect Google Gemini or Anthropic Claude when you want more horsepower. Switch providers any time."
            bullets={[
              "Local models via Ollama, so data never leaves your infrastructure",
              "Or connect Google Gemini or Anthropic Claude",
              "Pull and manage models directly from the app",
            ]}
            image="/images/screenshots/llm-providors.png"
            imageAlt="PAIR LLM configuration screen showing Ollama, Gemini, and Claude provider options"
          />
        </StackSection>

        <StackSection index={6}>
          <Spotlight
            eyebrow="Built for teams"
            title="Role based access for everyone involved"
            body="Admins, staff, and viewers see exactly what their role needs, from asset managers running models to executives reviewing progress."
            image="/images/screenshots/user-management.png"
            imageAlt="PAIR user management screen showing roles and account status"
          />
        </StackSection>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
