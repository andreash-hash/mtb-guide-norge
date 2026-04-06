import { Card, CardContent } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";

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

const AffiliateProductCard = ({ product, websiteId = 416277 }: { product: AffiliateProduct; websiteId?: number }) => {
  const href = `https://www.avantlink.com/click.php?tt=cl&merchant_id=${product.merchantId}&website_id=${websiteId}&url=${encodeURIComponent(product.url)}`;

  return (
    <a href={href} target="_blank" rel="nofollow noopener" className="group">
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
              <product.icon className="h-5 w-5" />
            </div>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{product.category}</span>
          </div>
          <h3 className="font-bold text-lg text-foreground group-hover:text-secondary transition-colors mb-2">{product.name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
          <p className="text-sm font-semibold text-foreground mt-3">{product.price}</p>
          <span className="inline-block mt-2 text-sm font-medium text-secondary group-hover:underline">{product.cta}</span>
        </CardContent>
      </Card>
    </a>
  );
};

export type { AffiliateProduct };
export default AffiliateProductCard;
