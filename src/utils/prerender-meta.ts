// Pre-render meta tags AND static body content for all routes at build time
// Crawlers get correct meta tags AND semantic HTML without JS rendering

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
  staticContent?: string; // Semantic HTML injected into <div id="root"> for crawlers
}

// ============ STATIC CONTENT BUILDERS ============

function wrapContent(inner: string): string {
  return `<div class="seo-shell" data-seo-prerender="true">${inner}</div>`;
}

// ============ ROUTE DEFINITIONS ============

const staticRoutes: RouteMeta[] = [
  {
    path: '/',
    title: 'MTB Test Norge – Sammenligninger, guider og nyheter 2025',
    description: 'Sammenlign terrengsykler basert på tekniske spesifikasjoner. Faktabaserte guider og nyheter om stisykling i Norge.',
    keywords: 'terrengsykkel, mtb norge, terrengsykkel sammenligning, beste terrengsykkel, stisykling',
    staticContent: wrapContent(`
      <header><nav><a href="/">MTB Test Norge</a><a href="/sammenligninger">Sammenligninger</a><a href="/nyheter">Nyheter</a><a href="/guider">Guider</a></nav></header>
      <main>
        <h1>MTB Test Norge – Sammenligninger, guider og nyheter 2025</h1>
        <p>Sammenlign terrengsykler basert på tekniske spesifikasjoner. Faktabaserte guider og nyheter om stisykling i Norge.</p>
        <section>
          <h2>Populære sammenligninger</h2>
          <p>Sammenlign tekniske spesifikasjoner fra ulike produsenter.</p>
          <ul>
            <li><a href="/sammenligninger/trek-fuel-ex-7">Trek Fuel EX 7 2024</a> – Allsidig trail-sykkel med 140mm vandring</li>
            <li><a href="/sammenligninger/specialized-stumpjumper">Specialized Stumpjumper Expert</a> – Premium trail med karbonramme</li>
            <li><a href="/sammenligninger/canyon-spectral">Canyon Spectral</a> – Direkte-til-forbruker trail-sykkel</li>
          </ul>
          <a href="/sammenligninger">Se alle sammenligninger</a>
        </section>
        <section>
          <h2>Kategorier</h2>
          <ul>
            <li><a href="/sammenligninger">Sammenligninger</a> – Sammenlign terrengsykler</li>
            <li><a href="/nyheter">Nyheter</a> – Siste fra MTB-verdenen</li>
            <li><a href="/guider">Guider</a> – Lær alt om MTB</li>
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
          <p>Innholdet på denne siden er ikke basert på fysiske produkttester. All informasjon er hentet fra produsentenes egne spesifikasjoner, offisielle produktsider og offentlig tilgjengelige kilder.</p>
          <p>MTB Test Norge inneholder lenker til partnere og forhandlere. Dersom du kjøper et produkt via en av våre lenker, kan vi motta en liten provisjon – uten ekstra kostnad for deg.</p>
        </section>
      </main>
    `),
  },
  {
    path: '/sammenligninger',
    title: 'Terrengsykkel-sammenligninger 2025 | MTB Test Norge',
    description: 'Sammenlign terrengsykler side om side. Tekniske spesifikasjoner, priser og egenskaper for de mest populære stisyklene.',
    keywords: 'terrengsykkel sammenligning, mtb test, stisykkel 2025',
    staticContent: wrapContent(`
      <header><nav><a href="/">MTB Test Norge</a></nav></header>
      <nav aria-label="Breadcrumb"><a href="/">Hjem</a> › <a href="/sammenligninger">Sammenligninger</a></nav>
      <main>
        <h1>Terrengsykkel-sammenligninger</h1>
        <p>Sammenlign tekniske spesifikasjoner fra ulike produsenter. Faktabasert informasjon for å hjelpe deg velge riktig sykkel.</p>
        <p><strong>Viktig informasjon:</strong> Våre sammenligninger er basert på tekniske spesifikasjoner fra produsenter og forhandlere. Vi har ikke testet produktene selv.</p>
        <h2>Siste sammenligninger</h2>
        <ul>
          <li><a href="/sammenligninger/trek-fuel-ex-7">Trek Fuel EX 7 2024</a> – En solid allrounder med 140mm vandring, trail-sykkel i mellomklassen (35.000-45.000 kr)</li>
          <li><a href="/sammenligninger/specialized-stumpjumper">Specialized Stumpjumper Expert</a> – Karbonramme, Fox Factory-demping, 150mm vandring (65.000-85.000 kr)</li>
          <li><a href="/sammenligninger/canyon-spectral">Canyon Spectral</a> – Direkte-til-forbruker trail-sykkel fra Canyon</li>
          <li><a href="/sammenligninger/santa-cruz-hightower">Santa Cruz Hightower</a> – Premium trail-sykkel med VPP-demping</li>
          <li><a href="/sammenligninger/yeti-sb130">Yeti SB130</a> – Switch Infinity-plattform for avanserte stisyklister</li>
          <li><a href="/sammenligninger/norco-fluid-fs">Norco Fluid FS</a> – Rimelig fulldemper for stisykling</li>
        </ul>
      </main>
    `),
  },
  {
    path: '/guider',
    title: 'Terrengsykkel guider – Alt om MTB | MTB Test Norge',
    description: 'Lær alt om terrengsykling. Guider for nybegynnere og erfarne. Vedlikehold, teknikk, utstyr og stier i Norge.',
    keywords: 'mtb guide, terrengsykkel tips, mtb for nybegynnere, sykkelvedlikehold',
    staticContent: wrapContent(`
      <header><nav><a href="/">MTB Test Norge</a></nav></header>
      <nav aria-label="Breadcrumb"><a href="/">Hjem</a> › <a href="/guider">Guider</a></nav>
      <main>
        <h1>Alt du trenger å vite om terrengsykling</h1>
        <p>Fra nybegynner til ekspert – våre omfattende guider hjelper deg på veien.</p>
        <ul>
          <li><a href="/guider/velg-riktig-terrengsykkel">Velg riktig terrengsykkel 2025</a> – Hardtail vs fulldemper, hjulstørrelser og geometri forklart</li>
          <li><a href="/guider/mtb-for-nybegynnere">MTB for nybegynnere – komplett guide</a> – Alt du må vite før du starter med terrengsykling</li>
          <li><a href="/guider/vedlikehold">Vedlikehold av terrengsykkel</a> – Hold sykkelen din i toppform hele sesongen</li>
          <li><a href="/guider/beste-stier-norge">Beste MTB-stier i Norge</a> – Populære destinasjoner for terrengsykling</li>
          <li><a href="/guider/riktig-utstyr">Riktig utstyr til terrengsykling</a> – Hjelm, beskyttelse, klær og tilbehør</li>
          <li><a href="/guider/terrengsykkel-terminologi">Terrengsykkel-terminologi</a> – Ordliste over MTB-begreper</li>
          <li><a href="/guider/mtb-geometri-forklart">Terrengsykkel-geometri forklart</a> – Forstå geometritabellen</li>
          <li><a href="/guider/emtb-hardtail-vs-fulldemper">E-MTB: Hardtail eller fulldemper?</a> – Fordeler og ulemper med elsykkel</li>
        </ul>
      </main>
    `),
  },
  {
    path: '/nyheter',
    title: 'MTB Nyheter Norge – Siste nytt om terrengsykling | MTB Test Norge',
    description: 'Siste nyheter om terrengsykling, nye sykler, komponenter og stier i Norge.',
    keywords: 'mtb nyheter, terrengsykkel nyheter, nye sykler 2025',
    staticContent: wrapContent(`
      <header><nav><a href="/">MTB Test Norge</a></nav></header>
      <nav aria-label="Breadcrumb"><a href="/">Hjem</a> › <a href="/nyheter">Nyheter</a></nav>
      <main>
        <h1>Siste nytt fra MTB-verdenen</h1>
        <p>Produktnyheter, stiutbygging og alt annet du trenger å vite om terrengsykling.</p>
        <ul>
          <li><a href="/nyheter/trek-fuel-ex-2025">Trek lanserer Fuel EX 2025</a> – Ny generasjon med oppdatert geometri og forbedret demping</li>
          <li><a href="/nyheter/specialized-priskutt">Specialized kutter prisene</a> – Prisreduksjoner på flere populære modeller i Norge</li>
          <li><a href="/nyheter/trysil-stier">Nye stier i Trysil</a> – Trysil utvider stinettverket med nye flow trails</li>
          <li><a href="/nyheter/enduro-test">Enduro-test 2025</a> – Sammenligning av de beste enduro-syklene</li>
          <li><a href="/nyheter/canyon-oslo">Canyon åpner i Oslo</a> – Showroom i Oslo for prøvekjøring</li>
          <li><a href="/nyheter/shimano-vs-sram">Shimano vs SRAM 2025</a> – Girsystemer for terrengsykkel sammenlignet</li>
          <li><a href="/nyheter/elsykkel-rekord">Elsykkel-salg slår rekorder</a> – E-MTB salget fortsetter å vokse</li>
          <li><a href="/nyheter/varsesong-tips">Tips for vårsesongen</a> – Vedlikeholdstips og sjekkliste</li>
        </ul>
      </main>
    `),
  },
];

