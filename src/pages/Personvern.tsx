import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

const Personvern = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Personvernerklæring – MTB Test Norge"
        description="Les vår personvernerklæring. Informasjon om hvordan MTB Test Norge samler inn, bruker og beskytter dine personopplysninger."
        keywords="personvern, cookies, gdpr, personopplysninger"
        canonicalUrl="/personvern"
        breadcrumbs={[
          { name: "Hjem", path: "/" },
          { name: "Personvern", path: "/personvern" },
        ]}
      />
      <AffiliateDisclosure variant="banner" />
      <Header />
      <Breadcrumbs
        items={[
          { name: "Hjem", path: "/" },
          { name: "Personvern", path: "/personvern" },
        ]}
      />

      <section className="pt-12 pb-8 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Personvernerklæring
          </h1>
          <p className="text-muted-foreground">
            Sist oppdatert: Januar 2025
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Introduksjon</h2>
                <p className="text-muted-foreground leading-relaxed">
                  MTB Test Norge ("vi", "oss", "vår") respekterer ditt personvern og er forpliktet til å beskytte
                  dine personopplysninger. Denne personvernerklæringen forklarer hvordan vi samler inn, bruker,
                  deler og beskytter informasjon når du besøker nettsiden vår (mtbtest.no).
                </p>
              </div>

              {/* Data we collect */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Informasjon vi samler inn</h2>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.1 Automatisk innsamlet informasjon</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Når du besøker nettsiden vår, kan vi automatisk samle inn visse opplysninger, inkludert:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>IP-adresse (anonymisert)</li>
                  <li>Nettlesertype og versjon</li>
                  <li>Enhetsinformasjon (mobil, desktop, etc.)</li>
                  <li>Sider du besøker og tid brukt på siden</li>
                  <li>Henvisende nettside</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2.2 Informasjon du gir oss</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Vi kan samle inn informasjon du frivillig gir oss, som:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>E-postadresse (ved påmelding til nyhetsbrev)</li>
                  <li>Informasjon du sender via kontaktskjema</li>
                </ul>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">3. Informasjonskapsler (cookies)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vi bruker informasjonskapsler og lignende teknologier for å:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Forbedre brukeropplevelsen på nettsiden</li>
                  <li>Analysere trafikk og bruksmønstre</li>
                  <li>Huske dine preferanser</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3.1 Typer informasjonskapsler vi bruker</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Nødvendige:</strong> Påkrevd for at nettsiden skal fungere</li>
                  <li><strong>Analyse:</strong> Hjelper oss forstå hvordan besøkende bruker nettsiden</li>
                  <li><strong>Affiliate-sporing:</strong> Brukes for å spore kjøp via våre affiliate-lenker</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3.2 Tredjeparts informasjonskapsler</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Våre affiliate-partnere (som AvantLink) kan sette sine egne informasjonskapsler når du klikker
                  på affiliate-lenker. Disse brukes for å spore salg og beregne provisjon. Les mer i deres
                  respektive personvernerklæringer.
                </p>
              </div>

              {/* Affiliate links */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Affiliate-lenker og sporing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  MTB Test Norge inneholder affiliate-lenker til produkter hos våre partnere. Når du klikker
                  på disse lenkene og foretar et kjøp, kan vi motta en provisjon.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Viktig:</strong> Vi deler ikke personlig identifiserbar
                  informasjon med våre affiliate-partnere. Sporingen skjer via anonyme cookies og referanse-IDer.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Vi samarbeider med affiliate-nettverk som følger bransjestandarder for personvern, inkludert
                  AvantLink. Disse partnerne har egne personvernerklæringer som gjelder når du besøker deres nettsider.
                </p>
              </div>

              {/* How we use data */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Hvordan vi bruker informasjonen</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Vi bruker innsamlet informasjon til å:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Levere og forbedre våre tjenester</li>
                  <li>Sende nyhetsbrev (kun hvis du har samtykket)</li>
                  <li>Svare på henvendelser</li>
                  <li>Analysere bruk og forbedre innhold</li>
                  <li>Forhindre svindel og misbruk</li>
                </ul>
              </div>

              {/* Data sharing */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">6. Deling av informasjon</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vi selger ikke dine personopplysninger. Vi kan dele informasjon med:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Tjenesteleverandører:</strong> Som hjelper oss med hosting, analyse og e-posttjenester</li>
                  <li><strong>Affiliate-nettverk:</strong> Anonymisert sporingsdata for provisjonsberegning</li>
                  <li><strong>Lovpålagte tilfeller:</strong> Hvis loven krever det</li>
                </ul>
              </div>

              {/* Your rights */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">7. Dine rettigheter</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  I henhold til GDPR og norsk personvernlovgivning har du rett til å:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Innsyn:</strong> Be om kopi av personopplysninger vi har om deg</li>
                  <li><strong>Retting:</strong> Be om at feil informasjon korrigeres</li>
                  <li><strong>Sletting:</strong> Be om at dine data slettes</li>
                  <li><strong>Dataportabilitet:</strong> Motta dine data i et maskinlesbart format</li>
                  <li><strong>Protestere:</strong> Protestere mot behandling av dine data</li>
                  <li><strong>Trekke samtykke:</strong> Trekke tilbake samtykke når som helst</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  For å utøve disse rettighetene, kontakt oss på{" "}
                  <a href="mailto:kontakt@mtbtest.no" className="text-primary hover:underline">
                    kontakt@mtbtest.no
                  </a>
                </p>
              </div>

              {/* Data retention */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">8. Lagring av data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vi lagrer personopplysninger bare så lenge det er nødvendig for formålene beskrevet i denne
                  erklæringen, eller så lenge loven krever. Analysedata anonymiseres etter 26 måneder.
                </p>
              </div>

              {/* Security */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">9. Sikkerhet</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vi tar rimelige sikkerhetstiltak for å beskytte dine personopplysninger mot uautorisert
                  tilgang, endring eller sletting. Nettsiden bruker HTTPS-kryptering for sikker dataoverføring.
                </p>
              </div>

              {/* Children */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">10. Barn</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vår nettside er ikke rettet mot barn under 16 år, og vi samler ikke bevisst inn
                  personopplysninger fra barn. Hvis du mener vi har samlet inn slik informasjon,
                  vennligst kontakt oss umiddelbart.
                </p>
              </div>

              {/* Changes */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">11. Endringer i personvernerklæringen</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vi kan oppdatere denne personvernerklæringen fra tid til annen. Vesentlige endringer
                  vil bli varslet via nettsiden. Vi anbefaler at du jevnlig sjekker denne siden.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">12. Kontakt</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Har du spørsmål om denne personvernerklæringen eller vår behandling av personopplysninger,
                  ta kontakt med oss:
                </p>
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-foreground font-medium">MTB Test Norge</p>
                  <p className="text-muted-foreground">E-post: kontakt@mtbtest.no</p>
                </div>
              </div>

              {/* Supervisory authority */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">13. Klage til tilsynsmyndighet</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Hvis du mener at vår behandling av personopplysninger bryter med personvernlovgivningen,
                  har du rett til å klage til Datatilsynet:{" "}
                  <a
                    href="https://www.datatilsynet.no"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.datatilsynet.no
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Personvern;
