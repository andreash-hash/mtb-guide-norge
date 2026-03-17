// Pre-render meta tags AND static body content for all routes at build time
// Crawlers get correct meta tags AND semantic HTML without JS rendering
// Content mirrors what the React app renders to avoid cloaking issues

const SITE_URL = 'https://mtbtest.no';
const SITE_NAME = 'MTB Test Norge';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

interface RouteMeta {
  path: string;
  title: string;
  description: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  noindex?: boolean;
  staticContent?: string;
}

function wrap(inner: string): string {
  return `<div class="seo-shell" data-seo-prerender="true">${inner}</div>`;
}

const nav = `<header><nav aria-label="Hovedmeny"><a href="/">MTB Test Norge</a><a href="/sammenligninger">Sammenligninger</a><a href="/nyheter">Nyheter</a><a href="/guider">Guider</a></nav></header>`;

// ============ STATIC ROUTES ============

const staticRoutes: RouteMeta[] = [
  {
    path: '/',
    title: 'MTB Test Norge – Sammenligninger, guider og nyheter 2025',
    description: 'Sammenlign terrengsykler basert på tekniske spesifikasjoner. Faktabaserte guider og nyheter om stisykling i Norge.',
    keywords: 'terrengsykkel, mtb norge, terrengsykkel sammenligning, beste terrengsykkel, stisykling',
    staticContent: wrap(`${nav}<main>
      <h1>MTB Test Norge – Sammenligninger, guider og nyheter 2025</h1>
      <p>Sammenlign terrengsykler basert på tekniske spesifikasjoner. Faktabaserte guider og nyheter om stisykling i Norge.</p>

      <section>
        <h2>Populære sammenligninger</h2>
        <p>Sammenlign tekniske spesifikasjoner fra ulike produsenter.</p>
        <ul>
          <li><a href="/sammenligninger/trek-fuel-ex-7">Trek Fuel EX 7 2024</a> – En solid allrounder med 140mm vandring foran og 130mm bak. Alpha Platinum Aluminum-ramme, RockShox Pike Select-gaffel, Shimano Deore 12-speed. Pris: 35.000-45.000 kr.</li>
          <li><a href="/sammenligninger/specialized-stumpjumper">Specialized Stumpjumper Expert</a> – Premium trail med FACT 11m karbonramme, Fox Factory 36 GRIP2-gaffel, 150mm vandring. SRAM GX Eagle drivverk. Pris: 65.000-85.000 kr.</li>
          <li><a href="/sammenligninger/canyon-spectral">Canyon Spectral 125 CF 7</a> – Direkte-til-forbruker med CF karbonramme. RockShox Pike Select+, Shimano XT 12-speed. Pris: 40.000-50.000 kr.</li>
        </ul>
        <a href="/sammenligninger">Se alle sammenligninger</a>
      </section>

      <section>
        <h2>Kategorier</h2>
        <ul>
          <li><a href="/sammenligninger">Sammenligninger</a> – Sammenlign terrengsykler side om side med tekniske spesifikasjoner</li>
          <li><a href="/nyheter">Nyheter</a> – Siste fra MTB-verdenen: produktlanseringer, stiutbygging, bransjenyheter</li>
          <li><a href="/guider">Guider</a> – Lær alt om MTB: fra nybegynner til ekspert</li>
        </ul>
      </section>

      <section>
        <h2>Guider</h2>
        <ul>
          <li><a href="/guider/velg-riktig-terrengsykkel">Velg riktig terrengsykkel 2025</a> – Hardtail vs fulldemper, hjulstørrelser og geometri forklart</li>
          <li><a href="/guider/mtb-for-nybegynnere">MTB for nybegynnere</a> – Alt du må vite før du starter med terrengsykling</li>
        </ul>

        <h2>Nyheter</h2>
        <ul>
          <li><a href="/nyheter/trek-fuel-ex-2025">Trek lanserer Fuel EX 2025</a> – Ny geometri med 64,5° styrevinkel, 140mm vandring foran og bak</li>
          <li><a href="/nyheter/specialized-priskutt">Specialized kutter priser</a> – Stumpjumper Comp ned fra 64.990 til 48.990 kr</li>
        </ul>
      </section>

      <section>
        <h2>Om MTB Test Norge</h2>
        <h3>Hva vi gjør</h3>
        <p>MTB Test Norge samler og sammenligner informasjon om terrengsykler og utstyr. Vi baserer vårt innhold på tekniske spesifikasjoner fra produsenter, offisiell produktinformasjon og tilgjengelig bransjekunnskap.</p>
        <h3>Hvordan vi jobber</h3>
        <ul>
          <li>Vi sammenligner tekniske data fra produsenter</li>
          <li>Vi presenterer faktabasert informasjon</li>
          <li>Vi viser tydelig når vi siterer kilder</li>
          <li>Vi utgir oss IKKE for å ha testet produkter selv</li>
        </ul>
      </section>

      <section>
        <h2>Viktig informasjon</h2>
        <p><strong>Innholdet på denne siden er ikke basert på fysiske produkttester.</strong> All informasjon er hentet fra produsentenes egne spesifikasjoner, offisielle produktsider og offentlig tilgjengelige kilder. Vi sammenligner og presenterer tekniske data for å hjelpe deg med å ta informerte valg.</p>
        <p><strong>Affiliate-lenker:</strong> MTB Test Norge inneholder lenker til partnere og forhandlere. Dersom du kjøper et produkt via en av våre lenker, kan vi motta en liten provisjon – uten ekstra kostnad for deg. Dette bidrar til å finansiere driften av nettstedet.</p>
        <p><strong>Prisene</strong> som vises kan variere og er hentet fra eksterne kilder. Vi anbefaler alltid å sjekke oppdatert pris hos forhandler før kjøp. Vi tar forbehold om eventuelle feil i tekniske spesifikasjoner eller prisinformasjon.</p>
      </section>
    </main>`),
  },
  {
    path: '/sammenligninger',
    title: 'Terrengsykkel-sammenligninger 2025 | MTB Test Norge',
    description: 'Sammenlign terrengsykler side om side. Tekniske spesifikasjoner, priser og egenskaper for de mest populære stisyklene.',
    keywords: 'terrengsykkel sammenligning, mtb test, stisykkel 2025',
    staticContent: wrap(`${nav}
      <nav aria-label="Breadcrumb"><a href="/">Hjem</a> › <a href="/sammenligninger">Sammenligninger</a></nav>
      <main>
        <h1>Terrengsykkel-sammenligninger</h1>
        <p>Sammenlign tekniske spesifikasjoner fra ulike produsenter. Faktabasert informasjon for å hjelpe deg velge riktig sykkel.</p>
        <p><strong>Viktig informasjon:</strong> Våre sammenligninger er basert på tekniske spesifikasjoner fra produsenter og forhandlere. Vi har ikke testet produktene selv.</p>

        <h2>Siste sammenligninger</h2>
        <ul>
          <li><a href="/sammenligninger/trek-fuel-ex-7">Trek Fuel EX 7 2024</a> – Trail. En solid allrounder med 140mm vandring foran og 130mm bak. Alpha Platinum Aluminum, RockShox Pike Select, Shimano Deore 12-speed, 14.2 kg. Pris: 35.000-45.000 kr.</li>
          <li><a href="/sammenligninger/specialized-stumpjumper">Specialized Stumpjumper Expert</a> – Trail. Karbonramme, Fox Factory 36, 150mm vandring, SRAM GX Eagle, 12.8 kg. Pris: 65.000-85.000 kr.</li>
          <li><a href="/sammenligninger/canyon-spectral">Canyon Spectral 125 CF 7</a> – Trail. CF Carbon, RockShox Pike Select+, 140mm foran/125mm bak, Shimano XT, 13.1 kg. Pris: 40.000-50.000 kr.</li>
          <li><a href="/sammenligninger/santa-cruz-hightower">Santa Cruz Hightower C S</a> – Trail. C Carbon, Fox 36 Performance, 150mm/145mm, VPP-demping, 13.6 kg. Pris: 70.000-90.000 kr.</li>
          <li><a href="/sammenligninger/yeti-sb130">Yeti SB130 T2</a> – Trail. Turq Carbon, Fox Factory 36 GRIP2, Switch Infinity-demping, 12.2 kg. Pris: 95.000-120.000 kr.</li>
          <li><a href="/sammenligninger/norco-fluid-fs">Norco Fluid FS 1</a> – Trail. 6061 Aluminum, Marzocchi Bomber Z2, Shimano Deore, 15.1 kg. Pris: 22.000-28.000 kr.</li>
        </ul>
      </main>`),
  },
  {
    path: '/guider',
    title: 'Terrengsykkel guider – Alt om MTB | MTB Test Norge',
    description: 'Lær alt om terrengsykling. Guider for nybegynnere og erfarne. Vedlikehold, teknikk, utstyr og stier i Norge.',
    keywords: 'mtb guide, terrengsykkel tips, mtb for nybegynnere, sykkelvedlikehold',
    staticContent: wrap(`${nav}
      <nav aria-label="Breadcrumb"><a href="/">Hjem</a> › <a href="/guider">Guider</a></nav>
      <main>
        <h1>Alt du trenger å vite om terrengsykling</h1>
        <p>Fra nybegynner til ekspert – våre omfattende guider hjelper deg på veien.</p>
        <ul>
          <li><a href="/guider/velg-riktig-terrengsykkel">Velg riktig terrengsykkel 2025</a> – Hardtail vs fulldemper, hjulstørrelser (27.5" vs 29"), geometri og prisklasser forklart. 8 min lesetid.</li>
          <li><a href="/guider/mtb-for-nybegynnere">MTB for nybegynnere – komplett guide</a> – Kom i gang med terrengsykling: teknikk, sikkerhet, utstyr og stier. 12 min lesetid.</li>
          <li><a href="/guider/vedlikehold">Vedlikehold av terrengsykkel</a> – Sjekkliste for vedlikehold etter tur, ukentlig, månedlig og årlig service. 10 min lesetid.</li>
          <li><a href="/guider/beste-stier-norge">Beste MTB-stier i Norge</a> – Tryvann, Hafjell, Trysil, Bergen, Voss, Tromsø, Lofoten og bikeparker. 15 min lesetid.</li>
          <li><a href="/guider/riktig-utstyr">Riktig utstyr til terrengsykling</a> – Hjelm, knebeskyttere, klær, sko, pedaler og ryggsekk. 9 min lesetid.</li>
          <li><a href="/guider/terrengsykkel-terminologi">Terrengsykkel-terminologi</a> – Ordliste: reach, stack, travel, dropper post, tubeless, enduro, XC og mer. 6 min lesetid.</li>
          <li><a href="/guider/mtb-geometri-forklart">Terrengsykkel-geometri forklart</a> – Reach, stack, styrevinkel, chainstay, setevinkel, wheelbase og BB drop. 14 min lesetid.</li>
          <li><a href="/guider/emtb-hardtail-vs-fulldemper">E-MTB: Hardtail eller fulldemper?</a> – Fordeler, ulemper, vedlikeholdskostnader og batteri/rekkevidde. 11 min lesetid.</li>
        </ul>
      </main>`),
  },
  {
    path: '/nyheter',
    title: 'MTB Nyheter Norge – Siste nytt om terrengsykling | MTB Test Norge',
    description: 'Siste nyheter om terrengsykling, nye sykler, komponenter og stier i Norge.',
    keywords: 'mtb nyheter, terrengsykkel nyheter, nye sykler 2025',
    staticContent: wrap(`${nav}
      <nav aria-label="Breadcrumb"><a href="/">Hjem</a> › <a href="/nyheter">Nyheter</a></nav>
      <main>
        <h1>Siste nytt fra MTB-verdenen</h1>
        <p>Produktnyheter, stiutbygging og alt annet du trenger å vite om terrengsykling.</p>
        <ul>
          <li><a href="/nyheter/trek-fuel-ex-2025">Trek lanserer Fuel EX 2025 – større endringer enn noensinne</a> – Ny geometri med 64,5° styrevinkel, 140mm vandring foran og bak, nytt RE:aktiv-dempersystem. Pris fra 44.990 kr. (28. desember 2024)</li>
          <li><a href="/nyheter/specialized-priskutt">Specialized kutter priser på utvalgte 2024-modeller</a> – Stumpjumper Comp ned fra 64.990 til 48.990 kr. Epic Comp nå 39.990 kr. (26. desember 2024)</li>
          <li><a href="/nyheter/trysil-stier">Nye stinettverk åpner i Trysil sommeren 2025</a> – 12 km flow-trail fra Trysilfjellet, 8 km teknisk sti, investering på 15 millioner kr. (23. desember 2024)</li>
          <li><a href="/nyheter/enduro-test">Spesifikasjonssammenligning: Årets enduro-sykler</a> – Santa Cruz Megatower, Specialized Enduro Expert, Trek Slash, Canyon Strive, YT Capra, Norco Range sammenlignet. (20. desember 2024)</li>
          <li><a href="/nyheter/canyon-oslo">Canyon åpner showroom i Oslo</a> – Showroom på Skøyen med prøvekjøring, bikefitting og service. Åpner 1. februar 2025. (18. desember 2024)</li>
          <li><a href="/nyheter/shimano-vs-sram">Shimano vs SRAM – teknisk sammenligning</a> – XTR Di2 vs XX Eagle AXS: elektronisk trådløs giring, vekt og pris sammenlignet. (15. desember 2024)</li>
          <li><a href="/nyheter/elsykkel-rekord">Bransjetall: Salgsrekord for el-terrengsykler i Norge</a> – 35% økning i 2024. Lettvekts e-MTB dominerer. Gjennomsnittspris 59.000 kr. (12. desember 2024)</li>
          <li><a href="/nyheter/varsesong-tips">Vårklargjøring av sykkel: Bransjeråd og anbefalinger</a> – Rengjøring, dempere, drivverk, bremser, dekk og boltesjekk. (10. desember 2024)</li>
          <li><a href="/nyheter/fox-36-2025">Fox lanserer ny 36-gaffel med GRIP X2-demping</a> – Ny demperpatron, 80g lettere, 140-160mm vandring. Pris: 12.499 kr. (15. januar 2025)</li>
          <li><a href="/nyheter/norco-range-2025">Norco avduker nye Range C og Sight C for 2025</a> – Range C: 170mm/165mm vandring, 63° styrevinkel. Fra 54.990 kr. (12. januar 2025)</li>
          <li><a href="/nyheter/sram-eagle-transmission">SRAM Eagle Transmission – ny standard for MTB-drivverk</a> – Eliminerer girwire, 49% bedre kjedestabilitet. Fra 8.999 kr. (10. januar 2025)</li>
          <li><a href="/nyheter/scott-spark-2025">Scott avduker ny Spark</a> – Farvel til TwinLoc, ny plattformdemper, 66° styrevinkel. Fra 39.990 kr. (3. januar 2025)</li>
        </ul>
      </main>`),
  },
];

