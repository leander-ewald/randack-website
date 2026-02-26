import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Herstellung | Randack Spezialschrauben",
  description:
    "Herstellung von Sonderschrauben und Spezialschrauben — Warmumformung, Drehen, Fräsen, Schleifen, Gewindewalzen.",
};

const processes = [
  {
    title: "Warmumformung",
    desc: "Kontrollierte Warmumformung für optimalen Faserverlauf und höchste Festigkeitswerte",
  },
  { title: "Drehen", desc: "Präzisionsdrehteile in allen Werkstoffen und Abmessungen" },
  { title: "Fräsen", desc: "Komplexe Geometrien und Konturen nach Kundenzeichnung" },
  { title: "Schleifen", desc: "Höchste Oberflächengüte und Passgenauigkeit im μm-Bereich" },
  {
    title: "Mehrkantdrehfräsen",
    desc: "Kombinierte Bearbeitung für wirtschaftliche Fertigung",
  },
  {
    title: "Gewindewalzen",
    desc: "Spanlose Gewindeherstellung für optimale Gewindefestigkeit",
  },
];

const treatments = [
  "Vergüten",
  "Nitrieren",
  "Induktivhärten",
  "Galvanische Verzinkung",
  "Phosphatierung",
  "Feuerverzinkung",
  "Dacromet- und Delta-MKS Beschichtung",
  "Vernickeln",
  "PTFE-Beschichtung",
  "Molykotisieren",
  "MK-Gewindesicherung",
];

export default function HerstellungPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="hero"
        style={{ height: "60vh", minHeight: 400 }}
      >
        <div className="hero-bg">
          <Image
            src="/images/bildstreifen-herstellung-1.jpg"
            alt="Herstellung"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">Fertigung</div>
          <h1>Herstellung von Sonderschrauben und Spezialschrauben</h1>
          <p>
            Modernste Fertigungsverfahren, gut ausgebildete Mitarbeiter und
            kontinuierliche Investitionen in unseren Maschinenpark.
          </p>
        </div>
      </section>

      {/* Processes */}
      <section className="section">
        <div className="container">
          <span className="section-label">Fertigungsverfahren</span>
          <h2 className="section-title">
            Von der Warmumformung bis zum Gewindewalzen
          </h2>
          <p className="section-subtitle">
            Die Herstellung umfasst Warmumformung durch alle spanenden
            Fertigungsverfahren bis zur spanlosen Gewindeherstellung.
          </p>
          <div className="features-grid">
            {processes.map((p) => (
              <div key={p.title} className="feature-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Gallery */}
      <section className="section section-gray">
        <div className="container">
          <span className="section-label">Produktion</span>
          <h2 className="section-title">Einblicke in unsere Fertigung</h2>
          <div className="products-grid" style={{ marginTop: "2rem" }}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="product-card">
                <Image
                  src={`/images/produktion-0${n}.jpg`}
                  alt={`Produktion ${n}`}
                  width={400}
                  height={300}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="section section-dark">
        <div className="container">
          <span className="section-label">Veredelung</span>
          <h2 className="section-title">
            Wärmebehandlung & Oberflächenveredelung
          </h2>
          <p className="section-subtitle">
            Durch Einbindung qualifizierter und zertifizierter Unterlieferanten
            bieten wir alle gängigen Verfahren an.
          </p>
          <div className="industries-list" style={{ marginTop: "2rem" }}>
            {treatments.map((t) => (
              <span key={t} className="industry-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Projektbezogene Fertigung — gemeinsam mit Ihnen</h2>
          <p>
            Fertigungsfolge und Prüfpläne werden häufig gemeinsam mit dem Kunden
            erarbeitet.
          </p>
          <Link href="/kontakt" className="btn-primary-white">
            Jetzt Anfrage stellen
          </Link>
        </div>
      </section>
    </>
  );
}
