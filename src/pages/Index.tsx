import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import BikeComparisonCard from "@/components/BikeComparisonCard";
import GuideCard from "@/components/GuideCard";
import NewsCard from "@/components/NewsCard";
import Footer from "@/components/Footer";
import SEOHead, { organizationSchema, websiteSchema } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bike, Wrench, Shirt, BookOpen } from "lucide-react";
import { guides } from "@/data/guides";
import { newsArticles } from "@/data/newsArticles";
import { bikeComparisons } from "@/data/bikeComparisons";

const Index = () => {
  const categories = [
  { name: "Sammenligninger", icon: Bike, href: "/sammenligninger", description: "Sammenlign terrengsykler" },
  { name: "Nyheter", icon: Wrench, href: "/nyheter", description: "Siste fra MTB-verdenen" },
  { name: "Guider", icon: BookOpen, href: "/guider", description: "Lær alt om MTB" }];


  return (
    <div className="min-h-screen">
      <SEOHead
        title="MTB Test Norge – Sammenligninger, nyheter og guider 2025"
        description="Sammenlign terrengsykler basert på tekniske spesifikasjoner. Faktabaserte guider og nyheter om stisykling i Norge."
        keywords="terrengsykkel, mtb norge, terrengsykkel sammenligning, beste terrengsykkel, stisykling"
        canonicalUrl="/"
        structuredData={[websiteSchema, organizationSchema]} />

      <Header />
      <Hero />

      {/* Popular Comparisons Section */}
      <section id="sammenligninger" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Sammenlign tekniske spesifikasjoner fra ulike produsenter">
            Populære sammenligninger
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bikeComparisons.slice(0, 3).map((bike) =>
            <BikeComparisonCard key={bike.id} bike={bike} />
            )}
          </div>
          <div className="text-center mt-10">
            <Link to="/sammenligninger">
              <Button variant="outline" size="lg">Se alle sammenligninger</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Utforsk vårt innhold etter kategori">Kategorier</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) =>
            <Link key={category.name} to={category.href}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer border-border bg-card text-center">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="p-4 rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors mb-4">
                      <category.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-secondary transition-colors mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Latest from Blog Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Nyttige guider og nyheter fra MTB-verdenen">Siste fra bloggen</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />Guider
              </h3>
              <div className="space-y-4">
                {guides.slice(0, 2).map((guide) =>
                <GuideCard key={guide.id} guide={guide} />
                )}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Bike className="h-5 w-5 mr-2" />Nyheter
              </h3>
              <div className="space-y-4">
                {newsArticles.slice(0, 2).map((article) =>
                <NewsCard key={article.id} article={article} />
                )}
              </div>
            </div>
          </div>
          <div className="text-center mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/guider"><Button variant="outline">Se alle guider</Button></Link>
            <Link to="/nyheter"><Button variant="outline">Se alle nyheter</Button></Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="om-oss" className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Om MTB Test Norge</h2>
            <div className="text-left space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Hva vi gjør</h3>
                <p className="text-muted-foreground">
                  MTB Test Norge samler og sammenligner informasjon om terrengsykler og utstyr. Vi baserer vårt innhold på
                  tekniske spesifikasjoner fra produsenter, offisiell produktinformasjon og tilgjengelig bransjekunnskap.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Hvordan vi jobber</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li> Vi sammenligner tekniske data fra produsenter</li>
                  <li> Vi presenterer faktabasert informasjon</li>
                  <li> Vi viser tydelig når vi siterer kilder</li>
                  <li> Vi utgir oss IKKE for å ha testet produkter selv</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default Index;