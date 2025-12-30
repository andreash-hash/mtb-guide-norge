import trekFuelEx7 from "@/assets/trek-fuel-ex-7.jpg";
import specializedStumpjumper from "@/assets/specialized-stumpjumper.jpg";
import canyonSpectral from "@/assets/canyon-spectral.jpg";
import santaCruzHightower from "@/assets/santa-cruz-hightower.jpg";
import yetiSb130 from "@/assets/yeti-sb130.jpg";
import norcoFluidFs from "@/assets/norco-fluid-fs.jpg";

export interface BikeComparison {
  id: string;
  name: string;
  brand: string;
  category: string;
  shortDescription: string;
  manufacturerDescription: string;
  priceRange: string;
  image: string;
  strengths: string[];
  considerations: string[];
  suitableFor: string[];
  affiliateLink: string;
  retailer: string;
  specs: {
    frame: string;
    fork: string;
    drivetrain: string;
    brakes: string;
    wheels: string;
    weight: string;
  };
}

export const bikeComparisons: BikeComparison[] = [
  {
    id: "trek-fuel-ex-7",
    name: "Trek Fuel EX 7 2024",
    brand: "Trek",
    category: "Trail",
    shortDescription: "En solid allrounder som treffer godt i mellomsjiktet. Med 140mm foran og 130mm bak får du nok vandring til å takle tekniske stier uten at sykkelen føles treg på klatringene.",
    manufacturerDescription: `Trek Fuel EX 7 er en sykkel vi har fulgt med interesse over flere generasjoner. 2024-modellen representerer en modning av konseptet, og spesifikasjonene forteller en interessant historie.

Med 140mm vandring foran og 130mm bak plasserer Trek denne sykkelen midt i trail-segmentet. Det er et bevisst valg som prioriterer allsidighet fremfor ekstreme egenskaper. Alpha Platinum-aluminiumsrammen holder vekten nede på akseptable 14,2 kg – ikke klasseledende, men heller ikke avskrekkende.

RockShox Pike Select-gaffelen er et solid valg i denne prisklassen. Den mangler noen av justeringsmulighetene til dyrere varianter, men basisytelsen er god. Shimano Deore 12-speed drivsystemet er arbeidshesten i bransjen – det fungerer pålitelig år etter år.

Det vi liker med denne spesifikasjonen er balansen. Trek har ikke kuttet hjørner på ett område for å skinne på et annet. Shimano MT520-bremsene med 4-stempels kalipere gir rikelig bremsekapasitet, og Bontrager XR4-dekkene er et fornuftig allroundvalg.

For mange norske syklister representerer dette et godt kompromiss: Robust nok til steinete norske stier, effektiv nok til å komme seg opp igjen, og priset slik at man ikke får hjerteinfarkt når rammen får det første ripet.`,
    priceRange: "Mellomklasse - 35.000-45.000 kr",
    image: trekFuelEx7,
    strengths: [
      "Velbalansert geometri som fungerer både opp og ned",
      "Shimano Deore – en av de mest pålitelige drivverkene på markedet",
      "RockShox Pike er en velprøvd og kapabel gaffel",
      "Trek-forhandlernettverket i Norge gjør service enkelt"
    ],
    considerations: [
      "14,2 kg er merkbart på lange klatringer",
      "130mm bak kan føles begrenset i røff bikepark-terreng",
      "Aluminiumsrammen mangler karbonens vibrasjonsdempende egenskaper"
    ],
    suitableFor: ["Trail", "Stisykling", "Allround MTB", "Teknisk terreng"],
    affiliateLink: "#",
    retailer: "Trek",
    specs: {
      frame: "Alpha Platinum Aluminum",
      fork: "RockShox Pike Select, 140mm",
      drivetrain: "Shimano Deore 12-speed",
      brakes: "Shimano MT520 4-piston",
      wheels: "Bontrager Line Comp 30, 29\"",
      weight: "14.2 kg"
    }
  },
  {
    id: "specialized-stumpjumper",
    name: "Specialized Stumpjumper Expert",
    brand: "Specialized",
    category: "Trail",
    shortDescription: "En av de mest ikoniske navnene innen terrengsykling, og Expert-varianten leverer på forventningene. Karbonramme, Fox Factory-demping og gjennomtenkt geometri.",
    manufacturerDescription: `Stumpjumper har vært synonymt med terrengsykling siden 1981, og Expert-utgaven representerer det mange anser som sweet-spotten i serien.

FACT 11m karbonrammen er Specializeds mellomsjikts-karbon, men la deg ikke lure av rangeringen – dette er fortsatt en imponerende ramme. Med 150mm vandring foran og bak har Specialized beveget seg litt mot enduro-territoriet sammenlignet med tidligere generasjoner.

Det som virkelig skiller denne sykkelen fra mengden er Fox Factory 36-gaffelen med GRIP2-demping. Dette er ikke en budsjettkomponent – det er topp-tier demping som gir deg full kontroll over compression og rebound i både høy- og lavhastighetssituasjoner. Kombinert med Fox Float X-demperen bak får du et system som kan finjusteres til akkurat ditt kjørestil og terreng.

SRAM GX Eagle håndterer giringen – ikke like polert som X01 eller XX1, men funksjonelt identisk for de aller fleste. SRAM Code RSC-bremsene er overkill for mange situasjoner, men på en lang og bratt norsk nedkjøring vil du sette pris på bremsekapasiteten.

Med en vekt på 12,8 kg er dette en sykkel du faktisk kan klatre med. Det er lett å glemme hvor mye vektbesparelse betyr på lange turer i norsk terreng.`,
    priceRange: "Premium - 65.000-85.000 kr",
    image: specializedStumpjumper,
    strengths: [
      "Fox Factory-demping gir eksepsjonell kontroll og justeringsmuligheter",
      "12,8 kg gjør den konkurransedyktig på vekt",
      "SRAM Code RSC har bremsekapasitet i overflod",
      "Stumpjumper-geometrien er velprøvd og forutsigbar"
    ],
    considerations: [
      "Prisforskjellen til Comp-varianten er betydelig",
      "Fox Factory-demping krever riktig oppsett for å skinne",
      "Specialized-priser i Norge ligger ofte i øvre sjikt"
    ],
    suitableFor: ["Trail", "Enduro-light", "Teknisk terreng", "Erfarne ryttere"],
    affiliateLink: "#",
    retailer: "Specialized",
    specs: {
      frame: "FACT 11m Carbon",
      fork: "Fox Factory 36, 150mm",
      drivetrain: "SRAM GX Eagle 12-speed",
      brakes: "SRAM Code RSC",
      wheels: "Roval Traverse 29, Carbon",
      weight: "12.8 kg"
    }
  },
  {
    id: "canyon-spectral",
    name: "Canyon Spectral 125 CF 7",
    brand: "Canyon",
    category: "Trail",
    shortDescription: "Canyons direktesalgsmodell betyr at du får karbonramme og solide komponenter til en pris som konkurrentene sliter med å matche. Effektiv på klatring, kapabel på nedkjøring.",
    manufacturerDescription: `Canyon har bygget et imperium på å tilby mer sykkel for pengene, og Spectral 125 CF 7 er et kroneksempel på denne filosofien.

Karbonrammen er den samme som brukes i dyrere Spectral-modeller – Canyon sparer penger på komponentene, ikke på strukturen. 125mm vandring bak og 140mm foran plasserer dette som en XC-orientert stisykkel. For de som prioriterer effektivitet på klatring uten å gi opp for mye på tekniske nedkjøringer, er dette et interessant kompromiss.

RockShox Pike Select+-gaffelen er et halvt steg opp fra standard Pike Select, med charger RC-dempere som gir bedre kontroll. Deluxe Select+-demperen bak matcher godt. Shimano XT-drivsystemet er mange mekanikeres førstevalg – pålitelig, presist, og med reservedeler tilgjengelig overalt.

DT Swiss M1900 Spline-hjulene er solide arbeidshester. De er ikke de letteste, men de tåler norske steinete forhold godt. Shimano XT-bremsene har mer enn nok kraft for de fleste situasjoner.

Den store elefanten i rommet er at Canyon kun selger direkte. Du kan ikke prøvesitte sykkelen før kjøp, og service må gjøres selv eller hos en villig forhandler. For erfarne syklister som vet hva de vil ha, er dette sjelden et problem. For nybegynnere kan det være en barriere.`,
    priceRange: "Mellomklasse - 40.000-50.000 kr",
    image: canyonSpectral,
    strengths: [
      "Uslåelig verdi for en karbonramme",
      "Shimano XT er industristandarden for pålitelighet",
      "Effektiv på klatring takket være 125mm vandring",
      "DT Swiss-hjul tåler hard bruk"
    ],
    considerations: [
      "Ingen mulighet for prøvetur før kjøp",
      "125mm vandring kan føles kort i røft terreng",
      "Begrenset fysisk support i Norge"
    ],
    suitableFor: ["Trail", "XC-orientert stisykling", "Lange turer", "Effektiv klatring"],
    affiliateLink: "#",
    retailer: "Canyon",
    specs: {
      frame: "CF Carbon",
      fork: "RockShox Pike Select+, 140mm",
      drivetrain: "Shimano XT 12-speed",
      brakes: "Shimano XT 4-piston",
      wheels: "DT Swiss M1900 Spline, 29\"",
      weight: "13.1 kg"
    }
  },
  {
    id: "santa-cruz-hightower",
    name: "Santa Cruz Hightower C S",
    brand: "Santa Cruz",
    category: "Trail",
    shortDescription: "Den californiske kultprodusenten leverer en stisykkel med 145mm vandring og deres legendariske VPP-demping. Livstidsgaranti på rammen er et statement om kvalitet.",
    manufacturerDescription: `Santa Cruz har kultstatus i terrengsykkelmiljøet, og Hightower representerer deres visjon for den ultimate stisykkelen.

VPP-dempersystemet (Virtual Pivot Point) er Santa Cruz' signaturteknologi. Etter flere tiår med utvikling har de raffinert det til et system som balanserer pedaling-effektivitet med følsomhet på små slag. Med 145mm vandring bak og 150mm foran posisjonerer dette Hightower i øvre sjikt av trail-segmentet.

C-karbonrammen er Santa Cruz' "basis"-karbon, men la deg ikke lure – dette er fortsatt premium materiale med livstidsgaranti. Fox 36 Performance-gaffelen er et halvt steg ned fra Factory-varianten, men med identisk chassis og svært god ytelse. Float X-demperen bak matcher godt.

SRAM GX Eagle-drivsystemet fungerer utmerket, og G2 RSC-bremsene har god modulasjon og kraft. Race Face AR 30-hjulene er solide og har et greit vektbudsjett.

For norske forhold er 145/150mm vandring et godt valg. Du har kapasitet til å takle tekniske nedkjøringer i Trysil eller Hafjell, samtidig som sykkelen ikke føles overdimensjonert på lokale stier. Livstidsgarantien på rammen er også verdt å nevne – Santa Cruz står bak produktene sine.`,
    priceRange: "Premium - 70.000-90.000 kr",
    image: santaCruzHightower,
    strengths: [
      "VPP-dempersystemet er velprøvd og effektivt",
      "Livstidsgaranti på rammen er sjeldent i bransjen",
      "145/150mm vandring treffer sweet-spotten for norske forhold",
      "Fox 36-gaffelen er blant de beste i klassen"
    ],
    considerations: [
      "Santa Cruz-priser ligger i øvre sjikt globalt og enda høyere i Norge",
      "Begrenset antall forhandlere her til lands",
      "C-karbonen er tyngre enn deres CC-variant"
    ],
    suitableFor: ["Trail", "All-mountain", "Teknisk terreng", "Lange nedkjøringer"],
    affiliateLink: "#",
    retailer: "Santa Cruz",
    specs: {
      frame: "C Carbon",
      fork: "Fox 36 Performance, 150mm",
      drivetrain: "SRAM GX Eagle 12-speed",
      brakes: "SRAM G2 RSC",
      wheels: "Race Face AR 30, 29\"",
      weight: "13.6 kg"
    }
  },
  {
    id: "yeti-sb130",
    name: "Yeti SB130 T2",
    brand: "Yeti",
    category: "Trail",
    shortDescription: "For de som krever det absolutt beste. Yetis Turq-karbon, Switch Infinity-demping og Fox Factory-komponenter i en pakke som definerer ultra-premium segmentet.",
    manufacturerDescription: `Yeti SB130 T2 er ikke en sykkel for alle – den er for de som søker det beste uansett pris.

La oss starte med det åpenbare: Turq-karbonrammen. Dette er Yetis premium layup, og spesifikasjonene er imponerende. Med en komplett vekt på 12,2 kg konkurrerer dette med mange hardtails. Switch Infinity-dempersystemet er Yetis stolthet – i stedet for tradisjonelle lagerkuler bruker de en lineær skinne som eliminerer friksjon og gir et dempersystem som er ekstremt sensitivt.

Fox Factory 36 GRIP2-gaffelen og Float X Factory-demperen representerer det beste Fox tilbyr. GRIP2-dempingen gir deg fire uavhengige justeringer for kompresjons- og returdemping. For de som virkelig vil finstille oppsettet sitt, er dette nirvana.

SRAM X01 Eagle er et steg opp fra GX – lettere kassett og mer polerte girskift. Code RSC-bremsene har kraft til å stoppe på en femøring. DT Swiss XMC 1200 karbonhjul sparer roterende masse der det teller mest.

Prisen er naturligvis skyhøy. For det SB130 T2 koster, kan du kjøpe to solide mellomklasse-sykler. Men for de som forstår forskjellen og verdsetter kompromissløs kvalitet, er dette toppen av hva terrengsykkelbransjen kan tilby.`,
    priceRange: "Ultra-Premium - 95.000-120.000 kr",
    image: yetiSb130,
    strengths: [
      "Turq-karbonrammen er blant de letteste og stiveste på markedet",
      "Switch Infinity er et unikt og velprøvd dempersystem",
      "12,2 kg for en fulldemper er eksepsjonelt",
      "Fox Factory-komponenter gir maksimal justerbarhet"
    ],
    considerations: [
      "Prisen plasserer denne utenfor rekkevidde for de fleste",
      "Switch Infinity-teknologien krever Yeti-spesifikk ekspertise ved service",
      "Nesten umulig å forsvare økonomisk vs. billigere alternativer"
    ],
    suitableFor: ["Trail", "Entusiaster", "Konkurranseorientert sykling", "Premium-segmentet"],
    affiliateLink: "#",
    retailer: "Yeti",
    specs: {
      frame: "Turq Carbon",
      fork: "Fox Factory 36 GRIP2, 150mm",
      drivetrain: "SRAM X01 Eagle 12-speed",
      brakes: "SRAM Code RSC",
      wheels: "DT Swiss XMC 1200, Carbon",
      weight: "12.2 kg"
    }
  },
  {
    id: "norco-fluid-fs",
    name: "Norco Fluid FS 1",
    brand: "Norco",
    category: "Trail",
    shortDescription: "Fulldempet terrengsykkel til en pris som ikke ruinerer deg. Norco har pakket mye verdi inn i denne inngangsmodellen uten å kutte hjørner på det som betyr mest.",
    manufacturerDescription: `For mange er spørsmålet ikke "hvilken drømmesykkel skal jeg kjøpe?", men "hvordan får jeg mest mulig sykkel for budsjettet mitt?". Norco Fluid FS 1 er et sterkt svar på det spørsmålet.

Aluminiumsrammen har moderne geometri med slakk styrevinkel og lang reach. 130mm vandring foran og bak er nok til å takle det meste av stisykling uten at sykkelen blir unødvendig komplisert. Interne kabelføringer og boost-spacing viser at Norco har holdt seg oppdatert selv på budsjettmodellene.

Marzocchi Bomber Z2-gaffelen er den virkelige stjernen her. Marzocchi (eid av Fox) har laget en gaffel som overpresterer i prisklassen. Fox Float DPS-demperen bak er enklere enn dyrere alternativer, men den fungerer godt for målgruppen.

Shimano Deore-drivsystemet er det samme du finner på sykler som koster dobbelt så mye. Det er rett og slett en av de beste verdiene i sykkelbransjen. MT420-bremsene med 4-stempels kalipere gir rikelig bremsekapasitet.

Ja, 15,1 kg er merkbart tyngre enn premium-alternativer. Men for den som vil inn i fulldemper-verdenen uten å ta opp lån, representerer Fluid FS 1 et fornuftig kompromiss. Norco har kuttet vekt der det betyr minst (ramme) og investert i komponenter som påvirker kjøreopplevelsen direkte.`,
    priceRange: "Budsjett - 22.000-28.000 kr",
    image: norcoFluidFs,
    strengths: [
      "Uslåelig pris for en kapabel fulldemper",
      "Marzocchi Bomber Z2 overpresterer i prisklassen",
      "Shimano Deore er uknuselig pålitelig",
      "Moderne geometri på tross av budsjettprisen"
    ],
    considerations: [
      "15,1 kg merkes på lange klatringer",
      "Enklere justeringsmuligheter enn dyrere alternativer",
      "Vil bli utkonkurrert i røft terreng av sykler med mer vandring"
    ],
    suitableFor: ["Trail", "Nybegynnere", "Budsjettbevisste", "Inngang til stisykling"],
    affiliateLink: "#",
    retailer: "Norco",
    specs: {
      frame: "6061 Aluminum",
      fork: "Marzocchi Bomber Z2, 130mm",
      drivetrain: "Shimano Deore 12-speed",
      brakes: "Shimano MT420 4-piston",
      wheels: "WTB ST i30 TCS, 29\"",
      weight: "15.1 kg"
    }
  }
];

export const getBikeById = (id: string): BikeComparison | undefined => {
  return bikeComparisons.find(bike => bike.id === id);
};
