import { useParams, Link } from "react-router-dom";
import { Calendar, ExternalLink, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewsCard from "@/components/NewsCard";
import SEOHead, { createArticleSchema } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { getNewsById, newsArticles } from "@/data/newsArticles";

const NewsDetail = () => {
  const { newsId } = useParams<{ newsId: string }>();
  const article = newsId ? getNewsById(newsId) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <SEOHead
          title="Artikkel ikke funnet | MTB Test Norge"
          description="Beklager, vi fant ikke artikkelen du leter etter."
          canonicalUrl="/nyheter"
          noindex
        />
        <Header />
        <div className="pt-24 pb-16 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Artikkel ikke funnet</h1>
          <p className="text-muted-foreground mb-8">Beklager, vi fant ikke artikkelen du leter etter.</p>
          <Link to="/nyheter"><Button>Tilbake til nyheter</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const breadcrumbs = [
    { name: "Hjem", path: "/" },
    { name: "Nyheter", path: "/nyheter" },
    { name: article.title, path: `/nyheter/${article.id}` },
  ];

  const articleSchema = createArticleSchema({
    title: article.title,
    description: article.excerpt,
    image: article.image,
    publishedAt: article.publishedAt,
    path: `/nyheter/${article.id}`,
  });

  const relatedArticles = article.relatedNews
    .map(id => newsArticles.find(a => a.id === id))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${article.title} | MTB Test Norge`}
        description={article.excerpt}
        keywords={`${article.category.toLowerCase()}, mtb nyheter, terrengsykkel, stisykling`}
        canonicalUrl={`/nyheter/${article.id}`}
        ogType="article"
        breadcrumbs={breadcrumbs}
        structuredData={articleSchema}
      />
      <Header />
      <Breadcrumbs items={breadcrumbs} />

      {/* Article Header */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Alert className="mb-6 border-secondary/30 bg-secondary/10">
              <FileText className="h-4 w-4 text-secondary" />
              <AlertDescription className="text-sm">
                📰 Kilde:{" "}
                <a href={article.source.url} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-medium">
                  {article.source.name}
                </a>
              </AlertDescription>
            </Alert>
            <div className="flex items-center gap-4 mb-4">
              <Badge className={`${article.categoryColor} text-white`}>{article.category}</Badge>
              <div className="flex items-center text-muted-foreground text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{article.publishedAt}</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">{article.title}</h1>
            <p className="text-xl text-muted-foreground">{article.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold text-primary mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground ml-4 my-4">
                      {items.map((item, i) => <li key={i}>{item.replace('- ', '')}</li>)}
                    </ul>
                  );
                }
                if (paragraph.trim()) {
                  return <p key={index} className="text-muted-foreground leading-relaxed mb-4">{paragraph}</p>;
                }
                return null;
              })}
            </div>
            <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                Les hele den originale artikkelen hos{" "}
                <a href={article.source.url} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-medium inline-flex items-center">
                  {article.source.name}<ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6">Relaterte produkter</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {article.relatedProducts.map((product, index) => (
                <Card key={index} className="border-border bg-background hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                      <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain p-4" loading="lazy" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{product.name}</h3>
                    <p className="text-secondary font-bold mb-2">{product.price}</p>
                    <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-muted-foreground hover:text-secondary transition-colors">
                      Kjøp hos {product.retailer}<ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">Reklame for samarbeidspartnere (affiliate).</p>
          </div>
        </div>
      </section>

      {/* Related News */}
      {relatedArticles.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-primary mb-6">Se også</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedArticles.map((relatedArticle) => (
                  relatedArticle && (
                    <Link key={relatedArticle.id} to={`/nyheter/${relatedArticle.id}`} className="group">
                      <Card className="border-border bg-card hover:shadow-md transition-all hover:-translate-y-1 h-full">
                        <div className="aspect-video bg-muted overflow-hidden rounded-t-lg">
                          <img src={relatedArticle.image} alt={relatedArticle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                        </div>
                        <CardContent className="p-4">
                          <Badge className={`${relatedArticle.categoryColor} text-white text-xs mb-2`}>{relatedArticle.category}</Badge>
                          <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors text-sm line-clamp-2">{relatedArticle.title}</h3>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default NewsDetail;
