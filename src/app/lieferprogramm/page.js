import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Lieferprogramm | Randack Spezialschrauben",
  description:
    "Schrauben, Sonderschrauben, Muttern, Drehteile und Verbindungselemente nach nationalen und internationalen Standards.",
};

const categories = [
  {
    id: "warmformteile",
    title: "Warmform- & Schmiedeteile",
    desc: "Kontrollierte Warmumformung für optimalen Faserverlauf. Schmiedeteile in allen Gütegrade und Werkstoffen.",
    images: [
      "warmformteile-schmiedeteile-01.jpg",
      "warmformteile-schmiedeteile-03.jpg",
      "sonderschrauben-04-warmformteile-05.jpg",
      "sonderschrauben-05-warmformteile-06.jpg",
    ],
  },
  {
    id: "schraubenbolzen",
    title: "Schraubenbolzen",
    desc: "Schraubenbolzen mit gerolltem Gewinde bis M180 und Längen bis 6.000 mm nach nationalen und internationalen Normen.",
    images: [
      "schraubenbolzen-01.jpg",
      "schraubenbolzen-03.jpg",
      "schraubenbolzen-04.jpg",
      "schraubenbolzen-05.jpg",
    ],
  },
  {
    id: "kaltfliesspressteile",
    title: "Kaltfließpressteile",
    desc: "Nietbolzen, Einpressteile, Muttern, Buchsen und Bolzen in Mehrstufentechnik und Doppeldruck-Verfahren.",
    images: [
      "kaltfliesspressteile-sonstige-01.jpg",
      "kaltfliesspressteile-doppeldruck-01.jpg",
      "kaltfliesspressteile-muttern-buchsen-01.jpg",
      "kaltfliesspressteile-nietbolzen-01.jpg",
    ],
  },
  {
    id: "drehteile",
    title: "Drehteile",
    desc: "Drehteile aus Aluminium und Stahl: Flansche, Buchsen, Muttern, Trapezgewindehülsen, Frästeile mit Verzahnung.",
    images: [
      "drehteile-aluminium-stahl-01.jpg",
      "drehteile-aluminium-stahl-03.jpg",
      "drehteile-fraesteile-01.jpg",
      "drehteile-fraesteile-03.jpg",
    ],
  },
  {
    id: "baugruppen",
    title: "Baugruppen",
    desc: "Gepresste und geschweißte Baugruppen nach Kundenzeichnung — komplett montiert und geprüft.",
    images: [
      "baugruppen-gepresst-geschweisst-01.jpg",
      "baugruppen-gepresst-geschweisst-02.jpg",
      "baugruppen-gepresst-geschweisst-03.jpg",
      "baugruppen-gepresst-geschweisst-04.jpg",
    ],
  },
  {
    id: "achsen",
    title: "Achsen, Wellen & Dehnschrauben",
    desc: "Mit Passmaßen im Mikrometer-Bereich — höchste Präzision für anspruchsvolle Anwendungen.",
    images: [
      "achsen-wellen-dehnschrauben-01.jpg",
      "achsen-wellen-dehnschrauben-02.jpg",
    ],
  },
];

const specs = [
  {
    title: "Größen",
    items: "Schrauben, Muttern und Drehteile bis M180. Schraubenbolzen bis 6.000 mm Länge.",
  },
  {
    title: "Güteklassen",
    items: "Gemäß DIN EN ISO 898-1 — 5.6 bis 14.9",
  },
  {
    title: "Stahlwerkstoffe",
    items: "Hochlegierte Vergütungsstähle gemäß DIN EN10083 (34CrNiMo6, 30CrMoV9)",
  },
  {
    title: "Rostfreie Werkstoffe",
    items: "1.4571, 1.4057, 1.7258, 1.7709, 1.7711, 1.4913, 1.4923, 1.4828",
  },
  {
    title: "ASTM/ASME",
    items: "A193 Gr. B7/B7M/B16/B8, A194 2H/4/7/8, A320 L7/L7M",
  },
  {
    title: "Sonderwerkstoffe",
    items: "Inconel, Nimonic, Titan, Hastelloy und weitere NE-Metalle",
  },
];

export default function LieferprogrammPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ height: "60vh", minHeight: 400 }}>
        <div className="hero-bg">
          <Image
            src="/images/bildstreifen-lieferprogramm-1.jpg"
            alt="Lieferprogramm"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">Produkte</div>
          <h1>Unser Lieferprogramm</h1>
          <p>
            SERVICE wird bei uns groß geschrieben. Schrauben, Muttern, Drehteile
            und Verbindungselemente nach nationalen und internationalen
            Standards, sowie Ihren Zeichnungen und Vorgaben.
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`section ${idx % 2 === 1 ? "section-gray" : ""}`}
        >
          <div className="container">
            <span className="section-label">{cat.title}</span>
            <h2 className="section-title">{cat.title}</h2>
            <p className="section-subtitle">{cat.desc}</p>
            <div
              className="products-grid"
              style={{
                gridTemplateColumns: cat.images.length <= 2 ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(280px, 1fr))",
                marginTop: "2rem",
              }}
            >
              {cat.images.map((img) => (
                <div key={img} className="product-card">
                  <Image
                    src={`/images/${img}`}
                    alt={cat.title}
                    width={400}
                    height={300}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Technical Specs */}
      <section className="section section-dark">
        <div className="container">
          <span className="section-label">Technische Daten</span>
          <h2 className="section-title">Werkstoffe & Spezifikationen</h2>
          <p className="section-subtitle">
            Neben den üblichen Vergütungsstählen verarbeiten wir eine Vielzahl
            von hochlegierten Sonderstählen und anderen Werkstoffen.
          </p>
          <div className="specs-grid">
            {specs.map((s) => (
              <div key={s.title} className="spec-item">
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Benötigen Sie spezielle Verbindungselemente?</h2>
          <p>
            Fragen Sie Ihren Bedarf an — Sie erhalten innerhalb eines Tages
            unsere Antwort.
          </p>
          <Link href="/kontakt" className="btn-primary-white">
            Jetzt anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