// ============ BIKE COMPARISONS ============

interface BikeData {
  name: string;
  brand: string;
  category: string;
  desc: string;
  priceRange: string;
  shortDesc: string;
  manufacturerDesc: string;
  specs: Record<string, string>;
  strengths: string[];
  considerations: string[];
  suitableFor: string[];
}

const bikes: Record<string, BikeData> = {
  'trek-fuel-ex-7': {
    name: 'Trek Fuel EX 7 2024', brand: 'Trek', category: 'Trail',
    desc: 'Tekniske spesifikasjoner, pris og vurdering av Trek Fuel EX 7 – en allsidig trail-sykkel.',
    priceRange: 'Mellomklasse - 35.000-45.000 kr',
    shortDesc: 'En solid allrounder som treffer godt i mellomsjiktet. Med 140mm foran og 130mm bak får du nok vandring til å takle tekniske stier uten at sykkelen føles treg på klatringene.',
    manufacturerDesc: 'Trek Fuel EX 7 er en sykkel vi har fulgt med interesse over flere generasjoner. 2024-modellen representerer en modning av konseptet. Med 140mm vandring foran og 130mm bak plasserer Trek denne sykkelen midt i trail-segmentet. Alpha Platinum-aluminiumsrammen holder vekten nede på akseptable 14,2 kg. RockShox Pike Select-gaffelen er et solid valg i denne prisklassen. Shimano Deore 12-speed drivsystemet er arbeidshesten i bransjen – det fungerer pålitelig år etter år. Shimano MT520-bremsene med 4-stempels kalipere gir rikelig bremsekapasitet, og Bontrager XR4-dekkene er et fornuftig allroundvalg. For mange norske syklister representerer dette et godt kompromiss: Robust nok til steinete norske stier, effektiv nok til å komme seg opp igjen, og priset slik at man ikke får hjerteinfarkt når rammen får det første ripet.',
    specs: { 'Ramme': 'Alpha Platinum Aluminum', 'Gaffel': 'RockShox Pike Select, 140mm', 'Drivverk': 'Shimano Deore 12-speed', 'Bremser': 'Shimano MT520 4-piston', 'Hjul': 'Bontrager Line Comp 30, 29"', 'Vekt': '14.2 kg' },
    strengths: ['Velbalansert geometri som fungerer både opp og ned', 'Shimano Deore – en av de mest pålitelige drivverkene på markedet', 'RockShox Pike er en velprøvd og kapabel gaffel', 'Trek-forhandlernettverket i Norge gjør service enkelt'],
    considerations: ['14,2 kg er merkbart på lange klatringer', '130mm bak kan føles begrenset i røff bikepark-terreng', 'Aluminiumsrammen mangler karbonens vibrasjonsdempende egenskaper'],
    suitableFor: ['Trail', 'Stisykling', 'Allround MTB', 'Teknisk terreng'],
  },
  'specialized-stumpjumper': {
    name: 'Specialized Stumpjumper Expert', brand: 'Specialized', category: 'Trail',
    desc: 'Alt om Specialized Stumpjumper – spesifikasjoner, egenskaper og sammenligning.',
    priceRange: 'Premium - 65.000-85.000 kr',
    shortDesc: 'En av de mest ikoniske navnene innen terrengsykling, og Expert-varianten leverer på forventningene. Karbonramme, Fox Factory-demping og gjennomtenkt geometri.',
    manufacturerDesc: 'Stumpjumper har vært synonymt med terrengsykling siden 1981, og Expert-utgaven representerer sweet-spotten i serien. FACT 11m karbonrammen er Specializeds mellomsjikts-karbon, men dette er fortsatt en imponerende ramme. Med 150mm vandring foran og bak har Specialized beveget seg mot enduro-territoriet. Fox Factory 36-gaffelen med GRIP2-demping gir full kontroll over compression og rebound. SRAM GX Eagle håndterer giringen. SRAM Code RSC-bremsene har kraft til å stoppe på en femøring. Med 12,8 kg er dette en sykkel du faktisk kan klatre med.',
    specs: { 'Ramme': 'FACT 11m Carbon', 'Gaffel': 'Fox Factory 36, 150mm', 'Drivverk': 'SRAM GX Eagle 12-speed', 'Bremser': 'SRAM Code RSC', 'Hjul': 'Roval Traverse 29, Carbon', 'Vekt': '12.8 kg' },
    strengths: ['Fox Factory-demping gir eksepsjonell kontroll og justeringsmuligheter', '12,8 kg gjør den konkurransedyktig på vekt', 'SRAM Code RSC har bremsekapasitet i overflod', 'Stumpjumper-geometrien er velprøvd og forutsigbar'],
    considerations: ['Prisforskjellen til Comp-varianten er betydelig', 'Fox Factory-demping krever riktig oppsett for å skinne', 'Specialized-priser i Norge ligger ofte i øvre sjikt'],
    suitableFor: ['Trail', 'Enduro-light', 'Teknisk terreng', 'Erfarne ryttere'],
  },
  'canyon-spectral': {
    name: 'Canyon Spectral 125 CF 7', brand: 'Canyon', category: 'Trail',
    desc: 'Canyon Spectral sammenligning – tekniske data, pris og kjøreegenskaper.',
    priceRange: 'Mellomklasse - 40.000-50.000 kr',
    shortDesc: 'Canyons direktesalgsmodell betyr at du får karbonramme og solide komponenter til en pris som konkurrentene sliter med å matche. Effektiv på klatring, kapabel på nedkjøring.',
    manufacturerDesc: 'Canyon har bygget et imperium på å tilby mer sykkel for pengene. Karbonrammen er den samme som i dyrere modeller. 125mm vandring bak og 140mm foran er et XC-orientert stisykkelkompromiss. RockShox Pike Select+-gaffelen med Charger RC-dempere gir god kontroll. Shimano XT-drivsystemet er mange mekanikeres førstevalg. DT Swiss M1900 Spline-hjulene tåler norske forhold godt. Den store elefanten i rommet er at Canyon kun selger direkte – du kan ikke prøvesitte før kjøp.',
    specs: { 'Ramme': 'CF Carbon', 'Gaffel': 'RockShox Pike Select+, 140mm', 'Drivverk': 'Shimano XT 12-speed', 'Bremser': 'Shimano XT 4-piston', 'Hjul': 'DT Swiss M1900 Spline, 29"', 'Vekt': '13.1 kg' },
    strengths: ['Uslåelig verdi for en karbonramme', 'Shimano XT er industristandarden for pålitelighet', 'Effektiv på klatring takket være 125mm vandring', 'DT Swiss-hjul tåler hard bruk'],
    considerations: ['Ingen mulighet for prøvetur før kjøp', '125mm vandring kan føles kort i røft terreng', 'Begrenset fysisk support i Norge'],
    suitableFor: ['Trail', 'XC-orientert stisykling', 'Lange turer', 'Effektiv klatring'],
  },
  'santa-cruz-hightower': {
    name: 'Santa Cruz Hightower C S', brand: 'Santa Cruz', category: 'Trail',
    desc: 'Santa Cruz Hightower – premium trail-sykkel med VPP-demping. Spesifikasjoner og vurdering.',
    priceRange: 'Premium - 70.000-90.000 kr',
    shortDesc: 'Den californiske kultprodusenten leverer en stisykkel med 145mm vandring og deres legendariske VPP-demping. Livstidsgaranti på rammen er et statement om kvalitet.',
    manufacturerDesc: 'Santa Cruz har kultstatus i terrengsykkelmiljøet. VPP-dempersystemet (Virtual Pivot Point) er deres signaturteknologi – det balanserer pedaling-effektivitet med følsomhet på små slag. Med 145mm vandring bak og 150mm foran posisjonerer dette Hightower i øvre sjikt av trail-segmentet. C-karbonrammen har livstidsgaranti. Fox 36 Performance-gaffelen gir svært god ytelse. SRAM GX Eagle-drivsystemet fungerer utmerket. For norske forhold er 145/150mm vandring et godt valg.',
    specs: { 'Ramme': 'C Carbon', 'Gaffel': 'Fox 36 Performance, 150mm', 'Drivverk': 'SRAM GX Eagle 12-speed', 'Bremser': 'SRAM G2 RSC', 'Hjul': 'Race Face AR 30, 29"', 'Vekt': '13.6 kg' },
    strengths: ['VPP-dempersystemet er velprøvd og effektivt', 'Livstidsgaranti på rammen er sjeldent i bransjen', '145/150mm vandring treffer sweet-spotten for norske forhold', 'Fox 36-gaffelen er blant de beste i klassen'],
    considerations: ['Santa Cruz-priser ligger i øvre sjikt', 'Begrenset antall forhandlere i Norge', 'C-karbonen er tyngre enn CC-varianten'],
    suitableFor: ['Trail', 'All-mountain', 'Teknisk terreng', 'Lange nedkjøringer'],
  },
  'yeti-sb130': {
    name: 'Yeti SB130 T2', brand: 'Yeti', category: 'Trail',
    desc: 'Yeti SB130 med Switch Infinity-plattform – tekniske detaljer og sammenligning.',
    priceRange: 'Ultra-Premium - 95.000-120.000 kr',
    shortDesc: 'For de som krever det absolutt beste. Yetis Turq-karbon, Switch Infinity-demping og Fox Factory-komponenter i en pakke som definerer ultra-premium segmentet.',
    manufacturerDesc: 'Yeti SB130 T2 er ikke en sykkel for alle – den er for de som søker det beste. Turq-karbonrammen gir en komplett vekt på 12,2 kg. Switch Infinity-dempersystemet bruker en lineær skinne som eliminerer friksjon og gir ekstremt sensitivt dempersystem. Fox Factory 36 GRIP2-gaffelen og Float X Factory-demperen representerer det beste Fox tilbyr. SRAM X01 Eagle er lettere enn GX med mer polerte girskift. DT Swiss XMC 1200 karbonhjul sparer roterende masse.',
    specs: { 'Ramme': 'Turq Carbon', 'Gaffel': 'Fox Factory 36 GRIP2, 150mm', 'Drivverk': 'SRAM X01 Eagle 12-speed', 'Bremser': 'SRAM Code RSC', 'Hjul': 'DT Swiss XMC 1200, Carbon', 'Vekt': '12.2 kg' },
    strengths: ['Turq-karbonrammen er blant de letteste og stiveste på markedet', 'Switch Infinity er et unikt og velprøvd dempersystem', '12,2 kg for en fulldemper er eksepsjonelt', 'Fox Factory-komponenter gir maksimal justerbarhet'],
    considerations: ['Prisen plasserer denne utenfor rekkevidde for de fleste', 'Switch Infinity-teknologien krever Yeti-spesifikk ekspertise ved service', 'Nesten umulig å forsvare økonomisk vs. billigere alternativer'],
    suitableFor: ['Trail', 'Entusiaster', 'Konkurranseorientert sykling', 'Premium-segmentet'],
  },
  'norco-fluid-fs': {
    name: 'Norco Fluid FS 1', brand: 'Norco', category: 'Trail',
    desc: 'Norco Fluid FS – rimelig fulldemper for stisykling. Spesifikasjoner og pris.',
    priceRange: 'Budsjett - 22.000-28.000 kr',
    shortDesc: 'Fulldempet terrengsykkel til en pris som ikke ruinerer deg. Norco har pakket mye verdi inn i denne inngangsmodellen uten å kutte hjørner på det som betyr mest.',
    manufacturerDesc: 'For mange er spørsmålet ikke "hvilken drømmesykkel skal jeg kjøpe?", men "hvordan får jeg mest mulig sykkel for budsjettet mitt?". Aluminiumsrammen har moderne geometri med slakk styrevinkel og lang reach. 130mm vandring foran og bak er nok for det meste. Marzocchi Bomber Z2-gaffelen overpresterer i prisklassen. Fox Float DPS-demperen bak fungerer godt for målgruppen. Shimano Deore-drivsystemet er det samme du finner på sykler som koster dobbelt så mye. MT420-bremsene med 4-stempels kalipere gir rikelig bremsekapasitet. 15,1 kg er merkbart tyngre enn premium-alternativer, men for inngang til fulldemper-verdenen representerer Fluid FS 1 et fornuftig kompromiss.',
    specs: { 'Ramme': '6061 Aluminum', 'Gaffel': 'Marzocchi Bomber Z2, 130mm', 'Drivverk': 'Shimano Deore 12-speed', 'Bremser': 'Shimano MT420 4-piston', 'Hjul': 'WTB ST i30 TCS, 29"', 'Vekt': '15.1 kg' },
    strengths: ['Uslåelig pris for en kapabel fulldemper', 'Marzocchi Bomber Z2 overpresterer i prisklassen', 'Shimano Deore er uknuselig pålitelig', 'Moderne geometri på tross av budsjettprisen'],
    considerations: ['15,1 kg merkes på lange klatringer', 'Enklere justeringsmuligheter enn dyrere alternativer', 'Vil bli utkonkurrert i røft terreng av sykler med mer vandring'],
    suitableFor: ['Trail', 'Nybegynnere', 'Budsjettbevisste', 'Inngang til stisykling'],
  },
};

