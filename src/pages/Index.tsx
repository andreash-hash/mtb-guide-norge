import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import TestCard from "@/components/TestCard";
import GuideCard from "@/components/GuideCard";
import NewsCard from "@/components/NewsCard";
import Footer from "@/components/Footer";

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
            <GuideCard
              title="De 5 beste terrengsyklene i 2025"
              description="Vår utvalgte liste over årets beste terrengsykler i ulike prisklasser. Fra budsjettmodeller til toppspesifikasjoner."
            />
            <GuideCard
              title="Hva du bør se etter når du kjøper terrengsykkel"
              description="En omfattende kjøpeguide som dekker alt fra rammetørrelse og giring til hjulstørrelse og federingsløsninger."
            />
            <GuideCard
              title="Utstyrsguiden: Hjelmer, sko og verneutstyr for MTB"
              description="Alt du trenger å vite om sikkerhets- og komfortutstyr for terrengsykling. Tips til valg av hjelm, sko og beskyttelsesutstyr."
            />
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
            <NewsCard
              title="Nye el-MTB modeller lanseres i 2025"
              excerpt="Flere produsenter presenterer sine nyeste elektriske terrengsykler med forbedret batteriteknologi og kraftigere motorer for bedre ytelse på krevende terreng."
              date="15. januar 2025"
            />
            <NewsCard
              title="Terrengsykkelritt i Norge du bør få med deg"
              excerpt="En oversikt over årets mest spennende terrengsykkelritt og arrangementer rundt om i Norge. Fra Birkebeinerrittet til lokale konkurranser."
              date="8. januar 2025"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="om-oss" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle>Om oss</SectionTitle>
            
            <div className="bg-card p-8 rounded-lg shadow-md">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                mtb-test hjelper deg å finne riktig terrengsykkel. Vi tilbyr uavhengige anmeldelser, 
                ærlige sammenligninger og nyheter fra terrengsykkel-verden. Vårt mål er å gjøre sykkelvalget 
                enklere og tryggere.
              </p>
              
              <p className="text-muted-foreground">
                Noen artikler inneholder affiliate-lenker, men vi velger alltid anbefalinger 
                basert på kvalitet og verdi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
