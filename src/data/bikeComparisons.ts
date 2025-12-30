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
    shortDescription: "Allsidig stisykkel med 140mm vandring foran og 130mm bak. Ifølge Trek designet for variert terreng fra skogsturer til tekniske nedkjøringer.",
    manufacturerDescription: `Ifølge Trek er Fuel EX 7 2024 en av deres mest allsidige stisykler. Med 140mm vandring foran og 130mm bak, oppgir produsenten at sykkelen treffer sweet-spotten for varierte forhold.

Rammen er ifølge Trek bygget i Alpha Platinum aluminiumslegering, som produsenten beskriver som stiv og responsiv. Trek fremhever at geometrien på denne generasjonen har slakkere styrevinkel og lengre reach.

RockShox Pike-gaffelen og Deluxe Select-demperen er standardkomponenter på denne modellen. Shimano Deore 12-speed drivsystem gir et bredt giromfang.

Trek oppgir at bremsene er Shimano MT520 med 4-stempels kalipere, kombinert med 29-tommers hjul og Bontrager XR4-dekk.`,
    priceRange: "Mellomklasse - 35.000-45.000 kr",
    image: trekFuelEx7,
    strengths: [
      "Allsidig geometri ifølge produsentens spesifikasjoner",
      "Solid komponentpakke i mellomklassen",
      "140mm/130mm vandring gir balanse mellom klatring og nedkjøring",
      "Shimano Deore 12-speed er kjent for pålitelighet"
    ],
    considerations: [
      "Aluminiumsramme gir høyere vekt enn karbonalternativer",
      "Mindre vandring enn dedikerte enduro-sykler",
      "Begrenset fargeutvalg ifølge Trek"
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
      weight: "14.2 kg (oppgitt av produsent)"
    }
  },
  {
    id: "specialized-stumpjumper",
    name: "Specialized Stumpjumper Expert",
    brand: "Specialized",
    category: "Trail",
    shortDescription: "Premium stisykkel med karbonramme. Specialized beskriver den som deres flaggskip for tekniske stier.",
    manufacturerDescription: `Specialized presenterer Stumpjumper Expert som toppen av deres trail-segment. Produsenten fremhever FACT 11m karbonrammen som et ingeniørkunstverk med strategiske flex-soner.

Ifølge Specialized kommer sykkelen med Fox Factory 36-gaffel med GRIP2-demping. Produsenten oppgir at Fox Float X-demperen bak gir et dempersystem designet for krevende terreng.

SRAM GX Eagle-drivsystemet er standard på denne modellen. Specialized oppgir at bremsene er SRAM Code RSC.

Produsenten fremhever at geometrien er moderne og balansert, designet for alt fra XC-løyper til bikeparker.`,
    priceRange: "Premium - 65.000-85.000 kr",
    image: specializedStumpjumper,
    strengths: [
      "FACT 11m karbonramme for lav vekt",
      "Fox Factory-demping er blant de mest avanserte på markedet",
      "SRAM Code RSC-bremser med høy bremsekapasitet",
      "150mm vandring gir god kapasitet"
    ],
    considerations: [
      "Høy pris sammenlignet med aluminiumsalternativer",
      "Fox-komponenter kan kreve spesialistservice",
      "Premium-segment betyr høyere investeringskostnad"
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
      weight: "12.8 kg (oppgitt av produsent)"
    }
  },
  {
    id: "canyon-spectral",
    name: "Canyon Spectral 125 CF 7",
    brand: "Canyon",
    category: "Trail",
    shortDescription: "Karbonramme-stisykkel solgt direkte fra Canyon. Produsenten fremhever god verdi gjennom direktesalgsmodellen.",
    manufacturerDescription: `Canyon markedsfører Spectral 125 CF 7 som en sykkel som gir premium ytelse til en mer overkommelig pris gjennom deres direktesalgsmodell.

Ifølge Canyon er karbonrammen identisk med dyrere modeller i Spectral-serien. Produsenten oppgir 125mm vandring bak og 140mm foran, posisjonert som en rask og effektiv stisykkel.

RockShox Pike-gaffelen og Deluxe Select+-demperen er standardutstyr. Canyon fremhever Shimano XT-drivsystemet som pålitelig og presist.

Produsenten oppgir at Shimano XT-bremsene og DT Swiss-hjulene kompletterer pakken.`,
    priceRange: "Mellomklasse - 40.000-50.000 kr",
    image: canyonSpectral,
    strengths: [
      "Karbonramme til mellomklassepris gjennom direktesalg",
      "Shimano XT-komponenter er kjent for holdbarhet",
      "125mm/140mm vandring optimalisert for effektiv klatring",
      "DT Swiss-hjul er anerkjent kvalitet"
    ],
    considerations: [
      "Kun tilgjengelig online - ingen fysisk prøvekjøring",
      "Kortere vandring enn noen konkurrenter",
      "Begrenset fysisk kundeservice i Norge"
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
      weight: "13.1 kg (oppgitt av produsent)"
    }
  },
  {
    id: "santa-cruz-hightower",
    name: "Santa Cruz Hightower C S",
    brand: "Santa Cruz",
    category: "Trail",
    shortDescription: "Karbonramme-stisykkel fra den californiske produsenten. Santa Cruz fremhever sitt VPP-dempersystem.",
    manufacturerDescription: `Santa Cruz presenterer Hightower C S som en allsidig stisykkel med deres VPP-demperplattform. Produsenten oppgir at dette systemet er raffinert over flere tiår.

Ifølge Santa Cruz er karbonrammen bygget etter C-spesifikasjon, som produsenten beskriver som en balanse mellom vekt, stivhet og holdbarhet.

Produsenten oppgir 145mm vandring bak og 150mm foran. Fox 36 Performance-gaffelen og Float X-demperen er standardkomponenter.

Santa Cruz fremhever SRAM GX Eagle-drivsystemet og G2 RSC-bremsene. Produsenten tilbyr livstidsgaranti på rammen.`,
    priceRange: "Premium - 70.000-90.000 kr",
    image: santaCruzHightower,
    strengths: [
      "VPP-dempersystem designet for effektiv pedalering",
      "Livstidsgaranti på rammen fra produsent",
      "145mm/150mm vandring gir god kapasitet",
      "Fox 36-gaffel er godt ansett i bransjen"
    ],
    considerations: [
      "Høy pris i premium-segmentet",
      "Begrenset forhandlernettverk i Norge",
      "Reservedeler kan være kostbare"
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
      weight: "13.6 kg (oppgitt av produsent)"
    }
  },
  {
    id: "yeti-sb130",
    name: "Yeti SB130 T2",
    brand: "Yeti",
    category: "Trail",
    shortDescription: "Ultra-premium stisykkel fra Colorado. Yeti fremhever sitt Switch Infinity-dempersystem som unikt i bransjen.",
    manufacturerDescription: `Yeti presenterer SB130 T2 som toppen av deres trail-segment. Produsenten fremhever Turq-karbonrammen som noe av det letteste og stiveste tilgjengelig.

Ifølge Yeti bruker Switch Infinity-dempersystemet en lineær skinne i stedet for tradisjonelle lagerkuler. Produsenten hevder dette eliminerer friksjon og gir sensitiv demping.

Produsenten oppgir 130mm vandring bak og 150mm foran. Fox Factory 36-gaffel med GRIP2-demping og Float X Factory-demper er standardutstyr.

Yeti fremhever SRAM X01 Eagle-drivsystemet og Code RSC-bremsene som toppspesifikasjoner.`,
    priceRange: "Ultra-Premium - 95.000-120.000 kr",
    image: yetiSb130,
    strengths: [
      "Turq-karbonramme er blant de letteste på markedet",
      "Switch Infinity-dempersystem er unikt for Yeti",
      "Fox Factory-komponenter er toppspesifikasjon",
      "SRAM X01 Eagle er premiumdrivsystem"
    ],
    considerations: [
      "Svært høy pris i ultra-premium-segmentet",
      "Begrenset forhandlernettverk i Norge",
      "Spesialisert teknologi kan kreve ekspertservice"
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
      weight: "12.2 kg (oppgitt av produsent)"
    }
  },
  {
    id: "norco-fluid-fs",
    name: "Norco Fluid FS 1",
    brand: "Norco",
    category: "Trail",
    shortDescription: "Budsjett-vennlig fulldemper fra den kanadiske produsenten. Norco posisjonerer den som en inngangsport til stisykling.",
    manufacturerDescription: `Norco markedsfører Fluid FS 1 som en tilgjengelig inngang til fulldemper-verdenen. Produsenten fremhever at sykkelen gir god verdi for pengene.

Ifølge Norco er aluminiumsrammen bygget med moderne geometri inkludert interne kabelføringer og boost-spacing. Produsenten oppgir 130mm vandring foran og bak.

Marzocchi Bomber Z2-gaffelen er standard, sammen med Fox Float DPS-demper. Norco fremhever Shimano Deore-drivsystemet som pålitelig.

Produsenten oppgir Shimano MT420-bremser med 4-stempels kalipere.`,
    priceRange: "Budsjett - 22.000-28.000 kr",
    image: norcoFluidFs,
    strengths: [
      "Tilgjengelig pris for en fulldemper",
      "Marzocchi Bomber Z2-gaffel er godt ansett i prisklassen",
      "Shimano Deore-drivsystem er kjent for pålitelighet",
      "Moderne geometri ifølge produsent"
    ],
    considerations: [
      "Aluminiumsramme gir høyere vekt",
      "Enklere justeringsmuligheter på demping",
      "Innstegsmodell med begrensninger for avansert bruk"
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
      weight: "15.1 kg (oppgitt av produsent)"
    }
  }
];

export const getBikeById = (id: string): BikeComparison | undefined => {
  return bikeComparisons.find(bike => bike.id === id);
};