function generateBikeContent(id: string, b: BikeData): string {
  return wrap(`${nav}
    <nav aria-label="Breadcrumb"><a href="/">Hjem</a> › <a href="/sammenligninger">Sammenligninger</a> › ${b.name}</nav>
    <main><article>
      <h1>${b.name} – Spesifikasjoner og sammenligning</h1>
      <p><strong>Kategori:</strong> ${b.category} | <strong>Prisklasse:</strong> ${b.priceRange}</p>
      <p>${b.shortDesc}</p>

      <h2>Om ${b.name}</h2>
      <p>${b.manufacturerDesc}</p>

      <h2>Tekniske spesifikasjoner</h2>
      <table><thead><tr><th>Komponent</th><th>Spesifikasjon</th></tr></thead><tbody>${Object.entries(b.specs).map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}</tbody></table>

      <h2>Styrker</h2>
      <ul>${b.strengths.map(s => `<li>${s}</li>`).join('')}</ul>

      <h2>Vurderinger</h2>
      <ul>${b.considerations.map(c => `<li>${c}</li>`).join('')}</ul>

      <h2>Passer for</h2>
      <p>${b.suitableFor.join(', ')}</p>

      <h2>Ofte stilte spørsmål om ${b.name}</h2>
      <dl>
        <dt>Hva koster ${b.name}?</dt>
        <dd>${b.name} ligger i prisklassen ${b.priceRange} basert på produsentens veiledende pris i Norge.</dd>
        <dt>Hva slags terreng passer ${b.name} for?</dt>
        <dd>${b.name} er best egnet for ${b.suitableFor.join(', ').toLowerCase()}.</dd>
        <dt>Hvor mye veier ${b.name}?</dt>
        <dd>Ifølge produsentens spesifikasjoner veier ${b.name} ${b.specs['Vekt']}.</dd>
        <dt>Hvilke bremser har ${b.name}?</dt>
        <dd>${b.name} er utstyrt med ${b.specs['Bremser']}.</dd>
      </dl>

      <p><a href="/sammenligninger">Se alle sammenligninger</a></p>
    </article></main>`);
}

