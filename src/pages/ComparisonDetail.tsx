import { useParams, Link } from "react-router-dom";
import { ExternalLink, ArrowLeft, Check, X, Info, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { getBikeById, bikeComparisons } from "@/data/bikeComparisons";
import BikeComparisonCard from "@/components/BikeComparisonCard";
import { Badge } from "@/components/ui/badge";

const ComparisonDetail = () => {
  const { bikeId } = useParams<{ bikeId: string }>();
  const bike = bikeId ? getBikeById(bikeId) : undefined;

  if (!bike) {
    return (
      <div className="min-h-screen bg-background">
        <SEO 
          title="Sammenligning ikke funnet | MTB Guide Norge"
          description="Beklager, vi kunne ikke finne denne sammenligningen."
          canonicalUrl="/sammenligninger"
        />
        <Header />
        <div className="pt-24 pb-16 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">
            Sammenligning ikke funnet
          </h1>
          <p className="text-muted-foreground mb-8">
            Beklager, vi kunne ikke finne denne sammenligningen.
          </p>
          <Button variant="cta" asChild>
            <Link to="/sammenligninger">Se alle sammenligninger</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": bike.name,
    "brand": {
      "@type": "Brand",
      "name": bike.brand
    },
    "description": bike.shortDescription,
    "image": `https://mtbguide.no${bike.image}`
  };

  const otherBikes = bikeComparisons.filter((b) => b.id !== bike.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${bike.name} - Teknisk sammenligning | MTB Guide Norge`}
        description={bike.shortDescription}
        keywords={`${bike.name} specs, ${bike.brand} spesifikasjoner, ${bike.name} pris, terrengsykkel sammenligning`}
        canonicalUrl={`/sammenligninger/${bike.id}`}
        ogType="article"
        structuredData={productStructuredData}
      />
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            to="/sammenligninger"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Tilbake til alle sammenligninger
          </Link>

          {/* Disclaimer banner */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Om denne sammenligningen:</strong> Informasjonen nedenfor er hentet fra 
              produsentens offisielle spesifikasjoner og produktinformasjon. MTB Guide har ikke testet denne sykkelen personlig.
            </p>
          </div>

          <article>
            {/* Hero Image */}
            <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden bg-muted mb-8">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title and Meta */}
            <div className="max-w-4xl mx-auto">
              <p className="text-secondary font-medium mb-2">{bike.brand}</p>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
                {bike.name}
              </h1>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="secondary" className="text-sm">
                  {bike.category}
                </Badge>
                <span className="text-muted-foreground">|</span>
                <span className="font-medium text-foreground">
                  {bike.priceRange}
                </span>
              </div>

              {/* Affiliate CTA */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="font-bold text-primary">
                      Interessert i denne sykkelen?
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Se pris og tilgjengelighet hos {bike.retailer}
                    </p>
                  </div>
                  <Button variant="cta" size="lg" asChild>
                    <a
                      href={bike.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="flex items-center gap-2"
                    >
                      Se hos {bike.retailer}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Product Description from Manufacturer */}
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Hva sier produsenten
                </h2>
                <div className="bg-muted/50 border border-border rounded-lg p-6 mb-6">
                  <p className="text-sm text-muted-foreground mb-2 italic">
                    Følgende informasjon er hentet fra {bike.brand}s offisielle produktbeskrivelse:
                  </p>
                  {bike.manufacturerDescription.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-foreground leading-relaxed mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Technical Suitability */}
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  📊 Teknisk egnethet
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Basert på spesifikasjonene fra produsenten, egner denne sykkelen seg til:
                </p>
                <div className="flex flex-wrap gap-2">
                  {bike.suitableFor.map((use, index) => (
                    <Badge key={index} variant="outline" className="text-sm py-1 px-3">
                      {use}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-primary mb-2">
                  Tekniske spesifikasjoner
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Hentet fra produsentens offisielle informasjon
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Ramme</span>
                    <span className="font-medium">{bike.specs.frame}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Gaffel</span>
                    <span className="font-medium">{bike.specs.fork}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Drivsystem</span>
                    <span className="font-medium">{bike.specs.drivetrain}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Bremser</span>
                    <span className="font-medium">{bike.specs.brakes}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Hjul</span>
                    <span className="font-medium">{bike.specs.wheels}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Vekt</span>
                    <span className="font-medium">{bike.specs.weight}</span>
                  </div>
                </div>
              </div>

              {/* Pros and Cons - based on specs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-secondary mb-2 flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    Styrker (basert på spesifikasjoner)
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    Ifølge tekniske data og produsentinformasjon
                  </p>
                  <ul className="space-y-2">
                    {bike.strengths.map((strength, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-foreground"
                      >
                        <Check className="h-4 w-4 text-secondary mt-1 shrink-0" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted/50 border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-muted-foreground mb-2 flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Ting å vurdere
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    Basert på spesifikasjoner sammenlignet med andre modeller
                  </p>
                  <ul className="space-y-2">
                    {bike.considerations.map((consideration, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-foreground"
                      >
                        <Info className="h-4 w-4 text-muted-foreground mt-1 shrink-0" />
                        {consideration}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center mb-16">
                <h2 className="text-2xl font-bold mb-2">
                  Vil du vite mer om {bike.name}?
                </h2>
                <p className="text-primary-foreground/80 mb-6">
                  Se alle detaljer og sjekk tilgjengelighet hos {bike.retailer}
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-background text-primary hover:bg-background/90"
                  asChild
                >
                  <a
                    href={bike.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="flex items-center gap-2"
                  >
                    Se hos {bike.retailer}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </article>

          {/* Other Comparisons */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-8 text-center">
              Sammenlign med andre modeller
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherBikes.map((otherBike) => (
                <BikeComparisonCard key={otherBike.id} bike={otherBike} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComparisonDetail;
