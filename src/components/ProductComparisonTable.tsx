import { Link } from "react-router-dom";
import { ExternalLink, Check, X, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StarRating from "@/components/StarRating";
import type { BikeComparison } from "@/data/bikeComparisons";

interface ProductComparisonTableProps {
  bikes: BikeComparison[];
  showRatings?: boolean;
}

// Simulerte ratings for demonstrasjon
const bikeRatings: Record<string, { rating: number; reviews: number }> = {
  "trek-fuel-ex-7": { rating: 4.5, reviews: 127 },
  "specialized-stumpjumper": { rating: 4.8, reviews: 89 },
  "canyon-spectral": { rating: 4.6, reviews: 203 },
  "santa-cruz-hightower": { rating: 4.7, reviews: 64 },
  "yeti-sb130": { rating: 4.9, reviews: 45 },
  "norco-fluid-fs": { rating: 4.3, reviews: 156 },
};

const ProductComparisonTable = ({ bikes, showRatings = true }: ProductComparisonTableProps) => {
  return (
    <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
      <table className="w-full border-collapse min-w-[640px]">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="text-left py-4 px-3 font-semibold text-foreground bg-muted/30 sticky left-0 z-10 min-w-[120px]">
              Spesifikasjoner
            </th>
            {bikes.map((bike) => (
              <th key={bike.id} className="text-center py-4 px-3 min-w-[180px]">
                <div className="space-y-2">
                  <p className="text-xs text-secondary font-medium">{bike.brand}</p>
                  <p className="font-bold text-foreground text-sm leading-tight">{bike.name}</p>
                  {showRatings && bikeRatings[bike.id] && (
                    <div className="flex justify-center">
                      <StarRating
                        rating={bikeRatings[bike.id].rating}
                        reviewCount={bikeRatings[bike.id].reviews}
                        size="sm"
                      />
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Pris */}
          <tr className="border-b border-border bg-muted/20">
            <td className="py-3 px-3 font-medium text-foreground bg-muted/30 sticky left-0 z-10">
              Pris
            </td>
            {bikes.map((bike) => (
              <td key={bike.id} className="py-3 px-3 text-center">
                <span className="font-semibold text-primary">{bike.priceRange.split(" - ")[0]}</span>
              </td>
            ))}
          </tr>

          {/* Kategori */}
          <tr className="border-b border-border">
            <td className="py-3 px-3 font-medium text-foreground bg-muted/30 sticky left-0 z-10">
              Kategori
            </td>
            {bikes.map((bike) => (
              <td key={bike.id} className="py-3 px-3 text-center">
                <Badge variant="outline" className="text-xs">
                  {bike.category}
                </Badge>
              </td>
            ))}
          </tr>

          {/* Ramme */}
          <tr className="border-b border-border bg-muted/20">
            <td className="py-3 px-3 font-medium text-foreground bg-muted/30 sticky left-0 z-10">
              Ramme
            </td>
            {bikes.map((bike) => (
              <td key={bike.id} className="py-3 px-3 text-center text-sm text-muted-foreground">
                {bike.specs.frame}
              </td>
            ))}
          </tr>

          {/* Gaffel */}
          <tr className="border-b border-border">
            <td className="py-3 px-3 font-medium text-foreground bg-muted/30 sticky left-0 z-10">
              Gaffel
            </td>
            {bikes.map((bike) => (
              <td key={bike.id} className="py-3 px-3 text-center text-sm text-muted-foreground">
                {bike.specs.fork}
              </td>
            ))}
          </tr>

          {/* Drivsystem */}
          <tr className="border-b border-border bg-muted/20">
            <td className="py-3 px-3 font-medium text-foreground bg-muted/30 sticky left-0 z-10">
              Drivsystem
            </td>
            {bikes.map((bike) => (
              <td key={bike.id} className="py-3 px-3 text-center text-sm text-muted-foreground">
                {bike.specs.drivetrain}
              </td>
            ))}
          </tr>

          {/* Bremser */}
          <tr className="border-b border-border">
            <td className="py-3 px-3 font-medium text-foreground bg-muted/30 sticky left-0 z-10">
              Bremser
            </td>
            {bikes.map((bike) => (
              <td key={bike.id} className="py-3 px-3 text-center text-sm text-muted-foreground">
                {bike.specs.brakes}
              </td>
            ))}
          </tr>

          {/* Hjul */}
          <tr className="border-b border-border bg-muted/20">
            <td className="py-3 px-3 font-medium text-foreground bg-muted/30 sticky left-0 z-10">
              Hjul
            </td>
            {bikes.map((bike) => (
              <td key={bike.id} className="py-3 px-3 text-center text-sm text-muted-foreground">
                {bike.specs.wheels}
              </td>
            ))}
          </tr>

          {/* Vekt */}
          <tr className="border-b border-border">
            <td className="py-3 px-3 font-medium text-foreground bg-muted/30 sticky left-0 z-10">
              Vekt
            </td>
            {bikes.map((bike) => (
              <td key={bike.id} className="py-3 px-3 text-center">
                <span className="font-medium text-foreground">{bike.specs.weight}</span>
              </td>
            ))}
          </tr>

          {/* CTA-rad */}
          <tr className="bg-muted/30">
            <td className="py-4 px-3 font-medium text-foreground bg-muted/50 sticky left-0 z-10">
              Handling
            </td>
            {bikes.map((bike) => (
              <td key={bike.id} className="py-4 px-3 text-center">
                <div className="flex flex-col gap-2">
                  <Button variant="cta" size="sm" className="w-full" asChild>
                    <Link to={`/sammenligninger/${bike.id}`}>
                      Se detaljer
                    </Link>
                  </Button>
                  {bike.affiliateLink !== "#" && (
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a
                        href={bike.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="flex items-center justify-center gap-1"
                      >
                        Se pris <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductComparisonTable;
