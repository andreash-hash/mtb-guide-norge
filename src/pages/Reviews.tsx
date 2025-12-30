import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import BikeReviewCard from "@/components/BikeReviewCard";
import SEO from "@/components/SEO";
import { bikeReviews } from "@/data/bikeReviews";

const Reviews = () => {
  const reviewsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Terrengsykkel anmeldelser",
    "description": "Grundige tester og anmeldelser av terrengsykler",
    "url": "https://mtbguide.no/anmeldelser"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Terrengsykkel anmeldelser 2024 - Grundige tester | MTB Guide"
        description="Vi tester terrengsykler fra Trek, Specialized, Canyon og flere. Les våre ærlige anmeldelser før du kjøper."
        keywords="terrengsykkel test, mtb anmeldelse, sykkeltest, trek test, specialized test"
        canonicalUrl="/anmeldelser"
        structuredData={reviewsStructuredData}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4 slide-up">
              Grundige terrengsykkel-anmeldelser
            </h1>
            <p className="text-xl text-muted-foreground fade-in">
              Vi tester sykler så du slipper. Ærlige vurderinger, detaljerte tester og konkrete anbefalinger.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Fra budsjett til premium - finn sykkelen som passer deg">
            Våre siste anmeldelser
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bikeReviews.map((bike) => (
              <BikeReviewCard key={bike.id} bike={bike} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
