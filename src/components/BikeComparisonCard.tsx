import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StarRating from "@/components/StarRating";
import type { BikeComparison } from "@/data/bikeComparisons";

interface BikeComparisonCardProps {
  bike: BikeComparison;
}

// Simulerte ratings
const bikeRatings: Record<string, { rating: number; reviews: number }> = {
  "trek-fuel-ex-7": { rating: 4.5, reviews: 127 },
  "specialized-stumpjumper": { rating: 4.8, reviews: 89 },
  "canyon-spectral": { rating: 4.6, reviews: 203 },
  "santa-cruz-hightower": { rating: 4.7, reviews: 64 },
  "yeti-sb130": { rating: 4.9, reviews: 45 },
  "norco-fluid-fs": { rating: 4.3, reviews: 156 },
};

const BikeComparisonCard = ({ bike }: BikeComparisonCardProps) => {
  const ratingData = bikeRatings[bike.id];

  return (
    <article className="bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-border">
      <div className="aspect-[4/3] overflow-hidden bg-muted relative">
        <img
          src={bike.image}
          alt={bike.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground">
          {bike.category}
        </Badge>
      </div>

      <div className="p-4 md:p-6">
        <p className="text-sm text-secondary font-medium mb-1">{bike.brand}</p>
        <h3 className="text-lg md:text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-200 line-clamp-1">
          {bike.name}
        </h3>

        {ratingData && (
          <div className="mb-3">
            <StarRating
              rating={ratingData.rating}
              reviewCount={ratingData.reviews}
              size="sm"
            />
          </div>
        )}

        <p className="text-muted-foreground mb-3 text-sm leading-relaxed line-clamp-2">
          {bike.shortDescription}
        </p>

        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-foreground">
            {bike.priceRange.split(" - ")[0]}
          </p>
          <span className="text-xs text-muted-foreground">{bike.specs.weight}</span>
        </div>

        <Button variant="cta" className="w-full h-11 text-base" asChild>
          <Link to={`/sammenligninger/${bike.id}`}>Se sammenligning</Link>
        </Button>
      </div>
    </article>
  );
};

export default BikeComparisonCard;
