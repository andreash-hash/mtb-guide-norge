import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price?: string;
  retailer: string;
  affiliateLink: string;
}

const ProductCard = ({ 
  image, 
  name, 
  description, 
  price, 
  retailer, 
  affiliateLink 
}: ProductCardProps) => {
  return (
    <article className="bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-200">
          {name}
        </h3>
        <p className="text-muted-foreground mb-3 text-sm leading-relaxed min-h-[40px]">
          {description}
        </p>
        
        {price && (
          <p className="text-2xl font-bold text-accent mb-4">
            {price}
          </p>
        )}
        
        <Button 
          variant="cta" 
          className="w-full group/btn"
          asChild
        >
          <a 
            href={affiliateLink} 
            target="_blank" 
            rel="noopener noreferrer sponsored"
            className="flex items-center justify-center gap-2"
          >
            Kjøp hos {retailer}
            <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
