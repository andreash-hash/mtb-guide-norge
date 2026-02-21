import { useParams, Link } from "react-router-dom";
import { ExternalLink, ArrowLeft, Check, Info, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
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
        <SEOHead title="Sammenligning ikke funnet | MTB Test Norge" description="Beklager, vi kunne ikke finne denne sammenligningen." canonicalUrl="/sammenligninger" noindex />
        <Header />
        <div className="pt-24 pb-16 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Sammenligning ikke funnet</h1>
          <p className="text-muted-foreground mb-8">Beklager, vi kunne ikke finne denne sammenligningen.</p>
          <Button variant="cta" asChild><Link to="/sammenligninger">Se alle sammenligninger</Link></Button>
        </div>
        <Footer />
      </div>
    );
  }

  const breadcrumbs = [
    { name: "Hjem", path: "/" },
    { name: "Sammenligninger", path: "/sammenligninger" },
    { name: bike.name, path: `/sammenligninger/${bike.id}` },
  ];

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": bike.name,
    "brand": { "@type": "Brand", "name": bike.brand },
    "description": bike.shortDescription,
    "image": `https://mtbtest.no${bike.image}`
  };

  const otherBikes = bikeComparisons.filter((b) => b.id !== bike.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${bike.name} – Teknisk sammenligning | MTB Test Norge`}
        description={bike.shortDescription}
        keywords={`${bike.name} specs, ${bike.brand} spesifikasjoner, ${bike.name} pris, terrengsykkel`}
        canonicalUrl={`/sammenligninger/${bike.id}`}
        ogType="article"
        breadcrumbs={breadcrumbs}
        structuredData={productStructuredData}
      />
      <Header />
      <Breadcrumbs items={breadcrumbs} />

      <main className="pt-8 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/sammenligninger" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />Tilbake til alle sammenligninger
          </Link>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Om denne sammenligningen:</strong> Informasjonen nedenfor er hentet fra produsentens offisielle spesifikasjoner. MTB Test har ikke testet denne sykkelen personlig.
            </p>
          </div>

          <article>
            <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden bg-muted mb-8">
              <img src={bike.image} alt={bike.name} className="w-full h-full object-cover" loading="lazy" />
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-secondary font-medium mb-2">{bike.brand}</p>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">{bike.name}</h1>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="secondary" className="text-sm">{bike.category}</Badge>
                <span className="text-muted-foreground">|</span>
                <span className="font-medium text-foreground">{bike.priceRange}</span>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="font-bold text-primary">Interessert i denne sykkelen?</p>
                    <p className="text-muted-foreground text-sm">Se pris og tilgjengelighet hos {bike.retailer}</p>
                  </div>
                  <Button variant="cta" size="lg" asChild>
                    <a href={bike.affiliateLink} target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-2">
                      Se hos {bike.retailer}<ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2"><Info className="h-5 w-5" />Hva sier produsenten</h2>
                <div className="bg-muted/50 border border-border rounded-lg p-6 mb-6">
                  <p className="text-sm text-muted-foreground mb-2 italic">Følgende informasjon er hentet fra {bike.brand}s offisielle produktbeskrivelse:</p>
                  {bike.manufacturerDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-foreground leading-relaxed mb-4 last:mb-0">{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">📊 Teknisk egnethet</h2>
                <p className="text-sm text-muted-foreground mb-4">Basert på spesifikasjonene fra produsenten:</p>
                <div className="flex flex-wrap gap-2">
                  {bike.suitableFor.map((use, index) => (
                    <Badge key={index} variant="outline" className="text-sm py-1 px-3">{use}</Badge>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-primary mb-2">Tekniske spesifikasjoner</h2>
                <p className="text-sm text-muted-foreground mb-4">Hentet fra produsentens offisielle informasjon</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries({ Ramme: bike.specs.frame, Gaffel: bike.specs.fork, Drivsystem: bike.specs.drivetrain, Bremser: bike.specs.brakes, Hjul: bike.specs.wheels, Vekt: bike.specs.weight }).map(([label, value]) => (
                    <div key={label} className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-secondary mb-2 flex items-center gap-2"><Check className="h-5 w-5" />Styrker (basert på spesifikasjoner)</h3>
                  <p className="text-xs text-muted-foreground mb-4">Ifølge tekniske data og produsentinformasjon</p>
                  <ul className="space-y-2">
                    {bike.strengths.map((s, i) => <li key={i} className="flex items-start gap-2 text-foreground"><Check className="h-4 w-4 text-secondary mt-1 shrink-0" />{s}</li>)}
                  </ul>
                </div>
                <div className="bg-muted/50 border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-muted-foreground mb-2 flex items-center gap-2"><Info className="h-5 w-5" />Ting å vurdere</h3>
                  <p className="text-xs text-muted-foreground mb-4">Basert på spesifikasjoner sammenlignet med andre modeller</p>
                  <ul className="space-y-2">
                    {bike.considerations.map((c, i) => <li key={i} className="flex items-start gap-2 text-foreground"><Info className="h-4 w-4 text-muted-foreground mt-1 shrink-0" />{c}</li>)}
                  </ul>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center mb-16">
                <h2 className="text-2xl font-bold mb-2">Vil du vite mer om {bike.name}?</h2>
                <p className="text-primary-foreground/80 mb-6">Se alle detaljer og sjekk tilgjengelighet hos {bike.retailer}</p>
                <Button variant="outline" size="lg" className="bg-background text-primary hover:bg-background/90" asChild>
                  <a href={bike.affiliateLink} target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-2">
                    Se hos {bike.retailer}<ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </article>

          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-8 text-center">Sammenlign med andre modeller</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherBikes.map((ob) => <BikeComparisonCard key={ob.id} bike={ob} />)}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComparisonDetail;
