import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { BikeComparison } from "@/data/bikeComparisons";

interface BikeComparisonCardProps {
  bike: BikeComparison;
}

const BikeComparisonCard = ({ bike }: BikeComparisonCardProps) => {
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

        <div className="flex flex-wrap gap-1 mb-4">
          <Badge variant="outline" className="text-xs">
            {bike.category}
          </Badge>
        </div>

        <Button variant="cta" className="w-full" asChild>
          <Link to={`/sammenligninger/${bike.id}`}>Se sammenligning</Link>
        </Button>
      </div>
    </article>
  );
};

export default BikeComparisonCard;