// ============ GUIDES ============

interface GuideData {
  title: string;
  desc: string;
  content: string; // key paragraphs and headings as HTML
}

const guides: Record<string, GuideData> = {
  'velg-riktig-terrengsykkel': {
    title: 'Velg riktig terrengsykkel 2025',
    desc: 'Hardtail vs fulldemper, hjulstørrelser og geometri forklart. Komplett guide til å velge terrengsykkel.',
    content: `<h2>Introduksjon</h2>
      <p>Å velge riktig terrengsykkel kan virke overveldende med alle valgmulighetene som finnes på markedet i dag. Denne guiden hjelper deg å navigere gjennom de viktigste beslutningene du må ta når du skal kjøpe din neste stisykkel.</p>

      <h2>Hardtail vs Fulldemper</h2>
      <h3>Hardtail</h3>
      <p>En hardtail har kun demping foran (i gaffelen) og en stiv bakramme. Fordeler: lavere vekt, enklere vedlikehold, bedre kraftoverføring, lavere pris. Ideell for nybegynnere, XC-orientert sykling og mindre teknisk terreng.</p>
      <h3>Fulldemper</h3>
      <p>En fulldemper har demping både foran og bak. Fordeler: bedre komfort, økt grep, mer kontroll, høyere hastighet i røft terreng. Passer best for tekniske stier, lengre nedkjøringer og bikeparker.</p>

      <h2>Hjulstørrelser</h2>
      <p><strong>29-tommers hjul:</strong> Det mest populære valget i dag. Store hjul ruller lettere over hindringer og holder bedre fart. Passer de fleste ryttere over 165 cm.</p>
      <p><strong>27.5-tommers hjul:</strong> Mer kvikke og lekne enn 29ere. Bedre for mindre ryttere og de som prioriterer manøvrerbarhet.</p>
      <p><strong>Mullet (miksede hjul):</strong> 29" foran og 27.5" bak. God rullemotstand foran og kvikk bakende. Stadig mer populært.</p>

      <h2>Geometri forklart</h2>
      <p>Moderne terrengsykler har gjennomgått en geometri-revolusjon. Styrevinkel (65-66° for stabilitet, 68-70° for klatring), Reach (horisontal avstand fra krank til styrerør), og Setevinkel (76-78° for effektiv klatring) er de viktigste målingene.</p>

      <h2>Prisklasser</h2>
      <ul>
        <li><strong>Budsjett (15.000-25.000 kr):</strong> Gode hardtails og enkle fulldempere. Aluminiumsramme med Shimano Deore.</li>
        <li><strong>Mellomklasse (25.000-50.000 kr):</strong> Seriøse fulldempere med god demping og XT-nivå deler.</li>
        <li><strong>Premium (50.000-80.000 kr):</strong> Karbonrammer, Fox/RockShox-demping i høyere serier.</li>
        <li><strong>Ultra-premium (80.000+ kr):</strong> Toppspesifiserte sykler med de letteste komponentene.</li>
      </ul>

      <h2>Konklusjon</h2>
      <p>Det finnes ingen "perfekt" terrengsykkel – bare den sykkelen som passer best for deg. Tenk gjennom terreng, budsjett, vekt vs komfort, og om du vil kjøre konkurranser eller bare ha det gøy.</p>

      <h2>Ofte stilte spørsmål</h2>
      <dl>
        <dt>Bør jeg velge hardtail eller fulldemper som nybegynner?</dt>
        <dd>De fleste nybegynnere har mest nytte av en hardtail. Den er rimeligere, enklere å vedlikeholde, og tvinger deg til å lære god teknikk. Når du vet hva slags sykling du foretrekker, kan du oppgradere til fulldemper.</dd>
        <dt>Er 29" hjul alltid bedre enn 27.5"?</dt>
        <dd>Nei, det avhenger av kroppshøyde og kjørestil. 29" passer de fleste over 165 cm, men 27.5" kan være bedre for kortere ryttere eller de som prioriterer lekenhet.</dd>
        <dt>Hva er et rimelig budsjett for en første terrengsykkel?</dt>
        <dd>En hardtail i prisklassen 15.000-25.000 kr gir deg en solid sykkel med pålitelige komponenter som Shimano Deore-drivverk.</dd>
      </dl>`,
  },
  'mtb-for-nybegynnere': {
    title: 'MTB for nybegynnere – komplett guide',
    desc: 'Alt du må vite før du starter med terrengsykling. Teknikk, sikkerhet, utstyr og tips.',
    content: `<h2>Kom i gang</h2>
      <p>Terrengsykling er en fantastisk sport som kombinerer trening, naturopplevelser og ren glede. Som nybegynner trenger du ikke den dyreste sykkelen – en god hardtail i mellomklassen gir deg alt du trenger.</p>
      <p>I tillegg til sykkelen trenger du: hjelm (obligatorisk!), hansker, sykkelbriller, passende klær, vann og mat, og reparasjonsutstyr (slange, pumpe, multitool).</p>

      <h2>Grunnleggende teknikk</h2>
      <p><strong>Kroppsstilling:</strong> Hold albuer og knær lett bøyd. La sykkelen bevege seg under deg mens kroppen forblir stabil.</p>
      <p><strong>Blikk:</strong> Se dit du vil – ikke på hindringene. Sykkelen følger blikket ditt.</p>
      <p><strong>Bremsing:</strong> Bruk begge bremser. Forbremsen er mest effektiv. Flytt vekten bakover i bratte nedkjøringer.</p>
      <p><strong>Giring:</strong> Lær å forutse terrenget og gir ned i god tid før bakker.</p>

      <h2>Sikkerhet først</h2>
      <ul>
        <li>Bruk alltid hjelm – ingen unntak</li>
        <li>Start enkelt – velg stier som matcher ferdighetsnivået</li>
        <li>Kjør med andre, spesielt i begynnelsen</li>
        <li>Fortell noen hvor du er</li>
        <li>Ha med telefon for nødsituasjoner</li>
      </ul>

      <h2>Finn stier</h2>
      <p>Apper som Trailforks, Strava og MTB Project hjelper deg finne stier. Bli medlem i en lokal sykkelklubb for guidede turer. Bikeparker (Hafjell, Trysil, Nesbyen) har tilrettelagte stier for alle nivåer.</p>

      <h2>Bygg opp styrke</h2>
      <p>Start med kortere turer (1-2 timer), øk gradvis, hvil mellom turene, og supplér med styrketrening for core og bein.</p>

      <h2>Ofte stilte spørsmål</h2>
      <dl>
        <dt>Hva er den beste alderen for å starte med terrengsykling?</dt>
        <dd>Det finnes ingen aldersgrense. Barn kan starte i bikeparker med tilrettelagte stier, og voksne i alle aldre kan ha glede av sporten.</dd>
        <dt>Trenger jeg å være i god form for å starte?</dt>
        <dd>Nei, kondisjon og styrke kommer naturlig med regelmessig sykling. Start med enkle stier og korte turer.</dd>
      </dl>`,
  },
  'vedlikehold': {
    title: 'Vedlikehold av terrengsykkel',
    desc: 'Hold sykkelen din i toppform hele sesongen. Etter tur, ukentlig, månedlig og årlig service.',
    content: `<h2>Etter hver tur</h2>
      <p>Skyll av grov skitt med vann (unngå høytrykk på lager og tetninger). Sjekk dekk for kutt, kontroller bremser, se etter løse bolter. Påfør kjedeolje etter våte turer.</p>

      <h2>Ukentlig vedlikehold (15-20 minutter)</h2>
      <p><strong>Kjede:</strong> Rengjør med avfetter, tørk av, påfør ny olje. <strong>Bremser:</strong> Sjekk belegg, rengjør skiver. <strong>Dekk:</strong> Sjekk lufttrykk og slitasje. <strong>Gir:</strong> Sjekk at girene skifter rent, juster kabelstramming.</p>

      <h2>Månedlig service</h2>
      <p><strong>Suspensjon:</strong> Rengjør dempestag, sjekk lufttrykk. <strong>Bolter:</strong> Gå gjennom alle bolter med momentnøkkel – spesielt stem, styre, krank, bremsecalipere. <strong>Hjul:</strong> Sjekk eikerspenning. <strong>Lager:</strong> Kjenn etter spill i hodelager, kranklager og nav.</p>

      <h2>Årlig hovedservice</h2>
      <p>Full demontering og inspeksjon av ramme. Suspensjon-service med oljeskift (anbefales hos verksted). Drivverk: bytt kjede, kassett og kjedeblad ved behov. Bremser: lufting og bremsevæskeskift.</p>

      <h2>Verktøykassen din</h2>
      <p>Grunnleggende verktøy: Unbrakonøkler (2-8mm), momentnøkkel, kjedeverktøy og kjedepisk, dekkjern, pumpe med manometer, avfetter og kjedeolje, multitool.</p>

      <h2>Ofte stilte spørsmål</h2>
      <dl>
        <dt>Hvor ofte bør kjeden byttes?</dt>
        <dd>Bruk en kjedemåler – når den viser 0,5% slitasje bør kjeden byttes. For de fleste er dette 1-2 ganger per sesong.</dd>
        <dt>Kan jeg bruke høytrykksspyler på sykkelen?</dt>
        <dd>Unngå høytrykk rundt lager, tetninger og dempere. Bruk lav trykk eller hageslange.</dd>
      </dl>`,
  },
  'beste-stier-norge': {
    title: 'Beste MTB-stier i Norge',
    desc: 'Populære destinasjoner for terrengsykling i Norge. Østlandet, Vestlandet, Trøndelag og mer.',
    content: `<h2>Østlandet</h2>
      <h3>Tryvann, Oslo</h3>
      <p>Norges mest besøkte MTB-destinasjon. Wyller-løypa og Linderudkollen er klassikere. Tryvann bikepark har liftet sykling hele sommeren med stier for alle nivåer.</p>
      <h3>Ringkollen, Hønefoss</h3>
      <p>Godt alternativ til Oslo-marka med færre syklister. Flyt-stier og tekniske seksjoner i variert terreng.</p>
      <h3>Hafjell</h3>
      <p>Skandinavias største bikepark med over 40 traseer. Alt fra grønne nybegynnertraseer til World Cup-standard Olympialøypa.</p>

      <h2>Vestlandet</h2>
      <h3>Bergen og omegn</h3>
      <p>Fløyen og Ulriken med utsikt over byen. Terrenget er preget av røtter og stein.</p>
      <h3>Voss</h3>
      <p>Ekstremsporthovedstaden. Hangurstoppen og Voss Resort med liftet sykling om sommeren.</p>

      <h2>Trøndelag</h2>
      <p>Trondheim: Bymarka og Estenstadmarka, Lianvatnet og Gråkallen. Oppdal: Alpint fjellterreng med lange nedkjøringer.</p>

      <h2>Sørlandet</h2>
      <p>Kristiansand: Baneheia og Ravnedalen. Evje/Setesdal for eventyrlig terreng.</p>

      <h2>Nord-Norge</h2>
      <p>Tromsø: Midnattssol-sykling på Fløya og Kvaløya. Lofoten: Kanskje Norges vakreste kulisse – Henningsvær og Svolvær.</p>

      <h2>Bikeparker i Norge</h2>
      <ol>
        <li>Hafjell – Størst i Skandinavia, over 40 traseer</li>
        <li>Trysil – Godt utbygde flow-trails</li>
        <li>Geilo – Teknisk og utfordrende terreng</li>
        <li>Nesbyen – Graderte stier for familier</li>
        <li>Oppdal – Alpint fjellterreng</li>
      </ol>

      <h2>Ofte stilte spørsmål</h2>
      <dl>
        <dt>Hvilken bikepark er best for nybegynnere?</dt>
        <dd>Nesbyen og Hafjell har gode grønne traseer og sykkelutleie, noe som gjør dem ideelle for nybegynnere.</dd>
        <dt>Kan man sykle terreng i Nord-Norge?</dt>
        <dd>Ja, Tromsø og Lofoten har fantastiske muligheter. Midnattssol-sykling i Tromsø er en unik opplevelse.</dd>
      </dl>`,
  },
  'riktig-utstyr': {
    title: 'Riktig utstyr til terrengsykling',
    desc: 'Hjelm, beskyttelse, klær og tilbehør du trenger for å sykle terreng trygt og komfortabelt.',
    content: `<h2>Hjelm</h2>
      <p>Hjelmen er det viktigste utstyret. Typer: XC/Trail-hjelm (lett, ventilert), Enduro-hjelm (mer dekning), Fullface (bikepark), Konvertibel (avtakbar halebeskyttelse). Se etter MIPS rotasjonsbeskyttelse og god passform.</p>

      <h2>Beskyttelse</h2>
      <p>Knebeskyttere (nesten obligatorisk), albuebeskyttere, brystbeskyttelse for bikepark, ryggbeskytter for aggressive kjørestiler.</p>

      <h2>Klær</h2>
      <p>Overdel: Pustende sykkeltrøye, lett vindjakke, vanntett regnjakke. Underdel: Sykkelshorts med padding under baggy shorts. Lag-på-lag for temperaturregulering.</p>

      <h2>Sko og pedaler</h2>
      <p>Flate pedaler: Enklere å hoppe av, bra for teknikklæring. Klikkpedaler (SPD): Bedre kraftoverføring. Velg sko med stiv såle og godt grep.</p>

      <h2>Tilbehør</h2>
      <p>Briller, hansker, frontlys (1000+ lumen for skog), multitool, pumpe, slange/lappesaker, kjedelås.</p>

      <h2>Ryggsekk</h2>
      <p>8-15 liter for dagstur. Væskeblære-kompatibel, ventilert ryggpanel, hjelm-feste. Populære modeller: Camelbak MULE, Osprey Raptor, Evoc Trail Pro.</p>

      <h2>Ofte stilte spørsmål</h2>
      <dl>
        <dt>Trenger jeg fullface-hjelm for stisykling?</dt>
        <dd>For vanlig stisykling holder en god trail-hjelm med MIPS. Fullface anbefales for bikepark og aggressive nedkjøringer.</dd>
        <dt>Flate pedaler eller klikkpedaler for nybegynnere?</dt>
        <dd>Flate pedaler anbefales for nybegynnere. De gjør det enklere å hoppe av og hjelper deg lære riktig teknikk.</dd>
      </dl>`,
  },
  'terrengsykkel-terminologi': {
    title: 'Terrengsykkel-terminologi',
    desc: 'Ordliste over MTB-begreper: travel, geometry, dropper post, reach, stack og mer.',
    content: `<h2>Ramme og geometri</h2>
      <dl>
        <dt>Reach</dt><dd>Horisontal avstand fra midten av kranken til toppen av styrerøret. Lengre reach = mer stabil sykkel.</dd>
        <dt>Stack</dt><dd>Vertikal avstand fra midten av kranken til toppen av styrerøret. Høyere stack = mer oppreist sittestilling.</dd>
        <dt>Styrevinkel (Head angle)</dt><dd>Vinkelen på gaffelen målt fra bakken. Slakkere vinkel = mer stabil i bratt terreng.</dd>
        <dt>Setevinkel (Seat angle)</dt><dd>Vinkelen på seterøret. Brattere vinkel = bedre klatreposisjon.</dd>
        <dt>Chainstay</dt><dd>Lengden fra kranken til baknavet. Kortere = mer leken, lengre = mer stabil.</dd>
        <dt>Wheelbase</dt><dd>Total lengde fra forhjul til bakhjul. Lengre = mer stabil i fart.</dd>
        <dt>BB drop/height</dt><dd>Hvor lavt kranken sitter. Lavere = lavere tyngdepunkt.</dd>
        <dt>Hardtail</dt><dd>Sykkel uten bakdemper – kun demping i gaffelen.</dd>
        <dt>Fulldemper</dt><dd>Sykkel med demping både foran og bak.</dd>
      </dl>

      <h2>Suspensjon</h2>
      <dl>
        <dt>Travel/Vandring</dt><dd>Hvor langt demperen kan komprimeres, i mm.</dd>
        <dt>Rebound</dt><dd>Hastigheten demperen returnerer til utgangsposisjonen.</dd>
        <dt>Compression</dt><dd>Motstand mot inntrykking av demperen.</dd>
        <dt>Sag</dt><dd>Hvor mye demperen synker inn med rytterens vekt. Vanligvis 25-30%.</dd>
        <dt>Lockout</dt><dd>Låser demperen for effektiv klatring.</dd>
      </dl>

      <h2>Drivverk</h2>
      <dl>
        <dt>Drivetrain</dt><dd>Alle delene som overfører kraft: kranker, kjede, kassett, girskiftere.</dd>
        <dt>1x (one-by)</dt><dd>Drivverk med kun ett kjedeblad foran.</dd>
        <dt>Narrow-wide</dt><dd>Kjedeblad-profil som holder kjeden på plass uten fremre derailleur.</dd>
        <dt>Clutch derailleur</dt><dd>Bakgir med demping som holder kjeden stram.</dd>
      </dl>

      <h2>Hjul og dekk</h2>
      <dl>
        <dt>29er</dt><dd>29-tommers hjul (622mm felgdiameter).</dd>
        <dt>27.5 / 650b</dt><dd>27.5-tommers hjul (584mm).</dd>
        <dt>Mullet</dt><dd>29" foran og 27.5" bak.</dd>
        <dt>Tubeless</dt><dd>Dekk uten slange, med tetningsmasse.</dd>
        <dt>Boost spacing</dt><dd>Bredere nav-standard (110mm foran, 148mm bak) for stivere hjul.</dd>
      </dl>

      <h2>Bremser</h2>
      <dl>
        <dt>Hydrauliske skivebremser</dt><dd>Standard for moderne MTB – bruker væske for kraftoverføring.</dd>
        <dt>2-pot/4-pot</dt><dd>Antall stempler i bremsecaliper. Flere = mer kraft.</dd>
        <dt>Modulation</dt><dd>Finjustert kontroll over bremsekraften.</dd>
      </dl>

      <h2>Diverse</h2>
      <dl>
        <dt>Dropper post</dt><dd>Setepinne som senkes/heves med en knapp på styret.</dd>
        <dt>Enduro</dt><dd>Konkurranseform med tidtatte nedkjøringer og ubestemte klatringer.</dd>
        <dt>XC (Cross-country)</dt><dd>Kondisjonsorientert sykling med vekt på effektivitet.</dd>
        <dt>Trail</dt><dd>Allround stisykling – den mest populære kategorien.</dd>
        <dt>Flow trail</dt><dd>Sti bygget for jevn fart med svinger og hopp.</dd>
      </dl>`,
  },
  'mtb-geometri-forklart': {
    title: 'Terrengsykkel-geometri forklart',
    desc: 'Forstå geometritabellen: reach, stack, styrevinkel, chainstay og mer – og hva det betyr for kjøreegenskapene.',
    content: `<h2>Kort historikk</h2>
      <p>Terrengsykkelgeometri har gjennomgått en dramatisk utvikling. Fra 1970-tallets modifiserte strandcruisere til dagens avanserte beregninger. De siste ti årene har syklene blitt lengre, lavere og slakkere.</p>

      <h2>Reach</h2>
      <p>Kanskje det viktigste tallet i en moderne geometritabell. Horisontal avstand fra krank til styrerørets topp. XC-sykler: 420-445 mm. Trail: 440-470 mm. Enduro/DH: 460-500 mm (størrelse M). Lengre sykkel = mer stabil, men tregere i trange svinger.</p>

      <h2>Stack</h2>
      <p>Vertikal avstand fra krank til styrerørets topp. XC: 570-590 mm (aggressiv posisjon). Trail: 600-620 mm (balansert). Enduro/DH: 620-640 mm (oppreist for bratte nedkjøringer).</p>

      <h2>Styrevinkel (Head angle)</h2>
      <p>Slakk vinkel (63-65°): Treigere, stabil styring for bratt terreng og høy fart. Bratt vinkel (67-70°): Kvikkere styring, mer effektiv klatring. Trail-sykler: 64-67°. Bare én grad endring gir merkbar forskjell.</p>

      <h2>Chainstay-lengde</h2>
      <p>Kort (420-435 mm): Lettere å løfte forhjulet, mer lekent. Lang (435-450 mm): Mer stabil, bedre vektfordeling i bratt terreng. Mullet-oppsett gir fordelen av kort chainstay med 29" foran.</p>

      <h2>Setevinkel</h2>
      <p>Bratt (76-78°): Bedre klatreposisjon. Slakkere (73-75°): Mer komfortabelt på flatt. Moderne sykler har generelt brattere setevinkler enn før.</p>

      <h2>Wheelbase</h2>
      <p>XC: 1140-1170 mm. Trail: 1180-1220 mm. Enduro: 1220-1260 mm. DH: 1250-1290 mm. Lengre = mer stabil, kortere = mer manøvrerbar.</p>

      <h2>BB drop og tyngdepunkt</h2>
      <p>Mer BB drop = lavere tyngdepunkt = bedre stabilitet i svinger. Men økt risiko for pedal strikes. XC: 25-30 mm. Trail/Enduro: 30-40 mm.</p>

      <h2>Geometri-sammenligning: XC vs Trail vs Enduro</h2>
      <table>
        <thead><tr><th>Mål (str M)</th><th>XC</th><th>Trail</th><th>Enduro</th></tr></thead>
        <tbody>
          <tr><td>Styrevinkel</td><td>68-69°</td><td>64-66°</td><td>63-65°</td></tr>
          <tr><td>Setevinkel</td><td>74-76°</td><td>76-78°</td><td>77-79°</td></tr>
          <tr><td>Reach</td><td>430-445 mm</td><td>450-470 mm</td><td>465-490 mm</td></tr>
          <tr><td>Stack</td><td>575-590 mm</td><td>600-620 mm</td><td>620-640 mm</td></tr>
          <tr><td>Chainstay</td><td>430-440 mm</td><td>430-440 mm</td><td>435-450 mm</td></tr>
        </tbody>
      </table>

      <h2>Ofte stilte spørsmål</h2>
      <dl>
        <dt>Hva er viktigst: reach eller wheelbase?</dt>
        <dd>Reach er det mest relevante tallet for passform og kjørefølelse. Wheelbase er summen av alle målinger og gir et overordnet bilde.</dd>
        <dt>Betyr 1° forskjell i styrevinkel noe?</dt>
        <dd>Ja, absolutt. 1° endring i styrevinkel er merkbar og påvirker stabiliteten og kvikkheten til sykkelen.</dd>
      </dl>`,
  },
  'emtb-hardtail-vs-fulldemper': {
    title: 'E-MTB: Hardtail eller fulldemper?',
    desc: 'Hardtail vs fulldemper elsykkel – fordeler, ulemper, vedlikehold og hva som passer din kjørestil.',
    content: `<h2>Forstå forskjellen</h2>
      <p>En hardtail e-MTB har demping kun foran, mens fulldemper har demping foran og bak. Denne forskjellen endrer kjøreopplevelsen fundamentalt – effektivitet, vekt, komfort og håndtering.</p>

      <h2>Hardtail e-MTB</h2>
      <p>Fordeler: Rimeligere, enklere vedlikehold, mer effektiv på jevnt underlag, lengre batterirekkevidde, allsidig hverdagssykkel. Passer for nybegynnere, pendling kombinert med stisykling, moderat terreng.</p>

      <h2>Fulldemper e-MTB</h2>
      <p>Mellomlang vandring (130-150 mm): Allround trail-sykler. Lang vandring (160-180 mm): Enduro-orienterte sykler. Ulempe: Bakdemper krever service minst årlig, rammelager må sjekkes jevnlig. Høyere servicekostnader over tid.</p>

      <h2>Terreng og kjørestil</h2>
      <p><strong>Hardtail fungerer best på:</strong> Asfalt og grusvei, skogsstier, pendling, lengre turer. <strong>Fulldemper fungerer best på:</strong> Tekniske stier med røtter og steiner, bratte nedkjøringer, bikeparker.</p>

      <h2>Batteri og rekkevidde</h2>
      <p>Fulldemper bruker typisk litt mer batteri enn hardtail. Tips for å maksimere rekkevidde: Sjekk lufttrykk i demper og dekk, bruk lockout på jevnt underlag, velg riktig assistansenivå, hold kjeden ren.</p>

      <h2>Vedlikehold og kostnader</h2>
      <p><strong>Hardtail e-MTB:</strong> Estimert årlig servicekostnad 1.500-3.000 kr. Gaffelservice 1-2 ganger årlig.</p>
      <p><strong>Fulldemper e-MTB:</strong> Estimert årlig servicekostnad 3.000-6.000 kr. Gaffel + bakdemper service, rammelager/bøssinger.</p>

      <h2>Velg riktig for deg</h2>
      <p><strong>Velg hardtail hvis:</strong> Du er ny, vil pendle, begrenset budsjett, foretrekker enkelt vedlikehold, sykler mest på grus.</p>
      <p><strong>Velg fulldemper hvis:</strong> Du vil satse på teknisk stisykling, har tilgang til bratte stier og bikeparker, komfort er viktig, villig til å investere i service.</p>

      <h2>Ofte stilte spørsmål</h2>
      <dl>
        <dt>Hvor mye kortere rekkevidde har fulldemper vs hardtail?</dt>
        <dd>Forskjellen er typisk 5-15% mindre rekkevidde for fulldemper, avhengig av terreng og demperinnstillinger. Forskjellen blir stadig mindre med nyere teknologi.</dd>
        <dt>Kan jeg bruke en hardtail e-MTB i bikepark?</dt>
        <dd>På grønne og blå traseer ja, men for tekniske og bratte stier anbefales fulldemper for både komfort og sikkerhet.</dd>
      </dl>`,
  },
};

