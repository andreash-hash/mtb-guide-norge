import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Step {
  title: string;
  description: string;
}

interface HowToChooseProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

const HowToChoose = ({
  title = "Slik velger du",
  subtitle,
  steps,
  ctaText = "Se anbefalinger",
  ctaLink = "/sammenligninger",
  className = "",
}: HowToChooseProps) => {
  return (
    <Card className={`p-6 md:p-8 bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">{title}</h3>
        {subtitle && <p className="text-muted-foreground text-sm">{subtitle}</p>}
      </div>

      <div className="space-y-4 mb-6">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-0.5">{step.title}</p>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="cta" asChild>
          <Link to={ctaLink} className="flex items-center gap-2">
            {ctaText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
};

// Pre-defined step configurations for common use cases
export const bikeSelectionSteps: Step[] = [
  {
    title: "Definer kjørestilen din",
    description: "Er du mest på milde stier, teknisk terreng, eller i bikeparken?",
  },
  {
    title: "Sett budsjettet",
    description: "Bestem hvor mye du vil bruke – det finnes gode valg i alle prisklasser.",
  },
  {
    title: "Sammenlign spesifikasjoner",
    description: "Se på vandring, vekt, og komponenter for å finne riktig match.",
  },
];

export const gearSelectionSteps: Step[] = [
  {
    title: "Prioriter sikkerhet",
    description: "Hjelm og beskyttelse er viktigst – aldri spar på sikkerhetsutstyr.",
  },
  {
    title: "Tilpass til bruk",
    description: "Velg utstyr basert på hvor og hvordan du sykler mest.",
  },
  {
    title: "Les anmeldelser",
    description: "Se hva andre syklister mener før du kjøper.",
  },
];

export default HowToChoose;
