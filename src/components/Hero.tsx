import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mtb.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Accent line decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="fade-in">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm">
            <span className="text-accent text-sm font-semibold tracking-wide uppercase">Norges MTB-ressurs</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight leading-[0.9]">
            OPPDAG NYE
            <br />
            <span className="text-accent">STIER OG</span>
            <br />
            SYKLER
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-xl mx-auto font-medium">
            Mer flyt. Mer glede. Mer sykling.
          </p>

          <div className="slide-up flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => document.getElementById('sammenligninger')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Se sammenligninger
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 hover:text-white"
              onClick={() => document.getElementById('om-oss')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Om oss
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
