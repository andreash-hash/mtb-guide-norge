import { useParams, Link } from "react-router-dom";
import { ChevronRight, Clock, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getGuideById, guides } from "@/data/guides";

const GuideDetail = () => {
  const { guideId } = useParams<{ guideId: string }>();
  const guide = guideId ? getGuideById(guideId) : undefined;

  if (!guide) {
    return (
      <div className="min-h-screen bg-background">
        <SEO 
          title="Guide ikke funnet | MTB Guide Norge"
          description="Beklager, vi fant ikke guiden du leter etter."
          canonicalUrl="/guider"
        />
        <Header />
        <div className="pt-24 pb-16 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Guide ikke funnet</h1>
          <p className="text-muted-foreground mb-8">
            Beklager, vi fant ikke guiden du leter etter.
          </p>
          <Link to="/guider">
            <Button>Tilbake til guider</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.title,
    "description": guide.intro,
    "author": {
      "@type": "Organization",
      "name": "MTB Guide Norge"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MTB Guide Norge",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mtbguide.no/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mtbguide.no/guider/${guide.id}`
    }
  };

  const relatedGuideData = guide.relatedGuides
    .map(id => guides.find(g => g.id === id))
    .filter(Boolean);

  const IconComponent = guide.icon;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${guide.title} | MTB Guide Norge`}
        description={guide.intro}
        keywords={`${guide.title.toLowerCase()}, mtb guide, terrengsykkel tips`}
        canonicalUrl={`/guider/${guide.id}`}
        ogType="article"
        structuredData={articleStructuredData}
      />
      <Header />
      
      {/* Breadcrumbs */}
      <div className="pt-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-secondary transition-colors">Hjem</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/guider" className="hover:text-secondary transition-colors">Guider</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground">{guide.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Table of Contents */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24">
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-bold text-foreground mb-4">Innholdsfortegnelse</h3>
                <nav className="space-y-2">
                  {guide.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-muted-foreground hover:text-secondary transition-colors py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 order-1 lg:order-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                  <IconComponent className="h-6 w-6" />
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{guide.readTime} min lesetid</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {guide.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {guide.intro}
              </p>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="text-foreground leading-relaxed space-y-6">
                {guide.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    const id = paragraph.replace('## ', '').toLowerCase().replace(/\s+/g, '-').replace(/[æøå]/g, c => ({æ:'ae',ø:'o',å:'a'}[c] || c));
                    return (
                      <h2 key={index} id={id} className="text-2xl font-bold text-primary mt-8 mb-4 scroll-mt-24">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <p key={index} className="font-semibold text-foreground">
                        {paragraph.replace(/\*\*/g, '')}
                      </p>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        {items.map((item, i) => (
                          <li key={i}>{item.replace('- ', '').replace(/\*\*/g, '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (paragraph.match(/^\d+\./)) {
                    const items = paragraph.split('\n').filter(line => line.match(/^\d+\./));
                    return (
                      <ol key={index} className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                        {items.map((item, i) => (
                          <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li>
                        ))}
                      </ol>
                    );
                  }
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-muted-foreground">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            </article>

            {/* Recommended Products */}
            <section className="mt-16 pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-primary mb-6">Anbefalte produkter</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {guide.relatedProducts.map((product, index) => (
                  <Card key={index} className="border-border bg-card hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="max-h-full max-w-full object-contain p-4"
                        />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{product.name}</h3>
                      <p className="text-secondary font-bold mb-2">{product.price}</p>
                      <a 
                        href={product.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-secondary transition-colors"
                      >
                        Kjøp hos {product.retailer}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Reklame for samarbeidspartnere (affiliate). Vi kan tjene en liten kommisjon når du handler via våre lenker.
              </p>
            </section>

            {/* Related Guides */}
            {relatedGuideData.length > 0 && (
              <section className="mt-12 pt-8 border-t border-border">
                <h2 className="text-2xl font-bold text-primary mb-6">Relaterte guider</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedGuideData.map((relatedGuide) => {
                    if (!relatedGuide) return null;
                    const RelatedIcon = relatedGuide.icon;
                    return (
                      <Link 
                        key={relatedGuide.id} 
                        to={`/guider/${relatedGuide.id}`}
                        className="group"
                      >
                        <Card className="border-border bg-card hover:shadow-md transition-all hover:-translate-y-1">
                          <CardContent className="p-4 flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                              <RelatedIcon className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                                {relatedGuide.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {relatedGuide.readTime} min lesetid
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GuideDetail;
