import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

type Category = "alle" | "sykler" | "deler" | "bekledning" | "verktoy" | "tilbehor";

interface Product {
  id: string;
  name: string;
  description: string;
  price?: string;
  image: string;
  retailer: string;
  affiliateLink: string;
  category: Category;
}

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("alle");

  // Sample products - you can replace with your actual products
  const products: Product[] = [
    {
      id: "1",
      name: "Trek Fuel EX 9.8",
      description: "Allsidig terrengdykkel med utmerket fjæring for både oppoverbakke og nedoverbakke.",
      price: "kr 52.999",
      image: "/placeholder.svg",
      retailer: "XXL",
      affiliateLink: "#",
      category: "sykler"
    },
    {
      id: "2",
      name: "Shimano XT M8100 Girsett",
      description: "Pålitelig 12-hastighets girsett med silkemyk girskifting.",
      price: "kr 4.299",
      image: "/placeholder.svg",
      retailer: "Chain Reaction",
      affiliateLink: "#",
      category: "deler"
    },
    {
      id: "3",
      name: "Fox Racing Flexair Jersey",
      description: "Lett og pustende trøye for maksimal komfort på stien.",
      price: "kr 899",
      image: "/placeholder.svg",
      retailer: "Wiggle",
      affiliateLink: "#",
      category: "bekledning"
    },
    {
      id: "4",
      name: "Park Tool Verktøysett",
      description: "Komplett verktøysett for hjemmeverkstedet - alt du trenger for å vedlikeholde sykkelen.",
      price: "kr 3.499",
      image: "/placeholder.svg",
      retailer: "XXL",
      affiliateLink: "#",
      category: "verktoy"
    },
    {
      id: "5",
      name: "OneUp Components Sadeltaske",
      description: "Robust og vanntett sadeltaske perfekt for lengre turer.",
      price: "kr 649",
      image: "/placeholder.svg",
      retailer: "Chain Reaction",
      affiliateLink: "#",
      category: "tilbehor"
    },
    {
      id: "6",
      name: "Lezyne Mega XL LED",
      description: "Super lyst frontlys med opptil 800 lumen - perfekt for mørke stier.",
      price: "kr 1.299",
      image: "/placeholder.svg",
      retailer: "Wiggle",
      affiliateLink: "#",
      category: "tilbehor"
    },
  ];

  const categories = [
    { id: "alle" as Category, name: "Alle produkter" },
    { id: "sykler" as Category, name: "Terrengsykler" },
    { id: "deler" as Category, name: "Deler & Utstyr" },
    { id: "bekledning" as Category, name: "Bekledning" },
    { id: "verktoy" as Category, name: "Verktøy & Vedlikehold" },
    { id: "tilbehor" as Category, name: "Tilbehør" },
  ];

  const filteredProducts = activeCategory === "alle" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Butikk
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Utforsk anbefalte produkter for deg som elsker stisykling. Vi deler våre favoritter fra kjente merkevarer – klikk for å lese mer hos forhandleren.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-background py-8 sticky top-0 z-40 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className="transition-all"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  retailer={product.retailer}
                  affiliateLink={product.affiliateLink}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  Ingen produkter funnet i denne kategorien ennå.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Affiliate Disclaimer */}
        <section className="bg-muted py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Reklame for samarbeidspartnere (affiliate). Vi kan tjene en liten kommisjon når du handler via våre lenker – uten ekstra kostnad for deg.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
