import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Qualität | Randack Spezialschrauben",
  description:
    "Qualitätsmanagementsystem gemäß EN ISO 9001:2015 — zerstörende und zerstörungsfreie Prüfung, akkreditierte Laborüberprüfung.",
};

const certifications = [
  { name: "EN ISO 9001:2015", desc: "Qualitätsmanagementsystem" },
  { name: "AD-Merkblatt 2000 W0", desc: "Druckgeräte-Werkstoffe" },
  { name: "VDTÜV 1253/1", desc: "TÜV Zulassung" },
  {
    name: "Druckgeräterichtlinie 2014/68/EU",
    desc: "EU-Richtlinie für Druckgeräte",
  },
  { name: "KTA 1401", desc: "Kerntechnik-Zulassung (PreussenElektra)" },
  { name: "ISO 14001:2015", desc: "Umweltmanagement" },
  { name: "DIN EN 15048-1:2007", desc: "Garnituren für nicht planmäßig vorgespannte Schraubenverbindungen" },
  { name: "BV MODE II SCHEME", desc: "Bureau Veritas Zulassung" },
  { name: "DNVGL", desc: "Approval of Manufacturer" },
  {
    name: "EN 10204",
    desc: "Prüfbescheinigungen 2.1, 2.2, 3.1, 3.2",
  },
];

const inspections = [
  "Magnetpulverrissprüfung",
  "Konturenmessgerät",
  "Härteprüfgerät",
  "Zugprüfmaschine",
  "US Prüfgerät",
  "Werkselbstprüfung",
  "Produktverschraubung",
  "Optisches Messgerät",
  "Analysegerät",
];

export default function QualitaetPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ height: "60vh", minHeight: 400 }}>
        <div className="hero-bg">
          <Image
            src="/images/bildstreifen-qualitaet-1.jpg"
            alt="Qualität"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">Qualität</div>
          <h1>Qualität mit Sicherheit</h1>
          <p>
            Unser Qualitätsmanagementsystem gemäß EN ISO 9001:2015 gewährleistet
            hohe und gleichbleibende Produktqualität.
          </p>
        </div>
      </section>

      {/* Quality Process */}
      <section className="section">
        <div className="container">
          <span className="section-label">Prüfverfahren</span>
          <h2 className="section-title">
            Zerstörende und zerstörungsfreie Prüfung
          </h2>
          <p className="section-subtitle">
            Von der Fertigbarkeitsanalyse über DIN-Normen-Prüfung bis zur
            unabhängigen akkreditierten Laborüberprüfung.
          </p>
          <div className="features-grid" style={{ marginTop: "2rem" }}>
            {inspections.slice(0, 6).map((item) => (
              <div key={item} className="feature-card">
                <h3>{item}</h3>
                <p>
                  Modernste Prüftechnik für höchste Sicherheitsanforderungen
                  unserer Kunden.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Gallery */}
      <section className="section section-gray">
        <div className="container">
          <span className="section-label">Labor & Prüfung</span>
          <h2 className="section-title">Einblicke in unsere Qualitätssicherung</h2>
          <div className="products-grid" style={{ marginTop: "2rem" }}>
            {[1, 2, 3, 5, 6, 7].map((n) => (
              <div key={n} className="product-card">
                <Image
                  src={`/images/qualitaet-0${n}.jpg`}
                  alt={`Qualität ${n}`}
                  width={400}
                  height={300}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <span className="section-label">Zertifizierungen</span>
            <h2 className="section-title">
              Wir verbinden Qualität mit Sicherheit
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Unsere Zertifizierungen und Zulassungen decken die
              anspruchsvollsten Branchen ab.
            </p>
          </div>
          <div
            className="certs-grid"
            style={{ gridTemplateColumns: "repeat(5, 1fr)", marginTop: "3rem" }}
          >
            {certifications.map((c) => (
              <div key={c.name} className="cert-card">
                <h4>{c.name}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Image
              src="/images/qualitaet-mit-sicherheit-zertifikate.png"
              alt="Zertifikate Übersicht"
              width={600}
              height={200}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Hier vertraut man uns</h2>
          <p>
            Kontaktieren Sie uns für Ihre qualitätskritischen
            Verbindungselemente.
          </p>
          <Link href="/kontakt" className="btn-primary" style={{ background: "#fff", color: "var(--rs-blue)" }}>
            Anfrage stellen
          </Link>
        </div>
      </section>
    </>
  );
}
