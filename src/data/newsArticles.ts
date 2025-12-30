export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  excerpt: string;
  content: string;
  image: string;
  publishedAt: string;
  isFeatured?: boolean;
  relatedProducts: {
    name: string;
    image: string;
    price: string;
    retailer: string;
    affiliateLink: string;
  }[];
  relatedNews: string[];
}

export const newsArticles: NewsArticle[] = [
  {
    id: "trek-fuel-ex-2025",
    title: "Trek lanserer Fuel EX 2025 - større endringer enn noensinne",
    category: "Produktnyheter",
    categoryColor: "bg-secondary",
    excerpt: "Trek har avslørt sin nye Fuel EX for 2025-sesongen, og endringene er betydelige. Med helt ny geometri, oppdatert dempersystem og et friskt design, lover den amerikanske giganten at dette blir deres beste stisykkel noensinne.",
    content: `
Trek har endelig trukket sløret av sin nye Fuel EX 2025, og det er tydelig at ingeniørene i Wisconsin har jobbet hardt siden forrige generasjon. Den nye modellen representerer den største oppgraderingen i seriens historie.

## Helt ny geometri

Den mest merkbare endringen er den oppdaterte geometrien. Styrevinkelen er nå 64,5 grader - hele 1,5 grader slakkere enn forgjengeren. Reach har økt med 15mm på alle størrelser, noe som gir en mer moderne og stabil kjøreposisjon.

Setevinkel er brattere på 77 grader, som plasserer rytteren mer over pedalene for effektiv klatring. Chainstay-lengden er justerbar mellom 435 og 445mm, slik at du kan tilpasse sykkelen til din kjørestil.

## Oppdatert dempersystem

Fuel EX 2025 kommer med 140mm vandring både foran og bak - en økning på 10mm bak sammenlignet med den utgående modellen. Det nye RE:aktiv-dempersystemet lover bedre småstøtsensitivitet samtidig som det beholder god støtte på klatring.

Trek har også introdusert en ny "Mino Link" som lar deg justere geometrien ytterligere med 0,5 graders endring i både styre- og setevinkel.

## Pris og tilgjengelighet

De nye modellene starter på 44.990 kroner for aluminiumsversjonen med Shimano Deore-komponentpakke. Toppmodellen med full karbonramme og SRAM XX Eagle-deler koster 129.990 kroner.

Syklene forventes i norske butikker fra mars 2025. Trek-forhandlere kan allerede nå ta imot forhåndsbestillinger.
    `,
    image: "/placeholder.svg",
    publishedAt: "28. desember 2024",
    isFeatured: true,
    relatedProducts: [
      { name: "Trek Fuel EX 7", image: "/placeholder.svg", price: "44.990 kr", retailer: "Trek", affiliateLink: "#" },
      { name: "Trek Fuel EX 9.8", image: "/placeholder.svg", price: "89.990 kr", retailer: "Trek", affiliateLink: "#" },
      { name: "Fox 36 Performance", image: "/placeholder.svg", price: "8.999 kr", retailer: "XXL", affiliateLink: "#" }
    ],
    relatedNews: ["specialized-priskutt", "shimano-vs-sram", "enduro-test"]
  },
  {
    id: "specialized-priskutt",
    title: "Specialized kutter priser på utvalgte 2024-modeller",
    category: "Produktnyheter",
    categoryColor: "bg-secondary",
    excerpt: "Specialized annonserer betydelige prisreduksjoner på flere av sine populære 2024-modeller. Stumpjumper og Epic får opptil 25% rabatt hos utvalgte forhandlere.",
    content: `
Specialized har kunngjort omfattende prisreduksjoner på utvalgte 2024-modeller i forbindelse med årsskiftet. Flere populære terrengsykler får betydelige kutt som gjør dem mer tilgjengelige for norske syklister.

## Store besparelser på Stumpjumper

Stumpjumper Comp, som tidligere kostet 64.990 kroner, er nå tilgjengelig for 48.990 kroner - en besparelse på hele 16.000 kroner. Dette gjør den karbonrammede stisykkelen til et svært attraktivt kjøp.

Også aluminiumsversjonen Stumpjumper Alloy får et kutt fra 39.990 til 29.990 kroner.

## Epic for under 40.000

For XC-entusiaster er Epic Comp nå priset til 39.990 kroner, ned fra 54.990 kroner. Med sin lette karbonramme og Brain-demping er dette et røverkjøp for konkurransesyklister.

## Begrenset beholdning

Specialized Norge advarer om at rabattene gjelder så langt lageret rekker. Enkelte størrelser og farger er allerede utsolgt hos flere forhandlere.

"Vi anbefaler alle som vurderer et kjøp å handle raskt," sier Specialized Norge i en pressemelding.
    `,
    image: "/placeholder.svg",
    publishedAt: "26. desember 2024",
    relatedProducts: [
      { name: "Specialized Stumpjumper", image: "/placeholder.svg", price: "48.990 kr", retailer: "Specialized", affiliateLink: "#" },
      { name: "Specialized Epic", image: "/placeholder.svg", price: "39.990 kr", retailer: "Specialized", affiliateLink: "#" },
      { name: "Specialized Rockhopper", image: "/placeholder.svg", price: "9.990 kr", retailer: "XXL", affiliateLink: "#" }
    ],
    relatedNews: ["trek-fuel-ex-2025", "canyon-oslo", "elsykkel-rekord"]
  },
  {
    id: "trysil-stier",
    title: "Nye stinettverk åpner i Trysil sommeren 2025",
    category: "Stinett",
    categoryColor: "bg-accent",
    excerpt: "Trysil investerer massivt i nye stinettverk for terrengsyklister. Tre nye traseer på totalt 45 kilometer åpner til sommeren, inkludert en spektakulær flow-trail fra toppen av Trysilfjellet.",
    content: `
Trysil forsterker sin posisjon som Norges ledende destinasjon for terrengsykling med en massiv investering i nye stier. Til sommeren 2025 åpner tre nye traseer som vil begeistre både nybegynnere og erfarne ryttere.

## Flow trail fra toppen

Hovedattraksjonen blir en 12 kilometer lang flow-trail som starter på toppen av Trysilfjellet og ender ved Turistsenter. Traséen får en høydeforskjell på over 700 meter og blir en av de lengste i Skandinavia.

"Vi har hentet inspirasjon fra de beste flow-trails i verden," forteller prosjektleder Erik Hansen. "Traséen vil ha perfekt profil gjennom hele strekningen med naturlige hopp og svinger."

## Teknisk sti for erfarne

For de som søker utfordringer, bygges en 8 kilometer lang teknisk sti med rotpartier, steinbroer og naturlige drops. Denne får en blå gradering med mulighet for å velge svarte seksjoner.

## Familievennlig løype

Den tredje nye traséen er en 25 kilometer lang grønn løype som går gjennom kulturlandskap og skog. Denne er perfekt for familier og nybegynnere som vil oppleve terrengsykling i trygge omgivelser.

## Investering på 15 millioner

Trysil kommune og Skistar har sammen investert 15 millioner kroner i prosjektet. I tillegg til stiene bygges det nytt serviceanlegg med sykkelvask, verktøy og ladestasjoner for el-sykler.

Åpningen er planlagt til 15. juni 2025.
    `,
    image: "/placeholder.svg",
    publishedAt: "23. desember 2024",
    relatedProducts: [
      { name: "Garmin Edge 840", image: "/placeholder.svg", price: "4.999 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "Camelbak MULE", image: "/placeholder.svg", price: "1.199 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "GoPro Hero 12", image: "/placeholder.svg", price: "4.499 kr", retailer: "Elkjøp", affiliateLink: "#" }
    ],
    relatedNews: ["trek-fuel-ex-2025", "varsesong-tips", "beste-stier-2024"]
  },
  {
    id: "enduro-test",
    title: "Test: Vi sammenlignet årets beste enduro-sykler",
    category: "Tester",
    categoryColor: "bg-primary",
    excerpt: "Vi har testet seks av årets mest ettertraktede enduro-sykler head-to-head. Fra budsjett til premium - her er våre konklusjoner etter tre intensive testuker.",
    content: `
Etter tre uker med intensiv testing i norsk terreng, har vi endelig konklusjonene klare. Vi sammenlignet seks av markedets heteste enduro-sykler for å finne ut hvilken som gir mest valuta for pengene.

## Testkandidatene

- Santa Cruz Megatower (94.990 kr)
- Specialized Enduro Expert (74.990 kr)
- Trek Slash 9.8 (84.990 kr)
- Canyon Strive CFR (54.990 kr)
- YT Capra Core 3 (44.990 kr)
- Norco Range C2 (64.990 kr)

## Nedkjøringsegenskaper

Her dominerte Santa Cruz Megatower med sin fantastiske stabilitet og grep. VPP-dempingen svelger alt terrenget kaster på deg, og sykkelen inspirerer til å presse grensene.

Trek Slash imponerte også med god balanse mellom fart og kontroll. Den føles litt mer leken enn Megatower, noe mange vil foretrekke.

## Klatreeffektivitet

Overraskende nok var det Canyon Strive som imponerte mest på klatring. Den innovative Shapeshifter-teknologien endrer geometrien på sekunder og gjør sykkelen til en effektiv klatremaskin.

## Beste kjøp

YT Capra Core 3 tar seieren som beste kjøp. For under 45.000 kroner får du en sykkel som henger med de dyreste på nedkjøringene. Komponentpakken er gjennomgående god, og rammen holder høy kvalitet.

## Vinner totalt

For de som kan strekke budsjettet, tar Santa Cruz Megatower totalseieren. Det er rett og slett den mest kapable enduro-sykkelen vi har testet, med en kjørefølelse som er i en klasse for seg.
    `,
    image: "/placeholder.svg",
    publishedAt: "20. desember 2024",
    relatedProducts: [
      { name: "Santa Cruz Megatower", image: "/placeholder.svg", price: "94.990 kr", retailer: "Santa Cruz", affiliateLink: "#" },
      { name: "YT Capra Core 3", image: "/placeholder.svg", price: "44.990 kr", retailer: "YT", affiliateLink: "#" },
      { name: "Canyon Strive CFR", image: "/placeholder.svg", price: "54.990 kr", retailer: "Canyon", affiliateLink: "#" }
    ],
    relatedNews: ["trek-fuel-ex-2025", "specialized-priskutt", "shimano-vs-sram"]
  },
  {
    id: "canyon-oslo",
    title: "Canyon åpner showroom i Oslo",
    category: "Industri",
    categoryColor: "bg-muted-foreground",
    excerpt: "Den tyske direktesalg-giganten Canyon åpner endelig fysisk showroom i Norge. Fra februar kan du prøvekjøre syklene før du bestiller online.",
    content: `
Canyon, kjent for sine direktesolgte sykler med konkurransedyktige priser, åpner endelig dørene til et fysisk showroom i Norge. Lokalet på Skøyen i Oslo blir det andre Canyon-showroomet i Skandinavia.

## Prøvekjør før du kjøper

Det nye showroomet vil ha et bredt utvalg av Canyons terrengsykler tilgjengelig for prøvekjøring. Du kan teste alt fra den lette XC-sykkelen Lux til enduro-beistet Strive.

"Mange har ønsket seg muligheten til å prøve syklene våre før kjøp," sier Canyon Norge. "Nå får de endelig sjansen."

## Komplett service

I tillegg til prøvekjøring vil showroomet tilby:
- Profesjonell bikefitting
- Service og reparasjon
- Reklamasjonshåndtering
- Reservedeler og tilbehør

## Priser uendret

Canyon lover at prisene forblir på samme nivå som ved direktekjøp fra nettsiden. Du betaler altså ikke ekstra for showroom-opplevelsen.

## Åpning i februar

Showroomet åpner 1. februar 2025. Det vil være åpent tirsdag til lørdag, med utvidede åpningstider i sommersesongen.
    `,
    image: "/placeholder.svg",
    publishedAt: "18. desember 2024",
    relatedProducts: [
      { name: "Canyon Spectral 125", image: "/placeholder.svg", price: "44.990 kr", retailer: "Canyon", affiliateLink: "#" },
      { name: "Canyon Strive CFR", image: "/placeholder.svg", price: "54.990 kr", retailer: "Canyon", affiliateLink: "#" },
      { name: "Canyon Neuron", image: "/placeholder.svg", price: "29.990 kr", retailer: "Canyon", affiliateLink: "#" }
    ],
    relatedNews: ["specialized-priskutt", "elsykkel-rekord", "trek-fuel-ex-2025"]
  },
  {
    id: "shimano-vs-sram",
    title: "Shimano vs SRAM - hvilken giring er best?",
    category: "Tester",
    categoryColor: "bg-primary",
    excerpt: "Vi har testet de nyeste toppmodellene fra begge produsentene for å avgjøre den evige debatten. Svaret er kanskje ikke så enkelt som du tror.",
    content: `
Shimano XTR mot SRAM XX Eagle - kampen om tronen som beste MTB-giring fortsetter. Vi har brukt begge systemene i et halvt år for å gi deg en grundig vurdering.

## Skiftekvalitet

Shimano XTR leverer som alltid silkemyke og presise skift. Den elektroniske Di2-versjonen er spesielt imponerende med lynraske og konsistente girskift uansett belastning.

SRAM XX Eagle AXS matcher Shimano på presisjon, men skiftene føles litt mer mekaniske. Noen foretrekker denne følelsen, andre liker Shimanos mykere karakter.

## Rekkevidde og gearing

Begge systemer tilbyr nå 12 gir med 520% rekkevidde. SRAM har 10-52t kassett som standard, mens Shimano tilbyr 10-51t. Forskjellen er minimal i praksis.

## Holdbarhet

Her har SRAM tradisjonelt hatt et forsprang, og det gjelder fortsatt. Eagle-systemet tåler mer mishandling før det krever justering. Shimano er mer følsom for skitt og slitasje.

## Ergonomi

SRAMs skiftehendler har en enklere design med én hendel for begge retninger. Shimano bruker to separate hendler. Dette er ren preferanse.

## Pris

Shimano XTR Di2 koster omtrent 15% mer enn SRAM XX Eagle AXS. For mekaniske versjoner er prisforskjellen minimal.

## Konklusjon

Det finnes ingen klar vinner. Shimano leverer den mest raffinerte skifteopplevelsen, mens SRAM tilbyr bedre holdbarhet og enklere ergonomi. Velg det som passer din kjørestil best.
    `,
    image: "/placeholder.svg",
    publishedAt: "15. desember 2024",
    relatedProducts: [
      { name: "Shimano XTR Di2", image: "/placeholder.svg", price: "14.999 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "SRAM XX Eagle AXS", image: "/placeholder.svg", price: "12.999 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "SRAM GX Eagle", image: "/placeholder.svg", price: "3.999 kr", retailer: "XXL", affiliateLink: "#" }
    ],
    relatedNews: ["enduro-test", "trek-fuel-ex-2025", "varsesong-tips"]
  },
  {
    id: "elsykkel-rekord",
    title: "Salgsrekord for el-terrengsykler i Norge",
    category: "Industri",
    categoryColor: "bg-muted-foreground",
    excerpt: "2024 ble nok et rekordår for el-terrengsykler i Norge. Salget økte med 35% sammenlignet med fjoråret, og trenden ser ut til å fortsette.",
    content: `
Norske syklister har for alvor fått øynene opp for el-terrengsykler. Bransjens salgstall viser en økning på 35% sammenlignet med 2023, og totalt ble det solgt over 15.000 el-MTB i Norge i år.

## Lettvektere dominerer

Den største veksten ser vi innen lettvekts el-terrengsykler med motorer under 60Nm. Disse syklene veier ofte under 18 kilo og gir en mer naturlig sykkelopplevelse enn tradisjonelle el-sykler.

Specialized Levo SL og Trek Fuel EXe er blant bestselgerne i dette segmentet.

## Bredere målgruppe

El-terrengsykler tiltrekker seg en bredere målgruppe enn tradisjonelle MTB-sykler. Gjennomsnittsalderen på kjøperne er 48 år - betydelig høyere enn for vanlige terrengsykler.

"Vi ser mange som kommer tilbake til sykling etter flere år," forteller en forhandler. "El-assistansen gjør det mulig å henge med på turer de ellers ikke ville klart."

## Prisutvikling

Gjennomsnittsprisen for el-terrengsykler solgt i Norge er 59.000 kroner - en nedgang på 8% fra i fjor. Økt konkurranse og bedre tilgang på komponenter har presset prisene ned.

## Fremtidsutsikter

Bransjen forventer fortsatt vekst i 2025. Nye modeller med enda lettere vekt og bedre batteriteknologi er på vei, og prisene forventes å synke ytterligere.
    `,
    image: "/placeholder.svg",
    publishedAt: "12. desember 2024",
    relatedProducts: [
      { name: "Specialized Levo SL", image: "/placeholder.svg", price: "89.990 kr", retailer: "Specialized", affiliateLink: "#" },
      { name: "Trek Fuel EXe", image: "/placeholder.svg", price: "79.990 kr", retailer: "Trek", affiliateLink: "#" },
      { name: "Canyon Neuron:ON", image: "/placeholder.svg", price: "54.990 kr", retailer: "Canyon", affiliateLink: "#" }
    ],
    relatedNews: ["canyon-oslo", "specialized-priskutt", "trek-fuel-ex-2025"]
  },
  {
    id: "varsesong-tips",
    title: "Slik forbereder du sykkelen til vårsesongen",
    category: "Tips",
    categoryColor: "bg-green-600",
    excerpt: "Våren nærmer seg, og det er på tide å gjøre sykkelen klar for en ny sesong på stiene. Her er ekspertenes tips for en grundig vårklargjøring.",
    content: `
Etter en lang vinter i garasjen trenger sykkelen din litt kjærlighet før den er klar for vårens stier. Her er en komplett guide til vårklargjøring.

## Grundig rengjøring

Start med en grundig vask. Bruk sykkelvaskemiddel og en myk børste for å fjerne all skitt og salt fra vinterlagringen. Vær spesielt nøye rundt lager og drivverk.

Tips: Unngå høytrykksspyler rundt lager og tetninger.

## Sjekk demperne

Demperne bør inspiseres for lekkasjer og slitasje. Rengjør stag og tetninger, og påfør ny smøring. Sjekk at lufttrykket er korrekt.

Hvis demperne har stått lenge, vurder en full service hos en fagmann.

## Drivverk

Kjeden er ofte det som trenger mest oppmerksomhet. Bruk en kjedemåler for å sjekke slitasje. En slitt kjede bør byttes før den skader kassett og kjedeblad.

Rengjør og smør hele drivverket, og juster girene om nødvendig.

## Bremser

Sjekk bremsebeleggene for slitasje. De fleste belegg har slitasjemerker som viser når de bør byttes. Kontroller også at skivene ikke er bøyd eller slitt.

Luft bremsene hvis hendelen føles svampete.

## Dekk og hjul

Inspiser dekkene for kutt, sprekker og slitasje. Sjekk at eikene er stramme og at hjulene er rette.

Fyll på tetningsmasse hvis du kjører tubeless - den kan ha tørket inn over vinteren.

## Boltesjekk

Gå gjennom alle bolter med en momentnøkkel. Spesielt viktig er bolter i stem, styre, krank og seteklemme.

## Testtur

Avslutt med en kort testtur i rolig terreng. Lytt etter unormale lyder og kjenn etter at alt fungerer som det skal.

God tur!
    `,
    image: "/placeholder.svg",
    publishedAt: "10. desember 2024",
    relatedProducts: [
      { name: "Muc-Off rengjøringssett", image: "/placeholder.svg", price: "599 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "Park Tool kjedemåler", image: "/placeholder.svg", price: "149 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "PRO moment-nøkkelsett", image: "/placeholder.svg", price: "799 kr", retailer: "XXL", affiliateLink: "#" }
    ],
    relatedNews: ["shimano-vs-sram", "trysil-stier", "enduro-test"]
  }
];

export const getNewsById = (id: string): NewsArticle | undefined => {
  return newsArticles.find(article => article.id === id);
};

export const getFeaturedNews = (): NewsArticle | undefined => {
  return newsArticles.find(article => article.isFeatured);
};

export const getRegularNews = (): NewsArticle[] => {
  return newsArticles.filter(article => !article.isFeatured);
};