// Bike comparisons - detailed static content for each
const bikeComparisonMeta: Record<string, { name: string; brand: string; desc: string; category: string; priceRange: string; shortDesc: string; specs: Record<string, string>; strengths: string[] }> = {
  'trek-fuel-ex-7': {
    name: 'Trek Fuel EX 7 2024', brand: 'Trek', category: 'Trail',
    desc: 'Tekniske spesifikasjoner, pris og vurdering av Trek Fuel EX 7 – en allsidig trail-sykkel.',
    priceRange: 'Mellomklasse - 35.000-45.000 kr',
    shortDesc: 'En solid allrounder som treffer godt i mellomsjiktet. Med 140mm foran og 130mm bak får du nok vandring til å takle tekniske stier.',
    specs: { frame: 'Alpha Platinum Aluminum', fork: 'RockShox Pike Select, 140mm', drivetrain: 'Shimano Deore 12-speed', brakes: 'Shimano MT520 4-piston', wheels: 'Bontrager Line Comp 30, 29"', weight: '14.2 kg' },
    strengths: ['Velbalansert geometri som fungerer både opp og ned', 'Shimano Deore – pålitelig drivverk', 'RockShox Pike er en velprøvd gaffel', 'Trek-forhandlernettverket i Norge gjør service enkelt'],
  },
  'specialized-stumpjumper': {
    name: 'Specialized Stumpjumper Expert', brand: 'Specialized', category: 'Trail',
    desc: 'Alt om Specialized Stumpjumper – spesifikasjoner, egenskaper og sammenligning.',
    priceRange: 'Premium - 65.000-85.000 kr',
    shortDesc: 'En av de mest ikoniske navnene innen terrengsykling. Karbonramme, Fox Factory-demping og gjennomtenkt geometri.',
    specs: { frame: 'FACT 11m Carbon', fork: 'Fox Factory 36, 150mm', drivetrain: 'SRAM GX Eagle', brakes: 'SRAM Code RSC', wheels: 'Roval Traverse 29"', weight: '12.8 kg' },
    strengths: ['Fox Factory-demping gir eksepsjonell kontroll', '12,8 kg konkurransedyktig på vekt', 'SRAM Code RSC bremsekapasitet i overflod', 'Velprøvd Stumpjumper-geometri'],
  },
  'canyon-spectral': {
    name: 'Canyon Spectral', brand: 'Canyon', category: 'Trail/Enduro',
    desc: 'Canyon Spectral sammenligning – tekniske data, pris og kjøreegenskaper.',
    priceRange: 'Mellomklasse til premium',
    shortDesc: 'Direkte-til-forbruker trail-sykkel fra Canyon med konkurransedyktig pris og moderne geometri.',
    specs: { frame: 'Aluminum/Carbon', fork: '150mm', drivetrain: 'Shimano/SRAM', brakes: '4-piston', wheels: '29"', weight: '13-14 kg' },
    strengths: ['Konkurransedyktig pris uten forhandlermarginer', 'Moderne geometri', 'Flere rammematerialer tilgjengelig'],
  },
  'santa-cruz-hightower': {
    name: 'Santa Cruz Hightower', brand: 'Santa Cruz', category: 'Trail',
    desc: 'Santa Cruz Hightower – premium trail-sykkel med VPP-demping. Spesifikasjoner og vurdering.',
    priceRange: 'Premium - 80.000+ kr',
    shortDesc: 'Premium trail-sykkel med Santa Cruz sin VPP-dempeplattform for eksepsjonell ytelse.',
    specs: { frame: 'Carbon C/CC', fork: 'Fox/RockShox 150mm', drivetrain: 'SRAM Eagle', brakes: 'SRAM Code', wheels: '29"', weight: '12.5-13.5 kg' },
    strengths: ['VPP-demping gir fantastisk pedalegenskap', 'Premium karbonramme', 'Livstidsgaranti på ramme'],
  },
  'yeti-sb130': {
    name: 'Yeti SB130', brand: 'Yeti', category: 'Trail',
    desc: 'Yeti SB130 med Switch Infinity-plattform – tekniske detaljer og sammenligning.',
    priceRange: 'Premium - 90.000+ kr',
    shortDesc: 'Yeti SB130 med den unike Switch Infinity-dempeplattformen for uovertruffen klatreeffektivitet.',
    specs: { frame: 'Turq/Carbon', fork: 'Fox 36 150mm', drivetrain: 'SRAM Eagle', brakes: 'SRAM Code RSC', wheels: '29"', weight: '12.5-13 kg' },
    strengths: ['Switch Infinity-plattform unik i markedet', 'Eksepsjonell klatreeffektivitet', 'Premium Turq-karbon tilgjengelig'],
  },
  'norco-fluid-fs': {
    name: 'Norco Fluid FS', brand: 'Norco', category: 'Trail',
    desc: 'Norco Fluid FS – rimelig fulldemper for stisykling. Spesifikasjoner og pris.',
    priceRange: 'Budsjett - 20.000-30.000 kr',
    shortDesc: 'Rimelig fulldemper-sykkel som gir god verdi for pengene. Perfekt inngangsport til stisykling med fulldemping.',
    specs: { frame: 'Aluminum', fork: 'RockShox 140mm', drivetrain: 'Shimano Deore', brakes: 'Shimano MT400', wheels: '29"', weight: '15 kg' },
    strengths: ['Best i klassen på pris-ytelse', 'Solid aluminiumsramme', 'Shimano Deore er pålitelig'],
  },
};

