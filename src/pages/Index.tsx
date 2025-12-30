import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import TestCard from "@/components/TestCard";
import GuideCard from "@/components/GuideCard";
import NewsCard from "@/components/NewsCard";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import { guides } from "@/data/guides";
import { newsArticles } from "@/data/newsArticles";

// Import bike images
import trekMarlin from "@/assets/trek-marlin-8.jpg";
import specializedRockhopper from "@/assets/specialized-rockhopper.jpg";
import scottScale from "@/assets/scott-scale-970.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Latest Tests Section */}
      <section id="tester" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Grundige analyser av de nyeste terrengsyklene"
          >
            Siste anmeldelser
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestCard
              image={trekMarlin}
              title="Anmeldelse av Trek Marlin 8"
              description="En grundig analyse av en populær terrengsykkel som kombinerer kvalitet med rimelig pris. Perfekt for både nybegynnere og erfarne syklister."
            />
            <TestCard
              image={specializedRockhopper}
              title="Specialized Rockhopper"
              description="En allsidig terrengsykkel for nybegynnere som ønsker å utforske stier og skogsveier. Solid konstruksjon og pålitelige komponenter."
            />
            <TestCard
              image={scottScale}
              title="Scott Scale 970"
              description="Robust sykkel for lange turer i marka. Lett ramme og effektiv giring gjør denne sykkelen til et utmerket valg for turdimensjonen."
            />
          </div>
        </div>
      </section>

      {/* Popular Guides Section */}
      <section id="guider" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Stier, utstyr og teknikk som gir deg mer ut av sykkelturen"
          >
            Populære guider
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.slice(0, 3).map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="nyheter" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Hold deg oppdatert på det siste fra terrengsykkel-verden"
          >
            Nyheter
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {newsArticles.slice(0, 2).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* About Us Section */}
      <section id="om-oss" className="py-20 bg-secondary/5">
...
      </section>

      <Footer />
    </div>
  );
};

export default Index;
