import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Warmform- & Schmiedeteile",
    desc: "Kontrollierte Warmumformung für optimalen Faserverlauf",
    img: "/images/warmformteile-schmiedeteile-01.jpg",
  },
  {
    title: "Schraubenbolzen",
    desc: "Nach nationalen und internationalen Normen bis M180",
    img: "/images/schraubenbolzen-01.jpg",
  },
  {
    title: "Kaltfließpressteile",
    desc: "Von einfachen bis zu komplexen Mehrstufen-Pressteilen",
    img: "/images/kaltfliesspressteile-sonstige-01.jpg",
  },
  {
    title: "Drehteile",
    desc: "Aluminium, Stahl, Flansche, Buchsen, Muttern",
    img: "/images/drehteile-aluminium-stahl-01.jpg",
  },
  {
    title: "Baugruppen",
    desc: "Gepresst und geschweißt nach Kundenzeichnung",
    img: "/images/baugruppen-gepresst-geschweisst-01.jpg",
  },
  {
    title: "Sonderschrauben",
    desc: "Hochwertige abnahmepflichtige Verbindungselemente",
    img: "/images/sonderschrauben-01-warmformteile-01.jpg",
  },
];

const industries = [
  "Kernreaktortechnik",
  "Turbinenbau",
  "Apparatebau",
  "Kesselbau",
  "Offshore & Petrochemie",
  "Windkraftanlagenbau",
  "Maschinenbau",
  "Schiffsbau",
  "Automobilindustrie",
  "Kranbau",
  "Landmaschinenbau",
  "Stahlbau",
];

const certifications = [
  { name: "EN ISO 9001:2015", desc: "Qualitätsmanagement" },
  { name: "ISO 14001:2015", desc: "Umweltmanagement" },
  { name: "AD 2000 W0", desc: "Druckgeräte" },
  { name: "VDTÜV 1253/1", desc: "TÜV Zulassung" },
  { name: "KTA 1401", desc: "Kerntechnik" },
  { name: "DIN EN 15048-1", desc: "Garnituren" },
  { name: "DNVGL", desc: "Maritime Zulassung" },
  { name: "EN 10204", desc: "Prüfbescheinigungen" },
];