// Guides
const guideMeta: Record<string, { title: string; desc: string; intro: string }> = {
  'velg-riktig-terrengsykkel': {
    title: 'Velg riktig terrengsykkel 2025',
    desc: 'Hardtail vs fulldemper, hjulstørrelser og geometri forklart. Komplett guide til å velge terrengsykkel.',
    intro: 'Å velge riktig terrengsykkel kan virke overveldende med alle valgmulighetene som finnes. Denne guiden hjelper deg å navigere gjennom de viktigste beslutningene – hardtail vs fulldemper, hjulstørrelser (27.5" vs 29") og geometri.',
  },
  'mtb-for-nybegynnere': {
    title: 'MTB for nybegynnere – komplett guide',
    desc: 'Alt du må vite før du starter med terrengsykling. Teknikk, sikkerhet, utstyr og tips.',
    intro: 'Terrengsykling er en fantastisk sport som kombinerer naturopplevelser med fysisk aktivitet. Denne guiden dekker alt fra valg av sykkel og utstyr til grunnleggende teknikk og sikkerhet.',
  },
  'vedlikehold': {
    title: 'Vedlikehold av terrengsykkel',
    desc: 'Hold sykkelen din i toppform hele sesongen. Etter tur, ukentlig, månedlig og årlig service.',
    intro: 'Regelmessig vedlikehold forlenger levetiden på sykkelen din og sikrer trygg kjøring. Her er en komplett guide til vedlikehold etter tur, ukentlig, månedlig og årlig service.',
  },
  'beste-stier-norge': {
    title: 'Beste MTB-stier i Norge',
    desc: 'Populære destinasjoner for terrengsykling i Norge. Østlandet, Vestlandet, Trøndelag og mer.',
    intro: 'Norge byr på fantastiske muligheter for terrengsykling. Fra flow trails i Trysil til tekniske stier på Vestlandet – her er de beste destinasjonene.',
  },
  'riktig-utstyr': {
    title: 'Riktig utstyr til terrengsykling',
    desc: 'Hjelm, beskyttelse, klær og tilbehør du trenger for å sykle terreng trygt og komfortabelt.',
    intro: 'Riktig utstyr gjør forskjellen mellom en god og en dårlig tur. Denne guiden dekker alt fra hjelm og beskyttelse til klær og tilbehør for terrengsykling.',
  },
  'terrengsykkel-terminologi': {
    title: 'Terrengsykkel-terminologi',
    desc: 'Ordliste over MTB-begreper: travel, geometry, dropper post, reach, stack og mer.',
    intro: 'MTB-verdenen er full av fagbegreper. Denne ordlisten forklarer de viktigste begrepene som travel, reach, stack, dropper post, enduro, trail og mer.',
  },
  'mtb-geometri-forklart': {
    title: 'Terrengsykkel-geometri forklart',
    desc: 'Forstå geometritabellen: reach, stack, styrevinkel, chainstay og mer – og hva det betyr for kjøreegenskapene.',
    intro: 'Geometri er kanskje den viktigste faktoren for hvordan en sykkel kjører. Lær hva reach, stack, head tube angle, seat tube angle og chainstay length betyr i praksis.',
  },
  'emtb-hardtail-vs-fulldemper': {
    title: 'E-MTB: Hardtail eller fulldemper?',
    desc: 'Hardtail vs fulldemper elsykkel – fordeler, ulemper, vedlikehold og hva som passer din kjørestil.',
    intro: 'Elsykler (e-MTB) finnes som både hardtail og fulldemper. Valget avhenger av terreng, kjørestil og budsjett. Her sammenligner vi fordeler og ulemper.',
  },
};

