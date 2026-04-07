import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideCard from "@/components/GuideCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import HowToChoose, { bikeSelectionSteps } from "@/components/HowToChoose";
import QuickBuyBanner from "@/components/QuickBuyBanner";
import { guides } from "@/data/guides";
import { Bike, BookOpen, Wrench, Map } from "lucide-react";

// Kategorier for filtrering/gruppering
const categories = [
  { id: "all", name: "Alle guider", icon: BookOpen },
  { id: "beginner", name: "For nybegynnere", icon: Bike },
  { id: "maintenance", name: "Vedlikehold", icon: Wrench },
  { id: "trails", name: "Stier & terreng", icon: Map },
];

// Featured guider (vises øverst)
const featuredGuideIds = ["velg-riktig-terrengsykkel", "mtb-for-nybegynnere", "vedlikehold-terrengsykkel"];

const Guides = () => {
  const featuredGuides = guides.filter(g => featuredGuideIds.includes(g.id));
  const otherGuides = guides.filter(g => !featuredGuideIds.includes(g.id));

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Terrengsykkel guider – Alt om MTB | MTB Test Norge"
        description="Lær alt om terrengsykling. Guider for nybegynnere og erfarne. Vedlikehold, teknikk, utstyr og stier i Norge."
        keywords="mtb guide, terrengsykkel tips, mtb for nybegynnere, sykkelvedlikehold, mtb teknikk"
        canonicalUrl="/guider"
        breadcrumbs={[
          { name: "Hjem", path: "/" },
          { name: "Guider", path: "/guider" },
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Terrengsykkel guider",
          "description": "Omfattende guider om terrengsykling for alle nivåer",
          "url": "https://mtbtest.no/guider"
        }}
      />
      <AffiliateDisclosure variant="banner" />
      <Header />
      <Breadcrumbs items={[
        { name: "Hjem", path: "/" },
        { name: "Guider", path: "/guider" },
      ]} />

      {/* Hero */}
      <section className="pt-8 md:pt-12 pb-8 md:pb-12 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 md:mb-4">
            Alt du trenger å vite om terrengsykling
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Fra nybegynner til ekspert – våre omfattende guider hjelper deg på veien
          </p>
        </div>
      </section>

      {/* Featured guider */}
      {featuredGuides.length > 0 && (
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">
              Populære guider
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {featuredGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Slik velger du - mellom seksjoner */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <HowToChoose
              title="Slik velger du riktig sykkel"
              subtitle="Tre enkle steg for å finne din perfekte terrengsykkel"
              steps={bikeSelectionSteps}
              ctaText="Se sammenligninger"
              ctaLink="/sammenligninger"
            />
          </div>
        </div>
      </section>

      {/* Alle guider */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-primary">
              Alle guider ({guides.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {otherGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <QuickBuyBanner />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guides;
