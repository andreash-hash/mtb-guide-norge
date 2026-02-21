import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import { newsArticles, getFeaturedNews, getRegularNews } from "@/data/newsArticles";

const News = () => {
  const featuredNews = getFeaturedNews();
  const regularNews = getRegularNews();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="MTB Nyheter – Siste fra stisykling og terrengsykler | MTB Test"
        description="Hold deg oppdatert med nyheter om terrengsykling. Produktlanseringer, stiutbygging og bransjeoppdateringer fra Norge og verden."
        keywords="mtb nyheter, terrengsykkel nyheter, sykkelnyheter norge, stisykling nyheter"
        canonicalUrl="/nyheter"
        breadcrumbs={[
          { name: "Hjem", path: "/" },
          { name: "Nyheter", path: "/nyheter" },
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "MTB Nyheter",
          "description": "Siste nytt fra terrengsykkel-verdenen",
          "url": "https://mtbtest.no/nyheter"
        }}
      />
      <Header />
      <Breadcrumbs items={[
        { name: "Hjem", path: "/" },
        { name: "Nyheter", path: "/nyheter" },
      ]} />

      <section className="pt-12 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Siste nytt fra MTB-verdenen
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Produktnyheter, stiutbygging og alt annet du trenger å vite om terrengsykling
          </p>
        </div>
      </section>

      {featuredNews && (
        <section className="pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <NewsCard article={featuredNews} featured />
          </div>
        </section>
      )}

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