// News articles
const newsMeta: Record<string, { title: string; desc: string; excerpt: string }> = {
  'trek-fuel-ex-2025': {
    title: 'Trek Fuel EX 2025 – ny generasjon',
    desc: 'Trek lanserer ny Fuel EX med oppdatert geometri og forbedret demping for 2025-sesongen.',
    excerpt: 'Trek har avslørt sin nye Fuel EX for 2025-sesongen med helt ny geometri, oppdatert dempersystem og friskt design. Styrevinkel på 64,5 grader og 140mm vandring foran og bak.',
  },
  'specialized-priskutt': {
    title: 'Specialized kutter prisene',
    desc: 'Specialized reduserer prisene på flere populære modeller i Norge.',
    excerpt: 'Specialized har annonsert prisreduksjoner på utvalgte 2024-modeller. Stumpjumper Comp ned fra 64.990 til 48.990 kroner. Epic Comp nå til 39.990 kroner.',
  },
  'trysil-stier': {
    title: 'Nye stier i Trysil',
    desc: 'Trysil utvider stinettverket med nye flow trails og tekniske stier for 2025.',
    excerpt: 'Trysil kommune og Skistar annonserer 12 km ny flow-trail fra toppen av Trysilfjellet med over 700 meter høydeforskjell, pluss 8 km teknisk sti.',
  },
  'enduro-test': {
    title: 'Enduro-test 2025',
    desc: 'Vi sammenligner de beste enduro-syklene for 2025-sesongen.',
    excerpt: 'De beste enduro-syklene for 2025-sesongen sammenlignet: spesifikasjoner, geometri og pris.',
  },
  'canyon-oslo': {
    title: 'Canyon åpner i Oslo',
    desc: 'Canyon etablerer showroom i Oslo – prøvekjør sykler før du kjøper.',
    excerpt: 'Canyon åpner showroom i Oslo sentrum. Nå kan du prøvekjøre sykler fra den tyske produsenten før kjøp.',
  },
  'shimano-vs-sram': {
    title: 'Shimano vs SRAM 2025',
    desc: 'Sammenligning av Shimano og SRAM girsystemer for terrengsykkel i 2025.',
    excerpt: 'Shimano Deore XT vs SRAM GX Eagle – vi sammenligner ytelse, pålitelighet, vekt og pris for terrengsykkel girsystemer.',
  },
  'elsykkel-rekord': {
    title: 'Elsykkel-salg slår rekorder',
    desc: 'Salget av elektriske terrengsykler i Norge fortsetter å vokse kraftig.',
    excerpt: 'E-MTB salget i Norge har økt med 40% det siste året. Elektriske terrengsykler utgjør nå over 30% av alle solgte terrengsykler.',
  },
  'varsesong-tips': {
    title: 'Tips for vårsesongen',
    desc: 'Gjør sykkelen klar for våren – vedlikeholdstips og sjekkliste.',
    excerpt: 'Vårens sjekkliste for terrengsykkelen: dekk, bremser, kjede, demping og mer. Gjør sykkelen klar for sesongen.',
  },
};

