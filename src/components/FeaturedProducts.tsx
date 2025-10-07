import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeaturedProduct {
  name: string;
  description: string;
  image: string;
  price?: string;
}

const FeaturedProducts = () => {
  const featuredProducts: FeaturedProduct[] = [
    {
      name: "Trek Fuel EX 9.8",
      description: "Månedens anbefaling - perfekt allsidig terrengsykkel",
      image: "/placeholder.svg",
      price: "kr 52.999"
    },
    {
      name: "Shimano XT M8100 Girsett",
      description: "Mest solgte komponent denne måneden",
      image: "/placeholder.svg",
      price: "kr 4.299"
    },
    {
      name: "Fox Racing Flexair Jersey",
      description: "Populær bekledning blant våre lesere",
      image: "/placeholder.svg",
      price: "kr 899"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <ShoppingBag className="h-8 w-8 text-accent" />
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Månedens anbefalinger
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Utvalgte produkter vi anbefaler basert på kvalitet og verdi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-primary mb-2 group-hover:text-secondary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {product.description}
                </p>
                {product.price && (
                  <p className="text-xl font-bold text-accent">
                    {product.price}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" asChild>
            <a href="/butikk">
              Se alle produkter i butikken
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
