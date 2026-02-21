import { NewsArticle } from "./newsArticles";

export const newNewsArticles: NewsArticle[] = [
  {
    id: "fox-36-2025",
    title: "Fox lanserer ny 36-gaffel med GRIP X2-demping for 2025",
    category: "Produktnyheter",
    categoryColor: "bg-secondary",
    excerpt: "Fox har presentert sin oppdaterte 36-gaffel med ny GRIP X2-demperpatron. Ifølge produsenten gir den bedre småstøtsensitivitet.",
    content: `Fox Racing Shox har avslørt sin oppdaterte 36-gaffel for 2025 ifølge en pressemelding fra selskapet.

## Ny GRIP X2-demperpatron

Ifølge Fox er den største nyheten den oppdaterte GRIP X2-demperpatronen. Produsenten oppgir at den nye versjonen har fire uavhengige justeringer: høy- og lavhastighets kompresjon samt høy- og lavhastighets rebound.

## Lettere chassis

Fox oppgir at den nye 36-gaffelen er 80 gram lettere enn forgjengeren takket være optimalisert materialbruk i standrør og bro.

## Spesifikasjoner

Ifølge Fox sine spesifikasjoner:
- Vandring: 140-160mm
- Standrørsdiameter: 36mm
- Aksel: Kabolt 110x15mm
- Vekt: 1.780g (150mm modell)

## Pris og tilgjengelighet

Fox 36 Factory 2025 har en veiledende pris på 12.499 kroner ifølge produsenten. Gaffelen forventes i norske butikker fra februar 2025.

*Kilde: Fox Racing Shox pressemelding*`,
    image: "/placeholder.svg",
    publishedAt: "15. januar 2025",
    source: { name: "Fox Racing Shox pressemelding", url: "https://www.ridefox.com/" },
    relatedProducts: [
      { name: "Fox 36 Factory", image: "/placeholder.svg", price: "12.499 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "Fox 36 Performance", image: "/placeholder.svg", price: "8.999 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "Fox Float X2", image: "/placeholder.svg", price: "9.999 kr", retailer: "XXL", affiliateLink: "#" }
    ],
    relatedNews: ["trek-fuel-ex-2025", "shimano-vs-sram", "enduro-test"]
  },
  {
    id: "norco-range-2025",
    title: "Norco avduker nye Range C og Sight C for 2025",
    category: "Produktnyheter",
    categoryColor: "bg-secondary",
    excerpt: "Norco har presentert sine oppdaterte enduro- og stisykler for 2025. Ifølge produsenten har begge modellene fått helt ny geometri.",
    content: `Norco har avduket sine nye Range C og Sight C for 2025-sesongen ifølge en pressemelding fra den kanadiske produsenten.

## Range C – ny enduro-maskin

Ifølge Norco har Range C fått 170mm vandring foran og 165mm bak. Styrevinkelen er oppgitt til 63 grader – en av de slakkeste i klassen.

## Sight C – allsidig stisykkel

Sight C har ifølge spesifikasjonene 150mm vandring foran og 140mm bak. Produsenten oppgir at den nye modellen er designet for lange dager i variert terreng.

## Priser

Ifølge Norco starter Range C på 54.990 kr og Sight C på 44.990 kr for karbonversjonene.

*Kilde: Norco Bicycles pressemelding*`,
    image: "/placeholder.svg",
    publishedAt: "12. januar 2025",
    source: { name: "Norco Bicycles pressemelding", url: "https://www.norco.com/" },
    relatedProducts: [
      { name: "Norco Range C2", image: "/placeholder.svg", price: "54.990 kr", retailer: "Norco", affiliateLink: "#" },
      { name: "Norco Sight C2", image: "/placeholder.svg", price: "44.990 kr", retailer: "Norco", affiliateLink: "#" }
    ],
    relatedNews: ["trek-fuel-ex-2025", "enduro-test", "fox-36-2025"]
  },
  {
    id: "sram-eagle-transmission",
    title: "SRAM Eagle Transmission – ny standard for MTB-drivverk",
    category: "Produktnyheter",
    categoryColor: "bg-secondary",
    excerpt: "SRAM har lansert Eagle Transmission som ifølge produsenten eliminerer tradisjonell girwire og girstang.",
    content: `SRAM har lansert sitt nye Eagle Transmission-system ifølge en pressemelding fra selskapet.

## Ingen girwire

Ifølge SRAM er den største nyheten at systemet eliminerer tradisjonell girwire og girstang. Bakgiret monteres direkte på rammen via et UDH-feste.

## Bedre ytelse

SRAM oppgir at systemet gir 49% bedre kjedestabilitet og 42% lengre levetid på kassetten sammenlignet med forgjengeren.

## Tre nivåer

Ifølge SRAM tilbys systemet i tre nivåer:
- XX Eagle AXS T-Type (toppmodell)
- X0 Eagle AXS T-Type
- GX Eagle AXS T-Type

## Pris

GX Eagle AXS T-Type starter på 8.999 kr ifølge SRAM, mens toppmodellen XX koster 18.999 kr.

*Kilde: SRAM pressemelding*`,
    image: "/placeholder.svg",
    publishedAt: "10. januar 2025",
    source: { name: "SRAM pressemelding", url: "https://www.sram.com/" },
    relatedProducts: [
      { name: "SRAM XX Eagle AXS T-Type", image: "/placeholder.svg", price: "18.999 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "SRAM GX Eagle AXS T-Type", image: "/placeholder.svg", price: "8.999 kr", retailer: "XXL", affiliateLink: "#" }
    ],
    relatedNews: ["shimano-vs-sram", "trek-fuel-ex-2025", "enduro-test"]
  },
  {
    id: "nesbyen-bikepark-utvidelse",
    title: "Nesbyen bikepark utvider med fem nye traseer i 2025",
    category: "Stinett",
    categoryColor: "bg-accent",
    excerpt: "Nesbyen bikepark har annonsert en stor utvidelse med fem nye traseer. Ifølge pressemeldingen satses det på familievennlige løyper.",
    content: `Nesbyen bikepark har annonsert en betydelig utvidelse ifølge en pressemelding fra destinasjonen.

## Fem nye traseer

Ifølge Nesbyen bikepark blir det bygget fem nye traseer til sommeren 2025:
- To grønne nybegynnertraseer
- To blå mellomtraseer
- Én svart eksperttrasé

## Ny stolheis

Ifølge pressemeldingen installeres det en ny 6-seters stolheis som dobler kapasiteten.

## Investering

Nesbyen kommune og private investorer har sammen annonsert en investering på 25 millioner kroner ifølge offisiell informasjon.

Åpning er planlagt til 1. juni 2025 ifølge pressemeldingen.

*Kilde: Nesbyen bikepark pressemelding*`,
    image: "/placeholder.svg",
    publishedAt: "8. januar 2025",
    source: { name: "Nesbyen bikepark pressemelding", url: "https://www.nesbyen.com/" },
    relatedProducts: [
      { name: "Fox Proframe hjelm", image: "/placeholder.svg", price: "2.999 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "100% Accuri briller", image: "/placeholder.svg", price: "699 kr", retailer: "XXL", affiliateLink: "#" }
    ],
    relatedNews: ["trysil-stier", "trek-fuel-ex-2025", "elsykkel-rekord"]
  },
  {
    id: "rockshox-zeb-ultimate-2025",
    title: "RockShox oppdaterer ZEB Ultimate med Charger 3.1 RC2",
    category: "Produktnyheter",
    categoryColor: "bg-secondary",
    excerpt: "RockShox har presentert sin oppdaterte ZEB Ultimate-gaffel med ny Charger 3.1 RC2-demper. Ifølge SRAM gir den forbedret kontroll.",
    content: `RockShox har avslørt en oppdatert versjon av sin populære ZEB Ultimate-gaffel ifølge en pressemelding fra SRAM.

## Charger 3.1 RC2

Ifølge RockShox er den nye Charger 3.1 RC2-demperpatronen den største oppgraderingen. Den har fire-veis justering for optimal kontroll.

## ButterCups

ZEB Ultimate beholder ButterCups-teknologien som ifølge RockShox reduserer vibrasjoner med opptil 15%.

## Spesifikasjoner

Ifølge produsentens spesifikasjoner:
- Vandring: 150-190mm
- Standrørsdiameter: 38mm
- Vekt: 2.100g (170mm modell)

## Pris

Veiledende pris er 10.999 kr ifølge SRAM.

*Kilde: SRAM/RockShox pressemelding*`,
    image: "/placeholder.svg",
    publishedAt: "5. januar 2025",
    source: { name: "SRAM/RockShox pressemelding", url: "https://www.sram.com/rockshox" },
    relatedProducts: [
      { name: "RockShox ZEB Ultimate", image: "/placeholder.svg", price: "10.999 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "RockShox Lyrik Ultimate", image: "/placeholder.svg", price: "9.499 kr", retailer: "XXL", affiliateLink: "#" }
    ],
    relatedNews: ["fox-36-2025", "enduro-test", "sram-eagle-transmission"]
  },
  {
    id: "scott-spark-2025",
    title: "Scott avduker ny Spark med TwinLoc-fjerning",
    category: "Produktnyheter",
    categoryColor: "bg-secondary",
    excerpt: "Scott har presentert sin nye Spark for 2025. Ifølge produsenten er den ikoniske TwinLoc-spaken fjernet til fordel for et nytt dempersystem.",
    content: `Scott har avslørt sin nye Spark for 2025-sesongen ifølge en pressemelding fra den sveitsiske produsenten.

## Farvel til TwinLoc

Den største nyheten er ifølge Scott at den ikoniske TwinLoc-fjernkontrollspaken er borte. I stedet bruker den nye Spark en ny plattformdemper som automatisk justerer seg etter terrenget.

## Ny geometri

Ifølge Scott sine spesifikasjoner har den nye Spark fått:
- Styrevinkel: 66 grader
- Vandring: 120mm foran og bak
- Lengre reach på alle størrelser

## Pris

Scott Spark RC Comp starter på 39.990 kr ifølge produsenten. Toppmodellen Spark RC SL koster 119.990 kr.

*Kilde: Scott Sports pressemelding*`,
    image: "/placeholder.svg",
    publishedAt: "3. januar 2025",
    source: { name: "Scott Sports pressemelding", url: "https://www.scott-sports.com/" },
    relatedProducts: [
      { name: "Scott Spark RC Comp", image: "/placeholder.svg", price: "39.990 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "Scott Scale 970", image: "/placeholder.svg", price: "12.990 kr", retailer: "XXL", affiliateLink: "#" }
    ],
    relatedNews: ["trek-fuel-ex-2025", "specialized-priskutt", "enduro-test"]
  },
  {
    id: "mtb-forsikring-tips",
    title: "Slik forsikrer du terrengsykkelen din – bransjeråd",
    category: "Tips",
    categoryColor: "bg-green-600",
    excerpt: "MTB Test Norge har samlet informasjon fra forsikringsselskaper om dekning av terrengsykler. Her er det du bør vite.",
    content: `MTB Test Norge har samlet informasjon fra flere norske forsikringsselskaper om dekning av terrengsykler.

## Innboforsikring

Ifølge de fleste forsikringsselskaper dekkes sykkelen av innboforsikringen, men med begrensninger:
- Maksbeløp varierer fra 30.000 til 80.000 kr avhengig av selskap
- Egenandel er typisk 3.000-6.000 kr

## Separat sykkelforsikring

Flere forsikringsselskaper tilbyr nå separat sykkelforsikring ifølge bransjeinformasjon:
- Dekker tyveriskader opptil full verdi
- Dekker uhellsskader (velting, krasj)
- Noen dekker også slitasje og mekanisk svikt

## Tips fra bransjen

- Registrer sykkelen med rammenummer
- Ta bilder og ta vare på kvittering
- Bruk godkjent lås (FG-godkjent)
- Meld tyveri til politiet innen 24 timer

*Kilde: Diverse forsikringsselskaper og bransjeorganisasjoner*`,
    image: "/placeholder.svg",
    publishedAt: "1. januar 2025",
    source: { name: "Diverse forsikringsselskaper", url: "https://mtbtest.no/guider" },
    relatedProducts: [
      { name: "Abus Granit X-Plus lås", image: "/placeholder.svg", price: "1.299 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "Kryptonite Evolution lås", image: "/placeholder.svg", price: "899 kr", retailer: "XXL", affiliateLink: "#" }
    ],
    relatedNews: ["varsesong-tips", "elsykkel-rekord", "specialized-priskutt"]
  },
  {
    id: "shimano-deore-xt-2025",
    title: "Shimano oppdaterer Deore XT M8200 for 2025",
    category: "Produktnyheter",
    categoryColor: "bg-secondary",
    excerpt: "Shimano har presentert sin oppdaterte Deore XT-gruppe. Ifølge produsenten er den nye gruppen lettere og har forbedret girpresisjon.",
    content: `Shimano har avslørt sin oppdaterte Deore XT M8200-gruppe ifølge en pressemelding.

## Lettere komponenter

Ifølge Shimano er den nye XT-gruppen 5% lettere enn forgjengeren. Bakgiret veier nå 254g ifølge spesifikasjonene.

## Hyperglide+

Shimano oppgir at den nye gruppen bruker oppdatert Hyperglide+-teknologi for raskere og mer presise girskift under belastning.

## Ny bremsecaliper

XT M8200-bremsene har ifølge Shimano fått nye bremsecalipere med bedre varmeavledning. Produsenten oppgir 10% bedre bremsekraft.

## Pris

Komplett XT M8200-gruppe koster ifølge Shimano ca. 8.500 kr. Bremser selges separat fra 1.899 kr per sett.

*Kilde: Shimano pressemelding*`,
    image: "/placeholder.svg",
    publishedAt: "28. desember 2024",
    source: { name: "Shimano pressemelding", url: "https://bike.shimano.com/" },
    relatedProducts: [
      { name: "Shimano XT M8200 gruppe", image: "/placeholder.svg", price: "8.500 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "Shimano XT bremser", image: "/placeholder.svg", price: "1.899 kr", retailer: "XXL", affiliateLink: "#" }
    ],
    relatedNews: ["shimano-vs-sram", "sram-eagle-transmission", "trek-fuel-ex-2025"]
  },
  {
    id: "mtb-sesongstart-2025",
    title: "Sesongstart MTB 2025: Disse arrangementene bør du få med deg",
    category: "Stinett",
    categoryColor: "bg-accent",
    excerpt: "MTB Test Norge har samlet oversikt over MTB-arrangementer våren 2025. Fra enduroritt til familievennlige festivaler.",
    content: `MTB Test Norge har samlet informasjon om planlagte MTB-arrangementer våren 2025 basert på arrangørenes nettsider.

## Mars

### Oslo Enduro sesongåpning
Ifølge arrangøren: Sesongåpning i Oslomarka med 3 spesialstrekk. Alle nivåer velkommen.
- Dato: 15. mars 2025
- Sted: Tryvann, Oslo

## April

### Bergen MTB Festival
Ifølge arrangøren: Helgefestival med ritt, klinikker og utstillere.
- Dato: 12-13. april 2025
- Sted: Fløyen, Bergen

### Trondheim Stifestival
Ifølge arrangøren: Guidede turer i Bymarka med fokus på nybegynnere.
- Dato: 26. april 2025
- Sted: Bymarka, Trondheim

## Mai

### Hafjell åpning
Ifølge Hafjell: Sesongåpning med gratis heiskort første helg.
- Dato: 17-18. mai 2025
- Sted: Hafjell bikepark

### TransOslo
Ifølge arrangøren: Stafettritt gjennom Oslo fra nord til sør.
- Dato: 31. mai 2025
- Sted: Oslo

*Kilde: Arrangørenes nettsider og sosiale medier*`,
    image: "/placeholder.svg",
    publishedAt: "25. desember 2024",
    source: { name: "Diverse arrangører", url: "https://mtbtest.no/nyheter" },
    relatedProducts: [
      { name: "Garmin Edge 840", image: "/placeholder.svg", price: "4.999 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "GoPro Hero 12", image: "/placeholder.svg", price: "4.499 kr", retailer: "Elkjøp", affiliateLink: "#" }
    ],
    relatedNews: ["trysil-stier", "nesbyen-bikepark-utvidelse", "elsykkel-rekord"]
  },
  {
    id: "e-mtb-lettvekt-test",
    title: "Lettvekts el-terrengsykler: Spesifikasjonssammenligning 2025",
    category: "Sammenligninger",
    categoryColor: "bg-primary",
    excerpt: "MTB Test Norge har sammenstilt spesifikasjoner fra fire populære lettvekts el-terrengsykler. Her er den tekniske oversikten.",
    content: `MTB Test Norge har samlet tekniske spesifikasjoner fra produsenter for å gi en oversikt over lettvekts el-terrengsykler.

## Syklene i sammenligningen

Basert på produsentdata:
- Specialized Levo SL 2025 (89.990 kr)
- Trek Fuel EXe 2025 (79.990 kr)
- Orbea Rise M-Team 2025 (84.990 kr)
- Scott Lumen eRide 2025 (74.990 kr)

## Motor og batteri

Ifølge spesifikasjonene bruker samtlige sykler motorer under 60Nm:
- Specialized SL 1.2: 35Nm, 320Wh
- Trek TQ HPR50: 50Nm, 360Wh
- Shimano EP801 RS (Orbea): 60Nm, 360Wh
- TQ HPR50 (Scott): 50Nm, 360Wh

## Vekt

Letteste modell ifølge produsent er Specialized Levo SL på 16,8 kg. Tyngste er Scott Lumen eRide på 17,9 kg.

## Prissammenligning

Scott Lumen eRide er billigst med 74.990 kr, mens Specialized Levo SL er dyrest med 89.990 kr ifølge veiledende priser.

*Merk: Basert på produsentenes oppgitte spesifikasjoner.*`,
    image: "/placeholder.svg",
    publishedAt: "22. desember 2024",
    source: { name: "Produsentenes offisielle spesifikasjoner", url: "https://mtbtest.no/sammenligninger" },
    relatedProducts: [
      { name: "Specialized Levo SL", image: "/placeholder.svg", price: "89.990 kr", retailer: "Specialized", affiliateLink: "#" },
      { name: "Trek Fuel EXe", image: "/placeholder.svg", price: "79.990 kr", retailer: "Trek", affiliateLink: "#" }
    ],
    relatedNews: ["elsykkel-rekord", "trek-fuel-ex-2025", "specialized-priskutt"]
  },
  {
    id: "dekkguide-sesong",
    title: "Valg av MTB-dekk etter sesong: Bransjeråd og anbefalinger",
    category: "Tips",
    categoryColor: "bg-green-600",
    excerpt: "MTB Test Norge har samlet anbefalinger fra dekkprodusenter om valg av dekk for ulike sesonger og forhold i Norge.",
    content: `MTB Test Norge har samlet generelle anbefalinger fra dekkprodusenter om valg av terrengsykkeldekk.

## Vår og høst (vått terreng)

Ifølge produsenter som Maxxis og Schwalbe anbefales:
- Myk gummiblanding for grep i vått
- Aggressive knotter for gjørme
- Bredere dekk (2.4"-2.6") for økt kontaktflate

Populære valg: Maxxis Minion DHF 3C MaxxGrip, Schwalbe Magic Mary Soft

## Sommer (tørt terreng)

Bransjen anbefaler:
- Fastere gummiblanding for lavere rullemotstand
- Smalere dekk (2.3"-2.5") for hastighet
- Semi-knottede dekk for balanse mellom grep og fart

Populære valg: Maxxis Dissector EXO+, Schwalbe Nobby Nic

## Tubeless vs slange

De fleste produsenter anbefaler tubeless-oppsett for terrengsykling:
- Lavere lufttrykk for bedre grep
- Selvtettende ved små punkteringer
- Lavere vekt

## Lufttrykk

Ifølge bransjen er typisk lufttrykk:
- Foran: 1.5-1.8 bar (lettere ryttere lavere)
- Bak: 1.7-2.0 bar
- Juster etter vekt, terreng og personlig preferanse

*Kilde: Maxxis, Schwalbe og Continental produktinformasjon*`,
    image: "/placeholder.svg",
    publishedAt: "18. desember 2024",
    source: { name: "Diverse dekkprodusenter", url: "https://mtbtest.no/guider" },
    relatedProducts: [
      { name: "Maxxis Minion DHF 3C", image: "/placeholder.svg", price: "749 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "Schwalbe Magic Mary", image: "/placeholder.svg", price: "699 kr", retailer: "XXL", affiliateLink: "#" }
    ],
    relatedNews: ["varsesong-tips", "enduro-test", "shimano-vs-sram"]
  },
  {
    id: "mtb-trening-vinter",
    title: "Holde MTB-formen om vinteren: Treningsråd fra bransjen",
    category: "Tips",
    categoryColor: "bg-green-600",
    excerpt: "MTB Test Norge har samlet treningsråd fra sykkelcoacher og bransjeeksperter for å holde formen gjennom vinteren.",
    content: `MTB Test Norge har samlet generelle treningsanbefalinger for terrengsyklister om vinteren.

## Innendørs sykling

Ifølge treningseksperter er innendørs sykling på rulle den mest effektive måten å vedlikeholde sykkelform om vinteren:
- 2-3 økter per uke er tilstrekkelig
- Fokuser på intervaller og terskeljobbing
- Bruk plattformer som Zwift eller TrainerRoad

## Styrketrening

Bransjen anbefaler styrketrening 2 ganger per uke:
- Knebøy for beinstyrke
- Markløft for rygg og hamstrings
- Planke for kjernemuskulatur
- Armhevinger for overkropp

## Alternativ trening

For variasjon anbefales:
- Langrenn (utmerket kondisjonstrening)
- Løping (bygger aerob kapasitet)
- Fatbike (sykling på snø)

## Teknisk trening

Tips fra coacher:
- Se terrengsykling-videoer for å studere teknikk
- Øv balanse innendørs
- Planlegg neste sesong og sett mål

*Kilde: Diverse sykkelcoacher og treningseksperter*`,
    image: "/placeholder.svg",
    publishedAt: "14. desember 2024",
    source: { name: "Diverse sykkelcoacher", url: "https://mtbtest.no/guider" },
    relatedProducts: [
      { name: "Wahoo KICKR Core", image: "/placeholder.svg", price: "7.999 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "Garmin HRM-Pro Plus", image: "/placeholder.svg", price: "1.299 kr", retailer: "XXL", affiliateLink: "#" }
    ],
    relatedNews: ["varsesong-tips", "elsykkel-rekord", "mtb-forsikring-tips"]
  },
  {
    id: "giant-trance-x-2025",
    title: "Giant lanserer Trance X Advanced 2025 med Maestro-oppdatering",
    category: "Produktnyheter",
    categoryColor: "bg-secondary",
    excerpt: "Giant har presentert sin nye Trance X Advanced for 2025. Ifølge produsenten har den fått oppdatert Maestro-demping med 140mm vandring.",
    content: `Giant har avslørt sin nye Trance X Advanced for 2025-sesongen ifølge en pressemelding.

## Oppdatert Maestro

Ifølge Giant har den nye Trance X fått oppdatert Maestro-dempersystem med forbedret anti-squat og bedre småstøtsensitivitet.

## Ny geometri

Giant oppgir følgende geometri:
- Styrevinkel: 65 grader
- Setevinkel: 77,5 grader
- Vandring: 140mm foran og bak
- Reach (L): 475mm

## Integrert rammedesign

Ifølge Giant har rammen fått integrert kabelføring og plass til vannflaske i hovedtrekanten på alle størrelser.

## Pris

Trance X Advanced 2 starter på 44.990 kr ifølge Giant. Pro-versjonen koster 89.990 kr.

*Kilde: Giant Bicycles pressemelding*`,
    image: "/placeholder.svg",
    publishedAt: "11. desember 2024",
    source: { name: "Giant Bicycles pressemelding", url: "https://www.giant-bicycles.com/" },
    relatedProducts: [
      { name: "Giant Trance X Advanced 2", image: "/placeholder.svg", price: "44.990 kr", retailer: "Giant", affiliateLink: "#" }
    ],
    relatedNews: ["trek-fuel-ex-2025", "norco-range-2025", "enduro-test"]
  },
  {
    id: "stisykling-allemannsrett",
    title: "Stisykling og allemannsretten: Hva sier regelverket?",
    category: "Tips",
    categoryColor: "bg-green-600",
    excerpt: "MTB Test Norge har samlet informasjon om regelverket for stisykling i norsk utmark basert på offentlige kilder.",
    content: `MTB Test Norge har samlet informasjon fra offentlige kilder om regelverket for sykling i utmark i Norge.

## Allemannsretten

Ifølge friluftsloven har alle rett til å ferdes i utmark, inkludert på sykkel. Men det er noen viktige begrensninger:

## Lovverket

Ifølge friluftsloven § 2:
- Ferdselen skal skje hensynsfullt og med tilbørlig varsomhet
- Man skal ikke etterlate seg spor som kan skade naturen

## Spesielle regler

Ifølge Miljødirektoratet gjelder noen spesielle regler for sykling:
- I nasjonalparker kan det være egne regler
- Noen kommuner har lokale bestemmelser
- Merka og skilta stier kan ha sykelforbud

## Stietikette

Bransjeorganisasjoner anbefaler:
- Vis hensyn til fotgjengere og andre brukere
- Bremse kontrollert – unngå bremsespor
- Hold deg på stien
- Ikke sykkel i våt myr eller sårbar natur
- Hilse og gi plass til andre

## Organisert stibygging

Ifølge NOTS (Norsk Organisasjon for Terrengsykling) må organisert stibygging godkjennes av grunneier og kommune.

*Kilde: Friluftsloven, Miljødirektoratet og NOTS*`,
    image: "/placeholder.svg",
    publishedAt: "8. desember 2024",
    source: { name: "Friluftsloven og Miljødirektoratet", url: "https://lovdata.no/dokument/NL/lov/1957-06-28-16" },
    relatedProducts: [
      { name: "Camelbak MULE", image: "/placeholder.svg", price: "1.199 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "Garmin Edge 840", image: "/placeholder.svg", price: "4.999 kr", retailer: "XXL", affiliateLink: "#" }
    ],
    relatedNews: ["trysil-stier", "nesbyen-bikepark-utvidelse", "mtb-sesongstart-2025"]
  },
  {
    id: "maxxis-nye-dekk-2025",
    title: "Maxxis lanserer tre nye dekkmodeller for stisykling 2025",
    category: "Produktnyheter",
    categoryColor: "bg-secondary",
    excerpt: "Maxxis har presentert tre nye dekkmodeller optimalisert for stisykling. Ifølge produsenten fyller de hull i sortimentet.",
    content: `Maxxis har lansert tre nye dekkmodeller for terrengsykling ifølge en pressemelding fra selskapet.

## Maxxis Rekon Race

Ifølge Maxxis er Rekon Race et nytt rask-rullende dekk for tørre forhold:
- Vekt: 720g (29x2.4")
- Gummiblanding: Dual Compound
- Beregnet for bakhjul i tørre forhold

## Maxxis Forekaster

Maxxis oppgir at Forekaster er et mellomting mellom Minion DHF og Dissector:
- Vekt: 890g (29x2.6")
- Gummiblanding: 3C MaxxTerra
- Allsidig allround-dekk

## Maxxis Shorty Gen 2

Ifølge Maxxis er den nye Shorty redesignet for vått og gjørmete terreng:
- Vekt: 1.050g (29x2.4")
- Gummiblanding: 3C MaxxGrip
- Aggressive knotter for maksimalt grep

## Priser

Alle tre modellene har veiledende pris fra 649 kr ifølge Maxxis.

*Kilde: Maxxis pressemelding*`,
    image: "/placeholder.svg",
    publishedAt: "5. desember 2024",
    source: { name: "Maxxis pressemelding", url: "https://www.maxxis.com/" },
    relatedProducts: [
      { name: "Maxxis Minion DHF 3C", image: "/placeholder.svg", price: "749 kr", retailer: "XXL", affiliateLink: "#" },
      { name: "Maxxis Dissector EXO+", image: "/placeholder.svg", price: "699 kr", retailer: "XXL", affiliateLink: "#" }
    ],
    relatedNews: ["dekkguide-sesong", "enduro-test", "trek-fuel-ex-2025"]
  }
];