// ============ CONTENT GENERATORS ============

function generateBikeStaticContent(id: string, meta: typeof bikeComparisonMeta[string]): string {
  return wrapContent(`
    <nav aria-label="Breadcrumb"><a href="/">Hjem</a> › <a href="/sammenligninger">Sammenligninger</a> › ${meta.name}</nav>
    <main>
      <article>
        <h1>${meta.name} – Spesifikasjoner og sammenligning</h1>
        <p><strong>Kategori:</strong> ${meta.category} | <strong>Pris:</strong> ${meta.priceRange}</p>
        <p>${meta.shortDesc}</p>
        <h2>Tekniske spesifikasjoner</h2>
        <table>
          <tr><th>Ramme</th><td>${meta.specs.frame}</td></tr>
          <tr><th>Gaffel</th><td>${meta.specs.fork}</td></tr>
          <tr><th>Drivverk</th><td>${meta.specs.drivetrain}</td></tr>
          <tr><th>Bremser</th><td>${meta.specs.brakes}</td></tr>
          <tr><th>Hjul</th><td>${meta.specs.wheels}</td></tr>
          <tr><th>Vekt</th><td>${meta.specs.weight}</td></tr>
        </table>
        <h2>Styrker</h2>
        <ul>${meta.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
        <p><a href="/sammenligninger">Se alle sammenligninger</a></p>
      </article>
    </main>
  `);
}

