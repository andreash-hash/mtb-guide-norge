import { Bike, Map, Wrench, Mountain, Backpack, BookOpen, Compass } from "lucide-react";

export interface Guide {
  id: string;
  title: string;
  icon: typeof Bike;
  intro: string;
  readTime: number;
  content: string;
  tableOfContents: { id: string; title: string }[];
  relatedProducts: {
    name: string;
    image: string;
    price: string;
    retailer: string;
    affiliateLink: string;
  }[];
  relatedGuides: string[];
}

export const guides: Guide[] = [
  {
    id: "velg-riktig-terrengsykkel",
    title: "Velg riktig terrengsykkel 2025",
    icon: Bike,
    intro: "Hardtail vs fulldemper, hjulstørrelser og geometri forklart",
    readTime: 8,
    tableOfContents: [
      { id: "introduksjon", title: "Introduksjon" },
      { id: "hardtail-vs-fulldemper", title: "Hardtail vs Fulldemper" },
      { id: "hjulstorrelser", title: "Hjulstørrelser" },
      { id: "geometri", title: "Geometri forklart" },
      { id: "prisklasser", title: "Prisklasser" },
      { id: "konklusjon", title: "Konklusjon" },
    ],
    content: `
## Introduksjon

Å velge riktig terrengsykkel kan virke overveldende med alle valgmulighetene som finnes på markedet i dag. Denne guiden hjelper deg å navigere gjennom de viktigste beslutningene du må ta når du skal kjøpe din neste stisykkel.

Enten du er nybegynner som kjøper din første terrengsykkel, eller en erfaren rytter som vil oppgradere, er det viktig å forstå forskjellene mellom de ulike typene sykler og hva som passer best for din kjørestil og lokale terreng.

## Hardtail vs Fulldemper

### Hardtail
En hardtail har kun demping foran (i gaffelen) og en stiv bakramme. Dette gir deg:

- **Lavere vekt** - Ingen bakdemper betyr færre komponenter
- **Enklere vedlikehold** - Mindre som kan gå i stykker
- **Bedre kraftoverføring** - Mer effektiv på klatring
- **Lavere pris** - Får mer sykkel for pengene

Hardtails er ideelle for:
- Nybegynnere som vil lære teknikk
- XC-orientert sykling
- Mindre teknisk terreng
- De med begrenset budsjett

### Fulldemper
En fulldemper har demping både foran og bak, noe som gir:

- **Bedre komfort** - Absorberer støt fra begge hjul
- **Økt grep** - Hjulene følger terrenget bedre
- **Mer kontroll** - Sikrere på tekniske partier
- **Høyere hastighet** - Kan kjøre raskere i røft terreng

Fulldemper passer best for:
- Tekniske stier med røtter og steiner
- Lengre nedkjøringer
- Bikeparker og aggressive kjørestiler
- Erfarne ryttere som vil presse grensene

## Hjulstørrelser

### 29-tommers hjul
Det mest populære valget i dag. Store hjul ruller lettere over hindringer og holder bedre fart. Passer de fleste ryttere over 165 cm.

### 27.5-tommers hjul
Mer kvikke og lekne enn 29ere. Bedre for mindre ryttere og de som prioriterer manøvrerbarhet. Fortsatt populært på aggressive stisykler.

### Mullet (miksede hjul)
Kombinerer et 29-tommers forhjul med 27.5 bak. Gir god rullemotstand foran og kvikk bakende. Stadig mer populært på moderne stisykler.

## Geometri forklart

Moderne terrengsykler har gjennomgått en geometri-revolusjon de siste årene. Her er de viktigste målingene:

### Styrevinkel
Vinkelen på gaffelen målt fra bakken. Slakkere vinkel (65-66°) gir mer stabilitet i bratt terreng. Brattere vinkel (68-70°) er mer kvikk og effektiv på klatring.

### Reach
Horisontal avstand fra kranken til toppen av styre-røret. Lengre reach gir mer stabil kjøreposisjon og plass til å bevege seg på sykkelen.

### Setevinkel
Vinkelen på seterøret. Brattere vinkel (76-78°) plasserer deg mer over kranken for effektiv klatring.

## Prisklasser

### Budsjett (15.000-25.000 kr)
Gode hardtails og enkle fulldempere. Ofte aluminiumsramme med komponenter fra Shimano Deore eller tilsvarende. Perfekt for nybegynnere.

### Mellomklasse (25.000-50.000 kr)
Her får du seriøse fulldempere med god demping og pålitelige komponenter. Ofte aluminiumsramme med XT-nivå deler.

### Premium (50.000-80.000 kr)
Karbonrammer, Fox/RockShox-demping i høyere serier, og gjennomgående kvalitetskomponenter. For entusiaster som vil ha det beste.

### Ultra-premium (80.000+ kr)
Toppspesifiserte sykler med de letteste og mest avanserte komponentene. For racere og de som krever det absolutt beste.

## Konklusjon

Det finnes ingen "perfekt" terrengsykkel - bare den sykkelen som passer best for deg og ditt bruk. Tenk nøye gjennom:

1. Hva slags terreng sykler du mest på?
2. Hva er ditt budsjett?
3. Hvor viktig er vekt vs komfort?
4. Vil du kjøre konkurranser eller bare ha det gøy?

Ta deg tid, prøvekjør hvis mulig, og ikke vær redd for å spørre om råd i sykkelbutikken eller på nettforum.
    `,
    relatedProducts: [
      {
        name: "Trek Fuel EX 7",
        image: "/products/trek-fuel-ex-7.jpg",
        price: "39.990 kr",
        retailer: "Trek",
        affiliateLink: "#"
      },
      {
        name: "Canyon Spectral 125",
        image: "/products/canyon-spectral-125.jpg",
        price: "44.990 kr",
        retailer: "Canyon",
        affiliateLink: "#"
      },
      {
        name: "Norco Fluid FS 1",
        image: "/products/norco-fluid-fs-1.jpg",
        price: "24.990 kr",
        retailer: "XXL",
        affiliateLink: "#"
      }
    ],
    relatedGuides: ["mtb-for-nybegynnere", "terrengsykkel-terminologi"]
  },
  {
    id: "mtb-for-nybegynnere",
    title: "MTB for nybegynnere - komplett guide",
    icon: Map,
    intro: "Alt du må vite før du starter med terrengsykling",
    readTime: 12,
    tableOfContents: [
      { id: "kom-i-gang", title: "Kom i gang" },
      { id: "grunnleggende-teknikk", title: "Grunnleggende teknikk" },
      { id: "sikkerhet", title: "Sikkerhet først" },
      { id: "finn-stier", title: "Finn stier" },
      { id: "trening", title: "Bygg opp styrke" },
      { id: "fellesskap", title: "Bli med i fellesskapet" },
    ],
    content: `
## Kom i gang

Gratulerer med beslutningen om å starte med terrengsykling! Dette er en fantastisk sport som kombinerer trening, naturopplevelser og ren glede. Denne guiden gir deg alt du trenger for å komme i gang på en trygg og morsom måte.

Det første du trenger er selvfølgelig en sykkel. Som nybegynner trenger du ikke den dyreste sykkelen - en god hardtail i mellomklassen gir deg alt du trenger for å lære grunnleggende teknikk og utforske lokale stier.

I tillegg til sykkelen trenger du:
- Hjelm (obligatorisk!)
- Hansker
- Sykkelbriller
- Passende klær
- Vann og litt mat
- Reparasjonsutstyr (slange, pumpe, multitool)

## Grunnleggende teknikk

### Kroppsstilling
Den viktigste teknikken å mestre er riktig kroppsstilling. Hold albuer og knær lett bøyd, og la sykkelen bevege seg under deg mens kroppen din forblir relativt stabil. Tenk på deg selv som en støtdemper.

### Blikk
Se dit du vil - ikke på hindringene du vil unngå. Sykkelen følger blikket ditt, så fokuser på linjen du vil ta, ikke steinene du vil unngå.

### Bremsing
Bruk begge bremser, men husk at forbremsen er mest effektiv. Bremser du for hardt foran kan du gå over styret. Øv på progressiv bremsing og flytt vekten bakover i bratte nedkjøringer.

### Giring
Lær å forutse terrenget og gir ned i god tid før bakker. Det er lettere å gire når du ikke trår hardt.

### Balanse
Øv på å stå stille på sykkelen (trackstand) og kjøre sakte. God balanse i lav hastighet gjør deg til en bedre rytter på alle nivåer.

## Sikkerhet først

Terrengsykling har iboende risiko, men med riktig tilnærming kan du minimere sjansen for skader:

- **Bruk alltid hjelm** - Ingen unntak
- **Start enkelt** - Velg stier som matcher ferdighetsnivået ditt
- **Kjør med andre** - Spesielt i begynnelsen
- **Fortell noen hvor du er** - Del turplanen din
- **Ha med telefon** - For nødsituasjoner
- **Sjekk sykkelen** - Bremser, dekk og bolter før hver tur
- **Kjenn dine grenser** - Det er OK å gå av og gå vanskelige partier

## Finn stier

Norge har fantastiske muligheter for terrengsykling. Her er noen måter å finne stier på:

### Apper og nettsider
- Trailforks
- Strava
- MTB Project
- Lokale sykkelklubbers nettsider

### Lokale sykkelklubber
Bli medlem i en lokal klubb for å lære stier og møte andre syklister. De fleste klubber arrangerer nybegynner-turer.

### Bikeparker
Mange skisteder har bikepark om sommeren med tilrettelagte stier for alle nivåer. Perfekt for å øve teknikk i trygge omgivelser.

## Bygg opp styrke

Terrengsykling er fysisk krevende, men du trenger ikke være i toppform for å starte. Kondisjon og styrke kommer naturlig når du sykler regelmessig.

Tips for å bygge opp form:
- Start med kortere turer (1-2 timer)
- Øk gradvis distanse og vanskelighetsgrad
- Hvil mellom turene
- Supplér med styrketrening for core og bein
- Spis godt og sov nok

## Bli med i fellesskapet

MTB-miljøet er kjent for å være inkluderende og hjelpsomt. Måter å bli med:

- Delta på klubbturer
- Følg lokale grupper på sosiale medier
- Besøk lokale sykkelbutikker - de kjenner ofte miljøet
- Delta på arrangementer og ritt
- Hjelp andre når du kan

Velkommen til terrengsykling!
    `,
    relatedProducts: [
      {
        name: "Giro Switchblade hjelm",
        image: "/products/giro-switchblade.jpg",
        price: "2.499 kr",
        retailer: "XXL",
        affiliateLink: "#"
      },
      {
        name: "Fox Ranger hansker",
        image: "/products/fox-ranger-gloves.jpg",
        price: "399 kr",
        retailer: "XXL",
        affiliateLink: "#"
      },
      {
        name: "Camelbak MULE ryggsekk",
        image: "/products/camelbak-mule.jpg",
        price: "1.199 kr",
        retailer: "XXL",
        affiliateLink: "#"
      }
    ],
    relatedGuides: ["velg-riktig-terrengsykkel", "riktig-utstyr"]
  },
  {
    id: "vedlikehold",
    title: "Vedlikehold av terrengsykkel",
    icon: Wrench,
    intro: "Hold sykkelen din i toppform hele sesongen",
    readTime: 10,
    tableOfContents: [
      { id: "etter-tur", title: "Etter hver tur" },
      { id: "ukentlig", title: "Ukentlig vedlikehold" },
      { id: "manedlig", title: "Månedlig service" },
      { id: "arlig", title: "Årlig hovedservice" },
      { id: "verktoykasse", title: "Verktøykassen din" },
      { id: "tips", title: "Ekstra tips" },
    ],
    content: `
## Etter hver tur

Det tar bare noen minutter etter turen å gjøre enkelt vedlikehold som forlenger levetiden på sykkelen betydelig:

### Rengjøring
- Skyll av grov skitt med vann (unngå høytrykk på lager og tetninger)
- Tørk av ramme og komponenter
- La sykkelen lufttørke eller tørk med klut

### Rask inspeksjon
- Sjekk dekk for kutt eller skader
- Lytt etter unormale lyder når du spinner hjulene
- Kontroller at bremsene fungerer
- Se etter løse bolter

### Smøring
Etter våte turer, påfør litt olje på kjeden mens den fortsatt er ren.

## Ukentlig vedlikehold

Sett av 15-20 minutter en gang i uken til dette:

### Kjede
- Rengjør kjeden grundig med avfetter
- Tørk av og påfør ny olje
- Tørk av overflødig olje

### Bremser
- Sjekk bremsebelegg for slitasje
- Rengjør skiver med bremserens
- Kontroller at bremsene er sentrerte

### Dekk
- Sjekk lufttrykk
- Se etter slitasje og skader
- Kontroller at dekkene sitter ordentlig på felgene

### Gir
- Sjekk at girene skifter rent
- Juster kabel-stramming om nødvendig
- Rengjør og smør girwirer

## Månedlig service

En gang i måneden bør du gjøre en mer grundig gjennomgang:

### Suspensjon
- Rengjør og smør dempestag (gaffel og bakdemper)
- Sjekk lufttrykk i luftdempere
- Kontroller at rebound og compression fungerer

### Bolter
- Gå gjennom alle bolter med moment-nøkkel
- Spesielt viktig: stem, styre, krank, bremsecalipere
- Bruk riktig moment (sjekk spesifikasjoner)

### Hjul
- Sjekk eiker for spenning
- Kontroller at hjulene er rette
- Se etter slitasje på felger (for felgbremser)

### Lager
- Kjenn etter spill i hodelager, kranklager og nav
- Lytt etter knirk eller uvanlige lyder

## Årlig hovedservice

Minst en gang i året bør sykkelen få en komplett service. Mange velger å gjøre dette hos en profesjonell, men du kan også gjøre mye selv:

### Full demontering
- Ta fra hverandre og rengjør alle komponenter
- Inspiser ramme for sprekker eller skader
- Bytt slitte lager og tetninger

### Suspensjon-service
- Bytt olje i gaffel og demper
- Skift tetninger og o-ringer
- Dette anbefales å gjøre hos autorisert verksted

### Drivverk
- Bytt kjede, kassett og kjedeblad om nødvendig
- Rengjør og smør alle girkomponenter
- Juster frontgir og bakgir fra bunnen av

### Bremser
- Lufting av hydrauliske bremser
- Bytt bremsevæske
- Nye belegg hvis slitt

## Verktøykassen din

Grunnleggende verktøy du bør ha hjemme:

- Unbrakonøkler (2-8mm)
- Moment-nøkkel
- Kjedeverktøy og kjedepisk
- Dekkjern
- Pumpe med manometer
- Kabelkutter
- Avfetter og kjedeolje
- Rengjøringsmidler
- Lapper og slanger
- Multitool

## Ekstra tips

- **Før lagring**: Rengjør og smør sykkelen grundig før vinterlagring
- **Dokumenter**: Ta bilder av innstillinger før du justerer
- **Lær gradvis**: Start med enkle oppgaver og bygg opp kompetansen
- **YouTube**: Gode videoguider for nesten alt av sykkelvedlikehold
- **Spør**: Ikke vær redd for å spørre i butikken eller på forum
- **Forebygging**: Regelmessig vedlikehold er billigere enn reparasjoner
    `,
    relatedProducts: [
      {
        name: "Park Tool IB-3 Multitool",
        image: "/products/park-tool-ib3.jpg",
        price: "399 kr",
        retailer: "XXL",
        affiliateLink: "#"
      },
      {
        name: "Muc-Off rengjøringssett",
        image: "/products/muc-off-cleaning.jpg",
        price: "599 kr",
        retailer: "XXL",
        affiliateLink: "#"
      },
      {
        name: "PRO moment-nøkkelsett",
        image: "/products/pro-torque-wrench.jpg",
        price: "799 kr",
        retailer: "XXL",
        affiliateLink: "#"
      }
    ],
    relatedGuides: ["velg-riktig-terrengsykkel", "riktig-utstyr"]
  },
  {
    id: "beste-stier-norge",
    title: "Beste MTB-stier i Norge",
    icon: Mountain,
    intro: "Populære destinasjoner for terrengsykling basert på stinett og tilgjengelighet",
    readTime: 15,
    tableOfContents: [
      { id: "ostlandet", title: "Østlandet" },
      { id: "vestlandet", title: "Vestlandet" },
      { id: "trondelag", title: "Trøndelag" },
      { id: "sorlandet", title: "Sørlandet" },
      { id: "nord-norge", title: "Nord-Norge" },
      { id: "bikeparker", title: "Bikeparker" },
    ],
    content: `
## Østlandet

Østlandet byr på et enormt utvalg av stier, fra milde skogstier til tekniske fjellstier. Regionen er kjent for sitt godt utviklede stinett.

### Tryvann, Oslo
Norges mest besøkte MTB-destinasjon med et omfattende stinett ifølge Trailforks og lokale sykkelklubber. Wyller-løypa og Linderudkollen regnes som klassikere i miljøet. Tryvann bikepark har tilrettelagte stier for alle nivåer.

**Populære stier:**
- Wyller Enduro - Teknisk nedkjøring med variert terreng
- Grefsenkollen - Egnet for nybegynnere basert på stigraderings-systemer
- Tryvann Bikepark - Liftet sykling hele sommeren

### Ringkollen, Hønefoss
Ringkollen trekkes ofte frem som et godt alternativ til Oslo-marka med færre syklister. Området byr på flyt-stier og tekniske seksjoner i variert terreng.

**Populære stier:**
- Ringkollen rundt - Lang runde for heldagstur
- Nordmarka-tilkobling - Kan kombineres med Oslo-stier

### Hafjell
Skandinavias største bikepark med over 40 traseer ifølge Hafjells egen oversikt. Parken tilbyr alt fra grønne nybegynnertraseer til svarte proff-løyper.

**Populære stier:**
- Olympialøypa - World Cup-standard nedkjøring
- Familietraseer - Graderte stier for barn og nybegynnere

## Vestlandet

Dramatisk natur og variert terreng gjør Vestlandet til en populær destinasjon for stisyklister som søker naturopplevelser.

### Bergen og omegn
Fløyen og Ulriken byr på stier med utsikt over byen. Terrenget er preget av røtter og stein, noe som krever tekniske ferdigheter.

**Populære stier:**
- Ulriken ned - Bratt nedkjøring med tekniske partier
- Fløyen trails - Mer tilgjengelige stier nær bysentrum

### Voss
Voss er kjent som ekstremsporthovedstad og har godt tilrettelagt stisykling i tillegg til andre aktiviteter.

**Populære stier:**
- Hangurstoppen - Stier med panoramautsikt
- Voss Resort - Liftet sykling om sommeren

## Trøndelag

Trøndelag har et voksende MTB-miljø med stadig flere tilrettelagte stier, ifølge lokale sykkelklubber.

### Trondheim
Bymarka og Estenstadmarka tilbyr stisykling i kort avstand fra sentrum.

**Populære stier:**
- Lianvatnet rundt - Populær rute for kveldstur
- Gråkallen - Tekniske stier med utsikt over byen

### Oppdal
Alpint fjellterreng med muligheter for lange nedkjøringer. Mange velger å kjøre bil til toppen for å maksimere nedkjøringstiden.

**Populære stier:**
- Vangslia - Tekniske fjellstier
- Stølen - Flyt-orientert terreng

## Sørlandet

Sørlandet overrasker med variert terreng og godt vær.

### Kristiansand
Baneheia og Ravnedalen byr på morsomme stier i kort avstand fra sentrum.

**Highlights:**
- Baneheia trails - Perfekt for kveldstur
- Søgne-stiene - Tekniske og underholdende

### Evje
Setesdal har fantastiske muligheter for de som søker eventyr. Kombinér med klatring og padling.

## Nord-Norge

Midnattsol-sykling og spektakulær natur gjør Nord-Norge til en unik opplevelse.

### Tromsø
Sykling i midnattssol er en opplevelse utenom det vanlige. Flott terreng i nærheten av byen.

**Highlights:**
- Fløya - Panoramautsikt over Tromsø
- Kvaløya - Eventyrlige øy-stier

### Lofoten
Kanskje Norges vakreste kulisse for stisykling. Krevende terreng belønnes med uforglemmelige opplevelser.

**Highlights:**
- Henningsvær-stiene - Teknisk i vakker natur
- Svolvær og omegn - Variert terreng

## Bikeparker

Norge har et voksende antall bikeparker med liftet sykling:

### Populære bikeparker i Norge:
1. **Hafjell** - Størst i Skandinavia med over 40 traseer
2. **Trysil** - Kjent for godt utbygde flow-trails
3. **Geilo** - Teknisk og utfordrende terreng
4. **Nesbyen** - Graderte stier for familier
5. **Oppdal** - Alpint fjellterreng

De fleste bikeparker tilbyr sykkelutleie, noe som gjør det enkelt å prøve uten eget utstyr.
    `,
    relatedProducts: [
      {
        name: "Garmin Edge 840",
        image: "/products/garmin-edge-840.jpg",
        price: "4.999 kr",
        retailer: "XXL",
        affiliateLink: "#"
      },
      {
        name: "Osprey Raptor 14 ryggsekk",
        image: "/products/osprey-raptor-14.jpg",
        price: "1.599 kr",
        retailer: "XXL",
        affiliateLink: "#"
      },
      {
        name: "GoPro Hero 12",
        image: "/products/gopro-hero-12.jpg",
        price: "4.499 kr",
        retailer: "Elkjøp",
        affiliateLink: "#"
      }
    ],
    relatedGuides: ["mtb-for-nybegynnere", "riktig-utstyr"]
  },
  {
    id: "riktig-utstyr",
    title: "Riktig utstyr til terrengsykling",
    icon: Backpack,
    intro: "Hjelm, beskyttelse, klær og tilbehør du trenger",
    readTime: 9,
    tableOfContents: [
      { id: "hjelm", title: "Hjelm" },
      { id: "beskyttelse", title: "Beskyttelse" },
      { id: "klaer", title: "Klær" },
      { id: "sko", title: "Sko og pedaler" },
      { id: "tilbehor", title: "Tilbehør" },
      { id: "ryggsekk", title: "Ryggsekk" },
    ],
    content: `
## Hjelm

Hjelmen er det viktigste utstyret du kjøper. Aldri sykle uten!

### Typer hjelmer

**XC/Trail-hjelm**
Lett og godt ventilert. Passer for de fleste stisyklister. Har ofte avtakbar skjerm.

**Enduro-hjelm (halvskall)**
Mer dekning bak og på sidene. God balanse mellom beskyttelse og vekt.

**Fullface-hjelm**
Maksimal beskyttelse med halebeskyttelse. Nødvendig for bikepark og aggressive nedkjøringer.

**Konvertibel hjelm**
Avtakbar halebeskyttelse gir fleksibilitet. Fin for de som vil ha én hjelm til alt.

### Hva du skal se etter
- MIPS eller tilsvarende rotasjonsbeskyttelse
- God passform (prøv flere merker)
- Tilstrekkelig ventilasjon
- Sertifisering (CE, CPSC, ASTM)

## Beskyttelse

Ekstra beskyttelse gir trygghet til å presse grensene.

### Knebeskyttere
Nesten obligatorisk for stisykling. Velg mellom:
- **Lette pads** - For XC og lett stisykling
- **Soft shell** - God beskyttelse, fleksible
- **Hard shell** - Maksimal beskyttelse, litt mer volum

### Albuebeskyttere
Viktig for teknisk sykling og bikepark. Samme kategorier som kne.

### Brystbeskyttelse
For bikepark og downhill. Beskytter rygg og bryst mot treff.

### Ryggbeskytter
Integrert i ryggsekk eller separat vest. Viktig for aggressive kjørestiler.

## Klær

Riktige klær gjør turen mer komfortabel i alle forhold.

### Overdel
- **Sykkeltrøye** - Pustende og hurtigtørkende
- **Vindjakke** - Lett og pakkbar for nedkjøringer
- **Regnjakke** - Vanntett for norske forhold

### Underdel
- **Sykkelshorts med padding** - Under baggy shorts
- **Baggy shorts** - Slitesterke og med lommer
- **Langbukse** - For kaldere dager

### Lag-på-lag
Bruk flere tynne lag fremfor ett tykt. Gjør det enkelt å regulere temperaturen.

## Sko og pedaler

Valget mellom flate pedaler og klikkpedaler er personlig.

### Flate pedaler
- Enklere å hoppe av ved problemer
- Bra for å lære teknikk
- Mer bevegelsesfrihet
- Krever sko med stiv såle og godt grep

### Klikkpedaler
- Bedre kraftoverføring
- Foten sitter fast i røft terreng
- Krever øvelse å bli komfortabel med
- SPD-systemet er mest populært for MTB

### Sko
- Stiv såle for kraft
- Godt grep på pedalen
- Beskyttelse for tær
- Drenering for våte forhold

## Tilbehør

### Briller
Beskytter øynene mot grener, insekter og søle. Velg klare glass for skog og mørke glass for sol.

### Hansker
- Beskytter hender ved fall
- Bedre grep på styret
- Demper vibrasjoner

### Lys
Nødvendig for høst- og vintertrening. Velg kraftig frontlys (1000+ lumen) for skogstier.

### Verktøy
Ha alltid med:
- Multitool
- Pumpe eller CO2-patron
- Slange eller lappesaker
- Kjedelås

## Ryggsekk

En god ryggsekk er uvurderlig på lengre turer.

### Hva du skal se etter
- 8-15 liter kapasitet for dagstur
- Væskeblære-kompatibel
- Ventilert ryggpanel
- Hjelm-feste
- Verktøylomme

### Ofte anbefalte modeller i sykkelfellesskapet
- **Camelbak MULE** - Etablert modell kjent for god væskekapasitet
- **Osprey Raptor** - Lett konstruksjon med ventilert ryggpanel
- **Evoc Trail Pro** - Tilbyr integrert ryggbeskytter ifølge produsent
    `,
    relatedProducts: [
      {
        name: "Fox Speedframe Pro hjelm",
        image: "/products/fox-speedframe-pro.jpg",
        price: "2.199 kr",
        retailer: "XXL",
        affiliateLink: "#"
      },
      {
        name: "POC VPD knebeskyttere",
        image: "/products/poc-vpd-knee.jpg",
        price: "899 kr",
        retailer: "XXL",
        affiliateLink: "#"
      },
      {
        name: "Five Ten Freerider sko",
        image: "/products/five-ten-freerider.jpg",
        price: "1.299 kr",
        retailer: "XXL",
        affiliateLink: "#"
      }
    ],
    relatedGuides: ["mtb-for-nybegynnere", "vedlikehold"]
  },
  {
    id: "terrengsykkel-terminologi",
    title: "Terrengsykkel-terminologi",
    icon: BookOpen,
    intro: "Ordliste: Travel, geometry, dropper post og mer",
    readTime: 6,
    tableOfContents: [
      { id: "ramme", title: "Ramme og geometri" },
      { id: "suspensjon", title: "Suspensjon" },
      { id: "drivverk", title: "Drivverk" },
      { id: "hjul-dekk", title: "Hjul og dekk" },
      { id: "bremser", title: "Bremser" },
      { id: "diverse", title: "Diverse" },
    ],
    content: `
## Ramme og geometri

**Reach**
Horisontal avstand fra midten av kranken til toppen av styrerøret. Lengre reach = mer stabil sykkel.

**Stack**
Vertikal avstand fra midten av kranken til toppen av styrerøret. Høyere stack = mer oppreist sittestilling.

**Styrevinkel (Head angle)**
Vinkelen på gaffelen målt fra bakken. Slakkere vinkel = mer stabil i bratt terreng.

**Setevinkel (Seat angle)**
Vinkelen på seterøret. Brattere vinkel = bedre klatreposisjon.

**Chainstay**
Lengden fra kranken til baknavet. Kortere = mer leken, lengre = mer stabil.

**Wheelbase**
Total lengde fra forhjul til bakhjul. Lengre = mer stabil i fart.

**BB drop/height**
Hvor lavt kranken sitter i forhold til akselhøyden. Lavere = lavere tyngdepunkt.

**Hardtail**
Sykkel uten bakdemper - kun demping i gaffelen.

**Fulldemper/Full suspension**
Sykkel med demping både foran og bak.

## Suspensjon

**Travel/Vandring**
Hvor langt demperen kan komprimeres, målt i millimeter.

**Rebound**
Hastigheten demperen returnerer til utgangsposisjonen.

**Compression**
Motstand mot inntrykking av demperen.

**Sag**
Hvor mye demperen synker inn med rytterens vekt. Vanligvis 25-30% av total travel.

**Lockout**
Mulighet til å låse demperen for effektiv klatring.

**Air spring**
Demper som bruker lufttrykk som fjær.

**Coil spring**
Demper med metalspiral som fjær.

**Progressive/linear**
Hvordan demperen blir hardere utover i slaget.

## Drivverk

**Drivetrain**
Alle delene som overfører kraft til bakhjulet: kranker, kjede, kassett, girskiftere.

**1x (one-by)**
Drivverk med kun ett kjedeblad foran og én kassett bak.

**Kassett**
Tannhjulene på bakhjulet.

**Kjedeblad**
Tannhjulet på kranken.

**Narrow-wide**
Kjedeblad-profil designet for å holde kjeden på plass uten fremre derailleur.

**Clutch derailleur**
Bakgir med demping som holder kjeden stram.

**Range**
Forskjellen mellom største og minste gir, ofte oppgitt i prosent.

## Hjul og dekk

**29er**
Sykkel med 29-tommers hjul (622mm felgdiameter).

**27.5 / 650b**
Sykkel med 27.5-tommers hjul (584mm felgdiameter).

**Mullet**
Sykkel med 29" forhjul og 27.5" bakhjul.

**Tubeless**
Dekk uten slange, med tetningsmasse.

**TPI (Threads Per Inch)**
Antall tråder i dekkets vev. Høyere = lettere og mer fleksibelt.

**Boost spacing**
Bredere nav-standard (110mm foran, 148mm bak) for stivere hjul.

**Compound**
Gummiblandingen i dekket - mykere = mer grep, raskere slitasje.

## Bremser

**Hydrauliske skivebremser**
Standard for moderne MTB - bruker væske for å overføre kraft.

**Rotor/skive**
Metallskiven som klemmes av bremsebelegget.

**Caliper**
Bremsekalipperen som holder bremsebeleggene.

**2-pot/4-pot**
Antall stempler i bremseklossen. Flere = mer kraft.

**Bite point**
Punktet hvor bremsene begynner å ta tak.

**Modulation**
Hvor finjustert kontroll du har over bremsekraften.

## Diverse

**Dropper post**
Setepinne som kan senkes og heves med en knapp på styret.

**Stem**
Styrestamme - koblingen mellom gaffel og styre.

**Riser bar**
Styre som buer oppover fra stammen.

**Sweep**
Hvor mye styret bøyer bakover.

**Thru-axle**
Gjennomgående aksel som skrus fast - stivere enn quick release.

**Enduro**
Sykkelstil/konkurranseform med tidtatte nedkjøringer og ubestemte klatringer.

**XC (Cross-country)**
Kondisjonsorientert sykling med vekt på effektivitet.

**Trail**
Allround stisykling - den mest populære kategorien.

**Flow trail**
Sti bygget for jevn fart med naturlige svinger og hopp.
    `,
    relatedProducts: [
      {
        name: "Park Tool Big Blue Book",
        image: "/products/park-tool-blue-book.jpg",
        price: "349 kr",
        retailer: "XXL",
        affiliateLink: "#"
      },
      {
        name: "Shimano Deore XT drivetrain",
        image: "/products/shimano-deore-xt.jpg",
        price: "4.999 kr",
        retailer: "XXL",
        affiliateLink: "#"
      },
      {
        name: "RockShox Reverb dropper",
        image: "/products/rockshox-reverb.jpg",
        price: "3.499 kr",
        retailer: "XXL",
        affiliateLink: "#"
      }
    ],
    relatedGuides: ["velg-riktig-terrengsykkel", "vedlikehold"]
  },
  {
    id: "mtb-geometri-forklart",
    title: "Terrengsykkel-geometri forklart",
    icon: Compass,
    intro: "Forstå geometritabellen: reach, stack, styrevinkel, chainstay og mer – og hva det betyr for kjøreegenskapene",
    readTime: 14,
    tableOfContents: [
      { id: "kort-historie", title: "Kort historikk" },
      { id: "geometri-forklart", title: "Geometri forklart" },
      { id: "seteror", title: "Seterør og passform" },
      { id: "reach", title: "Reach" },
      { id: "stack", title: "Stack" },
      { id: "styrevinkel", title: "Styrevinkel (Head angle)" },
      { id: "chainstay", title: "Chainstay-lengde" },
      { id: "setevinkel", title: "Setevinkel" },
      { id: "wheelbase", title: "Wheelbase" },
      { id: "bb-drop", title: "BB drop og tyngdepunkt" },
      { id: "geometri-sammenligning", title: "Geometri-sammenligning" },
    ],
    content: `
## Kort historikk

Terrengsykkelgeometri har gjennomgått en dramatisk utvikling de siste tiårene. Fra de tidlige dagene på 1970-tallet i Marin County, California – der entusiaster rullet nedover bratte grusveier på modifiserte strandcruisere – til dagens avanserte geometriberegninger, har mye endret seg.

Gjennom 1990- og 2000-tallet eksperimenterte designere med mange ulike løsninger for å finne den ideelle kombinasjonen av hjul, demping og rammekonstruksjon. Mange ville design ble forkastet, mens andre la grunnlaget for det vi kjenner som moderne terrengsykkelgeometri.

De siste ti årene har geometrien endret seg mer enn noen gang. Moderne terrengsykler har blitt lengre, lavere og slakkere – noe som gir helt andre kjøreegenskaper enn eldre modeller. Å forstå geometritabellen er nøkkelen til å finne sykkelen som passer din kropp, din kjørestil og terrenget du sykler i.

## Geometri forklart

En geometritabell kan ved første øyekast se ut som en uoverskuelig vegg av tall. Men når du forstår hva hver måling betyr, blir det et kraftig verktøy for å sammenligne sykler og forstå hvordan de vil oppføre seg på stien.

Geometrien er selve hjertet i sykkelen. Komponentene kan skiftes ut over tid, men geometrien følger deg gjennom hele sykkelens levetid. Riktig geometri for din kropp og kjørestil er nøkkelen til en god opplevelse.

## Seterør og passform

Seterørlengden er det viktigste målet for passform. Helt enkelt: er seterøret for langt, får du ikke plass på sykkelen. Er det for kort, kan du ikke tråe ordentlig.

### Dropper post og seterørlengde
Moderne terrengsykler har kortere seterør enn før, hovedsakelig for å gi plass til lengre dropper post. Når du velger sykkel, sjekk at seterøret er kort nok til å montere den dropper post-lengden du ønsker, samtidig som du kan nå full setehøyde.

### Slik finner du riktig setehøyde
Mål avstanden fra midten av kranken til toppen av setet med bena i laveste pedalposisjon. Kneet skal ha en lett bøy (ca. 25-30 grader). De fleste produsenter oppgir setehøyde-range for hver størrelse.

## Reach

Reach er kanskje det viktigste tallet i en moderne geometritabell. Det måler den horisontale avstanden fra midten av kranken til toppen av styrerøret – altså hvor langt sykkelen strekker seg foran deg når du står på pedalene.

### Hvorfor er reach viktig?
I motsetning til tradisjonelt toppløps-mål (som brukes på landevei), forteller reach deg hvordan sykkelen føles når du står oppreist. Og det er jo nettopp der moroa skjer på terrengsykkelen.

### Reach varierer med sykkeltype
- **XC-sykler**: Typisk kortere reach (420-445 mm i M), kombinert med lengre stem
- **Trail-sykler**: Middels reach (440-470 mm i M)
- **Enduro/DH-sykler**: Lengre reach (460-500 mm i M), med kort stem

Merk at kortere reach + lengre stem kan gi tilsvarende total lengde som lengre reach + kort stem. Noen produsenter oppgir «Reach+» som kombinerer begge.

### Personlig preferanse
En lengre sykkel føles mer stabil i fart, men er tregere i trange svinger. En kortere sykkel er mer leken og enklere å manøvrere, men kan føles nervøs i høy hastighet. Det finnes ikke ett riktig svar – det handler om hva som passer deg.

## Stack

Stack måler den vertikale avstanden fra midten av kranken til toppen av styrerøret. Dette forteller deg hvor høyt fronten av sykkelen er i forhold til pedalene.

### Stack og kjørestil
- **XC-sykler**: Lav stack (570-590 mm) – aggressiv, aerodynamisk posisjon
- **Trail-sykler**: Middels stack (600-620 mm) – balansert for opp og ned
- **Enduro/DH-sykler**: Høy stack (620-640 mm) – oppreist posisjon for bratte nedkjøringer

Du kan justere styrehøyden med spacere og ulike stem-vinkler, men stack gir deg utgangspunktet fra rammen.

## Styrevinkel (Head angle)

Styrevinkelen forteller deg hvordan sykkelen styrer. Den måles som vinkelen mellom gaffelen og bakken.

### Slakk vs bratt
- **Slakk vinkel (63-65°)**: Treigere, mer stabil styring. Gir selvtillit i bratt terreng og høy fart. Typisk for enduro og DH-sykler.
- **Bratt vinkel (67-70°)**: Kvikkere styring ved lav hastighet. Mer effektiv på klatring. Typisk for XC-sykler.

### Trail-sykler i mellom
Trail-sykler har typisk styrevinkel mellom 64-67°, avhengig av om de heller mot nedkjøring eller klatring. Bare én grad forskjell kan gi merkbar endring i kjørefølelse.

### Husk sammenhengen
Slakkere styrevinkel gjør hele fronten av sykkelen lengre. Sammen med lengre reach gir dette en sykkel som føles romslig og stabil – men som krever mer krefter i trange svinger.

## Chainstay-lengde

Chainstay-lengden – avstanden fra kranken til baknavet – påvirker stabiliteten og lekenheten til sykkelen fundamentalt.

### Kort vs lang chainstay
- **Kort chainstay (420-435 mm)**: Lettere å løfte forhjulet, mer lekent. Enklere å wheelie, manualle og kutte svinger. Populært blant lekne ryttere.
- **Lang chainstay (435-450 mm)**: Mer stabil og forutsigbar. Bedre vektfordeling i bratt terreng. Typisk for ren nedkjøring.

### E-MTB og chainstay
Elsykler har ofte litt lengre chainstays enn tilsvarende vanlige sykler. Motoren tillater brattere klatringer, og lengre chainstay gir bedre vektfordeling over bakhjulet i slike situasjoner.

### Hjulstørrelse og chainstay
27.5"-hjul tillater kortere chainstay enn 29", noe som er en av grunnene til at mullet-oppsett (29" foran, 27.5" bak) er blitt populært – du får rulleegenskapene til 29" foran med den korte chainstay-lengden til 27.5" bak.

## Setevinkel

Setevinkelen forteller deg om sykkelen er best egnet for flatt terreng eller bratte klatringer.

### Bratt vs slakk setevinkel
- **Bratt setevinkel (76-78°)**: Plasserer deg mer over kranken. Bedre for bratte klatringer der du trenger vekt på forhjulet for å beholde styring og grep.
- **Slakkere setevinkel (73-75°)**: Setter deg lenger bak. Kan være mer komfortabelt på flate partier, men gir dårligere klatreposisjon i bratt terreng.

### Utviklingen
Moderne sykler har generelt brattere setevinkler enn eldre modeller. Enduro-sykler har ofte de bratteste setevinklene (77-78°) fordi de må klatre effektivt mellom etappene.

## Wheelbase

Wheelbase er den totale avstanden fra forhjul til bakhjul. Det er summen av alle de andre målingene og gir et overordnet bilde av sykkelens stabilitet.

### Lengre = mer stabil
En lengre wheelbase gir generelt mer stabilitet i fart, men gjør sykkelen tyngre å svinge. Kortere wheelbase er kvikkere og mer manøvrerbar.

### Typiske verdier (størrelse M)
- **XC-sykler**: 1140-1170 mm
- **Trail-sykler**: 1180-1220 mm
- **Enduro-sykler**: 1220-1260 mm
- **DH-sykler**: 1250-1290 mm

## BB drop og tyngdepunkt

BB drop (eller BB height) forteller deg hvor lavt kranken sitter i forhold til akselhøyden på hjulene.

### Lavere = lavere tyngdepunkt
Mer BB drop gir lavere tyngdepunkt, noe som øker stabiliteten – spesielt i svinger. Ulempen er økt risiko for å slå kranken i steiner og røtter (pedal strikes).

### Typiske verdier
- **XC-sykler**: 25-30 mm drop
- **Trail/Enduro-sykler**: 30-40 mm drop

## Geometri-sammenligning

Her er en typisk sammenligning av geometriverdier for størrelse M:

### XC-sykkel (typisk)
- Styrevinkel: 68-69°
- Setevinkel: 74-76°
- Reach: 430-445 mm
- Stack: 575-590 mm
- Chainstay: 430-440 mm

### Trail-sykkel (typisk)
- Styrevinkel: 64-66°
- Setevinkel: 76-78°
- Reach: 450-470 mm
- Stack: 600-620 mm
- Chainstay: 430-440 mm

### Enduro-sykkel (typisk)
- Styrevinkel: 63-65°
- Setevinkel: 77-79°
- Reach: 465-490 mm
- Stack: 620-640 mm
- Chainstay: 435-450 mm

Husk at tallene forteller bare en del av historien. Hvordan rammekonstruksjonen, dempingen og hjulstørrelsen samspiller med geometrien avgjør den totale kjøreopplevelsen. Beste måten å finne din sykkel på er å prøvekjøre flere alternativ og kjenne etter hva som føles riktig for din kropp og ditt terreng.
    \`,
    relatedProducts: [
      {
        name: "Trek Fuel EX 7",
        image: "/products/trek-fuel-ex-7.jpg",
        price: "39.990 kr",
        retailer: "Trek",
        affiliateLink: "#"
      },
      {
        name: "Canyon Spectral 125",
        image: "/products/canyon-spectral-125.jpg",
        price: "44.990 kr",
        retailer: "Canyon",
        affiliateLink: "#"
      },
      {
        name: "Norco Fluid FS 1",
        image: "/products/norco-fluid-fs-1.jpg",
        price: "24.990 kr",
        retailer: "XXL",
        affiliateLink: "#"
      }
    ],
    relatedGuides: ["velg-riktig-terrengsykkel", "terrengsykkel-terminologi"]
  }
];

export const getGuideById = (id: string): Guide | undefined => {
  return guides.find(guide => guide.id === id);
};
