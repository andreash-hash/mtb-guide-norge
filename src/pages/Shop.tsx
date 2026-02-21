import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

// Define types for products and categories
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

  const products: Product[] = [
    { id: "1", name: "Trek Fuel EX 9.8", description: "Allsidig terrengdykkel med utmerket fjæring.", price: "kr 52.999", image: "/placeholder.svg", retailer: "XXL", affiliateLink: "#", category: "sykler" },
    { id: "2", name: "Shimano XT M8100 Girsett", description: "Pålitelig 12-hastighets girsett.", price: "kr 4.299", image: "/placeholder.svg", retailer: "Chain Reaction", affiliateLink: "#", category: "deler" },
    { id: "3", name: "Fox Racing Flexair Jersey", description: "Lett og pustende trøye.", price: "kr 899", image: "/placeholder.svg", retailer: "Wiggle", affiliateLink: "#", category: "bekledning" },
    { id: "4", name: "Park Tool Verktøysett", description: "Komplett verktøysett for hjemmeverkstedet.", price: "kr 3.499", image: "/placeholder.svg", retailer: "XXL", affiliateLink: "#", category: "verktoy" },
    { id: "5", name: "OneUp Components Sadeltaske", description: "Robust og vanntett sadeltaske.", price: "kr 649", image: "/placeholder.svg", retailer: "Chain Reaction", affiliateLink: "#", category: "tilbehor" },
    { id: "6", name: "Lezyne Mega XL LED", description: "Super lyst frontlys med opptil 800 lumen.", price: "kr 1.299", image: "/placeholder.svg", retailer: "Wiggle", affiliateLink: "#", category: "tilbehor" },
  ];

  const categories = [
    { id: "alle" as Category, name: "Alle produkter" },
    { id: "sykler" as Category, name: "Terrengsykler" },
    { id: "deler" as Category, name: "Deler & Utstyr" },
    { id: "bekledning" as Category, name: "Bekledning" },
    { id: "verktoy" as Category, name: "Verktøy & Vedlikehold" },
    { id: "tilbehor" as Category, name: "Tilbehør" },
  ];

  const filteredProducts = activeCategory === "alle" ? products : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Anbefalte MTB-produkter – Sykler, utstyr og tilbehør | MTB Test"
        description="Våre anbefalte terrengsykkel-produkter. Finn beste pris på sykler, utstyr og tilbehør fra kjente forhandlere."
        keywords="mtb butikk, terrengsykkel utstyr, mtb tilbehør, sykkelutstyr"
        canonicalUrl="/butikk"
        breadcrumbs={[
          { name: "Hjem", path: "/" },
          { name: "Butikk", path: "/butikk" },
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "MTB Butikk – Anbefalte produkter",
          "description": "Anbefalte terrengsykkel-produkter og utstyr",
          "url": "https://mtbtest.no/butikk"
        }}
      />
      <Header />
      <Breadcrumbs items={[
        { name: "Hjem", path: "/" },
        { name: "Butikk", path: "/butikk" },
      ]} />

      <main className="flex-grow">
        <section className="bg-gradient-to-br from-primary to-secondary py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Butikk</h1>
            <p className="text-lg md:text-xl text-white/90">
              Utforsk anbefalte produkter for deg som elsker stisykling.
            </p>
          </div>
        </section>

        <section className="bg-background py-8 sticky top-0 z-40 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <Button key={cat.id} variant={activeCategory === cat.id ? "default" : "outline"} onClick={() => setActiveCategory(cat.id)}>{cat.name}</Button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} name={product.name} description={product.description} price={product.price} image={product.image} retailer={product.retailer} affiliateLink={product.affiliateLink} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-16"><p className="text-xl text-muted-foreground">Ingen produkter funnet i denne kategorien ennå.</p></div>
            )}
          </div>
        </section>

        <section className="bg-muted py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">Reklame for samarbeidspartnere (affiliate).</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
