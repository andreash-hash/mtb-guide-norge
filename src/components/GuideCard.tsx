import { Link } from "react-router-dom";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Guide } from "@/data/guides";

interface GuideCardProps {
  guide: Guide;
  variant?: "default" | "compact";
}

const GuideCard = ({ guide, variant = "default" }: GuideCardProps) => {
  const IconComponent = guide.icon;
  const sectionCount = guide.tableOfContents?.length || 0;

  if (variant === "compact") {
    return (
      <Link to={`/guider/${guide.id}`} className="group block">
        <Card className="h-full hover:shadow-md transition-all duration-200 hover:border-secondary/50 border-border bg-card">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors shrink-0">
              <IconComponent className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm text-foreground group-hover:text-secondary transition-colors line-clamp-1">
                {guide.title}
              </h3>
              <p className="text-xs text-muted-foreground">{guide.readTime} min</p>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors shrink-0" />
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/guider/${guide.id}`} className="group block">
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card">
        <CardContent className="p-4 md:p-6">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="p-2 md:p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors shrink-0">
              <IconComponent className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-base md:text-lg text-foreground group-hover:text-secondary transition-colors mb-1.5 md:mb-2 line-clamp-2">
                {guide.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                {guide.intro}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-xs md:text-sm">
                <span className="flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  {guide.readTime} min
                </span>
                {sectionCount > 0 && (
                  <span className="flex items-center">
                    <BookOpen className="h-3.5 w-3.5 mr-1" />
                    {sectionCount} seksjoner
                  </span>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GuideCard;
