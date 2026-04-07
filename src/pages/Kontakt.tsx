import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Clock } from "lucide-react";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Kontakt oss – MTB Test Norge"
        description="Ta kontakt med MTB Test Norge. Vi svarer på spørsmål om terrengsykler, sammenligninger og innhold på siden."
        keywords="kontakt mtb test, terrengsykkel hjelp, mtb spørsmål"
        canonicalUrl="/kontakt"
        breadcrumbs={[
          { name: "Hjem", path: "/" },
          { name: "Kontakt", path: "/kontakt" },
        ]}
      />
      <AffiliateDisclosure variant="banner" />
      <Header />
      <Breadcrumbs
        items={[
          { name: "Hjem", path: "/" },
          { name: "Kontakt", path: "/kontakt" },
        ]}
      />

      <section className="pt-12 pb-8 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Kontakt oss
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Har du spørsmål, tilbakemeldinger eller forslag? Vi hører gjerne fra deg!
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <CardTitle>E-post</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Send oss en e-post for generelle henvendelser, samarbeid eller tilbakemeldinger.
                  </p>
                  <a
                    href="mailto:kontakt@mtbtest.no"
                    className="text-primary hover:underline font-medium"
                  >
                    kontakt@mtbtest.no
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <CardTitle>Svartid</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Vi forsøker å svare på alle henvendelser innen 2-3 virkedager.
                    Ved stor pågang kan det ta noe lenger tid.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6">Vanlige spørsmål</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <MessageSquare className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          Har dere testet produktene selv?
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Nei, vi har ikke fysisk testet produktene. Våre sammenligninger og anbefalinger
                          er basert på tekniske spesifikasjoner fra produsenter og offisielle kilder.
                          Vi er alltid tydelige på dette i vårt innhold.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <MessageSquare className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          Hvordan tjener dere penger?
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Vi bruker affiliate-lenker til våre partnere. Når du kjøper et produkt via
                          en av våre lenker, kan vi motta en liten provisjon – uten ekstra kostnad for deg.
                          Dette påvirker ikke våre anbefalinger.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <MessageSquare className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          Kan jeg foreslå produkter dere bør skrive om?
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Absolutt! Vi setter pris på tilbakemeldinger og forslag. Send oss en e-post
                          med produktet du ønsker at vi skal se på, så vurderer vi det.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <MessageSquare className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          Jeg fant en feil i informasjonen. Hva gjør jeg?
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Vi setter stor pris på at du tar kontakt! Send oss en e-post med detaljer
                          om feilen, så retter vi det så fort som mulig.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Business inquiries */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h2 className="text-xl font-bold text-primary mb-3">For bedrifter og samarbeidspartnere</h2>
              <p className="text-muted-foreground mb-4">
                Er du interessert i samarbeid, annonsering eller har andre forretningsmessige henvendelser?
                Ta kontakt på e-post, så svarer vi deg så fort vi kan.
              </p>
              <a
                href="mailto:kontakt@mtbtest.no"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Send e-post
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
