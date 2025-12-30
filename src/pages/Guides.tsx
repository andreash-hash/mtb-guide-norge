import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideCard from "@/components/GuideCard";
import SEO from "@/components/SEO";
import { guides } from "@/data/guides";

const Guides = () => {
  const guidesStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Terrengsykkel guider",
    "description": "Omfattende guider om terrengsykling for alle nivåer",
    "url": "https://mtbguide.no/guider"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Terrengsykkel guider - Alt om MTB | MTB Guide Norge"
        description="Lær alt om terrengsykling. Guider for nybegynnere og erfarne. Vedlikehold, teknikk og utstyr."
        keywords="mtb guide, terrengsykkel tips, mtb for nybegynnere, sykkelvedlikehold, mtb teknikk"
        canonicalUrl="/guider"
        structuredData={guidesStructuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Alt du trenger å vite om terrengsykling
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fra nybegynner til ekspert – våre omfattende guider hjelper deg på veien
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guides;
