import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, type LucideIcon } from "lucide-react";
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

const AffiliateProductCard = ({ product, websiteId = 416277 }: { product: AffiliateProduct; websiteId?: number }) => {
  const href = `https://www.avantlink.com/click.php?tt=cl&merchant_id=${product.merchantId}&website_id=${websiteId}&url=${encodeURIComponent(product.url)}`;
  const ratingData = productRatings[product.merchantId];

  return (
    <a href={href} target="_blank" rel="nofollow noopener sponsored" className="group block">
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card">
        <CardContent className="p-4 md:p-6 flex flex-col h-full">
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

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-grow">
            {product.description}
          </p>

          <div className="mt-4 pt-3 border-t border-border">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">{product.price}</p>
              <Button
                variant="cta"
                size="sm"
                className="h-9 px-4"
                asChild
              >
                <span className="flex items-center gap-1.5">
                  Se pris <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export type { AffiliateProduct };
export default AffiliateProductCard;
