import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Guide } from "@/data/guides";

interface GuideCardProps {
  guide: Guide;
}

const GuideCard = ({ guide }: GuideCardProps) => {
  const IconComponent = guide.icon;

  return (
    <Link to={`/guider/${guide.id}`}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer border-border bg-card">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
              <IconComponent className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-foreground group-hover:text-secondary transition-colors mb-2">
                {guide.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                {guide.intro}
              </p>
              <div className="flex items-center text-muted-foreground text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>{guide.readTime} min lesetid</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GuideCard;