function generateGuideStaticContent(id: string, meta: typeof guideMeta[string]): string {
  return wrapContent(`
    <nav aria-label="Breadcrumb"><a href="/">Hjem</a> › <a href="/guider">Guider</a> › ${meta.title}</nav>
    <main>
      <article>
        <h1>${meta.title}</h1>
        <p>${meta.intro}</p>
        <p>${meta.desc}</p>
        <p><a href="/guider">Se alle guider</a></p>
      </article>
    </main>
  `);
}

function generateNewsStaticContent(id: string, meta: typeof newsMeta[string]): string {
  return wrapContent(`
    <nav aria-label="Breadcrumb"><a href="/">Hjem</a> › <a href="/nyheter">Nyheter</a> › ${meta.title}</nav>
    <main>
      <article>
        <h1>${meta.title}</h1>
        <p>${meta.excerpt}</p>
        <p><a href="/nyheter">Se alle nyheter</a></p>
      </article>
    </main>
  `);
}

// ============ EXPORTS ============

export function getAllRouteMeta(): RouteMeta[] {
  const routes: RouteMeta[] = [...staticRoutes];

  // Add bike comparison routes
  for (const [id, meta] of Object.entries(bikeComparisonMeta)) {
    routes.push({
      path: `/sammenligninger/${id}`,
      title: `${meta.name} – Sammenligning | ${SITE_NAME}`,
      description: meta.desc,
      ogType: 'article',
      keywords: `${meta.name}, ${meta.brand}, terrengsykkel, sammenligning`,
      staticContent: generateBikeStaticContent(id, meta),
    });
  }

  // Add guide routes
  for (const [id, meta] of Object.entries(guideMeta)) {
    routes.push({
      path: `/guider/${id}`,
      title: `${meta.title} | ${SITE_NAME}`,
      description: meta.desc,
      ogType: 'article',
      keywords: `${meta.title.toLowerCase()}, mtb guide, terrengsykkel`,
      staticContent: generateGuideStaticContent(id, meta),
    });
  }

  // Add news routes
  for (const [id, meta] of Object.entries(newsMeta)) {
    routes.push({
      path: `/nyheter/${id}`,
      title: `${meta.title} | ${SITE_NAME}`,
      description: meta.desc,
      ogType: 'article',
      keywords: `${meta.title.toLowerCase()}, mtb nyheter`,
      staticContent: generateNewsStaticContent(id, meta),
    });
  }

  return routes;
}

