import trekFuelEx7 from "@/assets/trek-fuel-ex-7.jpg";
import specializedStumpjumper from "@/assets/specialized-stumpjumper.jpg";
import canyonSpectral from "@/assets/canyon-spectral.jpg";
import santaCruzHightower from "@/assets/santa-cruz-hightower.jpg";
import yetiSb130 from "@/assets/yeti-sb130.jpg";
import norcoFluidFs from "@/assets/norco-fluid-fs.jpg";

export interface BikeReview {
  id: string;
  name: string;
  brand: string;
  shortDescription: string;
  fullReview: string;
  priceRange: string;
  rating: number;
  image: string;
  pros: string[];
  cons: string[];
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

export const bikeReviews: BikeReview[] = [
  {
    id: "trek-fuel-ex-7",
    name: "Trek Fuel EX 7 2024",
    brand: "Trek",
    shortDescription: "En allsidig stisykkel som takler alt fra rolige skogsturer til tekniske nedkjøringer. Perfekt for den som vil ha én sykkel som gjør alt.",
    fullReview: `Trek Fuel EX 7 2024 er en av de mest allsidige stisyklene på markedet akkurat nå. Med 140mm vandring foran og 130mm bak, treffer den sweet-spotten for norske forhold perfekt.

Rammen er bygget i Alphas aluminiumslegering, som gir en imponerende stiv og responsiv kjørefølelse uten å være for hard på tekniske seksjoner. Trek har virkelig finpusset geometrien på denne generasjonen, med slakkere styrevinkel og lengre reach som gir mer selvtillit i bratt terreng.

RockShox Pike-gaffelen og Deluxe Select-demperen jobber utmerket sammen. Dempingen er plysj nok til å svelge røtter og steiner, men har fortsatt nok støtte til effektive klatreetapper. Vi merket spesielt hvor godt sykkelen holder fart gjennom rufsete partier.

Shimano Deore-drivelinjen gir deg 12 gir med enormt spenn, fra de bratteste bakkene til raske nedkjøringer. Skiftekvaliteten er upåklagelig, og dette er komponenter som tåler hard bruk sesong etter sesong.

På stiene viste Fuel EX 7 seg fra sin beste side. Den er kvikk nok til å være morsom på lettere stier, men har samtidig kapasitet til å håndtere de mest krevende tekniske partiene. Sittestillingen er behagelig for lange turer, og sykkelen inspirerer til å utforske nye stier.

Bremsene fra Shimano MT520 med 4-stempels kalipere gir kraftig og kontrollerbar bremsing. I kombinasjon med 29-tommers hjul og Bontrager XR4-dekk, føles sykkelen trygg og stabil selv i høy fart.

For norske forhold er dette en nesten perfekt pakke. Den takler alt fra hverdagsturer til helgeturer i fjellet, og kvaliteten på komponentene tilsier lang levetid med minimal vedlikehold.`,
    priceRange: "Mellomklasse - 35.000-45.000 kr",
    rating: 4.5,
    image: trekFuelEx7,
    pros: [
      "Utrolig allsidig og morsom på variert terreng",
      "Solid komponentpakke til prisen",
      "Komfortabel geometri for lange turer",
      "God demping som tåler røff bruk"
    ],
    cons: [
      "Litt tung sammenlignet med karbonalternativer",
      "Kan føles underdempet på de hardeste dropene",
      "Begrenset fargeutvalg"
    ],
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
    shortDescription: "Premium stisykkel med karbonramme og topp-spec komponenter. For deg som krever det beste på tekniske stier.",
    fullReview: `Specialized Stumpjumper Expert representerer toppen av hva moderne stisykling har å tilby. Med sin karbonramme og gjennomtenkte geometri, setter den standarden for hva en trail bike kan være.

FACT 11m karbonrammen er et ingeniørkunstverk. Den er stiv der du trenger kraft, men har strategiske flex-soner som gjør sykkelen levende og responsiv. Vekten er imponerende lav uten at det går på bekostning av holdbarhet.

Fox Factory 36-gaffelen med GRIP2-demping er en drøm å kjøre. Justeringsmulighetene er omfattende, men standardoppsettet fungerer utmerket for de fleste. Kombinert med Fox Float X-demperen bak, får du et dempersystem som virkelig lytter til terrenget.

SRAM GX Eagle-drivelinjen er pålitelig og presis. 12-girs kassetten gir deg alle girene du trenger, og skiftene er knivskarpe selv under belastning. Dette er komponenter som holder seg godt over tid.

På stiene er Stumpjumper Expert i en klasse for seg. Den føles lettere enn vekten tilsier, og akselererer kvikt ut av svinger. Samtidig har den stabilitet og grep til å håndtere de mest tekniske partiene med ro.

Bremsene fra SRAM Code RSC er blant de beste på markedet. Bremseresponsen er lineær og kontrollerbar, med kraft i reserve for de bratteste nedkjøringene. Du føler deg trygg i alle situasjoner.

Geometrien er moderne og aggressiv, men ikke så ekstrem at den blir vanskelig på roligere partier. Specialized har funnet en balanse som fungerer på alt fra XC-løyper til bikeparker.

Dette er en sykkel for deg som vil ha det beste, og er villig til å betale for det. Kvaliteten skinner gjennom i hver eneste detalj.`,
    priceRange: "Premium - 65.000-85.000 kr",
    rating: 4.8,
    image: specializedStumpjumper,
    pros: [
      "Eksepsjonell byggekvalitet med karbonramme",
      "Fox Factory-demping gir førsteklasses ytelse",
      "Perfekt balansert geometri",
      "SRAM Code RSC-bremser er fantastiske"
    ],
    cons: [
      "Høy pris krever stort budsjett",
      "Kan være for mye sykkel for nybegynnere",
      "Service på Fox-komponenter kan bli kostbart"
    ],
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
    shortDescription: "Prisvinnende fulldemper fra Canyon som gir premium ytelse til en mer overkommelig pris. Direkte-salg modellen gir deg mer for pengene.",
    fullReview: `Canyon Spectral 125 CF 7 beviser at du ikke trenger å tømme sparekontoen for å få en seriøs fulldemper med karbonramme. Gjennom sin direktesalgsmodell leverer Canyon imponerende verdi.

Karbonrammen er identisk med dyrere modeller i Spectral-serien. Det betyr førsteklasses stivhet-til-vekt ratio og en kjørefølelse som matcher sykler i mye høyere prisklasser. Finish og detaljarbeid er på et nivå du normalt finner på premium-sykler.

Med 125mm vandring bak og 140mm foran, er Spectral posisjonert som en rask og leken stisykkel. Den er mer XC-orientert enn mange konkurrenter, noe som gjør den ideell for norske forhold der klatring ofte er en stor del av turen.

RockShox Pike-gaffelen og Deluxe Select+-demperen gir deg solid ytelse. Dempingen er forutsigbar og enkel å justere, med god støtte på klatring og plysj nok på nedkjøringene.

Shimano XT-drivelinjen er en av de beste i bransjen. Skiftekvaliteten er upåklagelig, og holdbarheten er legendarisk. Dette er komponenter som vil gi deg år med problemfri sykling.

På stiene imponerer Spectral med sin effektivitet. Den klatrer som en drøm og holder fart gjennom tekniske seksjoner. Den korte vandringen gjør den kanskje ikke til førstevalget for de aller tøffeste nedkjøringene, men for allround stisykling er den vanskelig å slå.

Shimano XT-bremsene gir kraftig og pålitelig bremsing. Kombinert med de lette karbonhjulene fra DT Swiss, får du en pakke som føles mye dyrere enn prislappen tilsier.

For deg som vil ha karbonramme og gode komponenter uten å bruke formuen, er Spectral et utmerket valg.`,
    priceRange: "Mellomklasse - 40.000-50.000 kr",
    rating: 4.4,
    image: canyonSpectral,
    pros: [
      "Utmerket verdi for pengene",
      "Lett og effektiv karbonramme",
      "Shimano XT-komponenter er svært pålitelige",
      "Fantastisk klatreegenskaper"
    ],
    cons: [
      "Kortere vandring passer ikke alle",
      "Kun tilgjengelig online - ingen prøvekjøring",
      "Begrenset kundeservice i Norge"
    ],
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
    shortDescription: "High-end allrounder fra California-legenden. VPP-dempersystemet gir uovertruffen pedaltråkk-effektivitet og småstikomfort.",
    fullReview: `Santa Cruz Hightower C S er en sykkel som virkelig lever opp til rykte. Den californiske produsenten har raffinert sin VPP-demperplattform over tiår, og resultatet er en av de mest kapable stisyklene på markedet.

Karbonrammen er bygget etter Santa Cruz' C-spesifikasjon, som gir en perfekt balanse mellom vekt, stivhet og holdbarhet. Finish er upåklagelig, og detaljene viser at dette er et premium-produkt gjennom og gjennom.

Med 145mm vandring bak og 150mm foran, har Hightower kapasitet til seriøse nedkjøringer. Men det som virkelig imponerer er hvor effektiv den er på klatring. VPP-dempersystemet eliminerer nesten all pedaltråkk-indusert bevegelse, så kreftene dine går rett i bakhjulet.

Fox 36 Performance-gaffelen og Float X-demperen gir deg et dempersystem som takler alt. Justeringsmulighetene er omfattende, og du kan virkelig finjustere sykkelen til din kjørestil og lokale terreng.

SRAM GX Eagle-drivelinjen er pålitelig og holder seg godt over tid. Skiftene er presise, og det brede giromfanget betyr at du alltid har riktig gir tilgjengelig.

På stiene viser Hightower sin styrke. Den er stabil i høy fart, men kvikk nok til tekniske seksjoner. Den håndterer bratte nedkjøringer med ro, men er ikke overdrevet for mildere stier. Dette er en ekte allrounder.

SRAM G2 RSC-bremsene gir kraftig og modulerbar bremsing. Reserve-kraften er alltid der når du trenger den, og kontrollen er upåklagelig.

Santa Cruz' livstidsgaranti på rammen gir ekstra trygghet. Dette er en investering som vil vare.`,
    priceRange: "Premium - 70.000-90.000 kr",
    rating: 4.7,
    image: santaCruzHightower,
    pros: [
      "VPP-demping gir fantastisk pedaltråkk-effektivitet",
      "Livstidsgaranti på rammen",
      "Ekstremt allsidig på variert terreng",
      "Premium byggekvalitet"
    ],
    cons: [
      "Høy pris setter den utenfor rekkevidde for mange",
      "Tung sammenlignet med XC-orienterte sykler",
      "Reservedeler kan være dyre"
    ],
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
    shortDescription: "Premium trail bike med Yetis legendariske Switch Infinity-demping. For den kresne rytteren som vil ha det absolutt beste.",
    fullReview: `Yeti SB130 T2 representerer toppen av trail bike-segmentet. Denne Colorado-produsenten har kultstatus blant stisyklister, og SB130 viser hvorfor.

Turq-karbonrammen er noe av det letteste og stiveste du kan få. Yeti bruker en spesiell karbonlagingsprosess som gir eksepsjonell styrke uten unødvendig vekt. Finishen er upåklagelig, med den ikoniske turquoise-fargen som signatur.

Switch Infinity-dempersystemet er Yetis hemmelighet. I stedet for tradisjonelle lagerkuler, bruker systemet en lineær skinne som eliminerer friksjon og gir en utrolig sensitiv demping. Resultatet er en sykkel som føles levende under deg.

Med 130mm vandring bak og 150mm foran, er SB130 designet for fart. Den klatrer som en XC-sykkel, men har kapasitet til seriøse nedkjøringer. Balansen er nesten perfekt for norske forhold.

Fox Factory 36-gaffelen med GRIP2-demping og Float X Factory-demperen bak gir deg det beste fra Fox. Justeringsmulighetene er omfattende, og ytelsen er i en egen klasse.

SRAM X01 Eagle-drivelinjen er lettere og mer presis enn GX, med karbonkrank og hollow-pin kjede. Dette er komponenter for racere og de som krever det beste.

På stiene er SB130 en åpenbaring. Den føles telepathisk - den gjør akkurat det du tenker før du tenker det. Stabiliteten i høy fart er imponerende, og den håndterer tekniske seksjoner med en selvtillit som smitter over på rytteren.

SRAM Code RSC-bremsene gir deg all bremsekraften du trenger, med en følelse som er lineær og kontrollerbar.

Dette er drømmesykkelen for mange, og den lever opp til forventningene.`,
    priceRange: "Ultra-Premium - 95.000-120.000 kr",
    rating: 4.9,
    image: yetiSb130,
    pros: [
      "Switch Infinity-demping er i en egen klasse",
      "Ekstrem lett Turq-karbonramme",
      "Top-spec komponenter gjennomgående",
      "Ikonisk design og byggekvalitet"
    ],
    cons: [
      "Svært høy pris",
      "Begrenset forhandlernettverk i Norge",
      "Kan være overkill for hobbybruk"
    ],
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
    shortDescription: "Budsjett-vennlig fulldemper som ikke kompromisser på kjøreglede. Perfekt for deg som vil inn i fulldemper-verden uten å ruinere deg.",
    fullReview: `Norco Fluid FS 1 beviser at du ikke trenger et enormt budsjett for å oppleve gleden ved en fulldemper. Den kanadiske produsenten har pakket imponerende mye verdi inn i denne sykkelen.

Aluminiumsrammen er solid bygget med moderne geometri. Norco har ikke spart på viktige detaljer som interne kabelføringer og boost-spacing. Rammen føles moderne og kapabel, selv om den ikke har karbonets vektfordeler.

Med 130mm vandring foran og bak, er Fluid FS posisjonert som en allsidig stisykkel. Vandringen er nok til å ta på seg tekniske stier, men ikke så mye at sykkelen føles sløv på roligere partier.

Marzocchi Bomber Z2-gaffelen er en overraskelse i denne prisklassen. Den har god demping og er enkel å justere. Fox Float DPS-demperen bak kompletterer med forutsigbar og pålitelig ytelse.

Shimano Deore-drivelinjen er arbeidshesten i stisykkel-verden. Den er pålitelig, enkel å vedlikeholde, og skiftekvaliteten er mer enn god nok for de fleste.

På stiene imponerer Fluid FS med sin kapasitet. Den føles ikke som en budsjett-sykkel når du er i fart. Geometrien er moderne og inspirerer til selvtillit, og dempingen takler mer enn du kanskje forventer.

Shimano MT420-bremsene med 4-stempels kalipere gir god bremsekraft. De er kanskje ikke like raffinerte som dyrere alternativer, men de gjør jobben godt.

For nybegynnere eller de som vil teste fulldemper-verdenen, er Fluid FS et utmerket valg. Den gir deg en ekte stisykkel-opplevelse uten å tømme lommeboken.`,
    priceRange: "Budsjett - 22.000-28.000 kr",
    rating: 4.2,
    image: norcoFluidFs,
    pros: [
      "Utmerket pris for en fulldemper",
      "Solid komponentvalg til prisklassen",
      "Moderne geometri og kjøreegenskaper",
      "God inngangsport til stisykling"
    ],
    cons: [
      "Tyngre enn dyrere alternativer",
      "Begrenset justeringsmuligheter på demping",
      "Vil kreve oppgraderinger for avanserte ryttere"
    ],
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

export const getBikeById = (id: string): BikeReview | undefined => {
  return bikeReviews.find(bike => bike.id === id);
};
