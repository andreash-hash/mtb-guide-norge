import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bike, BookOpen, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-mtb.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
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
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-wide uppercase">Norges MTB-ressurs</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 md:mb-6 tracking-tight leading-[0.9]">
            OPPDAG NYE
            <br />
            <span className="text-accent">STIER OG</span>
            <br />
            SYKLER
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 md:mb-8 max-w-xl mx-auto font-medium">
            Sammenlign terrengsykler basert på tekniske spesifikasjoner
          </p>

          {/* Primary CTA - above the fold */}
          <div className="slide-up flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6">
            <Button
              variant="cta"
              size="lg"
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto"
              asChild
            >
              <Link to="/sammenligninger" className="flex items-center gap-2">
                <Bike className="h-5 w-5" />
                Finn din sykkel
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto border-2 border-white bg-white/15 text-white font-semibold backdrop-blur-sm hover:bg-white/25 hover:text-white"
              asChild
            >
              <Link to="/guider" className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Les guider
              </Link>
            </Button>
          </div>

          {/* Social proof teaser */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <Bike className="h-4 w-4" />
              6+ sykler sammenlignet
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              65+ guider
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator - kun på desktop */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
