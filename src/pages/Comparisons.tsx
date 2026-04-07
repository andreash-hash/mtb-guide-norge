import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import BikeComparisonCard from "@/components/BikeComparisonCard";
import ProductComparisonTable from "@/components/ProductComparisonTable";
import QuickBuyBanner from "@/components/QuickBuyBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { Button } from "@/components/ui/button";
import { bikeComparisons } from "@/data/bikeComparisons";
import { AlertCircle, LayoutGrid, Table } from "lucide-react";

const Comparisons = () => {
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Terrengsykkel sammenligninger 2025 – Spesifikasjoner | MTB Test"
        description="Sammenlign terrengsykler fra Trek, Specialized, Canyon og flere basert på tekniske spesifikasjoner fra produsenter."
        keywords="terrengsykkel sammenligning, mtb spesifikasjoner, sykkel sammenligning, trek specs, specialized specs"
        canonicalUrl="/sammenligninger"
        breadcrumbs={[
          { name: "Hjem", path: "/" },
          { name: "Sammenligninger", path: "/sammenligninger" },
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Terrengsykkel sammenligninger",
          "description": "Tekniske sammenligninger av terrengsykler basert på produsentspesifikasjoner",
          "url": "https://mtbtest.no/sammenligninger"
        }}
      />
      <AffiliateDisclosure variant="banner" />
      <Header />
      <Breadcrumbs items={[
        { name: "Hjem", path: "/" },
        { name: "Sammenligninger", path: "/sammenligninger" },
      ]} />

      <section className="relative pt-12 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4 slide-up">
              Terrengsykkel-sammenligninger
            </h1>
            <p className="text-xl text-muted-foreground fade-in">
              Sammenlign tekniske spesifikasjoner fra ulike produsenter. Faktabasert informasjon for å hjelpe deg velge riktig sykkel.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 bg-accent/10 border-y border-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Viktig informasjon:</strong> Våre sammenligninger er basert på tekniske
              spesifikasjoner fra produsenter og forhandlere. Vi har ikke testet produktene selv.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-primary">Alle sammenligninger</h2>
              <p className="text-muted-foreground text-sm mt-1">
                {bikeComparisons.length} sykler fra budsjett til premium
              </p>
            </div>

            {/* View toggle - kun på desktop */}
            <div className="hidden md:flex items-center gap-2 bg-muted rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="gap-2"
              >
                <LayoutGrid className="h-4 w-4" />
                Kort
              </Button>
              <Button
                variant={viewMode === "table" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("table")}
                className="gap-2"
              >
                <Table className="h-4 w-4" />
                Tabell
              </Button>
            </div>
          </div>

          {/* Tabell-visning (desktop) */}
          {viewMode === "table" && (
            <div className="hidden md:block">
              <ProductComparisonTable bikes={bikeComparisons} />
            </div>
          )}

          {/* Kort-visning */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {bikeComparisons.map((bike) => (
                <BikeComparisonCard key={bike.id} bike={bike} />
              ))}
            </div>
          )}

          {/* Mobil viser alltid kort */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bikeComparisons.map((bike) => (
              <BikeComparisonCard key={bike.id} bike={bike} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <QuickBuyBanner variant="compact" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Comparisons;
