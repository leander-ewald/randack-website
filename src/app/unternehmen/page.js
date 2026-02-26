import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Unternehmen | Randack Group",
  description:
    "Die Randack Group — RS Randack Spezialschrauben, Randack Automotive, RFI Randack Fasteners India, RFA Randack Fasteners Americas.",
};

const companies = [
  {
    name: "RS Randack Spezialschrauben GmbH",
    subtitle: "Hochwertige, abnahmepflichtige Schrauben und Verbindungselemente",
    text: "RS ist das Herkunftszeichen, das unsere Produkte tragen — es bürgt für Qualität und Präzision. Das mittelständische Unternehmen betont über 60 Jahre Erfahrung in der Herstellung abnahmepflichtiger Spezialschrauben, Schnelligkeit und Flexibilität. Ersatzteile auf Wunsch innerhalb von 24 Stunden.",
    location: "Delsterner Straße 148 E, D-58091 Hagen",
    img: "/images/bildstreifen-spezialschrauben-standort-hagen-01.jpg",
    logo: "/images/logo-rs-randack-spezialschrauben-gmbh.gif",
  },
  {
    name: "Randack Automotive GmbH",
    subtitle: "Schrauben, Bolzen und Zubehör für den Fahrzeugbau",
    text: "Ergänzend zu den Aktivitäten im Bereich der Herstellung von Spezialschrauben bieten wir über unsere Tochterfirma die Möglichkeit, Artikel aus Fremdherstellung in der gewohnten RS-Qualität zu beziehen. Prototypen, Nullserien und Klein-/Mittelserien mit PPAP.",
    location: "Hagen, Deutschland",
    img: "/images/automotive-produkte-01.jpg",
    logo: "/images/logo-rs-randack-automotive-gmbh.gif",
  },
  {
    name: "RFI Randack Fasteners India",
    subtitle: "We keep them turning",
    text: "Spezialisierung auf Verbindungselemente für Windkraftanwendungen. Standort in Pune, Indien — strategisch positioniert für den asiatischen Markt.",
    location: "Pirangut, Pune 412108, India",
    img: "/images/bildstreifen-randack-fasteners-india-01.jpg",
    logo: null,
  },
  {
    name: "RFA Randack Fasteners Americas, Inc.",
    subtitle: "Service is our strength!",
    text: "Tower bolts, blade connectors, studs, barrel nuts, washers, nacelle bolting, foundation studs. Hot forged fasteners bis M100 mit allen Beschichtungen. In-house DELTA-MKS spray coating line.",
    location: "2014 S. Houston Ave., Humble, TX 77396, USA",
    img: "/images/bildstreifen-randack-fasteners-americas-01.jpg",
    logo: null,
  },
];

export default function UnternehmenPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ height: "60vh", minHeight: 400 }}>
        <div className="hero-bg">
          <Image
            src="/images/bildstreifen-spezialschrauben-standort-hagen-01.jpg"
            alt="Standort Hagen"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">Randack Group</div>
          <h1>Ein starker Verbund — weltweit</h1>
          <p>
            Zuverlässigkeit, Kundenzufriedenheit, Flexibilität, Innovation,
            Personalentwicklung und Professionalität.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
            <span className="section-label">Philosophie</span>
            <h2 className="section-title">Seit 1934 Ihr Partner</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#555" }}>
              Die Randack Group ist seit über 90 Jahren Ihr verlässlicher Partner
              für hochwertige Verbindungselemente. Mit vier Unternehmen auf drei
              Kontinenten sind wir weltweit für Sie da.
            </p>
          </div>
        </div>
      </section>

      {/* Companies */}
      {companies.map((co, idx) => (
        <section
          key={co.name}
          className={`section ${idx % 2 === 0 ? "section-gray" : ""}`}
        >
          <div className="container">
            <div
              className="about-grid"
              style={{
                direction: idx % 2 === 1 ? "rtl" : "ltr",
              }}
            >
              <div className="about-image">
                <Image
                  src={co.img}
                  alt={co.name}
                  width={640}
                  height={480}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="about-text" style={{ direction: "ltr" }}>
                {co.logo && (
                  <Image
                    src={co.logo}
                    alt={co.name}
                    width={200}
                    height={60}
                    style={{ height: 50, width: "auto", marginBottom: "1rem" }}
                  />
                )}
                <h3 style={{ color: "var(--rs-blue)" }}>{co.name}</h3>
                <p style={{ fontStyle: "italic", fontWeight: 500, color: "#333" }}>
                  {co.subtitle}
                </p>
                <p>{co.text}</p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--rs-blue)",
                    marginTop: "0.5rem",
                  }}
                >
                  {co.location}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Management */}
      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">Geschäftsführung</span>
          <h2 className="section-title">
            Vertretungsberechtigte Geschäftsführer
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "3rem",
              marginTop: "2rem",
              flexWrap: "wrap",
            }}
          >
            {[
              "Dipl.-Ing. Andreas Kuhn",
              "Oliver Skrzypczak",
              "Martin Marscheider",
            ].map((name) => (
              <div
                key={name}
                style={{
                  padding: "1.5rem 2.5rem",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 8,
                }}
              >
                <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>{name}</div>
                <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", marginTop: "0.3rem" }}>
                  Geschäftsführer
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Werden Sie Teil der Randack Group</h2>
          <p>Kontaktieren Sie uns — wir freuen uns auf die Zusammenarbeit.</p>
          <Link href="/kontakt" className="btn-primary" style={{ background: "#fff", color: "var(--rs-blue)" }}>
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
