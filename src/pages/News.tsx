import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  source: string;
  date: string;
  url: string;
  category: string;
  location?: string;
}

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/functions/v1/scrape-mtb-news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setNews(data.news || []);
        setLastUpdated(new Date().toLocaleString('no-NO'));
        toast({
          title: "Nyheter oppdatert",
          description: `Hentet ${data.news?.length || 0} nye artikler`,
        });
      } else {
        throw new Error('Failed to fetch news');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      toast({
        title: "Feil",
        description: "Kunne ikke hente nyheter. Prøv igjen senere.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Load initial news data
    fetchNews();
  }, []);

  const groupedNews = news.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, NewsItem[]>);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              MTB Nyheter Norge
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              De siste nyhetene om terrengsykling i Norge - nye stier, parker, arrangementer og utstyr
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={fetchNews} 
                disabled={isLoading}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3"
              >
                {isLoading ? "Oppdaterer..." : "Oppdater nyheter"}
              </Button>
              {lastUpdated && (
                <span className="text-sm text-muted-foreground">
                  Sist oppdatert: {lastUpdated}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="p-6">
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <Skeleton className="h-20 w-full mb-4" />
                  <Skeleton className="h-4 w-1/2" />
                </Card>
              ))}
            </div>
          ) : Object.keys(groupedNews).length > 0 ? (
            <div className="space-y-12">
              {Object.entries(groupedNews).map(([category, items]) => (
                <div key={category}>
                  <SectionTitle subtitle={`${items.length} artikler`}>
                    {category}
                  </SectionTitle>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                      <Card key={item.id} className="p-6 hover:shadow-lg transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-sm text-secondary font-medium">{item.date}</span>
                          {item.location && (
                            <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                              {item.location}
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200">
                          {item.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                          {item.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            Kilde: {item.source}
                          </span>
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-accent font-medium group-hover:underline"
                          >
                            Les mer →
                          </a>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Ingen nyheter tilgjengelig
              </h3>
              <p className="text-muted-foreground mb-6">
                Klikk på "Oppdater nyheter" for å hente de siste artiklene
              </p>
              <Button 
                onClick={fetchNews}
                className="bg-accent hover:bg-accent/90 text-white"
              >
                Hent nyheter
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;