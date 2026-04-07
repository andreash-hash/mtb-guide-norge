import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import BikeComparisonCard from "@/components/BikeComparisonCard";
import GuideCard from "@/components/GuideCard";
import NewsCard from "@/components/NewsCard";
import Footer from "@/components/Footer";
import SEOHead, { organizationSchema, websiteSchema } from "@/components/SEOHead";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ProductComparisonTable from "@/components/ProductComparisonTable";
import QuickBuyBanner from "@/components/QuickBuyBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bike, Wrench, BookOpen, CheckCircle, HelpCircle, TrendingUp } from "lucide-react";
import { guides } from "@/data/guides";
import { newsArticles } from "@/data/newsArticles";
import { bikeComparisons } from "@/data/bikeComparisons";
import AffiliateProductCard from "@/components/AffiliateProductCard";
import { affiliateProducts } from "@/data/affiliateProducts";

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

      <AffiliateDisclosure variant="banner" />
      <Header />
      <Hero />

      {/* Slik velger du seksjon */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                Slik velger du riktig terrengsykkel
              </h2>
              <p className="text-muted-foreground">
                Tre enkle steg for å finne sykkelen som passer deg
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center p-6 border-secondary/20 hover:border-secondary/50 transition-colors">
                <div className="p-3 rounded-full bg-secondary/10 text-secondary w-fit mx-auto mb-4">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">1. Definer behovet</h3>
                <p className="text-sm text-muted-foreground">
                  Hva slags terreng skal du sykle i? Tekniske stier, lange turer eller bikepark?
                </p>
              </Card>

              <Card className="text-center p-6 border-secondary/20 hover:border-secondary/50 transition-colors">
                <div className="p-3 rounded-full bg-secondary/10 text-secondary w-fit mx-auto mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">2. Sammenlign specs</h3>
                <p className="text-sm text-muted-foreground">
                  Se på vandring, vekt, drivsystem og geometri for å finne riktig match.
                </p>
              </Card>

              <Card className="text-center p-6 border-secondary/20 hover:border-secondary/50 transition-colors">
                <div className="p-3 rounded-full bg-secondary/10 text-secondary w-fit mx-auto mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">3. Sjekk priser</h3>
                <p className="text-sm text-muted-foreground">
                  Sammenlign priser hos forhandlere og finn beste deal for budsjettet ditt.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="outline" asChild>
                <Link to="/guider/velg-riktig-terrengsykkel">
                  Les vår komplette kjøpsguide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Comparisons Section */}
      <section id="sammenligninger" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Sammenlign tekniske spesifikasjoner fra ulike produsenter">
            Populære sammenligninger
          </SectionTitle>

          {/* Sammenligningstabellen - desktop */}
          <div className="hidden lg:block mb-10">
            <ProductComparisonTable bikes={bikeComparisons.slice(0, 4)} />
          </div>

          {/* Kort-visning - mobil og tablet */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {bikeComparisons.slice(0, 4).map((bike) =>
              <BikeComparisonCard key={bike.id} bike={bike} />
            )}
          </div>

          <div className="text-center mt-8 md:mt-10">
            <Link to="/sammenligninger">
              <Button variant="cta" size="lg">Se alle {bikeComparisons.length} sammenligninger</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Kjøpsguide 2025 Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Håndplukket utstyr fra våre anbefalte partnere">
            Kjøpsguide 2025
          </SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {affiliateProducts.slice(0, 6).map((product) => (
              <AffiliateProductCard key={product.merchantId} product={product} />
            ))}
          </div>

          {/* Vis flere knapp */}
          <div className="text-center mt-8">
            <details className="group">
              <summary className="inline-flex items-center gap-2 cursor-pointer text-secondary hover:text-secondary/80 font-medium">
                <span className="group-open:hidden">Vis flere produkter</span>
                <span className="hidden group-open:inline">Vis færre</span>
              </summary>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
                {affiliateProducts.slice(6).map((product) => (
                  <AffiliateProductCard key={product.merchantId} product={product} />
                ))}
              </div>
            </details>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Vi kan motta provisjon på kjøp gjort via våre lenker, uten ekstra kostnad for deg.
          </p>
        </div>
      </section>

      {/* QuickBuy Banner */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <QuickBuyBanner />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Utforsk vårt innhold etter kategori">Kategorier</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category) =>
            <Link key={category.name} to={category.href}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer border-border bg-card text-center">
                  <CardContent className="p-4 md:p-6 flex flex-col items-center">
                    <div className="p-3 md:p-4 rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors mb-3 md:mb-4">
                      <category.icon className="h-6 w-6 md:h-8 md:w-8" />
                    </div>
                    <h3 className="font-bold text-base md:text-lg text-foreground group-hover:text-secondary transition-colors mb-1">{category.name}</h3>
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

      {/* Viktig informasjon / Disclaimer */}
      <section className="py-12 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-bold text-foreground mb-4">Viktig informasjon</h2>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Innholdet på denne siden er ikke basert på fysiske produkttester.</strong>{" "}
                All informasjon er hentet fra produsentenes egne spesifikasjoner, offisielle produktsider og offentlig tilgjengelige kilder. 
                Vi sammenligner og presenterer tekniske data for å hjelpe deg med å ta informerte valg.
              </p>
              <p>
                <strong className="text-foreground">Affiliate-lenker:</strong>{" "}
                MTB Test Norge inneholder lenker til partnere og forhandlere. Dersom du kjøper et produkt via en av våre lenker, 
                kan vi motta en liten provisjon – uten ekstra kostnad for deg. Dette bidrar til å finansiere driften av nettstedet.
              </p>
              <p>
                <strong className="text-foreground">Prisene</strong> som vises kan variere og er hentet fra eksterne kilder. 
                Vi anbefaler alltid å sjekke oppdatert pris hos forhandler før kjøp. 
                Vi tar forbehold om eventuelle feil i tekniske spesifikasjoner eller prisinformasjon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default Index;