function generateGuideContent(id: string, g: GuideData): string {
  return wrap(`${nav}
    <nav aria-label="Breadcrumb"><a href="/">Hjem</a> › <a href="/guider">Guider</a> › ${g.title}</nav>
    <main><article>
      <h1>${g.title}</h1>
      <p>${g.desc}</p>
      ${g.content}
      <p><a href="/guider">Se alle guider</a></p>
    </article></main>`);
}

// ============ NEWS ============

interface NewsData {
  title: string;
  desc: string;
  content: string; // key paragraphs as HTML
  date: string;
}

const news: Record<string, NewsData> = {
  'trek-fuel-ex-2025': {
    title: 'Trek lanserer Fuel EX 2025 – større endringer enn noensinne',
    desc: 'Trek lanserer ny Fuel EX med oppdatert geometri og forbedret demping for 2025-sesongen.',
    date: '28. desember 2024',
    content: `<h2>Helt ny geometri</h2>
      <p>Ifølge Treks pressemelding har den nye modellen styrevinkel på 64,5 grader – 1,5 grader slakkere enn forgjengeren. Reach har økt med 15mm på alle størrelser. Setevinkel er 77 grader. Chainstay-lengden er justerbar mellom 435 og 445mm.</p>
      <h2>Oppdatert dempersystem</h2>
      <p>Fuel EX 2025 kommer med 140mm vandring foran og bak – en økning på 10mm bak. Nytt RE:aktiv-dempersystem lover bedre småstøtsensitivitet. Ny "Mino Link" for geometrijustering.</p>
      <h2>Pris og tilgjengelighet</h2>
      <p>Aluminiumsversjonen med Shimano Deore starter på 44.990 kr. Toppmodellen med karbonramme og SRAM XX Eagle: 129.990 kr. I norske butikker fra mars 2025.</p>`,
  },
  'specialized-priskutt': {
    title: 'Specialized kutter priser på utvalgte 2024-modeller',
    desc: 'Specialized reduserer prisene på flere populære modeller i Norge.',
    date: '26. desember 2024',
    content: `<h2>Store besparelser på Stumpjumper</h2>
      <p>Stumpjumper Comp ned fra 64.990 til 48.990 kr – en besparelse på 16.000 kr. Aluminiumsversjonen fra 39.990 til 29.990 kr.</p>
      <h2>Epic for under 40.000</h2>
      <p>Epic Comp nå priset til 39.990 kr, ned fra 54.990 kr.</p>
      <h2>Begrenset beholdning</h2>
      <p>Rabattene gjelder så langt lageret rekker. Enkelte størrelser allerede utsolgt.</p>`,
  },
  'trysil-stier': {
    title: 'Nye stinettverk åpner i Trysil sommeren 2025',
    desc: 'Trysil utvider stinettverket med nye flow trails og tekniske stier for 2025.',
    date: '23. desember 2024',
    content: `<h2>Flow trail fra toppen</h2>
      <p>12 km lang flow-trail fra Trysilfjellet med over 700 meter høydeforskjell.</p>
      <h2>Teknisk sti for erfarne</h2>
      <p>8 km lang teknisk sti med rotpartier og steinbroer. Blå gradering med svarte seksjoner.</p>
      <h2>Familievennlig løype</h2>
      <p>25 km grønn løype gjennom kulturlandskap og skog.</p>
      <h2>Investering</h2>
      <p>Trysil kommune og Skistar investerer 15 millioner kr. Åpning planlagt 15. juni 2025.</p>`,
  },
  'enduro-test': {
    title: 'Spesifikasjonssammenligning: Årets enduro-sykler',
    desc: 'Vi sammenligner de beste enduro-syklene for 2025-sesongen basert på produsentspesifikasjoner.',
    date: '20. desember 2024',
    content: `<h2>Syklene i sammenligningen</h2>
      <ul>
        <li>Santa Cruz Megatower – 94.990 kr, 63,5° styrevinkel</li>
        <li>Specialized Enduro Expert – 74.990 kr</li>
        <li>Trek Slash 9.8 – 84.990 kr, 64° styrevinkel</li>
        <li>Canyon Strive CFR – 54.990 kr, Shapeshifter-teknologi</li>
        <li>YT Capra Core 3 – 44.990 kr</li>
        <li>Norco Range C2 – 64.990 kr</li>
      </ul>
      <p>Samtlige modeller har 160-180mm vandring. Priser fra 44.990 til 94.990 kr basert på veiledende priser.</p>
      <p><em>Basert på tekniske spesifikasjoner fra produsenter. Ikke fysisk testet.</em></p>`,
  },
  'canyon-oslo': {
    title: 'Canyon åpner showroom i Oslo',
    desc: 'Canyon etablerer showroom i Oslo – prøvekjør sykler før du kjøper.',
    date: '18. desember 2024',
    content: `<p>Canyon åpner showroom på Skøyen i Oslo – det andre i Skandinavia. Tilbyr prøvekjøring, profesjonell bikefitting, service, reparasjon og reservedeler. Priser forblir på nettbutikk-nivå. Åpner 1. februar 2025.</p>`,
  },
  'shimano-vs-sram': {
    title: 'Shimano vs SRAM – teknisk sammenligning av spesifikasjoner',
    desc: 'Sammenligning av Shimano og SRAM girsystemer for terrengsykkel i 2025.',
    date: '15. desember 2024',
    content: `<h2>Shimano XTR Di2</h2>
      <p>Elektronisk trådløs giring. 12 gir med 10-51t kassett. Vekt ca. 2300g. To separate skiftehendler.</p>
      <h2>SRAM XX Eagle AXS</h2>
      <p>Elektronisk trådløs giring. 12 gir med 10-52t kassett. Vekt ca. 2200g. Én hendel for begge retninger.</p>
      <h2>Pris</h2>
      <p>Shimano XTR Di2 koster omtrent 15% mer enn SRAM XX Eagle AXS.</p>
      <p><em>Basert på produsentenes oppgitte spesifikasjoner.</em></p>`,
  },
  'elsykkel-rekord': {
    title: 'Bransjetall: Salgsrekord for el-terrengsykler i Norge',
    desc: 'Salget av elektriske terrengsykler i Norge fortsetter å vokse kraftig.',
    date: '12. desember 2024',
    content: `<p>35% økning sammenlignet med 2023. Lettvekts e-MTB (motorer under 60Nm) dominerer veksten. Specialized Levo SL og Trek Fuel EXe blant bestselgerne. Gjennomsnittsalder på kjøpere: 48 år. Gjennomsnittspris: 59.000 kr (ned 8% fra i fjor).</p>`,
  },
  'varsesong-tips': {
    title: 'Vårklargjøring av sykkel: Bransjeråd og anbefalinger',
    desc: 'Gjør sykkelen klar for våren – vedlikeholdstips og sjekkliste.',
    date: '10. desember 2024',
    content: `<h2>Sjekkliste for vårsesongen</h2>
      <ul>
        <li>Grundig rengjøring – unngå høytrykksspyler rundt lager</li>
        <li>Inspiser dempere for lekkasjer og slitasje</li>
        <li>Sjekk kjede med kjedemåler – bytt slitte kjeder</li>
        <li>Kontroller bremsebelegg for slitasje</li>
        <li>Inspiser dekk for kutt, sprekker – fyll på tubeless-masse</li>
        <li>Gå gjennom alle bolter med momentnøkkel</li>
      </ul>`,
  },
  'fox-36-2025': {
    title: 'Fox lanserer ny 36-gaffel med GRIP X2-demping for 2025',
    desc: 'Fox har presentert sin oppdaterte 36-gaffel med ny GRIP X2-demperpatron.',
    date: '15. januar 2025',
    content: `<p>Ny GRIP X2-demperpatron med fire uavhengige justeringer. 80g lettere enn forgjengeren. Vandring: 140-160mm, 36mm standrør, 1.780g (150mm). Pris: 12.499 kr. I norske butikker fra februar 2025.</p>`,
  },
  'norco-range-2025': {
    title: 'Norco avduker nye Range C og Sight C for 2025',
    desc: 'Norco har presentert sine oppdaterte enduro- og stisykler for 2025.',
    date: '12. januar 2025',
    content: `<p>Range C: 170mm/165mm vandring, 63° styrevinkel. Fra 54.990 kr. Sight C: 150mm/140mm vandring, for lange dager i variert terreng. Fra 44.990 kr. Begge med ny geometri og karbonrammer.</p>`,
  },
  'sram-eagle-transmission': {
    title: 'SRAM Eagle Transmission – ny standard for MTB-drivverk',
    desc: 'SRAM har lansert Eagle Transmission som eliminerer tradisjonell girwire og girstang.',
    date: '10. januar 2025',
    content: `<p>Eliminerer girwire og girstang. Bakgiret monteres direkte på rammen via UDH-feste. 49% bedre kjedestabilitet, 42% lengre kassett-levetid. Tre nivåer: XX, X0 og GX Eagle AXS T-Type. Fra 8.999 kr (GX) til 18.999 kr (XX).</p>`,
  },
  'nesbyen-bikepark-utvidelse': {
    title: 'Nesbyen bikepark utvider med fem nye traseer i 2025',
    desc: 'Nesbyen bikepark har annonsert en stor utvidelse med fem nye traseer.',
    date: '8. januar 2025',
    content: `<p>Fem nye traseer: to grønne, to blå, én svart. Ny 6-seters stolheis dobler kapasiteten. Investering: 25 millioner kr. Åpning planlagt 1. juni 2025.</p>`,
  },
  'rockshox-zeb-ultimate-2025': {
    title: 'RockShox oppdaterer ZEB Ultimate med Charger 3.1 RC2',
    desc: 'RockShox har presentert sin oppdaterte ZEB Ultimate-gaffel.',
    date: '5. januar 2025',
    content: `<p>Ny Charger 3.1 RC2-demperpatron med fire-veis justering. ButterCups-teknologi reduserer vibrasjoner 15%. Vandring 150-190mm, 38mm standrør, 2.100g. Pris: 10.999 kr.</p>`,
  },
  'scott-spark-2025': {
    title: 'Scott avduker ny Spark med TwinLoc-fjerning',
    desc: 'Scott har presentert sin nye Spark for 2025.',
    date: '3. januar 2025',
    content: `<p>TwinLoc-fjernkontrollspaken er borte. Ny plattformdemper som automatisk justerer seg. 66° styrevinkel, 120mm vandring. Spark RC Comp fra 39.990 kr, toppmodellen 119.990 kr.</p>`,
  },
  'mtb-forsikring-tips': {
    title: 'Slik forsikrer du terrengsykkelen din – bransjeråd',
    desc: 'Informasjon fra forsikringsselskaper om dekning av terrengsykler.',
    date: '1. januar 2025',
    content: `<p>Innboforsikring: Dekker typisk 30.000-80.000 kr med 3.000-6.000 kr egenandel. Separat sykkelforsikring dekker tyveriskader opptil full verdi, uhellsskader og noen ganger mekanisk svikt. Tips: Registrer rammenummer, ta bilder, bruk FG-godkjent lås.</p>`,
  },
  'shimano-deore-xt-2025': {
    title: 'Shimano oppdaterer Deore XT M8200 for 2025',
    desc: 'Shimano har presentert sin oppdaterte Deore XT-gruppe.',
    date: '28. desember 2024',
    content: `<p>5% lettere. Bakgir: 254g. Oppdatert Hyperglide+ for raskere girskift under belastning. Nye bremsecalipere med 10% bedre varmeavledning. Komplett gruppe: ca. 8.500 kr. Bremser separat fra 1.899 kr.</p>`,
  },
  'mtb-sesongstart-2025': {
    title: 'Sesongstart MTB 2025: Arrangementer du bør få med deg',
    desc: 'Oversikt over MTB-arrangementer våren 2025.',
    date: '25. desember 2024',
    content: `<ul>
      <li>Oslo Enduro sesongåpning – 15. mars 2025, Tryvann</li>
      <li>Bergen MTB Festival – 12-13. april 2025, Fløyen</li>
      <li>Trondheim Stifestival – 26. april 2025, Bymarka</li>
      <li>Hafjell åpning – 17-18. mai 2025, gratis heiskort</li>
      <li>TransOslo – 31. mai 2025, stafettritt</li>
    </ul>`,
  },
  'e-mtb-lettvekt-test': {
    title: 'Lettvekts el-terrengsykler: Spesifikasjonssammenligning 2025',
    desc: 'Spesifikasjoner fra fire populære lettvekts el-terrengsykler sammenlignet.',
    date: '22. desember 2024',
    content: `<p>Specialized Levo SL (89.990 kr, 35Nm, 320Wh, 16.8 kg), Trek Fuel EXe (79.990 kr, 50Nm, 360Wh), Orbea Rise M-Team (84.990 kr, 60Nm, 360Wh), Scott Lumen eRide (74.990 kr, 50Nm, 360Wh, 17.9 kg). Basert på produsentspesifikasjoner.</p>`,
  },
  'dekkguide-sesong': {
    title: 'Valg av MTB-dekk etter sesong: Bransjeråd',
    desc: 'Anbefalinger fra dekkprodusenter om valg av dekk for ulike sesonger.',
    date: '18. desember 2024',
    content: `<p><strong>Vår/høst (vått):</strong> Myk gummi, aggressive knotter, bredere dekk (2.4"-2.6"). Maxxis Minion DHF 3C MaxxGrip, Schwalbe Magic Mary Soft. <strong>Sommer (tørt):</strong> Fastere gummi, smalere dekk (2.3"-2.5"). Maxxis Dissector EXO+, Schwalbe Nobby Nic. <strong>Lufttrykk:</strong> Foran 1.5-1.8 bar, bak 1.7-2.0 bar. Tubeless anbefales.</p>`,
  },
  'mtb-trening-vinter': {
    title: 'Holde MTB-formen om vinteren: Treningsråd',
    desc: 'Treningsråd fra bransjen for terrengsyklister om vinteren.',
    date: '14. desember 2024',
    content: `<p>Innendørs: 2-3 økter/uke på rulle med intervaller (Zwift, TrainerRoad). Styrketrening 2x/uke: knebøy, markløft, planke. Alternativ: langrenn, løping, fatbike. Teknisk: Se videoer, øv balanse innendørs, planlegg neste sesong.</p>`,
  },
  'giant-trance-x-2025': {
    title: 'Giant lanserer Trance X Advanced 2025',
    desc: 'Giant har presentert sin nye Trance X Advanced med oppdatert Maestro-demping.',
    date: '11. desember 2024',
    content: `<p>Oppdatert Maestro-dempersystem. 65° styrevinkel, 77.5° setevinkel, 140mm vandring, reach 475mm (L). Integrert kabelføring, vannflaske i hovedtrekant. Trance X Advanced 2 fra 44.990 kr, Pro-versjon 89.990 kr.</p>`,
  },
  'stisykling-allemannsrett': {
    title: 'Stisykling og allemannsretten: Hva sier regelverket?',
    desc: 'Regelverket for stisykling i norsk utmark.',
    date: '8. desember 2024',
    content: `<p>Ifølge friluftsloven har alle rett til å ferdes i utmark, inkludert på sykkel. Ferdselen skal skje hensynsfullt. Nasjonalparker og kommuner kan ha egne regler. Stietikette: vis hensyn, unngå bremsespor, hold deg på stien, ikke sykkel i sårbar natur. Organisert stibygging må godkjennes av grunneier og kommune (NOTS).</p>`,
  },
  'maxxis-nye-dekk-2025': {
    title: 'Maxxis lanserer tre nye dekkmodeller for stisykling 2025',
    desc: 'Maxxis har presentert tre nye dekkmodeller optimalisert for stisykling.',
    date: '5. desember 2024',
    content: `<p>Rekon Race: 720g, Dual Compound, for bakhjul i tørt. Forekaster: 890g, 3C MaxxTerra, allround. Shorty Gen 2: 1.050g, 3C MaxxGrip, vått/gjørmete. Alle fra 649 kr.</p>`,
  },
};