const subsidiaries = [
  {
    name: "RS Randack Spezialschrauben GmbH",
    desc: "Spezialist für hochwertige, abnahmepflichtige Schrauben und Verbindungselemente",
    location: "Hagen, Deutschland",
    logo: "/images/logo-rs-randack-spezialschrauben-gmbh.gif",
  },
  {
    name: "Randack Automotive GmbH",
    desc: "Schrauben, Bolzen und Zubehör für den Fahrzeugbau",
    location: "Hagen, Deutschland",
    logo: "/images/logo-rs-randack-automotive-gmbh.gif",
  },
  {
    name: "RFI Randack Fasteners India",
    desc: "Spezialisierung auf Verbindungselemente für Windkraftanwendungen",
    location: "Pune, Indien",
    logo: null,
    abbr: "RFI",
  },
  {
    name: "RFA Randack Fasteners Americas",
    desc: "Tower bolts, blade connectors und specialty fasteners für die Americas Region",
    location: "Humble, Texas, USA",
    logo: null,
    abbr: "RFA",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/images/bildstreifen-home.jpg"
            alt="Randack Spezialschrauben Produktion"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">Seit 1934</div>
          <h1>Spezialisten für Sonderschrauben und Verbindungselemente</h1>
          <p>
            RS ist das Herkunftszeichen, das unsere Produkte tragen — es bürgt
            für Qualität und Präzision. Über 90 Jahre Erfahrung in der
            Herstellung abnahmepflichtiger Spezialschrauben.
          </p>
          <div className="hero-actions">
            <Link href="/kontakt" className="btn-primary">
              Anfrage stellen
            </Link>
            <Link href="/lieferprogramm" className="btn-secondary">
              Lieferprogramm ansehen
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-number">90+</div>
              <div className="hero-stat-label">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="hero-stat-number">M180</div>
              <div className="hero-stat-label">Max. Gewindegröße</div>
            </div>
            <div>
              <div className="hero-stat-number">6m</div>
              <div className="hero-stat-label">Max. Bolzenlänge</div>
            </div>
            <div>
              <div className="hero-stat-number">24h</div>
              <div className="hero-stat-label">Ersatzteil-Lieferung</div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Kernkompetenzen */}
      <section className="section" id="about">
        <div className="container">
          <span className="section-label">Über uns</span>
          <h2 className="section-title">
            Qualität und Präzision aus einer Hand
          </h2>
          <p className="section-subtitle">
            Wir sind Spezialisten für die Herstellung und Lieferung der
            unterschiedlichsten Schrauben und Verbindungselemente — von
            Einzelteilen bis zur Serie.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="#0C1F3F"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" />
                </svg>
              </div>
              <h3>Flexible Fertigung</h3>
              <p>
                Von Warmumformung über spanende Verfahren bis zur spanlosen
                Gewindeherstellung — alle Fertigungsmethoden unter einem Dach.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="#0C1F3F"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Zertifizierte Qualität</h3>
              <p>
                ISO 9001:2015, AD 2000 W0, KTA 1401 und weitere
                Zertifizierungen garantieren höchste Produktqualität und
                Sicherheit.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="#0C1F3F"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>Schnelle Lieferung</h3>
              <p>
                Ersatzteile auf Wunsch innerhalb von 24 Stunden. Anfragen werden
                innerhalb eines Tages beantwortet.
              </p>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-image">
              <Image
                src="/images/bildstreifen-spezialschrauben-standort-hagen-01.jpg"
                alt="Randack Standort Hagen"
                width={640}
                height={480}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="about-text">
              <h3>Projektbezogene Fertigung</h3>
              <p>
                In der projektbezogenen Fertigung ist die Zusammenarbeit und
                Beratung mit dem Kunden für die Herstellung abnahmepflichtiger
                Verbindungselemente und Spezialschrauben unentbehrlich.
              </p>
              <p>
                Fertigungsfolge und Prüfpläne werden häufig gemeinsam mit dem
                Kunden erarbeitet. Unser prozessintegriertes
                Qualitätsmanagementsystem garantiert erstklassige
                Produktqualität.
              </p>
              <Link href="/herstellung" className="btn-primary" style={{ marginTop: "1rem" }}>
                Mehr zur Herstellung
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section section-gray" id="produkte">
        <div className="container">
          <span className="section-label">Lieferprogramm</span>
          <h2 className="section-title">
            Schrauben und Verbindungselemente für jede Anforderung
          </h2>
          <p className="section-subtitle">
            Von Gütegrade 5.6 bis 14.9, rostfreien und hitzebeständigen
            Werkstoffen bis zu Sonderlegierungen wie Inconel, Titan und
            Hastelloy.
          </p>

          <div className="products-grid">
            {products.map((p) => (
              <Link
                href="/lieferprogramm"
                key={p.title}
                className="product-card"
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  width={400}
                  height={300}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="product-card-overlay">
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/lieferprogramm" className="btn-primary">
              Gesamtes Lieferprogramm ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Industries + Quality */}
      <section className="section section-dark" id="branchen">
        <div className="container">
          <div className="industries-quality-grid">
            <div>
              <span className="section-label">Branchen</span>
              <h2 className="section-title">
                Unsere Produkte im Einsatz
              </h2>
              <p className="section-subtitle">
                RS-Produkte gehen an nationale und internationale Kunden in den
                unterschiedlichsten Industriebereichen.
              </p>
              <div className="industries-list">
                {industries.map((ind) => (
                  <span key={ind} className="industry-tag">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="section-label">Qualität</span>
              <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                Zertifizierungen & Normen
              </h2>
              <div className="certs-grid">
                {certifications.map((c) => (
                  <div key={c.name} className="cert-card">
                    <h4>{c.name}</h4>
                    <p>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Randack Group */}
      <section className="section" id="gruppe">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <span className="section-label">Randack Group</span>
            <h2 className="section-title">Ein starker Verbund — weltweit</h2>
            <p
              className="section-subtitle"
              style={{ margin: "0 auto" }}
            >
              Zuverlässigkeit, Kundenzufriedenheit, Flexibilität, Innovation,
              Personalentwicklung und Professionalität — unsere
              Unternehmensphilosophie.
            </p>
          </div>

          <div className="group-grid">
            {subsidiaries.map((s) => (
              <div key={s.name} className="group-card">
                <div className="group-card-logo">
                  {s.logo ? (
                    <Image
                      src={s.logo}
                      alt={s.name}
                      width={150}
                      height={50}
                      style={{
                        maxHeight: 50,
                        width: "auto",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    <span style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "var(--rs-blue)",
                      fontFamily: "var(--font-heading), var(--font-sans), sans-serif",
                      letterSpacing: "0.05em",
                    }}>
                      {s.abbr}
                    </span>
                  )}
                </div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <div className="location">{s.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>
            Fragen Sie Ihren Bedarf an Spezialschrauben an!
          </h2>
          <p>
            Sie erhalten innerhalb eines Tages unsere Antwort — ob nach Normen
            oder nach Ihren Zeichnungen.
          </p>
          <Link href="/kontakt" className="btn-primary-white">
            Jetzt Anfrage stellen
          </Link>
        </div>
      </section>

      {/* Image Strip */}
      <div className="image-strip">
        <Image
          src="/images/bildstreifen-home-2.jpg"
          alt="Produktion"
          width={400}
          height={200}
          style={{ flex: 1, minWidth: 0, objectFit: "cover", height: 200 }}
        />
        <Image
          src="/images/bildstreifen-herstellung-1.jpg"
          alt="Herstellung"
          width={400}
          height={200}
          style={{ flex: 1, minWidth: 0, objectFit: "cover", height: 200 }}
        />
        <Image
          src="/images/bildstreifen-qualitaet-1.jpg"
          alt="Qualität"
          width={400}
          height={200}
          style={{ flex: 1, minWidth: 0, objectFit: "cover", height: 200 }}
        />
        <Image
          src="/images/bildstreifen-lieferprogramm-1.jpg"
          alt="Lieferprogramm"
          width={400}
          height={200}
          style={{ flex: 1, minWidth: 0, objectFit: "cover", height: 200 }}
        />
      </div>
    </>
  );
}
