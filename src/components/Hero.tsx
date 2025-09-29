import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mtb.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight">
            OPPDAG NYE STIER,
            <br />
            <span className="text-accent">SYKLER OG OPPLEVELSER</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
            Vi deler inspirasjon, erfaringer og kunnskap som gir deg mer ut av hvert tråkk.
          </p>

          <div className="slide-up">
            <Button 
              variant="cta" 
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => document.getElementById('tester')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Se siste tester
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;