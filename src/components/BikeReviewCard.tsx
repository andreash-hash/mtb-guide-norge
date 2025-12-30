import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { BikeReview } from "@/data/bikeReviews";

interface BikeReviewCardProps {
  bike: BikeReview;
}

const BikeReviewCard = ({ bike }: BikeReviewCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star key={i} className="h-5 w-5 fill-accent/50 text-accent" />
        );
      } else {
        stars.push(
          <Star key={i} className="h-5 w-5 text-muted-foreground/30" />
        );
      }
    }
    return stars;
  };

  return (
    <article className="bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-border">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={bike.image}
          alt={bike.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <p className="text-sm text-secondary font-medium mb-1">{bike.brand}</p>
        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-200">
          {bike.name}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-2">
          {bike.shortDescription}
        </p>

        <p className="text-sm font-medium text-foreground mb-3">
          {bike.priceRange}
        </p>

        <div className="flex items-center gap-1 mb-4">
          {renderStars(bike.rating)}
          <span className="ml-2 text-sm text-muted-foreground">
            {bike.rating}/5
          </span>
        </div>

        <Button variant="cta" className="w-full" asChild>
          <Link to={`/anmeldelser/${bike.id}`}>Les anmeldelse</Link>
        </Button>
      </div>
    </article>
  );
};

export default BikeReviewCard;
