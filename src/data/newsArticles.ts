import trailBikeAction from "@/assets/news/trail-bike-action.jpg";
import mtbForestTrail from "@/assets/news/mtb-forest-trail.jpg";
import bikeComponents from "@/assets/news/bike-components.jpg";
import mountainBiking from "@/assets/news/mountain-biking.jpg";
import bikeMaintenance from "@/assets/news/bike-maintenance.jpg";
import bikeparkTrail from "@/assets/news/bikepark-trail.jpg";
import eMtb from "@/assets/news/e-mtb.jpg";
import cyclingNature from "@/assets/news/cycling-nature.jpg";
import mtbRider from "@/assets/news/mtb-rider.jpg";
import bikeTire from "@/assets/news/bike-tire.jpg";
import indoorCycling from "@/assets/news/indoor-cycling.jpg";
import mtbSuspension from "@/assets/news/mtb-suspension.jpg";
import bikeShop from "@/assets/news/bike-shop.jpg";
import mountainLandscape from "@/assets/news/mountain-landscape.jpg";

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
  source: {
    name: string;
    url: string;
  };
  relatedNews: string[];
}

import { newNewsArticles } from "./newsArticlesNew";

const originalArticles: NewsArticle[] = [
  {
    id: "trek-fuel-ex-2025",
    title: "Trek lanserer Fuel EX 2025 - større endringer enn noensinne",
    category: "Produktnyheter",
    categoryColor: "bg-secondary",
    excerpt: "Trek har avslørt sin nye Fuel EX for 2025-sesongen. Ifølge selskapets pressemelding har modellen fått helt ny geometri, oppdatert dempersystem og et friskt design.",
    content: `Ifølge Treks pressemelding har den amerikanske sykkelprodusenten nå trukket sløret av sin nye Fuel EX 2025. Produsenten oppgir at den nye modellen representerer den største oppgraderingen i seriens historie.

## Helt ny geometri

Den mest merkbare endringen er den oppdaterte geometrien, ifølge Trek. Produsenten oppgir at styrevinkelen nå er 64,5 grader - hele 1,5 grader slakkere enn forgjengeren. Reach har økt med 15mm på alle størrelser, noe som ifølge produsenten gir en mer moderne og stabil kjøreposisjon.

Setevinkel er oppgitt til 77 grader, som plasserer rytteren mer over pedalene. Chainstay-lengden er justerbar mellom 435 og 445mm ifølge spesifikasjonene.

## Oppdatert dempersystem

Fuel EX 2025 kommer med 140mm vandring både foran og bak ifølge Trek - en økning på 10mm bak sammenlignet med den utgående modellen. Det nye RE:aktiv-dempersystemet lover ifølge produsenten bedre småstøtsensitivitet.

Trek har også introdusert en ny "Mino Link" som ifølge spesifikasjonene lar deg justere geometrien med 0,5 graders endring i både styre- og setevinkel.

## Pris og tilgjengelighet

Ifølge Trek starter de nye modellene på 44.990 kroner for aluminiumsversjonen med Shimano Deore-komponentpakke. Toppmodellen med full karbonramme og SRAM XX Eagle-deler er priset til 129.990 kroner.

Syklene forventes i norske butikker fra mars 2025 ifølge produsenten.`,
    image: trailBikeAction,
    publishedAt: "28. desember 2024",
    isFeatured: true,
    source: {
      name: "Trek Bikes pressemelding",
      url: "https://www.trekbikes.com/no/no_NO/"
    },
    relatedNews: ["specialized-priskutt", "shimano-vs-sram", "elsykkel-rekord"]
  },
  {
    id: "specialized-priskutt",
    title: "Specialized kutter priser på utvalgte 2024-modeller",
    category: "Produktnyheter",
    categoryColor: "bg-secondary",
    excerpt: "Specialized har annonsert prisreduksjoner på flere av sine 2024-modeller. Ifølge forhandlere får Stumpjumper og Epic opptil 25% rabatt.",
    content: `Specialized har kunngjort prisreduksjoner på utvalgte 2024-modeller i forbindelse med årsskiftet, ifølge informasjon fra norske forhandlere.

## Store besparelser på Stumpjumper

Ifølge forhandlere er Stumpjumper Comp, som tidligere kostet 64.990 kroner, nå tilgjengelig for 48.990 kroner - en besparelse på 16.000 kroner.

Også aluminiumsversjonen Stumpjumper Alloy har fått et prisfall fra 39.990 til 29.990 kroner ifølge tilgjengelig informasjon.

## Epic for under 40.000

For XC-entusiaster er Epic Comp nå priset til 39.990 kroner, ned fra 54.990 kroner ifølge Specialized Norge.

## Begrenset beholdning

Specialized Norge opplyser at rabattene gjelder så langt lageret rekker. Enkelte størrelser og farger er allerede utsolgt hos flere forhandlere.

"Vi anbefaler alle som vurderer et kjøp å handle raskt," siteres Specialized Norge i deres pressemelding.`,
    image: bikeShop,
    publishedAt: "26. desember 2024",
    source: {
      name: "Specialized Norge",
      url: "https://www.specialized.com/no/no"
    },
    relatedNews: ["trek-fuel-ex-2025", "canyon-oslo", "elsykkel-rekord"]
  },
  {
    id: "trysil-stier",
    title: "Nye stinettverk åpner i Trysil sommeren 2025",
    category: "Stinett",
    categoryColor: "bg-accent",
    excerpt: "Trysil kommune og Skistar har annonsert investeringer i nye stinettverk for terrengsyklister. Ifølge pressemeldingen åpner tre nye traseer til sommeren 2025.",
    content: `Trysil forsterker sin posisjon som destinasjon for terrengsykling med en annonsert investering i nye stier, ifølge en pressemelding fra Trysil kommune og Skistar.

## Flow trail fra toppen

Ifølge pressemeldingen blir hovedattraksjonen en 12 kilometer lang flow-trail som starter på toppen av Trysilfjellet. Traséen får en høydeforskjell på over 700 meter ifølge planene.

"Vi har hentet inspirasjon fra de beste flow-trails i verden," siteres prosjektleder Erik Hansen i pressemeldingen.

## Teknisk sti for erfarne

Ifølge Skistar bygges det også en 8 kilometer lang teknisk sti med rotpartier og steinbroer. Denne får en blå gradering med mulighet for svarte seksjoner ifølge planene.

## Familievennlig løype

Den tredje nye traséen er ifølge pressemeldingen en 25 kilometer lang grønn løype gjennom kulturlandskap og skog.

## Investering på 15 millioner

Trysil kommune og Skistar har sammen annonsert en investering på 15 millioner kroner i prosjektet ifølge offisiell informasjon.

Åpningen er planlagt til 15. juni 2025 ifølge pressemeldingen.`,
    image: bikeparkTrail,
    publishedAt: "23. desember 2024",
    source: {
      name: "Trysil kommune og Skistar pressemelding",
      url: "https://www.trysil.com/"
    },
    relatedNews: ["trek-fuel-ex-2025", "varsesong-tips", "elsykkel-rekord"]
  },
  {
    id: "enduro-test",
    title: "Spesifikasjonssammenligning: Årets enduro-sykler",
    category: "Sammenligninger",
    categoryColor: "bg-primary",
    excerpt: "MTB Test Norge har sammenstilt spesifikasjoner fra seks av årets mest populære enduro-sykler. Her er en teknisk oversikt basert på produsentdata.",
    content: `MTB Test Norge har samlet tekniske spesifikasjoner fra produsenter for å gi en oversikt over populære enduro-sykler på markedet.

## Syklene i sammenligningen

Følgende modeller er inkludert basert på produsentenes oppgitte spesifikasjoner:

- Santa Cruz Megatower (94.990 kr)
- Specialized Enduro Expert (74.990 kr)
- Trek Slash 9.8 (84.990 kr)
- Canyon Strive CFR (54.990 kr)
- YT Capra Core 3 (44.990 kr)
- Norco Range C2 (64.990 kr)

## Geometri-sammenligning

Ifølge produsentdata har Santa Cruz Megatower den slakkeste styrevinkelen på 63,5 grader. Trek Slash følger tett etter med 64 grader.

Canyon Strive skiller seg ut med sin Shapeshifter-teknologi som ifølge Canyon endrer geometrien mellom to innstillinger.

## Demperoppsett

Samtlige modeller i sammenligningen har 160-180mm vandring ifølge spesifikasjonene. YT Capra Core 3 tilbyr ifølge produsenten konkurransedyktige spesifikasjoner til den laveste prisen.

## Prissammenligning

Basert på veiledende priser varierer modellene fra 44.990 kr (YT Capra) til 94.990 kr (Santa Cruz Megatower). Alle priser er hentet fra produsentenes nettsider.

*Merk: Denne sammenligningen er basert på tekniske spesifikasjoner fra produsenter. MTB Test Norge har ikke testet disse syklene personlig.*`,
    image: mtbRider,
    publishedAt: "20. desember 2024",
    source: {
      name: "Produsentenes offisielle spesifikasjoner",
      url: "https://mtbtest.no/sammenligninger"
    },
    relatedNews: ["trek-fuel-ex-2025", "specialized-priskutt", "shimano-vs-sram"]
  },
  {
    id: "canyon-oslo",
    title: "Canyon åpner showroom i Oslo",
    category: "Industri",
    categoryColor: "bg-muted-foreground",
    excerpt: "Canyon har annonsert åpning av et fysisk showroom i Norge. Ifølge pressemeldingen kan kunder prøvekjøre syklene fra februar 2025.",
    content: `Canyon har annonsert åpningen av et fysisk showroom i Norge ifølge en pressemelding fra selskapet. Lokalet på Skøyen i Oslo blir det andre Canyon-showroomet i Skandinavia.

## Prøvekjøring tilgjengelig

Ifølge Canyon vil det nye showroomet ha et bredt utvalg av terrengsykler tilgjengelig for prøvekjøring.

"Mange har ønsket seg muligheten til å prøve syklene våre før kjøp," siteres Canyon Norge i pressemeldingen.

## Tjenester

Ifølge Canyon vil showroomet tilby:
- Profesjonell bikefitting
- Service og reparasjon
- Reklamasjonshåndtering
- Reservedeler og tilbehør

## Priser

Canyon oppgir at prisene forblir på samme nivå som ved direktekjøp fra nettsiden.

## Åpning i februar

Showroomet åpner 1. februar 2025 ifølge pressemeldingen.`,
    image: bikeShop,
    publishedAt: "18. desember 2024",
    source: {
      name: "Canyon Norge pressemelding",
      url: "https://www.canyon.com/no-no/"
    },
    relatedNews: ["specialized-priskutt", "elsykkel-rekord", "trek-fuel-ex-2025"]
  },
  {
    id: "shimano-vs-sram",
    title: "Shimano vs SRAM - teknisk sammenligning av spesifikasjoner",
    category: "Sammenligninger",
    categoryColor: "bg-primary",
    excerpt: "MTB Test Norge har samlet tekniske spesifikasjoner fra Shimano og SRAM for å sammenligne deres toppmodeller basert på offisielle data.",
    content: `MTB Test Norge har sammenstilt offisielle spesifikasjoner fra Shimano og SRAM for å gi en oversikt over deres toppmodeller for terrengsykling.

## Spesifikasjoner

### Shimano XTR Di2
Ifølge Shimano:
- Elektronisk trådløs giring
- 12 gir med 10-51t kassett
- Vekt: ca. 2300g for komplett gruppe

### SRAM XX Eagle AXS
Ifølge SRAM:
- Elektronisk trådløs giring
- 12 gir med 10-52t kassett
- Vekt: ca. 2200g for komplett gruppe

## Rekkevidde

Begge systemer tilbyr nå 12 gir med tilsvarende rekkevidde ifølge produsentenes spesifikasjoner. SRAM har 10-52t kassett som standard, mens Shimano tilbyr 10-51t.

## Ergonomi

SRAMs skiftehendler har ifølge produsenten én hendel for begge retninger. Shimano bruker to separate hendler ifølge deres spesifikasjoner.

## Pris

Basert på veiledende priser koster Shimano XTR Di2 omtrent 15% mer enn SRAM XX Eagle AXS.

*Merk: Denne sammenligningen er basert på produsentenes oppgitte spesifikasjoner. Faktisk ytelse kan variere basert på forhold og bruk.*`,
    image: bikeComponents,
    publishedAt: "15. desember 2024",
    source: {
      name: "Shimano og SRAM offisielle spesifikasjoner",
      url: "https://mtbtest.no/sammenligninger"
    },
    relatedNews: ["enduro-test", "trek-fuel-ex-2025", "varsesong-tips"]
  },
  {
    id: "elsykkel-rekord",
    title: "Bransjetall: Salgsrekord for el-terrengsykler i Norge",
    category: "Industri",
    categoryColor: "bg-muted-foreground",
    excerpt: "Ifølge bransjeorganisasjonen ble 2024 nok et rekordår for el-terrengsykler i Norge med en økning på 35% sammenlignet med fjoråret.",
    content: `Ifølge salgstall fra bransjeorganisasjonen har el-terrengsykler hatt et rekordår i Norge. Tallene viser en økning på 35% sammenlignet med 2023.

## Lettvektere dominerer

Ifølge bransjetallene ser man den største veksten innen lettvekts el-terrengsykler med motorer under 60Nm.

Specialized Levo SL og Trek Fuel EXe er blant bestselgerne i dette segmentet ifølge forhandlerdata.

## Bredere målgruppe

Ifølge bransjens statistikk tiltrekker el-terrengsykler en bredere målgruppe. Gjennomsnittsalderen på kjøperne er oppgitt til 48 år.

"Vi ser mange som kommer tilbake til sykling etter flere år," siteres en forhandler i bransjens rapport.

## Prisutvikling

Gjennomsnittsprisen for el-terrengsykler solgt i Norge er ifølge statistikken 59.000 kroner - en nedgang på 8% fra i fjor.

## Fremtidsutsikter

Bransjen forventer fortsatt vekst i 2025 ifølge rapporter fra produsentene.`,
    image: eMtb,
    publishedAt: "12. desember 2024",
    source: {
      name: "Norsk sykkelhandlerforbund",
      url: "https://sykkelhandlerne.no/"
    },
    relatedNews: ["canyon-oslo", "specialized-priskutt", "trek-fuel-ex-2025"]
  },
  {
    id: "varsesong-tips",
    title: "Vårklargjøring av sykkel: Bransjeråd og anbefalinger",
    category: "Tips",
    categoryColor: "bg-green-600",
    excerpt: "MTB Test Norge har samlet anbefalinger fra bransjen om hvordan du forbereder sykkelen til vårsesongen.",
    content: `MTB Test Norge har samlet generelle anbefalinger fra sykkelbransjen om vårklargjøring av terrengsykler.

## Grundig rengjøring

Bransjen anbefaler å starte med en grundig vask. Mange verksteder anbefaler sykkelvaskemiddel og en myk børste for å fjerne skitt og salt.

Tips fra mekanikere: Unngå høytrykksspyler rundt lager og tetninger.

## Sjekk demperne

Ifølge serviceverksteder bør demperne inspiseres for lekkasjer og slitasje. Mange produsenter anbefaler årlig service.

## Drivverk

Bransjen anbefaler å bruke en kjedemåler for å sjekke slitasje. En slitt kjede bør byttes før den skader kassett og kjedeblad ifølge mekanikere.

## Bremser

Ifølge verkstedanbefalinger bør bremsebeleggene sjekkes for slitasje. De fleste belegg har slitasjemerker som viser når de bør byttes.

## Dekk og hjul

Bransjen anbefaler å inspisere dekkene for kutt, sprekker og slitasje. Tubeless-tetningsmasse kan ha tørket inn over vinteren ifølge produsentene.

## Boltesjekk

Mange verksteder anbefaler å gå gjennom alle bolter med en momentnøkkel. Produsentene oppgir anbefalte dreiemomenter i brukermanualene.

*Merk: Disse rådene er generelle anbefalinger fra bransjen. Kontakt et autorisert verksted for profesjonell hjelp.*`,
    image: bikeMaintenance,
    publishedAt: "10. desember 2024",
    source: {
      name: "Diverse bransjekilder og produsentanbefalinger",
      url: "https://mtbtest.no/guider"
    },
    relatedNews: ["shimano-vs-sram", "trysil-stier", "enduro-test"]
  }
];

export const newsArticles: NewsArticle[] = [...originalArticles, ...newNewsArticles];

export const getNewsById = (id: string): NewsArticle | undefined => {
  return newsArticles.find(article => article.id === id);
};

export const getFeaturedNews = (): NewsArticle | undefined => {
  return newsArticles.find(article => article.isFeatured);
};

export const getRegularNews = (): NewsArticle[] => {
  return newsArticles.filter(article => !article.isFeatured);
};
