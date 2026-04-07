import { Link } from "react-router-dom";
import { ArrowRight, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickBuyBannerProps {
  variant?: "default" | "compact";
  className?: string;
}

const QuickBuyBanner = ({ variant = "default", className = "" }: QuickBuyBannerProps) => {
  if (variant === "compact") {
    return (
      <div className={`bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg p-4 ${className}`}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-secondary/20">
              <Bike className="h-5 w-5 text-secondary" />
            </div>
            <p className="text-sm font-medium text-foreground">
              Klar for å finne din neste terrengsykkel?
            </p>
          </div>
          <Button variant="cta" size="sm" asChild>
            <Link to="/sammenligninger" className="flex items-center gap-1">
              Se alle sykler <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-primary to-primary/80 rounded-xl p-6 md:p-8 text-primary-foreground ${className}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Finn din perfekte terrengsykkel
          </h3>
          <p className="text-primary-foreground/80 text-sm md:text-base">
            Sammenlign spesifikasjoner fra de beste produsentene og finn sykkelen som passer deg.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link to="/sammenligninger" className="flex items-center gap-2">
              <Bike className="h-5 w-5" />
              Se sammenligninger
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10"
            asChild
          >
            <Link to="/guider/velg-riktig-terrengsykkel">
              Slik velger du
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickBuyBanner;