function generateNewsContent(id: string, n: NewsData): string {
  return wrap(`${nav}
    <nav aria-label="Breadcrumb"><a href="/">Hjem</a> › <a href="/nyheter">Nyheter</a> › ${n.title}</nav>
    <main><article>
      <h1>${n.title}</h1>
      <time datetime="${n.date}">${n.date}</time>
      <p>${n.desc}</p>
      ${n.content}
      <p><a href="/nyheter">Se alle nyheter</a></p>
    </article></main>`);
}

// ============ EXPORTS ============

export function getAllRouteMeta(): RouteMeta[] {
  const routes: RouteMeta[] = [...staticRoutes];

  for (const [id, b] of Object.entries(bikes)) {
    routes.push({
      path: `/sammenligninger/${id}`,
      title: `${b.name} – Sammenligning | ${SITE_NAME}`,
      description: b.desc,
      ogType: 'article',
      keywords: `${b.name}, ${b.brand}, terrengsykkel, sammenligning, ${b.category.toLowerCase()}`,
      staticContent: generateBikeContent(id, b),
    });
  }

  for (const [id, g] of Object.entries(guides)) {
    routes.push({
      path: `/guider/${id}`,
      title: `${g.title} | ${SITE_NAME}`,
      description: g.desc,
      ogType: 'article',
      keywords: `${g.title.toLowerCase()}, mtb guide, terrengsykkel`,
      staticContent: generateGuideContent(id, g),
    });
  }

  for (const [id, n] of Object.entries(news)) {
    routes.push({
      path: `/nyheter/${id}`,
      title: `${n.title} | ${SITE_NAME}`,
      description: n.desc,
      ogType: 'article',
      keywords: `${n.title.toLowerCase()}, mtb nyheter`,
      staticContent: generateNewsContent(id, n),
    });
  }

  return routes;
}

