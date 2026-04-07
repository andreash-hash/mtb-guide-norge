import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown, ChevronUp, Check, AlertCircle, Users, type LucideIcon } from "lucide-react";
import StarRating from "@/components/StarRating";

interface AffiliateProduct {
  name: string;
  description: string;
  price: string;
  cta: string;
  category: string;
  icon: LucideIcon;
  merchantId: number;
  url: string;
  pros?: string[];
  cons?: string[];
  targetAudience?: string;
}

// Simulerte ratings for produkter
const productRatings: Record<number, { rating: number; reviews: number }> = {
  36949: { rating: 4.7, reviews: 89 },  // 7mesh
  17973: { rating: 4.4, reviews: 156 }, // Club Ride
  35441: { rating: 4.8, reviews: 234 }, // ABUS
  20957: { rating: 4.5, reviews: 67 },  // Box Components
  17089: { rating: 4.6, reviews: 312 }, // Sea to Summit
  27753: { rating: 4.9, reviews: 78 },  // SeaSucker
  37157: { rating: 4.2, reviews: 189 }, // Allen Bike
  29929: { rating: 4.8, reviews: 23 },  // Argonaut Cycles
  23137: { rating: 4.3, reviews: 45 },  // Cognative MTB
  23725: { rating: 4.5, reviews: 112 }, // Campfire Cycling
};

interface AffiliateProductCardProps {
  product: AffiliateProduct;
  websiteId?: number;
  showDetails?: boolean;
}

const AffiliateProductCard = ({ product, websiteId = 416277, showDetails = false }: AffiliateProductCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const href = `https://www.avantlink.com/click.php?tt=cl&merchant_id=${product.merchantId}&website_id=${websiteId}&url=${encodeURIComponent(product.url)}`;
  const ratingData = productRatings[product.merchantId];
  const hasProsOrCons = product.pros?.length || product.cons?.length;

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-border bg-card">
      <CardContent className="p-4 md:p-6 flex flex-col h-full">
        <a href={href} target="_blank" rel="nofollow noopener sponsored" className="group block">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                <product.icon className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{product.category}</span>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <h3 className="font-bold text-base md:text-lg text-foreground group-hover:text-secondary transition-colors mb-2 line-clamp-1">
            {product.name}
          </h3>

          {ratingData && (
            <div className="mb-2">
              <StarRating
                rating={ratingData.rating}
                reviewCount={ratingData.reviews}
                size="sm"
              />
            </div>
          )}

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </a>

        {/* Target audience */}
        {product.targetAudience && (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Users className="h-3.5 w-3.5" />
            <span>Passer for: {product.targetAudience}</span>
          </div>
        )}

        {/* Expandable pros/cons */}
        {hasProsOrCons && (showDetails || isExpanded) && (
          <div className="mt-3 pt-3 border-t border-border space-y-2">
            {product.pros && product.pros.length > 0 && (
              <div>
                <p className="text-xs font-medium text-foreground mb-1">Fordeler:</p>
                <ul className="space-y-0.5">
                  {product.pros.slice(0, 2).map((pro, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                      <Check className="h-3 w-3 text-green-600 mt-0.5 shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {product.cons && product.cons.length > 0 && (
              <div>
                <p className="text-xs font-medium text-foreground mb-1">Vurder:</p>
                <ul className="space-y-0.5">
                  {product.cons.slice(0, 2).map((con, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                      <AlertCircle className="h-3 w-3 text-amber-600 mt-0.5 shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Toggle for pros/cons */}
        {hasProsOrCons && !showDetails && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 flex items-center gap-1 text-xs text-secondary hover:text-secondary/80 transition-colors"
          >
            {isExpanded ? (
              <>Skjul detaljer <ChevronUp className="h-3 w-3" /></>
            ) : (
              <>Vis fordeler/ulemper <ChevronDown className="h-3 w-3" /></>
            )}
          </button>
        )}

        <div className="mt-auto pt-3 border-t border-border">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-foreground">{product.price}</p>
            <Button
              variant="cta"
              size="sm"
              className="h-9 px-4"
              asChild
            >
              <a href={href} target="_blank" rel="nofollow noopener sponsored" className="flex items-center gap-1.5">
                Se pris <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export type { AffiliateProduct };
export default AffiliateProductCard;
