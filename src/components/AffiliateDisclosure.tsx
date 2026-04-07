import { Info } from "lucide-react";
import { Link } from "react-router-dom";

interface AffiliateDisclosureProps {
  variant?: "banner" | "inline" | "compact";
  className?: string;
}

const AffiliateDisclosure = ({ variant = "inline", className = "" }: AffiliateDisclosureProps) => {
  if (variant === "banner") {
    return (
      <div className={`bg-amber-50 border-b border-amber-200 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <p className="text-xs text-amber-800 text-center flex items-center justify-center gap-1.5">
            <Info className="h-3.5 w-3.5 flex-shrink-0" />
            <span>
              Denne siden inneholder affiliate-lenker. Vi kan motta provisjon på kjøp uten ekstra kostnad for deg.{" "}
              <Link to="/vilkar" className="underline hover:no-underline">
                Les mer
              </Link>
            </span>
          </p>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <p className={`text-xs text-muted-foreground ${className}`}>
        <Info className="h-3 w-3 inline mr-1" />
        Inneholder affiliate-lenker.{" "}
        <Link to="/vilkar" className="underline hover:no-underline">
          Les mer
        </Link>
      </p>
    );
  }

  // Default: inline variant
  return (
    <div className={`bg-muted/50 rounded-lg p-4 border border-border ${className}`}>
      <div className="flex gap-3">
        <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
        <div className="text-sm text-muted-foreground">
          <p className="font-medium text-foreground mb-1">Affiliate-informasjon</p>
          <p>
            Denne siden inneholder affiliate-lenker til våre partnere. Dersom du kjøper et produkt via en av våre lenker,
            kan vi motta en liten provisjon – uten ekstra kostnad for deg. Dette påvirker ikke våre anbefalinger,
            som alltid er basert på tekniske spesifikasjoner og fakta.{" "}
            <Link to="/vilkar" className="underline hover:no-underline">
              Les våre vilkår
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffiliateDisclosure;