export function generateHtmlForRoute(templateHtml: string, route: RouteMeta): string {
  const ogImage = route.ogImage || DEFAULT_OG_IMAGE;
  const ogType = route.ogType || 'website';
  const canonicalUrl = `${SITE_URL}${route.path === '/' ? '' : route.path}`;

  let html = templateHtml;

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(route.title)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(route.description)}">`);
  html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(route.title)}">`);
  html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(route.description)}">`);
  html = html.replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${ogImage}">`);
  html = html.replace(/<meta property="og:type" content="[^"]*">/, `<meta property="og:type" content="${ogType}">`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${esc(route.title)}">`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${esc(route.description)}">`);
  html = html.replace(/<meta name="twitter:image" content="[^"]*">/, `<meta name="twitter:image" content="${ogImage}">`);

  if (html.includes('rel="canonical"')) {
    html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${canonicalUrl}">`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}">\n  </head>`);
  }

  if (route.keywords) {
    html = html.replace(/<meta name="keywords" content="[^"]*">/, `<meta name="keywords" content="${esc(route.keywords)}">`);
  }

  if (route.noindex) {
    html = html.replace('</head>', `  <meta name="robots" content="noindex, nofollow">\n  </head>`);
  }

  if (route.staticContent) {
    html = html.replace('<div id="root"></div>', `<div id="root">${route.staticContent}</div>`);
  }

  return html;
}

function esc(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
