import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsArticle } from "@/data/newsArticles";

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

const NewsCard = ({ article, featured = false }: NewsCardProps) => {
  if (featured) {
    return (
      <Link to={`/nyheter/${article.id}`}>
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border-border bg-card">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-video lg:aspect-auto bg-muted">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6 lg:p-8 flex flex-col justify-center">
              <Badge className={`${article.categoryColor} text-white w-fit mb-4`}>
                {article.category}
              </Badge>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary group-hover:text-secondary transition-colors mb-4">
                {article.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{article.publishedAt}</span>
                <span className="text-secondary font-medium group-hover:underline">Les mer →</span>
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/nyheter/${article.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer h-full border-border bg-card">
        <div className="aspect-video bg-muted overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-5">
          <Badge className={`${article.categoryColor} text-white mb-3`}>
            {article.category}
          </Badge>
          <h3 className="font-bold text-lg text-foreground group-hover:text-secondary transition-colors mb-2 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{article.publishedAt}</span>
            <span className="text-secondary text-sm font-medium group-hover:underline">Les mer →</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NewsCard;
