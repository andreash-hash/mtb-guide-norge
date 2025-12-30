import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import BikeReviewCard from "@/components/BikeReviewCard";
import GuideCard from "@/components/GuideCard";
import NewsCard from "@/components/NewsCard";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bike, Wrench, Shirt, BookOpen } from "lucide-react";
import { guides } from "@/data/guides";
import { newsArticles } from "@/data/newsArticles";
import { bikeReviews } from "@/data/bikeReviews";

const Index = () => {
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MTB Guide Norge",
    "url": "https://mtbguide.no",
    "description": "Din guide til terrengsykling i Norge",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://mtbguide.no/sok?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MTB Guide Norge",
    "url": "https://mtbguide.no",
    "logo": "https://mtbguide.no/logo.png",
    "sameAs": [
      "https://facebook.com/mtbguidenorge",
      "https://instagram.com/mtbguidenorge",
      "https://youtube.com/mtbguidenorge"
    ]
  };

  const categories = [
    { 
      name: "Terrengsykler", 
      icon: Bike, 
      href: "/butikk?kategori=sykler",
      description: "Finn din neste sykkel"
    },
    { 
      name: "Utstyr", 
      icon: Wrench, 
      href: "/butikk?kategori=utstyr",
      description: "Deler og vedlikehold"
    },
    { 
      name: "Klær", 
      icon: Shirt, 
      href: "/butikk?kategori=klaer",
      description: "Bekledning for alle forhold"
    },
    { 
      name: "Guider", 
      icon: BookOpen, 
      href: "/guider",
      description: "Lær alt om MTB"
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="MTB Guide Norge - Terrengsykkel anmeldelser, guider og tips 2024"
        description="Finn din neste terrengsykkel. Grundige tester, ekspertguider og ærlige anmeldelser av MTB-utstyr. Oppdatert 2024."
        keywords="terrengsykkel, mtb norge, terrengsykkel test, beste terrengsykkel, mtb guide"
        canonicalUrl="/"
        structuredData={[websiteStructuredData, organizationStructuredData]}
      />
      <Header />
      <Hero />
      
      {/* Popular Reviews Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Grundige analyser av de nyeste terrengsyklene"
          >
            Populære anmeldelser
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bikeReviews.slice(0, 3).map((bike) => (
              <BikeReviewCard key={bike.id} bike={bike} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/anmeldelser">
              <Button variant="outline" size="lg">
                Se alle anmeldelser
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Utforsk vårt innhold etter kategori"
          >
            Kategorier
          </SectionTitle>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={category.href}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer border-border bg-card text-center">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="p-4 rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors mb-4">
                      <category.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-secondary transition-colors mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest from Blog Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Guider, nyheter og tips fra våre eksperter"
          >
            Siste fra bloggen
          </SectionTitle>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Guides Column */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Guider
              </h3>
              <div className="space-y-4">
                {guides.slice(0, 2).map((guide) => (
                  <GuideCard key={guide.id} guide={guide} />
                ))}
              </div>
            </div>

            {/* News Column */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Bike className="h-5 w-5 mr-2" />
                Nyheter
              </h3>
              <div className="space-y-4">
                {newsArticles.slice(0, 2).map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/guider">
              <Button variant="outline">Se alle guider</Button>
            </Link>
            <Link to="/nyheter">
              <Button variant="outline">Se alle nyheter</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* About Us Section */}
      <section id="om-oss" className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Om MTB Guide Norge
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Vi er et team av lidenskapelige terrengsyklister som deler vår kunnskap og erfaring 
              for å hjelpe deg med å finne den perfekte sykkelen og det beste utstyret for dine eventyr på stiene.
            </p>
            <p className="text-muted-foreground">
              Våre grundige tester, ærlige anmeldelser og praktiske guider er basert på 
              hundrevis av timer på stinettet i norsk natur.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
