import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="pt-20 bg-card border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav aria-label="Brødsmuler" className="flex items-center text-sm text-muted-foreground">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <span key={item.path} className="flex items-center">
                {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
                {isLast ? (
                  <span className="text-foreground line-clamp-1">{item.name}</span>
                ) : (
                  <Link to={item.path} className="hover:text-secondary transition-colors">
                    {item.name}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
