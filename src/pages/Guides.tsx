import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideCard from "@/components/GuideCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { guides } from "@/data/guides";

const Guides = () => {
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

      <section className="pt-12 pb-16 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Alt du trenger å vite om terrengsykling
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fra nybegynner til ekspert – våre omfattende guider hjelper deg på veien
          </p>
        </div>
      </section>

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
