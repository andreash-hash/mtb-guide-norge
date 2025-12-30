import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import BikeComparisonCard from "@/components/BikeComparisonCard";
import SEO from "@/components/SEO";
import { bikeComparisons } from "@/data/bikeComparisons";
import { AlertCircle } from "lucide-react";

const Comparisons = () => {
  const comparisonsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Terrengsykkel sammenligninger",
    "description": "Tekniske sammenligninger av terrengsykler basert på produsentspesifikasjoner",
    "url": "https://mtbguide.no/sammenligninger"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Terrengsykkel sammenligninger 2024 - Tekniske spesifikasjoner | MTB Guide"
        description="Sammenlign terrengsykler fra Trek, Specialized, Canyon og flere basert på tekniske spesifikasjoner fra produsenter."
        keywords="terrengsykkel sammenligning, mtb spesifikasjoner, sykkel sammenligning, trek specs, specialized specs"
        canonicalUrl="/sammenligninger"
        structuredData={comparisonsStructuredData}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4 slide-up">
              Terrengsykkel-sammenligninger
            </h1>
            <p className="text-xl text-muted-foreground fade-in">
              Sammenlign tekniske spesifikasjoner fra ulike produsenter. 
              Faktabasert informasjon for å hjelpe deg velge riktig sykkel.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 bg-accent/10 border-y border-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Viktig informasjon:</strong> Våre sammenligninger er basert på tekniske 
              spesifikasjoner fra produsenter og forhandlere. Vi har ikke testet produktene selv, men sammenstiller 
              informasjon for å hjelpe deg med å sammenligne ulike modeller.
            </p>
          </div>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Fra budsjett til premium - sammenlign spesifikasjoner">
            Siste sammenligninger
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bikeComparisons.map((bike) => (
              <BikeComparisonCard key={bike.id} bike={bike} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Comparisons;
