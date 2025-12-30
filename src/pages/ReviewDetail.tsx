import { useParams, Link } from "react-router-dom";
import { Star, ExternalLink, ArrowLeft, Check, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getBikeById, bikeReviews } from "@/data/bikeReviews";
import BikeReviewCard from "@/components/BikeReviewCard";

const ReviewDetail = () => {
  const { bikeId } = useParams<{ bikeId: string }>();
  const bike = bikeId ? getBikeById(bikeId) : undefined;

  if (!bike) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">
            Anmeldelse ikke funnet
          </h1>
          <p className="text-muted-foreground mb-8">
            Beklager, vi kunne ikke finne denne anmeldelsen.
          </p>
          <Button variant="cta" asChild>
            <Link to="/anmeldelser">Se alle anmeldelser</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="h-6 w-6 fill-accent text-accent" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star key={i} className="h-6 w-6 fill-accent/50 text-accent" />
        );
      } else {
        stars.push(
          <Star key={i} className="h-6 w-6 text-muted-foreground/30" />
        );
      }
    }
    return stars;
  };

  const otherBikes = bikeReviews.filter((b) => b.id !== bike.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            to="/anmeldelser"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Tilbake til alle anmeldelser
          </Link>

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

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {renderStars(bike.rating)}
                  <span className="ml-2 text-lg font-medium">
                    {bike.rating}/5
                  </span>
                </div>
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
                      Sjekk pris og tilgjengelighet hos {bike.retailer}
                    </p>
                  </div>
                  <Button variant="cta" size="lg" asChild>
                    <a
                      href={bike.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="flex items-center gap-2"
                    >
                      Kjøp hos {bike.retailer}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Full Review */}
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Vår vurdering
                </h2>
                {bike.fullReview.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-foreground leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Specs */}
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-primary mb-4">
                  Tekniske spesifikasjoner
                </h2>
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

              {/* Pros and Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-secondary mb-4 flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    Fordeler
                  </h3>
                  <ul className="space-y-2">
                    {bike.pros.map((pro, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-foreground"
                      >
                        <Check className="h-4 w-4 text-secondary mt-1 shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-destructive mb-4 flex items-center gap-2">
                    <X className="h-5 w-5" />
                    Ulemper
                  </h3>
                  <ul className="space-y-2">
                    {bike.cons.map((con, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-foreground"
                      >
                        <X className="h-4 w-4 text-destructive mt-1 shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center mb-16">
                <h2 className="text-2xl font-bold mb-2">
                  Klar til å prøve {bike.name}?
                </h2>
                <p className="text-primary-foreground/80 mb-6">
                  Sjekk tilgjengelighet og bestill hos {bike.retailer}
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
                    Kjøp hos {bike.retailer}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </article>

          {/* Other Reviews */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-8 text-center">
              Se flere terrengsykler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherBikes.map((otherBike) => (
                <BikeReviewCard key={otherBike.id} bike={otherBike} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReviewDetail;
