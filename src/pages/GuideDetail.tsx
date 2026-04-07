import { useParams, Link } from "react-router-dom";
import { Clock, ExternalLink, Lightbulb, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import QuickBuyBanner from "@/components/QuickBuyBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getGuideById, guides } from "@/data/guides";

const GuideDetail = () => {
  const { guideId } = useParams<{ guideId: string }>();
  const guide = guideId ? getGuideById(guideId) : undefined;

  if (!guide) {
    return (
      <div className="min-h-screen bg-background">
        <SEOHead title="Guide ikke funnet | MTB Test Norge" description="Beklager, vi fant ikke guiden du leter etter." canonicalUrl="/guider" noindex />
        <Header />
        <div className="pt-24 pb-16 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Guide ikke funnet</h1>
          <p className="text-muted-foreground mb-8">Beklager, vi fant ikke guiden du leter etter.</p>
          <Link to="/guider"><Button>Tilbake til guider</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const breadcrumbs = [
    { name: "Hjem", path: "/" },
    { name: "Guider", path: "/guider" },
    { name: guide.title, path: `/guider/${guide.id}` },
  ];

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.title,
    "description": guide.intro,
    "author": { "@type": "Organization", "name": "MTB Test Norge" },
    "publisher": {
      "@type": "Organization",
      "name": "MTB Test Norge",
      "logo": { "@type": "ImageObject", "url": "https://mtbtest.no/favicon.ico" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://mtbtest.no/guider/${guide.id}` }
  };

  const relatedGuideData = guide.relatedGuides.map(id => guides.find(g => g.id === id)).filter(Boolean);
  const IconComponent = guide.icon;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${guide.title} | MTB Test Norge`}
        description={guide.intro}
        keywords={`${guide.title.toLowerCase()}, mtb guide, terrengsykkel tips`}
        canonicalUrl={`/guider/${guide.id}`}
        ogType="article"
        breadcrumbs={breadcrumbs}
        structuredData={articleStructuredData}
      />
      <AffiliateDisclosure variant="banner" />
      <Header />
      <Breadcrumbs items={breadcrumbs} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar - sticky på desktop */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24 space-y-4">
              {/* Innholdsfortegnelse */}
              <div className="bg-card rounded-lg border border-border p-4 md:p-6">
                <h2 className="font-bold text-foreground mb-3 text-sm md:text-base">Innholdsfortegnelse</h2>
                <nav className="space-y-1.5">
                  {guide.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-muted-foreground hover:text-secondary transition-colors py-1 hover:pl-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Quick tips boks */}
              <div className="bg-secondary/5 rounded-lg border border-secondary/20 p-4 md:p-6 hidden lg:block">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="h-5 w-5 text-secondary" />
                  <h3 className="font-bold text-foreground text-sm">Raskt svar</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  Leter du etter en rask anbefaling? Se våre sammenligninger.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/sammenligninger" className="flex items-center justify-center gap-1">
                    Se sykler <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-3 order-1 lg:order-2">
            {/* Hero-seksjon */}
            <header className="mb-6 md:mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="p-2 md:p-3 rounded-lg bg-secondary/10 text-secondary">
                  <IconComponent className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{guide.readTime} min lesetid</span>
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
                {guide.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {guide.intro}
              </p>
            </header>

            <article className="prose prose-lg max-w-none">
              <div className="text-foreground leading-relaxed space-y-6">
                {guide.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    const id = paragraph.replace('## ', '').toLowerCase().replace(/\s+/g, '-').replace(/[æøå]/g, c => ({æ:'ae',ø:'o',å:'a'}[c as 'æ'|'ø'|'å'] || c));
                    return <h2 key={index} id={id} className="text-2xl font-bold text-primary mt-8 mb-4 scroll-mt-24">{paragraph.replace('## ', '')}</h2>;
                  }
                  if (paragraph.startsWith('### ')) return <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) return <p key={index} className="font-semibold text-foreground">{paragraph.replace(/\*\*/g, '')}</p>;
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                    return <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground ml-4">{items.map((item, i) => <li key={i}>{item.replace('- ', '').replace(/\*\*/g, '')}</li>)}</ul>;
                  }
                  if (paragraph.match(/^\d+\./)) {
                    const items = paragraph.split('\n').filter(line => line.match(/^\d+\./));
                    return <ol key={index} className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">{items.map((item, i) => <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li>)}</ol>;
                  }
                  if (paragraph.trim()) return <p key={index} className="text-muted-foreground">{paragraph}</p>;
                  return null;
                })}
              </div>
            </article>

            {/* CTA-banner midt i innholdet */}
            <div className="my-8">
              <QuickBuyBanner variant="compact" />
            </div>

            <section className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-border">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">Anbefalte produkter</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {guide.relatedProducts.map((product, index) => (
                  <Card key={index} className="border-border bg-card hover:shadow-md transition-shadow group">
                    <CardContent className="p-4">
                      <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-h-full max-w-full object-contain p-4 group-hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm mb-1 line-clamp-1">{product.name}</h3>
                      <p className="text-secondary font-bold mb-2">{product.price}</p>
                      <a
                        href={product.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-secondary transition-colors"
                      >
                        Se pris hos {product.retailer}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <AffiliateDisclosure variant="compact" className="mt-4" />
            </section>

            {relatedGuideData.length > 0 && (
              <section className="mt-12 pt-8 border-t border-border">
                <h2 className="text-2xl font-bold text-primary mb-6">Relaterte guider</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedGuideData.map((relatedGuide) => {
                    if (!relatedGuide) return null;
                    const RelatedIcon = relatedGuide.icon;
                    return (
                      <Link key={relatedGuide.id} to={`/guider/${relatedGuide.id}`} className="group">
                        <Card className="border-border bg-card hover:shadow-md transition-all hover:-translate-y-1">
                          <CardContent className="p-4 flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                              <RelatedIcon className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors">{relatedGuide.title}</h3>
                              <p className="text-sm text-muted-foreground">{relatedGuide.readTime} min lesetid</p>
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
