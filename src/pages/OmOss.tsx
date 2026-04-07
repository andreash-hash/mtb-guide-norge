import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Shield, BookOpen } from "lucide-react";

const OmOss = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Om oss – MTB Test Norge"
        description="Lær mer om MTB Test Norge. Vi sammenligner terrengsykler basert på tekniske spesifikasjoner og hjelper deg å ta informerte valg."
        keywords="om mtb test, terrengsykkel norge, mtb sammenligning"
        canonicalUrl="/om-oss"
        breadcrumbs={[
          { name: "Hjem", path: "/" },
          { name: "Om oss", path: "/om-oss" },
        ]}
      />
      <AffiliateDisclosure variant="banner" />
      <Header />
      <Breadcrumbs
        items={[
          { name: "Hjem", path: "/" },
          { name: "Om oss", path: "/om-oss" },
        ]}
      />

      <section className="pt-12 pb-8 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Om MTB Test Norge
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Din uavhengige kilde til faktabasert informasjon om terrengsykler
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Mission */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Vår misjon</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                MTB Test Norge drives av Effi, med ett mål: å hjelpe norske terrengsyklister med å ta informerte valg
                når de skal kjøpe sykkel og utstyr. Vi tror på transparens, ærlighet og faktabasert informasjon.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I en verden full av sponsede anmeldelser og betalt innhold, ønsker vi å være en pålitelig kilde
                som presenterer tekniske spesifikasjoner og sammenligner produkter objektivt.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Faktabasert</h3>
                      <p className="text-sm text-muted-foreground">
                        Alt innhold er basert på tekniske spesifikasjoner fra produsenter og offisielle kilder.
                        Vi gjetter ikke – vi undersøker.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Transparent</h3>
                      <p className="text-sm text-muted-foreground">
                        Vi er åpne om at vi bruker affiliate-lenker. Dette påvirker aldri hvilke produkter
                        vi anbefaler eller hvordan vi presenterer informasjon.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Lærerikt</h3>
                      <p className="text-sm text-muted-foreground">
                        Vi ønsker å utdanne, ikke bare selge. Våre guider hjelper deg å forstå hva du trenger
                        før du tar en kjøpsbeslutning.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">For alle</h3>
                      <p className="text-sm text-muted-foreground">
                        Enten du er nybegynner eller erfaren syklist, har vi innhold tilpasset ditt nivå
                        og dine behov.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* How we work */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Hvordan vi jobber</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Vi sammenligner tekniske data:</strong> All informasjon
                  om sykler og utstyr hentes fra produsentenes offisielle spesifikasjoner. Vi presenterer
                  disse dataene på en oversiktlig måte slik at du enkelt kan sammenligne.
                </p>
                <p>
                  <strong className="text-foreground">Vi tester ikke produkter selv:</strong> Det er viktig
                  for oss å være ærlige om dette. Vi har ikke fysisk testet produktene vi skriver om.
                  Våre sammenligninger er basert på tekniske fakta, ikke subjektive opplevelser.
                </p>
                <p>
                  <strong className="text-foreground">Vi oppdaterer kontinuerlig:</strong> Markedet endrer seg,
                  og det gjør også vårt innhold. Vi jobber jevnlig med å oppdatere informasjon og legge til
                  nye produkter og guider.
                </p>
              </div>
            </div>

            {/* Affiliate disclosure */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Om affiliate-lenker</h2>
              <AffiliateDisclosure variant="inline" />
              <p className="text-sm text-muted-foreground mt-4">
                Inntektene fra affiliate-lenker gjør det mulig for oss å drive denne nettsiden og fortsette
                å produsere kvalitetsinnhold. Vi setter stor pris på at du støtter oss ved å bruke våre lenker.
              </p>
            </div>

            {/* Contact teaser */}
            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <h2 className="text-xl font-bold text-primary mb-2">Har du spørsmål?</h2>
              <p className="text-muted-foreground mb-4">
                Vi hører gjerne fra deg! Ta kontakt hvis du har spørsmål, tilbakemeldinger eller forslag.
              </p>
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Kontakt oss
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OmOss;