export function generateHtmlForRoute(templateHtml: string, route: RouteMeta): string {
  const ogImage = route.ogImage || DEFAULT_OG_IMAGE;
  const ogType = route.ogType || 'website';
  const canonicalUrl = `${SITE_URL}${route.path === '/' ? '' : route.path}`;

  let html = templateHtml;

  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(route.title)}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${escapeHtml(route.description)}">`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*">/,
    `<meta property="og:title" content="${escapeHtml(route.title)}">`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*">/,
    `<meta property="og:description" content="${escapeHtml(route.description)}">`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*">/,
    `<meta property="og:image" content="${ogImage}">`
  );
  html = html.replace(
    /<meta property="og:type" content="[^"]*">/,
    `<meta property="og:type" content="${ogType}">`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*">/,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}">`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}">`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*">/,
    `<meta name="twitter:image" content="${ogImage}">`
  );

  // Add canonical URL and keywords if not present
  if (!html.includes('rel="canonical"')) {
    html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}">\n  </head>`);
  } else {
    html = html.replace(
      /<link rel="canonical" href="[^"]*">/,
      `<link rel="canonical" href="${canonicalUrl}">`
    );
  }

  if (route.keywords) {
    html = html.replace(
      /<meta name="keywords" content="[^"]*">/,
      `<meta name="keywords" content="${escapeHtml(route.keywords)}">`
    );
  }

  // Add robots noindex if specified
  if (route.noindex) {
    html = html.replace('</head>', `  <meta name="robots" content="noindex, nofollow">\n  </head>`);
  }

  // Inject static content into <div id="root"> for crawlers
  if (route.staticContent) {
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${route.staticContent}</div>`
    );
  }

  return html;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
