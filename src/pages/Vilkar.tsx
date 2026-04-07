import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

const Vilkar = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Vilkår for bruk – MTB Test Norge"
        description="Les vilkårene for bruk av MTB Test Norge. Informasjon om ansvar, affiliate-lenker og bruk av innhold."
        keywords="vilkår, bruksvilkår, ansvarsfraskrivelse"
        canonicalUrl="/vilkar"
        breadcrumbs={[
          { name: "Hjem", path: "/" },
          { name: "Vilkår", path: "/vilkar" },
        ]}
      />
      <AffiliateDisclosure variant="banner" />
      <Header />
      <Breadcrumbs
        items={[
          { name: "Hjem", path: "/" },
          { name: "Vilkår", path: "/vilkar" },
        ]}
      />

      <section className="pt-12 pb-8 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Vilkår for bruk
          </h1>
          <p className="text-muted-foreground">
            Sist oppdatert: Januar 2025
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Aksept av vilkår</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ved å bruke nettsiden mtbtest.no ("Nettsiden"), aksepterer du disse vilkårene for bruk.
                  Hvis du ikke aksepterer vilkårene, ber vi deg om å ikke bruke Nettsiden. Vi forbeholder oss
                  retten til å endre disse vilkårene når som helst, og fortsatt bruk av Nettsiden etter
                  slike endringer utgjør aksept av de oppdaterte vilkårene.
                </p>
              </div>

              {/* About the website */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Om nettsiden</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  MTB Test Norge er en informasjonsside som sammenligner terrengsykler og utstyr basert på
                  tekniske spesifikasjoner fra produsenter og offisielle kilder. Vi tilbyr også guider og
                  nyheter relatert til terrengsykling.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800 font-medium mb-2">Viktig å merke seg:</p>
                  <ul className="list-disc pl-6 text-amber-700 space-y-1 text-sm">
                    <li>Vi har IKKE testet produktene fysisk selv</li>
                    <li>All informasjon er basert på produsentenes spesifikasjoner</li>
                    <li>Vi gir ikke profesjonell rådgivning</li>
                    <li>Våre sammenligninger er ment som veiledning, ikke endelig anbefaling</li>
                  </ul>
                </div>
              </div>

              {/* Affiliate disclosure */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">3. Affiliate-lenker og reklame</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nettsiden inneholder affiliate-lenker til produkter hos våre samarbeidspartnere.
                  Dette betyr at:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>
                    <strong className="text-foreground">Vi kan motta provisjon:</strong> Når du klikker på en
                    affiliate-lenke og foretar et kjøp, kan vi motta en liten provisjon fra forhandleren.
                  </li>
                  <li>
                    <strong className="text-foreground">Ingen ekstra kostnad for deg:</strong> Du betaler
                    aldri mer for et produkt ved å bruke våre lenker.
                  </li>
                  <li>
                    <strong className="text-foreground">Uavhengig innhold:</strong> Provisjon påvirker ikke
                    hvordan vi presenterer eller anbefaler produkter. Vårt innhold er basert på tekniske
                    fakta, ikke økonomiske incentiver.
                  </li>
                  <li>
                    <strong className="text-foreground">Tydelig merking:</strong> Sider med affiliate-lenker
                    er merket med informasjon om dette.
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Vi samarbeider med affiliate-nettverk som AvantLink og andre. Når du forlater vår nettside
                  via en affiliate-lenke, gjelder forhandlerens egne vilkår og personvernerklæring.
                </p>
              </div>

              {/* Disclaimer */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Ansvarsfraskrivelse</h2>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">4.1 Informasjonsnøyaktighet</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vi gjør vårt beste for å sikre at informasjonen på Nettsiden er korrekt og oppdatert.
                  Vi kan imidlertid ikke garantere at all informasjon er komplett, nøyaktig eller aktuell.
                  Tekniske spesifikasjoner, priser og tilgjengelighet kan endres uten varsel.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">4.2 Ingen profesjonell rådgivning</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Innholdet på Nettsiden utgjør ikke profesjonell rådgivning. Før du foretar større kjøp,
                  anbefaler vi at du konsulterer med kvalifiserte fagfolk og/eller besøker en fysisk butikk
                  for veiledning.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">4.3 Eksterne lenker</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nettsiden kan inneholde lenker til eksterne nettsider. Vi er ikke ansvarlige for innholdet,
                  personvernpraksisen eller tilgjengeligheten til disse eksterne sidene. Bruk av eksterne
                  lenker skjer på egen risiko.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">4.4 Begrensning av ansvar</h3>
                <p className="text-muted-foreground leading-relaxed">
                  MTB Test Norge er ikke ansvarlig for direkte, indirekte, tilfeldige eller følgeskader
                  som oppstår fra bruk av Nettsiden eller informasjonen her, inkludert men ikke begrenset til
                  tap som følge av kjøpsbeslutninger basert på innholdet vårt.
                </p>
              </div>

              {/* Intellectual property */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Opphavsrett og immaterielle rettigheter</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Alt innhold på Nettsiden, inkludert tekst, grafikk, logoer, bilder og programvare, er
                  beskyttet av opphavsrett og andre immaterielle rettigheter.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    <strong className="text-foreground">Produsentinnhold:</strong> Produktbilder og
                    spesifikasjoner tilhører de respektive produsentene og brukes med tillatelse eller
                    under "fair use".
                  </li>
                  <li>
                    <strong className="text-foreground">Vårt innhold:</strong> Tekster, guider og
                    sammenligninger skrevet av MTB Test Norge er vår eiendom.
                  </li>
                  <li>
                    <strong className="text-foreground">Begrenset bruk:</strong> Du kan ikke kopiere,
                    reprodusere eller distribuere innhold fra Nettsiden uten skriftlig tillatelse.
                  </li>
                </ul>
              </div>

              {/* User conduct */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">6. Brukeratferd</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Ved å bruke Nettsiden samtykker du til å ikke:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Bruke Nettsiden til ulovlige formål</li>
                  <li>Forsøke å få uautorisert tilgang til systemer eller data</li>
                  <li>Overføre skadelig programvare eller kode</li>
                  <li>Kopiere eller redistribuere innhold uten tillatelse</li>
                  <li>Bruke automatiserte verktøy for å hente innhold (scraping)</li>
                </ul>
              </div>

              {/* Privacy */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">7. Personvern</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vår behandling av personopplysninger er beskrevet i vår{" "}
                  <a href="/personvern" className="text-primary hover:underline">
                    Personvernerklæring
                  </a>
                  . Ved å bruke Nettsiden samtykker du til vår behandling av personopplysninger i samsvar
                  med personvernerklæringen.
                </p>
              </div>

              {/* Changes */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">8. Endringer av vilkår</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vi forbeholder oss retten til å endre disse vilkårene når som helst. Endringer trer i
                  kraft umiddelbart ved publisering på Nettsiden. Vi anbefaler at du jevnlig sjekker denne
                  siden for oppdateringer.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">9. Oppsigelse</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vi forbeholder oss retten til å begrense eller avslutte din tilgang til Nettsiden uten
                  varsel dersom vi mener du har brutt disse vilkårene.
                </p>
              </div>

              {/* Governing law */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">10. Gjeldende lov</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Disse vilkårene er underlagt norsk lov. Eventuelle tvister skal søkes løst i minnelighet,
                  og dersom dette ikke fører frem, avgjøres av norske domstoler.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">11. Kontakt</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Har du spørsmål om disse vilkårene, ta kontakt med oss:
                </p>
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-foreground font-medium">Effi</p>
                  <p className="text-muted-foreground">E-post: hei@effi.pro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vilkar;
