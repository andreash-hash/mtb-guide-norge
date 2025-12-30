import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { newsArticles, getFeaturedNews, getRegularNews } from "@/data/newsArticles";

const News = () => {
  const featuredNews = getFeaturedNews();
  const regularNews = getRegularNews();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Siste nytt fra MTB-verdenen
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Produktnyheter, testsaker, stiutbygging og alt annet du trenger å vite om terrengsykling
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredNews && (
        <section className="pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <NewsCard article={featuredNews} featured />
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
